#!/usr/bin/env python3
"""Check release archives for local paths, private files, and common secrets.

This is a release guard, not a claim to recognize every possible secret.
Findings identify a file and category without printing matching values.
"""
from __future__ import annotations
import argparse
import hashlib
import json
import lzma
from pathlib import Path, PurePosixPath
import re
import stat
import struct
import zipfile
import zlib

PRIVATE_PARTS = {'.git', '.codex', '.agents', '.ssh', '.aws', '.azure', '.config',
                 'node_modules', '__pycache__', 'saves', 'browser-profile', 'user-data'}
PRIVATE_NAMES = {'id_rsa', 'id_ed25519', 'credentials', 'credentials.json',
                 'cookies.txt', 'cookies.json', 'storage-state.json', '.npmrc', '.pypirc',
                 'profiles.json', 'profiles.json.bak', 'save.json', 'savegame.json'}
PRIVATE_SUFFIXES = {'.pem', '.key', '.p12', '.pfx', '.sqlite', '.sqlite3', '.db', '.pyc', '.log', '.bak'}
RULES = [
    ('home-directory path', rb'/(?:home|Users)/[A-Za-z0-9_.-]+(?:/|\\/|\\\\|\b)'),
    ('Windows user-directory path', rb'[A-Z]:[\\/]+(?:Users|Documents and Settings)[\\/]+[^\\/\r\n"<>]+'),
    ('local file URL', rb'file:///(?:[A-Z]:|home/|Users/)'),
    ('clipboard attachment', rb'codex-clipboard-[a-f0-9-]{20,}'),
    ('private key', rb'-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----'),
    ('GitHub credential', rb'\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,})\b'),
    ('cloud access key', rb'\b(?:AKIA|ASIA)[A-Z0-9]{16}\b'),
    ('service credential', rb'\b(?:sk_live_[A-Za-z0-9]{16,}|xox[baprs]-[A-Za-z0-9-]{20,})\b'),
    ('credential in URL', rb'https?://[^\s/:"<>]{1,100}:[^\s/@"<>]{3,100}@'),
]
COMPILED = [(category, re.compile(pattern, re.I if 'key' not in category else 0)) for category, pattern in RULES]


def private_filename(name: str) -> bool:
    path = PurePosixPath(name)
    parts = {p.lower() for p in path.parts}
    return (bool(parts & PRIVATE_PARTS) or path.name.lower() in PRIVATE_NAMES
            or path.name.lower().startswith('.env') or path.suffix.lower() in PRIVATE_SUFFIXES)


def expanded_payloads(data: bytes):
    """Inspect recovered SWF strings and compressed PNG textual metadata too."""
    yield data
    if data.startswith(b'CWS'):
        yield zlib.decompress(data[8:])
    elif data.startswith(b'ZWS'):
        # SWF uses LZMA properties plus raw data, without the usual size header.
        size = struct.unpack('<I', data[4:8])[0] - 8
        yield lzma.decompress(data[12:17] + struct.pack('<Q', size) + data[17:], format=lzma.FORMAT_ALONE)
    elif data.startswith(b'\x89PNG\r\n\x1a\n'):
        offset = 8
        while offset + 12 <= len(data):
            length = struct.unpack('>I', data[offset:offset+4])[0]
            kind = data[offset+4:offset+8]
            chunk = data[offset+8:offset+8+length]
            if kind == b'zTXt':
                _, compressed = chunk.split(b'\0', 1)
                yield zlib.decompress(compressed[1:])
            elif kind == b'iTXt':
                _, rest = chunk.split(b'\0', 1)
                flag, method = rest[:2]
                _, rest = rest[2:].split(b'\0', 1)
                _, text = rest.split(b'\0', 1)
                yield zlib.decompress(text) if flag else text
            offset += length + 12


def inspect_bytes(name: str, data: bytes, forbidden=()):
    findings = set()
    if private_filename(name):
        findings.add('private or generated local file')
    try:
        for payload in expanded_payloads(data):
            # Null removal also exposes UTF-16/32-encoded metadata strings.
            variants = [payload, payload.replace(b'\0', b'')] if b'\0' in payload else [payload]
            for value in variants:
                for category, pattern in COMPILED:
                    if pattern.search(value):
                        findings.add(category)
                for term in forbidden:
                    if term and re.search(rb'(?<![A-Za-z0-9_])' + re.escape(term.encode()) + rb'(?![A-Za-z0-9_])', value, re.I):
                        findings.add('forbidden personal identifier')
    except (ValueError, IndexError, struct.error, zlib.error, lzma.LZMAError):
        findings.add('unreadable compressed metadata')
    return [{'file': name, 'category': category} for category in sorted(findings)]


def inspect_archive(path: Path, forbidden=()):
    findings = []
    with zipfile.ZipFile(path) as archive:
        if archive.comment:
            findings.append({'file': '<archive>', 'category': 'archive comment requires review'})
        entries = archive.infolist()
        for entry in entries:
            name = entry.filename
            parts = PurePosixPath(name).parts
            if name.startswith(('/', '\\')) or '..' in parts or re.match(r'^[A-Za-z]:', name):
                findings.append({'file': name, 'category': 'absolute or traversing archive entry'})
            if stat.S_ISLNK(entry.external_attr >> 16):
                findings.append({'file': name, 'category': 'symbolic link'})
            if entry.extra or entry.comment:
                findings.append({'file': name, 'category': 'extra archive metadata requires review'})
            if not entry.is_dir():
                findings.extend(inspect_bytes(name, archive.read(entry), forbidden))
        corrupt = archive.testzip()
        if corrupt:
            findings.append({'file': corrupt, 'category': 'ZIP checksum failure'})
    return {'archive': path.name, 'filesChecked': len(entries),
            'sha256': hashlib.sha256(path.read_bytes()).hexdigest(), 'findings': findings}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('archives', type=Path, nargs='+')
    parser.add_argument('--forbid-text', action='append', default=[], help='Additional personal name or identifier to reject; values are never printed.')
    parser.add_argument('--report', type=Path, help='Optional JSON report destination.')
    args = parser.parse_args()
    result = {'scope': 'Archive entries, raw bytes, UTF metadata, decompressed SWF and PNG text; common secret patterns and local paths.',
              'archives': [inspect_archive(path, args.forbid_text) for path in args.archives]}
    output = json.dumps(result, indent=2) + '\n'
    if args.report:
        args.report.write_text(output)
    print(output, end='')
    raise SystemExit(1 if any(item['findings'] for item in result['archives']) else 0)

if __name__ == '__main__':
    main()

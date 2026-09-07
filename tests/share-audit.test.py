import importlib.util
import lzma
from pathlib import Path
import struct
import tempfile
import unittest
import zipfile
import zlib

spec = importlib.util.spec_from_file_location('share_audit', Path(__file__).resolve().parents[1] / 'tools/audit-share.py')
audit = importlib.util.module_from_spec(spec)
spec.loader.exec_module(audit)

class ShareAuditTests(unittest.TestCase):
    def test_paths_and_credentials_are_reported_without_values(self):
        personal = '/'.join(['', 'home', 'private-person', 'project', 'entry.js'])
        secret = 'gh' + 'p_' + 'x' * 36
        data = (personal + '\n' + secret).encode()
        findings = audit.inspect_bytes('source.js', data)
        self.assertEqual({f['category'] for f in findings}, {'home-directory path', 'GitHub credential'})
        self.assertNotIn('private-person', str(findings))
        self.assertNotIn(secret, str(findings))
        self.assertTrue(audit.inspect_bytes('source.js', personal.encode('utf-16le')))

    def test_compressed_swf_and_png_text_are_inspected(self):
        content = '/'.join(['', 'Users', 'private-person', 'Documents']).encode()
        packed = lzma.compress(content, format=lzma.FORMAT_ALONE)
        swf = b'ZWS' + bytes([13]) + struct.pack('<I', len(content)+8) + struct.pack('<I', len(packed)-8) + packed[:5] + packed[13:]
        self.assertTrue(audit.inspect_bytes('recovered.bin', swf))
        compressed = b'Comment\0\0' + zlib.compress(content)
        chunk = struct.pack('>I', len(compressed)) + b'zTXt' + compressed + b'\0'*4
        self.assertTrue(audit.inspect_bytes('image.png', b'\x89PNG\r\n\x1a\n' + chunk))

    def test_private_files_and_unsafe_archive_entries_are_rejected(self):
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / 'release.zip'
            with zipfile.ZipFile(path, 'w') as archive:
                archive.writestr('phaser-port/saves/profiles.json', '{}')
                archive.writestr('../escaped.txt', 'unsafe')
                archive.writestr('phaser-port/.env', 'PRIVATE=present')
            result = audit.inspect_archive(path)
            self.assertEqual(len(result['findings']), 3)

    def test_public_attribution_and_relative_paths_are_allowed(self):
        content = b'assets/sprite.png https://phaser.io API request /api/profiles'
        self.assertEqual(audit.inspect_bytes('docs/LICENSE.md', content), [])
        self.assertTrue(audit.inspect_bytes('source.js', b'Secret synthetic-person marker', ['synthetic-person']))

if __name__ == '__main__':
    unittest.main()

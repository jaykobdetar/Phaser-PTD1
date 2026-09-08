"""Loopback-only profile persistence. No dependencies or external game services."""
import json
import os
from pathlib import Path
import threading
from contextlib import contextmanager
from http.server import SimpleHTTPRequestHandler


class GameHandler(SimpleHTTPRequestHandler):
    save_folder = None
    save_lock = threading.Lock()

    def log_request(self, code='-', size='-'):
        if str(code) not in ('200', '304'):
            super().log_request(code, size)

    def json_response(self, status, payload):
        body = json.dumps(payload, separators=(',', ':')).encode()
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Cache-Control', 'no-store')
        self.end_headers()
        self.wfile.write(body)

    def allowed_origin(self):
        expected = f'127.0.0.1:{self.server.server_port}'
        return self.headers.get('Host') in (expected, f'localhost:{self.server.server_port}') and self.headers.get('Origin', f'http://{expected}') in (f'http://{expected}', f'http://localhost:{self.server.server_port}')

    def read_profiles(self):
        path = Path(self.save_folder) / 'profiles.json'
        if not path.exists():
            return {'revision': 0, 'bank': None}
        return json.loads(path.read_text(encoding='utf-8'))

    @contextmanager
    def profile_lock(self):
        # Different launcher ports can share a save folder. The thread mutex
        # protects requests in this process; the OS lock also protects other
        # launcher processes and is released automatically if one exits.
        with self.save_lock:
            folder = Path(self.save_folder)
            folder.mkdir(parents=True, exist_ok=True)
            with (folder / '.profiles.lock').open('a+b') as lock:
                if os.name == 'nt':
                    import msvcrt
                    if not lock.seek(0, os.SEEK_END):
                        lock.write(b'\0')
                        lock.flush()
                    lock.seek(0)
                    msvcrt.locking(lock.fileno(), msvcrt.LK_LOCK, 1)
                    try:
                        yield
                    finally:
                        lock.seek(0)
                        msvcrt.locking(lock.fileno(), msvcrt.LK_UNLCK, 1)
                else:
                    import fcntl
                    fcntl.flock(lock.fileno(), fcntl.LOCK_EX)
                    try:
                        yield
                    finally:
                        fcntl.flock(lock.fileno(), fcntl.LOCK_UN)

    def do_GET(self):
        if self.path.split('?')[0] != '/api/profiles':
            return super().do_GET()
        if not self.allowed_origin():
            return self.json_response(403, {'error': 'Local origin required.'})
        try:
            with self.profile_lock():
                result = self.read_profiles()
            self.json_response(200, result)
        except (OSError, ValueError):
            self.json_response(500, {'error': 'Could not read the disk save. Existing files were retained.'})

    def do_PUT(self):
        if self.path != '/api/profiles':
            return self.json_response(404, {'error': 'Unknown endpoint.'})
        if not self.allowed_origin():
            return self.json_response(403, {'error': 'Local origin required.'})
        try:
            size = int(self.headers.get('Content-Length', '0'))
            if not 0 < size <= 10_000_000:
                return self.json_response(413, {'error': 'Invalid save size.'})
            value = json.loads(self.rfile.read(size))
            bank = value['bank']
            if not isinstance(bank, dict) or bank.get('version') != 1 or not isinstance(bank.get('slots'), list) or len(bank['slots']) != 3 or bank.get('active') not in (0, 1, 2):
                raise ValueError('Invalid bank')
            for slot in bank['slots']:
                if slot is not None and (slot.get('version') != 2 or not isinstance(slot.get('pokemon'), list) or not 0 <= len(slot['pokemon']) <= 5000):
                    raise ValueError('Invalid profile')
            if 'center' in bank and (not isinstance(bank['center'], dict) or bank['center'].get('version') != 1):
                raise ValueError('Invalid Center data')
            if type(value.get('revision')) is not int or value['revision'] < 0:
                raise ValueError('Invalid revision')
            with self.profile_lock():
                previous = self.read_profiles()
                if value.get('revision') != previous['revision']:
                    return self.json_response(409, {'error': 'Disk profiles changed in another game window. Browser save retained.', 'revision': previous['revision']})
                if (previous.get('bank') or {}).get('center') is not None and 'center' not in bank:
                    raise ValueError('Existing Center data must be retained')
                result = {'revision': previous['revision'] + 1, 'bank': bank}
                serialized = json.dumps(result, ensure_ascii=False, separators=(',', ':'), allow_nan=False)
                folder = Path(self.save_folder)
                folder.mkdir(parents=True, exist_ok=True)
                path = folder / 'profiles.json'
                temp = folder / 'profiles.tmp'
                if path.exists():
                    backup = folder / 'profiles.previous.json'
                    backup.write_bytes(path.read_bytes())
                with temp.open('w', encoding='utf-8') as stream:
                    stream.write(serialized)
                    stream.flush()
                    os.fsync(stream.fileno())
                os.replace(temp, path)
            self.json_response(200, {'revision': result['revision']})
        except (ValueError, TypeError, KeyError, AttributeError):
            self.json_response(400, {'error': 'Invalid profile data.'})
        except OSError:
            self.json_response(500, {'error': 'Disk save failed. Browser save retained.'})

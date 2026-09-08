"""Exercise the real disk handler in independent launcher-like processes."""
import importlib.util
import io
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import time
from types import SimpleNamespace
import unittest


def wait_file(path):
    deadline = time.monotonic() + 10
    while not path.exists():
        if time.monotonic() >= deadline:
            raise RuntimeError('Disk concurrency test timed out')
        time.sleep(.01)


def worker(folder, number, hold):
    spec = importlib.util.spec_from_file_location('local_server', Path(__file__).resolve().parents[1] / 'local_server.py')
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    handler = object.__new__(module.GameHandler)
    handler.save_folder = folder
    handler.server = SimpleNamespace(server_port=8073 + number)
    handler.path = '/api/profiles'
    value = {'revision': 0, 'bank': {'version': 1, 'active': number, 'slots': [None, None, None]}}
    raw = json.dumps(value).encode()
    handler.headers = {'Content-Length': str(len(raw)), 'Host': f'127.0.0.1:{handler.server.server_port}'}
    handler.rfile = io.BytesIO(raw)
    read = handler.read_profiles

    def controlled_read():
        previous = read()
        (folder / f'read-{number}').touch()
        if hold:
            wait_file(folder / 'release')
        return previous

    handler.read_profiles = controlled_read
    handler.json_response = lambda status, payload: (folder / f'result-{number}.json').write_text(json.dumps({'status': status, 'payload': payload}))
    (folder / f'attempt-{number}').touch()
    handler.do_PUT()


class IndependentLaunchers(unittest.TestCase):
    def start_worker(self, folder, number, hold=False):
        return subprocess.Popen([sys.executable, __file__, '--worker', str(folder), str(number), str(int(hold))])

    def finish_workers(self, processes):
        for process in processes:
            if process.poll() is None:
                process.kill()
            process.wait(timeout=10)

    def test_shared_folder_has_one_cas_winner_across_processes(self):
        with tempfile.TemporaryDirectory() as temp:
            folder = Path(temp)
            processes = [self.start_worker(folder, 1, hold=True)]
            try:
                wait_file(folder / 'read-1')
                processes.append(self.start_worker(folder, 2))
                wait_file(folder / 'attempt-2')
                time.sleep(.15)
                self.assertFalse((folder / 'read-2').exists(), 'The other process entered the locked bank read')
                # The second process has attempted the handler while the first
                # still owns the bank at revision zero. Releasing the first must
                # make the second read revision one and reject its stale intent.
                (folder / 'release').touch()
                for process in processes:
                    self.assertEqual(process.wait(timeout=10), 0)
                first = json.loads((folder / 'result-1.json').read_text())
                second = json.loads((folder / 'result-2.json').read_text())
                self.assertEqual((first['status'], second['status']), (200, 409))
                final = json.loads((folder / 'profiles.json').read_text())
                self.assertEqual(final, {'revision': 1, 'bank': {'version': 1, 'active': 1, 'slots': [None, None, None]}})
                self.assertTrue((folder / '.profiles.lock').exists())
            finally:
                self.finish_workers(processes)

    def test_process_exit_releases_lock_without_removing_lockfile(self):
        with tempfile.TemporaryDirectory() as temp:
            folder = Path(temp)
            processes = [self.start_worker(folder, 1, hold=True)]
            try:
                wait_file(folder / 'read-1')
                processes[0].kill()
                processes[0].wait(timeout=10)
                self.assertTrue((folder / '.profiles.lock').exists())
                processes.append(self.start_worker(folder, 2))
                self.assertEqual(processes[1].wait(timeout=10), 0)
                result = json.loads((folder / 'result-2.json').read_text())
                self.assertEqual(result['status'], 200)
                self.assertEqual(result['payload']['revision'], 1)
                self.assertEqual(json.loads((folder / 'profiles.json').read_text())['bank']['active'], 2)
            finally:
                self.finish_workers(processes)


if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == '--worker':
        worker(Path(sys.argv[2]), int(sys.argv[3]), bool(int(sys.argv[4])))
    else:
        unittest.main()

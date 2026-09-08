import importlib.util
import json
from pathlib import Path
import tempfile
import threading
import unittest
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor
from http.server import ThreadingHTTPServer

spec = importlib.util.spec_from_file_location('local_server', Path(__file__).resolve().parents[1] / 'local_server.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

class DiskSaves(unittest.TestCase):
    def test_atomic_revision_and_previous_backup(self):
        with tempfile.TemporaryDirectory() as folder:
            module.GameHandler.save_folder = Path(folder)
            server = ThreadingHTTPServer(('127.0.0.1', 0), module.GameHandler)
            thread = threading.Thread(target=server.serve_forever, daemon=True)
            thread.start()
            url = f'http://127.0.0.1:{server.server_port}/api/profiles'
            def put(value, origin=None):
                headers = {'Content-Type': 'application/json'}
                if origin: headers['Origin'] = origin
                request = urllib.request.Request(url, data=json.dumps(value).encode(), method='PUT', headers=headers)
                return json.loads(urllib.request.urlopen(request).read())
            try:
                self.assertEqual(json.loads(urllib.request.urlopen(url).read())['revision'], 0)
                bank = {'version': 1, 'active': 0, 'slots': [None, None, None]}
                self.assertEqual(put({'revision': 0, 'bank': bank})['revision'], 1)
                with self.assertRaises(urllib.error.HTTPError) as error:
                    put({'revision': 0, 'bank': bank})
                self.assertEqual(error.exception.code, 409)
                bank['active'] = 1
                self.assertEqual(put({'revision': 1, 'bank': bank})['revision'], 2)
                self.assertEqual(json.loads((Path(folder) / 'profiles.previous.json').read_text())['revision'], 1)
                self.assertEqual(json.loads((Path(folder) / 'profiles.json').read_text())['bank']['active'], 1)
                # The original release popup permits releasing the last owned
                # Pokémon; the six empty party slots must survive disk saving.
                bank['slots'][1] = {'version': 2, 'pokemon': [], 'party': [None] * 6}
                self.assertEqual(put({'revision': 2, 'bank': bank})['revision'], 3)
                restored = json.loads(urllib.request.urlopen(url).read())['bank']['slots'][1]
                self.assertEqual(restored['pokemon'], [])
                self.assertEqual(restored['party'], [None] * 6)
                bank['center'] = {'version': 1, 'history': ['initial']}
                self.assertEqual(put({'revision': 3, 'bank': bank})['revision'], 4)
                committed = json.loads((Path(folder) / 'profiles.json').read_text())
                # A compatibility client cannot drop Center escrow/history, and
                # malformed Center/revision values do not change either side.
                for invalid in [
                    {'revision': 4, 'bank': {key: value for key, value in bank.items() if key != 'center'}},
                    {'revision': 4, 'bank': {**bank, 'center': []}},
                    {'revision': 4, 'bank': {**bank, 'center': {'version': 1, 'history': [float('nan')]}}},
                    {'revision': 4.0, 'bank': bank},
                ]:
                    with self.assertRaises(urllib.error.HTTPError) as error:
                        put(invalid)
                    self.assertEqual(error.exception.code, 400)
                    self.assertEqual(json.loads((Path(folder) / 'profiles.json').read_text()), committed)
                def concurrent_write(label):
                    candidate = {**bank, 'center': {'version': 1, 'history': [label]}}
                    try:
                        return (200, put({'revision': 4, 'bank': candidate}))
                    except urllib.error.HTTPError as error:
                        return (error.code, None)
                with ThreadPoolExecutor(max_workers=2) as pool:
                    raced = list(pool.map(concurrent_write, ['accepted', 'cancelled']))
                self.assertEqual(sorted(status for status, _ in raced), [200, 409])
                final = json.loads((Path(folder) / 'profiles.json').read_text())
                self.assertEqual(final['revision'], 5)
                self.assertIn(final['bank']['center']['history'], [['accepted'], ['cancelled']])
                self.assertEqual(final['bank']['slots'][1]['pokemon'], [])
                self.assertEqual(json.loads((Path(folder) / 'profiles.previous.json').read_text()), committed)
                with self.assertRaises(urllib.error.HTTPError) as error:
                    put({'revision': 5, 'bank': bank}, 'https://example.com')
                self.assertEqual(error.exception.code, 403)
            finally:
                server.shutdown()
                server.server_close()
                thread.join()

if __name__ == '__main__': unittest.main()

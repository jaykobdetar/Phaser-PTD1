#!/usr/bin/env python3
"""Serve the bundled, offline Phaser game using only Python's standard library."""
import argparse
import functools
import http.server
from pathlib import Path
import sys
import threading
import webbrowser


from local_server import GameHandler


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8073)
    parser.add_argument('--no-browser', action='store_true')
    parser.add_argument('--save-dir', type=Path, help='Optional folder for portable disk profiles')
    args = parser.parse_args()
    folder = Path(__file__).resolve().parent / 'dist'
    if not (folder / 'index.html').is_file():
        sys.exit('The built game is missing. Run npm ci and npm run build first.')
    GameHandler.save_folder = args.save_dir.resolve() if args.save_dir else folder.parent / 'saves'
    handler = functools.partial(GameHandler, directory=str(folder))
    try:
        server = http.server.ThreadingHTTPServer(('127.0.0.1', args.port), handler)
    except OSError as error:
        sys.exit(f'Could not start on port {args.port}: {error}\nIf the game is already running, open http://127.0.0.1:{args.port}/')
    url = f'http://127.0.0.1:{server.server_port}/'
    print(f'Pokémon Tower Defense — Phaser 3\nOpen {url}\nKeep this terminal open. Press Ctrl+C to stop.\nUse the same browser and address to keep your local save.', flush=True)
    if not args.no_browser:
        threading.Timer(0.4, webbrowser.open, args=(url,)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nGame server stopped.')
    finally:
        server.server_close()


if __name__ == '__main__':
    main()

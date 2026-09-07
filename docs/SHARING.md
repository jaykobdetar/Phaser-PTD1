# Sharing this release

Share the verified `ptd-phaser-port.zip`, or a fresh extraction of it. The optional `ptd-recovered-source.zip` contains the original recovered game source and portable recovery/test helpers. `SHARE-AUDIT.json` beside the ZIPs records their SHA-256 hashes and the final archive scan results.

The distribution excludes saved profiles, backups, dependencies, Python caches, browser sessions, local configuration and workspace history. Playing the extracted game creates local save data, so use the original release ZIP when sharing again. Your existing installed folder and development workspace are outside the archive audit's scope.

Local account paths were removed from source-archive metadata and browser helpers. Runtime files resolve assets relative to the project; recovery dependencies and browser locations can be configured for the recipient's computer. ZIP entries use relative names and normalized timestamps, with no owner IDs, comments or extra metadata.

Checks cover archive contents and filenames, common credential formats, personal path patterns, decompressed SWF strings, and asset metadata. Packaged screenshots come from isolated test profiles. Public original-game and Phaser author/license attribution is retained. No private credentials or personal profile data were found in the audited archives; pattern scans cannot identify every conceivable secret.

To repeat the automated archive check using Python 3:

```sh
python3 tools/audit-share.py ptd-phaser-port.zip ptd-recovered-source.zip
python3 tests/share-audit.test.py
```

Supply the ZIP locations appropriate to your extraction layout. Add `--forbid-text` for any additional personal identifier you want checked. This option never prints the matching value. The script reports file names and finding categories and exits unsuccessfully if it finds a problem.

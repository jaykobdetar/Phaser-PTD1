// Explicit discovery works in Windows shells as well as POSIX shells. Exposing
// GC lets the real object-retirement regression run with the normal test suite.
import {readdirSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
process.chdir(fileURLToPath(new URL('../',import.meta.url)));
const files=readdirSync('tests').filter(name=>name.endsWith('.test.js')).sort().map(name=>'tests/'+name);
if(!files.length)throw new Error('No JavaScript tests found.');
const result=spawnSync(process.execPath,['--expose-gc','--test',...files],{stdio:'inherit'});
if(result.error)throw result.error;
process.exitCode=result.status??1;

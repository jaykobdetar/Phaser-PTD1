#!/usr/bin/env node
/** Install as tools/migrate-legacy-save.mjs in the Phaser port directory. */
import {readFile,writeFile,realpath,lstat} from 'node:fs/promises';
import {resolve,dirname,basename} from 'node:path';
import {pathToFileURL} from 'node:url';

export const HELP = `Convert a PTD local-server JSON save into a Phaser-port JSON backup.

Usage:
  node tools/migrate-legacy-save.mjs --pokemon FILE --output FILE [--account FILE] [--slot 1|2|3]

Options:
  --pokemon FILE  Required. Legacy *_pokemon_slotN.json Pokemon array.
  --account FILE  Optional. Matching *_account.json, to recover trainer, money and campaign progress.
  --slot N        Account slot 1, 2 or 3. Default: 1. Match the Pokemon file's slot.
  --output FILE   Required. New JSON backup path. Its parent directory must exist.
  --help          Print this help.

The input files are opened read-only. Existing files are never overwritten.
No server, login, network access or Flash installation is required.
`;

export function parseArguments(argv) {
  const values={slot:1};
  const allowed=new Set(['--pokemon','--account','--slot','--output']);
  for(let i=0;i<argv.length;i++) {
    const flag=argv[i];
    if(flag==='--help'||flag==='-h')return {help:true};
    if(!allowed.has(flag))throw new Error(`Unknown argument: ${flag}. Use --help for usage.`);
    const key=flag.slice(2);
    if(Object.hasOwn(values,key)&&key!=='slot')throw new Error(`Specify ${flag} only once.`);
    if(key==='slot'&&values._slotGiven)throw new Error('Specify --slot only once.');
    const value=argv[++i];
    if(!value||value.startsWith('--'))throw new Error(`Missing value for ${flag}.`);
    values[key]=value;
    if(key==='slot')values._slotGiven=true;
  }
  if(!values.pokemon||!values.output)throw new Error('--pokemon and --output are required. Use --help for usage.');
  if(!/^[123]$/.test(String(values.slot)))throw new Error('--slot must be 1, 2 or 3.');
  values.slot=Number(values.slot);delete values._slotGiven;
  return values;
}

async function readJSON(path,label) {
  let text;
  try{text=await readFile(path,'utf8');}catch(error){throw new Error(`Cannot read ${label}: ${error.message}`);}
  try{return JSON.parse(text.replace(/^\uFEFF/,''));}catch{throw new Error(`${label} is not valid JSON.`);}
}

export async function migrate(args) {
  const pokemonPath=await realpath(resolve(args.pokemon));
  const accountPath=args.account?await realpath(resolve(args.account)):null;
  const outputRequested=resolve(args.output);
  // Resolve its parent, so a symlinked directory cannot hide an input/output collision.
  const outputPath=resolve(await realpath(dirname(outputRequested)),basename(outputRequested));
  if(outputPath===pokemonPath||outputPath===accountPath)throw new Error('The output path must differ from both input save paths.');
  try {
    await lstat(outputPath);
    throw new Error('The output path already exists. Choose a new filename; existing files are never overwritten.');
  } catch(error) {
    if(error.code!=='ENOENT')throw error;
  }
  const [{importLegacySave},{validateSave}]=await Promise.all([
    import(new URL('../src/legacy-import.js',import.meta.url)),
    import(new URL('../src/model.js',import.meta.url)),
  ]);
  const [pokemon,account,data]=await Promise.all([
    readJSON(pokemonPath,'Pokemon save'),
    accountPath?readJSON(accountPath,'Account save'):Promise.resolve(null),
    readJSON(new URL('../public/data/game-data.json',import.meta.url),'Bundled game data'),
  ]);
  const {save,warnings}=importLegacySave(pokemon,data,{account,slot:args.slot});
  const validated=validateSave(save,data);
  // Exclusive creation also protects against a file appearing after the existence check.
  await writeFile(outputPath,JSON.stringify(validated,null,2)+'\n',{encoding:'utf8',flag:'wx',mode:0o600});
  return {outputPath,count:validated.pokemon.length,trainer:validated.trainer,warnings};
}

export async function main(argv=process.argv.slice(2)) {
  const args=parseArguments(argv);
  if(args.help){process.stdout.write(HELP);return;}
  const result=await migrate(args);
  process.stdout.write(`Migrated ${result.count} Pokemon to ${result.outputPath}\n`);
  for(const warning of result.warnings)process.stderr.write(`Migration note: ${warning}\n`);
  process.stdout.write('Open the Phaser game and use Import save to load this JSON backup.\n');
}

if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href) {
  main().catch(error=>{process.stderr.write(`Migration failed: ${error.message}\n`);process.exitCode=1;});
}

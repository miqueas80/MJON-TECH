// Compatibility snapshot for repositories whose Pages source remains main/root.
// Canonical sources live in src/ and scripts/generate.mjs, never in generated HTML.
import { readdirSync, readFileSync, writeFileSync, copyFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
const manifest='.pages-snapshot.json';
function files(directory,prefix=''){return readdirSync(directory,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?files(join(directory,entry.name),join(prefix,entry.name)):[join(prefix,entry.name)]);}
function safe(path){return !path.startsWith('.')||path==='.nojekyll';}
const next=files('dist').filter(p=>!p.endsWith('.map')&&safe(p));
const previous=existsSync(manifest)?JSON.parse(readFileSync(manifest,'utf8')):[];
for(const path of previous){if(path.includes('..')||resolve(path)===resolve('.'))throw Error('Invalid snapshot path');if(!next.includes(path))rmSync(path,{force:true});}
for(const path of next){mkdirSync(dirname(path),{recursive:true});copyFileSync(join('dist',path),path);}
writeFileSync(manifest,JSON.stringify(next,null,2)+'\n');
console.log(`Synchronized ${next.length} verified static files. Source files preserved.`);

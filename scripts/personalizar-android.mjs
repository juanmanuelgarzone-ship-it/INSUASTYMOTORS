import { cpSync, existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
const root=resolve(process.cwd());
const res=join(root,'android','app','src','main','res');
if (!existsSync(res)) throw new Error('Todavia no existe android/app/src/main/res');
const src=join(root,'resources','android');
for (const folder of readdirSync(src)) {
 const input=join(src,folder);const dest=join(res,folder);
 if (existsSync(dest)) cpSync(input,dest,{recursive:true,force:true});
}
const bgFile=join(res,'values','ic_launcher_background.xml');
if(existsSync(bgFile)){
  let str=readFileSync(bgFile,'utf8');
  str=str.replace(/<color name="ic_launcher_background">[^<]*<\/color>/,
    '<color name="ic_launcher_background">#061326</color>');
  writeFileSync(bgFile,str,'utf8');
}
console.log('Iconos Insuasty Motors incorporados a Android');

import { cpSync, copyFileSync, existsSync, mkdirSync, rmSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
const root = resolve(process.cwd());
const dir = join(root,'www');
if (!existsSync(join(root,'index.html'))) throw new Error('Falta index.html en la raiz');
if (!existsSync(join(root,'assets'))) throw new Error('Falta carpeta assets en la raiz');
rmSync(dir,{recursive:true,force:true}); mkdirSync(dir,{recursive:true});
copyFileSync(join(root,'index.html'),join(dir,'index.html'));
cpSync(join(root,'assets'),join(dir,'assets'),{recursive:true});
copyFileSync(join(root,'scripts','mobile-bridge.js'),join(dir,'mobile-bridge.js'));
// Solo la versión APK añade el puente; la versión web permanece sin cambios.
let html=readFileSync(join(dir,'index.html'),'utf8');
if (!html.includes('mobile-bridge.js')) html=html.replace('</body>','<script src="mobile-bridge.js"></script>\n</body>');
writeFileSync(join(dir,'index.html'),html,'utf8');
console.log('www/ lista:', 'index.html, assets/, mobile-bridge.js');

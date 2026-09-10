import {cp,mkdir,rm,readFile} from 'node:fs/promises';
const html=await readFile('index.html','utf8');
if(/PAPER_TITLE|AUTHOR_NAMES|YOUR_DOMAIN|Hippocampus|Lorem ipsum|href="#"/.test(html))throw Error('Unresolved template content');
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
for(const file of ['index.html','static','.nojekyll']) await cp(file,`dist/${file}`,{recursive:true});
console.log('Static build complete: dist/index.html');

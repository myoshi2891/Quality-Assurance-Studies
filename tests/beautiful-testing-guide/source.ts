import {existsSync, readFileSync} from 'node:fs';
export const html=readFileSync(existsSync('Beautiful-testing-guide.html')?'Beautiful-testing-guide.html':'archive/html-archive/books/Beautiful-testing-guide.html','utf8');
export const source=new DOMParser().parseFromString(html.replace(/<head>[\s\S]*?<\/head>/,'').replace(/<script(?! type="text\/plain")[\s\S]*?<\/script>/g,''),'text/html');
export const normalize=(text:string)=>text.replace(/\s+/g,'');
export function signature(element:Element){
 const clone=element.cloneNode(true) as Element;
 if(clone.matches('.mermaid-wrapper'))clone.replaceChildren();
 clone.querySelectorAll('.mermaid-wrapper').forEach(node=>node.replaceChildren());
 return [clone,...clone.querySelectorAll('*')].map(node=>({tag:node.tagName,
 attributes:[...node.attributes].filter(attr=>!attr.name.startsWith('aria-')&&!['role','tabindex'].includes(attr.name)).map(attr=>[attr.name,attr.name==='class'?attr.value.split(/\s+/).filter(value=>!['active','open','done','diagram-frame'].includes(value)).join(' '):attr.value]).filter(([name,value])=>name!=='class'||value!=='').sort(),
 text:normalize(node.textContent??'')}));
}

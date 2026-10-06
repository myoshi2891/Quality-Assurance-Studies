import {existsSync, readFileSync} from 'node:fs';
// archive/ は git 管理外のため、CI でも読めるよう追跡対象のフィクスチャを正とする
export const SOURCE_DIR='tests/fixtures/source-html/';
export const html=readFileSync(existsSync('Beautiful-testing-guide.html')?'Beautiful-testing-guide.html':SOURCE_DIR+'Beautiful-testing-guide.html','utf8');
export const source=new DOMParser().parseFromString(html.replace(/<head>[\s\S]*?<\/head>/,'').replace(/<script(?! type="text\/plain")[\s\S]*?<\/script>/g,''),'text/html');
// 意図的なアクセシビリティ改善: 4象限表の行見出しは元HTMLの td ではなく th scope="row" で描画する（元HTMLはハッシュ固定のため比較側で反映する）
for(const cell of source.querySelectorAll('#sec-6 table tbody tr > td:first-child')){
 const header=source.createElement('th');
 header.setAttribute('scope','row');
 header.replaceChildren(...cell.childNodes);
 cell.replaceWith(header);
}
// 語間の空白を保持したまま、改行・インデント由来の空白差だけを吸収する
export const normalize=(text:string)=>text.replace(/\s+/g,' ').trim();
// 要素間の改行インデント（書式空白）は描画テキストではないため、比較前に取り除く
export function textOf(element:Element){
 const clone=element.cloneNode(true) as Element;
 const walker=clone.ownerDocument.createTreeWalker(clone,NodeFilter.SHOW_TEXT);
 const formatting:Node[]=[];
 for(let node=walker.nextNode();node;node=walker.nextNode())if(/^\s*\n\s*$/.test(node.nodeValue??''))formatting.push(node);
 formatting.forEach(node=>node.parentNode?.removeChild(node));
 return normalize(clone.textContent??'');
}
export function signature(element:Element){
 const clone=element.cloneNode(true) as Element;
 if(clone.matches('.mermaid-wrapper'))clone.replaceChildren();
 clone.querySelectorAll('.mermaid-wrapper').forEach(node=>node.replaceChildren());
 return [clone,...clone.querySelectorAll('*')].map(node=>({tag:node.tagName,
 attributes:[...node.attributes].filter(attr=>!attr.name.startsWith('aria-')&&!['role','tabindex'].includes(attr.name)).map(attr=>[attr.name,attr.name==='class'?attr.value.split(/\s+/).filter(value=>!['active','open','done','diagram-frame'].includes(value)).join(' '):attr.value]).filter(([name,value])=>name!=='class'||value!=='').sort(),
 text:textOf(node)}));
}

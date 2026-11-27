import {describe,it,expect} from 'bun:test';
import {readFileSync} from 'node:fs';
import postcss from 'postcss';

// レビュー指摘: 表セルの文字色をページ固有の --ink 経由にし、文字サイズを 1rem へ補正する
describe('table cell ink review',()=>{
  const root=postcss.parse(readFileSync('app/iso-29119-2-test-processes-guide/guide.css','utf8'));
  const decls=(selector:string)=>{const out:Record<string,{value:string;important:boolean}>={};root.walkRules(r=>{if(r.selector===selector&&r.parent?.type==='root')r.walkDecls(d=>{out[d.prop]={value:d.value,important:d.important===true};});});return out;};
  it('defines --ink as the original dark-theme cell color',()=>{
    expect(decls('.iso29119-2-page')['--ink']).toEqual({value:'var(--dim)',important:false});
  });
  it('applies --ink and 1rem to table cells with !important',()=>{
    const td=decls('.iso29119-2-page td, .iso29119-2-page tbody td');
    expect(td.color).toEqual({value:'var(--ink)',important:true});
    expect(td['font-size']).toEqual({value:'1rem',important:true});
  });
});

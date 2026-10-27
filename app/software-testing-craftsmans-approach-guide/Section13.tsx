import React from 'react';
import Diagram from './Diagram';

export default function Section13() {
    return (<section className="section" id="roadmap"><h2>{"学習ロードマップ（初学者向け実践プラン）"}</h2><div className="prose"><Diagram id="mmd-10" /><p><strong>{"実践のコツ"}</strong>{"：いきなり全ての技法を使おうとせず、まずは自分が今書いているコードに対して「境界値分析＋同値分割」だけを丁寧に適用してみることをお勧めします。慣れてきたら、パステスト（カバレッジ確認）、そしてTDDやミューテーションテストへと段階的に広げていくと挫折しにくくなります。\n                        "}</p></div></section>);
}

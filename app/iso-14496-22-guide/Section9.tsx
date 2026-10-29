import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section9() { return <>
<h2 id="step-9">{"Step 9：手を動かして確認する"}</h2>
<h3 id="9-1-手元のフォントのテーブル構成を見るfonttools">{"9-1.\n手元のフォントのテーブル構成を見る（fontTools）"}</h3>
<pre className="bash"><code>{"pip install fonttools\nttx -l YourFont.ttf"}</code></pre>
<p>{"出力される"}
<strong>{"テーブル一覧"}</strong>
{"を、Step 4-3\nの早見表と見比べてください。"}</p>
<h3 id="9-2-pythonでグリフ数とテーブルを確認する">{"9-2.\nPythonでグリフ数とテーブルを確認する"}</h3>
<pre className="python"><code>{"from fontTools.ttLib import TTFont\n\nfont = TTFont(\"YourFont.ttf\")\n\n# テーブルタグの一覧\nprint(sorted(font.keys()))\n\n# グリフ数（従来のmaxpがある場合）\nif \"maxp\" in font:\n    print(\"numGlyphs =\", font[\"maxp\"].numGlyphs)\n\n# 第5版の拡張テーブル集合（7-2・7-3の一覧）\nEXTENSION_TABLES = (\"MAXP\", \"HHEA\", \"HMTX\", \"VHEA\", \"VMTX\", \"GLYF\", \"LOCA\", \"GVAR\")\nfound = [tag for tag in EXTENSION_TABLES if tag in font]\nfor tag in EXTENSION_TABLES:\n    print(tag, \"あり\" if tag in font else \"なし\")\nprint(\"第5版の拡張形式:\", \"あり\" if found else \"なし\")"}</code></pre>
<div className="callout callout-warn">
<p>{"⚠️ 大文字テーブルの読み書きは、fontTools の対応状況（PR\n#4097）に依存します。お使いの版で対応しているかは、リリースノートで確認してください。"}</p>
</div>
<h3 id="9-3-確認のステップ">{"9-3. 確認のステップ"}</h3>
<div className="mermaid-diagram" id="mmd-9" role="img" aria-label="ttxによるフォントの大文字・小文字判定と検証方法の分岐フロー図" aria-describedby="mmd-9-desc"><p id="mmd-9-desc" hidden>{"フォントを用意し、ttx -lでテーブル一覧を確認して、第5版の拡張テーブル集合（MAXP、HHEA、HMTX、VHEA、VMTX、GLYF、LOCA、GVAR）のいずれかがあるかを判定する。なければ従来形式（最大65,535グリフ）として既存ツールで通常どおり検証し、あれば第5版の拡張形式として対応ツールの版（HarfBuzz / fontTools 等）を確認する。"}</p><Mermaid chart={DIAGRAMS["mmd-9"]!} /></div>
</>; }

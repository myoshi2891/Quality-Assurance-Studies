import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section8() { return <>
<h2 id="step-8">{"Step 8：実装側の対応状況"}</h2>
<p>{"規格が発行されたあと、世界的に使われるオープンソースのフォントツールが対応を進めています。以下は2026年10月8日までに確認できた公開情報です。"}</p>
<div className="table-scroll"><table>{"\n"}<thead>{"\n"}<tr className="header">{"\n"}<th>{"プロジェクト"}</th>{"\n"}<th>{"領域"}</th>{"\n"}<th>{"確認できた内容"}</th>{"\n"}</tr>{"\n"}</thead>{"\n"}<tbody>{"\n"}<tr className="odd">{"\n"}<td><strong>{"HarfBuzz"}</strong></td>{"\n"}<td>{"テキストシェーピング"}</td>{"\n"}<td>{"「最終版の第5版規格に更新する」PR\n#5655。"}<code>{"MAXP"}</code>{"、"}<code>{"GLYF"}</code>{"/"}<code>{"LOCA"}</code>{"、"}<code>{"HHEA"}</code>{"/"}<code>{"HMTX"}</code>{"、"}<code>{"GVAR"}</code>{"、GSUB/GPOS拡張、GDEF\n1.4 などの実装を含む"}</td>{"\n"}</tr>{"\n"}<tr className="even">{"\n"}<td><strong>{"fontTools"}</strong></td>{"\n"}<td>{"フォント編集・生成"}</td>{"\n"}<td>{"「最終版の第5版のbeyond-64k補助テーブル」をサポートするPR #4097"}</td>{"\n"}</tr>{"\n"}<tr className="odd">{"\n"}<td><strong>{"fontations"}</strong>{"（Google Fonts）"}</td>{"\n"}<td>{"Rust製フォントライブラリ"}</td>{"\n"}<td><code>{"MAXP"}</code>{"/メトリクス（#2208→#2221）、"}<code>{"GLYF"}</code>{"/"}<code>{"LOCA"}</code>{"と3次アウトライン（#2209→#2222）、"}<code>{"GVAR"}</code>{"（#2210→#2223）、"}<code>{"COLR"}</code>{"\nの "}<code>{"PaintGlyph2"}</code>{"（#2212）が順次提出"}</td>{"\n"}</tr>{"\n"}<tr className="even">{"\n"}<td><strong>{"harfrust"}</strong></td>{"\n"}<td>{"HarfBuzzのRust移植"}</td>{"\n"}<td>{"GSUB/GPOS/GDEF の拡張対応（#495）が提出"}</td>{"\n"}</tr>{"\n"}</tbody>{"\n"}</table></div>
<h3 id="実装者が実際に作ったテストフォント">{"実装者が実際に作ったテストフォント"}</h3>
<div className="table-scroll"><table>{"\n"}<thead>{"\n"}<tr className="header">{"\n"}<th>{"出典"}</th>{"\n"}<th>{"内容"}</th>{"\n"}</tr>{"\n"}</thead>{"\n"}<tbody>{"\n"}<tr className="odd">{"\n"}<td>{"HarfBuzz PR #5655"}</td>{"\n"}<td>{"NotoSansを統合した（絵文字・CJKを除く）フォントで、"}<strong>{"グリフ数\n106,958、Unicode数 26,984"}</strong></td>{"\n"}</tr>{"\n"}<tr className="even">{"\n"}<td>{"fontations PR #2209"}</td>{"\n"}<td>{"統合テストフォントの\n"}<strong>{"104,404グリフ"}</strong>{"をすべて描画し、"}<strong>{"103,186個の非空グリフ"}</strong>{"をwrite-fontsで往復検証"}</td>{"\n"}</tr>{"\n"}</tbody>{"\n"}</table></div>
<h3 id="実装者が報告した仕様からの逸脱">{"実装者が報告した「仕様からの逸脱」"}</h3>
<p>{"HarfBuzz PR #5655\nのコメントで、実装者は「提案仕様では、拡張LookupListのLookupへのオフセットが16ビットのままで、目的を損なう。そこでオフセットを32ビットに広げたところ、fontTools.mergeでの統合が高速に成功した」と報告しています。これは"}<strong>{"提案段階の議論"}</strong>{"であり、最終版の文面での扱いは本稿では確認できていません。"}</p>
<div className="mermaid-diagram" id="mmd-8" role="img"><Mermaid chart={DIAGRAMS["mmd-8"]!} /></div>
</>; }

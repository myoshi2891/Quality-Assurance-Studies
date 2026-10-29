import React from 'react';
import Diagram from './Diagram';
export default function Section03() { return <>
<h2 id="step-3何が誰にどこまで適用されるかスコープ">{"\n                    Step 3：何が・誰に・どこまで適用されるか（スコープ）"}<a aria-label="リンク" className="anchor" href="#step-3何が誰にどこまで適用されるかスコープ">{"#"}</a></h2>

<p>{"\n                    規格の適用範囲は、ISO公式ページの\n                    Abstract／規格の第1章で次のように示されています（要約）。\n                "}</p>

<h3 id="3-1-対象となるもの">{"\n                    3-1. 対象となる「もの」"}<a aria-label="リンク" className="anchor" href="#3-1-対象となるもの">{"#"}</a></h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"区分"}</th><th>{"例"}</th></tr></thead><tbody><tr className="odd"><td>{"汎用ICT機器・ソフトウェア"}</td><td>{"PC、サーバ、ネットワーク機器、一般業務ソフト"}</td></tr><tr className="even"><td>{"医療専用のソフト・システム"}</td><td><strong>{"電子カルテ（EHR）システム"}</strong>{"、ソフトウェアを組み込んだ"}<strong>{"医療機器"}</strong>{"（プログラム済み／プログラム可能、ソフトウェアやファームウェアを含む）\n                                "}</td></tr><tr className="odd"><td>{"医療現場にあるその他のデジタル機器"}</td><td>{"環境・感染制御、ビル管理、物理セキュリティ用の機器"}</td></tr></tbody></table></div>

<h3 id="3-2-対象となる情報">{"\n                    3-2. 対象となる「情報」"}<a aria-label="リンク" className="anchor" href="#3-2-対象となる情報">{"#"}</a></h3>

<p>{"\n                    あらゆる形態の情報が対象です。テキスト・数値、音声、図面、画像、動画。取得方法、保存方法（紙・電子）、伝達方法（口頭、手渡し、郵送、可搬媒体、直接接続、ネットワーク）も問いません。\n                "}</p>

<h3 id="3-3-対象となる組織と場所">{"\n                    3-3. 対象となる「組織」と「場所」"}<a aria-label="リンク" className="anchor" href="#3-3-対象となる組織と場所">{"#"}</a></h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"観点"}</th><th>{"範囲"}</th></tr></thead><tbody><tr className="odd"><td>{"組織"}</td><td>{"\n                                    医療を提供する組織、または他の理由で"}<strong>{"個人の健康情報の管理者"}</strong>{"（"}<strong>{"カストディアン"}</strong>{"）となっている、あらゆる種類・規模の組織\n                                "}</td></tr><tr className="even"><td>{"情報の置き場所"}</td><td>{"オンプレミスでもクラウドでも対象"}</td></tr><tr className="odd"><td>{"物理的な場所"}</td><td>{"病院、診療所、救急車、移動式の画像診断／検査ユニットなど"}</td></tr><tr className="even"><td>{"医療が行われる他の場所"}</td><td>{"居住施設・在宅など"}</td></tr><tr className="odd"><td>{"サービスの提供方法"}</td><td><strong>{"遠隔医療・バーチャルな医療"}</strong>{"を含む"}</td></tr></tbody></table></div>

<Diagram id="mermaid-diagram-2" />

<div className="callout callout-note"><div className="callout-title"><span className="callout-icon">{"ℹ"}</span><span>{"補足"}</span></div><div className="callout-body"><p>{"\n                            序文では、対象読者として「医療提供者」「医療向けソフト・機器・サービスの提供者」「医療の規制・認定・検査・保証を担う機関」が挙げられ、特に「ICT／医療機器の専門家」と「医療分野に不慣れな情報セキュリティ専門家（コンサルタント、ペネトレーションテスター、監査員など）」に有用とされています。\n                        "}</p></div></div>

<hr  />

</>; }

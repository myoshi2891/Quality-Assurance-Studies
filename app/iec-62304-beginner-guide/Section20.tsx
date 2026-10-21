import React from 'react';
import Diagram from './Diagram';
export default function Section20() { return <><h2 id="sec-40">{"20. Edition 2（改訂版）の動向"}</h2>

<h3 id="sec-41">{"20.1 状況（2026年10月11日時点）"}</h3>

<p>{"Edition 2 の状況は、情報源によって"}<strong>{"記述が食い違っています"}</strong>{"。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"情報源（日付）"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"Critical Software（2026年6月12日）"}</td><td>{" FDIS段階が2026年5月に始まり、公式予測は2027年初頭〜中頃と記載 "}</td></tr><tr className="even"><td>{"QARA PULSE（2026年8月12日）"}</td><td>{" CD2が送付され、コメント解決は2026年8月19日開始、承認段階は10月21日、公開予測は2028年 "}</td></tr><tr className="odd"><td>{"Quickbird Medical（2026年10月初旬頃）"}</td><td>{" IEC予測では2028年10月26日公開。以前の2027年4月予測から大幅に遅延と記載 "}</td></tr><tr className="even"><td>{"MD Regulatory（2026年8月下旬頃）"}</td><td>{" Edition 2は未存在。"}<strong>{"現行は2006+A1:2015"}</strong>{"。FDISは2028年以前に見込まれないと記載 "}</td></tr></tbody></table></div>

<Diagram id="mmd-17" label="IEC 62304第2版の改訂動向" />

<h3 id="sec-42">{"20.2 実務上の結論"}</h3>

<ul><li>{" 新しい情報源ほど「"}<strong>{"未発行・2028年見込み"}</strong>{"」で一致しており、ISOの公式ページでも2006年版が「現行・2023年に確認済み」と表示されています。 "}</li><li>{" EUでは、法的な要求事項はMDR／IVDR（一般安全・性能要求事項など）であり、整合規格の利用は"}<strong>{"任意"}</strong>{"です。整合規格が欧州連合官報（OJEU）に掲載されると、その規格に適合することで、規格が対象とする要求事項への"}<strong>{"適合推定"}</strong>{"が得られます。新版が公開されても、OJEUに整合規格として掲載されるまでは、この適合推定の効果は得られません。 "}</li><li>{" したがって、"}<strong>{"現時点では2006+A1:2015を前提に設計"}</strong>{"するのが妥当です。 "}</li><li>{" ただし、「2026年8月公開」を断定した古い記事も多く出回っています。"}<strong>{"必ずIEC公式サイトの最新ステータスで確認"}</strong>{"してください。 "}</li></ul>

<h3 id="sec-43">{"20.3 ドラフトで報じられている主な方向性（確定ではありません）"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"項目"}</th><th>{"Edition 1（現行）"}</th><th>{"Edition 2（ドラフトの報道）"}</th></tr></thead><tbody><tr className="odd"><td>{"適用範囲"}</td><td>{"医療機器ソフトウェア"}</td><td><strong>{"ヘルス関連ソフトウェア全般"}</strong>{"へ拡大"}</td></tr><tr className="even"><td>{"分類"}</td><td>{"安全クラス A / B / C"}</td><td><strong>{"2段階のプロセス厳格度（I / II）"}</strong></td></tr><tr className="odd"><td>{"AI／ML"}</td><td>{"明示的な要求は限定的"}</td><td>{"AI／MLのライフサイクルに関する要求を追加"}</td></tr><tr className="even"><td>{"サイバーセキュリティ"}</td><td>{"本体では詳細に扱わない"}</td><td>{"引き続き別規格（IEC 81001-5-1等）を参照する方向"}</td></tr><tr className="odd"><td>{"ISO 13485／14971への参照"}</td><td>{"参照あり"}</td><td>{"ヘルスソフトウェア全般を対象とするため参照を外す方向"}</td></tr></tbody></table></div>

<aside className="callout callout-tip"><div className="callout-icon">{"💡"}</div><div className="callout-body"><p>{" 準備のコツ：Edition 2が公開されても、"}<strong>{"プロセスの本質（計画、要求、設計、検証、変更管理、保守、リスク）は大きく変わらない"}</strong>{"とする分析もあります。今は現行版を堅実に運用し、動向を追うのが現実的です。 "}</p></div></aside>
</>; }

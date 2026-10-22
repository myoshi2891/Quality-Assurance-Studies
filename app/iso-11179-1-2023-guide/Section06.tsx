import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="step-5コア概念を分解するデータエレメントの構造">{"STEP\n5：コア概念を分解する（データエレメントの構造）"}</h2>

<p>{"ここが "}<strong>{"11179 の心臓部"}</strong>{"です。ゆっくり進みます。"}</p>

<h3 id="5-1-全体像データエレメントを構成する主要概念">{"5-1.\n全体像：データエレメントを構成する主要概念"}</h3>

<div className="callout callout-note"><span className="callout-icon">{"📌"}</span><div className="callout-body"><div className="callout-title">{"読み方"}</div><p>{"データエレメント（DE）の"}<strong>{"直接の構成要素は\nDEC と VD の2つだけ"}</strong>{"です（DE ＝ DEC ＋\nVD）。オブジェクトクラスとプロパティは DEC\nを形づくる要素、概念領域（CD）は VD\nに値の意味を与える"}<strong>{"関連概念"}</strong>{"であり、いずれも DE\nの直接構成要素ではありません。下図の実線は「組み合わさって上位を作る」関係、点線は「意味を与える」関連を表します。"}</p></div></div>

<Diagram id="diagram-6" />

<div className="table-scroll"><table><thead><tr className="header"><th>{"概念"}</th><th>{"英語"}</th><th>{"DE との関係"}</th><th>{"一言説明"}</th></tr></thead><tbody><tr className="odd"><td>{"オブジェクトクラス"}</td><td>{"Object Class"}</td><td>{"DEC の構成要素（DE から見れば間接）"}</td><td><strong>{"何について"}</strong>{"データを集めるのか（例：患者、世帯、雇用主）"}</td></tr><tr className="even"><td>{"プロパティ"}</td><td>{"Property"}</td><td>{"DEC の構成要素（DE から見れば間接）"}</td><td>{"その対象を"}<strong>{"特徴づける性質"}</strong>{"（例：生年月日、収入、性別）"}</td></tr><tr className="odd"><td>{"データエレメントコンセプト（DEC）"}</td><td>{"Data Element Concept"}</td><td><strong>{"DE の直接構成要素（意味）"}</strong></td><td>{"オブジェクトクラス＋プロパティ。"}<strong>{"表現から独立した意味"}</strong></td></tr><tr className="even"><td>{"概念領域（CD）"}</td><td>{"Conceptual Domain"}</td><td>{"関連概念（VD に値の意味を与える）"}</td><td>{"取り得る"}<strong>{"値の意味（バリューミーニング）の集合"}</strong></td></tr><tr className="odd"><td>{"値領域（VD）"}</td><td>{"Value Domain"}</td><td><strong>{"DE の直接構成要素（表現）"}</strong></td><td>{"実際に許される"}<strong>{"値の集合"}</strong>{"（表現を伴う）"}</td></tr><tr className="even"><td>{"データエレメント（DE）"}</td><td>{"Data Element"}</td><td>{"—"}</td><td><strong>{"DEC と VD の組合せ"}</strong>{"。データの基本単位"}</td></tr></tbody></table></div>

<h3 id="5-2-step-5-aオブジェクトクラスとプロパティ--dec">{"5-2. STEP\n5-A：オブジェクトクラスとプロパティ → DEC"}</h3>

<p>{"資料で繰り返し使われる説明では、高レベルの概念「純収入」に、オブジェクトクラス「人」を組み合わせて、データエレメントコンセプト「人の純収入」を作るという例が示されています。"}</p>

<Diagram id="diagram-7" />

<p><strong>{"DEC の最重要ポイント"}</strong></p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"ポイント"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"意味中心"}</td><td>{"「何を表すか」だけを定義し、"}<strong>{"どう保存するか"}</strong>{"は定義しない"}</td></tr><tr className="even"><td>{"表現独立"}</td><td>{"特定のシステム・テーブル・列・組織に依存しない"}</td></tr><tr className="odd"><td>{"再利用性"}</td><td>{"1つの DEC に複数の DE がぶら下がれる"}</td></tr></tbody></table></div>

<div className="callout callout-note"><span className="callout-icon">{"📝"}</span><div className="callout-body"><p>{"Part 31 では、DEC\nは「プロパティとオブジェクトクラスの組合せを表現するもの」と暗黙的に関連づけられ、表現とは独立に記述される概念として定義されています（サンプル版の定義より、言い換え）。"}</p></div></div>

<h3 id="5-3-step-5-b概念領域cdとバリューミーニング">{"5-3. STEP\n5-B：概念領域（CD）とバリューミーニング"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"用語"}</th><th>{"意味"}</th><th>{"例（性別）"}</th></tr></thead><tbody><tr className="odd"><td>{"概念領域（CD）"}</td><td>{"意味のまとまり"}</td><td>{"「性別の区分」"}</td></tr><tr className="even"><td>{"バリューミーニング"}</td><td>{"個々の"}<strong>{"意味"}</strong>{"（コードではない）"}</td><td>{"男性、女性、その他、不明"}</td></tr></tbody></table></div>

<p>{"CD には2種類あると整理されます。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"種類"}</th><th>{"特徴"}</th><th>{"例"}</th></tr></thead><tbody><tr className="odd"><td>{"列挙型（Enumerated）"}</td><td>{"取り得る意味を"}<strong>{"すべて列挙"}</strong>{"する"}</td><td>{"男性／女性／その他／不明"}</td></tr><tr className="even"><td>{"非列挙型（Described）"}</td><td><strong>{"規則や記述"}</strong>{"で意味の範囲を定める"}</td><td>{"「西暦で表した日付」"}</td></tr></tbody></table></div>

<div className="callout callout-practice"><span className="callout-icon">{"💡"}</span><div className="callout-body"><div className="callout-title">{"ポイント"}</div><p><strong>{"CD は意味、VD\nは意味に対応する値（コード等）"}</strong>{"です。コード "}<code>{"M"}</code>{"\nは意味「男性」を指し示す表現、という関係になります。"}</p></div></div>

<h3 id="5-4-step-5-c値領域vdと許容値">{"5-4. STEP\n5-C：値領域（VD）と許容値"}</h3>

<p>{"値領域は、"}<strong>{"どんな値の集合を実際に許すか"}</strong>{"を定義します。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"区分"}</th><th>{"説明"}</th><th>{"例"}</th></tr></thead><tbody><tr className="odd"><td>{"列挙型 VD"}</td><td>{"許容値を一覧で列挙"}</td><td><code>{"M"}</code>{", "}<code>{"F"}</code>{", "}<code>{"O"}</code>{", "}<code>{"U"}</code></td></tr><tr className="even"><td>{"非列挙型 VD"}</td><td>{"規則で定義"}</td><td>{"「YYYY-MM-DD 形式の日付」「0〜300 の整数」"}</td></tr></tbody></table></div>

<p>{"資料では、データエレメントの"}<strong>{"表現"}</strong>{"には「値領域・データ型・測定単位」などが含まれる、と整理されています。"}</p>

<Diagram id="diagram-8" />

<h3 id="5-5-step-5-dデータエレメントde-dec--vd">{"5-5. STEP\n5-D：データエレメント（DE）＝ DEC ＋ VD"}</h3>

<p><strong>{"データエレメントは「意味（DEC）」と「表現（VD）」の組"}</strong>{"です。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"DE の例"}</th><th>{"DEC（意味）"}</th><th>{"VD（表現）"}</th></tr></thead><tbody><tr className="odd"><td>{"患者性別コード（文字1桁）"}</td><td>{"患者の性別"}</td><td><code>{"M"}</code>{"/"}<code>{"F"}</code>{"/"}<code>{"O"}</code>{"/"}<code>{"U"}</code></td></tr><tr className="even"><td>{"患者性別コード（数値）"}</td><td>{"患者の性別"}</td><td><code>{"1"}</code>{"/"}<code>{"2"}</code>{"/"}<code>{"3"}</code>{"/"}<code>{"9"}</code></td></tr><tr className="odd"><td>{"患者生年月日（ISO 8601）"}</td><td>{"患者の生年月日"}</td><td><code>{"YYYY-MM-DD"}</code></td></tr><tr className="even"><td>{"患者生年月日（和暦）"}</td><td>{"患者の生年月日"}</td><td>{"和暦文字列"}</td></tr></tbody></table></div>

<Diagram id="diagram-9" />

<div className="callout callout-practice"><span className="callout-icon">{"💡"}</span><div className="callout-body"><div className="callout-title">{"再利用の仕組み"}</div><p>{"1つの DEC に複数の VD\nを組み合わせて複数の DE を作れる。また、同じ VD を複数の DE\nが共有することもできる。この組み立て式の設計が"}<strong>{"再利用性"}</strong>{"を生みます。"}</p></div></div>

<h3 id="5-6-具体例で通しで見る収縮期血圧">{"5-6.\n具体例で通しで見る（収縮期血圧）"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"部品"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"オブジェクトクラス"}</td><td>{"患者"}</td></tr><tr className="even"><td>{"プロパティ"}</td><td>{"収縮期血圧"}</td></tr><tr className="odd"><td>{"DEC"}</td><td>{"患者の収縮期血圧"}</td></tr><tr className="even"><td>{"CD"}</td><td>{"収縮期血圧の測定値の意味（心臓収縮時の血圧の大きさ）"}</td></tr><tr className="odd"><td>{"VD-A"}</td><td>{"整数、単位 mmHg、範囲 0〜300"}</td></tr><tr className="even"><td>{"VD-B"}</td><td>{"小数、単位 kPa、範囲 0.0〜40.0"}</td></tr><tr className="odd"><td>{"DE-A"}</td><td>{"患者の収縮期血圧（mmHg 整数）"}</td></tr><tr className="even"><td>{"DE-B"}</td><td>{"患者の収縮期血圧（kPa 小数）"}</td></tr></tbody></table></div>

<p><strong>{"ここで分かること"}</strong>{"："}<strong>{"単位の違いは「意味の違い」ではなく「表現の違い」"}</strong>{"として整理できます。意味（DEC）を共通にしたまま、VD\nを切り替えれば変換規則も議論しやすくなります。"}</p>

<h3 id="5-7-関係のまとめクラス図">{"5-7. 関係のまとめ（クラス図）"}</h3>

<div className="callout callout-note"><span className="callout-icon">{"ℹ️"}</span><div className="callout-body"><p>{"下図は学習用に"}<strong>{"簡略化"}</strong>{"した概念図です。多重度や属性の詳細は\nPart 3 / Part 31 の原典で確認してください。"}</p></div></div>

<Diagram id="diagram-10" />

</>; }

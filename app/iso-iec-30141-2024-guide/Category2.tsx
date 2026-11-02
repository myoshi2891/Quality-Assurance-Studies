import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_0, DIAGRAM_1 } from './diagrams';
export default function Category2() { return <>
<h2 id="2-step-0-前提知識参照アーキテクチャとは何か">{" 2. Step 0: 前提知識（参照アーキテクチャとは何か） "}</h2>

<h3 id="21-参照アーキテクチャreference-architecture-raとは">{" 2.1 参照アーキテクチャ（Reference Architecture, RA）とは "}</h3>

<p>{"家づくりで例えると、次のような関係です。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"家づくりの例え"}</th><th>{"ソフトウェア／IoTの世界"}</th></tr></thead><tbody><tr className="odd"><td>{"建築基準や標準的な間取りのひな形"}</td><td><strong>{"参照アーキテクチャ（RA）"}</strong></td></tr><tr className="even"><td>{"自分の家族向けにアレンジした設計図"}</td><td><strong>{"ソリューションアーキテクチャ"}</strong></td></tr><tr className="odd"><td>{"実際に建てた家"}</td><td><strong>{"実装されたIoTシステム"}</strong></td></tr></tbody></table></div>

<p>{" RAは「そのまま使う完成品」ではなく、"}<strong>{"自分の案件に合わせて取り込む共通の土台"}</strong>{"です。 "}</p>

<h3 id="22-iotとは規格の序文introduction02より">{" 2.2 IoTとは（規格の序文（Introduction）0.2より） "}</h3>

<p>{" 規格の序文（Introduction）の0.2「About Internet of Things (IoT)」では、IoTの根っこを次のように説明しています（要旨）。 "}</p>

<ul><li><strong>{"センサー"}</strong>{"が物理世界の情報を集める"}</li><li><strong>{"アクチュエータ"}</strong>{"が物理世界に働きかける"}</li><li>{"これらのフィールドデバイスがネットワーク経由でデジタル世界につながる"}</li><li>{" IoTは、デジタルツイン、AI、クラウド、ビッグデータ、データ分析などを支える基盤になる "}</li></ul>

<div className="mermaid-diagram" id="diagram-1" role="img" aria-label="図1: センサーが物理世界の対象（機械・環境・人など）を計測し、そのデータをネットワーク経由でクラウド／エッジ／アプリ（分析・判断）へ送る。クラウド／エッジ／アプリは指令をネットワーク経由でアクチュエータへ送り、アクチュエータが物理世界の対象に作用する。"><Mermaid chart={DIAGRAM_0} /></div>

<div className="callout"><p>{" この図は、序文の説明を初学者向けに"}<strong>{"解説者が一般化して描いた概念図"}</strong>{"です。規格内の図そのものではありません。 "}</p></div>

<h3 id="23-isoiecieee-42010-の基本用語読むうえで必須">{" 2.3 ISO/IEC/IEEE 42010 の基本用語（読むうえで必須） "}</h3>

<p>{" 本規格は、アーキテクチャ記述の国際規格 "}<strong>{"ISO/IEC/IEEE 42010:2022"}</strong>{" に、アスペクト、パースペクティブ、決定事項、根拠を除き準拠しています。次の4語だけ押さえてください。 "}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"用語"}</th><th>{"意味"}</th><th>{"身近な例え"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"ステークホルダー"}</strong></td><td>{"システムに関心を持つ人・組織"}</td><td>{"家の施主、設計士、施工業者"}</td></tr><tr className="even"><td><strong>{"関心事（Concern）"}</strong></td><td>{"ステークホルダーが気にしていること"}</td><td>{"「耐震性は大丈夫？」「予算は？」"}</td></tr><tr className="odd"><td><strong>{"ビューポイント（視点）"}</strong></td><td>{"関心事に答えるための\"見方のルール\""}</td><td>{"「配線図の描き方のルール」"}</td></tr><tr className="even"><td><strong>{"ビュー（視点から見た図・記述）"}</strong></td><td>{"ビューポイントに従って作った実物の記述"}</td><td>{"「実際に描いた配線図」"}</td></tr></tbody></table></div>

<div className="mermaid-diagram" id="diagram-2" role="img" aria-label="図2: ステークホルダーは関心事を持つ。関心事はビューポイント（見方のルール）として整理される。ビューポイントはビュー（実際の図や記述）を支配・規定し、ビューは関心事に答える。"><Mermaid chart={DIAGRAM_1} /></div>

<hr />
</>; }

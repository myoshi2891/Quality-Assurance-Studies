import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_2, DIAGRAM_3, DIAGRAM_4 } from './diagrams';

export default function Category6() {
    return <>
<h2 id="6-step-2-5つの特性">{"6. Step 2: 5つの特性"}</h2>
{" "}
<p>{" 規格は、信頼に足る性質を次の"}<strong>{"5つの特性"}</strong>{"に分解します（Kaspersky解説でも同じ5つが列挙されています）。 "}</p>
{" "}
<div className="mermaid-diagram" id="mmd-3"><Mermaid chart={DIAGRAM_2} /></div>
{" "}
<h3 id="61-5特性の早見表">{"6.1 5特性の早見表"}</h3>
{" "}
<p>{" 定義の言い回しは、同じ5特性を扱うIIC（Industry IoT Consortium）の信頼に足る性質の解説ブログの整理を参考にした"}<strong>{"学習用の要約"}</strong>{"です。規格本文の逐語訳ではありません。 "}</p>
{" "}
<div aria-label="表：6.1 5特性の早見表" className="table-scroll" role="region" tabIndex={0}>{" "}<table><thead><tr className="header"><th>{"特性"}</th><th>{"一言で"}</th><th>{"守る対象"}</th><th>{"具体例"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"Safety（安全）"}</strong></td><td>{"人・環境に害を与えない"}</td><td>{"人命・財産・環境"}</td><td>{"異常時に機器を安全側に停止させる"}</td></tr><tr className="even"><td><strong>{"Security（セキュリティ）"}</strong></td><td>{"許可されないアクセス・改変・破壊から守る"}</td><td>{"システムと情報"}</td><td>{"認証、暗号化、ファームウェア署名"}</td></tr><tr className="odd"><td><strong>{"Privacy（プライバシー）"}</strong></td><td>{"個人が自分の情報の扱いを制御できる"}</td><td>{"個人の権利"}</td><td>{"収集目的の限定、保存期間の管理"}</td></tr><tr className="even"><td><strong>{"Resilience（レジリエンス）"}</strong></td><td>{"混乱を引き起こす事象に抵抗・適応し、回復する"}</td><td>{"サービス継続"}</td><td>{"停電・人的ミス・攻撃を受けても縮退運転で継続し、復旧する"}</td></tr><tr className="odd"><td><strong>{"Reliability（信頼性）"}</strong></td><td>{"定められた条件・期間で必要な機能を果たし続ける"}</td><td>{"通常運用の継続性"}</td><td>{"故障率、平均故障間隔"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="62-reliabilityとresilienceの違い初学者がつまずく点">{" 6.2 ReliabilityとResilienceの違い（初学者がつまずく点） "}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"観点"}</th><th>{"Reliability"}</th><th>{"Resilience"}</th></tr></thead><tbody><tr className="odd"><td>{"定義の軸"}</td><td>{" "}<strong>{"定められた条件"}</strong>{"のもとで、"}<strong>{"定められた期間"}</strong>{"、機能を果たすこと "}</td><td>{" 混乱を引き起こす事象（disruptive events）に"}<strong>{"抵抗し、適応し、回復する"}</strong>{"こと "}</td></tr><tr className="even"><td>{"目的"}</td><td>{"必要な機能を所定の期間果たし続ける"}</td><td>{"混乱の影響を抑え、サービスを保ち、回復させる"}</td></tr><tr className="odd"><td>{"例"}</td><td>{"規定温度範囲での所定期間の稼働"}</td><td>{"地震・停電・攻撃の最中の縮退運転と、その後の復旧"}</td></tr></tbody></table>{" "}</div>
{" "}
<div className="callout callout-warn">{" "}<p>{" 注: 「想定内か想定外か」だけで区別するのは不正確です。Resilience が扱う事象には、あらかじめ想定して備えておくものも含まれます。 "}</p>{" "}</div>
{" "}
<h3 id="63-規格の箇条6の型を読み取る">{"6.3 規格の箇条6の「型」を読み取る"}</h3>
{" "}
<p>{" 目次を見ると、"}<strong>{"Safety / Security / Privacy には同じ型の節構成"}</strong>{"があり、Resilience / Reliability は節が分かれていません。 "}</p>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"特性"}</th><th>{"節構成（目次より）"}</th></tr></thead><tbody><tr className="odd"><td>{"6.1 Safety"}</td><td>{" 全般 → Safety goals → Safety design → Safety assurance and control "}</td></tr><tr className="even"><td>{"6.2 Security"}</td><td>{" 全般 → Security goals → "}<strong>{"Security assumptions"}</strong>{" → Security design → Security assurance and control "}</td></tr><tr className="odd"><td>{"6.3 Privacy"}</td><td>{" 概要 → Privacy goals → "}<strong>{"Privacy assumptions"}</strong>{" → Privacy design → Privacy assurance and control "}</td></tr><tr className="even"><td>{"6.4 Resilience"}</td><td>{"節分けなし"}</td></tr><tr className="odd"><td>{"6.5 Reliability"}</td><td>{"節分けなし"}</td></tr></tbody></table>{" "}</div>
{" "}
<p>{"この「型」は、次の流れとして覚えると整理しやすくなります（学習用の整理）。"}</p>
{" "}
<div className="mermaid-diagram" id="mmd-4"><Mermaid chart={DIAGRAM_3} /></div>
{" "}
<div className="callout callout-warn">{" "}<p>{" 注: Safetyには assumptions の節が目次に無いなど、特性ごとの差があります。上図は「共通する骨格」の学習用モデルです。 "}</p>{" "}</div>
{" "}
<h3 id="64-特性同士は衝突するトレードオフ">{" 6.4 特性同士は衝突する（トレードオフ） "}</h3>
{" "}
<p>{" IICの解説では、5特性は互いに関連し、"}<strong>{"調整（reconcile）が必要"}</strong>{"だと述べられています。典型例は「施錠」と「避難」です。 "}</p>
{" "}
<div className="mermaid-diagram" id="mmd-5"><Mermaid chart={DIAGRAM_4} /></div>
{" "}
<p>{" 規格にも "}<strong>{"Figure 4: Relationship between security and privacy"}</strong>{" があり、この2つの関係を整理していることが目次から分かります（図の中身は有料部分のため、本ガイドでは再現していません）。 "}</p>
{" "}
    </>;
}

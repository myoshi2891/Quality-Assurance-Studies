import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_8 } from './diagrams';

export default function Category9() {
    return <>
<h2 id="9-step-5-附属書a--ベストプラクティスパターン集">{" 9. Step 5: 附属書A ― ベストプラクティス（パターン集） "}</h2>
{" "}
<p>{" 附属書A（参考）は、"}<strong>{"実際に手を動かすための雛形（パターン）"}</strong>{"です。目次から以下が確認できます。 "}</p>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"節"}</th><th>{"節の名称"}</th><th>{"対応表"}</th><th>{"目的（名称からの一般的な解釈）"}</th></tr></thead><tbody><tr className="odd"><td>{"A.1"}</td><td>{"Relation with ISO/IEC 30141（パターンではない節）"}</td><td>{"—"}</td><td>{"30141とのつながり"}</td></tr><tr className="even"><td>{"A.2"}</td><td>{"Concerns（パターンではない節）"}</td><td>{"Table A.1: Concerns for an implementation architecture"}</td><td>{"実装アーキテクチャで気にすべき関心事"}</td></tr><tr className="odd"><td>{"A.3.2"}</td><td>{"Trustworthiness characterization method pattern"}</td><td>{"Table A.2"}</td><td>{" 対象システムの信頼に足る性質を"}<strong>{"特徴づける"}</strong>{"方法 "}</td></tr><tr className="even"><td>{"A.3.3"}</td><td>{"Trustworthiness maturity model pattern"}</td><td>{"Table A.3"}</td><td>{"信頼に足る性質の"}<strong>{"成熟度"}</strong>{"を段階的に評価する"}</td></tr><tr className="odd"><td>{"A.3.4"}</td><td>{"Trustworthiness impact assessment pattern"}</td><td>{"Table A.4"}</td><td>{" 信頼に足る性質が損なわれたときの"}<strong>{"影響"}</strong>{"を評価する "}</td></tr><tr className="even"><td>{"A.3.5"}</td><td>{"Trustworthiness engineering pattern"}</td><td>{"Table A.5"}</td><td>{"信頼に足る性質を"}<strong>{"設計・実装に組み込む"}</strong></td></tr><tr className="odd"><td>{"A.3.6"}</td><td>{"Trustworthiness assurance pattern"}</td><td>{"Table A.6"}</td><td>{"信頼に足る性質を"}<strong>{"証拠で保証する"}</strong></td></tr></tbody></table>{" "}</div>
{" "}
<div className="mermaid-diagram" id="mmd-9"><Mermaid chart={DIAGRAM_8} /></div>
{" "}
<div className="callout callout-warn">{" "}<p>{" 注意: 上図は附属書Aの節の並びを"}<strong>{"使い方の流れとして描いた学習用図"}</strong>{"です。各パターンの具体的な手順・表の内容は有料部分のため、本ガイドでは再現していません。 "}</p>{" "}</div>
{" "}
<p>{" Kaspersky解説では、附属書のパターンについて「信頼に足る性質の違反の脅威評価手法から、MILS（Multiple Independent Levels of Security）のような信頼できるシステム向けアーキテクチャ解までのベストプラクティスのテンプレート」と紹介されています。 "}</p>
{" "}
    </>;
}

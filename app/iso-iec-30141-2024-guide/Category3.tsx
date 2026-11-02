import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_2 } from './diagrams';
export default function Category3() { return <>
<h2 id="3-step-1-規格の基本情報と位置づけ">{"3. Step 1: 規格の基本情報と位置づけ"}</h2>

<h3 id="31-基本情報iso公式ページより">{"3.1 基本情報（ISO公式ページより）"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"規格番号"}</td><td>{"ISO/IEC 30141:2024"}</td></tr><tr className="even"><td>{"名称"}</td><td>{"Internet of Things (IoT) — Reference architecture"}</td></tr><tr className="odd"><td>{"版"}</td><td>{"第2版（Edition 2）"}</td></tr><tr className="even"><td>{"発行"}</td><td>{"2024年8月"}</td></tr><tr className="odd"><td>{"担当委員会"}</td><td>{"ISO/IEC JTC 1/SC 41（IoTとデジタルツイン）"}</td></tr><tr className="even"><td>{"作成部会"}</td><td>{"WG 3（IoT参照アーキテクチャ関連。iTeh Standardsの紹介による）"}</td></tr><tr className="odd"><td>{"ICS分類"}</td><td>{"35.020"}</td></tr><tr className="even"><td>{"ページ数"}</td><td>{"53ページ（ISO公式ページの表記）"}</td></tr><tr className="odd"><td>{"前版"}</td><td>{" ISO/IEC 30141:2018（および Cor 1:2020）。"}<strong>{"撤回済み"}</strong></td></tr><tr className="even"><td>{"ステータス（ISO公式、10月22日時点で確認）"}</td><td>{" 発行済み。ステージは "}<strong>{"90.92（International Standard to be revised／改訂予定）"}</strong></td></tr></tbody></table></div>

<div className="callout"><p><strong>{"補足"}</strong>{": ステージ90.92は「定期見直しの結果、改訂が決まった」段階を示します。"}<strong>{"現行の有効版は2024年版"}</strong>{"ですが、将来の改訂（第3版）に備えて、ISOの規格ページを定期的に確認すると安心です。 "}</p></div>

<h3 id="32-規格の使われ方序文introduction04-の-figure-1-の趣旨">{" 3.2 規格の使われ方（箇条5.1に基づく本ガイドの説明図） "}</h3>

<p>{" 序文（Introduction）の0.4によると、この規格の主目的は「IoTシステムの"}<strong>{"アーキテクチャを設計する人（アーキテクト）"}</strong>{"を支援すること」です。規格の規範的な部分を、より実装に近いアーキテクチャへ取り込めます。 "}</p>

<div className="mermaid-diagram" id="diagram-3" role="img" aria-label="図3: IoT領域別参照アーキテクチャ（DSRA：スマート製造、スマートシティなど）は、ISO/IEC 30141 IoT参照アーキテクチャを規範的参照として用いることができる（任意）。個別のIoTソリューションアーキテクチャは、ISO/IEC 30141を直接参照することも、DSRAに基づくこともできる（いずれも任意）。個別のIoTソリューションアーキテクチャが、IoTシステムの実装を導く。"><Mermaid chart={DIAGRAM_2} /></div>

<p><strong>{"DSRA（Domain Specific Reference Architecture）"}</strong>{" は、特定の分野向けの参照アーキテクチャです。規格によれば、DSRAは本規格をIoT部分の土台として使い、アプリケーション固有の関心事やユースケースはDSRA側に任せることができます。 "}</p>

<hr />
</>; }

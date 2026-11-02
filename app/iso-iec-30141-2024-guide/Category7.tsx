import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_6 } from './diagrams';
export default function Category7() { return <>
<h2 id="7-step-5-6つのビューポイントとビュー6章">{" 7. Step 5: 6つのビューポイントとビュー（6章） "}</h2>

<p>{" 規格は「"}<strong>{"6つのアーキテクチャビューと、それを規定する6つのビューポイント"}</strong>{"」を示します。 "}</p>

<div className="mermaid-diagram" id="diagram-7" role="img" aria-label="図7: 6.2 基礎（Foundational）IoTとは何かの土台、6.3 ビジネス事業価値、6.4 利用人・デジタルの関わり、6.5 機能抽象的な機能クラス、6.6 信頼性信頼できる設計と保証、6.7 構築パターンによる実装の型"><Mermaid chart={DIAGRAM_6} /></div>

<h3 id="71-基礎foundational-iotビュー62">{"7.1 基礎（Foundational IoT）ビュー（6.2）"}</h3>

<p><strong>{"役割"}</strong>{": 「IoTとは何か」という土台を共通認識にします。"}</p>

<p>{"規格の目次・図表一覧から分かる内容は次のとおりです。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"内容"}</th><th>{"解説"}</th></tr></thead><tbody><tr className="odd"><td>{"IoTコンポーネント・IoTシステム・IoT環境の関係（Figure 2）"}</td><td>{" IoTの部品、それらを束ねたシステム、システムが置かれる環境の関係を整理 "}</td></tr><tr className="even"><td>{"IoT環境の例（Figure 3）"}</td><td>{"具体的な環境のイメージ"}</td></tr></tbody></table></div>

<p><strong>{"初学者向けの理解のコツ"}</strong>{": 「このシステムはIoTか？」と迷ったとき、判断の基準を与えてくれるのがこのビューです。序文（Introduction）の0.1では、IoT RAが対象とするシステムを次の2点で説明しています。 "}</p>

<ul><li>{"物理世界の実体を"}<strong>{"センシング・操作する技術"}</strong>{"を使う"}</li><li>{"ネットワークを介して"}<strong>{"やり取りする構成要素"}</strong>{"を持つ"}</li></ul>

<h3 id="72-ビジネスビュー63">{"7.2 ビジネスビュー（6.3）"}</h3>

<p><strong>{"役割"}</strong>{": IoTの能力を"}<strong>{"事業価値"}</strong>{"に結びつける視点です（Table 3）。「IoTの特性が事業やシステムオーナーにどう影響するか」「新しいビジネスモデルにどう使うか」が関心事です。 "}</p>

<h3 id="73-利用ビュー64">{"7.3 利用ビュー（6.4）"}</h3>

<p><strong>{"役割"}</strong>{": 利用者（人・デジタルの両方）がIoTシステムとどう関わり、物理的な実体とどう関わるかを示します。 "}</p>

<ul><li>{" 目次には "}<strong>{"Figure 4: 外部に向けた機能（External facing functions）"}</strong>{" があります。 "}</li><li><strong>{"IoTシステムの\"外側から見える機能\""}</strong>{" を整理する図と読み取れます。 "}</li></ul>

<h3 id="74-機能ビュー65">{"7.4 機能ビュー（6.5）"}</h3>

<p><strong>{"役割"}</strong>{": IoTシステムに実装が必要な"}<strong>{"抽象的な機能の種類"}</strong>{"を示します。 "}</p>

<ul><li>{" 目次には "}<strong>{"Figure 5: 抽象機能クラスの内部モデル（Internal model of abstract function classes）"}</strong>{" があります。 "}</li><li>{" 規格の概要では、データ・管理・通信・インターフェースなどの"}<strong>{"機能的な能力"}</strong>{"を表すと説明されています。 "}</li></ul>

<p><strong>{"初学者向けの理解のコツ"}</strong>{": 機能ビューは「具体的な製品名」ではなく、「"}<strong>{"どんな種類の機能が必要か"}</strong>{"」の分類表です。たとえば要件定義や設計レビューで、"}<strong>{"機能の抜け漏れチェックリスト"}</strong>{"として使えます。 "}</p>

<h3 id="75-信頼性ビュー66">{"7.5 信頼性ビュー（6.6）"}</h3>

<p><strong>{"役割"}</strong>{": 信頼性（Trustworthiness）を満たすIoT製品・ソリューションを作る際の"}<strong>{"信頼モデル"}</strong>{"を考えるための視点です。 "}</p>

<ul><li>{" Table 6 は、"}<strong>{"ISO/IEC TS 30149"}</strong>{" を考慮した信頼性ビューポイントを示しています。 "}</li><li>{"目次には Figure 6（信頼性ビューで使う凡例）があります。"}</li><li>{" 序文（Introduction）の0.1では、物理世界とデジタル世界の両方に関わる"}<strong>{"信頼性機能"}</strong>{"を扱うと述べられています。 "}</li></ul>

<div className="callout"><p><strong>{"信頼性（Trustworthiness）とは？"}</strong>{" 第1版の本文では、ISO/IEC 20924の定義を引いて「システムが期待どおりに動作するとステークホルダーが持つ信頼の度合い」という趣旨で説明されています。現行の ISO/IEC 20924:2024 では、「ステークホルダーの期待に、実証でき、検証でき、測定できる形で応えられる能力」と定義されています。セキュリティ、プライバシー、安全、信頼性（Reliability）、レジリエンスなどを含む広い概念です。ISO委員会のニュース記事では、規格開発を率いた Dr François Coallier（JTC 1/SC 41の委員長）が、信頼性を「頼れる、安全、セキュア、プライバシーを尊重し、災害や攻撃などの混乱にも耐えられる」という意味で説明しています。 "}</p></div>

<h3 id="76-構築ビュー67">{"7.6 構築ビュー（6.7）"}</h3>

<p><strong>{"役割"}</strong>{": 実装に近い視点で、"}<strong>{"設計パターン"}</strong>{"を提供します。第2版の目玉です。次章で詳しく扱います。 "}</p>

<hr />
</>; }

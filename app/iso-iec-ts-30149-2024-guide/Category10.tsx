import React from 'react';
import Checklist from './Checklist';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_9 } from './diagrams';

export default function Category10() {
    return <>
<h2 id="10-step-6-実務での使い方qa開発の視点">{" 10. Step 6: 実務での使い方（QA・開発の視点） "}</h2>
{" "}
<p>{" 以下は、規格の考え方を"}<strong>{"QAエンジニア・開発者が現場に落とす"}</strong>{"ための、本ガイド独自の提案（学習用）です。規格が要求する手順ではありません。 "}</p>
{" "}
<h3 id="101-プロジェクトへの適用フロー">{"10.1 プロジェクトへの適用フロー"}</h3>
{" "}
<div className="mermaid-diagram" id="mmd-10"><Mermaid chart={DIAGRAM_9} /></div>
{" "}
<h3 id="102-特性別のテスト観点の例独自整理">{" 10.2 特性別のテスト観点の例（独自整理） "}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"特性"}</th><th>{"主なテスト・検証の観点"}</th><th>{"証拠の例"}</th></tr></thead><tbody><tr className="odd"><td>{"Safety"}</td><td>{"故障注入、異常時の安全側動作、ハザード分析との整合"}</td><td>{"故障注入試験記録、FMEA/FTA"}</td></tr><tr className="even"><td>{"Security"}</td><td>{"脆弱性診断、認証・認可、ファームウェア更新の改ざん耐性"}</td><td>{"ペネトレーションテスト報告、脅威モデル"}</td></tr><tr className="odd"><td>{"Privacy"}</td><td>{"データ収集範囲の確認、保存期間・削除の動作確認"}</td><td>{"データフロー図、プライバシー影響評価"}</td></tr><tr className="even"><td>{"Resilience"}</td><td>{"通信断・電源断・過負荷での縮退運転と復旧"}</td><td>{"カオステスト結果、復旧時間の実測"}</td></tr><tr className="odd"><td>{"Reliability"}</td><td>{"長時間稼働、環境条件ストレス"}</td><td>{"耐久試験データ、故障率の推定"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="103-自己点検チェックリスト">{"10.3 自己点検チェックリスト"}</h3>
{" "}
<Checklist>{" "}<div className="checklist-progress">{" "}<span className="cp-label">{"進捗"}</span>{" "}<div className="cp-bar"><div className="cp-fill"></div></div>{" "}<span className="cp-count">{"0 / 7"}</span>{" "}</div>{" "}<ul className="task-list">{" "}<li>{" "}<label><input type="checkbox" />{"対象システムの"}<strong>{"利用文脈"}</strong>{"（家庭・産業・医療など）を明記した"}</label>{" "}</li>{" "}<li>{" "}<label><input type="checkbox" />{"5特性それぞれについて、達成したい"}<strong>{"目標"}</strong>{"を書いた"}</label>{" "}</li>{" "}<li>{" "}<label><input type="checkbox" />{"「たぶん大丈夫」という"}<strong>{"前提"}</strong>{"を一覧化し、検証方法を決めた"}</label>{" "}</li>{" "}<li>{" "}<label><input type="checkbox" />{"主要な主張ごとに、"}<strong>{"証拠への参照"}</strong>{"を紐づけた"}</label>{" "}</li>{" "}<li>{" "}<label><input type="checkbox" />{"部品を組み合わせた"}<strong>{"全体"}</strong>{"でも主張が成立するか確認した"}</label>{" "}</li>{" "}<li>{" "}<label><input type="checkbox" />{"特性間の"}<strong>{"トレードオフ"}</strong>{"（例: ログ収集とプライバシー）を判断・記録した"}</label>{" "}</li>{" "}<li>{" "}<label><input type="checkbox" />{"製品出荷後も、証拠を"}<strong>{"更新する運用"}</strong>{"を決めた"}</label>{" "}</li>{" "}</ul>{" "}</Checklist>
{" "}
    </>;
}

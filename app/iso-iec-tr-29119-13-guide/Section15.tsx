import React from 'react';
import Diagram from './Diagram';

/** 14. Step 10：実務で使うエンドツーエンドの流れ例示 — preserve the complete original category. */
export default function Section15() {
  return <>
<h2 id={"s43"}>{"14. Step 10：実務で使うエンドツーエンドの流れ"}<span className={"tag tag-ex"}>{"例示"}</span></h2>
{"\n"}
<h3 id={"s44"}>{"14.1 全体ワークフロー"}</h3>
{"\n"}
<figure className={"diagram"}><Diagram index={14} />{"\n"}</figure>
{"\n"}
<h3 id={"s45"}>{"14.2 リスクからテストへの対応関係の例"}</h3>
{"\n"}
<figure className={"diagram"}><Diagram index={15} />{"\n"}</figure>
{"\n"}
<h3 id={"s46"}>{"14.3 ミニケーススタディ"}<span className={"tag tag-ex"}>{"例示"}</span>{"：オフィスの顔認証入退室ゲート"}</h3>
{"\n"}
<p><strong>{"状況:"}</strong>{" 従業員3,000人のオフィスに顔認証ゲートを導入。要件は「他人受入率 FMR ≤ 10⁻⁵（しきい値固定）」「通過所要時間 3秒以内」「個人情報保護法・社内規程への適合」。"}</p>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s46"}><table><thead><tr className={"header"}><th>{"ステップ"}</th><th>{"実施内容"}</th></tr></thead><tbody><tr className={"odd"}><td>{"1. スコープ"}</td><td>{"顔認証サブシステム（カメラ・アルゴリズム）＋ゲート制御＋管理画面＋勤怠連携"}</td></tr><tr className={"even"}><td>{"2. リスク識別"}</td><td>{"誤認証、暗所、マスク着用、眼鏡、登録失敗、フォールバック、データ保護、ピーク時混雑"}</td></tr><tr className={"odd"}><td>{"3. 分析"}</td><td>{"他人受入（影響度3）、ピーク時混雑（影響度2・可能性3）などを数値化"}</td></tr><tr className={"even"}><td>{"4. 戦略"}</td><td>{"高露出度リスクに"}<strong>{"動的テスト"}</strong>{"（誤り率測定、負荷）、設計リスクに"}<strong>{"静的テスト"}</strong>{"（レビュー）を割当"}</td></tr><tr className={"odd"}><td>{"5. 設計"}</td><td>{"照度・姿勢・マスク有無などの条件の組合せをテスト条件として整理"}</td></tr><tr className={"even"}><td>{"6. 実行"}</td><td>{"技術評価（データセット）→シナリオ評価（模擬環境）の順に実施"}</td></tr><tr className={"odd"}><td>{"7. 報告"}</td><td>{"FMR/FNMR/FTER・所要時間に加え、"}<strong>{"残存リスク"}</strong>{"（例: 暗所FNMR高）を提示して運用判断へ"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<hr />
{"\n"}
  </>;
}

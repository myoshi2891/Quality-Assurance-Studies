import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_10 } from './diagrams';

export default function Category12() {
    return <>
<h2 id="step-11-アジャイルdevops-での使い方テーラリング">{" Step 11: アジャイル／DevOps での使い方（テーラリング） "}</h2>
{" "}
<p>{"規格自体が、次のような柔軟な使い方を前提にしています。"}</p>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"規格の記載（要旨）"}</th><th>{"実務での意味"}</th></tr></thead><tbody><tr className="odd"><td>{" 任意のライフサイクル（ウォーターフォール、反復、アジャイル、DevOps）で採用できる "}</td><td>{"開発手法を理由に対象外とはならない"}</td></tr><tr className="even"><td>{" 文書は紙でも電子でもよい（ツール記録、スプレッドシート、マインドマップ、ホワイトボード写真） "}</td><td>{"軽量な形式で満たせる"}</td></tr><tr className="odd"><td>{"見出しや名称は変更・統合してよい"}</td><td>{"既存のテンプレートに合わせられる"}</td></tr><tr className="even"><td>{"「プロジェクト」を「プロダクト」に読み替えてよい"}</td><td>{"長期のプロダクトチームでも使える"}</td></tr><tr className="odd"><td>{"使う文書を選び、外した理由を示す（テーラード適合）"}</td><td>{"必要最小限の運用ができる"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="文書を選ぶ判断フロー筆者の実務向け提案">{" 文書を選ぶ判断フロー（筆者の実務向け提案） "}</h3>
{" "}
<div className="mermaid-container" data-key="mm11" id="mermaid-diagram-11"><Mermaid chart={DIAGRAM_10} /></div>
{" "}
<h3 id="既存ツールへの当てはめ例筆者の提案規格の要求ではありません">{" 既存ツールへの当てはめ例（筆者の提案・規格の要求ではありません） "}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"規格の文書"}</th><th>{"当てはめ先の例"}</th></tr></thead><tbody><tr className="odd"><td>{"テスト計画"}</td><td>{"Wiki のテスト計画ページ"}</td></tr><tr className="even"><td>{"テストケース仕様"}</td><td>{"テスト管理ツールのケース一覧、スプレッドシート"}</td></tr><tr className="odd"><td>{"テスト手順仕様"}</td><td>{"自動テストコード、手動実行手順の Markdown"}</td></tr><tr className="even"><td>{"テスト実行ログ"}</td><td>{"CI の実行履歴、テスト管理ツールの実行記録"}</td></tr><tr className="odd"><td>{"インシデントレポート"}</td><td>{"課題管理ツールのチケット"}</td></tr><tr className="even"><td>{"ステータスレポート"}</td><td>{"週次の Slack 投稿、ダッシュボード"}</td></tr><tr className="odd"><td>{"完了報告書"}</td><td>{"リリース判定会議の資料"}</td></tr></tbody></table>{" "}</div>
{" "}
    </>;
}

import React from 'react';

export default function Category13() {
    return <>
<h2 id="step-12-実践ミニ例ログイン機能">{"Step 12: 実践ミニ例（ログイン機能）"}</h2>
{" "}
<blockquote>{" "}<p>{" ここに示す内容は"}<strong>{"架空の学習用サンプル"}</strong>{"で、規格の Annex の例とは異なります。項目の並びは Part 3 の考え方に沿っています。 "}</p>{" "}</blockquote>
{" "}
<h3 id="12-1-テスト計画抜粋">{"12-1. テスト計画（抜粋）"}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"項目"}</th><th>{"記入例"}</th></tr></thead><tbody><tr className="odd"><td>{"ID / 発行者 / 承認者"}</td><td>{"TP-LOGIN-001 / QAチーム / プロダクトオーナー"}</td></tr><tr className="even"><td>{"Context of testing"}</td><td>{"新規会員向けログイン機能のシステムテスト"}</td></tr><tr className="odd"><td>{"Assumptions and constraints"}</td><td>{"認証基盤は既存を利用。テスト環境は共有"}</td></tr><tr className="even"><td>{"Stakeholders"}</td><td>{"PO、開発リード、QA、セキュリティ担当"}</td></tr><tr className="odd"><td>{"Risk register"}</td><td>{"不正ログイン（高）、セッション管理不備（中）"}</td></tr><tr className="even"><td>{"Test strategy"}</td><td>{" 同値分割・状態遷移で設計、回帰は自動化、完了基準は主要カバレッジ100％ "}</td></tr><tr className="odd"><td>{"Testing activities and estimates"}</td><td>{"設計3日、実行4日、再テスト2日"}</td></tr><tr className="even"><td>{"Schedule"}</td><td>{"2週間"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="12-2-テストモデル--テストケース">{"12-2. テストモデル → テストケース"}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"テストモデル"}</th><th>{"カバレッジアイテム"}</th><th>{"テストケース例"}</th><th>{"期待結果"}</th></tr></thead><tbody><tr className="odd"><td>{"状態遷移図（未ログイン→ログイン中／未ログイン→ロック）"}</td><td>{"遷移「未ログイン→ロック（認証失敗が5回）」"}</td><td>{"未ログイン状態で誤パスワードを5回連続入力"}</td><td>{"アカウントがロックされる"}</td></tr><tr className="even"><td>{"同値分割（ログイン時のパスワード）"}</td><td>{"登録済みパスワードと一致（有効）"}</td><td>{"正しいIDとパスワードでログイン"}</td><td>{"ログイン成功（ログイン中へ遷移）"}</td></tr><tr className="odd"><td>{"同値分割（ログイン時のパスワード）"}</td><td>{"登録済みパスワードと不一致（無効）"}</td><td>{"失敗回数0の状態で誤ったパスワードでログイン"}</td><td>{"認証エラー表示（未ログインのまま、失敗回数+1）"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="12-3-インシデントレポート抜粋">{"12-3. インシデントレポート（抜粋）"}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"項目"}</th><th>{"記入例"}</th></tr></thead><tbody><tr className="odd"><td>{"Timing information"}</td><td>{"2026-09-28 14:30"}</td></tr><tr className="even"><td>{"Originator"}</td><td>{"QA担当"}</td></tr><tr className="odd"><td>{"Context"}</td><td>{"TC-LOGIN-014 実行中、ステージング環境"}</td></tr><tr className="even"><td>{"Description of the incident"}</td><td>{"誤パスワード5回でロックされず、6回目も認証を試行できた"}</td></tr><tr className="odd"><td>{"Severity（報告者評価）"}</td><td>{"高"}</td></tr><tr className="even"><td>{"Priority（報告者評価）"}</td><td>{"高"}</td></tr><tr className="odd"><td>{"Risk"}</td><td>{"総当たり攻撃への耐性不足"}</td></tr><tr className="even"><td>{"Status"}</td><td>{"新規（調査待ち）"}</td></tr></tbody></table>{" "}</div>
{" "}
    </>;
}

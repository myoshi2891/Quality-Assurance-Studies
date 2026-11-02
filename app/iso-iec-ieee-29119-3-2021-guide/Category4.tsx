import React from 'react';

export default function Category4() {
    return <>
<h2 id="step-3-規格の構成章附属書を読む地図">{" Step 3: 規格の構成（章・附属書）を読む地図 "}</h2>
{" "}
<p>{"規格の目次（前付けサンプル）から、章構成を整理します。"}</p>
{" "}
<h3 id="本編">{"本編"}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"章"}</th><th>{"タイトル"}</th><th>{"何が書いてあるか"}</th></tr></thead><tbody><tr className="odd"><td>{"1"}</td><td>{"Scope"}</td><td>{"適用範囲"}</td></tr><tr className="even"><td>{"2"}</td><td>{"Normative references"}</td><td>{"引用規格（この文書には"}<strong>{"なし"}</strong>{"）"}</td></tr><tr className="odd"><td>{"3"}</td><td>{"Terms and definitions"}</td><td>{"用語定義（実際のテスト文書に関する用語が中心）"}</td></tr><tr className="even"><td>{"4"}</td><td>{"Conformance"}</td><td>{"適合の主張方法（full / tailored）"}</td></tr><tr className="odd"><td>{"5"}</td><td>{"Common information"}</td><td>{"全文書に共通の情報項目"}</td></tr><tr className="even"><td>{"6"}</td><td>{"Organizational test process documentation"}</td><td>{"組織レベルの文書"}</td></tr><tr className="odd"><td>{"7"}</td><td>{"Test management processes documentation"}</td><td>{"計画・報告の文書"}</td></tr><tr className="even"><td>{"8"}</td><td>{"Dynamic test processes documentation"}</td><td>{"設計・実行・インシデントの文書"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="附属書">{"附属書"}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"附属書"}</th><th>{"種別"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"Annex A"}</td><td>{"規定（normative）"}</td><td>{" 各情報項目の要求・推奨・許可（shall / should / may）の一覧と Part 2 との対応 "}</td></tr><tr className="even"><td>{"Annex B"}</td><td>{"参考（informative）"}</td><td>{"例の概要"}</td></tr><tr className="odd"><td>{"Annex C〜R"}</td><td>{"参考"}</td><td>{" 各文書の記入例（テストポリシー、テスト計画、ステータスレポート、完了報告書、テストモデル仕様、テストケース仕様、テスト手順仕様、データ／環境要求、各種レディネスレポート、実際の結果、テスト結果、実行ログ、インシデントレポート） "}</td></tr><tr className="even"><td>{"Annex S"}</td><td>{"参考"}</td><td>{"IEEE 829:2008（置き換え済み）との対応表"}</td></tr><tr className="odd"><td>{"Annex T"}</td><td>{"参考"}</td><td>{"テストモデルの説明（なぜテスト条件をやめたのか）"}</td></tr></tbody></table>{" "}</div>
{" "}
<blockquote>{" "}<p>{" 読み方のコツ: "}<strong>{"Annex A は規定（normative）附属書"}</strong>{"です。要求事項は Clause 4〜8 と Annex A に記載されています。Annex B〜T の例や対応表は参考情報で、「例に書いてあるから必須」ではありません。 "}</p>{" "}</blockquote>
{" "}
    </>;
}

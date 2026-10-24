import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="step-3isoiec-11179-ファミリー全体像">{"STEP 3：ISO/IEC 11179\nファミリー全体像"}</h2>

<h3 id="3-1-パート一覧">{"3-1. パート一覧"}</h3>

<p>{"Part 1:2023\nの目次プレビュー、および関連パートのISO公式ページから確認できた範囲で整理します。"}</p>

<div className="table-scroll"><table aria-labelledby="3-1-パート一覧"><thead><tr className="header"><th>{"Part"}</th><th>{"名称（英語）"}</th><th>{"日本語での役割イメージ"}</th><th>{"確認できた状態"}</th></tr></thead><tbody><tr className="odd"><td>{"1"}</td><td>{"Framework"}</td><td>{"全体の地図・概念基盤"}</td><td>{"2023年1月発行（第4版）"}</td></tr><tr className="even"><td>{"2"}</td><td>{"Classification（技術報告書 TR）"}</td><td>{"項目の分類"}</td><td>{"Part 1 の目次で記載を確認"}</td></tr><tr className="odd"><td>{"3"}</td><td>{"Metamodel for registry common facilities"}</td><td>{"レジストリの"}<strong>{"共通機能"}</strong>{"のメタモデル（心臓部）"}</td><td>{"2023年版が存在（旧版を分割）"}</td></tr><tr className="even"><td>{"4"}</td><td>{"Formulation of data definitions"}</td><td>{"データ定義の書き方"}</td><td>{"旧版系資料で確認（最新版は要確認）"}</td></tr><tr className="odd"><td>{"5"}</td><td>{"Naming principles"}</td><td>{"命名・識別の原則"}</td><td>{"Part 1 の目次で記載を確認"}</td></tr><tr className="even"><td>{"6"}</td><td>{"Registration"}</td><td>{"登録（ライフサイクル運用）"}</td><td>{"Part 1 の目次で記載を確認"}</td></tr><tr className="odd"><td>{"30"}</td><td>{"Basic attributes of metadata"}</td><td>{"完全なMDRが不要な場面で使う"}<strong>{"基本属性"}</strong></td><td>{"2023年1月発行（10ページ）"}</td></tr><tr className="even"><td>{"31"}</td><td>{"Metamodel for data specification registration"}</td><td><strong>{"データ仕様"}</strong>{"（データエレメント、各種ドメイン等）の登録"}</td><td>{"2023年1月発行（Edition 1）"}</td></tr><tr className="odd"><td>{"32"}</td><td>{"Metamodel for concept system registration"}</td><td><strong>{"概念体系"}</strong>{"の登録"}</td><td>{"2023年1月発行（Edition 1）"}</td></tr><tr className="even"><td>{"33"}</td><td>{"Metamodel for data set registration"}</td><td><strong>{"データセット"}</strong>{"の登録（旧 Part 7:2019 を置換）"}</td><td>{"2023年1月発行（Edition 1）"}</td></tr><tr className="odd"><td>{"34"}</td><td>{"Metamodel for computable data registration"}</td><td><strong>{"計算可能なデータ"}</strong>{"の登録"}</td><td><strong>{"2024年5月発行"}</strong>{"（Edition 1、41ページ）"}</td></tr><tr className="even"><td>{"35"}</td><td>{"Metamodel for model registration"}</td><td><strong>{"モデル／メタモデル"}</strong>{"の登録（旧 ISO/IEC 19763-10:2014\nを置換）"}</td><td>{"2023年1月発行（Edition 1、66ページ）"}</td></tr></tbody></table></div>

<div className="callout callout-note"><span className="callout-icon">{"📝"}</span><div className="callout-body"><div className="callout-title">{"補足"}</div><p>{"Part 1:2023 の発行時点では Part 34\nは「開発中」の扱いでしたが、その後\n"}<strong>{"2024年5月に発行"}</strong>{"されています（ISO公式ページで確認）。"}</p></div></div>

<h3 id="3-2-ファミリーの構造図">{"3-2. ファミリーの構造図"}</h3>

<Diagram id="diagram-4" />

<h3 id="3-3-迷ったときの選び方">{"3-3. 迷ったときの選び方"}</h3>

<div className="table-scroll"><table aria-labelledby="3-3-迷ったときの選び方"><thead><tr className="header"><th>{"知りたいこと"}</th><th>{"まず読むパート"}</th></tr></thead><tbody><tr className="odd"><td>{"全体像・用語の入口"}</td><td><strong>{"Part 1"}</strong></td></tr><tr className="even"><td>{"レジストリそのものの構造"}</td><td>{"Part 3"}</td></tr><tr className="odd"><td>{"データ項目（データエレメント等）を登録したい"}</td><td>{"Part 31"}</td></tr><tr className="even"><td>{"概念や用語集（概念体系）を登録したい"}</td><td>{"Part 32"}</td></tr><tr className="odd"><td>{"データセット（提供データの塊）を登録したい"}</td><td>{"Part 33"}</td></tr><tr className="even"><td>{"モデルやマッピングを登録したい"}</td><td>{"Part 35"}</td></tr><tr className="odd"><td>{"項目名の付け方を決めたい"}</td><td>{"Part 5"}</td></tr><tr className="even"><td>{"登録や承認の流れを整えたい"}</td><td>{"Part 6"}</td></tr><tr className="odd"><td>{"簡易な属性セットだけ使いたい"}</td><td>{"Part 30"}</td></tr></tbody></table></div>

</>; }

import React from 'react';
import Diagram from './Diagram';
export default function Section10() { return <><h2 id="sec-22">{"Step 4：開発プロセスを回す（箇条5）"}</h2>

<h3 id="sec-23">{"4.1 開発プロセス全体像"}</h3>

<Diagram id="mmd-8" />

<Diagram id="mmd-9" />

<aside className="callout callout-tip"><div className="callout-icon">{"💡"}</div><div className="callout-body"><p>{" 左側（作る）と右側（確かめる）が"}<strong>{"V字"}</strong>{"で対応します。要求とテスト、設計とテストが"}<strong>{"追跡可能"}</strong>{"であることが、監査で最も見られるポイントの一つです。 "}</p></div></aside>

<h3 id="sec-24">{"4.2 各ステップの要点"}</h3>

<h4 id="51-ソフトウェア開発計画">{"5.1 ソフトウェア開発計画"}</h4>

<div className="table-scroll"><table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"目的"}</td><td>{"何を、誰が、いつ、どのプロセスで作るかを決める"}</td></tr><tr className="even"><td>{"計画に含める内容"}</td><td>{" 使用するプロセスとライフサイクルモデル、成果物、トレーサビリティ、構成管理、問題解決、SOUP管理、検証、リスク管理との関係 "}</td></tr><tr className="odd"><td>{"成果物"}</td><td>{"ソフトウェア開発計画書（SDP）"}</td></tr><tr className="even"><td>{"注意"}</td><td>{" 計画書の内容は"}<strong>{"変更時に更新"}</strong>{"する。更新されない計画書は監査の指摘対象 "}</td></tr></tbody></table></div>

<h4 id="52-ソフトウェア要求事項分析">{"5.2 ソフトウェア要求事項分析"}</h4>

<div className="table-scroll"><table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"目的"}</td><td>{" システム要求からソフトウェア要求を導出し、"}<strong>{"テスト可能な形"}</strong>{"で定義する "}</td></tr><tr className="even"><td>{"含めるもの"}</td><td>{" 機能・性能要求、入出力、インタフェース、セキュリティ関連、使用性、データ定義、リスクコントロール手段としての要求 "}</td></tr><tr className="odd"><td>{"成果物"}</td><td>{"ソフトウェア要求仕様書（SRS）"}</td></tr><tr className="even"><td>{"注意"}</td><td>{" 曖昧な表現は避ける。リスク分析の結果として生まれた要求が漏れないこと "}</td></tr></tbody></table></div>

<h4 id="53-アーキテクチャ設計クラスbc">{"5.3 アーキテクチャ設計（クラスB・C）"}</h4>

<div className="table-scroll"><table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"目的"}</td><td>{" ソフトウェアをアイテムに分割し、役割とインタフェースを定める "}</td></tr><tr className="even"><td>{"含めるもの"}</td><td>{" アイテム構成、アイテム間インタフェース、SOUPの機能・性能要求と動作環境、"}<strong>{"セグリゲーション"}</strong></td></tr><tr className="odd"><td>{"成果物"}</td><td>{"ソフトウェアアーキテクチャ設計書"}</td></tr><tr className="even"><td>{"注意"}</td><td>{"クラスの分離を主張するなら、ここで根拠を示す"}</td></tr></tbody></table></div>

<h4 id="54-詳細設計">{"5.4 詳細設計"}</h4>

<div className="table-scroll"><table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"目的"}</td><td>{"アイテムをユニットに分割し、実装できる粒度まで設計する"}</td></tr><tr className="even"><td>{"要求の差"}</td><td>{"ユニット分割はB・C、ユニットの詳細設計はC中心"}</td></tr><tr className="odd"><td>{"成果物"}</td><td>{"詳細設計書"}</td></tr></tbody></table></div>

<h4 id="55-ユニット実装と検証">{"5.5 ユニット実装と検証"}</h4>

<div className="table-scroll"><table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"目的"}</td><td>{" 各ユニットを実装し、"}<strong>{"意図どおりに動くか"}</strong>{"を確認する "}</td></tr><tr className="even"><td>{"検証の例"}</td><td>{"ユニットテスト、コードレビュー、静的解析"}</td></tr><tr className="odd"><td>{"受入基準"}</td><td>{" あらかじめ定める（例：コーディング規約の遵守、メモリ・資源の扱い、レビュー完了） "}</td></tr><tr className="even"><td>{"注意"}</td><td>{" クラスAでは検証要求がない。ただし、品質上は実施するのが望ましい "}</td></tr></tbody></table></div>

<h4 id="56-ソフトウェア統合と統合テストクラスbc">{" 5.6 ソフトウェア統合と統合テスト（クラスB・C） "}</h4>

<div className="table-scroll"><table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"目的"}</td><td>{" ユニット・アイテムを統合し、"}<strong>{"統合された状態で正しく動く"}</strong>{"ことを確認する "}</td></tr><tr className="even"><td>{"含めるもの"}</td><td>{" 統合計画、統合テスト、テスト結果の記録、回帰テスト、問題の記録 "}</td></tr></tbody></table></div>

<h4 id="57-ソフトウェアシステムテスト">{"5.7 ソフトウェアシステムテスト"}</h4>

<div className="table-scroll"><table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"目的"}</td><td>{"すべてのソフトウェア要求が満たされているかを確認する"}</td></tr><tr className="even"><td>{"成果物"}</td><td>{"システムテスト計画・手順・結果、要求とのトレーサビリティ"}</td></tr><tr className="odd"><td>{"注意"}</td><td>{" 不具合が出たら問題解決プロセス（箇条9）を使う。変更後は"}<strong>{"回帰テスト"}</strong></td></tr></tbody></table></div>

<h4 id="58-ソフトウェアリリース">{"5.8 ソフトウェアリリース"}</h4>

<div className="table-scroll"><table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"目的"}</td><td>{" 検証が完了したソフトウェアを、管理された形で"}<strong>{"ソフトウェアとして"}</strong>{"リリースする "}</td></tr><tr className="even"><td>{"含めるもの"}</td><td>{" 全クラス（A・B・C）：既知の残存異常の文書化、リリース版の識別（バージョン）。クラスB・C：既知の残存異常の評価、リリースしたソフトウェアの生成手順・環境の記録（ビルドの再現性）、計画上の活動・タスクと関連文書の完了確認（5.8.6）。全クラス（A・B・C）：ソフトウェアのアーカイブ（5.8.7）、信頼できる配布の確保（5.8.8）。あわせてリリース記録を残す "}</td></tr><tr className="odd"><td>{"注意"}</td><td>{" これは"}<strong>{"ソフトウェアのリリース"}</strong>{"であり、医療機器としての最終リリースとは別 "}</td></tr></tbody></table></div>
</>; }

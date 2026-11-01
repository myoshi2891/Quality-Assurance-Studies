import React from 'react';
export default function Category9() { return <>
<h2 id="9-step-7-附属書abcの読み方">{"9. Step 7: 附属書A・B・Cの読み方"}</h2>

<h3 id="91-附属書a規範-追加のiot構築パターン">{"9.1 附属書A（規範）: 追加のIoT構築パターン"}</h3>

<p>{"「規範」は、この規格の一部として"}<strong>{"従うべき内容"}</strong>{"という位置づけです。目次から次の5つが確認できます。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"附属書"}</th><th>{"パターン"}</th><th>{"学習のポイント"}</th></tr></thead><tbody><tr className="odd"><td>{"A.2"}</td><td>{"RAMI 4.0 パターン"}</td><td>{"製造業（インダストリー4.0）の参照モデルとIoT RAをどう対応づけるか"}</td></tr><tr className="even"><td>{"A.3"}</td><td>{"動的IoTシステムパターン"}</td><td>{"状況に応じてサービスを組み合わせる仕組み（DSC）と、そのメッセージフロー"}</td></tr><tr className="odd"><td>{"A.4"}</td><td>{"IoTエンタープライズシステムパターン"}</td><td>{"システム配置のモデル（Figure A.5）"}</td></tr><tr className="even"><td>{"A.5"}</td><td>{"IoTエンタープライズネットワーキングパターン"}</td><td>{"ネットワークのモデル（Figure A.6）"}</td></tr><tr className="odd"><td>{"A.6"}</td><td>{"IoTエンタープライズ利用パターン"}</td><td>{"運用時の役割と活動（IoTサービス提供者、サービス開発者、デバイス・アプリ開発の活動、セキュリティ分析での利用など）"}</td></tr></tbody></table></div>

<h3 id="92-附属書b参考-isoiecieee-420102022-の使い方">{"9.2 附属書B（参考）: ISO/IEC/IEEE 42010:2022 の使い方"}</h3>

<p>{"この規格が"}<strong>{"アーキテクチャ記述としてどう作られているか"}</strong>{"を説明する附属書です（ステークホルダー・関心事、ビューポイント、モデル種別、凡例、対応関係、ビューとモデル、対応関係）。"}</p>

<p>{"序文（Introduction）の0.1には「アスペクト、パースペクティブ、決定事項、根拠を除き、42010:2022の要求に適合する」と書かれています。自分のプロジェクトでアーキテクチャ記述を作るときの"}<strong>{"お手本"}</strong>{"になります。"}</p>

<h3 id="93-附属書c参考-iotシステムの特性">{"9.3 附属書C（参考）: IoTシステムの特性"}</h3>

<p>{"目次から、次のような特性が整理されていることが分かります。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"区分"}</th><th>{"特性（目次の項目名）"}</th></tr></thead><tbody><tr className="odd"><td>{"共通特性"}</td><td>{"レガシー対応、ネットワーク接続、一意な識別、明確に定義された構成要素、自動構成、コンテンツ認識、コンテキスト認識、発見可能性、管理可能性、ネットワーク管理と運用、リアルタイム性、自己記述、サービス購読"}</td></tr><tr className="even"><td>{"信頼性関連"}</td><td>{"データ特性（量・速度・真正性・変動性・多様性）、PII（個人を特定できる情報）の保護、柔軟性"}</td></tr></tbody></table></div>

<p><strong>{"QAエンジニア向けの活用ヒント"}</strong>{": これらの特性は、"}<strong>{"非機能要件のチェックリスト"}</strong>{"の種になります。たとえば「発見可能性」「自己記述」「リアルタイム性」は、テスト観点の洗い出しに使えます。"}</p>

<hr />
</>; }

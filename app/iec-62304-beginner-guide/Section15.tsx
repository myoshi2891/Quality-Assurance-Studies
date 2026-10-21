import React from 'react';
import Diagram from './Diagram';
export default function Section15() { return <><h2 id="sec-33">{"15. アジャイル・CI/CDとの付き合い方"}</h2>

<p>{" 62304は特定のモデルを指定しません。アジャイルでも適合できますが、"}<strong>{"規格の活動とのマッピング"}</strong>{"を説明できることが条件です。 "}</p>

<Diagram id="mmd-14" />

<div className="table-scroll"><table><thead><tr className="header"><th>{"規格の活動"}</th><th>{"アジャイル／CI/CDでの対応例"}</th></tr></thead><tbody><tr className="odd"><td>{"開発計画"}</td><td>{"開発計画書に、スプリント運用と成果物の対応を記載"}</td></tr><tr className="even"><td>{"要求事項"}</td><td>{"バックログ項目を要求仕様と紐付け、受入基準をテストに接続"}</td></tr><tr className="odd"><td>{"ユニット検証"}</td><td>{"CIで自動実行されるユニットテスト、静的解析、レビュー"}</td></tr><tr className="even"><td>{"構成管理"}</td><td>{"ブランチ戦略、タグ、ビルドの再現性"}</td></tr><tr className="odd"><td>{"変更管理"}</td><td>{"プルリクエストと変更要求の紐付け、承認の記録"}</td></tr><tr className="even"><td>{"リリース"}</td><td>{"リリース判定のチェックリスト、既知異常の評価記録"}</td></tr></tbody></table></div>

<aside className="callout callout-warn"><div className="callout-icon">{"⚠"}</div><div className="callout-body"><p>{" 注意：自動化した記録は、"}<strong>{"監査で提示できる形で保管・追跡"}</strong>{"できる必要があります。ツール自体の妥当性確認（ツールバリデーション）も品質システム側で検討してください。 "}</p></div></aside>
</>; }

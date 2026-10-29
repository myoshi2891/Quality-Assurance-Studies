import React from 'react';
export default function Section13() { return <>
<h2 id="step-12qa-エンジニア視点のテスト観点">{"Step 12：QA\nエンジニア視点のテスト観点"}</h2>

<div className="callout callout-note"><div className="callout-label">{"ℹ メモ"}</div><p>{"この章は "}<strong>{"【筆者の提案】"}</strong>{"\nです。規格が定めるテスト項目ではなく、公開情報から導いた実務上のチェック観点です。"}</p></div>

<h3 id="12-1-mpd-そのものの検証">{"12-1. MPD そのものの検証"}</h3>

<div aria-label="表：12-1. MPD そのものの検証" className="table-scroll" role="region" tabIndex={0}><table><thead><tr className="header"><th>{"観点"}</th><th>{"確認内容"}</th></tr></thead><tbody><tr className="odd"><td>{"スキーマ妥当性"}</td><td>{"XML が MPD のスキーマに沿っているか"}</td></tr><tr className="even"><td><code>{"profiles"}</code>{" 宣言の整合"}</td><td>{"宣言したプロファイルの範囲を超える機能を使っていないか"}</td></tr><tr className="odd"><td>{"Period の連続性"}</td><td>{"Period の境目で時間が欠落・重複していないか"}</td></tr><tr className="even"><td>{"セグメント URL"}</td><td>{"テンプレートから生成される URL が、要求の種類と可用性ウィンドウに応じた期待どおりの応答を返すか（全体取得は 200、バイト範囲要求は 206。可用性ウィンドウ外のセグメントは取得できない扱い）"}</td></tr><tr className="odd"><td>{"セグメント長の整合"}</td><td>{"SegmentTimeline の合計と実ファイルの長さが一致するか"}</td></tr></tbody></table></div>

<h3 id="12-2-再生abr-の検証">{"12-2. 再生・ABR の検証"}</h3>

<div aria-label="表：12-2. 再生・ABR の検証" className="table-scroll" role="region" tabIndex={0}><table><thead><tr className="header"><th>{"観点"}</th><th>{"確認内容"}</th></tr></thead><tbody><tr className="odd"><td>{"初期画質"}</td><td>{"起動直後の Representation 選択が妥当か"}</td></tr><tr className="even"><td>{"帯域低下"}</td><td>{"帯域を制限したとき、リバッファを起こさず画質を下げるか"}</td></tr><tr className="odd"><td>{"帯域回復"}</td><td>{"回復後に画質が適切に戻るか（過度な振動がないか）"}</td></tr><tr className="even"><td>{"シーク"}</td><td>{"シーク後の再開時間は許容範囲か"}</td></tr><tr className="odd"><td>{"音声・字幕切替"}</td><td>{"AdaptationSet の切替が映像と同期しているか"}</td></tr></tbody></table></div>

<h3 id="12-3-ライブ特有の検証">{"12-3. ライブ特有の検証"}</h3>

<div aria-label="表：12-3. ライブ特有の検証" className="table-scroll" role="region" tabIndex={0}><table><thead><tr className="header"><th>{"観点"}</th><th>{"確認内容"}</th></tr></thead><tbody><tr className="odd"><td>{"時刻同期"}</td><td>{"クライアント時刻がずれても、取得可能なセグメントを正しく計算できるか"}</td></tr><tr className="even"><td>{"MPD 更新"}</td><td><code>{"minimumUpdatePeriod"}</code>{" に沿って更新を取得できているか"}</td></tr><tr className="odd"><td>{"低遅延"}</td><td>{"目標レイテンシと再生レートの調整が機能しているか"}</td></tr><tr className="even"><td>{"DVR"}</td><td><code>{"timeShiftBufferDepth"}</code>{" の範囲でシークできるか（省略時は、有効な利用可能開始時刻から始まるタイムシフトバッファ内でシークできるか）"}</td></tr></tbody></table></div>

<h3 id="12-4-第6版の新機能に関する検証導入する場合">{"12-4.\n第6版の新機能に関する検証（導入する場合）"}</h3>

<div aria-label="表：12-4. 第6版の新機能に関する検証（導入する場合）" className="table-scroll" role="region" tabIndex={0}><table><thead><tr className="header"><th>{"機能"}</th><th>{"確認の例"}</th></tr></thead><tbody><tr className="odd"><td>{"コンテンツステアリング"}</td><td>{"制御サーバーの指示で CDN\nを切り替えても再生が途切れないか。制御サーバーが落ちたときの挙動は適切か"}</td></tr><tr className="even"><td>{"CMCD"}</td><td>{"送信されるパラメータが仕様どおりか。個人情報にあたる値を含めていないか"}</td></tr><tr className="odd"><td>{"代替メディア・非線形再生"}</td><td>{"メイン⇄代替の切替が滑らかか。戻り先が正しいか"}</td></tr><tr className="even"><td>{"バックグラウンドモード"}</td><td>{"映像を描画しない間も MPD 更新・イベントを受信し続けるか"}</td></tr><tr className="odd"><td>{"セグメント長パターン"}</td><td>{"パターンから復元した時刻が実ファイルと一致するか"}</td></tr></tbody></table></div>

</>; }

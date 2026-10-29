import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
// 図ごとの簡潔な名前（aria-label）
const LABELS: Record<string, string> = {
'mermaid-diagram-1': 'エンコードからプレーヤーまでのDASH配信の流れ図',
'mermaid-diagram-2': 'MPDからSegmentまでの階層構造図',
'mermaid-diagram-3': 'MPDのtype属性による配信形態の分岐図',
'mermaid-diagram-4': 'DASHクライアントの再生とビットレート切替の流れ図',
'mermaid-diagram-5': '第6版の主な強化点6項目の関係図',
'mermaid-diagram-6': 'コンテンツステアリングによるCDN切替のシーケンス図',
};
// 図の関係・順序を支援技術へ伝える説明文（aria-describedby の参照先）
const DESCRIPTIONS: Record<string, string> = {
'mermaid-diagram-1': '元の動画・音声を複数ビットレートでエンコードし、セグメント化して MPD を生成、HTTP サーバー / CDN に置く。DASH クライアント（プレーヤー）は CDN から取得し、回線状況に応じて次の画質を選んで CDN へ要求する。',
'mermaid-diagram-2': 'ルート要素の MPD は Period 1（本編）と Period 2（広告）を持つ。Period 1 は映像・音声（日本語）・字幕の AdaptationSet を持ち、映像の AdaptationSet は 1080p / 5 Mbps・720p / 3 Mbps・360p / 0.8 Mbps の Representation を持つ。1080p の Representation は数秒ごとのファイルである Segment 群から成る。',
'mermaid-diagram-3': 'MPD の type 属性が static ならオンデマンド配信で全セグメントが既に存在し、mediaPresentationDuration で総再生時間が分かる。dynamic ならライブ配信でセグメントが時間とともに増え、availabilityStartTime を基準に今取得できるセグメントを計算し、minimumUpdatePeriod があればその間隔で MPD の更新を確認し、省略時は MPD が変わらない（無限に続くセグメント列も表せる）。',
'mermaid-diagram-4': '① MPD を HTTP で取得、② MPD を解析、③ 再生する Representation を選ぶ、④ 初期化セグメントを取得、⑤ メディアセグメントを順に取得、⑥ バッファに貯めて再生する。帯域とバッファに余裕があればより高いビットレートへ、不足ならより低いビットレートへ切り替え、適正ならそのまま⑤へ戻る。type が dynamic なら MPD を再取得 / Patch を適用して⑤へ戻る。',
'mermaid-diagram-5': 'ISO/IEC 23009-1:2026 第6版の主な強化点は、代替メディアプレゼンテーション、コンテンツステアリング、セグメントシーケンスアドレッシング、パターンによるコンパクトな長さ表現、CMCD（クライアントデータ）、非線形再生の6つ。',
'mermaid-diagram-6': 'DASH プレーヤーは CDN A から MPD を、制御サーバーから制御用マニフェストを取得し、CDN A 優先の指示に従ってセグメントを取得する。制御サーバーが CDN A の劣化を検知した後の定期的な再問い合わせで CDN B 優先の指示を受け、CDN B からセグメントを取得する（再生は継続）。',
};
export default function Diagram({ id }: { id: string }) {
const descId = `${id}-desc`;
return <div aria-describedby={descId} aria-label={LABELS[id]} className="mermaid-diagram" id={id} role="img" tabIndex={0}><p hidden id={descId}>{DESCRIPTIONS[id]}</p><Mermaid chart={DIAGRAMS[id]!} /></div>;
}

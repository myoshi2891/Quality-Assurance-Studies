'use client';
import React, { useState } from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
const descriptions = [
  "第1章から第4章で概念をつかみ、第5章から第9章で規格の中身を理解し、第10章から第11章で導入と認証の進め方へ進む。次に第12章から第16章で周辺知識と実務への接続を学び、第17章のチェックリストで自己診断する。",
  "2020年8月の新規プロジェクト承認から、2021年から2022年の委員会ドラフト検討、2022年9月のDIS登録、2023年6月のFDIS登録を経て、2023年12月18日の規格発行に至る。",
  "Plan 計画（箇条4 組織の状況、箇条5 リーダーシップ、箇条6 計画、箇条7 支援）から、Do 実行（箇条8 運用）、Check 評価（箇条9 パフォーマンス評価）、Act 改善（箇条10 改善）へ進み、再びPlanに戻る循環。",
  "AIシステムの一覧を作るところから、AIリスクアセスメント 箇条6.1.2、AIリスク対応の選択 箇条6.1.3、必要な管理策を決定、附属書Aと照合して見落としを確認、適用宣言書 SoA を作成の順に進む。「残留リスクは許容できるか」が「はい」ならリスク所有者が承認し、「いいえ」ならAIリスク対応の選択に戻る。",
  "目標設定 A.6.1から、要求仕様 A.6.2.2、設計と開発 A.6.2.3、検証と妥当性確認 A.6.2.4、展開 A.6.2.5、運用と監視 A.6.2.6、改善や廃止の判断へ順に進み、要求仕様に戻る。",
  "1 経営層の合意と推進体制の決定から、2 AIの棚卸し（利用中と計画中の全システム）、3 組織の状況と利害関係者の整理、4 適用範囲の決定、5 AI方針と目標の策定、6 ギャップ分析（現状と規格の差の把握）、7 リスクアセスメントと影響評価の実施、8 管理策の選択とSoA作成、9 手順整備 教育 運用開始、10 監視と記録の蓄積、11 内部監査とマネジメントレビューへ順に進む。「認証を取得するか」が「はい」なら認証機関へ審査を申し込む。「いいえ」なら自己宣言として運用し改善を続ける。",
  "認証機関を選び申込から、ステージ1審査（文書と準備状況の確認）、ステージ2審査（運用の実施状況の確認）へ進む。「不適合はあるか」が「はい」なら是正処置を実施し結果を提出して認証判定へ進み、「いいえ」なら直接認証判定へ進む。その後、認証書の発行、毎年のサーベイランス審査、サイクル終了時に更新審査へ進み、認証書の発行に戻る。",
  "ISO/IEC 22989 AIの概念と用語、ISO/IEC 23053 機械学習を使うAIシステムの枠組み、ISO/IEC 23894 AIのリスク管理の指針、ISO/IEC 42005 AIシステム影響評価、ISO/IEC 27001 情報セキュリティが、それぞれISO/IEC 42001 AIマネジメントシステム 要求事項につながる。42001からISO/IEC 42006 認証機関の要求事項へつながる。",
  "EU AI Act 第17条 品質マネジメントシステムの要求から、EN 18286 2026 規制対応のQMS規格へつながり、「2026年10月14日 官報掲載、対象要求に適合推定」へ進む。ISO/IEC 42001 組織全体のAIMSは、組織の統治と運用の基盤として役立つことを通じてEN 18286につながる。"
];
/** Render the original chart with an accessible explanation and visible failure fallback. */
export default function Diagram({index}:{index:number}) { const [failed,setFailed]=useState(false);const label='diagram-'+index+'。'+descriptions[index];return <div className="mermaid-diagram" id={'diagram-'+index} role="img" aria-label={label}><Mermaid chart={DIAGRAMS[index]!} onRenderError={()=>setFailed(true)} />{failed && <p role="alert">図表の描画に失敗しました。{label}</p>}</div>; }

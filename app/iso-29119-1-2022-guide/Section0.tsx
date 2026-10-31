import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_01 } from './diagrams';

export default function Section0() {
  return (
    <section>
      <h2 id="step-0このガイドの使い方と前提">STEP 0：このガイドの使い方と前提</h2>
      <h3 id="0-1-学習ロードマップ">0-1. 学習ロードマップ</h3>
      <p>
        規格の章立て（4.1 → 4.7 → 附属書）に沿って進みます。各STEPは「結論 → 図解 →
        具体例 → 確認」の順で読めます。
      </p>
      <div aria-label="図解1" className="mermaid-diagram" id="mmd01" role="img">
        <Mermaid chart={DIAGRAM_01} />
      </div>
      <h3 id="0-2-このガイドの根拠と限界重要">0-2. このガイドの根拠と限界（重要）</h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>項目</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>規格本文の入手性</td>
              <td>
                ISO/IEC/IEEE 29119-1:2022 の本文は、ISO・IEC
                の公開ページで<strong>無償提供</strong>されています
              </td>
            </tr>
            <tr className="even">
              <td>本ガイドと規格本文の関係</td>
              <td>
                本ガイドは<strong>規格本文を転載していません</strong>。本文の記述は要約・言い換えで紹介し、正確な文言は公開ページの正式版で確認してください
              </td>
            </tr>
            <tr className="odd">
              <td>著作権・利用条件</td>
              <td>
                無償提供は閲覧・ダウンロードを認めるものであり、著作権は
                ISO・IEC・IEEE
                に帰属します。複製・再配布・転載は各機関の利用条件に従ってください
              </td>
            </tr>
            <tr className="even">
              <td>実際に確認できた一次情報</td>
              <td>
                ISO公式ページ、IECストア、各国規格機関の目次・要約、公開プレビュー（序文・変更点・目次・用語定義の冒頭部分）
              </td>
            </tr>
            <tr className="odd">
              <td>記述の区分</td>
              <td>
                「規格が述べていること」と「解説者による補足・具体例」を、表や注記で区別しています
              </td>
            </tr>
            <tr className="even">
              <td>補足例の扱い</td>
              <td>
                各STEPの具体例（年齢入力、決定表、組合せ表など）は<strong>学習用に作成した例</strong>であり、規格本文の例ではありません
              </td>
            </tr>
            <tr className="odd">
              <td>厳密な適合判断</td>
              <td>
                認証・契約・監査で使う場合は、必ず規格の正式版（および適合条項を持つ
                Part 2・3・4・5）を参照してください
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <aside className="callout callout-practice">
        <div className="callout-title">学習のヒント</div>
        <div className="callout-body">
          <p>
            Part 1
            は「情報提供（informative）」の位置付けです。「守らなければならない要求事項」が並ぶ文書ではなく、<strong>テストの考え方と用語をそろえるための土台</strong>として読むと理解しやすくなります。
          </p>
        </div>
      </aside>
    </section>
  );
}

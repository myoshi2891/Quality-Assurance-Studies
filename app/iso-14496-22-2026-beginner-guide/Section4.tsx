import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_03 } from './diagrams';

export default function Section4() {
  return (
    <section className="chapter" id="ch4">
      <h2 id="ch4-h">4. ISO 規格と OpenType 仕様の関係</h2>
      <div className="callout-practice">
        <div className="ic">💡</div>
        <div>
          <div className="ttl">この章のねらい</div>
          <p>
            この章では、「ISO の規格」と「Microsoft の OpenType
            仕様」の関係を整理します。実際の開発では、無料で読める Microsoft
            の仕様書を参照することが多いためです。
          </p>
        </div>
      </div>
      <p className="why-note">
        <strong>なぜ整理するのか：</strong>
        「規格を読みたいが有料」という場面で、どの資料をどこまで頼れるかを判断するためです。
      </p>
      <p>
        Microsoft の OpenType 仕様書（バージョン
        1.9.1）のトップページには、次の趣旨の記載があります。
      </p>
      <ul>
        <li>
          <strong>
            OpenType 1.9.1 は、ISO/IEC 14496-22 第5版の「作業草案（preliminary
            working draft）」の改訂内容を取り込んでいる
          </strong>
        </li>
        <li>仕様書の変更履歴では、1.9.1 は 2024年5月のリリースと記録されている</li>
        <li>
          同じ変更履歴は 2026年9月にも更新されており、新しい Unicode
          のスクリプトタグ（Unicode 17.0、18.0
          向け）が「リリース後の更新」として追加されている
        </li>
      </ul>
      <p>この図は、2つの文書の関係です。</p>
      <div className="mermaid-diagram">
        <Mermaid chart={DIAGRAM_03} />
      </div>
      <p>各ノードの意味：</p>
      <ul>
        <li>「作業草案」：両方の元になった同じ原稿</li>
        <li>「OpenType 1.9.1」：無料で読める実務向けの仕様書（図や例が豊富）</li>
        <li>
          「ISO 2026」：正式な国際規格。
          <strong>最終本文は作業草案から変わっている可能性がある</strong>
        </li>
        <li>
          「差分の確認」：このガイドでは未確認の部分。厳密な適合性が必要な場合は、規格本文との照合が必要
        </li>
      </ul>
      <h3 id="実務での使い分け">実務での使い分け</h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>目的</th>
              <th>おすすめの資料</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>仕組みを学ぶ・実装する</td>
              <td>Microsoft OpenType 1.9.1（無料）</td>
            </tr>
            <tr className="even">
              <td>契約や認証で「ISO 準拠」を主張する</td>
              <td>ISO/IEC 14496-22:2026 本文</td>
            </tr>
            <tr className="odd">
              <td>各ライブラリの挙動を知る</td>
              <td>HarfBuzz・Fontations などの公式ドキュメント</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="glossary">
        <div className="gt">📖 このセクションで登場した用語</div>
        <dl>
          <div className="g">
            <dt>適合性（コンフォーマンス）</dt>
            <dd>システムやフォントが規格の要求をどれだけ満たしているか</dd>
          </div>
          <div className="g">
            <dt>作業草案（preliminary working draft）</dt>
            <dd>ISO で正式な審議に入る前に作られる準備用の原稿</dd>
          </div>
          <div className="g">
            <dt>スクリプトタグ</dt>
            <dd>文字体系を表す4文字の目印（例：日本語は kana）</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}


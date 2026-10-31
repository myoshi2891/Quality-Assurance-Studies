import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_11 } from './diagrams';

export default function Section14() {
  return (
    <section className="chapter" id="ch14">
      <h2 id="ch14-h">14. まとめと学習ロードマップ</h2>
      <div className="callout-practice">
        <div className="ic">💡</div>
        <div>
          <div className="ttl">この章のねらい</div>
          <p>この章では、全体を振り返り、次に何を学ぶかの順序を示します。</p>
        </div>
      </div>
      <h3 id="14-1-要点の整理">14-1. 要点の整理</h3>
      <ol type="1">
        <li>
          ISO/IEC 14496-22:2026 は
          <strong>OpenType（Open Font Format）の国際規格</strong>で、第5版として
          2026年7月に発行された（1003ページ）
        </li>
        <li>
          フォントは
          <strong>sfnt というコンテナ</strong>
          で、「目次（テーブルディレクトリ）＋テーブル」でできている
        </li>
        <li>
          文字表示は
          <strong>cmap → GSUB → GPOS → 輪郭 → ラスタライズ</strong> の順に進む
        </li>
        <li>
          <strong>可変フォント</strong>
          は、デフォルトの輪郭と差分（デルタ）で連続的な変化を表す
        </li>
        <li>
          実装は HarfBuzz（シェーピング）や Fontations/Skrifa（Rust
          製の読み書き）などが支えている
        </li>
        <li>
          規格と無料の OpenType 1.9.1 仕様書は内容が近いが、
          <strong>最終本文との差分は購入して確認する必要がある</strong>
        </li>
      </ol>
      <h3 id="14-2-学習ロードマップ">14-2. 学習ロードマップ</h3>
      <p>この図は、初学者が進める順序の例です。</p>
      <div className="mermaid-diagram">
        <Mermaid chart={DIAGRAM_11} />
      </div>
      <p>各ノードの意味：</p>
      <ul>
        <li>
          「ステップ1」：章5の Python
          コードを自分の環境で動かし、実際のフォントで試す
        </li>
        <li>「ステップ2」：文字を数値に変え、構造の理解を深める</li>
        <li>
          「ステップ3〜4」：応用機能に進む。gvar は TrueType の glyf
          輪郭向けの差分テーブルなので、CFF2 輪郭のフォントも対象にする場合は CFF2
          テーブル内の差分（blend 演算）を読む経路も学ぶ
        </li>
        <li>「ステップ5」：既成のエンジンの結果と、自分の理解を突き合わせる</li>
        <li>
          「ステップ6」：厳密さが必要になった段階で、本文を購入して差分を確認する
        </li>
      </ul>
      <div className="glossary">
        <div className="gt">📖 このセクションで登場した用語</div>
        <dl>
          <div className="g">
            <dt>ロードマップ</dt>
            <dd>学習の道筋を順序立てて示したもの</dd>
          </div>
          <div className="g">
            <dt>照合</dt>
            <dd>2つの資料の内容を突き合わせて違いを確認すること</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

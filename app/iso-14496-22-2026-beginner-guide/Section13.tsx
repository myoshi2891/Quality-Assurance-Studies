import React from 'react';

export default function Section13() {
  return (
    <section className="chapter" id="ch13">
      <h2 id="ch13-h">13. QA・テスト観点：フォント対応を検証するには</h2>
      <div className="callout-practice">
        <div className="ic">💡</div>
        <div>
          <div className="ttl">この章のねらい</div>
          <p>
            この章では、QA
            エンジニアの視点で、フォントに関わる機能のテスト観点を整理します。
          </p>
        </div>
      </div>
      <p className="why-note">
        <strong>なぜこの章を入れるのか：</strong>
        フォントの不具合は「特定の環境でだけ文字が崩れる」という形で現れ、原因の切り分けが難しいためです。章7の表示パイプラインに沿って観点を並べると、漏れを減らせます。
      </p>
      <h3 id="13-1-パイプライン段階別のテスト観点">
        13-1. パイプライン段階別のテスト観点
      </h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>段階</th>
              <th>起きる不具合の例</th>
              <th>確認の観点</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>ファイル読み込み</td>
              <td>フォントが読み込めない、拒否される</td>
              <td>
                テーブルディレクトリの整合性、チェックサム、sfntVersion の対応
              </td>
            </tr>
            <tr className="even">
              <td>cmap</td>
              <td>文字が表示されず豆腐（□）になる</td>
              <td>Unicode 対応範囲、IVS（異体字）の format 14 の有無</td>
            </tr>
            <tr className="odd">
              <td>GSUB</td>
              <td>合字が出ない、異体字が切り替わらない</td>
              <td>機能タグ（liga、vert、jp04 等）の指定とエンジンの解釈</td>
            </tr>
            <tr className="even">
              <td>GPOS</td>
              <td>濁点や記号の位置がずれる</td>
              <td>位置調整ルールとアプリの対応状況</td>
            </tr>
            <tr className="odd">
              <td>輪郭／ヒンティング</td>
              <td>小サイズで形が崩れる</td>
              <td>環境（OS、ラスタライザ）ごとの見え方の比較</td>
            </tr>
            <tr className="even">
              <td>可変フォント</td>
              <td>太さを変えても反映されない</td>
              <td>fvar／STAT の有無、アプリが可変フォントに対応しているか</td>
            </tr>
            <tr className="odd">
              <td>カラー</td>
              <td>色が出ない、白黒になる</td>
              <td>
                COLR
                v0/v1・SVG・ビットマップのうち何を持つか、環境の対応状況
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="13-2-セキュリティ堅牢性のテスト観点">
        13-2. セキュリティ・堅牢性のテスト観点
      </h3>
      <p>章12の Chrome の事例から、次の観点が導けます。</p>
      <ol type="1">
        <li>
          <strong>壊れたフォント入力</strong>：numTables
          に実際より大きな値、offset や length がファイル範囲外、など
        </li>
        <li>
          <strong>探索補助値への依存</strong>：searchRange
          などの値を信用していないか（仕様書が非推奨としている点）
        </li>
        <li>
          <strong>未知のバージョン</strong>
          ：仕様書によると、未対応のメジャーバージョンのテーブルは「存在しない」として扱う必要がある
        </li>
        <li>
          <strong>重複テーブル</strong>
          ：同じタグが複数ある場合の挙動が不定になるため、拒否または安全な側に倒す
        </li>
      </ol>
      <h3 id="13-3-回帰テストの比較方法">13-3. 回帰テストの比較方法</h3>
      <p>
        Chrome のチームは、Skrifa と FreeType
        の出力を大量のフォントと設定で比べる専用ツール（fauntlet）や、Skia
        上の画素比較を使って、品質低下を防いでいます。同じ考え方で、
        <strong>「旧実装と新実装の出力を同じ入力で比較する」</strong>
        方式は、フォント関連ライブラリの更新時の回帰テストに応用できます。
      </p>
      <div className="glossary">
        <div className="gt">📖 このセクションで登場した用語</div>
        <dl>
          <div className="g">
            <dt>豆腐</dt>
            <dd>対応するグリフがなく、□で表示される状態</dd>
          </div>
          <div className="g">
            <dt>回帰テスト</dt>
            <dd>変更で既存の動作が壊れていないかを確かめるテスト</dd>
          </div>
          <div className="g">
            <dt>堅牢性</dt>
            <dd>不正な入力でも安全に動き続ける性質</dd>
          </div>
          <div className="g">
            <dt>画素比較</dt>
            <dd>画面の絵を画素単位で比べるテスト手法</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}


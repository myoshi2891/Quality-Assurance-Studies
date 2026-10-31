import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_04 } from './diagrams';

export default function Section5() {
  return (
    <section className="chapter" id="ch5">
      <h2 id="ch5-h">5. フォントファイルの構造：sfnt コンテナを読んでみる</h2>
      <div className="callout-practice">
        <div className="ic">💡</div>
        <div>
          <div className="ttl">この章のねらい</div>
          <p>
            この章では、フォントファイルをバイナリとして開いたときの「最初の数バイト」を読み解きます。
          </p>
        </div>
      </div>
      <p className="why-note">
        <strong>なぜ構造を先に見るのか：</strong>
        フォントファイルは「テーブルの目次」と「各テーブルの中身」という2層構造を持っています。この目次が読めるようになると、後の章に出てくるすべてのテーブルを自分で取り出せるようになります。
      </p>
      <p>この図は、ファイルを開いたときに目次を読む手順です。</p>
      <div className="mermaid-diagram">
        <Mermaid chart={DIAGRAM_04} />
      </div>
      <h3 id="5-1-ファイル先頭のテーブルディレクトリ">
        5-1. ファイル先頭のテーブルディレクトリ
      </h3>
      <p>
        単体の sfnt フォント（.ttf または .otf）は、ファイル先頭（オフセット
        0）に<strong>テーブルディレクトリ（Table Directory）</strong>を持ちます。先頭の
        12 バイトは次の形式です。
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>オフセット</th>
              <th>型</th>
              <th>名前</th>
              <th>意味</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>0</td>
              <td>uint32（または Tag）</td>
              <td>sfntVersion</td>
              <td>0x00010000（TrueType 輪郭）または 0x4F54544F（'OTTO'、CFF 輪郭）</td>
            </tr>
            <tr className="even">
              <td>4</td>
              <td>uint16</td>
              <td>numTables</td>
              <td>このフォントに含まれるテーブルの個数</td>
            </tr>
            <tr className="odd">
              <td>6</td>
              <td>uint16</td>
              <td>searchRange</td>
              <td>(2^maxPower) * 16。二分探索用の計算値</td>
            </tr>
            <tr className="even">
              <td>8</td>
              <td>uint16</td>
              <td>entrySelector</td>
              <td>maxPower。numTables 以下の最大の2のべき乗の指数</td>
            </tr>
            <tr className="odd">
              <td>10</td>
              <td>uint16</td>
              <td>rangeShift</td>
              <td>numTables * 16 - searchRange</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="why-note">
        <strong>なぜ searchRange などの計算値があるのか：</strong>
        昔の遅いコンピュータで二分探索を少しでも高速化するために、ヘッダにあらかじめ計算結果を入れておく設計の名残です。仕様書自身が「安全のため、実装側で
        numTables から再計算して使うこと」を推奨しています。
      </p>
      <h3 id="5-2-各テーブルの目次tablerecord">5-2. 各テーブルの目次（TableRecord）</h3>
      <p>
        先頭 12 バイトのすぐ後ろに、<code>numTables</code>
        個の<strong>テーブルレコード（TableRecord）</strong>が並びます。1件あたり16バイトです。
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>オフセット</th>
              <th>型</th>
              <th>名前</th>
              <th>意味</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>0</td>
              <td>Tag（4バイト）</td>
              <td>tableTag</td>
              <td>テーブルの4文字識別子（例：'cmap'、'glyf'、'head'）</td>
            </tr>
            <tr className="even">
              <td>4</td>
              <td>uint32</td>
              <td>checksum</td>
              <td>このテーブルのチェックサム（破損検査用）</td>
            </tr>
            <tr className="odd">
              <td>8</td>
              <td>Offset32</td>
              <td>offset</td>
              <td>ファイル先頭から、このテーブルの開始位置までのバイト数</td>
            </tr>
            <tr className="even">
              <td>12</td>
              <td>uint32</td>
              <td>length</td>
              <td>このテーブルの実際のバイト数</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="why-note">
        <strong>なぜ Tag は4文字なのか：</strong>
        C言語の4バイト整数（uint32）にそのまま収まる長さとして決められた伝統です。メモリやファイル上では4バイトの数値としても、4文字の文字列としても扱えます。
      </p>
      <h3 id="5-3-実際に-python-で先頭12バイトを読んでみる">
        5-3. 実際に Python で先頭12バイトを読んでみる
      </h3>
      <p>
        手元のフォントファイルの中身を確かめるための、最小限の Python コードです。
      </p>
      <pre className="py">
        <code>
          <span className="tok-k">import</span> struct <span className="tok-c"># バイト列を数値に変換する標準ライブラリ。ビッグエンディアン指定に使う</span>{'\n\n'}
          <span className="tok-k">def</span> read_table_directory(path):{'\n'}
          {'    '}<span className="tok-k">with</span> open(path, <span className="tok-s">"rb"</span>) <span className="tok-k">as</span> f:{'\n'}
          {'        '}<span className="tok-c"># 先頭12バイトが目次の見出し部分。</span>{'\n'}
          {'        '}<span className="tok-c"># "&gt;" はビッグエンディアンの指定。OpenType は必ずこの並びのため、</span>{'\n'}
          {'        '}<span className="tok-c"># 指定を忘れると数値が逆順に読めてしまう。</span>{'\n'}
          {'        '}header = f.read(<span className="tok-n">12</span>){'\n'}
          {'        '}sfnt_version, num_tables, _sr, _es, _rs = struct.unpack(<span className="tok-s">"&gt;4sHHHH"</span>, header){'\n\n'}
          {'        '}<span className="tok-c"># searchRange など3つの値は読み捨てる（_ で始まる変数名）。</span>{'\n'}
          {'        '}<span className="tok-c"># 仕様書が「numTables から自分で計算し直すこと」を推奨しているため。</span>{'\n\n'}
          {'        '}<span className="tok-c"># フォントコレクション（ttcf）はこの関数の対象外。</span>{'\n'}
          {'        '}<span className="tok-c"># 構造が違う（TTC ヘッダが先頭に来る）ため、先に弾く。</span>{'\n'}
          {'        '}<span className="tok-k">if</span> sfnt_version == <span className="tok-s">b"ttcf"</span>:{'\n'}
          {'            '}<span className="tok-k">raise</span> ValueError(<span className="tok-s">"フォントコレクションです。TTC ヘッダの読み取りが必要です"</span>){'\n\n'}
          {'        '}records = []{'\n'}
          {'        '}<span className="tok-k">for</span> _ <span className="tok-k">in</span> range(num_tables):{'\n'}
          {'            '}<span className="tok-c"># TableRecord は1件16バイト（tag 4 + checksum 4 + offset 4 + length 4）。</span>{'\n'}
          {'            '}tag, checksum, offset, length = struct.unpack(<span className="tok-s">"&gt;4sIII"</span>, f.read(<span className="tok-n">16</span>)){'\n'}
          {'            '}records.append(&#123;{'\n'}
          {'                '}<span className="tok-s">"tag"</span>: tag.decode(<span className="tok-s">"ascii"</span>), <span className="tok-c"># Tag は表示可能な ASCII と決まっている</span>{'\n'}
          {'                '}<span className="tok-s">"checksum"</span>: checksum,{'\n'}
          {'                '}<span className="tok-s">"offset"</span>: offset,{'\n'}
          {'                '}<span className="tok-s">"length"</span>: length,{'\n'}
          {'            '}&#125;){'\n'}
          {'        '}<span className="tok-k">return</span> sfnt_version, records
        </code>
      </pre>
      <h3 id="5-4-2種類の-sfntversiontruetype-か-cff-か">
        5-4. 2種類の sfntVersion：TrueType か CFF か
      </h3>
      <p>
        フォントの最初の4バイトを見れば、そのフォントがどの輪郭形式を使っているかが分かります。
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>sfntVersion の値</th>
              <th>16進数</th>
              <th>意味</th>
              <th>期待される輪郭テーブル</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>0x00010000</td>
              <td>0x00 0x01 0x00 0x00</td>
              <td>TrueType 輪郭のフォント</td>
              <td>glyf テーブルと loca テーブル</td>
            </tr>
            <tr className="even">
              <td>'OTTO'</td>
              <td>0x4F 0x54 0x54 0x4F</td>
              <td>CFF または CFF2 輪郭のフォント</td>
              <td>CFF テーブルまたは CFF2 テーブル</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="why-note">
        <strong>なぜ2種類あるのか：</strong>
        章2の歴史で説明したように、TrueType 由来の輪郭と PostScript
        由来の輪郭の2通りを同じ仕組み（sfnt）で包むために、先頭の値で区別しています。
      </p>
      <h3 id="5-5-テーブルレコードの並び順と実例">
        5-5. テーブルレコードの並び順と実例
      </h3>
      <p>
        <strong>重要なルール：</strong>目次の中の TableRecord
        は、<code>tableTag</code>
        のアルファベット昇順（文字コード順）に並べなければなりません。これにより、目当てのテーブルを二分探索で探すことができます。
      </p>
      <p>
        ただし、<strong>ファイル内での実際のテーブルの配置順（offset の順）</strong>
        は、目次の並び順と一致していなくてかまいません。たとえば目次では
        <code>cmap</code> が先に来ていても、ファイルの末尾近くに配置されていることがあります。
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>tableTag（目次は昇順）</th>
              <th>offset（ファイル上の位置）</th>
              <th>length（バイト数）</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>OS/2</td>
              <td>408</td>
              <td>96</td>
            </tr>
            <tr className="even">
              <td>GSUB</td>
              <td>6336</td>
              <td>1420</td>
            </tr>
            <tr className="odd">
              <td>cmap</td>
              <td>7756</td>
              <td>902</td>
            </tr>
            <tr className="even">
              <td>glyf</td>
              <td>8660</td>
              <td>91204</td>
            </tr>
            <tr className="odd">
              <td>head</td>
              <td>100</td>
              <td>54</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="5-6-チェックサムの考え方">5-6. チェックサムの考え方</h3>
      <p>
        仕様書の手順を要約します。各テーブルのチェックサムは「4バイトずつの符号なし整数の合計」です。
        <code>head</code>
        テーブルだけは特別で、ファイル全体の整合を保つための
        <code>checksumAdjustment</code> 欄があります。
      </p>
      <p>
        次の手順は<strong>単体の sfnt フォント</strong>（.ttf / .otf）に適用します。
      </p>
      <ol type="1">
        <li><code>checksumAdjustment</code> を 0 にする</li>
        <li>すべてのテーブルのチェックサムを計算し、目次に書く</li>
        <li>ファイル全体のチェックサムを計算する</li>
        <li>0xB1B0AFBA からその値を引く</li>
        <li>結果を <code>checksumAdjustment</code> に書く</li>
      </ol>
      <p className="why-note">
        <strong>なぜこの手順なのか：</strong>
        ファイル全体の合計値を決まった定数（0xB1B0AFBA）に揃えておくと、ファイルが壊れていないかを後から検査できるためです。
      </p>
      <p>
        <strong>例外：フォントコレクション</strong>（TTC / OTC）では、
        <code>head.checksumAdjustment</code>
        は使われません。コレクション内のフォントについては上の手順を使わず、
        <code>checksumAdjustment</code>
        は 0 に設定してかまいません（仕様書の表現は “may be set to
        zero”）。各テーブルのチェックサム自体は、コレクションファイル内のテーブルの内容に対して計算します。
      </p>
      <div className="glossary">
        <div className="gt">📖 このセクションで登場した用語</div>
        <dl>
          <div className="g">
            <dt>ビッグエンディアン</dt>
            <dd>多バイトの数を、上位のバイトから先に並べる方式</dd>
          </div>
          <div className="g">
            <dt>オフセット</dt>
            <dd>ファイルの先頭から何バイト目かを表す数</dd>
          </div>
          <div className="g">
            <dt>二分探索</dt>
            <dd>並んだデータを半分ずつ絞って探す方法</dd>
          </div>
          <div className="g">
            <dt>チェックサム</dt>
            <dd>データの合計値。壊れていないかの検査に使う</dd>
          </div>
          <div className="g">
            <dt>uint16 / uint32</dt>
            <dd>符号なしの16ビット／32ビット整数</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

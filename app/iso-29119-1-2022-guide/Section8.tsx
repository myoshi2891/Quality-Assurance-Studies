import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_11, DIAGRAM_12, DIAGRAM_13 } from './diagrams';

export default function Section8() {
  return (
    <>
<h2 id="8-テスト設計と実行44step-8">8. テスト設計と実行（4.4）（Step
8）</h2>
<h3 id="81-2022年版の簡略化されたテスト設計プロセス">8.1
2022年版の簡略化されたテスト設計プロセス</h3>
<p>2013年版の「テスト条件」を中心とする流れから、<strong>テストモデルを起点とする流れ</strong>に簡略化されました。</p>
<p>Stuart Reid 氏が公開している論文（Test Design using Test
Models）でも、テスト条件をやめて、より単純な「テストモデル」の概念から、テストカバレッジアイテム、そしてテストケースを導出する設計プロセスが説明されています。</p>
<div className="mermaid-diagram" id="mermaid-11">
  <Mermaid chart={DIAGRAM_11} />
</div>
<h3 id="82-具体例で理解する筆者の作例">8.2
具体例で理解する（筆者の作例）</h3>
<p><strong>題材</strong>: 「年齢によって入場料金が決まる」機能</p>
<div className="table-scroll"><table aria-labelledby="82-具体例で理解する筆者の作例">
<thead>
<tr className="header">
<th>年齢の区分（テストモデル: 同値分割）</th>
<th>料金</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>0〜5歳</td>
<td>無料</td>
</tr>
<tr className="even">
<td>6〜12歳</td>
<td>子ども料金</td>
</tr>
<tr className="odd">
<td>13〜64歳</td>
<td>大人料金</td>
</tr>
<tr className="even">
<td>65歳以上</td>
<td>シニア料金</td>
</tr>
</tbody>
</table></div>
<ul>
<li><strong>テストモデル</strong>: 年齢を4つの区分に分けたモデル</li>
<li><strong>テストカバレッジアイテム</strong>:
4つの区分（同値パーティション）、さらに境界値（5と6、12と13、64と65）</li>
<li><strong>テストケース</strong>: 例）入力 5 → 期待結果「無料」、入力 6
→ 「子ども料金」</li>
</ul>
<h3 id="83-テスト設計技法444">8.3 テスト設計技法（4.4.4）</h3>
<p>用語定義には、次の3系統の技法が出てきます。</p>
<div className="mermaid-diagram" id="mermaid-12">
  <Mermaid chart={DIAGRAM_12} />
</div>
<div className="table-scroll"><table aria-labelledby="83-テスト設計技法444">
<thead>
<tr className="header">
<th>技法</th>
<th>定義（要約）</th>
<th>初学者向けの一言</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>同値分割</td>
<td>同じように扱われる入力・出力のクラスから代表値を選ぶ</td>
<td>似た入力をまとめて代表だけ試す</td>
</tr>
<tr className="even">
<td>境界値分析</td>
<td>同値クラスの境界を試す</td>
<td>「以上・未満」の境目は間違えやすい</td>
</tr>
<tr className="odd">
<td>ディシジョンテーブル</td>
<td>条件と結果の組（ルール）を表にして網羅</td>
<td>条件が複数絡む業務ルールに強い</td>
</tr>
<tr className="even">
<td>原因結果グラフ</td>
<td>論理条件と結果の関係をグラフ化して網羅</td>
<td>ディシジョンテーブルの前段の整理に使う</td>
</tr>
<tr className="odd">
<td>ペアワイズ</td>
<td>すべての「2つの入力項目の組合せ」を網羅</td>
<td>組合せ爆発を抑える定番手法</td>
</tr>
<tr className="even">
<td>ランダムテスト</td>
<td>ランダムに選んだ入力で実施</td>
<td>意外な入力を試す</td>
</tr>
<tr className="odd">
<td>メタモルフィックテスト</td>
<td>既存テストと「入力を変えると出力がどう変わるか」の関係から新テストを作る</td>
<td>オラクルが作りにくいAI・科学計算で有用</td>
</tr>
<tr className="even">
<td>ブランチ/ディシジョンテスト</td>
<td>制御フローの分岐結果を網羅</td>
<td>if の真偽の両方を通す</td>
</tr>
<tr className="odd">
<td>MC/DCテスト</td>
<td>個々の条件が単独で判定結果に影響することを示す</td>
<td>安全重要領域で使われる厳密な基準</td>
</tr>
<tr className="even">
<td>エラー推測</td>
<td>過去の故障や故障モードの知識からテストを導出</td>
<td>バグの傾向表（バグ分類）が役立つ</td>
</tr>
</tbody>
</table></div>
<blockquote>
<p>各技法の詳細な手順は Part 4 で規定されます。</p>
</blockquote>
<p>探索的テストは上記のテスト設計技法の一つではなく、<strong>独立したテストプラクティス</strong>として扱います（8.5
参照）。</p>
<div className="table-scroll"><table aria-label="8.3 テスト設計技法とは独立したテストプラクティス">
<thead>
<tr className="header">
<th>テストプラクティス</th>
<th>説明（要約）</th>
<th>初学者向けの一言</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>探索的テスト</td>
<td>テストを同時進行で設計・実行し、直前の結果も活かす</td>
<td>学びながらテストする</td>
</tr>
</tbody>
</table></div>
<h3 id="84-モデルベーステスト442">8.4 モデルベーステスト（4.4.2）</h3>
<p>テストモデルを、状態遷移図や決定表のような<strong>形式的・準形式的なモデル</strong>として明確に表現し、そこからテストケースを（場合により自動で）導出するアプローチです。</p>
<h3 id="85-スクリプト化テストと探索的テスト443-445">8.5
スクリプト化テストと探索的テスト（4.4.3／経験ベーステストは4.4.5）</h3>
<div className="table-scroll"><table aria-labelledby="85-スクリプト化テストと探索的テスト443-445">
<thead>
<tr className="header">
<th>観点</th>
<th>スクリプト化テスト</th>
<th>探索的テスト</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>設計と実行</td>
<td><strong>事前に</strong>設計し、後で実行</td>
<td><strong>同時に</strong>進める</td>
</tr>
<tr className="even">
<td>強み</td>
<td>再現性、監査しやすさ、自動化しやすい</td>
<td>想定外の問題の発見、学習のスピード</td>
</tr>
<tr className="odd">
<td>弱み</td>
<td>事前想定にない問題に弱い</td>
<td>記録や再現の工夫が必要</td>
</tr>
<tr className="even">
<td>位置づけ</td>
<td>どちらか一方ではなく、<strong>組み合わせて使う</strong></td>
<td>同左</td>
</tr>
</tbody>
</table></div>
<p>用語定義では、探索的テストは経験ベーステストの一種で、テスト担当者が既存の知識、それまでの探索結果、一般的なソフトウェアの振る舞いや故障に関する経験則にもとづき、その場でテストを設計・実行するものと説明されています。</p>
<h3 id="86-再テストと回帰テスト446">8.6
再テストと回帰テスト（4.4.6）</h3>
<div className="table-scroll"><table aria-labelledby="86-再テストと回帰テスト446">
<thead>
<tr className="header">
<th>種類</th>
<th>目的</th>
<th>例</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td><strong>再テスト</strong></td>
<td><strong>直した欠陥が本当に直ったか</strong>を確認</td>
<td>不具合 #123 を修正 → 同じ手順でもう一度確認</td>
</tr>
<tr className="even">
<td><strong>回帰テスト</strong></td>
<td><strong>変更によって他が壊れていないか</strong>を確認</td>
<td>修正後に周辺機能の既存テストを流す</td>
</tr>
</tbody>
</table></div>
<div className="mermaid-diagram" id="mermaid-13">
  <Mermaid chart={DIAGRAM_13} />
</div>
<h3 id="87-手動テストと自動テスト447">8.7
手動テストと自動テスト（4.4.7）</h3>
<div className="table-scroll"><table aria-labelledby="87-手動テストと自動テスト447">
<thead>
<tr className="header">
<th>観点</th>
<th>手動テスト</th>
<th>自動テスト</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>実行主体</td>
<td>人が入力し結果を確認（用語定義）</td>
<td>ツール、ロボット、テスト実行エンジンが実施</td>
</tr>
<tr className="even">
<td>向くもの</td>
<td>探索、使い勝手、一度きりの確認</td>
<td>繰り返し実行、回帰、大量データ</td>
</tr>
<tr className="odd">
<td>注意</td>
<td>属人化しやすい</td>
<td>保守コストがかかる</td>
</tr>
</tbody>
</table></div>
<h3 id="88-その他のテストアプローチ4484411">8.8
その他のテストアプローチ（4.4.8〜4.4.11）</h3>
<div className="table-scroll"><table aria-labelledby="88-その他のテストアプローチ4484411">
<thead>
<tr className="header">
<th>アプローチ</th>
<th>説明（要約）</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>継続的テスト</td>
<td>開発の流れの中で継続的にテストしてフィードバックを得る</td>
</tr>
<tr className="even">
<td>バックトゥバックテスト（差分テスト）</td>
<td>別バージョンのシステムに同じ入力を与え、その結果を期待結果として比較する。別チーム開発、別言語実装、既存システムなどが使える</td>
</tr>
<tr className="odd">
<td>A/Bテスト（スプリットランテスト）</td>
<td>2つのシステム・構成のどちらが優れるかを統計的に判定する</td>
</tr>
<tr className="even">
<td>数学ベースのテスト</td>
<td>入力・出力空間を数学的に扱い、その結果をテスト計画・テスト設計やテストデータの選択に活用する</td>
</tr>
<tr className="odd">
<td>ファズテスト</td>
<td>大量のランダム（またはほぼランダム）な入力で堅牢性を調べる。AI領域でも言及される</td>
</tr>
</tbody>
</table></div>
<h3 id="89-aiに関する用語も追加されている">8.9
AIに関する用語も追加されている</h3>
<p>2022年版の第3章には、AI関連の用語（機械学習、ニューラルネットワーク、ニューロンカバレッジ、非決定的システム、自律システム、AIベースシステム等）が含まれます。</p>
<div className="table-scroll"><table aria-labelledby="89-aiに関する用語も追加されている">
<thead>
<tr className="header">
<th>用語</th>
<th>意味（要約）</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>AIベースシステム</td>
<td>AIを実装する1つ以上のコンポーネントを含むシステム</td>
</tr>
<tr className="even">
<td>非決定的システム</td>
<td>同じ入力・開始状態でも、常に同じ出力・最終状態になるとは限らないシステム</td>
</tr>
<tr className="odd">
<td>ニューロンカバレッジ</td>
<td>テストセットで活性化したニューロンの割合（活性化値が0を超えると活性化とみなす）</td>
</tr>
<tr className="even">
<td>メタモルフィック関係</td>
<td>テスト入力の変化が期待出力にどう影響するかの記述</td>
</tr>
</tbody>
</table></div>
<h3 id="810-テスト環境とテストデータ管理4412-4413">8.10
テスト環境とテストデータ管理（4.4.12, 4.4.13）</h3>
<div className="table-scroll"><table aria-labelledby="810-テスト環境とテストデータ管理4412-4413">
<thead>
<tr className="header">
<th>項目</th>
<th>ポイント</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>テスト環境</td>
<td>本番と差異がある場合、その差がリスクになる。構築・維持もテストプロセスの一部</td>
</tr>
<tr className="even">
<td>テストデータ</td>
<td>準備、保護（個人情報の扱い）、再利用、リセットの管理が必要</td>
</tr>
</tbody>
</table></div>
<hr />
    </>
  );
}

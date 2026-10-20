import React from 'react';
import ChapterDiagram from './ChapterDiagram';
import CodeExample from './CodeExample';

export default function TestwareRefactoring() {
    return <>
        <h2 id="4-813-sut-の更新に合わせてテストウェアを再構成するk3">
            {" 4. 8.1.3 SUT の更新に合わせてテストウェアを再構成する（K3） "}
        </h2>
        <h3 id="41-前提">
            {"4.1 前提"}
        </h3>
        <ul>
            <li>
                {" SUT が変更されると、TAF とコンポーネントライブラリを含む TAS の更新が必要になる。 "}
            </li>
            <li>
                {" どんなに些細な変更でも、TAS の信頼性・性能に広範囲の悪影響を及ぼす可能性がある。 "}
            </li>
        </ul>
        <h3 id="42-進め方テスト環境コンポーネントの変更への対応">
            {" 4.2 進め方（テスト環境コンポーネントの変更への対応） "}
        </h3>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"ステップ"}
                        </th>
                        <th>
                            {"内容"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"1"}
                        </td>
                        <td>
                            {" どの変更・改善が必要かを評価（テストウェア／カスタム関数ライブラリ／OS のどれに影響するか） "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"2"}
                        </td>
                        <td>
                            {" 段階的に変更する（MVP の考え方で、まず限定したテストスクリプトで影響を測る） "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"3"}
                        </td>
                        <td>
                            {"副作用がないと確認できたら、変更を全面適用する"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"4"}
                        </td>
                        <td>
                            {"完全なリグレッション実行で最終確認する"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"5"}
                        </td>
                        <td>
                            {" 失敗が出たら、レポート・ログ・テストデータ分析で根本原因を特定し、改善作業が原因でないか確かめる "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="mermaid-container">
            <ChapterDiagram id="mmd-13" />
        </div>
        <h3 id="43-具体的な再構成項目">
            {"4.3 具体的な再構成項目"}
        </h3>
        <h4 id="①-コア-tas-関数ライブラリの効率と効果を高める">
            {" ① コア TAS 関数ライブラリの効率と効果を高める "}
        </h4>
        <ul>
            <li>
                {"TAS が成熟すると、作業をより効率的に行う新しい方法が見つかる。"}
            </li>
            <li>
                {"例：関数内のコード最適化、より新しい OS ライブラリの利用。"}
            </li>
            <li>
                {" こうした新技術は、現行プロジェクトと今後のプロジェクトが使うコア関数ライブラリに取り込む。 "}
            </li>
        </ul>
        <h4 id="②-同じコントロール種別に作用する複数関数を統合する">
            {" ② 同じコントロール種別に作用する複数関数を統合する "}
        </h4>
        <p>
            {" 自動テストの大部分は、GUI コントロールの状態確認（表示／非表示、有効／無効、サイズ、データなど）です。 "}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"状況"}
                        </th>
                        <th>
                            {"改善"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"ドロップダウン専用など、専門化した関数が多数ある"}
                        </td>
                        <td>
                            {"関数を引数で指定して汎用的に扱える少数の関数に統合する"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"結果"}
                        </td>
                        <td>
                            {"同じ結果を得ながらメンテナンスを最小化"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <CodeExample index={5} />
        <h4 id="③-sut-の変更に対応して-taa-をリファクタリングする">
            {" ③ SUT の変更に対応して TAA をリファクタリングする "}
        </h4>
        <ul>
            <li>
                {"SUT が進化・成熟するにつれ、土台となる TAA も進化させる。"}
            </li>
            <li>
                {"機能拡張は「継ぎ足し（bolt-on）」で実装しない。TAA で分析し、変更する。"}
            </li>
            <li>
                {" これにより、新しい SUT 機能に必要な新しいテストスクリプトを、互換性のあるコンポーネントで受け止められる。 "}
            </li>
        </ul>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"継ぎ足し（避ける）"}
                        </th>
                        <th>
                            {"TAA の見直し（推奨）"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"目先の機能だけ追加する"}
                        </td>
                        <td>
                            {"分析し、アーキテクチャの中に位置づける"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"将来のテスト追加時に再び継ぎ足しが必要"}
                        </td>
                        <td>
                            {"新しいテストを受け入れる土台がすでにある"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h4 id="④-命名規則と標準化">
            {"④ 命名規則と標準化"}
        </h4>
        <ul>
            <li>
                {" 変更時に新しい自動化コード・関数ライブラリの命名規則を、既存の標準（4.3.1 節）と一貫させる。 "}
            </li>
            <li>
                {" 例："}
                <code>
                    {"loginButton"}
                </code>
                {"、"}
                <code>
                    {"resetPasswordButton"}
                </code>
                {" のように対象が分かる名前（第4章）。 "}
            </li>
        </ul>
        <h4 id="⑤-既存テストスクリプトの見直し廃止の評価">
            {" ⑤ 既存テストスクリプトの見直し・廃止の評価 "}
        </h4>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"状況"}
                        </th>
                        <th>
                            {"対応"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"複雑で実行に時間がかかるテスト"}
                        </td>
                        <td>
                            {"より小さなテストに分解するほうが有効で効率的な場合がある"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"ほとんど、あるいはまったく実行されないテスト"}
                        </td>
                        <td>
                            {" 廃止の対象にして TAS の複雑さを減らし、保守すべき対象を明確にする "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="mermaid-container">
            <ChapterDiagram id="mmd-14" />
        </div>
    </>;
}

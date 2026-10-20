import React from 'react';
import ChapterDiagram from './ChapterDiagram';

export default function BestPractices() {
    return <>
        <h2 id="7-ベストプラクティス総まとめ">
            {"7. ベストプラクティス総まとめ"}
        </h2>
        <h3 id="71-項目別">
            {"7.1 項目別"}
        </h3>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"領域"}
                        </th>
                        <th>
                            {"ベストプラクティス"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"データ分析"}
                        </td>
                        <td>
                            {" 履歴を蓄積し、ヒストグラムで fragile なテストを見つけ、改善後に再測定する "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"AI・自己修復"}
                        </td>
                        <td>
                            {"修復結果はレポートで確認し、恒久的にコードへ反映する"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"スキーマ検証"}
                        </td>
                        <td>
                            {" 型・必須チェックはスキーマに任せ、ビジネスルールだけ個別に検証する "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"スクリプト"}
                        </td>
                        <td>
                            {"重複はライブラリ関数化し、似た処理はパラメータ化する"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"失敗復旧"}
                        </td>
                        <td>
                            {" 失敗後も次のテストへ継続できる復旧手順を TAS と SUT の両方に用意する "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"待機"}
                        </td>
                        <td>
                            {" 固定待機を避け、ポーリングまたはイベント購読に。必ずタイムアウトを付ける "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"実行"}
                        </td>
                        <td>
                            {"重複排除 → 並列化・分割 → スケジュール実行の順に検討する"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"検証"}
                        </td>
                        <td>
                            {" 全テスト共通の標準検証メソッドを用意し、似た検証はパラメータ化する "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"TAA"}
                        </td>
                        <td>
                            {"テスト容易性は SDLC の早期に設計し、後付けを避ける"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAF"}
                        </td>
                        <td>
                            {"コアライブラリ更新は、パイロット → 影響分析 → 導入計画"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"setup/teardown"}
                        </td>
                        <td>
                            {"繰り返し処理を集約し、前提条件には API を活用する"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"ドキュメント"}
                        </td>
                        <td>
                            {"自動化コード・TAS 利用者向け・レポート／ログを最新に保つ"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"TAS 機能"}
                        </td>
                        <td>
                            {"使われる機能だけ追加する"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"ツール更新"}
                        </td>
                        <td>
                            {"代表的なサンプルテストで事前に確認してから展開する"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"SUT 更新対応"}
                        </td>
                        <td>
                            {"段階的に変更 → 副作用確認 → 全面適用 → 完全リグレッション"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"関数統合"}
                        </td>
                        <td>
                            {"同じコントロール種別に作用する関数は少数に統合する"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"拡張"}
                        </td>
                        <td>
                            {"継ぎ足しでなく、TAA を分析して変更する"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"命名"}
                        </td>
                        <td>
                            {"既存の命名規則・標準に合わせる"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"テスト棚卸し"}
                        </td>
                        <td>
                            {"長大なテストは分解、実行されないテストは廃止を検討する"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"環境準備"}
                        </td>
                        <td>
                            {"スクリプト化し、準備と後片付けをセットにする"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"データエイジング"}
                        </td>
                        <td>
                            {"日付に依存するテストデータを自動で最新に保つ"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"画面キャプチャ"}
                        </td>
                        <td>
                            {" UI 自動テストのスクリーンショット・動画をリリース文書やマーケティングにも活用する "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="72-改善提案を書くときの型k4-対策">
            {"7.2 改善提案を書くときの型（K4 対策）"}
        </h3>
        <p>
            {" K4 問題では「状況の分析 → 原因の特定 → 推奨」の流れで考えると整理しやすくなります。 "}
        </p>
        <div className="mermaid-container">
            <ChapterDiagram id="mmd-16" />
        </div>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"観察された状況"}
                        </th>
                        <th>
                            {"分析"}
                        </th>
                        <th>
                            {"推奨される改善"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"特定のテストだけ Timeout で頻繁に失敗"}
                        </td>
                        <td>
                            {"固定待機が原因の可能性"}
                        </td>
                        <td>
                            {"ポーリングまたはイベント購読に変更（タイムアウト付き）"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"同じログイン手順が数十本に重複"}
                        </td>
                        <td>
                            {"保守性の問題"}
                        </td>
                        <td>
                            {"ライブラリ関数化・パラメータ化"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"夜間に終わらないリグレッション"}
                        </td>
                        <td>
                            {"実行時間の問題"}
                        </td>
                        <td>
                            {"重複排除、並列実行、スイート分割"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"コアライブラリ更新で他チームのテストが壊れた"}
                        </td>
                        <td>
                            {"導入手順の問題"}
                        </td>
                        <td>
                            {"パイロット、影響分析、導入計画"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"UI 変更のたびにロケータ修正"}
                        </td>
                        <td>
                            {"ロケータ管理の問題"}
                        </td>
                        <td>
                            {"自己修復ツールの活用に加え、ロケータの集約"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"API のレスポンス検証コードが長大"}
                        </td>
                        <td>
                            {"assertion の冗長さ"}
                        </td>
                        <td>
                            {"スキーマ検証の導入"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>;
}

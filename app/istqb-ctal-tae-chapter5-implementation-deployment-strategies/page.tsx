import React from 'react';
import type { Metadata } from 'next';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import { DIAGRAMS } from './diagrams';
import './ctal-tae-ch5.css';

export const metadata: Metadata = {
    title: 'CTAL-TAE v2.0 第5章 実装・デプロイ戦略',
    description: 'CI/CDパイプラインへのテスト自動化の統合、テストウェアの構成管理、API依存関係とコントラクトテストを解説。',
};

export default function Page() {
    return <div className="ctal-tae-ch5-page">
        <div className="layout">
            <NavBar />
            <main className="main-content">
                <div className="hero">
                    <div className="hero-label">
                        {"ISTQB® CERTIFIED TESTER ADVANCED LEVEL"}
                    </div>
                    <h1>
                        {" CTAL‑TAE v2.0 Ch.5「Implementation and Deployment Strategies for Test Automation」"}<br />
                        {"初学者向け解説ガイド "}
                    </h1>
                    <div className="meta-row">
                        <span className="chip">
                            <i className="ti ti-certificate">
                            </i>
                            {"対象試験：CTAL‑TAE v2.0"}
                        </span>
                        <span className="chip">
                            <i className="ti ti-clock-hour-4">
                            </i>
                            {"90分 ・ 認知レベル K3（Apply）"}
                        </span>
                        <span className="chip chip-accent">
                            <i className="ti ti-key">
                            </i>
                            {"キーワード：contract testing（コントラクトテスト）"}
                        </span>
                    </div>
                </div>
                <section id="sec-0">
                    <div className="section-head">
                        <span className="section-num">
                            {"0"}
                        </span>
                        <h2>
                            {"この章で学ぶこと（全体像）"}
                        </h2>
                    </div>
                    <div className="prose">
                        <p>
                            {" Chapter 5 は、これまでの章（Ch.1〜Ch.4 でテスト自動化の目的・準備・アーキテクチャ・実装方法を学んだ）の集大成として、"}<strong>
                                {"実装したテスト自動化ソリューション（TAS）を実際の CI/CD パイプラインにどう組み込み、どう運用・維持していくか"}
                            </strong>
                            {"を扱います。 "}
                        </p>
                        <p>
                            {"学習目標（Learning Objectives）は次の3つです。"}
                        </p>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        {"ID"}
                                    </th>
                                    <th>
                                        {"認知レベル"}
                                    </th>
                                    <th>
                                        {"内容"}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {"TAE‑5.1.1"}
                                    </td>
                                    <td>
                                        {"K3（Apply）"}
                                    </td>
                                    <td>
                                        {" パイプライン内の異なるテストレベルにテスト自動化を適用する "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {"TAE‑5.1.2"}
                                    </td>
                                    <td>
                                        {"K2（Understand）"}
                                    </td>
                                    <td>
                                        {" テストウェアの構成管理（Configuration Management）を説明する "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {"TAE‑5.1.3"}
                                    </td>
                                    <td>
                                        {"K2（Understand）"}
                                    </td>
                                    <td>
                                        {" API インフラストラクチャに対するテスト自動化の依存関係を説明する "}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="prose">
                        <p>
                            {" この章は大きく1つの節「5.1 Integration to CI/CD Pipelines（CI/CDパイプラインへの統合）」で構成されており、その中に上記3つのサブテーマが含まれます。 "}
                        </p>
                    </div>
                    <div className="diagram-card">
                        <div className="diagram-caption">
                            {"図0：Chapter 5 の全体構成"}
                        </div>
                        <div className="mermaid-diagram" data-diagram="overview">
                            <Mermaid chart={DIAGRAMS.overview} />
                        </div>
                    </div>
                </section>
                <section id="sec-1">
                    <div className="section-head">
                        <span className="section-num">
                            {"1"}
                        </span>
                        <h2>
                            {"5.1.1 パイプライン内の異なるテストレベルへのテスト自動化の適用"}
                        </h2>
                    </div>
                    <h3>
                        {"1.1 なぜテスト自動化とパイプラインの相性が良いのか"}
                    </h3>
                    <div className="prose">
                        <p>
                            {" テスト自動化の最大の利点の一つは、"}<strong>
                                {"人手を介さず（unattended）に実行できる"}
                            </strong>
                            {"ことです。この特性により、自動化されたテストは CI/CD パイプラインや定期実行パイプラインに組み込む理想的な候補になります。 "}
                        </p>
                    </div>
                    <h3>
                        {"1.2 テストレベルごとのパイプライン統合パターン"}
                    </h3>
                    <div className="prose">
                        <p>
                            {" シラバスでは、伝統的なテストレベル（コンポーネントテスト、コンポーネント統合テスト、システムテスト、システム統合テスト）がパイプラインの中でどう位置づけられるかを説明しています。 "}
                        </p>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        {"テストレベル"}
                                    </th>
                                    <th>
                                        {"パイプライン上の位置づけ"}
                                    </th>
                                    <th>
                                        {"説明"}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {"コンフィギュレーションテスト（TAF/TAS）"}
                                    </td>
                                    <td>
                                        {"ビルド時"}
                                    </td>
                                    <td>
                                        {" コンポーネントテストの一種とみなせる。テストスクリプトが使用するファイルへのパスが正しいか、ファイルが実際に指定場所に存在するかを確認する "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {"コンポーネントテスト"}
                                    </td>
                                    <td>
                                        {"ビルドステップの一部"}
                                    </td>
                                    <td>
                                        {" ライブラリクラスや Web コンポーネントなど個々のコンポーネントに対して実行。継続的インテグレーション（CI）パイプラインの"}<strong>
                                            {"品質ゲート"}
                                        </strong>
                                        {"として重要な役割を持つ "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {"コンポーネント統合テスト"}
                                    </td>
                                    <td>
                                        {"CIパイプラインの一部"}
                                    </td>
                                    <td>
                                        {" 低レベルコンポーネントや SUT を対象とする場合、コンポーネントテストと合わせて実行される "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {"システムテスト"}
                                    </td>
                                    <td>
                                        {"継続的デプロイメント（CD）パイプライン"}
                                    </td>
                                    <td>
                                        {" 提供される SUT に対する"}<strong>
                                            {"最後の品質ゲート"}
                                        </strong>
                                        {"として機能することが多い "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {"システム統合テスト"}
                                    </td>
                                    <td>
                                        {"継続的デリバリーパイプライン"}
                                    </td>
                                    <td>
                                        {" 個別に開発されたシステムコンポーネント同士が正しく連携して動作することを保証する品質ゲート "}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout note">
                        <div className="callout-head">
                            <i className="ti ti-info-circle">
                            </i>
                            <span>
                                {"補足"}
                            </span>
                        </div>
                        <p>
                            {" 多くの最新のCIシステムは、継続的デリバリーパイプラインを「ビルドフェーズ」と「デプロイフェーズ」に分けて考えます。この場合、コンポーネントテスト・コンポーネント統合テストは最初のビルドフェーズに属し、これが成功した場合にのみ、コンポーネント／SUT がデプロイされます。 "}
                        </p>
                    </div>
                    <h3>
                        {" 1.3 システム統合テスト・システムテスト・受け入れテストをパイプラインに組み込む2つのアプローチ "}
                    </h3>
                    <div className="prose">
                        <p>
                            {" システム統合テスト、システムテスト、受け入れテストをパイプラインに統合する方法には、主に"}<strong>
                                {"2つのアプローチ"}
                            </strong>
                            {"があります。これは K3（Apply）レベルの学習目標に対応する、この章で最も実践的に理解すべきポイントです。 "}
                        </p>
                    </div>
                    <div className="diagram-card">
                        <div className="diagram-caption">
                            {"図1：パイプライン統合の2つのアプローチ"}
                        </div>
                        <div className="mermaid-diagram" data-diagram="approaches">
                            <Mermaid chart={DIAGRAMS.approaches} />
                        </div>
                    </div>
                    <h4>
                        {"アプローチ①：デプロイフェーズ内でテストを実行する"}
                    </h4>
                    <div className="prose">
                        <ul>
                            <li>
                                {" コンポーネントのデプロイ"}<strong>
                                    {"後"}
                                </strong>
                                {"にテストケースを実行する。 "}
                            </li>
                            <li>
                                <strong>
                                    {"メリット"}
                                </strong>
                                {"：テスト結果に基づいてデプロイを失敗させたり、ロールバックしたりできる（＝品質ゲートとして機能する）。 "}
                            </li>
                            <li>
                                <strong>
                                    {"デメリット"}
                                </strong>
                                {"：テストを再実行したい場合、"}<strong>
                                    {"再デプロイが必要"}
                                </strong>
                                {"になる。 "}
                            </li>
                        </ul>
                    </div>
                    <h4>
                        {"アプローチ②：独立したパイプラインとしてテストを実行する"}
                    </h4>
                    <div className="prose">
                        <ul>
                            <li>
                                {" デプロイ成功をトリガーとして、テスト専用の別パイプラインを起動する。 "}
                            </li>
                            <li>
                                <strong>
                                    {"メリット"}
                                </strong>
                                {"：デプロイのたびに異なるテストスイートや自動化コードを実行したい場合に有効。 "}
                            </li>
                            <li>
                                <strong>
                                    {"デメリット"}
                                </strong>
                                {"：テストが品質ゲートとして機能しないため、デプロイに問題があった場合は"}<strong>
                                    {"通常は手動での"}
                                </strong>
                                {"ロールバック等の対応が必要。 "}
                            </li>
                            <li>
                                {" この場合、SUT が正しくデプロイされたことだけを確認する"}<strong>
                                    {"簡易な自動テストスクリプト（デプロイメントチェック）"}
                                </strong>
                                {"を使うことがあるが、これは広範な機能適合性を検証するものではない。 "}
                            </li>
                        </ul>
                    </div>
                    <h3>
                        {"1.4 パイプラインのその他の活用方法"}
                    </h3>
                    <div className="prose">
                        <p>
                            {" テスト自動化とパイプラインの組み合わせは、通常のテストレベルの実行以外にも応用できます。 "}
                        </p>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        {"用途"}
                                    </th>
                                    <th>
                                        {"説明"}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {"定期的なテストスイート実行"}
                                    </td>
                                    <td>
                                        {" 回帰テストスイートを毎晩実行する（＝ナイトリーリグレッション）。特に実行時間が長いテストスイートに有効で、朝にはチーム全員が SUT の品質状況を把握できる "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {"非機能テストの実行"}
                                    </td>
                                    <td>
                                        {" 継続的デプロイメントパイプラインの一部として、あるいは独立して、パフォーマンス効率などの非機能品質特性を定期的にモニタリングする "}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout practice">
                        <div className="callout-head">
                            <i className="ti ti-bulb">
                            </i>
                            <span>
                                {"ベストプラクティス（5.1.1）"}
                            </span>
                        </div>
                        <ul>
                            <li>
                                {" コンポーネントテスト・コンポーネント統合テストは"}<strong>
                                    {"ビルドフェーズの品質ゲート"}
                                </strong>
                                {"として位置づけ、失敗時は早期にビルドを止める。 "}
                            </li>
                            <li>
                                {" システムテスト・システム統合テストをパイプラインに組み込む際は、「デプロイフェーズ内で実行して品質ゲートにする」か「独立パイプラインで実行して柔軟性を確保する」かを、"}<strong>
                                    {"再実行コスト"}
                                </strong>
                                {"と"}<strong>
                                    {"ロールバック運用"}
                                </strong>
                                {"の観点から意識的に選択する。 "}
                            </li>
                            <li>
                                {" 実行時間の長い回帰テストは"}<strong>
                                    {"ナイトリーリグレッション"}
                                </strong>
                                {"として定期実行し、朝までに結果を確認できる体制を作る。 "}
                            </li>
                            <li>
                                {" 非機能テスト（パフォーマンス効率など）も継続的にモニタリングできるようパイプラインに組み込む。 "}
                            </li>
                        </ul>
                    </div>
                </section>
                <section id="sec-2">
                    <div className="section-head">
                        <span className="section-num">
                            {"2"}
                        </span>
                        <h2>
                            {"5.1.2 テストウェアの構成管理（Configuration Management）"}
                        </h2>
                    </div>
                    <h3>
                        {"2.1 なぜ構成管理が必要か"}
                    </h3>
                    <div className="prose">
                        <p>
                            {" テスト自動化は、"}<strong>
                                {"複数のテスト環境"}
                            </strong>
                            {"や"}<strong>
                                {"複数バージョンの SUT"}
                            </strong>
                            {" に対して実行されることが多いため、構成管理（Configuration Management）はテスト自動化における不可欠な要素です。 "}
                        </p>
                        <p>
                            {" シラバスでは、テスト自動化における構成管理の対象を次の3つに整理しています。 "}
                        </p>
                    </div>
                    <div className="diagram-card">
                        <div className="diagram-caption">
                            {"図2：テストウェアの構成管理の3つの対象"}
                        </div>
                        <div className="mermaid-diagram" data-diagram="configmgmt">
                            <Mermaid chart={DIAGRAMS.configmgmt} />
                        </div>
                    </div>
                    <h4>
                        {"① テスト環境設定（Test Environment Configuration）"}
                    </h4>
                    <div className="prose">
                        <ul>
                            <li>
                                {" パイプライン上の各テスト環境は、URL や認証情報などの"}<strong>
                                    {"異なる構成"}
                                </strong>
                                {"を持つことが多い。 "}
                            </li>
                            <li>
                                {" 通常、この設定（URL などの非機密の構成値）はテストウェアと一緒に保存される。 "}
                            </li>
                            <li>
                                {" ただし、"}<strong>
                                    {"認証情報の実値はテストウェアや共有リポジトリに保存しない"}
                                </strong>
                                {"。設定には参照名（キー）だけを置き、実値は承認済みのシークレット管理機構（CI/CD のシークレットストアや Vault など）から実行時に注入する。 "}
                            </li>
                            <li>
                                {" ただし、複数プロジェクトや複数の TAF（Test Automation Framework）で共有される場合は、"}<strong>
                                    {"共通のコアライブラリ"}
                                </strong>
                                {"や"}<strong>
                                    {"共有リポジトリ"}
                                </strong>
                                {"の一部として管理することもある。 "}
                            </li>
                        </ul>
                    </div>
                    <h4>
                        {"② テストデータ（Test Data）"}
                    </h4>
                    <div className="prose">
                        <ul>
                            <li>
                                {" テスト環境固有、あるいは SUT のリリース・機能セット固有になり得る。 "}
                            </li>
                            <li>
                                {" テスト環境設定と同様、通常は小規模な TAF と一緒に保存されるが、"}<strong>
                                    {"テストデータ管理システム"}
                                </strong>
                                {"を利用することもある。 "}
                            </li>
                        </ul>
                    </div>
                    <h4>
                        {"③ テストスイート／テストケース"}
                    </h4>
                    <div className="prose">
                        <ul>
                            <li>
                                {" 目的（スモークテスト、回帰テストなど）に応じて異なるテストスイートを構成するのが一般的な慣行。 "}
                            </li>
                            <li>
                                {" これらは異なるテストレベル・異なるパイプライン・異なるテスト環境で個別に実行されることが多い。 "}
                            </li>
                        </ul>
                    </div>
                    <h3>
                        {"2.2 SUT のリリースと機能セットへの対応方法"}
                    </h3>
                    <div className="prose">
                        <p>
                            {" SUT の各リリースは特定の「機能セット（feature set）」を持ち、それに対応するテストケース・テストスイートで品質を評価します。テストウェアがこれにどう追従するかには、"}<strong>
                                {"2つの選択肢"}
                            </strong>
                            {"があります。 "}
                        </p>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        {"方式"}
                                    </th>
                                    <th>
                                        {"内容"}
                                    </th>
                                    <th>
                                        {"特徴"}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {"フィーチャートグル方式"}
                                    </td>
                                    <td>
                                        {" リリースまたはテスト環境ごとにフィーチャートグル設定を定義。各フィーチャーに対応するテストケース・スイートを用意し、トグルでどのスイートを実行するか制御する "}
                                    </td>
                                    <td>
                                        {" 1つのテストウェアで複数のリリース・環境を柔軟に切り替えられる "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {"バージョン一致方式"}
                                    </td>
                                    <td>
                                        {" テストウェア自体を SUT と"}<strong>
                                            {"同じリリースバージョンで"}
                                        </strong>
                                        {"リリースする "}
                                    </td>
                                    <td>
                                        {" SUT のバージョンとテストウェアの間に"}<strong>
                                            {"厳密な対応関係"}
                                        </strong>
                                        {"が生まれる。通常はタグやブランチを使った構成管理システムで実現する "}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout practice">
                        <div className="callout-head">
                            <i className="ti ti-bulb">
                            </i>
                            <span>
                                {"ベストプラクティス（5.1.2）"}
                            </span>
                        </div>
                        <ul>
                            <li>
                                {" テスト環境設定・テストデータ・テストスイートの3つを分けて考え、"}<strong>
                                    {"どのレベルで共有すべきか"}
                                </strong>
                                {"（プロジェクト固有 vs. 共有コアライブラリ）を判断する。 "}
                            </li>
                            <li>
                                {" 複数の TAF や複数プロジェクトで共通する設定は、"}<strong>
                                    {"共有リポジトリやコアライブラリ層"}
                                </strong>
                                {"に集約し、個別プロジェクトでの重複管理を避ける。 "}
                            </li>
                            <li>
                                {" 機能セットの管理には、要件に応じて「フィーチャートグル方式」と「バージョン一致（タグ／ブランチ）方式」を使い分ける。柔軟な切り替えが必要ならトグル方式、SUTとテストウェアの厳密な対応が必要ならバージョン一致方式を選ぶ。 "}
                            </li>
                            <li>
                                {" テストスイートは目的別（スモーク／回帰など）に整理し、適切なテストレベル・パイプライン・環境に紐づける。 "}
                            </li>
                        </ul>
                    </div>
                </section>
                <section id="sec-3">
                    <div className="section-head">
                        <span className="section-num">
                            {"3"}
                        </span>
                        <h2>
                            {"5.1.3 API インフラストラクチャに対するテスト自動化の依存関係"}
                        </h2>
                    </div>
                    <h3>
                        {"3.1 API テスト自動化に必要な2つの前提情報"}
                    </h3>
                    <div className="prose">
                        <p>
                            {" API のテスト自動化を行う際、適切な戦略を構築するために次の情報が不可欠です。 "}
                        </p>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        {"必要情報"}
                                    </th>
                                    <th>
                                        {"内容"}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {"API 接続関係（API connections）"}
                                    </td>
                                    <td>
                                        {" 自動的にテストできるビジネスロジックと、API 同士の関係性を理解すること "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {"API ドキュメント（API documentation）"}
                                    </td>
                                    <td>
                                        {" パラメータ、ヘッダー、リクエスト／レスポンスオブジェクトの型など、テスト自動化のベースラインとなる情報一式 "}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="prose">
                        <p>
                            {" 統合された自動 API テストは、開発者・TAE のどちらが担当することもありますが、"}<strong>
                                {"シフトレフト"}
                            </strong>
                            {"の考え方に基づき、複数のテストレベルで分担することが推奨されます。ISTQB CTFL シラバスで説明されているコンポーネント統合テストやシステム統合テストは、"}<strong>
                                {"コントラクトテスト（contract testing）"}
                            </strong>
                            {"というベストプラクティスによって拡張できます。 "}
                        </p>
                    </div>
                    <h3>
                        {"3.2 コントラクトテスト（Contract Testing）とは"}
                    </h3>
                    <div className="prose">
                        <p>
                            <strong>
                                {"コントラクトテスト"}
                            </strong>
                            {"は、サービス同士が正しく通信できること、および共有されるデータが規定されたルール一式と整合していることを検証する、"}<strong>
                                {"統合テストの一種"}
                            </strong>
                            {"です。 "}
                        </p>
                        <ul>
                            <li>
                                {" 2つの独立したシステム（例：2つのマイクロサービス）間の互換性を担保する。 "}
                            </li>
                            <li>
                                {" 単なるスキーマ検証にとどまらず、"}<strong>
                                    {"双方が許容される相互作用の集合について合意（consensus）"}
                                </strong>
                                {"しつつ、時間の経過に伴う進化（evolution）にも対応できる。 "}
                            </li>
                            <li>
                                {" サービス間でやり取りされる相互作用を「コントラクト」として記録し、両者がそのコントラクトに準拠しているかを検証するために使用する。 "}
                            </li>
                            <li>
                                <strong>
                                    {"主な利点"}
                                </strong>
                                {"：基盤サービスに起因する欠陥をソフトウェア開発ライフサイクル（SDLC）の早期段階で発見でき、欠陥の発生源をより容易に特定できる。 "}
                            </li>
                        </ul>
                    </div>
                    <h3>
                        {"3.3 コンシューマー駆動型 vs. プロバイダー駆動型"}
                    </h3>
                    <div className="prose">
                        <p>
                            {"コントラクトテストには2つのアプローチがあります。"}
                        </p>
                    </div>
                    <div className="diagram-card">
                        <div className="diagram-caption">
                            {" 図3：コンシューマー駆動型とプロバイダー駆動型 "}
                        </div>
                        <div className="mermaid-diagram" data-diagram="consumerprovider">
                            <Mermaid chart={DIAGRAMS.consumerprovider} />
                        </div>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        {"アプローチ"}
                                    </th>
                                    <th>
                                        {"コントラクトを作成する側"}
                                    </th>
                                    <th>
                                        {"内容"}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {"コンシューマー駆動型"}
                                    </td>
                                    <td>
                                        {"コンシューマー（利用する側）"}
                                    </td>
                                    <td>
                                        {" コンシューマーが「プロバイダーが自分のリクエストにどう応答すべきか」という期待値を設定する "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {"プロバイダー駆動型"}
                                    </td>
                                    <td>
                                        {"プロバイダー（提供する側）"}
                                    </td>
                                    <td>
                                        {" プロバイダーが自らのサービスがどのように動作するかを示すコントラクトを作成する "}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout practice">
                        <div className="callout-head">
                            <i className="ti ti-bulb">
                            </i>
                            <span>
                                {"ベストプラクティス（5.1.3）"}
                            </span>
                        </div>
                        <ul>
                            <li>
                                {" API テスト自動化の戦略を立てる前に、"}<strong>
                                    {"API 接続関係の理解"}
                                </strong>
                                {"と"}<strong>
                                    {"最新の API ドキュメント整備"}
                                </strong>
                                {"の両方を必須条件とする。 "}
                            </li>
                            <li>
                                {" シフトレフトの原則に従い、API テストをコンポーネント統合テスト・システム統合テストなど"}<strong>
                                    {"複数のテストレベルに分担"}
                                </strong>
                                {"させる。 "}
                            </li>
                            <li>
                                {" マイクロサービス間の連携を検証する際は、スキーマ検証だけに頼らず、"}<strong>
                                    {"コントラクトテスト"}
                                </strong>
                                {"を導入して双方の合意事項を明文化・自動検証する。 "}
                            </li>
                            <li>
                                {" チームの構成（コンシューマー側が主導権を持つか、プロバイダー側が主導権を持つか）に応じて、コンシューマー駆動型／プロバイダー駆動型のいずれかを選択する。 "}
                            </li>
                        </ul>
                    </div>
                </section>
                <section id="sec-4">
                    <div className="section-head">
                        <span className="section-num">
                            {"4"}
                        </span>
                        <h2>
                            {"章全体の理解を助ける統合フロー図"}
                        </h2>
                    </div>
                    <div className="prose">
                        <p>
                            {" 以下は、Chapter 5 の3つのサブトピックが実際の開発プロセスの中でどのようにつながっているかを示した統合図です。 "}
                        </p>
                    </div>
                    <div className="diagram-card">
                        <div className="diagram-caption">
                            {"図4：コミットからリリースまでの統合フロー"}
                        </div>
                        <div className="mermaid-diagram" data-diagram="integrated">
                            <Mermaid chart={DIAGRAMS.integrated} />
                        </div>
                    </div>
                </section>
                <section id="sec-5">
                    <div className="section-head">
                        <span className="section-num">
                            {"5"}
                        </span>
                        <h2>
                            {"学習目標との対応チェックリスト"}
                        </h2>
                    </div>
                    <div className="checklist">
                        <label className="checklist-item">
                            <input type="checkbox" />
                            <span className="checklist-badge">
                                {"1"}
                            </span>
                            <span className="checklist-text">
                                {"TAE‑5.1.1：コンポーネントテスト・コンポーネント統合テスト・システムテスト・システム統合テストが、パイプラインのどのフェーズ（ビルド／デプロイ）に位置づけられるかを説明できる"}
                            </span>
                        </label>
                        <label className="checklist-item">
                            <input type="checkbox" />
                            <span className="checklist-badge">
                                {"2"}
                            </span>
                            <span className="checklist-text">
                                {"TAE‑5.1.1：システム統合テスト等をパイプラインに組み込む2つのアプローチ（デプロイフェーズ内実行 vs. 独立パイプライン実行）のメリット・デメリットを説明できる"}
                            </span>
                        </label>
                        <label className="checklist-item">
                            <input type="checkbox" />
                            <span className="checklist-badge">
                                {"3"}
                            </span>
                            <span className="checklist-text">
                                {"TAE‑5.1.2：テストウェアの構成管理の3つの対象（テスト環境設定・テストデータ・テストスイート/テストケース）を説明できる"}
                            </span>
                        </label>
                        <label className="checklist-item">
                            <input type="checkbox" />
                            <span className="checklist-badge">
                                {"4"}
                            </span>
                            <span className="checklist-text">
                                {"TAE‑5.1.2：フィーチャートグル方式とバージョン一致方式の違いを説明できる"}
                            </span>
                        </label>
                        <label className="checklist-item">
                            <input type="checkbox" />
                            <span className="checklist-badge">
                                {"5"}
                            </span>
                            <span className="checklist-text">
                                {"TAE‑5.1.3：API テスト自動化戦略に必要な2つの前提情報（API接続関係・APIドキュメント）を説明できる"}
                            </span>
                        </label>
                        <label className="checklist-item">
                            <input type="checkbox" />
                            <span className="checklist-badge">
                                {"6"}
                            </span>
                            <span className="checklist-text">
                                {"TAE‑5.1.3：コントラクトテストの定義と、コンシューマー駆動型／プロバイダー駆動型の違いを説明できる"}
                            </span>
                        </label>
                    </div>
                </section>
                <section id="sec-6">
                    <div className="section-head">
                        <span className="section-num">
                            {"6"}
                        </span>
                        <h2>
                            {"参考・出典（Sources）"}
                        </h2>
                    </div>
                    <div className="prose">
                        <p>
                            {"本ガイドの内容は、以下の ISTQB® 公式資料に基づいて作成しています。"}
                        </p>
                    </div>
                    <div className="ref-list">
                        <div className="ref-card">
                            <span className="ref-badge">
                                {"1"}
                            </span>
                            <div className="ref-body">
                                <div className="ref-title">
                                    {"CTAL‑TAE v2.0 認定ページ（公式）"}
                                </div>
                                <a className="ref-url" href="https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/" target="_blank" rel="noopener noreferrer">
                                    {"https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/"}
                                </a>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-badge">
                                {"2"}
                            </span>
                            <div className="ref-body">
                                <div className="ref-title">
                                    {" CTAL‑TAE v2.0 シラバス（PDF、Chapter 5: pp.33–36） "}
                                </div>
                                <a className="ref-url" href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf" target="_blank" rel="noopener noreferrer">
                                    {"https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf"}
                                </a>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-badge">
                                {"3"}
                            </span>
                            <div className="ref-body">
                                <div className="ref-title">
                                    {"ISTQB® 公式サイト（トップ）"}
                                </div>
                                <a className="ref-url" href="https://istqb.org/" target="_blank" rel="noopener noreferrer">
                                    {"https://istqb.org/"}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="callout note">
                        <div className="callout-head">
                            <i className="ti ti-info-circle">
                            </i>
                            <span>
                                {"補足"}
                            </span>
                        </div>
                        <p>
                            {" 本ガイドは学習補助を目的とした要約・解説であり、シラバス原文の著作権は ISTQB®（International Software Testing Qualifications Board）に帰属します。正式な試験対策には必ず上記の公式シラバスを直接参照してください。 "}
                        </p>
                    </div>
                </section>
                <footer>
                    {" CTAL‑TAE v2.0 Chapter 5 初学者向け解説ガイド ・ ISTQB® is a registered trademark of the International Software Testing Qualifications Board. "}
                </footer>
            </main>
        </div>
    </div>;
}

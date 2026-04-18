import Link from 'next/link';
import Mermaid from '../../components/Mermaid';
import Header from '../../components/Header';
import '../istqb-ctfl-at-guide.css';

export default function IstqbCtflAtCompleteGuidePage() {
    return (
        <>
            <Header />
            <main className="page-ctfl container mx-auto px-4 py-8 max-w-5xl">
                <section id="top" className="hero"><div className="hero-content"><h1>🌿 ISTQB® Certified Tester Foundation Level Agile Tester (CTFL-AT)</h1></div></section>
<h2 className="section-header text-2xl mt-12 mb-6 border-b border-[var(--color-border)] pb-2">完全学習ガイド【最新版・初学者対応】</h2>
<div className="callout callout-info">
<p><strong>最終更新</strong>: 2025年（ISTQB® 公式シラバス CTFL-AT v1.0 準拠）<br /><strong>対象読者</strong>: CTFL取得済みで、アジャイル開発における基本的テストスキルを習得したい方<br /><strong>参照元</strong>: ISTQB® 公式シラバス v2014（Foundation Level Extension Agile Tester）</p>
</div>
<hr className="accent-line" />
<h2 className="section-header text-2xl mt-12 mb-6 border-b border-[var(--color-border)] pb-2">📚 目次</h2>
<ol className="list-decimal pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li><Link href="#chapter-0">CTFL-AT 概要と資格ロードマップ</Link></li>
<li><Link href="#chapter-1">Chapter 1: アジャイルソフトウェア開発（Agile Software Development）</Link><ul className="list-disc pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li><Link href="#section-1-1">1.1 アジャイルの基礎とアジャイルマニフェスト</Link></li>
<li><Link href="#section-1-2">1.2 アジャイルアプローチの側面</Link></li>
</ul>
</li>
<li><Link href="#chapter-2">Chapter 2: アジャイルテストの基本原則・実践・プロセス</Link><ul className="list-disc pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li><Link href="#section-2-1">2.1 従来型テストとアジャイルテストの違い</Link></li>
<li><Link href="#section-2-2">2.2 アジャイルプロジェクトにおけるテストの状況</Link></li>
<li><Link href="#section-2-3">2.3 アジャイルチームにおけるテスターの役割とスキル</Link></li>
</ul>
</li>
<li><Link href="#chapter-3">Chapter 3: アジャイルテスト技法とツール</Link><ul className="list-disc pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li><Link href="#section-3-1">3.1 アジャイルテスト手法（TDD・ATDD・BDD・テストピラミッド）</Link></li>
<li><Link href="#section-3-2">3.2 品質リスク評価とテスト工数見積もり</Link></li>
<li><Link href="#section-3-3">3.3 アジャイルプロジェクトにおける技法</Link></li>
<li><Link href="#section-3-4">3.4 アジャイルプロジェクトにおけるツール</Link></li>
</ul>
</li>
<li><Link href="#exam-tips">試験対策・サンプル問題</Link></li>
<li><Link href="#references">参照URL一覧</Link></li>
</ol>
<hr className="accent-line" />

<h2 id="chapter-0" className="section-header text-2xl mt-12 mb-6 border-b border-[var(--color-border)] pb-2">🌟 Chapter 0: CTFL-AT 概要と資格ロードマップ</h2>
<h3 className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">0.1 この資格とは？</h3>
<Mermaid chart={`graph TD
    classDef current fill:#febbcc,stroke:#e91e63,stroke-width:2px,color:#900
    classDef required fill:#fff3cd,stroke:#ffc107,stroke-width:2px,color:#856404
    classDef advanced fill:#d1ecf1,stroke:#17a2b8,stroke-width:2px,color:#0c5460

    CTFL["CTFL v4.0 / 旧CTFL<br>（前提資格：必須）"]:::required
    CTFL_AT["CTFL-AT<br>(Foundation Level Agile Tester)<br>★ 本資格"]:::current
    CTAL_ATT["CTAL-ATT<br>(Agile Technical Tester)"]:::advanced
    CT_ATLaS["CT-ATLaS<br>(Agile Test Leadership at Scale)"]:::advanced

    CTFL --> CTFL_AT
    CTFL_AT --> CTAL_ATT
    CTFL_AT --> CT_ATLaS

    %% Note
    classDef note fill:#f8d7da,stroke:#f5c6cb,stroke-width:1px,color:#721c24
    Note["⚠️ 重要な注意：<br>CTFL v4.0 にはアジャイルテストの内容が含まれているため、<br>CTFL v4.0 取得者は CTFL-AT を取る必要がない可能性がある"]:::note
`} />
<p><strong>CTFL-AT（Certified Tester Foundation Level Agile Tester）</strong> は、アジャイルプロジェクトにおいて効果的に貢献するための基本的なテストスキルを提供する資格です。アジャイルマニフェストに基づくアジャイルソフトウェア開発の原則に沿ったアジャイルテストをカバーします。</p>
<h3 className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">0.2 試験概要</h3>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th align="left" scope="col">項目</th>
<th align="left" scope="col">詳細</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>問題数</strong></td>
<td align="left">40問</td>
</tr>
<tr>
<td align="left"><strong>合格点</strong></td>
<td align="left">26点（40点満点）</td>
</tr>
<tr>
<td align="left"><strong>合格率目標</strong></td>
<td align="left">65%</td>
</tr>
<tr>
<td align="left"><strong>試験時間</strong></td>
<td align="left">60分（英語非母語者は+25% = 75分）</td>
</tr>
<tr>
<td align="left"><strong>前提条件</strong></td>
<td align="left">CTFL（どのバージョンも可）</td>
</tr>
<tr>
<td align="left"><strong>最新シラバス</strong></td>
<td align="left">v1.0（2014年）</td>
</tr>
<tr>
<td align="left"><strong>各問の配点</strong></td>
<td align="left">1点（全問均等）</td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">0.3 シラバス構成と学習時間</h3>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th align="left" scope="col">Chapter</th>
<th align="left" scope="col">学習内容</th>
<th align="left" scope="col">学習時間</th>
<th align="left" scope="col">比率</th>
<th align="left" scope="col">備考</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>Chapter 1</strong></td>
<td align="left">アジャイルソフトウェア開発</td>
<td align="left">150分</td>
<td align="left">20.3%</td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><strong>Chapter 2</strong></td>
<td align="left">アジャイルテストの基本原則</td>
<td align="left">105分</td>
<td align="left">14.2%</td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><strong>Chapter 3</strong></td>
<td align="left">アジャイルテスト技法とツール</td>
<td align="left">480分</td>
<td align="left">65.1%</td>
<td align="left">← 最重要！</td>
</tr>
<tr>
<td align="left"><strong>合計</strong></td>
<td align="left"></td>
<td align="left"><strong>735分</strong> (12.25h)</td>
<td align="left"><strong>100%</strong></td>
<td align="left"></td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">0.4 7つのビジネスアウトカム（Business Outcomes）</h3>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">ビジネスアウトカム</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>アジャイルソフトウェア開発の原則と基本プラクティスを熟知した上で、クロスファンクショナルなアジャイルチームで協力できる</td>
</tr>
<tr>
<td>2</td>
<td>既存のテスト経験と知識をアジャイルの価値と原則に適応させられる</td>
</tr>
<tr>
<td>3</td>
<td>テスト関連活動の計画についてアジャイルチームをサポートできる</td>
</tr>
<tr>
<td>4</td>
<td>アジャイルプロジェクトのテストに関連する手法と技法を適用できる</td>
</tr>
<tr>
<td>5</td>
<td>テスト自動化活動においてアジャイルチームをアシストできる</td>
</tr>
<tr>
<td>6</td>
<td>ビジネスステークホルダーが理解しやすく、テスト可能なユーザーストーリー・シナリオ・要件・受入基準を定義するのを支援できる</td>
</tr>
<tr>
<td>7</td>
<td>効果的なコミュニケーションスタイルとチャネルを使用して、他チームメンバーと協力・情報共有できる</td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">0.5 認知レベル（K-Level）</h3>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th scope="col">レベル</th>
<th scope="col">意味</th>
<th scope="col">問題の特徴</th>
</tr>
</thead>
<tbody><tr>
<td><strong>K1</strong></td>
<td>Remember（記憶）</td>
<td>用語・概念を思い出す</td>
</tr>
<tr>
<td><strong>K2</strong></td>
<td>Understand（理解）</td>
<td>概念を説明・分類する</td>
</tr>
<tr>
<td><strong>K3</strong></td>
<td>Apply（適用）</td>
<td>実際の状況に知識を適用する</td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">0.6 CTFL v4.0 vs CTFL-AT の関係</h3>
<div className="callout callout-info">
<p>重要な注意：</p>
<p>CTFL v4.0（2023年以降）の取得者：
  → CTFL v4.0 にはアジャイルテストの内容が組み込まれている
  → CTFL-AT の追加受験は必須ではない可能性がある
  → ただし、CTAL-ATT や CT-ATLaS への進路は CTFL-AT でも可能</p>
<p>旧CTFL（v3以前）の取得者：
  → アジャイルテストの知識を証明したい場合に CTFL-AT が有効
  → CTAL-ATT・CT-ATLaS へ進むための資格要件として有効</p>
<p>推奨：
  → 現在の資格バージョンと目指すキャリアに応じて判断する
  → 詳細は ISTQB® 公式サイトで最新情報を確認する</p>
</div>
<hr className="accent-line" />

<h2 id="chapter-1" className="section-header text-2xl mt-12 mb-6 border-b border-[var(--color-border)] pb-2">🌱 Chapter 1: アジャイルソフトウェア開発（Agile Software Development）</h2>
<div className="callout callout-info">
<p>150分 | アジャイルの基本概念</p>
</div>

<h3 id="section-1-1" className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">1.1 アジャイルソフトウェア開発の基礎（The Fundamentals of Agile Software Development）</h3>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">1.1.1 アジャイルマニフェスト（Agile Manifesto）</h4>
<p>2001年、ソフトウェア開発の主要な軽量メソドロジーを代表する17人のエキスパートが
共通の価値観と原則に合意し、「アジャイルソフトウェア開発マニフェスト」を発表した。</p>
<p>アジャイルマニフェストの4つの価値（試験頻出！）：</p>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th align="left" scope="col">重要なもの（左）</th>
<th align="center" scope="col"></th>
<th align="left" scope="col">価値があるもの（右）</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>個人と対話</strong><br />(Individuals and interactions)</td>
<td align="center">over</td>
<td align="left"><strong>プロセスとツール</strong><br />(processes and tools)</td>
</tr>
<tr>
<td align="left"><strong>動くソフトウェア</strong><br />(Working software)</td>
<td align="center">over</td>
<td align="left"><strong>包括的なドキュメント</strong><br />(comprehensive documentation)</td>
</tr>
<tr>
<td align="left"><strong>顧客との協調</strong><br />(Customer collaboration)</td>
<td align="center">over</td>
<td align="left"><strong>契約交渉</strong><br />(contract negotiation)</td>
</tr>
<tr>
<td align="left"><strong>変化への対応</strong><br />(Responding to change)</td>
<td align="center">over</td>
<td align="left"><strong>計画に従うこと</strong><br />(following a plan)</td>
</tr>
</tbody></table></div>
<p>⚠️ 重要：「右側のものも価値があるが、左側のものをより高く評価する」</p>
<p><strong>アジャイルマニフェストの12の原則：</strong></p>
<div className="callout callout-info">
<ol className="list-decimal pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li>顧客満足を最優先とし、価値あるソフトウェアを継続的・早期に提供する</li>
<li>要件の変更を歓迎する（開発の後期であっても）</li>
<li>動作するソフトウェアを数週間から数ヶ月おきに頻繁にリリースする</li>
<li>ビジネス関係者と開発者はプロジェクト全体を通じて毎日一緒に作業する</li>
<li>やる気のある個人でプロジェクトを構成し、必要な環境・支援を与え、信頼する</li>
<li>情報伝達の最善の方法は対面での会話</li>
<li>動くソフトウェアが主要な進捗の尺度</li>
<li>アジャイルプロセスは持続可能な開発を促進する</li>
<li>技術的な卓越性と優れた設計への継続的な注意がアジャイルを強化する</li>
<li>シンプルさ（無駄な作業をできる限り省くこと）が本質</li>
<li>最良のアーキテクチャ・要件・設計は自己組織化チームから生まれる</li>
<li>チームは定期的に、より効果的になる方法を振り返り、行動を調整する</li>
</ol>
</div>
<p><strong>テスターとしてのアジャイルマニフェスト理解：</strong></p>
<pre className="code-block text-sm overflow-x-auto p-4 bg-[var(--color-bg-card)] rounded-[var(--radius-DEFAULT)] border border-[var(--color-border)] my-4 text-[var(--color-text-secondary)]"><code className="language-python">{"# アジャイルマニフェストをテスト視点で理解する\n\nagile_manifesto_for_testers = {\n    \"個人と対話\": {\n        \"意味\": \"チームメンバー間の直接コミュニケーションを重視\",\n        \"テスターへの影響\": [\n            \"開発者と毎日コミュニケーション\",\n            \"バグを早期に口頭で共有\",\n            \"チーム全体で品質に責任を持つ\",\n        ]\n    },\n    \"動くソフトウェア\": {\n        \"意味\": \"ドキュメントより実際に動くソフトを重視\",\n        \"テスターへの影響\": [\n            \"スプリントの最後に動作確認を実施\",\n            \"テスト仕様書より自動テストを重視\",\n            \"実際に動くコードをデモできることが完了の証明\",\n        ]\n    },\n    \"顧客との協調\": {\n        \"意味\": \"契約ではなく継続的な協力を重視\",\n        \"テスターへの影響\": [\n            \"受入基準を顧客と共に定義\",\n            \"デモでユーザーからフィードバックを取得\",\n            \"ユーザーストーリーの作成に参加\",\n        ]\n    },\n    \"変化への対応\": {\n        \"意味\": \"固定計画より変化への適応を重視\",\n        \"テスターへの影響\": [\n            \"テスト計画を柔軟に更新\",\n            \"リグレッションテストで変更による影響を確認\",\n            \"スプリント中の要件変更に素早く対応\",\n        ]\n    }\n}\n"}</code></pre>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">1.1.2 ホールチームアプローチ（Whole-Team Approach）</h4>
<div className="callout callout-info">
<p>ホールチームアプローチとは：
  → プロジェクト成功に必要な知識とスキルを持つ全員が関与するアプローチ
  → チームは比較的小規模（3〜9人が理想）
  → 理想的には同じワークスペースを共有（コロケーション）</p>
<p>チームの構成：</p>
<ul className="list-disc pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li>開発者（Developer）</li>
<li>テスター（Tester）</li>
<li>ビジネス代表者（Product Owner 等）</li>
<li>スクラムマスター（Scrum Master）</li>
<li>その他の専門家</li>
</ul>
<p>ホールチームアプローチのメリット：
  ✓ チーム内のコミュニケーションと協調の強化
  ✓ チームの多様なスキルセットの有効活用
  ✓ 品質をチーム全員の責任にする</p>
<p>「Power of Three（三の力）」：
  → テスター・開発者・ビジネス代表者が全ての機能議論に参加する概念
  → 三者の視点が機能の品質を大きく向上させる</p>
<p>アジャイルにおけるテスターの独立性：
  伝統的アプローチ：テスターは独立したテストチームに所属
  アジャイルアプローチ：テスターはデリバリーチームの一員</p>
<p>  ただし、完全に独立したテストチームを別途設けることも可能：
    ✓ 特定のテストタイプ（セキュリティ・性能）のために独立チームを設ける
    ✓ コードを書く開発者には依存しない独立したレビューが可能</p>
</div>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">1.1.3 早期・頻繁なフィードバック（Early and Frequent Feedback）</h4>
<div className="callout callout-info">
<p>アジャイルの短いイテレーションによる継続的フィードバック：</p>
<p>従来のウォーターフォール：
  [要件] → [設計] → [開発] → [テスト] → [リリース]
     長い期間↑                               フィードバックが遅い</p>
<p>アジャイル：
  スプリント1  スプリント2  スプリント3  スプリント4
  [計画→開発→テスト→デモ] → [計画→開発→テスト→デモ] → ...
     ↑フィードバック↑         ↑フィードバック↑
     毎スプリントで顧客の声を反映！</p>
<p>早期・頻繁なフィードバックのメリット：
  ✓ 誤解した要件を開発サイクルの早期に発見できる
  ✓ 顧客機能要求を明確にして早期利用可能にする
  ✓ 品質問題を（継続的インテグレーションで）早期に発見・特定・解決
  ✓ アジャイルチームの生産性・デリバリー能力についての情報提供
  ✓ 一定のプロジェクト勢いを保つ</p>
</div>
<hr className="accent-line" />

<h3 id="section-1-2" className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">1.2 アジャイルアプローチの側面（Aspects of Agile Approaches）</h3>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">1.2.1 アジャイルソフトウェア開発アプローチ（試験頻出！）</h4>
<p>CTFL-AT で扱う3つの代表的なアジャイルアプローチ：</p>
<p><strong>XP vs Scrum vs Kanban の比較（試験頻出！）</strong></p>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th align="left" scope="col">比較項目</th>
<th align="left" scope="col">XP (eXtreme Programming)</th>
<th align="left" scope="col">Scrum</th>
<th align="left" scope="col">Kanban</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>基本構成</strong></td>
<td align="left">5つの価値<br />（通信・シンプルさ・フィードバック・勇気・尊重）</td>
<td align="left">3つの役割<br />（Scrum Master・Product Owner・開発チーム）</td>
<td align="left">3つの機器<br />（カンバンボード・WIP制限・リードタイム）</td>
</tr>
<tr>
<td align="left"><strong>作業単位</strong></td>
<td align="left">13のプラクティス<br />（ペアプロ・TDD・継続的インテグレーション等）</td>
<td align="left">スプリント<br />（2〜4週間固定のタイムボックス）</td>
<td align="left">イテレーションは任意<br />（アイテム単位で随時リリース）</td>
</tr>
<tr>
<td align="left"><strong>技術的規定</strong></td>
<td align="left">開発技術を明確に規定する<br />（テストファースト等）</td>
<td align="left">開発技術は規定しない</td>
<td align="left">フローを可視化・最適化する<br />（WIP制限によるプル方式）</td>
</tr>
</tbody></table></div>
<p><strong>Scrum の詳細（試験頻出！）：</strong>
Scrum の主要要素：</p>
<p>スプリント（Sprint）：
  → 通常2〜4週間の固定長イテレーション
  → 各スプリントの終わりにリリース可能なインクリメントを作成</p>
<p>プロダクトバックログ（Product Backlog）：
  → 製品アイテムの優先順位付きリスト
  → プロダクトオーナーが管理・更新（バックログリファインメント）</p>
<p>スプリントバックログ（Sprint Backlog）：
  → 各スプリント開始時に選択する最優先アイテムのリスト
  → チームがプロダクトバックログから「プル」（プッシュではない）</p>
<p>Definition of Done（完成の定義）：
  → スプリント完了の基準
  → チームがバックログアイテムの理解を深める</p>
<p>タイムボックス（Timeboxing）：
  → スプリント内で完了できないタスクはプロダクトバックログに戻す</p>
<p>透明性（Transparency）：
  → デイリースクラムで毎日進捗を共有</p>
<p>Scrum の3つの役割：
  Scrum Master：スクラムプラクティスの実施確保・コーチ（チームリーダーではない）
  Product Owner：顧客の代表・プロダクトバックログを生成・管理・優先順位付け
  開発チーム：製品を開発・テスト・自己組織化・クロスファンクショナル</p>
<p><strong>Kanban の詳細：</strong></p>
<div className="callout callout-info">
<p>Kanban の3つの機器（Instruments）：</p>
<p>カンバンボード（Kanban Board）：</p>
</div>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th align="left" scope="col">バックログ</th>
<th align="left" scope="col">開発中</th>
<th align="left" scope="col">テスト中</th>
<th align="left" scope="col">完了</th>
</tr>
</thead>
<tbody><tr>
<td align="left">[機能A]</td>
<td align="left">[機能B]</td>
<td align="left">[機能C]</td>
<td align="left">[機能D]</td>
</tr>
<tr>
<td align="left">[機能E]</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
</tbody></table></div>
<div className="callout callout-info">
<p>  → 各列は「ステーション」（関連する活動のセット）
  → チケットが左から右へ流れる</p>
<p>WIP制限（Work-in-Progress Limit）：
  → 並行アクティブタスクの厳格な制限
  → 各ステーションの最大チケット数で制御
  → 空きができたら前のステーションからプル</p>
<p>リードタイム（Lead Time）：
  → タスクの平均リードタイムを最小化して継続的フローを最適化</p>
<p>Scrum との主な違い：
  スプリント/イテレーションは任意（Scrum では必須）
  タイムボックスは任意
  アイテム単位でリリース可能（Scrum ではスプリント単位）</p>
</div>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">1.2.2 協調的ユーザーストーリー作成（Collaborative User Story Creation）</h4>
<div className="callout callout-info">
<p>ユーザーストーリーとは：
  → アジャイル開発で要件を捉えるツール
  → 開発者・テスター・ビジネス代表者の視点から書かれる</p>
<p>ユーザーストーリーの形式：
  As a [ロール/ユーザータイプ]
  I want [アクション/機能]
  So that [得られる価値]</p>
<p>3C コンセプト（ユーザーストーリーの3要素）：</p>
<p>  Card（カード）：
    → ユーザーストーリーを記述する物理的な媒体
    → 要件・重要度・開発/テスト期間の見積もり・受入基準を識別
    → プロダクトバックログで使用</p>
<p>  Conversation（会話）：
    → ソフトウェアの使用方法を説明する会話
    → 文書化または口頭で可能
    → リリース計画フェーズで始まり、ストーリーのスケジュール時に継続</p>
<p>  Confirmation（確認）：
    → 受入基準を使用してストーリーが「完了」したことを確認
    → 複数のユーザーストーリーにまたがることもある
    → ポジティブテストとネガティブテストの両方を使用</p>
</div>
<p><strong>INVEST 技法（良いユーザーストーリーの基準）：</strong></p>
<div className="callout callout-info">
<p>INVEST = 良いユーザーストーリーの6つの基準：</p>
<p>I - Independent（独立性）
    → 他のストーリーへの依存が最小限
    ✗ 悪い：「ユーザーはFBでもログインできる（Googleログイン後に）」
    ✓ 良い：「ユーザーはGoogleでログインできる」</p>
<p>N - Negotiable（交渉可能性）
    → 詳細は開発者・テスター・POで交渉可能
    → 実装方法はチームで議論できる余地がある</p>
<p>V - Valuable（価値）
    → ビジネスまたはユーザーに明確な価値がある
    ✗ 悪い：「DBをPostgreSQLに移行する」（技術実装のみ）
    ✓ 良い：「ユーザーは3秒以内に検索結果を受け取れる」</p>
<p>E - Estimable（見積もり可能性）
    → チームがストーリーポイントを付けられる程度に明確</p>
<p>S - Small（小ささ）
    → 1〜2スプリントで完了できるサイズ</p>
<p>T - Testable（テスト可能性）← テスターにとって最重要！
    → 合格/不合格の判断基準が明確
    ✗ 悪い：「システムはユーザーフレンドリーであること」
    ✓ 良い：「チェックアウトは4ステップ以下で完了できること」</p>
</div>
<pre className="code-block text-sm overflow-x-auto p-4 bg-[var(--color-bg-card)] rounded-[var(--radius-DEFAULT)] border border-[var(--color-border)] my-4 text-[var(--color-text-secondary)]"><code className="language-python">{"# ユーザーストーリー作成の実践例とテスターの貢献\n\n# オリジナルのユーザーストーリー（テスター参加前）\noriginal_story = \"\"\"\nAs a registered user,\nI want to search for products,\nSo that I can find what I need quickly.\n\"\"\"\n\n# テスターが提案する質問（テスターの視点）\ntester_questions = [\n    # INVEST の T（テスト可能性）の確認\n    \"「素早く」の具体的な基準は？（例：3秒以内）\",\n    \n    # 境界値・異常系の確認\n    \"検索キーワードが空の場合は？\",\n    \"検索キーワードに特殊文字を入れた場合は？\",\n    \"検索結果が0件の場合は？\",\n    \n    # 非機能要件の確認\n    \"同時に1000人が検索した場合の性能要件は？\",\n    \"部分一致・完全一致・あいまい検索は？\",\n    \n    # エラー処理の確認\n    \"商品が一時的に検索できない場合のエラー表示は？\",\n]\n\n# テスターが提案する受入基準（改善後）\nacceptance_criteria = [\n    \"✓ キーワード入力後3秒以内に検索結果が表示される\",\n    \"✓ 商品名・説明文を対象に部分一致検索ができる\",\n    \"✓ 結果は関連度の高い順に表示される（最大50件）\",\n    \"✓ 0件の場合は「検索結果がありません」メッセージを表示\",\n    \"✓ 空のキーワードでは検索が実行されない（エラーメッセージ表示）\",\n    \"✓ 100文字を超えるキーワードは入力できない\",\n]\n\nprint(\"テスターの貢献：曖昧な要件を具体的な受入基準に変換！\")\n"}</code></pre>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">1.2.3 レトロスペクティブ（Retrospectives）</h4>
<div className="callout callout-info">
<p>レトロスペクティブとは：
  → スプリント/イテレーション終了後に実施するプロセス改善ミーティング
  → アジャイルプロジェクトにおける継続的改善の機運</p>
<p>レトロスペクティブの基本フォーマット（KPT）：</p>
<p>  Keep（続けること）：
    → うまくいっているので継続すべきこと
    例：「デイリースタンドアップが15分以内に完了している」</p>
<p>  Problem（問題点）：
    → 課題・改善が必要なこと
    例：「テスト環境のセットアップに時間がかかりすぎる」</p>
<p>  Try（試すこと）：
    → 次のスプリントで試してみること
    例：「テスト環境をDockerで自動構築する」</p>
<p>テスターのレトロスペクティブでの貢献：
  ✓ テスト実行の問題点（フレイキーテスト・遅すぎるテスト等）を報告
  ✓ 欠陥の傾向から開発プロセスの問題を指摘
  ✓ テスト自動化の提案
  ✓ テストアプローチの改善提案</p>
<p>その他のレトロスペクティブ形式：
  4Ls: Liked / Learned / Lacked / Longed For
  Start / Stop / Continue
  Mad / Sad / Glad</p>
</div>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">1.2.4 継続的インテグレーション（Continuous Integration）</h4>
<div className="callout callout-info">
<p>CI（継続的インテグレーション）とは：
  → 開発者が頻繁にコードをメインブランチに統合
  → 統合のたびに自動ビルド・自動テストを実行</p>
<p>CI のステップ：
  ① コードを書く
  ② バージョン管理システム（Git等）にコミット
  ③ 自動ビルドを実行
  ④ 自動テストを実行（ユニット・統合テスト等）
  ⑤ 結果をレポート
  ⑥ 失敗したら即座に修正</p>
<p>テスターへの CI の影響：
  ✓ テストを自動化する必要がある（手動では追いつかない）
  ✓ テストコードをソースコードと同様に管理する
  ✓ 素早いフィードバックを提供するテストを書く
  ✓ 遅いテスト（E2Eテスト）は夜間バッチに移行
  ✓ フレイキーテスト（不安定なテスト）を排除する</p>
<p>CI パイプラインの例（テスト視点）：</p>
<p>  コードPush
     ↓
  コンパイル / ビルド（&lt; 1分）
     ↓
  ユニットテスト（&lt; 5分）← ここで失敗したら即通知
     ↓
  コードカバレッジ確認
     ↓
  統合テスト（&lt; 10分）
     ↓
  コードスキャン（静的解析）
     ↓
  ステージングデプロイ
     ↓
  E2Eスモークテスト</p>
</div>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">1.2.5 リリース計画とイテレーション計画（Release and Iteration Planning）</h4>
<div className="callout callout-info">
<p>2種類の計画：</p>
<p>リリース計画（Release Planning）：
  → 複数スプリント/イテレーションを跨ぐ中長期計画
  → 製品リリースの目標と内容を定義
  → 参加者：チーム全員 + ステークホルダー</p>
<p>  テスターのリリース計画での貢献：
  ✓ 各機能のテスト工数の見積もり
  ✓ 機能横断的なリスクの識別
  ✓ テスト環境の要件定義
  ✓ テスト自動化計画の策定</p>
<p>イテレーション計画（Iteration/Sprint Planning）：
  → 単一スプリントの計画
  → プロダクトバックログから次のスプリントのアイテムを選択
  → 参加者：開発チーム + Product Owner</p>
<p>  テスターのイテレーション計画での貢献：
  ✓ ユーザーストーリーの「テスト可能性」の評価
  ✓ 各ストーリーのテスト工数の見積もり
  ✓ 受入基準の明確化
  ✓ テストアプローチの確認</p>
</div>
<hr className="accent-line" />

<h2 id="chapter-2" className="section-header text-2xl mt-12 mb-6 border-b border-[var(--color-border)] pb-2">⚖️ Chapter 2: アジャイルテストの基本原則・実践・プロセス</h2>
<div className="callout callout-info">
<p>105分 | 従来型テストとアジャイルテストの違い</p>
</div>

<h3 id="section-2-1" className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">2.1 従来型テストとアジャイルテストの違い（The Differences between Testing in Traditional and Agile Approaches）</h3>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">2.1.1 テストと開発活動（Testing and Development Activities）</h4>
<p>従来型（ウォーターフォール）とアジャイルの開発・テストサイクルの違い：</p>
<Mermaid chart={`flowchart LR
    subgraph 従来型["従来型 (個別フェーズが順番に実行される)"]
        direction TB
        Req["要件定義"] --> Design["設計"] --> Impl["実装"] --> Test["テスト<br>(後半に集中)"] --> Rel["リリース"]
    end
    
    subgraph アジャイル["アジャイル (テストと開発が常に並行)"]
        direction TB
        S1["スプリント 1<br>(設計+実装+テスト)"] --> S2["スプリント 2<br>(設計+実装+テスト)"] --> S3["スプリント 3<br>(設計+実装+テスト)"] --> Rel2["リリース"]
    end
    
    classDef waterfall fill:#f8f9fa,stroke:#ced4da,stroke-width:2px,color:#495057
    classDef agile fill:#e0f7fa,stroke:#00acc1,stroke-width:2px,color:#006064
    class 従来型 waterfall
    class アジャイル agile
`} />
<div className="callout callout-info">
<p><strong>主な違い（試験頻出！）：</strong></p>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th align="left" scope="col">従来型</th>
<th align="center" scope="col">vs</th>
<th align="left" scope="col">アジャイル</th>
</tr>
</thead>
<tbody><tr>
<td align="left">テストは開発後の個別フェーズ</td>
<td align="center"></td>
<td align="left">テストは開発と並行・継続的に行われる</td>
</tr>
<tr>
<td align="left">要件は事前に詳細定義される</td>
<td align="center"></td>
<td align="left">要件はイテレーション毎に精緻化される</td>
</tr>
<tr>
<td align="left">テスターは独立したテストチームに属する</td>
<td align="center"></td>
<td align="left">テスターはデリバリーチームの一員である</td>
</tr>
<tr>
<td align="left">テスト計画は事前に詳細に作成される</td>
<td align="center"></td>
<td align="left">テスト計画は適応的で継続的に更新される</td>
</tr>
<tr>
<td align="left">テストはリリース前に集中する</td>
<td align="center"></td>
<td align="left">テストは全スプリントで継続される</td>
</tr>
<tr>
<td align="left">バグは別の人が修正することが多い</td>
<td align="center"></td>
<td align="left">バグは即座に同チーム内で修正される</td>
</tr>
</tbody></table></div>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">2.1.2 プロジェクト成果物（Project Work Products）</h4>
</div>
<p>従来型とアジャイルの主要な成果物の違い：</p>
<p>テストドキュメント：
  従来型：
    - 詳細なテスト計画書（マスターテスト計画）
    - テストケース仕様書
    - テスト結果レポート</p>
<p>  アジャイル：
    - 軽量なテスト戦略（スプリントテスト計画）
    - 受入基準（ユーザーストーリーの一部）
    - 自動化テストスクリプト（実行可能な仕様書として機能）
    - テストダッシュボード（リアルタイム進捗確認）</p>
<p>テスト実行の成果物：
  従来型：
    - 重量なテスト結果レポート
    - 欠陥レポート（フォーマル手続き）</p>
<p>  アジャイル：
    - 自動テストの実行結果
    - タスクボード上の欠陥（バックログアイテム）
    - バーンダウンチャート</p>
<p>ポイント：アジャイルではドキュメントより「実行可能なテスト」を重視！
  → テストコード自体がドキュメントとしての役割を果たす
  → TDD/BDD のテストが「実行可能な仕様書」として機能する</p>
<div className="callout callout-info">
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">2.1.3 テストレベル（Test Levels）</h4>
<p>従来型 vs アジャイルのテストレベル：</p>
</div>
<p>flowchart TD
    subgraph 従来型["従来型（厳格なシーケンスで1回のみ実施）"]
        direction LR
        C1["コンポーネント"] --&gt; I1["統合"] --&gt; S1["システム"] --&gt; U1["受入"]
    end</p>
<pre className="code-block text-sm overflow-x-auto p-4 bg-[var(--color-bg-card)] rounded-[var(--radius-DEFAULT)] border border-[var(--color-border)] my-4 text-[var(--color-text-secondary)]"><code>{"subgraph アジャイル[\"アジャイル（毎スプリントで全てのレベルを反復実施）\"]\n    direction TD\n    C2[\"コンポーネントテスト&lt;br&gt;(ユニットテスト/TDD)\"] --&gt;|毎日のCIで自動実行| I2[\"統合テスト\"]\n    I2 --&gt;|\"(\"| S2[\"システムテスト&lt;br&gt;(スプリント内機能テスト)\"]\n    S2 --&gt;|スプリントレビュー| U2[\"受入テスト&lt;br&gt;(顧客/POによる評価)\"]\nend\n\nclassDef waterfall fill:#f8f9fa,stroke:#ced4da,stroke-width:2px,color:#495057\nclassDef agile fill:#e8f5e9,stroke:#4caf50,stroke-width:2px,color:#1b5e20\nclass 従来型 waterfall\nclass アジャイル agile\n"}</code></pre>
<div className="callout callout-info">
</div>
<p>アジャイルにおけるテストレベルの特徴：
  ✓ 全レベルを各スプリントで繰り返し実施
  ✓ テストレベル間の境界が曖昧になる
  ✓ テスト自動化が必須（手動では全レベルをカバーできない）
  ✓ リグレッションテストが重要（変更の多い環境では常に必要）</p>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">2.1.4 テストと構成管理（Testing and Configuration Management）</h4>
<div className="callout callout-info">
<p>アジャイルにおける構成管理の重要性：</p>
<p>理由：
  → 短いスプリントで頻繁に変更が発生
  → 複数のチームが同時に同じコードに変更を加える
  → テストコードもソースコードと同様に管理が必要</p>
<p>ベストプラクティス：
  ✓ テストスクリプトをバージョン管理（Git）に含める
  ✓ ブランチ戦略を確立する（Feature Branch等）
  ✓ テスト環境の構成をコードで管理（IaC: Infrastructure as Code）
  ✓ 自動ビルド・自動テストを CI/CD パイプラインに統合
  ✓ ビルドとテストの結果を追跡・記録する</p>
<p>構成管理ツール（アジャイルチームで使用）：
  ✓ Git/GitHub/GitLab/Bitbucket（バージョン管理）
  ✓ Jenkins/GitHub Actions/CircleCI（CI/CD）
  ✓ Docker/Kubernetes（環境の標準化）
  ✓ Jira/Backlog（タスク・欠陥管理）</p>
</div>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">2.1.5 独立したテストの組織オプション（Organizational Options for Independent Testing）</h4>
<div className="callout callout-info">
<p>アジャイルにおける独立テストの選択肢：</p>
<p>オプション1：独立テストチームなし（最も一般的）
  → テスターはデリバリーチームの一員
  → 開発者と同じスプリントで作業
  → 迅速なフィードバック、ただし独立性の低さがトレードオフ</p>
<p>オプション2：スプリント終了後の独立テスト（少ない）
  → 開発後に別チームがテストを実施
  → 独立性は高いが、フィードバックが遅くなるリスク</p>
<p>オプション3：専門テストチーム（特定の目的で使用）
  → 性能テスト・セキュリティテストなど専門的なテスト
  → 全チームに共有のサービスとして提供
  → コードを書く開発者に依存しない独立したレビューが可能</p>
<p>CTFL-AT のポイント：
  アジャイルでは独立テストが全く不要というわけではない
  → 用途に応じて適切なレベルの独立性を選択する</p>
</div>
<hr className="accent-line" />

<h3 id="section-2-2" className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">2.2 アジャイルプロジェクトにおけるテストの状況（Status of Testing in Agile Projects）</h3>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">2.2.1 テストの状況・進捗・製品品質のコミュニケーション</h4>
<div className="callout callout-info">
<p>アジャイルにおけるテスト状況の伝え方：</p>
<p>デイリースタンドアップ（Daily Stand-up/Scrum）：
  目的：チームで毎日進捗を共有する15分のミーティング
  テスターが共有すること：
  ✓ 昨日完了したテスト活動
  ✓ 今日実施予定のテスト活動
  ✓ テストを阻害している障害（ブロッカー）</p>
<p>バーンダウンチャート（Burndown Chart）：
  → スプリントの残業量を時系列で表示
  → スクラムマスター（または同等の役割）が更新</p>
<p>  <strong>例：時間の経過と残タスクの減少</strong></p>
<ul className="list-disc pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li>Day0: 20タスク</li>
<li>Day2: 15タスク</li>
<li>Day5: 10タスク</li>
<li>Day8: 5タスク</li>
<li>Day10: 0タスク (完了)
テスト固有のメトリクス：
  ✓ テストケース実行率（実行数/総数）
  ✓ テスト合格率（合格数/実行数）
  ✓ 欠陥検出率（スプリント毎の欠陥数トレンド）
  ✓ テストカバレッジ（コードカバレッジ等）
  ✓ 未解決の欠陥数（重要度別）</li>
</ul>
<p>スプリントレビュー（Sprint Review）：
  → スプリント末に実施するデモ・レビューミーティング
  → ステークホルダーへの製品品質の報告の場
  テスターの役割：
  ✓ テスト結果の概要報告
  ✓ 発見された欠陥の説明
  ✓ 受入基準の満足状況の確認</p>
</div>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">2.2.2 進化する手動・自動テストケースによるリグレッションリスク管理</h4>
<div className="callout callout-info">
<p>アジャイルのリグレッションテストの課題：</p>
<p>問題：
  → 毎スプリントで新機能が追加・変更される
  → 変更のたびに既存機能が壊れるリスク（リグレッション）
  → 手動テストでは全てをカバーする時間がない</p>
<p>解決策：テスト自動化によるリグレッション管理</p>
<p>  自動化すべきテスト（リグレッションスイート）：
  ✓ 頻繁に実行されるスモークテスト
  ✓ 重要機能の回帰テスト
  ✓ ユニットテスト（TDDで作成）
  ✓ APIテスト（インテグレーションテスト）</p>
<p>  手動テストの優先領域：
  ✓ 新機能の探索的テスト
  ✓ ユーザビリティテスト
  ✓ 複雑な業務シナリオのテスト
  ✓ 自動化が難しいテスト</p>
<p>テスト自動化の原則：
  ✓ 安定した機能を自動化（頻繁に変わる部分は後で）
  ✓ テストピラミッドに従う（ユニットテストを多く）
  ✓ テストを CI/CD パイプラインに組み込む
  ✓ フレイキーテスト（不安定なテスト）は即座に修正</p>
</div>
<hr className="accent-line" />

<h3 id="section-2-3" className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">2.3 アジャイルチームにおけるテスターの役割とスキル</h3>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">2.3.1 アジャイルテスターのスキル（Agile Tester Skills）</h4>
<div className="callout callout-info">
<p>アジャイルテスターに必要なスキル：</p>
<p>技術スキル：
  ✓ テスト自動化（Selenium/Playwright/pytest等）
  ✓ テストスクリプトのプログラミング（Python/Java/JS等）
  ✓ CI/CDの知識（GitHub Actions/Jenkins等）
  ✓ API テスト（Postman/REST Assured等）
  ✓ バージョン管理（Git）</p>
<p>テストスキル：
  ✓ ブラックボックス・ホワイトボックステスト技法
  ✓ 探索的テスト
  ✓ リスクベーステスト
  ✓ 受入テスト（ATDD/BDD）</p>
<p>コラボレーションスキル：
  ✓ チームコミュニケーション（対面・非同期）
  ✓ ユーザーストーリー作成への貢献
  ✓ 開発者・POとの協調的な作業
  ✓ フィードバックの効果的な提供</p>
<p>アジャイルの理解：
  ✓ アジャイルの価値と原則
  ✓ スクラム/カンバンのプロセス
  ✓ イテレーション計画への参加
  ✓ レトロスペクティブへの参加</p>
<p>テスターのマインドセット：
  ✓ 品質はチーム全員の責任（「品質の門番」思考を捨てる）
  ✓ 「バグを見つけること」より「バグを防ぐこと」を重視
  ✓ ネガティブ思考（「何が間違いうるか？」）
  ✓ 顧客目線で考える</p>
</div>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">2.3.2 アジャイルチームにおけるテスターの役割（The Role of a Tester in an Agile Team）</h4>
<div className="callout callout-info">
<p>テスターの主要な活動（アジャイル全体を通じて）：</p>
<p>イテレーション計画：
  ✓ ユーザーストーリーのリスク識別
  ✓ テスト工数の見積もり
  ✓ 受入基準の明確化・テスト可能性の確認</p>
<p>スプリント実行中：
  ✓ ユーザーストーリーのテストケース作成
  ✓ 機能テストの実行
  ✓ 自動化テストの作成・メンテナンス
  ✓ 開発者への即時フィードバック提供
  ✓ 欠陥の報告・追跡</p>
<p>スプリント終了時：
  ✓ 受入テストの実施
  ✓ スプリントレビューでの品質報告
  ✓ レトロスペクティブへの参加</p>
<p>継続的な活動：
  ✓ テスト自動化スイートのメンテナンス
  ✓ テスト環境の管理
  ✓ 品質メトリクスの追跡・報告</p>
<p>テスターの「コーチング」的な役割：
  ✓ 開発者へのテスト技法の指導
  ✓ PO/ビジネス代表者が受入基準を書く支援
  ✓ チーム全体での品質意識向上の促進</p>
</div>
<hr className="accent-line" />

<h2 id="chapter-3" className="section-header text-2xl mt-12 mb-6 border-b border-[var(--color-border)] pb-2">🧰 Chapter 3: アジャイルテスト技法とツール（Agile Testing Methods, Techniques, and Tools）</h2>
<div className="callout callout-info">
<p>480分 | 最重要章</p>
</div>

<h3 id="section-3-1" className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">3.1 アジャイルテスト手法（Agile Testing Methods）</h3>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">3.1.1 TDD・ATDD・BDD（試験頻出！）</h4>
<p><strong>3つの開発駆動手法の比較：</strong></p>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th align="left" scope="col">比較項目</th>
<th align="left" scope="col">TDD (テスト駆動開発)</th>
<th align="left" scope="col">ATDD (受入テスト駆動開発)</th>
<th align="left" scope="col">BDD (振る舞い駆動開発)</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>中心となる対象</strong></td>
<td align="left">開発者</td>
<td align="left">チーム全体</td>
<td align="left">チーム全体</td>
</tr>
<tr>
<td align="left"><strong>テストレベル</strong></td>
<td align="left">ユニットテスト</td>
<td align="left">受入テスト</td>
<td align="left">シナリオベース（End-to-End）</td>
</tr>
<tr>
<td align="left"><strong>主な目的</strong></td>
<td align="left">コード品質向上と設計の改善</td>
<td align="left">機能要件の確認</td>
<td align="left">自然言語を用いた仕様化と共通理解</td>
</tr>
<tr>
<td align="left"><strong>プロセス・記法</strong></td>
<td align="left">Red → Green → Refactor</td>
<td align="left">テストファーストで受入基準を作成</td>
<td align="left">Given-When-Then（Gherkin記法等）</td>
</tr>
</tbody></table></div>
<p><strong>TDD（テスト駆動開発）の詳細：</strong></p>
<pre className="code-block text-sm overflow-x-auto p-4 bg-[var(--color-bg-card)] rounded-[var(--radius-DEFAULT)] border border-[var(--color-border)] my-4 text-[var(--color-text-secondary)]"><code className="language-python">{"# TDD のサイクル（Red-Green-Refactor）\n\n# ===== RED フェーズ：失敗するテストを書く =====\ndef test_calculate_discount_for_premium_customer():\n    \"\"\"プレミアム顧客は20%割引を受けられること\"\"\"\n    service = DiscountService()\n    # まだ DiscountService が存在しないのでこのテストは失敗する\n    result = service.calculate(price=1000, customer_type=\"premium\")\n    assert result == 800  # 20%引き = 800円\n\n# ===== GREEN フェーズ：最小限のコードを書く =====\nclass DiscountService:\n    def calculate(self, price: float, customer_type: str) -&gt; float:\n        if customer_type == \"premium\":\n            return price * 0.8  # 20%引き\n        return price\n\n# テスト実行 → PASS ✅\n\n# ===== REFACTOR フェーズ：コードを整理する =====\nclass DiscountService:\n    DISCOUNT_RATES = {\n        \"premium\": 0.20,\n        \"regular\": 0.10,\n        \"guest\":   0.00,\n    }\n    \n    def calculate(self, price: float, customer_type: str) -&gt; float:\n        discount_rate = self.DISCOUNT_RATES.get(customer_type, 0.0)\n        return price * (1 - discount_rate)\n\n# テスト再実行 → まだ PASS ✅（リファクタリング成功）\n"}</code></pre>
<p><strong>ATDD（受入テスト駆動開発）の詳細：</strong></p>
<div className="callout callout-info">
<p>ATDD のワークフロー：</p>
<ol className="list-decimal pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li>ユーザーストーリーを選択</li>
<li>3 Amigos ミーティング（PO + Dev + Tester）で受入テストを事前作成</li>
<li>受入テストを自動化</li>
<li>開発者が受入テストをパスするようにコードを書く</li>
<li>受入テストが全てパス → ストーリーが完了（Done）</li>
</ol>
<p>ATDD の利点：
  ✓ 開発前に「完了の定義」が明確になる
  ✓ 要件の誤解を早期に防ぐ
  ✓ テストが「実行可能な仕様書」として機能する
  ✓ チーム全員が同じ理解を持てる</p>
</div>
<p><strong>BDD（振る舞い駆動開発）の詳細：</strong></p>
<pre className="code-block text-sm overflow-x-auto p-4 bg-[var(--color-bg-card)] rounded-[var(--radius-DEFAULT)] border border-[var(--color-border)] my-4 text-[var(--color-text-secondary)]"><code className="language-gherkin">{"# BDD のシナリオ（Gherkin 記法）\nFeature: ショッピングカート割引機能\n  登録ユーザーが購入する際に適切な割引が適用される\n\n  Scenario: プレミアム会員が商品を購入する\n    Given プレミアム会員 \"yamada@example.com\" がログインしている\n    And カートに \"ノートPC（150,000円）\" が1台ある\n    When 注文を確定する\n    Then 割引後の合計金額は 120,000円 である\n    And 注文確認メールが \"yamada@example.com\" に送信される\n\n  Scenario: 一般会員が商品を購入する\n    Given 一般会員 \"tanaka@example.com\" がログインしている\n    And カートに \"ノートPC（150,000円）\" が1台ある\n    When 注文を確定する\n    Then 割引後の合計金額は 135,000円 である\n\n  Scenario Outline: 各会員タイプの割引確認\n    Given &lt;会員タイプ&gt; 会員がログインしている\n    And カートに単価 &lt;単価&gt;円 の商品が1個ある\n    When 注文を確定する\n    Then 合計金額は &lt;合計&gt;円 である\n\n    Examples:\n      | 会員タイプ | 単価   | 合計   |\n      | プレミアム | 10000 | 8000  |\n      | 一般      | 10000 | 9000  |\n      | ゲスト    | 10000 | 10000 |\n"}</code></pre>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">3.1.2 テストピラミッド（The Test Pyramid）</h4>
<p><strong>テストピラミッド（Mike Cohn のモデル）：</strong></p>
<Mermaid chart={`flowchart TD
    UI["UI テスト (E2E)<br>10%程度"]
    Service["Service (API/統合) テスト<br>20%程度"]
    Unit["Unit (ユニット) テスト<br>70%程度"]

    UI --- Service
    Service --- Unit

    classDef ui fill:#ffcdd2,stroke:#d32f2f,color:#b71c1c,stroke-width:2px
    classDef service fill:#fff9c4,stroke:#fbc02d,color:#f57f17,stroke-width:2px
    classDef unit fill:#c8e6c9,stroke:#388e3c,color:#1b5e20,stroke-width:2px
    
    class UI ui
    class Service service
    class Unit unit
`} />
<div className="callout callout-info">
<p>各レベルの特徴：</p>
<p>  <strong>Unit（ユニットテスト）：</strong>
    → 個々の関数・クラスのテスト
    → TDDで開発者が作成
    → 実行時間：ミリ秒単位（非常に速い）
    → 数：非常に多い（速くてコストが低いため）</p>
<p>  <strong>Service（サービス/APIテスト）：</strong>
    → コンポーネント間の統合テスト・APIレベルでのテスト
    → 実行時間：秒単位
    → 数：中程度</p>
<p>  <strong>UI（UIテスト/E2Eテスト）：</strong>
    → ユーザーインターフェースを通じたEnd-to-Endテスト
    → Selenium/Playwright等を使用
    → 実行時間：分単位（非常に遅い）
    → 数：少ない（遅くて保守コストが高いため）</p>
<p><strong>アンチパターン（避けるべき形）：</strong></p>
<p>  アイスクリームコーン（Ice-Cream Cone）：
  UIテストが一番多く、ユニットテストが一番少ない状態。
  <strong>問題：UIテストが多すぎて CI が遅い・実行が不安定になるコスト増の原因。</strong></p>
<p>  問題：UIテストが多すぎて CI が遅い・不安定になる</p>
</div>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">3.1.3 テストクアドラント・テストレベル・テストタイプ（Testing Quadrants）</h4>
<div className="callout callout-info">
<p><strong>アジャイルテストクアドラント（Brian Marick のモデル）：</strong></p>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th align="left" scope="col"></th>
<th align="left" scope="col">ビジネス向け (Business Facing)</th>
<th align="left" scope="col">技術向け (Technology Facing)</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>製品を評価</strong><br />（Critique Product）</td>
<td align="left"><strong>【Q3】 手動/ツール支援</strong><br />・探索的テスト<br />・ユーザビリティテスト<br />・アルファ/ベータテスト</td>
<td align="left"><strong>【Q4】 ツール利用</strong><br />・性能テスト<br />・セキュリティテスト<br />・負荷テスト</td>
</tr>
<tr>
<td align="left"><strong>開発をサポート</strong><br />（Support Team）</td>
<td align="left"><strong>【Q2】 自動/手動</strong><br />・受入テスト<br />・BDDシナリオ<br />・プロトタイプ確認</td>
<td align="left"><strong>【Q1】 自動化</strong><br />・ユニットテスト<br />・コンポーネントテスト<br />・TDD</td>
</tr>
</tbody></table></div>
<p>各クアドラントの説明：</p>
<p>Q1（技術向け・開発をサポート）：
  → 自動化可能・コードレベル
  → ユニットテスト・コンポーネントテスト
  → 開発者が主体で TDD で作成</p>
<p>Q2（ビジネス向け・開発をサポート）：
  → 自動化可能・機能テスト
  → BDDシナリオ・受入テスト・プロトタイプ
  → テスター・PO・開発者が協力</p>
<p>Q3（ビジネス向け・製品を批判）：
  → 手動テスト重視
  → 探索的テスト・ユーザビリティテスト・アルファ/ベータテスト</p>
<p>Q4（技術向け・製品を批判）：
  → 自動化ツールを使用
  → 性能テスト・セキュリティテスト・信頼性テスト</p>
</div>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">3.1.4 テスターの役割（The Role of a Tester）</h4>
<div className="callout callout-info">
<p>アジャイルチームでのテスターの役割（補足）：</p>
<p>テスターが行うべきこと：
  ✓ スプリント計画でテスト可能性を確認
  ✓ 受入基準の作成をサポート
  ✓ コードの変更を理解して影響を評価
  ✓ 探索的テストで予期しない問題を発見
  ✓ 欠陥をスプリント内で報告・追跡</p>
<p>テスターが行うべきでないこと（よくある誤解の解消）：
  ✗ 全テストを手動で実施しようとする（自動化すべき）
  ✗ 品質を「チェック」するだけの存在でいる
  ✗ 開発者から独立して孤立した作業をする
  ✗ スプリント終了間際にまとめてテストする（早期に始める）</p>
</div>
<hr className="accent-line" />

<h3 id="section-3-2" className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">3.2 品質リスク評価とテスト工数見積もり（Assessing Quality Risks and Estimating Test Effort）</h3>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">3.2.1 アジャイルプロジェクトにおける品質リスクの評価</h4>
<div className="callout callout-info">
<p>アジャイルでのリスクベーステスト：</p>
<p>リスク識別のタイミング：
  → リリース計画、イテレーション計画の両方で実施
  → 全チームが参加（テスターだけでなく）</p>
<p>リスク評価の方法：</p>
<p>  定性的リスク評価：
    → 影響度（Impact）× 発生確率（Likelihood）でリスクレベルを決定</p>
</div>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th align="left" scope="col">発生確率 \ 影響度</th>
<th align="left" scope="col">低</th>
<th align="left" scope="col">中</th>
<th align="left" scope="col">高</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>低</strong></td>
<td align="left">L</td>
<td align="left">L</td>
<td align="left">M</td>
</tr>
<tr>
<td align="left"><strong>中</strong></td>
<td align="left">L</td>
<td align="left">M</td>
<td align="left">H</td>
</tr>
<tr>
<td align="left"><strong>高</strong></td>
<td align="left">M</td>
<td align="left">H</td>
<td align="left">H</td>
</tr>
</tbody></table></div>
<div className="callout callout-info">
<pre className="code-block text-sm overflow-x-auto p-4 bg-[var(--color-bg-card)] rounded-[var(--radius-DEFAULT)] border border-[var(--color-border)] my-4 text-[var(--color-text-secondary)]"><code>{"L=低リスク、M=中リスク、H=高リスク\n"}</code></pre>
<p>アジャイル特有のリスク要因：
  ✓ 技術の複雑さ（新技術の使用）
  ✓ チームスキル（スキルの不均一）
  ✓ 既知の欠陥傾向（過去の欠陥データ）
  ✓ 機能の複雑さ（多くの条件・状態）
  ✓ 外部依存（サードパーティ API 等）
  ✓ 変更の頻度（よく変わる部分は高リスク）</p>
<p>リスクに基づくテスト優先順位：
  高リスク → 多くのテスト + 早期テスト
  中リスク → 標準的なテスト
  低リスク → 最低限のテスト</p>
</div>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">3.2.2 イテレーション内容とリスクに基づくテスト工数の見積もり</h4>
<div className="callout callout-info">
<p>アジャイルでのテスト工数見積もり：</p>
<p>プランニングポーカー（Planning Poker）：
  → チームで相対的な大きさ（ストーリーポイント）を見積もる
  → 使用カード：0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ?, ∞
  → テスターも参加し、テストの複雑さを考慮した見積もりを提供</p>
<p>ストーリーポイントとテスト工数の関係：
  テスト工数 = ストーリーポイント × リスク係数 × チーム速度係数</p>
<p>  例：
  機能A（5ポイント、高リスク）：
    → テスト工数 = 5 × 1.5（高リスク）= 7.5ポイント相当</p>
<p>  機能B（3ポイント、低リスク）：
    → テスト工数 = 3 × 0.5（低リスク）= 1.5ポイント相当</p>
<p>テスト工数に影響する要因：
  ✓ ユーザーストーリーの複雑さ
  ✓ 既存テストケースの再利用可能性
  ✓ テスト自動化の成熟度
  ✓ テスト環境の安定性
  ✓ チームのドメイン知識
  ✓ リグレッションテストのスコープ</p>
</div>
<hr className="accent-line" />

<h3 id="section-3-3" className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">3.3 アジャイルプロジェクトにおける技法（Techniques in Agile Projects）</h3>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">3.3.1 受入基準・適切なカバレッジ・その他テスト情報</h4>
<div className="callout callout-info">
<p>受入基準の書き方：</p>
<p>フォーマット1: Gherkin (Given-When-Then)
  Given [前提条件]
  When  [操作・アクション]
  Then  [期待結果]
  And   [追加の期待結果]</p>
<p>フォーマット2: チェックリスト形式
  受入基準：
  □ 条件1
  □ 条件2
  □ 条件3</p>
<p>良い受入基準の特徴：
  ✓ 明確（曖昧さがない）
  ✓ テスト可能（Yes/No で判定できる）
  ✓ 独立している（他の基準に依存しない）
  ✓ 測定可能（「高速」でなく「3秒以内」）</p>
</div>
<p><strong>受入基準の例（ログイン機能）：</strong></p>
<pre className="code-block text-sm overflow-x-auto p-4 bg-[var(--color-bg-card)] rounded-[var(--radius-DEFAULT)] border border-[var(--color-border)] my-4 text-[var(--color-text-secondary)]"><code className="language-gherkin">{"Feature: ユーザーログイン機能\n\n  # 正常系\n  Scenario: 有効な資格情報でログインできる\n    Given ユーザーが \"user@example.com\" で登録されている\n    When メールアドレス \"user@example.com\" と\n         パスワード \"Pass@123\" を入力する\n    And ログインボタンをクリックする\n    Then ダッシュボードにリダイレクトされる\n    And \"ようこそ、山田太郎さん\" と\n        表示される\n\n  # 異常系1\n  Scenario: 無効なパスワードでログインできない\n    Given ユーザーが \"user@example.com\" で登録されている\n    When メールアドレス \"user@example.com\" と\n         誤ったパスワード \"wrong\" を入力する\n    And ログインボタンをクリックする\n    Then 「メールアドレスまたはパスワードが\n         正しくありません」と表示される\n    And ダッシュボードへのリダイレクトが行われない\n\n  # 異常系2（境界値）\n  Scenario: 5回連続で失敗するとアカウントがロックされる\n    Given ユーザーが \"user@example.com\" で登録されている\n    When 誤ったパスワードで5回ログインを試みる\n    Then 「アカウントが一時的にロックされました」\n         と表示される\n    And 30分後に自動的にロックが解除される\n\n  # 非機能要件\n  Scenario: ログイン処理は3秒以内に完了する\n    Given ユーザーが有効な資格情報を持っている\n    When ログインボタンをクリックする\n    Then 3秒以内にダッシュボードが表示される\n"}</code></pre>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">3.3.2 ATDD の適用（Applying Acceptance Test-Driven Development）</h4>
<div className="callout callout-info">
<p>ATDD を実際に適用するステップ：</p>
<p>Step 1: ユーザーストーリーを選択
  「登録ユーザーとして、商品をカートに追加したい」</p>
<p>Step 2: 3 Amigos ミーティング
  参加者：PO（田中）+ Dev（鈴木）+ Tester（佐藤）
  議題：受入テストを事前に定義する</p>
<p>Step 3: 受入テストの作成（会話から）
  PO：「商品をカートに追加したらカウンターが更新されてほしい」
  Tester：「もし在庫がなかったら？」
  Dev：「エラーメッセージを表示できます」
  → 受入テスト1：正常追加
  → 受入テスト2：在庫切れ
  → 受入テスト3：最大数量制限</p>
<p>Step 4: 受入テストの自動化</p>
<p>Step 5: 開発者がテストをパスするコードを書く</p>
<p>Step 6: 全てのテストがパス → ストーリーが完了！</p>
<p>3 Amigos（三人の会話）の効果：
  ✓ 要件の誤解を事前に防ぐ
  ✓ エッジケースを早期に発見
  ✓ チーム全員が同じ理解を持つ
  ✓ テストが「実行可能な仕様書」として機能</p>
</div>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">3.3.3 機能・非機能のブラックボックステスト設計</h4>
<div className="callout callout-info">
<p>アジャイルプロジェクトでのブラックボックステスト技法：</p>
<p>機能テスト（Functional Testing）：</p>
<p>  同値分割法（Equivalence Partitioning：EP）：
    年齢フィールドの例：
    - 有効EP1：1〜120（有効）
    - 無効EP2：0以下（無効）
    - 無効EP3：121以上（無効）</p>
<p>  境界値分析（Boundary Value Analysis：BVA）：
    年齢フィールド（1〜120）の境界値：
    → 0（無効）、1（有効・最小）、120（有効・最大）、121（無効）</p>
<p>  <strong>デシジョンテーブル（Decision Table）：</strong>
    割引ルールのデシジョンテーブル：</p>
</div>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th align="left" scope="col">条件 \ ルール</th>
<th align="center" scope="col">R1</th>
<th align="center" scope="col">R2</th>
<th align="center" scope="col">R3</th>
<th align="center" scope="col">R4</th>
</tr>
</thead>
<tbody><tr>
<td align="left">プレミアム会員か？</td>
<td align="center">T</td>
<td align="center">T</td>
<td align="center">F</td>
<td align="center">F</td>
</tr>
<tr>
<td align="left">購入点数が100点以上か？</td>
<td align="center">T</td>
<td align="center">F</td>
<td align="center">T</td>
<td align="center">F</td>
</tr>
<tr>
<td align="left"><strong>アクション</strong></td>
<td align="center"></td>
<td align="center"></td>
<td align="center"></td>
<td align="center"></td>
</tr>
<tr>
<td align="left">30%引きを適用する</td>
<td align="center">✓</td>
<td align="center"></td>
<td align="center"></td>
<td align="center"></td>
</tr>
<tr>
<td align="left">20%引きを適用する</td>
<td align="center"></td>
<td align="center">✓</td>
<td align="center">✓</td>
<td align="center"></td>
</tr>
<tr>
<td align="left">割引なし</td>
<td align="center"></td>
<td align="center"></td>
<td align="center"></td>
<td align="center">✓</td>
</tr>
</tbody></table></div>
<div className="callout callout-info">
<p>非機能テスト（Non-Functional Testing）：
  → 性能・セキュリティ・ユーザビリティ等
  → アジャイルでも非機能要件をユーザーストーリーに含める
  → 受入基準に非機能要件を明記する</p>
<p>  例：「レスポンスタイムは95パーセンタイルで3秒以内」</p>
</div>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">3.3.4 探索的テストとアジャイルテスト（Exploratory Testing and Agile Testing）</h4>
<div className="callout callout-info">
<p>探索的テスト（Exploratory Testing）とは：
  → 事前に詳細なテスト計画を作成せず、
    学習・テスト設計・テスト実行を同時に行うテスト技法
  → Elisabeth Hendrickson [Hendrickson13] が普及させた</p>
<p>探索的テストがアジャイルで重要な理由：
  ✓ アジャイルでは詳細な事前仕様が少ない
  ✓ テスターの経験・直感・好奇心を活かせる
  ✓ 形式的なテストでは見つからないバグを発見できる
  ✓ 短時間でリスクの高い領域を重点的にテストできる</p>
<p>テストチャーター（Test Charter）の使用：
  構造：
    EXPLORE  [テスト対象]
    TO DISCOVER [目的/何を発見したいか]
    USING    [リソース/技法/ツール]</p>
<p>  例：
    EXPLORE  ログインフォームのパスワードフィールド
    TO DISCOVER セキュリティ上の問題（SQLインジェクション等）
    USING    OWASP ZAPとブラウザ開発者ツール（60分間）</p>
<p>セッションベーステスト（Session-Based Test）：
  → 探索的テストに構造と記録をもたらすフレームワーク
  → 時間制限付き（例：60〜90分）のセッションで実施
  → チャーターに沿って実施
  → 結果を記録・報告</p>
<p>時間ボックス化（Timeboxed）探索的テスト：
  アジャイルへの適用：
  → 各スプリントで一定時間の探索的テストを確保
  → 新機能の探索・リスクの高い領域を重点的にテスト
  → 発見事項をバックログ/イテレーションに反映</p>
</div>
<hr className="accent-line" />

<h3 id="section-3-4" className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">3.4 アジャイルプロジェクトにおけるツール（Tools in Agile Projects）</h3>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">3.4.1 タスク管理・追跡ツール（Task Management and Tracking Tools）</h4>
<p><strong>アジャイルで使用する代表的なタスク管理ツール：</strong></p>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th align="left" scope="col">ツール名</th>
<th align="left" scope="col">特徴</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>Jira</strong> (Atlassian)</td>
<td align="left">世界の多くのアジャイルプロジェクトで採用。スクラムボードやバックログなど豊富な機能を備える</td>
</tr>
<tr>
<td align="left"><strong>Trello</strong> (Atlassian)</td>
<td align="left">シンプルなカンバンボード形式に特化。小規模チームや軽量なタスク管理に適する</td>
</tr>
<tr>
<td align="left"><strong>Azure DevOps</strong> (Microsoft)</td>
<td align="left">CI/CDとの統合が強力でエンタープライズに多く導入される</td>
</tr>
<tr>
<td align="left"><strong>Backlog</strong> (Nulab)</td>
<td align="left">日本語対応が充実しており、国内企業で広く使用される</td>
</tr>
</tbody></table></div>
<p>テスター視点でのタスク管理ツールの使い方：</p>
<ul className="list-disc pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li>テストタスクをスプリントバックログに追加</li>
<li>欠陥をバックログアイテムとして管理</li>
<li>テストの完了ステータスをリアルタイムで更新</li>
<li>バーンダウンチャートでテスト進捗を可視化</li>
</ul>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">3.4.2 コミュニケーション・情報共有ツール</h4>
<div className="callout callout-info">
<p>アジャイルチームのコミュニケーションツール：</p>
<p>デジタルツール：
  ✓ Slack/Microsoft Teams/Discord（チャット）
  ✓ Confluence/Notion（ドキュメント・ウィキ）
  ✓ Zoom/Google Meet（ビデオ会議）
  ✓ Miro/Mural（オンラインホワイトボード）</p>
<p>物理ツール（オフィス環境）：
  ✓ スプリントボード（カンバンボード）
  ✓ ホワイトボード（情報ラジエーター）
  ✓ バーンダウンチャートの掲示</p>
<p>情報ラジエーター（Information Radiator）：
  → チームの状態を誰でも見えるように公開する場所
  → 例：スプリントボード・バーンダウンチャート・欠陥トレンドグラフ
  → 「ホールチームアプローチ」を支援する重要な仕組み</p>
</div>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">3.4.3 ソフトウェアビルド・配布ツール（Software Build and Distribution Tools）</h4>
<div className="callout callout-info">
<p>CI/CD ツール（テスト自動化と連携）：</p>
<p>継続的インテグレーション（CI）ツール：
  ✓ GitHub Actions（GitHub と統合）
  ✓ Jenkins（オープンソース・高い柔軟性）
  ✓ CircleCI（クラウドベース・高速）
  ✓ GitLab CI/CD（GitLab に統合）</p>
<p>テスト自動化フレームワーク：
  ✓ Selenium / Playwright（ブラウザ自動化）
  ✓ pytest / JUnit（ユニットテスト）
  ✓ Cucumber / Behave（BDD）
  ✓ Postman / REST Assured（APIテスト）
  ✓ k6 / JMeter（性能テスト）</p>
<p>テスターにとっての CI ツールの重要性：
  ✓ テストコードをリポジトリにプッシュするたびに自動実行
  ✓ テスト失敗を即座に通知（Slack等に通知）
  ✓ テストカバレッジレポートを自動生成
  ✓ テスト結果のトレンドを追跡</p>
</div>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">3.4.4 構成管理ツール（Configuration Management Tools）</h4>
<div className="callout callout-info">
<p>バージョン管理ツール：
  ✓ Git（最も広く使われる）
  ✓ GitHub / GitLab / Bitbucket（Git ホスティング）</p>
<p>テスターが Git で行うこと：
  ✓ テストコード・テストデータをリポジトリに管理
  ✓ テストスクリプトの変更履歴を追跡
  ✓ フィーチャーブランチでのテスト開発
  ✓ Pull Request でのテストコードレビュー</p>
<p>テスト環境の構成管理：
  ✓ Docker/Docker Compose（テスト環境のコンテナ化）
  ✓ Terraform/Ansible（インフラのコード管理 = IaC）
  ✓ テスト環境の設定をコードで管理して再現性を確保</p>
</div>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">3.4.5 テスト設計・実装・実行ツール</h4>
<div className="callout callout-info">
<p>テスト管理ツール：
  ✓ TestRail（テストケース管理）
  ✓ Zephyr/Xray（Jira 統合のテスト管理）
  ✓ Azure Test Plans（Azure DevOps 統合）</p>
<p>UIテスト自動化：
  ✓ Playwright（2025年最推奨・高速・安定）
  ✓ Cypress（SPA向け・タイムトラベルデバッグ）
  ✓ Selenium WebDriver（レガシー対応・広範囲）</p>
<p>APIテスト：
  ✓ Postman（GUI + Newman CLI）
  ✓ REST Assured（Java）
  ✓ requests + pytest（Python）</p>
<p>ユニット/コンポーネントテスト：
  ✓ Jest / Vitest（JavaScript/TypeScript）
  ✓ pytest（Python）
  ✓ JUnit 5（Java）
  ✓ xUnit / NUnit（C#/.NET）</p>
<p>モック・スタブ：
  ✓ Mockito（Java）
  ✓ unittest.mock / pytest-mock（Python）
  ✓ Jest mock（JavaScript）</p>
</div>
<h4 className="text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]">3.4.6 クラウドコンピューティングと仮想化ツール</h4>
<div className="callout callout-info">
<p>クラウド・仮想化ツールとアジャイルテスト：</p>
<p>クラウドベースのテスト実行：
  ✓ BrowserStack（実機ブラウザテスト）
  ✓ Sauce Labs（クラウドテスト実行）
  ✓ AWS Device Farm（モバイルテスト）</p>
<p>コンテナ化によるテスト環境：
  ✓ Docker（テスト環境の標準化）
  ✓ Docker Compose（複数コンテナの管理）
  ✓ Kubernetes（本番同等環境の構築）</p>
<p>アジャイルテストにとってのメリット：
  ✓ 環境の不一致を排除（「私のマシンでは動く」問題の解消）
  ✓ テスト環境を素早くセットアップ・廃棄できる
  ✓ 並列テスト実行でCI速度を向上
  ✓ 本番環境に近いテスト環境を低コストで実現</p>
</div>
<hr className="accent-line" />

<h2 id="exam-tips" className="section-header text-2xl mt-12 mb-6 border-b border-[var(--color-border)] pb-2">📝 試験対策・サンプル問題</h2>
<h3 className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">試験概要の再確認</h3>
<div className="callout callout-info">
<p>CTFL-AT 試験仕様：
  問題数:    40問（各1点）
  合格点:    26点（65%）
  試験時間:  60分 / 非英語話者: +25% = 75分
  問題形式:  多肢選択（1つまたは複数の正解を選ぶ）</p>
<p>  認知レベル別：
    K1（記憶）: アジャイル用語・概念の定義を思い出す
    K2（理解）: アジャイルの概念を説明・比較できる
    K3（適用）: 実際のシナリオに知識を適用できる</p>
</div>
<h3 className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">章別重要度と出題数（推定）</h3>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th scope="col">章</th>
<th scope="col">テーマ</th>
<th scope="col">出題数（推定）</th>
<th scope="col">重要度</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>アジャイルソフトウェア開発</td>
<td>~10問</td>
<td>★★★★</td>
</tr>
<tr>
<td>2</td>
<td>アジャイルテストの基本原則</td>
<td>~8問</td>
<td>★★★★</td>
</tr>
<tr>
<td><strong>3</strong></td>
<td><strong>アジャイルテスト技法とツール</strong></td>
<td><strong>~22問</strong></td>
<td><strong>★★★★★</strong></td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">必ず覚える重要概念</h3>
<div className="callout callout-info">
<p>✅ アジャイルマニフェストの4つの価値（必須！）：
   個人と対話 over プロセスとツール
   動くソフトウェア over 包括的ドキュメント
   顧客との協調 over 契約交渉
   変化への対応 over 計画に従うこと</p>
<p>✅ ホールチームアプローチの3メリット：
   コミュニケーション強化 / スキルセット活用 / 品質は全員の責任</p>
<p>✅ XP / Scrum / Kanban の違い（試験頻出！）：
   XP: 5価値 + 13プラクティス（TDD等の開発技術を規定）
   Scrum: 3役割 + スプリント（開発技術は規定しない）
   Kanban: ボード+WIP制限+リードタイム（イテレーション任意）</p>
<p>✅ ユーザーストーリーの3C：
   Card（カード）/ Conversation（会話）/ Confirmation（確認）</p>
<p>✅ INVEST 基準：
   Independent / Negotiable / Valuable / Estimable / Small / Testable</p>
<p>✅ TDD vs ATDD vs BDD の違い：
   TDD: 開発者中心・ユニットテスト・Red-Green-Refactor
   ATDD: チーム全体・受入テストファースト・3 Amigos
   BDD: チーム全体・Given-When-Then・Gherkin</p>
<p>✅ テストピラミッドの3層（少→多）：
   UI テスト（少）→ サービスレベル（中）→ ユニットテスト（多）</p>
<p>✅ テストクアドラントの4象限：
   Q1: 技術向け・自動（ユニットテスト・TDD）
   Q2: ビジネス向け・自動（BDD・受入テスト）
   Q3: ビジネス向け・手動（探索的・ユーザビリティ）
   Q4: 技術向け・ツール（性能・セキュリティ）</p>
<p>✅ 継続的インテグレーションの目的：
   頻繁なコード統合・自動ビルド・自動テスト・早期フィードバック</p>
<p>✅ 探索的テストの定義：
   学習・テスト設計・テスト実行を同時並行で行うテスト手法</p>
</div>
<h3 className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">サンプル問題と解説</h3>
<hr className="accent-line" />
<p><strong>問1（K1 / Chapter 1 アジャイルマニフェスト）</strong></p>
<p>アジャイルマニフェストの4つの価値をそれぞれ対応する「より価値の低いもの」と正しくマッチングしたものはどれか？</p>
<p>A) 個人と対話 → 契約交渉<br />B) 顧客との協調 → 契約交渉<br />C) 動くソフトウェア → 計画に従うこと<br />D) 変化への対応 → プロセスとツール  </p>
<details className="p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-[var(--radius-DEFAULT)] my-4">
<summary className="cursor-pointer font-bold text-[var(--color-accent-blue)]">📌 解答を見る</summary><p><strong>正解: B</strong></p>
<p>アジャイルマニフェストの4つの価値（左 over 右）：</p>
<ul className="list-disc pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li>個人と対話 over <strong>プロセスとツール</strong></li>
<li>動くソフトウェア over <strong>包括的なドキュメント</strong></li>
<li><strong>顧客との協調</strong> over <strong>契約交渉</strong> ← B が正解</li>
<li>変化への対応 over <strong>計画に従うこと</strong></li>
</ul>
</details><hr className="accent-line" />
<p><strong>問2（K2 / Chapter 1 アジャイルアプローチ）</strong></p>
<p>Scrum、XP、Kanban の特徴として最も正確に説明しているものはどれか？</p>
<p>A) Scrum はTDDなどの特定の開発技術を規定している<br />B) XP はスプリントやイテレーションを必須としている<br />C) Kanban はタイムボックスとスプリントが任意である<br />D) Scrum の開発チームには必ずチームリーダーがいる  </p>
<details className="p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-[var(--radius-DEFAULT)] my-4">
<summary className="cursor-pointer font-bold text-[var(--color-accent-blue)]">📌 解答を見る</summary><p><strong>正解: C</strong></p>
<p>各選択肢の分析：</p>
<ul className="list-disc pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li>A): Scrum は開発技術（TDDなど）を規定しない（✗）</li>
<li>B): XP はスプリングを採用するが、Kanban は任意（B は Kanban の特徴、XP の説明として不正確）</li>
<li><strong>C): Kanban ではイテレーション・スプリント・タイムボックスが任意（✅）</strong></li>
<li>D): Scrum 開発チームはチームリーダーがおらず、自己組織化（✗）</li>
</ul>
</details><hr className="accent-line" />
<p><strong>問3（K3 / Chapter 1 ユーザーストーリー）</strong></p>
<p>テスターがユーザーストーリー「ユーザーとして、商品検索で素早く結果を見たい」をレビューしています。INVEST 基準の観点から最も重要な問題は何か？</p>
<p>A) ストーリーが大きすぎる（Small の違反）<br />B) ビジネス価値が不明確（Valuable の違反）<br />C) 「素早く」という基準が測定・テストできない（Testable の違反）<br />D) 開発者に依存している（Independent の違反）  </p>
<details className="p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-[var(--radius-DEFAULT)] my-4">
<summary className="cursor-pointer font-bold text-[var(--color-accent-blue)]">📌 解答を見る</summary><p><strong>正解: C</strong></p>
<p>INVEST の T（Testable/テスト可能性）の観点から：</p>
<ul className="list-disc pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li>「素早く」は主観的で、合格/不合格の判定基準がない</li>
<li>テスト可能にするためには「3秒以内」などの数値化された基準が必要</li>
</ul>
<p>改善例：「ユーザーとして、商品検索で3秒以内に結果を見たい（性能テスト可能！）」</p>
</details><hr className="accent-line" />
<p><strong>問4（K2 / Chapter 3 テストピラミッド）</strong></p>
<p>テストピラミッドについて正しい説明はどれか？</p>
<p>A) UIテストがピラミッドの最下層で最も多く実施すべき<br />B) ユニットテストがピラミッドの最上層で最も高いコストをかけるべき<br />C) ユニットテストを最も多く持ち、UIテストを最も少なく持つことを推奨する<br />D) サービステストとUIテストは同数であるべき  </p>
<details className="p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-[var(--radius-DEFAULT)] my-4">
<summary className="cursor-pointer font-bold text-[var(--color-accent-blue)]">📌 解答を見る</summary><p><strong>正解: C</strong></p>
<p>テストピラミッド（下から上）：</p>
<ul className="list-disc pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li>ユニットテスト（最多・速い・安価）</li>
<li>サービス/インテグレーションテスト（中程度）</li>
<li>UIテスト（最少・遅い・高コスト）</li>
</ul>
<p>→ ユニットテストが最も多く、UIテストが最も少ない構成が理想</p>
</details><hr className="accent-line" />
<p><strong>問5（K3 / Chapter 3 テストクアドラント）</strong></p>
<p>以下のテストケースをテストクアドラントに分類したとき、正しいものはどれか？</p>
<ul className="list-disc pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li>TC1: ログインを銀行のテラーとして実行し、顧客取引履歴のメニュー操作が直感的かを確認</li>
<li>TC2: 同時1000ユーザーでシステムに接続し、応答時間が2秒以内であることを確認</li>
<li>TC3: TDDで書いた、入力バリデーション関数のユニットテスト</li>
</ul>
<p>A) TC1=Q2, TC2=Q4, TC3=Q1<br />B) TC1=Q3, TC2=Q4, TC3=Q1<br />C) TC1=Q2, TC2=Q3, TC3=Q2<br />D) TC1=Q1, TC2=Q3, TC3=Q4  </p>
<details className="p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-[var(--radius-DEFAULT)] my-4">
<summary className="cursor-pointer font-bold text-[var(--color-accent-blue)]">📌 解答を見る</summary><p><strong>正解: B</strong></p>
<p>分析：</p>
<ul className="list-disc pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li>TC1: ユーザビリティテスト（ナビゲーションが直感的かを確認）= <strong>Q3（ビジネス向け・手動）</strong></li>
<li>TC2: 性能テスト（応答時間の確認）= <strong>Q4（技術向け・ツール使用）</strong></li>
<li>TC3: TDDのユニットテスト = <strong>Q1（技術向け・自動・開発支援）</strong></li>
</ul>
</details><hr className="accent-line" />
<p><strong>問6（K2 / Chapter 2 テストと開発の違い）</strong></p>
<p>アジャイルプロジェクトと従来型プロジェクトのテストの違いとして正しいものはどれか？</p>
<p>A) アジャイルプロジェクトではテストドキュメントが全く不要<br />B) アジャイルプロジェクトでは全テストを開発者が実施する<br />C) アジャイルプロジェクトではテスターはデリバリーチームの一員として作業する<br />D) アジャイルプロジェクトではリグレッションテストは必要ない  </p>
<details className="p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-[var(--radius-DEFAULT)] my-4">
<summary className="cursor-pointer font-bold text-[var(--color-accent-blue)]">📌 解答を見る</summary><p><strong>正解: C</strong></p>
<p>各選択肢の分析：</p>
<ul className="list-disc pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li>A): テストドキュメントは必要（ただし軽量化・自動化）（✗）</li>
<li>B): テスターも専任で存在（開発者だけではない）（✗）</li>
<li><strong>C): アジャイルではテスターはデリバリーチームの一員（✅）</strong></li>
<li>D): アジャイルでは変更が多いためリグレッションテストは特に重要（✗）</li>
</ul>
</details><hr className="accent-line" />
<h3 className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">試験直前チェックリスト</h3>
<div className="callout callout-info">
<p>✅ Chapter 1 アジャイルソフトウェア開発:</p>
<p>□ アジャイルマニフェストの4つの価値を左右ともに言える
□ アジャイルマニフェストの12の原則の概要を理解している
□ ホールチームアプローチの定義と3つのメリットを説明できる
□ 早期・頻繁なフィードバックの4つのメリットを説明できる
□ XP・Scrum・Kanban の特徴と違いを比較できる
□ Scrum の3つの役割（Scrum Master・PO・開発チーム）を説明できる
□ Kanban の3つの機器（ボード・WIP制限・リードタイム）を説明できる
□ INVEST 基準の6要素を全て言える
□ 3C コンセプト（Card・Conversation・Confirmation）を説明できる
□ レトロスペクティブとCIの目的・効果を説明できる
□ リリース計画とイテレーション計画の違いを説明できる</p>
<p>✅ Chapter 2 アジャイルテストの基本原則:</p>
<p>□ 従来型テストとアジャイルテストの主要な違いを5つ以上説明できる
□ アジャイルでのテストドキュメントの位置づけを説明できる
□ アジャイルにおける独立テストの3つのオプションを説明できる
□ デイリースタンドアップでのテスターの貢献を説明できる
□ バーンダウンチャートの読み方を説明できる
□ アジャイルテスターに必要なスキルを分類できる</p>
<p>✅ Chapter 3 アジャイルテスト技法とツール（最重要）:</p>
<p>□ TDD・ATDD・BDD の違いを表で比較できる
□ TDDのRed-Green-Refactorサイクルを順番に説明できる
□ テストピラミッドの3層と各層の特徴を説明できる
□ テストクアドラントの4象限と各象限の内容を説明できる
□ INVEST のTがユーザーストーリーにとって重要な理由を説明できる
□ 受入基準のGiven-When-Then形式でシナリオを書ける
□ 探索的テストとテストチャーターの概念を説明できる
□ 代表的なCI/CDツール・テスト自動化ツールを挙げられる
□ リスクベーステストのリスクマトリクスを説明できる
□ 機能テスト技法（EP・BVA）をアジャイルに適用できる</p>
</div>
<hr className="accent-line" />

<h2 id="references" className="section-header text-2xl mt-12 mb-6 border-b border-[var(--color-border)] pb-2">📚 参照URL一覧</h2>
<h3 className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">🏛️ 公式ISTQB® リソース</h3>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th scope="col">リソース</th>
<th scope="col">URL</th>
</tr>
</thead>
<tbody><tr>
<td><strong>CTFL-AT 認定ページ（公式）</strong></td>
<td><a href="https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/">https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/</a></td>
</tr>
<tr>
<td><strong>CTFL-AT シラバス v1.0 ダウンロード</strong></td>
<td><a href="https://istqb.org/?sdm_process_download=1&amp;download_id=3647">https://istqb.org/?sdm_process_download=1&amp;download_id=3647</a></td>
</tr>
<tr>
<td><strong>サンプル試験問題 v1.3</strong></td>
<td><a href="https://istqb.org/?sdm_process_download=1&amp;download_id=3648">https://istqb.org/?sdm_process_download=1&amp;download_id=3648</a></td>
</tr>
<tr>
<td><strong>サンプル試験解答 v1.3</strong></td>
<td><a href="https://istqb.org/?sdm_process_download=1&amp;download_id=3649">https://istqb.org/?sdm_process_download=1&amp;download_id=3649</a></td>
</tr>
<tr>
<td><strong>CTFL-AT 概要 v1.0（Overview）</strong></td>
<td><a href="https://istqb.org/?sdm_process_download=1&amp;download_id=3652">https://istqb.org/?sdm_process_download=1&amp;download_id=3652</a></td>
</tr>
<tr>
<td><strong>試験構造とルール v1.2</strong></td>
<td><a href="https://istqb.org/?sdm_process_download=1&amp;download_id=3829">https://istqb.org/?sdm_process_download=1&amp;download_id=3829</a></td>
</tr>
<tr>
<td><strong>ISTQBグロッサリー</strong></td>
<td><a href="https://glossary.istqb.org/en_US/search?term=">https://glossary.istqb.org/en_US/search?term=</a></td>
</tr>
<tr>
<td><strong>CTFL v4.0（前提資格）</strong></td>
<td><a href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/">https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/</a></td>
</tr>
<tr>
<td><strong>ASTQB シラバスPDF（参考）</strong></td>
<td><a href="https://astqb.org/assets/documents/ISTQB-Foundation-Agile-Syllabus-.pdf">https://astqb.org/assets/documents/ISTQB-Foundation-Agile-Syllabus-.pdf</a></td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">📢 試験プロバイダー</h3>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th scope="col">リソース</th>
<th scope="col">URL</th>
</tr>
</thead>
<tbody><tr>
<td>iSQI 試験情報（CTFL-AT）</td>
<td><a href="https://isqi.org/ISTQB-Certified-Tester-Foundation-Level-Agile-Tester-CTFL-AT/">https://isqi.org/ISTQB-Certified-Tester-Foundation-Level-Agile-Tester-CTFL-AT/</a></td>
</tr>
<tr>
<td>試験プロバイダー検索</td>
<td><a href="https://istqb.org/exam-providers/">https://istqb.org/exam-providers/</a></td>
</tr>
<tr>
<td>研修プロバイダー検索</td>
<td><a href="https://istqb.org/training-providers/">https://istqb.org/training-providers/</a></td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">🎓 学習リソース</h3>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th scope="col">リソース</th>
<th scope="col">URL</th>
</tr>
</thead>
<tbody><tr>
<td>ISTQB.Guru CTFL-AT ガイド</td>
<td><a href="https://www.istqb.guru/agile-tester/">https://www.istqb.guru/agile-tester/</a></td>
</tr>
<tr>
<td>ISTQB.Guru サンプル問題</td>
<td><a href="https://www.istqb.guru/agile-tester-exam-sample-questions/">https://www.istqb.guru/agile-tester-exam-sample-questions/</a></td>
</tr>
<tr>
<td>Udemy CTFL-AT コース一覧</td>
<td><a href="https://www.udemy.com/topic/istqb-agile-tester/">https://www.udemy.com/topic/istqb-agile-tester/</a></td>
</tr>
<tr>
<td>ISTQB.com ガイド</td>
<td><a href="https://www.istqb.com/certified-agile-tester/">https://www.istqb.com/certified-agile-tester/</a></td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">📖 関連資格</h3>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th scope="col">資格</th>
<th scope="col">URL</th>
</tr>
</thead>
<tbody><tr>
<td>CTFL v4.0（前提資格）</td>
<td><a href="https://istqb.org/certifications/certified-tester-foundation-level/">https://istqb.org/certifications/certified-tester-foundation-level/</a></td>
</tr>
<tr>
<td>CTAL-ATT（次のステップ）</td>
<td><a href="https://istqb.org/certifications/certified-tester-advanced-level-agile-technical-tester-ctal-att/">https://istqb.org/certifications/certified-tester-advanced-level-agile-technical-tester-ctal-att/</a></td>
</tr>
<tr>
<td>CT-ATLaS（上位資格）</td>
<td><a href="https://istqb.org/certifications/certified-tester-agile-test-leadership-at-scale-ct-atlas/">https://istqb.org/certifications/certified-tester-agile-test-leadership-at-scale-ct-atlas/</a></td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">🔧 関連ツール・フレームワーク</h3>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th scope="col">カテゴリ</th>
<th scope="col">リソース</th>
<th scope="col">URL</th>
</tr>
</thead>
<tbody><tr>
<td>アジャイル</td>
<td>Agile Manifesto（公式）</td>
<td><a href="https://agilemanifesto.org/">https://agilemanifesto.org/</a></td>
</tr>
<tr>
<td>Scrum</td>
<td>Scrum Alliance</td>
<td><a href="https://www.scrumalliance.org/">https://www.scrumalliance.org/</a></td>
</tr>
<tr>
<td>Kanban</td>
<td>Kanban University</td>
<td><a href="https://kanban.university/">https://kanban.university/</a></td>
</tr>
<tr>
<td>XP</td>
<td>XP Explained</td>
<td><a href="https://www.extremeprogramming.org/">https://www.extremeprogramming.org/</a></td>
</tr>
<tr>
<td>BDD</td>
<td>Cucumber/Gherkin 公式</td>
<td><a href="https://cucumber.io/docs/gherkin/">https://cucumber.io/docs/gherkin/</a></td>
</tr>
<tr>
<td>TDD</td>
<td>Test-Driven Development by Kent Beck</td>
<td><a href="https://www.amazon.co.jp/dp/0321146530">https://www.amazon.co.jp/dp/0321146530</a></td>
</tr>
<tr>
<td>CI/CD</td>
<td>GitHub Actions</td>
<td><a href="https://docs.github.com/en/actions">https://docs.github.com/en/actions</a></td>
</tr>
<tr>
<td>テスト自動化</td>
<td>Playwright</td>
<td><a href="https://playwright.dev/">https://playwright.dev/</a></td>
</tr>
<tr>
<td>テスト自動化</td>
<td>Selenium</td>
<td><a href="https://www.selenium.dev/">https://www.selenium.dev/</a></td>
</tr>
<tr>
<td>アジャイルテスト</td>
<td>Agile Testing (Crispin &amp; Gregory)</td>
<td><a href="https://agiletester.ca/">https://agiletester.ca/</a></td>
</tr>
<tr>
<td>探索的テスト</td>
<td>Elisabeth Hendrickson</td>
<td><a href="https://testobsessed.com/">https://testobsessed.com/</a></td>
</tr>
<tr>
<td>テストピラミッド</td>
<td>Martin Fowler の解説</td>
<td><a href="https://martinfowler.com/articles/practical-test-pyramid.html">https://martinfowler.com/articles/practical-test-pyramid.html</a></td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">📋 参考書籍</h3>
<div className="table-wrapper"><table aria-label="Data table">
<thead>
<tr>
<th scope="col">タイトル</th>
<th scope="col">著者</th>
<th scope="col">テーマ</th>
</tr>
</thead>
<tbody><tr>
<td>Agile Testing: A Practical Guide</td>
<td>Crispin &amp; Gregory</td>
<td>アジャイルテストの実践</td>
</tr>
<tr>
<td>Explore It!</td>
<td>Elisabeth Hendrickson</td>
<td>探索的テスト</td>
</tr>
<tr>
<td>BDD in Action</td>
<td>John Ferguson Smart</td>
<td>BDDの実践</td>
</tr>
<tr>
<td>Test Driven Development: By Example</td>
<td>Kent Beck</td>
<td>TDDの基礎</td>
</tr>
<tr>
<td>Specification by Example</td>
<td>Gojko Adzic</td>
<td>ATDD・実例仕様</td>
</tr>
</tbody></table></div>
<hr className="accent-line" />
<h2 className="section-header text-2xl mt-12 mb-6 border-b border-[var(--color-border)] pb-2">🏁 まとめ：アジャイルテスターとして成功するための10の鉄則</h2>
<div className="callout callout-info">
<ol className="list-decimal pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li><p>🤝 チームの一員として品質に責任を持つ
→ 「テストはテスターだけの仕事」という考えを捨てる
→ 開発者・PO と積極的にコラボレーションする</p>
</li>
<li><p>📝 ユーザーストーリーを INVEST で評価する
→ 特にT（Testable）: 受入基準が明確でテスト可能か確認
→ テスト可能でない要件はその場で修正を提案する</p>
</li>
<li><p>🔴 テストファーストを実践する（TDD/ATDD）
→ コードを書く前に失敗するテストを書く
→ 3 Amigos で受入基準を開発前に定義する</p>
</li>
<li><p>🏗️ テストピラミッドに従う
→ ユニットテスト70% / サービステスト20% / UIテスト10%
→ アイスクリームコーン（UIテスト多すぎ）を避ける</p>
</li>
<li><p>⚡ CI/CD に自動テストを組み込む
→ コミットのたびにテストが自動実行される仕組みを作る
→ フレイキーテストは即座に修正する</p>
</li>
<li><p>🔍 探索的テストで予期しない問題を発見する
→ テストチャーターで目的を明確にして時間制限内で実施
→ 形式的なテストでは見つからないバグを発見する</p>
</li>
<li><p>📊 リスクベースでテストを優先する
→ 全てを同じ深さでテストしようとしない
→ 高リスク機能に集中してリソースを効率的に使う</p>
</li>
<li><p>🔄 レトロスペクティブで継続的に改善する
→ テスト活動の問題点を率直に共有する
→ 小さな改善を積み重ねてチームを成長させる</p>
</li>
<li><p>💬 効果的にコミュニケーションする
→ バグを「攻撃」ではなく「情報」として伝える
→ デイリースタンドアップでテストの進捗をシンプルに共有</p>
</li>
<li><p>📚 継続的に学び続ける
→ アジャイルの世界は常に進化している
→ 新しいツール・技法・プラクティスを積極的に試す</p>
</li>
</ol>
</div>
<hr className="accent-line" />
<div className="callout callout-info">
<p><strong>📌 作成日</strong>: 2025年<br /><strong>📌 準拠資格</strong>: ISTQB CTFL-AT v1.0（シラバス 2014年版）<br /><strong>📌 次のステップ</strong>:</p>
<ul className="list-disc pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]">
<li>CTAL-ATT（Agile Technical Tester）でアジャイル技術テストを深掘り</li>
<li>CT-ATLaS（Agile Test Leadership at Scale）で組織レベルの品質リーダーシップを習得</li>
</ul>
<p>🔗 <strong>公式リソース</strong>: <a href="https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/">https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/</a></p>
</div>
<hr className="accent-line" />
<div className="callout callout-info">
<p>⚠️ <strong>免責事項</strong>: 本ガイドはISTQB®が公認したトレーニング資料ではありません。
公式シラバス・サンプル問題と合わせて使用してください。
試験情報の最終確認は必ず公式サイト（istqb.org）で行ってください。</p>
<p>⚠️ <strong>重要な注記</strong>: CTFL v4.0 取得者はアジャイルテストの内容が既に含まれているため、
CTFL-AT の追加受験が必要かどうか ISTQB® 公式サイトで確認してください。</p>
</div>

            </main>
        </>
    );
}

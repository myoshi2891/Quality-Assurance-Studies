/**
 * グローバルヘッダーのドロワーとガイドライブラリ index 画面（`/`）が共有する
 * ルートの Single Source of Truth。
 *
 * 新しいガイドページを追加するときは、以下 1 件を `NAV_ITEMS` 配列の該当カテゴリへ
 * 追加するだけで、ドロワー・index 画面・検索の 3 箇所に自動で反映される。
 *
 *   { href: '/istqb-ct-tas-complete-guide',
 *     label: 'テスト自動化戦略(CT-TAS)ガイド',
 *     description: 'テスト自動化を組織戦略として設計・維持する観点を扱う。',
 *     category: 'istqb-specialist' },
 *
 * `category` は下記 9 種類から選ぶ。新カテゴリが必要な場合は、`NavCategory`・
 * `CATEGORY_ORDER`・`CATEGORY_TITLES` の 3 箇所を同期して拡張する。
 * カテゴリ値はそのまま index 画面のセクション ID（`/#istqb-advanced` 等）になる。
 */
export type NavCategory =
  | 'home'
  | 'foundation'
  | 'istqb-foundation-ext'
  | 'istqb-advanced'
  | 'istqb-specialist'
  | 'istqb-expert'
  | 'cicd-devops'
  | 'tools-frameworks'
  | 'books-practices';

export interface NavItem {
  href: string;
  label: string;
  /** index 画面のカード本文および検索対象となる 1 行説明（80 文字以内）。 */
  description: string;
  category: NavCategory;
  badge?: string;
}

export interface NavGroup {
  category: NavCategory;
  title: string;
  items: NavItem[];
}

export const NAV_ITEMS: readonly NavItem[] = [
  { href: '/', label: '全ガイド一覧', description: '全ガイドをカテゴリ別に一覧できるライブラリ画面。', category: 'home' },

  { href: '/modern-software-testing-complete-guide-2025', label: '現代ソフトウェアテスト完全ガイド 2025', description: 'テスト戦略の全体像を、ピラミッドから非機能・資格まで通しで俯瞰する。', category: 'foundation' },
  { href: '/software-testing-methodologies-guide', label: 'テスト手法ガイド', description: 'ブラックボックス・ホワイトボックス・経験ベースの技法体系を整理する。', category: 'foundation' },
  { href: '/ai-test-guide', label: 'AIテストガイド', description: 'AIシステム特有の非決定性・データ品質・評価指標へのテスト戦略。', category: 'foundation' },
  { href: '/unit-testing-guide', label: 'ユニットテストガイド', description: 'テスト容易な設計、テストダブル、境界値までの単体テスト実践。', category: 'foundation' },
  { href: '/integration-functional-testing-guide', label: '統合/機能テストガイド', description: 'コンポーネント統合と機能要求の検証、契約テストまでを扱う。', category: 'foundation' },
  { href: '/integration-system-testing-guide', label: '統合/システムテストガイド', description: 'システム全体としての振る舞いを検証するテストレベルの設計。', category: 'foundation' },
  { href: '/e2e-testing-guide', label: 'E2Eテストガイド', description: 'ユーザーシナリオ全体を通した検証と、不安定さを抑える設計指針。', category: 'foundation' },
  { href: '/acceptance-testing-guide', label: '受入テストガイド', description: 'ビジネス価値の合意形成としての受入基準とUATの進め方。', category: 'foundation' },
  { href: '/bdd-testing-guide', label: 'BDDガイド', description: 'Given-When-Then による仕様の共有と、実行可能仕様への落とし込み。', category: 'foundation' },

  { href: '/istqb-ctfl-complete-guide', label: 'ISTQB CTFL v4.0 ガイド', description: 'Foundation Level シラバス v4.0 の全6章を横断する総合ガイド。', category: 'istqb-foundation-ext' },
  { href: '/istqb-ctfl-v4-chapter1-fundamentals', label: 'CTFL v4.0 第1章 テストの基礎', description: 'テストの必要性・7原則・テストプロセス・必要なスキル。', category: 'istqb-foundation-ext' },
  { href: '/istqb-ctfl-v4-chapter2-sdlc-and-testing', label: 'CTFL v4.0 第2章 SDLCとテスト', description: '開発ライフサイクルとテストレベル・テストタイプの対応関係。', category: 'istqb-foundation-ext' },
  { href: '/istqb-ctfl-v4-chapter3-static-testing', label: 'CTFL v4.0 第3章 静的テスト', description: 'レビューと静的解析による、実行前の欠陥検出プロセス。', category: 'istqb-foundation-ext' },
  { href: '/istqb-ctfl-v4-chapter4-test-analysis-and-design', label: 'CTFL v4.0 第4章 テスト分析・設計', description: '同値分割・境界値・デシジョンテーブルなどのテスト技法。', category: 'istqb-foundation-ext' },
  { href: '/istqb-ctfl-v4-chapter5-test-management', label: 'CTFL v4.0 第5章 テスト活動の管理', description: 'テスト計画・リスクベースドテスト・監視と制御・欠陥管理。', category: 'istqb-foundation-ext' },

  { href: '/istqb-ctfl-at-complete-guide', label: 'アジャイル(CTFL-AT)ガイド', description: 'Foundation Level Agile Tester シラバスの全体像。', category: 'istqb-foundation-ext' },
  { href: '/istqb-ctfl-at-chapter1-agile-software-development', label: 'CTFL-AT 1章 アジャイル開発', description: 'アジャイルの価値と原則、チーム全体アプローチと早期フィードバック。', category: 'istqb-foundation-ext' },
  { href: '/istqb-ctfl-at-chapter2-fundamental-agile-testing-principles', label: 'CTFL-AT 2章 アジャイルテスト基本原則', description: 'アジャイルにおけるテストの位置づけ・独立性・進捗の可視化。', category: 'istqb-foundation-ext' },
  { href: '/istqb-ctfl-at-chapter3-agile-testing-techniques-tools', label: 'CTFL-AT 3章 アジャイルテスト技法とツール', description: '受入基準の作成、テスト四象限、探索的テストとツール活用。', category: 'istqb-foundation-ext' },

  { href: '/istqb-ctal-tae-complete-guide', label: 'テスト自動化(CTAL-TAE)ガイド', description: 'テスト自動化アーキテクチャの設計・実装・保守と投資対効果。', category: 'istqb-advanced' },
  { href: '/istqb-ctal-ta-complete-guide', label: 'テストアナリスト(CTAL-TA)ガイド', description: 'ビジネス視点のテスト分析・設計と品質特性の評価。', category: 'istqb-advanced' },
  { href: '/istqb-ctal-tm-complete-guide', label: 'テスト管理(CTAL-TM)ガイド', description: 'テスト戦略・見積り・リスク管理・欠陥マネジメントの実務。', category: 'istqb-advanced' },
  { href: '/istqb-ctal-tta-complete-guide', label: 'テクニカルテストアナリスト(CTAL-TTA)ガイド', description: '構造テスト技法、静的/動的解析、非機能品質特性の技術的検証。', category: 'istqb-advanced' },
  { href: '/istqb-ctal-att-complete-guide', label: 'アジャイル(CTAL-ATT)ガイド', description: 'Agile Technical Tester としての自動化とCIへの組み込み。', category: 'istqb-advanced' },
  { href: '/istqb-ctal-atlas-complete-guide', label: 'アジャイル(CT-ATLaS)ガイド', description: '大規模スケールドアジャイルにおけるテスト戦略と協働。', category: 'istqb-advanced' },

  { href: '/istqb-ct-ai-complete-guide', label: 'AIテスト(CT-AI)ガイド', description: '機械学習システムの品質特性・テストデータ・メトリクスの扱い。', category: 'istqb-specialist' },
  { href: '/istqb-ct-genai-complete-guide', label: '生成AIテスト(CT-GenAI)ガイド', description: 'LLM・生成AIのハルシネーションや評価手法に対するテスト。', category: 'istqb-specialist' },
  { href: '/istqb-ct-mbt-complete-guide', label: 'モデルベーステスト(CT-MBT)ガイド', description: 'モデルからテストケースを自動生成するMBTの設計と運用。', category: 'istqb-specialist' },
  { href: '/istqb-ct-aut-complete-guide', label: '自動車ソフトウェアテスター(CT-AuT)ガイド', description: 'ISO 26262・ASPICE に沿った車載ソフトウェアのテスト。', category: 'istqb-specialist' },
  { href: '/istqb-ct-act-complete-guide', label: '受入テスト(CT-AcT)ガイド', description: 'ビジネス要求とユーザー受入の合意形成に特化したテスト。', category: 'istqb-specialist' },
  { href: '/istqb-ct-mat-complete-guide', label: 'モバイルアプリテスト(CT-MAT)ガイド', description: '端末多様性・ネットワーク・省電力などモバイル固有の観点。', category: 'istqb-specialist' },
  { href: '/istqb-ct-sec-complete-guide', label: 'セキュリティテスト(CT-SEC)ガイド', description: '脅威分析からセキュリティテスト計画・実行までの体系。', category: 'istqb-specialist' },
  { href: '/istqb-ct-ste-complete-guide', label: 'セキュリティテストエンジニア(CT-STE)ガイド', description: '侵入テストや脆弱性検証を担うエンジニア向けの実践知識。', category: 'istqb-specialist' },
  { href: '/istqb-ct-game-complete-guide', label: 'ゲームテスト(CT-GaMe)ガイド', description: 'ゲーム特有のプレイ体験・バランス・互換性のテスト観点。', category: 'istqb-specialist' },
  { href: '/istqb-ct-tas-complete-guide', label: 'テスト自動化戦略(CT-TAS)ガイド', description: '自動化を組織戦略として設計し、継続的に維持するための指針。', category: 'istqb-specialist' },
  { href: '/istqb-ct-pt-complete-guide', label: 'パフォーマンステスト(CT-PT)ガイド', description: '負荷・ストレス・耐久テストの設計とボトルネック分析。', category: 'istqb-specialist' },
  { href: '/istqb-ct-ut-complete-guide', label: 'ユーザビリティテスト(CT-UT)ガイド', description: 'ユーザー中心設計に基づく使いやすさの評価とアクセシビリティ。', category: 'istqb-specialist' },
  { href: '/istqb-ct-gt-complete-guide', label: 'ギャンブル産業テスター(CT-GT)ガイド', description: '規制・公正性・乱数検証が求められるギャンブル業界のテスト。', category: 'istqb-specialist' },
  { href: '/istqb-ct-ft-complete-guide', label: '金融テスト(CT-FT)ガイド', description: '金融ドメインの規制対応・取引精度・リスク観点のテスト。', category: 'istqb-specialist' },

  { href: '/istqb-ctel-itp-atp-complete-guide', label: 'テストプロセス評価(CTEL-ATP)ガイド', description: 'TMMi 等のモデルを用いたテストプロセスのアセスメント。', category: 'istqb-expert' },
  { href: '/istqb-ctel-itp-itpi-complete-guide', label: 'テストプロセス改善実装(CTEL-ITPI)ガイド', description: 'アセスメント結果を実際の改善活動へ落とし込む進め方。', category: 'istqb-expert' },
  { href: '/istqb-ctel-tm-sm-complete-guide', label: '戦略的テスト管理(CTEL-TM-SM)ガイド', description: '組織のミッションと整合したテストポリシー・戦略の策定。', category: 'istqb-expert' },
  { href: '/istqb-ctel-tm-otm-complete-guide', label: 'オペレーショナルテスト管理(CTEL-TM-OTM)ガイド', description: 'プロジェクト単位のテスト計画・実行・監視の運用管理。', category: 'istqb-expert' },
  { href: '/istqb-ctel-tm-mtt-complete-guide', label: 'テストチーム管理(CTEL-TM-MTT)ガイド', description: 'テストチームの編成・育成・モチベーション管理とリーダーシップ。', category: 'istqb-expert' },

  { href: '/github-actions', label: 'GitHub Actions 入門ガイド', description: 'ワークフロー・ジョブ・ステップの基礎からCI構築の第一歩まで。', category: 'cicd-devops' },
  { href: '/github-actions-guide', label: 'GitHub Actions 実践・上級ガイド', description: '再利用ワークフロー、マトリクス、セキュリティ、コスト最適化。', category: 'cicd-devops' },

  { href: '/playwright-beginner-guide', label: 'Playwright 入門ガイド', description: 'ロケーター・自動待機・トレースまでを押さえるE2E自動化入門。', category: 'tools-frameworks' },
  { href: '/cucumber-beginner-guide', label: 'Cucumber 入門ガイド', description: 'Gherkin による実行可能仕様とステップ定義の書き方。', category: 'tools-frameworks' },
  { href: '/cypress-beginner-guide', label: 'Cypress 入門ガイド', description: 'ブラウザ内実行モデルを活かしたテスト作成とデバッグ。', category: 'tools-frameworks' },
  { href: '/selenium-beginner-guide', label: 'Selenium 完全ガイド', description: 'WebDriver の仕組み、待機戦略、Grid によるスケール実行。', category: 'tools-frameworks' },
  { href: '/clean-code-cookbook-guide', label: 'Clean Code Cookbook 実践ガイド', description: 'コードスメルの発見・分類から8ステップの改善、Sandi Metzのルールまで。', category: 'books-practices' },
  { href: '/the-way-of-the-web-tester-guide', label: 'The Way of the Web Tester 実践ガイド', description: 'テストピラミッドの基礎からUI/API/単体テストの実践、テスティングトロフィーまで。', category: 'books-practices' },
];

export const CATEGORY_ORDER: readonly NavCategory[] = [
  'home',
  'foundation',
  'istqb-foundation-ext',
  'istqb-advanced',
  'istqb-specialist',
  'istqb-expert',
  'cicd-devops',
  'tools-frameworks',
  'books-practices',
];

export const CATEGORY_TITLES: Readonly<Record<NavCategory, string>> = {
  'home': 'ホーム',
  'foundation': '基礎テスト手法',
  'istqb-foundation-ext': 'ISTQB Foundation Extension',
  'istqb-advanced': 'ISTQB Advanced',
  'istqb-specialist': 'ISTQB Specialist',
  'istqb-expert': 'ISTQB Expert',
  'cicd-devops': 'CI/CD & DevOps',
  'tools-frameworks': 'テストツール & フレームワーク',
  'books-practices': 'Recommended Books',
};

/**
 * カテゴリの短縮コード。ISTQB の実際の資格略号をそのまま使うため、
 * ラベルの短縮版ではなく「そのレベルが何の資格体系か」という情報を運ぶ。
 * ガイド index のヒーロー階梯とレベル背骨で表示する。
 */
export const CATEGORY_CODES: Readonly<Record<NavCategory, string>> = {
  'home': 'INDEX',
  'foundation': 'BASE',
  'istqb-foundation-ext': 'CTFL',
  'istqb-advanced': 'CTAL',
  'istqb-specialist': 'CT-*',
  'istqb-expert': 'CTEL',
  'cicd-devops': 'CI/CD',
  'tools-frameworks': 'TOOLS',
  'books-practices': 'BOOKS',
};

/**
 * Organizes navigation items into ordered groups by their category.
 *
 * @param items - The navigation items to group
 * @returns An array of `NavGroup` objects ordered according to `CATEGORY_ORDER`; categories with no matching items are omitted
 */
export function groupByCategory(items: readonly NavItem[]): NavGroup[] {
  const groups: NavGroup[] = [];
  for (const category of CATEGORY_ORDER) {
    const matched = items.filter((item) => item.category === category);
    if (matched.length === 0) continue;
    groups.push({
      category,
      title: CATEGORY_TITLES[category],
      items: matched,
    });
  }
  return groups;
}

/**
 * Tests whether a navigation item matches an incremental search query.
 *
 * ラベル・説明・href スラッグを対象に、前後の空白を除いた小文字化部分一致で判定する。
 * ドロワーと index 画面が同じ絞り込み結果になるよう、両者でこの関数を共用する。
 *
 * @param item - The navigation item to test
 * @param query - The raw search query typed by the user
 * @returns `true` when the query is blank or matches the item
 */
export function matchesQuery(item: NavItem, query: string): boolean {
  const needle = query.trim().toLowerCase();
  if (needle.length === 0) return true;
  const haystack = `${item.label} ${item.description} ${item.href}`.toLowerCase();
  return haystack.includes(needle);
}

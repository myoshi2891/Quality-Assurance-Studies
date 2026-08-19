/**
 * グローバルヘッダーのドロワーに表示するナビ項目（Single Source of Truth）。
 *
 * 新しいガイドページ（例: CT-TAS）を追加するときは、以下 1 行を `NAV_ITEMS`
 * 配列の末尾に追加するだけでヘッダーに反映される。
 *
 *   { href: '/istqb-ct-tas-complete-guide',
 *     label: 'テスト自動化戦略(CT-TAS)ガイド',
 *     category: 'istqb-specialist' },
 *
 * `category` は下記 6 種類から選ぶ。新カテゴリが必要な場合は、`NavCategory`・
 * `CATEGORY_ORDER`・`CATEGORY_TITLES` の 3 箇所を同期して拡張する。
 */
export type NavCategory =
  | 'home'
  | 'foundation'
  | 'istqb-foundation-ext'
  | 'istqb-advanced'
  | 'istqb-specialist'
  | 'istqb-expert';

export interface NavItem {
  href: string;
  label: string;
  category: NavCategory;
  badge?: string;
}

export interface NavGroup {
  category: NavCategory;
  title: string;
  items: NavItem[];
}

export const NAV_ITEMS: readonly NavItem[] = [
  { href: '/', label: 'ホーム', category: 'home' },

  { href: '/software-testing-methodologies-guide', label: 'テスト手法ガイド', category: 'foundation' },
  { href: '/ai-test-guide', label: 'AIテストガイド', category: 'foundation' },
  { href: '/unit-testing-guide', label: 'ユニットテストガイド', category: 'foundation' },
  { href: '/integration-functional-testing-guide', label: '統合/機能テストガイド', category: 'foundation' },
  { href: '/integration-system-testing-guide', label: '統合/システムテストガイド', category: 'foundation' },
  { href: '/e2e-testing-guide', label: 'E2Eテストガイド', category: 'foundation' },
  { href: '/acceptance-testing-guide', label: '受入テストガイド', category: 'foundation' },
  { href: '/bdd-testing-guide', label: 'BDDガイド', category: 'foundation' },
  { href: '/istqb-ctfl-complete-guide', label: 'ISTQB CTFL v4.0 ガイド', category: 'istqb-foundation-ext' },
  { href: '/istqb-ctfl-v4-chapter1-fundamentals', label: 'CTFL v4.0 第1章 テストの基礎', category: 'istqb-foundation-ext' },
  { href: '/istqb-ctfl-v4-chapter2-sdlc-and-testing', label: 'CTFL v4.0 第2章 SDLCとテスト', category: 'istqb-foundation-ext' },
  { href: '/istqb-ctfl-v4-chapter3-static-testing', label: 'CTFL v4.0 第3章 静的テスト', category: 'istqb-foundation-ext' },

  { href: '/istqb-ctfl-at-complete-guide', label: 'アジャイル(CTFL-AT)ガイド', category: 'istqb-foundation-ext' },
  { href: '/istqb-ctfl-at-chapter1-agile-software-development', label: 'CTFL-AT 1章 アジャイル開発', category: 'istqb-foundation-ext' },

  { href: '/istqb-ctal-tae-complete-guide', label: 'テスト自動化(CTAL-TAE)ガイド', category: 'istqb-advanced' },
  { href: '/istqb-ctal-ta-complete-guide', label: 'テストアナリスト(CTAL-TA)ガイド', category: 'istqb-advanced' },
  { href: '/istqb-ctal-tm-complete-guide', label: 'テスト管理(CTAL-TM)ガイド', category: 'istqb-advanced' },
  { href: '/istqb-ctal-tta-complete-guide', label: 'テクニカルテストアナリスト(CTAL-TTA)ガイド', category: 'istqb-advanced' },
  { href: '/istqb-ctal-att-complete-guide', label: 'アジャイル(CTAL-ATT)ガイド', category: 'istqb-advanced' },
  { href: '/istqb-ctal-atlas-complete-guide', label: 'アジャイル(CT-ATLaS)ガイド', category: 'istqb-advanced' },

  { href: '/istqb-ct-ai-complete-guide', label: 'AIテスト(CT-AI)ガイド', category: 'istqb-specialist' },
  { href: '/istqb-ct-genai-complete-guide', label: '生成AIテスト(CT-GenAI)ガイド', category: 'istqb-specialist' },
  { href: '/istqb-ct-mbt-complete-guide', label: 'モデルベーステスト(CT-MBT)ガイド', category: 'istqb-specialist' },
  { href: '/istqb-ct-aut-complete-guide', label: '自動車ソフトウェアテスター(CT-AuT)ガイド', category: 'istqb-specialist' },
  { href: '/istqb-ct-act-complete-guide', label: '受入テスト(CT-AcT)ガイド', category: 'istqb-specialist' },
  { href: '/istqb-ct-mat-complete-guide', label: 'モバイルアプリテスト(CT-MAT)ガイド', category: 'istqb-specialist' },
  { href: '/istqb-ct-sec-complete-guide', label: 'セキュリティテスト(CT-SEC)ガイド', category: 'istqb-specialist' },
  { href: '/istqb-ct-ste-complete-guide', label: 'セキュリティテストエンジニア(CT-STE)ガイド', category: 'istqb-specialist' },
  { href: '/istqb-ct-game-complete-guide', label: 'ゲームテスト(CT-GaMe)ガイド', category: 'istqb-specialist' },
  { href: '/istqb-ct-tas-complete-guide', label: 'テスト自動化戦略(CT-TAS)ガイド', category: 'istqb-specialist' },
  { href: '/istqb-ct-pt-complete-guide', label: 'パフォーマンステスト(CT-PT)ガイド', category: 'istqb-specialist' },
  { href: '/istqb-ct-ut-complete-guide', label: 'ユーザビリティテスト(CT-UT)ガイド', category: 'istqb-specialist' },
  { href: '/istqb-ct-gt-complete-guide', label: 'ギャンブル産業テスター(CT-GT)ガイド', category: 'istqb-specialist' },
  { href: '/istqb-ct-ft-complete-guide', label: '金融テスト(CT-FT)ガイド', category: 'istqb-specialist' },

  { href: '/istqb-ctel-itp-atp-complete-guide', label: 'テストプロセス評価(CTEL-ATP)ガイド', category: 'istqb-expert' },
  { href: '/istqb-ctel-itp-itpi-complete-guide', label: 'テストプロセス改善実装(CTEL-ITPI)ガイド', category: 'istqb-expert' },
  { href: '/istqb-ctel-tm-sm-complete-guide', label: '戦略的テスト管理(CTEL-TM-SM)ガイド', category: 'istqb-expert' },
  { href: '/istqb-ctel-tm-otm-complete-guide', label: 'オペレーショナルテスト管理(CTEL-TM-OTM)ガイド', category: 'istqb-expert' },
  { href: '/istqb-ctel-tm-mtt-complete-guide', label: 'テストチーム管理(CTEL-TM-MTT)ガイド', category: 'istqb-expert' },
];

const CATEGORY_ORDER: readonly NavCategory[] = [
  'home',
  'foundation',
  'istqb-foundation-ext',
  'istqb-advanced',
  'istqb-specialist',
  'istqb-expert',
];

const CATEGORY_TITLES: Readonly<Record<NavCategory, string>> = {
  'home': 'ホーム',
  'foundation': '基礎テスト手法',
  'istqb-foundation-ext': 'ISTQB Foundation Extension',
  'istqb-advanced': 'ISTQB Advanced',
  'istqb-specialist': 'ISTQB Specialist',
  'istqb-expert': 'ISTQB Expert',
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


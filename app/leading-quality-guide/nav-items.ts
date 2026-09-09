export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { href: '#why', label: 'なぜ品質は経営課題か' },
  { href: '#step1', label: 'Step 1 — 品質ナラティブ' },
  { href: '#step2', label: 'Step 2 — 所有権' },
  { href: '#step3', label: 'Step 3 — How-to-Test' },
  { href: '#step4', label: 'Step 4 — 価値の言語化' },
  { href: '#step5', label: 'Step 5 — 成熟度戦略' },
  { href: '#step6', label: 'Step 6 — 継続的テスト' },
  { href: '#step7', label: 'Step 7 — ペアリング' },
  { href: '#step8', label: 'Step 8 — ローカルペルソナ' },
  { href: '#step9', label: 'Step 9 — 本番テスト' },
  { href: '#step10', label: 'Step 10 — ビジョン' },
  { href: '#roadmap', label: 'まとめ：ロードマップ' },
  { href: '#experts', label: '専門家の評価' },
  { href: '#sources', label: '参考文献・出典' },
] as const;

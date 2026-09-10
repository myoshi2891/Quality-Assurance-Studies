import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/how-google-tests-software-guide/page';
import NavBar, { NAV_ITEMS } from '../../app/how-google-tests-software-guide/NavBar';

afterEach(() => cleanup());

let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;
let mermaidRenderMock: ReturnType<typeof mock>;

beforeAll(() => {
  originalMermaidRender = mermaid.render;
  originalIntersectionObserver = window.IntersectionObserver;
  mermaidRenderMock = mock(async () => {
    return {
      svg: '<svg data-testid="mock-mermaid"></svg>',
      diagramType: 'flowchart',
    };
  });
  mermaid.render = mermaidRenderMock as unknown as typeof mermaid.render;

  const mockIntersectionObserver = mock(() => {
    return {
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    };
  });
  window.IntersectionObserver = mockIntersectionObserver as unknown as typeof IntersectionObserver;
});

afterAll(() => {
  mermaid.render = originalMermaidRender;
  window.IntersectionObserver = originalIntersectionObserver;
});

describe('How Google Tests Software Guide - Category A (Foundation, Hero, NavBar & Sections 0-2)', () => {
  it('renders within the scoped root container', () => {
    const { container } = render(<Page />);
    const root = container.querySelector('.how-google-tests-page');
    expect(root).not.toBeNull();
  });

  it('renders the hero section with h1, kicker, subtitle, and meta chips', () => {
    render(<Page />);
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toBe('『How Google Tests Software』完全ガイド');

    expect(screen.getByText('書籍ガイド・QAエンジニア向け')).not.toBeNull();
    expect(
      screen.getByText(/Googleのソフトウェアテスト文化を、初学者にもわかるようにステップバイステップで解説します/)
    ).not.toBeNull();

    expect(screen.getByText(/James Whittaker・Jason Arbon・Jeff Carollo/)).not.toBeNull();
    expect(screen.getByText(/Addison-Wesley Professional・2012年刊/)).not.toBeNull();
    
    const googleBooksLink = screen.getByRole('link', { name: /Google Booksで見る/i });
    expect(googleBooksLink.getAttribute('href')).toBe(
      'https://books.google.co.jp/books/about/How_Google_Tests_Software.html?id=vHlTOVTKHeUC&redir_esc=y'
    );
    expect(googleBooksLink.getAttribute('target')).toBe('_blank');
    expect(googleBooksLink.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('renders all 16 TOC navigation items in NavBar', () => {
    render(<NavBar />);
    expect(NAV_ITEMS).toHaveLength(16);
    expect(NAV_ITEMS[0]).toEqual({ href: '#about', label: 'この記事について', icon: 'ti ti-info-circle' });
    expect(NAV_ITEMS[1]).toEqual({ href: '#s1', label: '1. 歴史的背景', icon: 'ti ti-history' });
    expect(NAV_ITEMS[2]).toEqual({ href: '#s2', label: '2. Googleのテスト思想', icon: 'ti ti-bulb' });
    expect(NAV_ITEMS[3]).toEqual({ href: '#s3', label: '3. 3つの役割', icon: 'ti ti-users' });
    expect(NAV_ITEMS[4]).toEqual({ href: '#s4', label: '4. テストサイズ', icon: 'ti ti-ruler-2' });
    expect(NAV_ITEMS[5]).toEqual({ href: '#s5', label: '5. ACC分析', icon: 'ti ti-target-arrow' });
    expect(NAV_ITEMS[6]).toEqual({ href: '#s6', label: '6. Test Certified', icon: 'ti ti-stairs-up' });
    expect(NAV_ITEMS[7]).toEqual({ href: '#s7', label: '7. フレーキーテスト', icon: 'ti ti-alert-triangle' });
    expect(NAV_ITEMS[8]).toEqual({ href: '#s8', label: '8. クラウドソーシング', icon: 'ti ti-cloud' });
    expect(NAV_ITEMS[9]).toEqual({ href: '#s9', label: '9. CIとTotT文化', icon: 'ti ti-git-branch' });
    expect(NAV_ITEMS[10]).toEqual({ href: '#s10', label: '10. 導入ステップ', icon: 'ti ti-checklist' });
    expect(NAV_ITEMS[11]).toEqual({ href: '#s11', label: '11. 2026年への進化', icon: 'ti ti-timeline' });
    expect(NAV_ITEMS[12]).toEqual({ href: '#s12', label: '12. 批判的視点', icon: 'ti ti-alert-circle' });
    expect(NAV_ITEMS[13]).toEqual({ href: '#s13', label: '13. 原著の章立て', icon: 'ti ti-book-2' });
    expect(NAV_ITEMS[14]).toEqual({ href: '#s14', label: '14. まとめ', icon: 'ti ti-list-details' });
    expect(NAV_ITEMS[15]).toEqual({ href: '#s15', label: '15. 参考文献', icon: 'ti ti-link' });
  });

  it('renders section #about with correct heading and explanatory text', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#about');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('この記事について');
    expect(section?.textContent).toContain('当時Googleのエンジニアリングディレクター');
    expect(section?.textContent).toContain('Testing Grouplet創設メンバーである Mike Bland 氏');
  });

  it('renders section #s1 with heading, content, and Mermaid diagram dg-history', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#s1');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('なぜGoogleは独自のテスト文化を築いたのか');
    expect(section?.textContent).toContain('Testing on the Toilet（TotT）');
    
    const mermaidEl = section?.querySelector('#dg-history');
    expect(mermaidEl).not.toBeNull();
    expect(section?.textContent).toContain('図1: Googleのテスト文化が形成された歴史的な流れ');
  });

  it('renders section #s2 with heading, quote, and callout', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#s2');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('Googleのテスト思想：「品質」と「テスト」は別物');

    const quote = section?.querySelector('blockquote');
    expect(quote?.textContent).toContain('Scarcity brings clarity（乏しさは明確さをもたらす）');

    const callout = section?.querySelector('.callout.indigo');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('初学者へのポイント');
    expect(callout?.textContent).toContain('テストを「専門のテスターだけの仕事」と捉えず');
  });
});

describe('How Google Tests Software Guide - Category B (Sections 3-5: Roles, Sizes, ACC)', () => {
  it('renders section #s3 with roles table and dg-roles diagram', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#s3');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('3つのテストエンジニアリングの役割');

    const mermaidEl = section?.querySelector('#dg-roles');
    expect(mermaidEl).not.toBeNull();
    expect(section?.textContent).toContain('図2: SET・TE・TEMの3つの役割の関係');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    const headers = Array.from(table?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
    expect(headers).toEqual(['役割', '略称', '主な仕事', '求められるスキル']);

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0]?.textContent).toContain('Software Engineer in Test');
    expect(rows?.[0]?.textContent).toContain('SET');
    expect(rows?.[1]?.textContent).toContain('Test Engineer');
    expect(rows?.[1]?.textContent).toContain('TE');
    expect(rows?.[2]?.textContent).toContain('Test Engineering Manager');
    expect(rows?.[2]?.textContent).toContain('TEM');
  });

  it('renders section #s4 with test sizes table and dg-sizes diagram', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#s4');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('テストサイズという考え方：Small / Medium / Large');

    const mermaidEl = section?.querySelector('#dg-sizes');
    expect(mermaidEl).not.toBeNull();
    expect(section?.textContent).toContain('図3: Small / Medium / Large の関係');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    const headers = Array.from(table?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
    expect(headers).toEqual(['サイズ', '実行範囲', '許可される依存関係', '目安の実行時間', '公式の時間制限', '目安の構成比']);

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0]?.textContent).toContain('Small');
    expect(rows?.[0]?.textContent).toContain('約70%');
    expect(rows?.[1]?.textContent).toContain('Medium');
    expect(rows?.[1]?.textContent).toContain('約20%');
    expect(rows?.[2]?.textContent).toContain('Large');
    expect(rows?.[2]?.textContent).toContain('約10%');

    expect(section?.textContent).toContain('TAP（Test Automation Platform）');
  });

  it('renders section #s5 with ACC table, dg-acc diagram, and 10分間テストプラン h3', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#s5');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('リスクベースのテスト計画：ACC分析と10分間テストプラン');

    const mermaidEl = section?.querySelector('#dg-acc');
    expect(mermaidEl).not.toBeNull();
    expect(section?.textContent).toContain('図4: ACC分析からテストケースを導くまでの流れ');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    const headers = Array.from(table?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
    expect(headers).toEqual(['ACCの要素', '品詞のたとえ', 'ECサイトを例にした場合']);

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0]?.textContent).toContain('Attribute（属性）');
    expect(rows?.[0]?.textContent).toContain('形容詞');
    expect(rows?.[1]?.textContent).toContain('Component（構成要素）');
    expect(rows?.[1]?.textContent).toContain('名詞');
    expect(rows?.[2]?.textContent).toContain('Capability（能力）');
    expect(rows?.[2]?.textContent).toContain('動詞');

    const h3 = section?.querySelector('h3');
    expect(h3?.textContent).toBe('10分間テストプラン');
    expect(section?.textContent).toContain('Google Test Analytics（GTA）');
  });
});

describe('How Google Tests Software Guide - Category C (Sections 6-9: Test Certified, Flaky, CI)', () => {
  it('renders section #s6 with Test Certified diagram and gold callout', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#s6');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('Test Certified：品質改善のはしご');

    const mermaidEl = section?.querySelector('#dg-certified');
    expect(mermaidEl).not.toBeNull();
    expect(section?.textContent).toContain('図5: Test Certifiedの成熟度レベル');

    const callout = section?.querySelector('.callout.gold');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('面白い副次効果');
    expect(callout?.textContent).toContain('Test Certified Mentorに登録すると');
  });

  it('renders section #s7 with flaky tests diagram and causes list', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#s7');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('フレーキーテスト（不安定なテスト）との戦い方');

    const ol = section?.querySelector('ol');
    expect(ol).not.toBeNull();
    expect(ol?.children.length).toBe(2);
    expect(ol?.children[0]?.textContent).toContain('テスト対象のコード自体に非決定的な欠陥がある');
    expect(ol?.children[1]?.textContent).toContain('テストコード自体に欠陥がある');

    const mermaidEl = section?.querySelector('#dg-flaky');
    expect(mermaidEl).not.toBeNull();
    expect(section?.textContent).toContain('図6: フレーキーテストの原因切り分けと対処フロー');
  });

  it('renders section #s8 with crowdsourcing, dogfooding, and BITE tool', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#s8');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('クラウドソーシングとドッグフーディング');

    expect(section?.textContent).toContain('BITE（Browser Integrated Test Environment）');
    expect(section?.textContent).toContain('SeleniumやWebDriver');
  });

  it('renders section #s9 with CI diagram and forest callout', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#s9');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('継続的インテグレーションと「Testing on the Toilet」文化');

    const mermaidEl = section?.querySelector('#dg-ci');
    expect(mermaidEl).not.toBeNull();
    expect(section?.textContent).toContain('図7: コード変更からリリースまでの継続的インテグレーションの流れ');

    const callout = section?.querySelector('.callout.forest');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('2026年9月時点の最新動向');
    expect(callout?.textContent).toContain('Tech on the Toilet');
  });
});

describe('How Google Tests Software Guide - Category D (Sections 10-12: Steps, Evolution, Critique)', () => {
  it('renders section #s10 with 8 steps in step-list', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#s10');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('初学者のためのステップバイステップ導入ガイド');

    const stepList = section?.querySelector('ol.step-list');
    expect(stepList).not.toBeNull();
    const steps = stepList?.querySelectorAll('li');
    expect(steps?.length).toBe(8);

    expect(steps?.[0]?.textContent).toContain('開発とテストを分離しない文化をつくる');
    expect(steps?.[1]?.textContent).toContain('既存のテストをSmall／Medium／Largeに分類し、可視化する');
    expect(steps?.[2]?.textContent).toContain('継続的ビルドとプレサブミットチェックを導入する');
    expect(steps?.[3]?.textContent).toContain('ACC分析でリスクマップを作り、10分間テストプランから始める');
    expect(steps?.[4]?.textContent).toContain('フレーキーテストをゼロトレランスで扱うルールを決める');
    expect(steps?.[5]?.textContent).toContain('小さく始めて成熟度のはしごを登る');
    expect(steps?.[6]?.textContent).toContain('品質にまつわる知識を共有する仕組みを作る');
    expect(steps?.[7]?.textContent).toContain('自動化できる領域を継続的に広げ、テストコストをゼロに近づける');
  });

  it('renders section #s11 with 2012 vs 2026 evolution table (7 rows)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#s11');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('2012年から2026年までの進化：何が変わり、何が変わらなかったか');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    const headers = Array.from(table?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
    expect(headers).toEqual(['2012年の書籍での呼称・概念', '2026年現在の状況']);

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(7);
    expect(rows?.[0]?.textContent).toContain('SET（Software Engineer in Test）');
    expect(rows?.[0]?.textContent).toContain('SETI');
    expect(rows?.[1]?.textContent).toContain('TE（Test Engineer）');
    expect(rows?.[2]?.textContent).toContain('GTAC（外部カンファレンス）');
    expect(rows?.[3]?.textContent).toContain('Testing on the Toilet（TotT）');
    expect(rows?.[4]?.textContent).toContain('Google Test Analytics（ACC用ツール）');
    expect(rows?.[5]?.textContent).toContain('書籍そのもの');
    expect(rows?.[6]?.textContent).toContain('GoogleTest（gtest、C++用ユニットテストライブラリ）');
  });

  it('renders section #s12 with 5 critique items in check-list', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#s12');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('批判的視点・初学者が誤解しやすいポイント');

    const checkList = section?.querySelector('ul.check-list');
    expect(checkList).not.toBeNull();
    const items = checkList?.querySelectorAll('li');
    expect(items?.length).toBe(5);

    expect(items?.[0]?.textContent).toContain('「Googleだからできた」問題');
    expect(items?.[1]?.textContent).toContain('章ごとの筆致の違い');
    expect(items?.[2]?.textContent).toContain('著者全員がその後Googleを退職している');
    expect(items?.[3]?.textContent).toContain('Agile用語をあえて使わない');
    expect(items?.[4]?.textContent).toContain('「テスターを増やすな」という主張の文脈');
  });
});

describe('How Google Tests Software Guide - Category E (Sections 13-15 & Footer: TOC, Summary, References)', () => {
  it('renders section #s13 with book chapters table (5 chapters)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#s13');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('原著の章立て一覧');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    const headers = Array.from(table?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
    expect(headers).toEqual(['章', 'タイトル（原題）', '主な内容']);

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(5);
    expect(rows?.[0]?.textContent).toContain('第1章');
    expect(rows?.[0]?.textContent).toContain('Introduction to Google Software Testing');
    expect(rows?.[1]?.textContent).toContain('第2章');
    expect(rows?.[1]?.textContent).toContain('The Software Engineer in Test');
    expect(rows?.[2]?.textContent).toContain('第3章');
    expect(rows?.[2]?.textContent).toContain('The Test Engineer');
    expect(rows?.[3]?.textContent).toContain('第4章');
    expect(rows?.[3]?.textContent).toContain('The Test Engineering Manager');
    expect(rows?.[4]?.textContent).toContain('第5章');
    expect(rows?.[4]?.textContent).toContain('Improving How Google Tests Software');
  });

  it('renders section #s14 with 10 summary points in check-list', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#s14');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('まとめ：持ち帰るべき10のポイント');

    const checkList = section?.querySelector('ul.check-list');
    expect(checkList).not.toBeNull();
    const items = checkList?.querySelectorAll('li');
    expect(items?.length).toBe(10);

    expect(items?.[0]?.textContent).toContain('「品質」は「テスト」とイコールではなく');
    expect(items?.[1]?.textContent).toContain('テストは専任の「テスター」だけの仕事ではなく');
    expect(items?.[2]?.textContent).toContain('テストは「単体／結合／システム」ではなく');
    expect(items?.[3]?.textContent).toContain('リスクベースでテスト対象を絞り込むACC分析は');
    expect(items?.[4]?.textContent).toContain('「10分間テストプラン」のように');
    expect(items?.[5]?.textContent).toContain('フレーキーテストは放置せず');
    expect(items?.[6]?.textContent).toContain('品質改善は一足飛びではなく');
    expect(items?.[7]?.textContent).toContain('クラウドソーシングやドッグフーディングは');
    expect(items?.[8]?.textContent).toContain('継続的ビルド・プレサブミットチェック・コードレビューという複数の関門が');
    expect(items?.[9]?.textContent).toContain('Googleの組織・役職名・発信手段は14年間で大きく変化しており');
  });

  it('renders section #s15 with 3 reference tables and verified external links', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#s15');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('参考文献・出典URL一覧');

    const tables = section?.querySelectorAll('table');
    expect(tables?.length).toBe(3);

    // Table 1: Books & official reviews (6 rows)
    const t1Rows = tables?.[0]?.querySelectorAll('tbody tr');
    expect(t1Rows?.length).toBe(6);
    expect(t1Rows?.[0]?.textContent).toContain('Google Books');
    expect(t1Rows?.[1]?.textContent).toContain('Amazon');
    expect(t1Rows?.[2]?.textContent).toContain("O'Reilly");
    expect(t1Rows?.[3]?.textContent).toContain('InfoQ');
    expect(t1Rows?.[4]?.textContent).toContain('InfoQ 提供のサンプル第3章PDF');
    expect(t1Rows?.[5]?.textContent).toContain('Software Testing Magazine');

    // Table 2: Google Testing Blog (7 rows)
    const t2Rows = tables?.[1]?.querySelectorAll('tbody tr');
    expect(t2Rows?.length).toBe(7);
    expect(t2Rows?.[0]?.textContent).toContain('Google Testing Blog トップページ');
    expect(t2Rows?.[1]?.textContent).toContain('Test Sizes');
    expect(t2Rows?.[2]?.textContent).toContain('What Test Engineers do at Google');
    expect(t2Rows?.[3]?.textContent).toContain('From QA to Engineering Productivity');
    expect(t2Rows?.[4]?.textContent).toContain('Evolution of GTAC and Engineering Productivity');
    expect(t2Rows?.[5]?.textContent).toContain('TotT: Avoiding Flakey Tests');
    expect(t2Rows?.[6]?.textContent).toContain('Google Test Automation Conference（GTAC）公式概要');

    // Table 3: External experts & media (7 rows)
    const t3Rows = tables?.[2]?.querySelectorAll('tbody tr');
    expect(t3Rows?.length).toBe(7);
    expect(t3Rows?.[0]?.textContent).toContain('Mike Bland（元Testing Grouplet中心メンバー）「Small, Medium, Large」');
    expect(t3Rows?.[1]?.textContent).toContain('Mike Bland「Test Certified」');
    expect(t3Rows?.[2]?.textContent).toContain('Mike Bland「The Practice of Testing」');
    expect(t3Rows?.[3]?.textContent).toContain("StickyMinds「Google's New Methodology for Risk-driven Testing」");
    expect(t3Rows?.[4]?.textContent).toContain('InformIT「Using Other Influences for Planning」');
    expect(t3Rows?.[5]?.textContent).toContain('Software Engineering at Google');
    expect(t3Rows?.[6]?.textContent).toContain('Wikipedia「Flaky test」');

    // Verify all links in section have target="_blank" and rel="noopener noreferrer"
    const links = section?.querySelectorAll('a');
    expect(links?.length).toBe(20);
    links?.forEach((link) => {
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toBe('noopener noreferrer');
    });
  });

  it('renders page footer with disclaimer text', () => {
    const { container } = render(<Page />);
    const footer = container.querySelector('footer.page-footer');
    expect(footer).not.toBeNull();
    expect(footer?.textContent).toContain('本ガイドは2026年9月4日時点で確認できる公開情報をもとに作成しています');
  });
});

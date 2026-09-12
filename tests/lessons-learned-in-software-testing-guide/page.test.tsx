import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/lessons-learned-in-software-testing-guide/page';
import NavBar, { TOC_ITEMS } from '../../app/lessons-learned-in-software-testing-guide/NavBar';

afterEach(() => cleanup());

let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;
let mermaidRenderMock: ReturnType<typeof mock>;
const renderedCharts: string[] = [];

beforeAll(() => {
  originalMermaidRender = mermaid.render;
  originalIntersectionObserver = window.IntersectionObserver;
  mermaidRenderMock = mock(async (_id: string, text: string) => {
    renderedCharts.push(text);
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

describe('Lessons Learned Guide - Category 1 (Hero, NavBar, Section 01-04)', () => {
  it('renders within the scoped root container .lessons-learned-layout', () => {
    const { container } = render(<Page />);
    const root = container.querySelector('.lessons-learned-layout');
    expect(root).not.toBeNull();
  });

  it('renders hero with h1, lead, and 3 badge elements', () => {
    const { container } = render(<Page />);
    const hero = container.querySelector('.hero');
    expect(hero).not.toBeNull();

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Lessons Learned in Software Testing');
    expect(h1.textContent).toContain('実践ガイド ー 初学者のためのステップバイステップ解説');

    const lead = hero?.querySelector('p.lead');
    expect(lead?.textContent).toContain('Lessons Learned in Software Testing: A Context-Driven Approach');
    expect(lead?.textContent).toContain('Cem Kaner, James Bach, Bret Pettichord 著');

    const badges = hero?.querySelectorAll('.badge');
    expect(badges?.length).toBe(3);
    expect(badges?.[0].textContent).toContain('全11章 293レッスンの要点');
    expect(badges?.[1].textContent).toContain('Mermaid図解 5点');
    expect(badges?.[2].textContent).toContain('2026年8月時点の情報を反映');
  });

  it('renders navigation bar with brand and all 17 TOC anchors with numbers', () => {
    const { container } = render(<NavBar />);
    const nav = container.querySelector('nav');
    expect(nav).not.toBeNull();

    expect(TOC_ITEMS).toHaveLength(17);

    const links = nav?.querySelectorAll('a');
    expect(links?.length).toBe(17);

    TOC_ITEMS.forEach((item, index) => {
      const link = links?.[index];
      expect(link?.getAttribute('href')).toBe(`#${item.id}`);
      expect(link?.querySelector('.n-num')?.textContent).toBe(item.num);
      expect(link?.textContent).toContain(item.label);
    });

    const mobileToggle = container.querySelector('#mobileToggle');
    expect(mobileToggle).not.toBeNull();
  });

  it('renders Section 1: はじめに (#intro) with author table', () => {
    const { container } = render(<Page />);
    const sec1 = container.querySelector('#intro');
    expect(sec1).not.toBeNull();

    const h2 = sec1?.querySelector('h2');
    expect(h2?.textContent).toContain('1. はじめに ー この本が「テストの古典」と呼ばれる理由');

    const table = sec1?.querySelector('table');
    expect(table).not.toBeNull();

    const headers = table?.querySelectorAll('thead th');
    expect(headers?.[0].textContent).toBe('著者');
    expect(headers?.[1].textContent).toBe('略歴');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0].textContent).toContain('Cem Kaner');
    expect(rows?.[1].textContent).toContain('James Bach');
    expect(rows?.[2].textContent).toContain('Bret Pettichord');

    expect(sec1?.textContent).toContain('293個の「レッスン」');
    expect(sec1?.textContent).toContain('コンテキスト駆動アプローチ (Context-Driven Approach)');
  });

  it('renders Section 2: 全体マップ (#overview) with Mermaid figure 1', () => {
    const { container } = render(<Page />);
    const sec2 = container.querySelector('#overview');
    expect(sec2).not.toBeNull();

    const h2 = sec2?.querySelector('h2');
    expect(h2?.textContent).toContain('2. 本書の全体マップ');

    const figure = sec2?.querySelector('figure.diagram');
    expect(figure).not.toBeNull();

    const figcaption = figure?.querySelector('figcaption');
    expect(figcaption?.textContent).toBe('図1: 本書11章の全体マップ(基礎編 → 実践編 → 運用編 → 発展編)');

    expect(sec2?.textContent).toContain('「基礎編」「実践編」「運用編」「発展編」の4つの塊');
  });

  it('renders Section 3: ステップ1: テスターの役割 (#step1) with principles and misconception table', () => {
    const { container } = render(<Page />);
    const sec3 = container.querySelector('#step1');
    expect(sec3).not.toBeNull();

    const h2 = sec3?.querySelector('h2');
    expect(h2?.textContent).toContain('3. ステップ1: テスターの役割を理解する');

    const h3 = sec3?.querySelector('h3');
    expect(h3?.textContent).toBe('押さえるべき考え方');

    const listItems = sec3?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(5);
    expect(listItems?.[0].textContent).toContain('テスターはプロジェクトの「ヘッドライト」である');
    expect(listItems?.[1].textContent).toContain('テストの目的(ミッション)が、やることすべてを決める');
    expect(listItems?.[2].textContent).toContain('テスターは複数の利害関係者にサービスを提供する');
    expect(listItems?.[3].textContent).toContain('すべてのバグを見つけることはできない');
    expect(listItems?.[4].textContent).toContain('テスターはゲートキーパー(門番)になってはいけない');

    const table = sec3?.querySelector('table');
    expect(table).not.toBeNull();
    const ths = table?.querySelectorAll('thead th');
    expect(ths?.[0].textContent).toBe('よくある誤解');
    expect(ths?.[1].textContent).toBe('実際の考え方');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0].textContent).toContain('「バグをゼロにするのが自分の仕事」');
    expect(rows?.[1].textContent).toContain('「テストに合格したらリリースしてよい」');
    expect(rows?.[2].textContent).toContain('「テストは開発が終わってから始まる工程」');
  });

  it('renders Section 4: ステップ2: テスターのように考える (#step2) with thinking models and tips', () => {
    const { container } = render(<Page />);
    const sec4 = container.querySelector('#step2');
    expect(sec4).not.toBeNull();

    const h2 = sec4?.querySelector('h2');
    expect(h2?.textContent).toContain('4. ステップ2: テスターのように考える');

    const h3s = sec4?.querySelectorAll('h3');
    expect(h3s?.length).toBe(2);
    expect(h3s?.[0].textContent).toBe('核心となる考え方');
    expect(h3s?.[1].textContent).toBe('実践のヒント');

    const coreList = sec4?.querySelectorAll('ul li');
    expect(coreList?.length).toBe(7);
    expect(coreList?.[0].textContent).toContain('テストは「認識論(epistemology)」の応用である');
    expect(coreList?.[1].textContent).toContain('テストはあなたの頭の中で起きている');
    expect(coreList?.[2].textContent).toContain('すべてのテストは何らかのモデルに基づいている');
    expect(coreList?.[3].textContent).toContain('探索とは深く考えることである');
    expect(coreList?.[4].textContent).toContain('直感は良い出発点だが、悪い結論である');
    expect(coreList?.[5].textContent).toContain('バイアスは避けられないが、管理はできる');
    expect(coreList?.[6].textContent).toContain('新鮮な目が失敗を見つける');

    const tipsList = sec4?.querySelectorAll('ol li');
    expect(tipsList?.length).toBe(3);
  });

  it('renders Section 5: ステップ3: テスト技法を使い分ける (#step3) with Mermaid, table, and step-list', () => {
    const { container } = render(<Page />);
    const sec5 = container.querySelector('#step3');
    expect(sec5).not.toBeNull();

    const h2 = sec5?.querySelector('h2');
    expect(h2?.textContent).toContain('5. ステップ3: テスト技法を使い分ける');

    const figure = sec5?.querySelector('figure.diagram');
    expect(figure).not.toBeNull();
    const figcaption = figure?.querySelector('figcaption');
    expect(figcaption?.textContent).toBe('図2: テスト技法を捉える5つの視点');

    const table = sec5?.querySelector('table');
    expect(table).not.toBeNull();
    const headers = table?.querySelectorAll('thead th');
    expect(headers?.[0].textContent).toBe('視点');
    expect(headers?.[1].textContent).toBe('焦点');
    expect(headers?.[2].textContent).toBe('具体例');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(5);
    expect(rows?.[0].textContent).toContain('人ベース');
    expect(rows?.[1].textContent).toContain('カバレッジベース');
    expect(rows?.[2].textContent).toContain('問題ベース');
    expect(rows?.[3].textContent).toContain('活動ベース');
    expect(rows?.[4].textContent).toContain('評価ベース');

    const h3 = sec5?.querySelector('h3');
    expect(h3?.textContent).toBe('補足: 組み合わせテスト(オールペア法)の考え方');

    const stepList = sec5?.querySelectorAll('ol.step-list li');
    expect(stepList?.length).toBe(4);
    expect(stepList?.[0].textContent).toContain('各入力項目を「ドメイン分割(同値分割)」して代表値を洗い出す');
    expect(stepList?.[1].textContent).toContain('各項目の値が最低1回は登場する組み合わせ(オールシングル)を作る');
    expect(stepList?.[2].textContent).toContain('任意の2項目の値の組み合わせがすべて最低1回は登場するように調整する(オールペア)');
    expect(stepList?.[3].textContent).toContain('網羅率とテストケース数のバランスを見ながら');
  });

  it('renders Section 6: ステップ4: バグアドボカシー (#step4) with Mermaid, principles, and callout', () => {
    const { container } = render(<Page />);
    const sec6 = container.querySelector('#step4');
    expect(sec6).not.toBeNull();

    const h2 = sec6?.querySelector('h2');
    expect(h2?.textContent).toContain('6. ステップ4: 優れたバグレポートを書く(バグアドボカシー)');

    const figure = sec6?.querySelector('figure.diagram');
    expect(figure).not.toBeNull();
    const figcaption = figure?.querySelector('figcaption');
    expect(figcaption?.textContent).toBe('図3: バグレポートのライフサイクル');

    const h3 = sec6?.querySelector('h3');
    expect(h3?.textContent).toBe('押さえるべき原則');

    const list = sec6?.querySelectorAll('ul li');
    expect(list?.length).toBe(7);
    expect(list?.[0].textContent).toContain('バグレポートはあなた自身を映す「代理人」である');
    expect(list?.[1].textContent).toContain('1つのバグには1つのレポート');
    expect(list?.[2].textContent).toContain('サマリー行が最も重要');
    expect(list?.[3].textContent).toContain('severity(深刻度)と priority(優先度)は別物');
    expect(list?.[4].textContent).toContain('再現しないバグも必ず報告する');
    expect(list?.[5].textContent).toContain('誇張しない、決めつけない');
    expect(list?.[6].textContent).toContain('修正されたことを鵜呑みにしない');

    const callout = sec6?.querySelector('.callout.source');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('現代の視点: バグアドボカシーは「調査」の技術である');
    expect(callout?.textContent).toContain('Maaret Pyhäjärvi');
  });

  it('renders Section 7: ステップ5: テスト自動化を正しく使う (#step5) with misconception table', () => {
    const { container } = render(<Page />);
    const sec7 = container.querySelector('#step5');
    expect(sec7).not.toBeNull();

    const h2 = sec7?.querySelector('h2');
    expect(h2?.textContent).toContain('7. ステップ5: テスト自動化を正しく使う');

    const table = sec7?.querySelector('table');
    expect(table).not.toBeNull();
    const ths = table?.querySelectorAll('thead th');
    expect(ths?.[0].textContent).toBe('誤解');
    expect(ths?.[1].textContent).toBe('本書の立場');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(5);
    expect(rows?.[0].textContent).toContain('自動化の目的はコスト削減');
    expect(rows?.[1].textContent).toContain('100%自動化が理想');
    expect(rows?.[2].textContent).toContain('自動化はツールを買えば済む');
    expect(rows?.[3].textContent).toContain('自動テストは資産が増えるほど良い');
    expect(rows?.[4].textContent).toContain('汚いテスト手順を自動化すれば改善する');

    expect(sec7?.textContent).toContain('テスタビリティ (testability) への投資');
  });

  it('renders Section 8: ステップ6: テストを文書化する (#step6) with list of principles', () => {
    const { container } = render(<Page />);
    const sec8 = container.querySelector('#step6');
    expect(sec8).not.toBeNull();

    const h2 = sec8?.querySelector('h2');
    expect(h2?.textContent).toContain('8. ステップ6: テストを文書化する');

    const list = sec8?.querySelectorAll('ul li');
    expect(list?.length).toBe(4);
    expect(list?.[0].textContent).toContain('テンプレートを使うべきかどうかは状況次第');
    expect(list?.[1].textContent).toContain('ISO/IEC/IEEE 29119-3:2021');
    expect(list?.[1].textContent).toContain('IEEE 829');
    expect(list?.[2].textContent).toContain('そもそも何のためにこの文書が必要なのか');
    expect(list?.[3].textContent).toContain('1文・3要素以内');
  });

  it('renders Section 9: ステップ7: プログラマーと協働する (#step7) with list of principles', () => {
    const { container } = render(<Page />);
    const sec9 = container.querySelector('#step7');
    expect(sec9).not.toBeNull();

    const h2 = sec9?.querySelector('h2');
    expect(h2?.textContent).toContain('9. ステップ7: プログラマーと協働する');

    const list = sec9?.querySelectorAll('ul li');
    expect(list?.length).toBe(4);
    expect(list?.[0].textContent).toContain('プログラマーがどう考えるかを理解する努力');
    expect(list?.[1].textContent).toContain('信頼は一朝一夕には築けない');
    expect(list?.[2].textContent).toContain('批判の矛先は「仕事の成果物」に向けるべきであり、「人」に向けてはなりません');
    expect(list?.[3].textContent).toContain('質問を投げかけることが関係構築の近道');
  });

  it('renders Section 10: ステップ8: テストプロジェクトを管理する (#step8) with management principles', () => {
    const { container } = render(<Page />);
    const sec10 = container.querySelector('#step8');
    expect(sec10).not.toBeNull();

    const h2 = sec10?.querySelector('h2');
    expect(h2?.textContent).toContain('10. ステップ8: テストプロジェクトを管理する');

    const list = sec10?.querySelectorAll('ul li');
    expect(list?.length).toBe(7);
    expect(list?.[0].textContent).toContain('「サービス文化」を作る。「コントロール文化」を作ろうとしない');
    expect(list?.[1].textContent).toContain('テスターが管理するのは「テストという名のサブプロジェクト」');
    expect(list?.[2].textContent).toContain('スモークテストでビルドの受け入れ可否を判断する');
    expect(list?.[3].textContent).toContain('セッションベースドテスト管理');
    expect(list?.[4].textContent).toContain('バグ件数だけで進捗を語らない');
    expect(list?.[5].textContent).toContain('バランスドスコアカードで複数の観点から状況を報告する');
    expect(list?.[6].textContent).toContain('テスターはリリースの可否そのものにサインオフしない');
  });

  it('renders Section 11: ステップ9: テストチームを管理する (#step9) with team management principles', () => {
    const { container } = render(<Page />);
    const sec11 = container.querySelector('#step9');
    expect(sec11).not.toBeNull();

    const h2 = sec11?.querySelector('h2');
    expect(h2?.textContent).toContain('11. ステップ9: テストチームを管理する');

    const list = sec11?.querySelectorAll('ul li');
    expect(list?.length).toBe(4);
    expect(list?.[0].textContent).toContain('スタッフを「幹部」として扱う');
    expect(list?.[1].textContent).toContain('新人テスターの立ち上げ方には型がある');
    expect(list?.[2].textContent).toContain('士気はチームの重要な資産である');
    expect(list?.[3].textContent).toContain('採用は合議制で、誠実さを最重視する');
  });

  it('renders Section 12: ステップ10: キャリアを築く (#step10) with career advice list', () => {
    const { container } = render(<Page />);
    const sec12 = container.querySelector('#step10');
    expect(sec12).not.toBeNull();

    const h2 = sec12?.querySelector('h2');
    expect(h2?.textContent).toContain('12. ステップ10: テスターとしてのキャリアを築く');

    const list = sec12?.querySelectorAll('ul li');
    expect(list?.length).toBe(6);
    expect(list?.[0].textContent).toContain('自分のキャリアの方向性を主体的に選び');
    expect(list?.[1].textContent).toContain('必ずしもプログラマーより収入が低いことを意味しません');
    expect(list?.[2].textContent).toContain('カンファレンスは「参加する」だけでなく「議論に加わる」場');
    expect(list?.[3].textContent).toContain('履歴書やポートフォリオは、自分を売り込むための積極的なツール');
    expect(list?.[4].textContent).toContain('スクリプト言語やプログラミング言語の習得');
    expect(list?.[5].textContent).toContain('資格取得そのものを目的化しすぎることには注意が必要');
  });

  it('renders Section 13: ステップ11: テスト戦略を立案する (#step11) with 3 questions, principles, and Mermaid', () => {
    const { container } = render(<Page />);
    const sec13 = container.querySelector('#step11');
    expect(sec13).not.toBeNull();

    const h2 = sec13?.querySelector('h2');
    expect(h2?.textContent).toContain('13. ステップ11: テスト戦略を立案する');

    const h3s = sec13?.querySelectorAll('h3');
    expect(h3s?.length).toBe(3);
    expect(h3s?.[0].textContent).toBe('戦略を考えるための3つの基本的な問い');
    expect(h3s?.[1].textContent).toBe('押さえるべき原則');
    expect(h3s?.[2].textContent).toBe('コンテキスト駆動テスト計画を「進化」させる7ステップ');

    const questions = sec13?.querySelectorAll('ol li');
    expect(questions?.length).toBe(3);
    expect(questions?.[0].textContent).toContain('なぜテストするのか(why bother)');
    expect(questions?.[1].textContent).toContain('誰が気にするのか(who cares)');
    expect(questions?.[2].textContent).toContain('どこまでやるのか(how much)');

    const principles = sec13?.querySelectorAll('ul li');
    expect(principles?.length).toBe(4);
    expect(principles?.[0].textContent).toContain('本当の「テスト計画」とは、あなたのテストプロセスを導く一連の考え方そのものであり');
    expect(principles?.[1].textContent).toContain('テスト計画はコンテキストに合わせて設計する');
    expect(principles?.[2].textContent).toContain('最初に立てた戦略は、常に間違っている');
    expect(principles?.[3].textContent).toContain('プロダクトの成熟度に応じてテストの深さを変える');

    const figure = sec13?.querySelector('figure.diagram');
    expect(figure).not.toBeNull();
    const figcaption = figure?.querySelector('figcaption');
    expect(figcaption?.textContent).toBe('図4: コンテキスト駆動テスト計画を進化させる7ステップループ');
  });

  it('renders Section 14: 付録: コンテキスト駆動学派の7つの原則 (#appendix) with Table 5', () => {
    const { container } = render(<Page />);
    const sec14 = container.querySelector('#appendix');
    expect(sec14).not.toBeNull();

    const h2 = sec14?.querySelector('h2');
    expect(h2?.textContent).toContain('14. 付録: コンテキスト駆動学派の7つの原則');

    const table = sec14?.querySelector('table');
    expect(table).not.toBeNull();

    const headers = table?.querySelectorAll('thead th');
    expect(headers?.[0].textContent).toBe('番号');
    expect(headers?.[1].textContent).toBe('原則の要旨');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(7);
    expect(rows?.[0].textContent).toContain('ある状況における実践の価値は、その状況に強く依存する');
    expect(rows?.[1].textContent).toContain('どんな状況にも通用する「ベストプラクティス」は存在せず');
    expect(rows?.[2].textContent).toContain('人はプロジェクトにおいて、単なる歯車ではなく');
    expect(rows?.[3].textContent).toContain('プロジェクトの進行は基本的に予測不可能であり');
    expect(rows?.[4].textContent).toContain('プロダクトとは、ある問題に対する解決策である');
    expect(rows?.[5].textContent).toContain('良いソフトウェアテストとは、知的で困難な、頭脳労働としてのプロセスである');
    expect(rows?.[6].textContent).toContain('私たちの仕事が価値を持つのは、対象となるプロジェクトの文脈の中に置かれたときだけである');
  });

  it('renders Section 15: 現代における実践 (#modern) with 2 H3s, 2 callouts, and Mermaid figure 5', () => {
    const { container } = render(<Page />);
    const sec15 = container.querySelector('#modern');
    expect(sec15).not.toBeNull();

    const h2 = sec15?.querySelector('h2');
    expect(h2?.textContent).toContain('15. 現代における実践 ー AI時代のテスト(2026年時点の視点)');

    const h3s = sec15?.querySelectorAll('h3');
    expect(h3s?.length).toBe(2);
    expect(h3s?.[0].textContent).toBe('Rapid Software Testing ー 本書の思想の直系の後継');
    expect(h3s?.[1].textContent).toBe('エージェント型AIとテスターの役割の変化');

    const calloutSource = sec15?.querySelector('.callout.source');
    expect(calloutSource).not.toBeNull();
    expect(calloutSource?.textContent).toContain('「シグナル対ノイズ」という新しい課題');
    expect(calloutSource?.textContent).toContain('Applitools');

    const calloutNote = sec15?.querySelector('.callout.note');
    expect(calloutNote).not.toBeNull();
    expect(calloutNote?.textContent).toContain('コミュニティでの継続的な議論');
    expect(calloutNote?.textContent).toContain('Ministry of Testing');

    const figure = sec15?.querySelector('figure.diagram');
    expect(figure).not.toBeNull();
    const figcaption = figure?.querySelector('figcaption');
    expect(figcaption?.textContent).toBe('図5: 開発ライフサイクルにおけるテスターの判断とAIの役割分担');
  });

  it('renders Section 16: まとめ・チェックリスト (#summary) with 9 checkboxes and counter', () => {
    const { container } = render(<Page />);
    const sec16 = container.querySelector('#summary');
    expect(sec16).not.toBeNull();

    const h2 = sec16?.querySelector('h2');
    expect(h2?.textContent).toContain('16. まとめ ー 明日から使えるチェックリスト');

    const counter = sec16?.querySelector('.checklist-counter');
    expect(counter).not.toBeNull();
    // 初期表示は必ず未完了。toContain('9 完了') だと「9 / 9 完了」も通ってしまう
    expect(counter?.textContent).toBe('0 / 9 完了');

    const checkboxes = sec16?.querySelectorAll('.checklist input[type="checkbox"]');
    expect(checkboxes?.length).toBe(9);

    const labels = sec16?.querySelectorAll('.checklist label span');
    expect(labels?.[0].textContent).toContain('テストを始める前に「このテストで何を明らかにしたいのか」を言語化したか');
    expect(labels?.[1].textContent).toContain('自分をリリースの「ゲートキーパー」だと誤解していないか');
    expect(labels?.[2].textContent).toContain('バグレポートは、忙しい相手にも一目で伝わるサマリーになっているか');
    expect(labels?.[3].textContent).toContain('severity(深刻度)と priority(優先度)を混同していないか');
    expect(labels?.[4].textContent).toContain('再現しないバグを「再現しないから」という理由で握りつぶしていないか');
    expect(labels?.[5].textContent).toContain('自動化する前に、そもそものテスト手順が整理されているか');
    expect(labels?.[6].textContent).toContain('テスト計画を「一度作って終わりの文書」ではなく「回し続けるプロセス」として扱っているか');
    expect(labels?.[7].textContent).toContain('AIが生成した結果を無条件に信頼せず、シグナルとノイズを見極めているか');
    expect(labels?.[8].textContent).toContain('今のテストのやり方は、今のプロジェクトのコンテキスト(状況)に本当に合っているか');
  });

  it('renders Section 17: 参考文献・出典 (#references) with 3 groups and 17 reference items', () => {
    const { container } = render(<Page />);
    const sec17 = container.querySelector('#references');
    expect(sec17).not.toBeNull();

    const h2 = sec17?.querySelector('h2');
    expect(h2?.textContent).toContain('17. 参考文献・出典');

    const groups = sec17?.querySelectorAll('.ref-group');
    expect(groups?.length).toBe(3);

    const items = sec17?.querySelectorAll('.ref-item');
    expect(items?.length).toBe(17);

    const links = sec17?.querySelectorAll('.ref-item a');
    expect(links?.length).toBe(17);
    links.forEach((link) => {
      expect(link.getAttribute('target')).toBe('_blank');
      const rel = link.getAttribute('rel');
      expect(rel).toMatch(/noopener/);
    });
  });

  it('renders footer with educational note and source citation', () => {
    const { container } = render(<Page />);
    const footer = container.querySelector('.footer');
    expect(footer).not.toBeNull();
    expect(footer?.textContent).toContain('本ガイドは教育目的の要約・解説であり');
    expect(footer?.textContent).toContain('原著(Wiley刊)をご参照ください');
  });
});





import { afterAll, afterEach, beforeAll, beforeEach, describe, it, expect, mock } from 'bun:test';
import { render, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import TestingAiConfidenceGuidePage, {
  DIAGRAM_ROADMAP,
  DIAGRAM_CONFIDENCE_LOOP,
  DIAGRAM_OLD_VS_NEW,
  DIAGRAM_LLM_JUDGE,
  DIAGRAM_EVAL_STEPS,
  DIAGRAM_RELEASE_GATE,
  DIAGRAM_GENCODE_PIPELINE,
  DIAGRAM_CONFIDENCE_ENGINEER,
  DIAGRAM_MODEL_INTERNALS,
  DIAGRAM_SECURITY_SAFETY,
  DIAGRAM_PART5_CHAIN,
  DIAGRAM_SIX_PREDICTIONS,
  DIAGRAM_MVP_QUALITY,
} from '../../app/testing-ai-confidence-engineering-guide/page';
import NavBar, { NAV_LINKS } from '../../app/testing-ai-confidence-engineering-guide/NavBar';

afterEach(() => cleanup());

let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;
let mermaidRenderMock: ReturnType<typeof mock>;
const renderedCharts: string[] = [];

beforeEach(() => {
  renderedCharts.length = 0;
});

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

describe('Testing AI Confidence Engineering Guide - Category 1 (Overview, Book Info, Roadmap)', () => {
  it('renders H1 title and hero section correctly', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const kicker = container.querySelector('.hero-kicker');
    expect(kicker).toBeDefined();
    expect(kicker?.textContent).toContain('AI時代のソフトウェアテスト入門');

    const h1 = container.querySelector('h1');
    expect(h1).toBeDefined();
    expect(h1?.textContent).toContain('『Testing AI: Engineering Confidence in Non-Deterministic Systems』完全ガイド');

    const lead = container.querySelector('.hero-lead');
    expect(lead).toBeDefined();
    expect(lead?.textContent).toContain('非決定的なAIシステムを、どうやって「自信を持って」出荷できる状態にするか');

    const note = container.querySelector('.hero-note');
    expect(note).toBeDefined();
    expect(note?.textContent).toContain('対象読者：AIを組み込んだソフトウェアの品質保証に関わり始めたばかりのエンジニア');
  });

  it('renders sidebar navigation with all 19 anchor links', () => {
    const { container } = render(<NavBar />);
    const navLinks = container.querySelectorAll('.sidebar .nav-a');
    expect(navLinks.length).toBe(19);
    expect(NAV_LINKS.length).toBe(19);
    expect(navLinks[0]?.getAttribute('href')).toBe('#position');
    expect(navLinks[1]?.getAttribute('href')).toBe('#book-info');
    expect(navLinks[2]?.getAttribute('href')).toBe('#author');
    expect(navLinks[3]?.getAttribute('href')).toBe('#audience');
    expect(navLinks[4]?.getAttribute('href')).toBe('#changes');
    expect(navLinks[5]?.getAttribute('href')).toBe('#roadmap');
    expect(navLinks[6]?.getAttribute('href')).toBe('#step0');
    expect(navLinks[7]?.getAttribute('href')).toBe('#step1');
    expect(navLinks[8]?.getAttribute('href')).toBe('#step2');
    expect(navLinks[9]?.getAttribute('href')).toBe('#step3');
    expect(navLinks[10]?.getAttribute('href')).toBe('#step4');
    expect(navLinks[11]?.getAttribute('href')).toBe('#step5');
    expect(navLinks[12]?.getAttribute('href')).toBe('#practice');
    expect(navLinks[13]?.getAttribute('href')).toBe('#glossary');
    expect(navLinks[14]?.getAttribute('href')).toBe('#voices');
    expect(navLinks[15]?.getAttribute('href')).toBe('#critical');
    expect(navLinks[16]?.getAttribute('href')).toBe('#checklist');
    expect(navLinks[17]?.getAttribute('href')).toBe('#summary');
    expect(navLinks[18]?.getAttribute('href')).toBe('#references');
  });

  it('renders Section: #position (この本の位置づけ)', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#position');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('この本の位置づけ');
    expect(sec?.textContent).toContain('生成AIやLLM（大規模言語モデル）を組み込んだソフトウェアは、同じ入力を与えても毎回まったく同じ出力を返すとは限りません');
    expect(sec?.textContent).toContain('Confidence Engineering（確信のエンジニアリング）');
  });

  it('renders Section: #book-info (書籍データ) with book card and kv-table', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#book-info');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('書籍データ');

    const cover = sec?.querySelector('.book-cover');
    expect(cover).toBeDefined();
    expect(cover?.textContent).toContain('Testing AI');
    expect(cover?.textContent).toContain('Engineering Confidence in Non-Deterministic Systems');
    expect(cover?.textContent).toContain('Jason Arbon');

    const table = sec?.querySelector('table.kv-table');
    expect(table).toBeDefined();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(7);
    expect(rows?.[0]?.querySelector('th')?.textContent).toBe('原題');
    expect(rows?.[0]?.querySelector('td')?.textContent).toContain('Testing AI: Engineering Confidence in Non-Deterministic Systems');
    expect(rows?.[1]?.querySelector('th')?.textContent).toBe('著者');
    expect(rows?.[1]?.querySelector('td')?.textContent).toBe('Jason Arbon');
    expect(rows?.[2]?.querySelector('th')?.textContent).toBe('刊行');
    expect(rows?.[2]?.querySelector('td')?.textContent).toContain('2026年');
    expect(rows?.[3]?.querySelector('th')?.textContent).toBe('構成');
    expect(rows?.[3]?.querySelector('td')?.textContent).toContain('全5部・21章');
    expect(rows?.[4]?.querySelector('th')?.textContent).toBe('想定読者');
    expect(rows?.[4]?.querySelector('td')?.textContent).toContain('開発者、テスター・自動化エンジニア');
    expect(rows?.[5]?.querySelector('th')?.textContent).toBe('中心概念');
    expect(rows?.[5]?.querySelector('td')?.textContent).toBe('Confidence Engineering（確信のエンジニアリング）');
    expect(rows?.[6]?.querySelector('th')?.textContent).toBe('公式サイト');
    expect(rows?.[6]?.querySelector('td')?.textContent).toContain('testingaibook.com');
  });

  it('renders Section: #author (著者紹介：Jason Arbonとは)', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#author');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('著者紹介：Jason Arbonとは');
    expect(sec?.textContent).toContain('Jason Arbonは、ソフトウェアエンジニア・起業家であり');
    expect(sec?.textContent).toContain('Microsoft、Bing、Google検索、Chrome、ChromeOS、Applauseといった大規模プロダクトの品質システムを構築・統率');

    const listItems = sec?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(4);
    expect(listItems?.[0]?.textContent).toContain('『How Google Tests Software』');
    expect(listItems?.[1]?.textContent).toContain('『App Quality: Secrets for Agile App Teams』');
    expect(listItems?.[2]?.textContent).toContain('test.ai、Testers.ai、Checkie.AI、Jank.AI');
    expect(listItems?.[3]?.textContent).toContain('ユタ大学で電気工学・コンピュータ工学の学位を取得');
  });

  it('renders Section: #audience (対象読者)', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#audience');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('対象読者');

    const listItems = sec?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(4);
    expect(listItems?.[0]?.textContent).toContain('開発者・コーディングエージェント利用者');
    expect(listItems?.[1]?.textContent).toContain('テスター・自動化エンジニア');
    expect(listItems?.[2]?.textContent).toContain('AIプロダクト開発者・アーキテクト');
    expect(listItems?.[3]?.textContent).toContain('エンジニアリングリーダー・経営層');
  });

  it('renders Section: #changes (本書を読むと何が変わるか)', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#changes');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('本書を読むと何が変わるか');

    const listItems = sec?.querySelectorAll('ol li');
    expect(listItems?.length).toBe(6);
    expect(listItems?.[0]?.textContent).toContain('どの種類のばらつきは無害で、どの種類のばらつきはプロダクトの欠陥なのか');
    expect(listItems?.[1]?.textContent).toContain('どんな母集団をサンプリングしたのか、そして平均値によって隠されているリスクは何か');
    expect(listItems?.[2]?.textContent).toContain('誰が、あるいは何が品質を判定しているのか');
    expect(listItems?.[3]?.textContent).toContain('システムは正しい根拠を検索し、ツールを安全に使い');
    expect(listItems?.[4]?.textContent).toContain('品質の向上は、レイテンシ・計算コスト・運用の複雑さ');
    expect(listItems?.[5]?.textContent).toContain('どのエビデンスがリリースを正当化し');
  });

  it('renders Section: #roadmap (学習ロードマップ) with Mermaid diagram', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#roadmap');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('学習ロードマップ');

    const mermaidWrapper = sec?.querySelector('.diagram-wrap');
    expect(mermaidWrapper).toBeDefined();
    expect(DIAGRAM_ROADMAP).toBeDefined();
    expect(DIAGRAM_ROADMAP).toContain('flowchart TD');
    expect(DIAGRAM_ROADMAP).toContain('読者はどの役割に近いか');
  });
});

describe('Testing AI Confidence Engineering Guide - Category 2 (Step 0 & Step 1)', () => {
  it('renders Section: #step0 (なぜ「AIのテスト」は別物なのか) with confidence loop diagram', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#step0');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('Step 0：なぜ「AIのテスト」は別物なのか');
    expect(sec?.querySelector('h2')?.textContent).toContain('Confidence Engineeringという発想');

    const listItems = sec?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(3);
    expect(listItems?.[0]?.textContent).toContain('同じ入力を与えれば、同じ出力が返る（決定性）');
    expect(listItems?.[1]?.textContent).toContain('完全一致のアサーションでチェックできる');
    expect(listItems?.[2]?.textContent).toContain('テストが1回通れば、その振る舞いは今後も保証される');

    expect(sec?.textContent).toContain('「観察」と「推論」を分けるという発想');

    const diagramWrap = sec?.querySelector('.diagram-wrap');
    expect(diagramWrap).toBeDefined();
    expect(sec?.querySelector('.diagram-caption')?.textContent).toContain('図2　Confidence Engineeringのコアループ');

    expect(DIAGRAM_CONFIDENCE_LOOP).toBeDefined();
    expect(DIAGRAM_CONFIDENCE_LOOP).toContain('flowchart LR');
    expect(DIAGRAM_CONFIDENCE_LOOP).toContain('AIが出力を生成する');
  });

  it('renders Section: #step1 (第I部 — AI品質の新しいかたち) with chapters 1 to 5', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#step1');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('Step 1：第I部 — AI品質の新しいかたち（第1〜5章）');

    // Diagram 3: old-vs-new
    expect(DIAGRAM_OLD_VS_NEW).toBeDefined();
    expect(DIAGRAM_OLD_VS_NEW).toContain('flowchart TD');
    expect(DIAGRAM_OLD_VS_NEW).toContain('従来の考え方');
    expect(sec?.textContent).toContain('図3　ワンショットテストから分布ベースの評価への転換');

    // Chapter 1
    const h3s = sec?.querySelectorAll('h3');
    expect(h3s?.length).toBe(5);
    expect(h3s?.[0]?.textContent).toBe('第1章　ワンショットテストの終焉');
    expect(sec?.textContent).toContain('完全一致のアサーションをやめ、「許容できるばらつき」と「有害なばらつき」を区別できる評価基準に置き換える');

    // Chapter 2
    expect(h3s?.[1]?.textContent).toBe('第2章　テストからリリースエビデンスへ');
    expect(sec?.textContent).toContain('メタモルフィックテスト');
    expect(sec?.textContent).toContain('レア障害ハンティング');

    // Chapter 3
    expect(h3s?.[2]?.textContent).toBe('第3章　サンプリングと不確実性');
    expect(sec?.textContent).toContain('「1回の実行結果はほとんど何も教えてくれない」という前提');
    expect(sec?.textContent).toContain('ペア比較');

    // Chapter 4
    expect(h3s?.[3]?.textContent).toBe('第4章　AI品質のための統計的検定');
    expect(sec?.textContent).toContain('対応あり・対応なし、数値・カテゴリ、順序・二値といったデータの形に応じて');
    expect(sec?.textContent).toContain('practical significance');

    // Chapter 5 & Diagram 4: llm-judge
    expect(h3s?.[4]?.textContent).toBe('第5章　判定者、人間、そして意見の不一致');
    expect(sec?.textContent).toContain('LLMを「判定者（ジャッジ）」として自動化する前に');
    expect(sec?.textContent).toContain('図4　LLM判定者の運用フロー');
    expect(DIAGRAM_LLM_JUDGE).toBeDefined();
    expect(DIAGRAM_LLM_JUDGE).toContain('flowchart TD');
    expect(DIAGRAM_LLM_JUDGE).toContain('LLM判定者がスコアリングする');
  });
});

describe('Testing AI Confidence Engineering Guide - Category 3 (Step 2 & Step 3)', () => {
  it('renders Section: #step2 (第II部 — エビデンス、Eval、本番運用) with chapters 6 to 8', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#step2');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('Step 2：第II部 — エビデンス、Eval、本番運用（第6〜8章）');

    const h3s = sec?.querySelectorAll('h3');
    expect(h3s?.length).toBe(3);

    // Chapter 6 & Diagram 5: eval-steps
    expect(h3s?.[0]?.textContent).toBe('第6章　意味のあるEvalの構築');
    expect(sec?.textContent).toContain('図5　意味のあるEvalを構築するステップ');
    expect(DIAGRAM_EVAL_STEPS).toBeDefined();
    expect(DIAGRAM_EVAL_STEPS).toContain('flowchart TD');
    expect(DIAGRAM_EVAL_STEPS).toContain('何を測定するか');

    // Chapter 7
    expect(h3s?.[1]?.textContent).toBe('第7章　AIシステムのリリース準備');
    expect(sec?.textContent).toContain('リリースは「品質保証の終わり」ではなく「本当の意味での品質測定の始まり」');

    // Chapter 8 & Diagram 6: release-gate
    expect(h3s?.[2]?.textContent).toBe('第8章　AIの運用：可観測性、関連性、経済性');
    expect(sec?.textContent).toContain('図6　リリースゲートとCanary Shadow Rollbackの流れ');
    expect(DIAGRAM_RELEASE_GATE).toBeDefined();
    expect(DIAGRAM_RELEASE_GATE).toContain('flowchart LR');
    expect(DIAGRAM_RELEASE_GATE).toContain('新しいバージョンを用意する');
  });

  it('renders Section: #step3 (第III部 — AI生成コードとConfidence Engineering) with chapters 9 to 11', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#step3');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('Step 3：第III部 — AI生成コードとConfidence Engineering（第9〜11章）');

    const h3s = sec?.querySelectorAll('h3');
    expect(h3s?.length).toBe(3);

    // Chapter 9 & Diagram 7: gencode-pipeline
    expect(h3s?.[0]?.textContent).toBe('第9章　生成コードが仕事を変える');
    expect(sec?.textContent).toContain('図7　AI生成コードの検証パイプライン');
    expect(DIAGRAM_GENCODE_PIPELINE).toBeDefined();
    expect(DIAGRAM_GENCODE_PIPELINE).toContain('flowchart TD');
    expect(DIAGRAM_GENCODE_PIPELINE).toContain('AIがコードを生成する');

    // Chapter 10 & Anti-patterns table
    expect(h3s?.[1]?.textContent).toBe('第10章　誤った安心感を生むアンチパターン');
    expect(sec?.querySelector('.table-title')?.textContent).toContain('代表的なアンチパターン（第10章より抜粋）');
    const table = sec?.querySelector('table');
    expect(table).toBeDefined();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(16);
    expect(rows?.[0]?.querySelectorAll('td')?.[0]?.textContent).toContain('合否だけのブール判定の罠');
    expect(rows?.[1]?.querySelectorAll('td')?.[0]?.textContent).toContain('通過率だけを品質と見なす');
    expect(rows?.[15]?.querySelectorAll('td')?.[0]?.textContent).toContain('昨日のテスターを今日のシステムのために雇う罠');

    // Chapter 11 & Diagram 8: confidence-engineer
    expect(h3s?.[2]?.textContent).toBe('第11章　Confidence Engineerという役割');
    expect(sec?.textContent).toContain('図8　Confidence Engineerの役割');
    expect(DIAGRAM_CONFIDENCE_ENGINEER).toBeDefined();
    expect(DIAGRAM_CONFIDENCE_ENGINEER).toContain('flowchart TD');
    expect(DIAGRAM_CONFIDENCE_ENGINEER).toContain('Confidence Engineer');
  });
});

describe('Testing AI Confidence Engineering Guide - Category 4 (Step 4 & Step 5)', () => {
  it('renders Section: #step4 (第IV部 — データ・セキュリティ・安全性・モデル内部) with chapters 12 to 16', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#step4');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('Step 4：第IV部 — データ・セキュリティ・安全性・モデル内部（第12〜16章）');

    const h3s = sec?.querySelectorAll('h3');
    expect(h3s?.length).toBe(5);

    // Chapter 12
    expect(h3s?.[0]?.textContent).toBe('第12章　データ、バイアス、評価者、インセンティブ');
    expect(sec?.textContent).toContain('反実仮想（カウンターファクチュアル');

    // Chapter 13
    expect(h3s?.[1]?.textContent).toBe('第13章　AIセキュリティとガードレール');
    expect(sec?.textContent).toContain('プロンプトインジェクションや間接的プロンプトインジェクション');

    // Chapter 14
    expect(h3s?.[2]?.textContent).toBe('第14章　フロンティア安全性と封じ込め');
    expect(sec?.textContent).toContain('危険能力テスト');

    // Chapter 15
    expect(h3s?.[3]?.textContent).toBe('第15章　モデルの仕組み');
    expect(sec?.textContent).toContain('RLHFやRLAIF');

    // Chapter 16 & Diagram 9: model-internals, Diagram 10: security-safety
    expect(h3s?.[4]?.textContent).toBe('第16章　内省：ホワイトボックスでネットワークをテストする');
    expect(sec?.textContent).toContain('図9　モデル内部を理解するテスト観点');
    expect(DIAGRAM_MODEL_INTERNALS).toBeDefined();
    expect(DIAGRAM_MODEL_INTERNALS).toContain('flowchart TD');
    expect(DIAGRAM_MODEL_INTERNALS).toContain('トークン化と入力の扱い');

    expect(sec?.textContent).toContain('図10　AIセキュリティの脅威モデルと安全性の階層');
    expect(DIAGRAM_SECURITY_SAFETY).toBeDefined();
    expect(DIAGRAM_SECURITY_SAFETY).toContain('flowchart TD');
    expect(DIAGRAM_SECURITY_SAFETY).toContain('信頼できない入力チャネル');
  });

  it('renders Section: #step5 (第V部 — 未来のシステムと実践プレイブック) with chapters 17 to 21', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#step5');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('Step 5：第V部 — 未来のシステムと実践プレイブック（第17〜21章）');

    // Diagram 11: part5-chain
    expect(sec?.textContent).toContain('図11　第V部　パーソナライズ・身体性AI・ガバナンスのテスト範囲');
    expect(DIAGRAM_PART5_CHAIN).toBeDefined();
    expect(DIAGRAM_PART5_CHAIN).toContain('flowchart TD');
    expect(DIAGRAM_PART5_CHAIN).toContain('第17章');

    const h3s = sec?.querySelectorAll('h3');
    expect(h3s?.length).toBe(5);

    // Chapter 17
    expect(h3s?.[0]?.textContent).toBe('第17章　パーソナライズされた動的なAIプロダクト');
    expect(sec?.textContent).toContain('「N=1」、つまりユーザーがたった1人であっても');

    // Chapter 18
    expect(h3s?.[1]?.textContent).toBe('第18章　身体性AIと長時間稼働するAIシステム');
    expect(sec?.textContent).toContain('シミュレーションと仮想世界での検証を優先');

    // Chapter 19
    expect(h3s?.[2]?.textContent).toBe('第19章　ガバナンス、規制、道徳的な未来');
    expect(sec?.textContent).toContain('普遍的な品質原則とは別に追跡すべき');

    // Chapter 20
    expect(h3s?.[3]?.textContent).toBe('第20章　実践プレイブック');
    expect(sec?.textContent).toContain('ケース・繰り返し実行・トレース・ルーブリック・スライス・ゲート・モニター・インシデント対応ループ');

    // Chapter 21 & Diagram 12: six-predictions
    expect(h3s?.[4]?.textContent).toBe('第21章　トークン化されたプロダクトの未来への予測');
    expect(sec?.textContent).toContain('図12　トークン化プロダクトの未来への6つの予測');
    expect(DIAGRAM_SIX_PREDICTIONS).toBeDefined();
    expect(DIAGRAM_SIX_PREDICTIONS).toContain('flowchart LR');
    expect(DIAGRAM_SIX_PREDICTIONS).toContain('トークン化プロダクトの未来への6つの予測');
  });
});

describe('Testing AI Confidence Engineering Guide - Category 5 (Practice, Glossary, Voices, Checklist, References)', () => {
  it('renders Section: #practice (実践ワーク) with MVP Quality diagram', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#practice');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('実践ワーク：最小限のAI品質システムを組んでみる');

    const listItems = sec?.querySelectorAll('ol li');
    expect(listItems?.length).toBe(6);
    expect(listItems?.[0]?.textContent).toContain('本番相当のケースをおよそ50件用意する');
    expect(listItems?.[1]?.textContent).toContain('0から10、あるいは0から1のスコアを定義する');
    expect(listItems?.[2]?.textContent).toContain('1つのLLM判定者をスケール用に使う');
    expect(listItems?.[3]?.textContent).toContain('意見の不一致を隠さずレビューする');
    expect(listItems?.[4]?.textContent).toContain('すべての実行についてトレースを記録する');
    expect(listItems?.[5]?.textContent).toContain('ハードブロッカーを明確に定義しておく');

    expect(sec?.textContent).toContain('図13　最小限のAI品質システム');
    expect(DIAGRAM_MVP_QUALITY).toBeDefined();
    expect(DIAGRAM_MVP_QUALITY).toContain('flowchart LR');
    expect(DIAGRAM_MVP_QUALITY).toContain('本番相当のケースを約50件用意する');
  });

  it('renders Section: #glossary (用語集) with 20 key terms', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#glossary');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('用語集');

    const table = sec?.querySelector('table');
    expect(table).toBeDefined();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(20);

    const term0 = rows?.[0]?.querySelectorAll('td');
    expect(term0?.[0]?.textContent).toContain('Confidence Engineering（確信のエンジニアリング）');
    expect(term0?.[1]?.textContent).toContain('非決定的なAIシステムに対して、正当化された確信を築くための実務規律');

    const term1 = rows?.[1]?.querySelectorAll('td');
    expect(term1?.[0]?.textContent).toContain('Confidence Engineer');

    const term19 = rows?.[19]?.querySelectorAll('td');
    expect(term19?.[0]?.textContent).toContain('トークン化プロダクトの未来');
  });

  it('renders Section: #voices (業界の声)', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#voices');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('業界の声：プロミネントな実践者たちの反応');

    const listItems = sec?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(3);
    expect(listItems?.[0]?.textContent).toContain('TestGuild Automation Podcast（Joe Colantonio）');
    expect(listItems?.[1]?.textContent).toContain('Tariq King（AISTA共同創設者、Jason Arbonの長年の協業者）');
    expect(listItems?.[2]?.textContent).toContain('書籍サイトに名を連ねる実務レビュアーたち');
    expect(sec?.textContent).toContain('Introduction to AI Testing: Guide to ISTQB CT-AI Certification');
  });

  it('renders Section: #critical (批判的に読む) with 5 callouts', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#critical');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('批判的に読む');

    const callouts = sec?.querySelectorAll('.callout');
    expect(callouts?.length).toBe(5);
    expect(callouts?.[0]?.classList.contains('box')).toBe(true);
    expect(callouts?.[0]?.textContent).toContain('刊行されたばかりで独立系の流通である点');
    expect(callouts?.[1]?.classList.contains('box')).toBe(true);
    expect(callouts?.[1]?.textContent).toContain('「Confidence Engineer」はまだ提案段階の呼称であること');
    expect(callouts?.[2]?.classList.contains('box')).toBe(true);
    expect(callouts?.[2]?.textContent).toContain('著者自身のビジネスとの近さ');
    expect(callouts?.[3]?.classList.contains('box')).toBe(true);
    expect(callouts?.[3]?.textContent).toContain('具体的な数値や個別ツールの言及は陳腐化が早い');
    expect(callouts?.[4]?.classList.contains('forest')).toBe(true);
    expect(callouts?.[4]?.textContent).toContain('標準志向の代替資料と併読する価値');
  });

  it('renders Section: #checklist (チェックリスト) with 13 interactive items', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#checklist');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('チェックリスト');

    const counter = sec?.querySelector('.checklist-counter');
    expect(counter?.textContent).toContain('0 / 13 完了');

    const checkboxes = sec?.querySelectorAll('input[type="checkbox"]');
    expect(checkboxes?.length).toBe(13);

    const labels = sec?.querySelectorAll('.checklist label');
    expect(labels?.length).toBe(13);
    expect(labels?.[0]?.textContent).toContain('完全一致のアサーションに頼っているテストがないか洗い出した');
    expect(labels?.[1]?.textContent).toContain('少なくとも1つの重要な機能について、繰り返し実行して出力の分布を測定した');
    expect(labels?.[12]?.textContent).toContain('品質に関するエビデンスに責任を持つ人（Confidence Engineerに相当する役割）が明確になっている');
  });

  it('renders Section: #summary (まとめ)', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#summary');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('まとめ');
    expect(sec?.textContent).toContain('「テストが通ったか通らなかったか」という二値的な発想から');
    expect(sec?.textContent).toContain('初学者がAI品質という新しい分野を体系的に学ぶための良い地図になります');
  });

  it('renders Section: #references (参考文献・出典) with 20 reference cards and external links', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#references');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('参考文献・出典');

    const refCards = sec?.querySelectorAll('.ref-card');
    expect(refCards?.length).toBe(20);

    const ref1 = refCards?.[0];
    expect(ref1?.querySelector('.ref-num')?.textContent).toBe('1');
    expect(ref1?.querySelector('.ref-title')?.textContent).toContain('Testing AI 公式サイト');
    const link1 = ref1?.querySelector('a');
    expect(link1?.getAttribute('href')).toBe('https://www.testingaibook.com/');
    expect(link1?.getAttribute('target')).toBe('_blank');
    expect(link1?.getAttribute('rel')).toContain('noopener');

    const ref20 = refCards?.[19];
    expect(ref20?.querySelector('.ref-num')?.textContent).toBe('20');
    expect(ref20?.querySelector('.ref-title')?.textContent).toContain('Introduction to AI Testing: Guide to ISTQB CT-AI Certification');
    const link20 = ref20?.querySelector('a');
    expect(link20?.getAttribute('href')).toContain('1780177186');
  });

  it('renders the footer', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const footer = container.querySelector('footer');
    expect(footer).toBeDefined();
    expect(footer?.textContent).toContain('Testing AI: Engineering Confidence in Non-Deterministic Systems — 初学者向け解説ガイド');
  });
});

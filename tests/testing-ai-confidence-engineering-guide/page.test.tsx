import { afterAll, afterEach, beforeAll, beforeEach, describe, it, expect, mock } from 'bun:test';
import { render, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import TestingAiConfidenceGuidePage, {
  DIAGRAM_ROADMAP,
  DIAGRAM_CONFIDENCE_LOOP,
  DIAGRAM_OLD_VS_NEW,
  DIAGRAM_LLM_JUDGE,
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


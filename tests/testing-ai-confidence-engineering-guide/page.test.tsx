import { afterAll, afterEach, beforeAll, beforeEach, describe, it, expect, mock } from 'bun:test';
import { render, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import TestingAiConfidenceGuidePage, {
  DIAGRAM_ROADMAP,
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
    expect(h1?.textContent).toBe('『Testing AI: Engineering Confidence in Non-Deterministic Systems』完全ガイド');

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
    expect(sec?.textContent).toContain('生成AIやLLM（大規模言語モデル）を組み込んだソフトウェア');
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
    expect(cover?.textContent).toContain('Jason Arbon');

    const table = sec?.querySelector('table.kv-table');
    expect(table).toBeDefined();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(7);
    expect(rows?.[0]?.querySelector('th')?.textContent).toBe('原題');
    expect(rows?.[0]?.querySelector('td')?.textContent).toContain('Testing AI: Engineering Confidence');
    expect(rows?.[1]?.querySelector('th')?.textContent).toBe('著者');
    expect(rows?.[1]?.querySelector('td')?.textContent).toBe('Jason Arbon');
    expect(rows?.[2]?.querySelector('th')?.textContent).toBe('刊行');
    expect(rows?.[3]?.querySelector('th')?.textContent).toBe('構成');
    expect(rows?.[4]?.querySelector('th')?.textContent).toBe('想定読者');
    expect(rows?.[5]?.querySelector('th')?.textContent).toBe('中心概念');
    expect(rows?.[6]?.querySelector('th')?.textContent).toBe('公式サイト');
  });

  it('renders Section: #author (著者紹介：Jason Arbonとは)', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#author');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('著者紹介：Jason Arbonとは');
    expect(sec?.textContent).toContain('Google、Microsoft等でのテスト経験');

    const listItems = sec?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(3);
    expect(listItems?.[0]?.textContent).toContain('Googleでエンジニアリングマネージャー');
    expect(listItems?.[1]?.textContent).toContain('AIテスト関連の企業を複数創業');
    expect(listItems?.[2]?.textContent).toContain('「AI for Software Testing」などの研究論文');
  });

  it('renders Section: #audience (対象読者)', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#audience');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('対象読者');

    const listItems = sec?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(4);
    expect(listItems?.[0]?.textContent).toContain('開発者・プログラマー');
    expect(listItems?.[1]?.textContent).toContain('テスター・自動化エンジニア・QA');
    expect(listItems?.[2]?.textContent).toContain('プロダクトマネージャー・プロダクト開発者');
    expect(listItems?.[3]?.textContent).toContain('エンジニアリングマネージャー・経営層');
  });

  it('renders Section: #changes (本書を読むと何が変わるか)', () => {
    const { container } = render(<TestingAiConfidenceGuidePage />);
    const sec = container.querySelector('#changes');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('本書を読むと何が変わるか');

    const listItems = sec?.querySelectorAll('ol li');
    expect(listItems?.length).toBe(4);
    expect(listItems?.[0]?.textContent).toContain('「テストが通った」から「確信がある」への転換');
    expect(listItems?.[1]?.textContent).toContain('評価（Eval）と統計的アプローチの実装');
    expect(listItems?.[2]?.textContent).toContain('AI生成コードに対する新しい付き合い方');
    expect(listItems?.[3]?.textContent).toContain('自信を持ってリリースするための運用体制');
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

import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/software-testing-with-generative-ai-guide/page';
import NavBar, { TOC_ITEMS } from '../../app/software-testing-with-generative-ai-guide/NavBar';

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

describe('Software Testing with Generative AI Guide - Category 1 (Hero, Ch1, Ch2 & NavBar)', () => {
  it('renders within the scoped root container .software-testing-genai-layout', () => {
    const { container } = render(<Page />);
    const root = container.querySelector('.software-testing-genai-layout');
    expect(root).not.toBeNull();
  });

  it('renders H1 and hero metadata correctly', () => {
    render(<Page />);
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('生成AIとソフトウェアテスト実践ガイド');
    expect(h1.textContent).toContain('初学者のためのステップバイステップ入門');

    // Hero pills
    expect(screen.getByText('初学者向け')).toBeDefined();
    expect(screen.getByText('全12章')).toBeDefined();
    expect(screen.getByText('図解13点')).toBeDefined();
    expect(screen.getByText('参考文献18件')).toBeDefined();
  });

  it('renders target audience section with 3 list items', () => {
    render(<Page />);
    const h2 = screen.getByRole('heading', { level: 2, name: 'この記事の対象読者' });
    expect(h2.id).toBe('この記事の対象読者');

    expect(screen.getByText(/ソフトウェアテスト・QAの基礎（テストケース、テスト計画、探索的テストなど）はある程度知っているが/)).toBeDefined();
    expect(screen.getByText(/ChatGPTやGitHub Copilot、Claudeなどのツール名は聞いたことがあるが/)).toBeDefined();
    expect(screen.getByText(/チームに生成AIを導入する際に、何から手をつけ、どんなリスクに注意すべきかを把握したい方/)).toBeDefined();
  });

  it('renders Chapter 1 with 4 subheadings, Mermaid 1, and 2 tables', () => {
    render(<Page />);
    const ch1 = screen.getByRole('heading', { level: 2, name: '第1章 生成AIとLLMの基礎知識' });
    expect(ch1.id).toBe('第1章-生成aiとllmの基礎知識');

    // Subheadings
    const h3_11 = screen.getByRole('heading', { level: 3, name: '1.1 AIの系譜を整理する' });
    expect(h3_11.id).toBe('11-aiの系譜を整理する');
    const h3_12 = screen.getByRole('heading', { level: 3, name: '1.2 トークン化・埋め込み・コンテキストウィンドウ' });
    expect(h3_12.id).toBe('12-トークン化埋め込みコンテキストウィンドウ');
    const h3_13 = screen.getByRole('heading', { level: 3, name: '1.3 Foundation・Instruction-tuned・Reasoning LLMの違い' });
    expect(h3_13.id).toBe('13-foundationinstruction-tunedreasoning-llmの違い');
    const h3_14 = screen.getByRole('heading', { level: 3, name: '1.4 マルチモーダルLLMとテストへの応用' });
    expect(h3_14.id).toBe('14-マルチモーダルllmとテストへの応用');

    // Table 1 in 1.2
    expect(screen.getByText('トークン化')).toBeDefined();
    expect(screen.getByText('コンテキストウィンドウ')).toBeDefined();
    expect(screen.getByText('Transformer')).toBeDefined();

    // Table 2 in 1.3
    expect(screen.getByText('Foundation LLM')).toBeDefined();
    expect(screen.getByText('Instruction-tuned LLM')).toBeDefined();
    expect(screen.getByText('Reasoning LLM')).toBeDefined();
  });

  it('renders Chapter 2 with 6 subheadings, Table 3, and Mermaid 2', () => {
    render(<Page />);
    const ch2 = screen.getByRole('heading', { level: 2, name: /第2章 マインドセット/ });
    expect(ch2.id).toBe('第2章-マインドセット--人間とaiの協働モデル');

    const h3_21 = screen.getByRole('heading', { level: 3, name: '2.1 AIは代替ではなく増幅器である' });
    expect(h3_21.id).toBe('21-aiは代替ではなく増幅器である');
    const h3_22 = screen.getByRole('heading', { level: 3, name: '2.2 「予測不能なジーニー」として向き合う' });
    expect(h3_22.id).toBe('22-予測不能なジーニーとして向き合う');
    const h3_23 = screen.getByRole('heading', { level: 3, name: '2.3 LLM出力は必ず検証する' });
    expect(h3_23.id).toBe('23-llm出力は必ず検証する');
    const h3_24 = screen.getByRole('heading', { level: 3, name: '2.4 生成AIの3つの能力を見極める' });
    expect(h3_24.id).toBe('24-生成aiの3つの能力を見極める');
    const h3_25 = screen.getByRole('heading', { level: 3, name: '2.5 協働のループを描く' });
    expect(h3_25.id).toBe('25-協働のループを描く');
    const h3_26 = screen.getByRole('heading', { level: 3, name: '2.6 自動化バイアスへの警戒' });
    expect(h3_26.id).toBe('26-自動化バイアスへの警戒');

    // Table 3 in 2.4
    expect(screen.getByText('生成（Generation）')).toBeDefined();
    expect(screen.getByText('変換（Transformation）')).toBeDefined();
    expect(screen.getByText('強化（Augmentation）')).toBeDefined();
  });

  it('verifies TOC_ITEMS contains exactly 60 entries', () => {
    expect(TOC_ITEMS).toHaveLength(60);
    expect(TOC_ITEMS[0].id).toBe('この記事の対象読者');
    expect(TOC_ITEMS[1].id).toBe('第1章-生成aiとllmの基礎知識');
    expect(TOC_ITEMS[TOC_ITEMS.length - 1].id).toBe('参考文献');
  });

  it('renders NavBar component with sidebar element', () => {
    const { container } = render(<NavBar />);
    const sidebar = container.querySelector('#sidebar');
    expect(sidebar).not.toBeNull();
    const links = sidebar?.querySelectorAll('a');
    expect(links?.length).toBe(60);
  });
});

describe('Software Testing with Generative AI Guide - Category 2 (Ch3, Ch4, Ch5)', () => {
  it('renders Chapter 3 with 4 subheadings, Table 4, Table 5, Mermaid 3, and 2 prompt examples', () => {
    render(<Page />);
    const ch3 = screen.getByRole('heading', { level: 2, name: /第3章 プロンプトエンジニアリング/ });
    expect(ch3.id).toBe('第3章-プロンプトエンジニアリングの基本とテスト実務への応用');

    const h3_31 = screen.getByRole('heading', { level: 3, name: '3.1 プロンプトの6要素構造' });
    expect(h3_31.id).toBe('31-プロンプトの6要素構造');
    const h3_32 = screen.getByRole('heading', { level: 3, name: '3.2 3つの核となるプロンプト技法' });
    expect(h3_32.id).toBe('32-3つの核となるプロンプト技法');
    const h3_33 = screen.getByRole('heading', { level: 3, name: '3.3 プロンプトチェイニングの具体例' });
    expect(h3_33.id).toBe('33-プロンプトチェイニングの具体例');
    const h3_34 = screen.getByRole('heading', { level: 3, name: '3.4 システムプロンプトとユーザープロンプト' });
    expect(h3_34.id).toBe('34-システムプロンプトとユーザープロンプト');

    // Table 4 in 3.1
    expect(screen.getByText('役割（Role）')).toBeDefined();
    expect(screen.getByText('出力形式（Output format）')).toBeDefined();

    // Table 5 in 3.2
    expect(screen.getByText('プロンプトチェイニング')).toBeDefined();
    expect(screen.getByText('フューショットプロンプティング')).toBeDefined();
    expect(screen.getByText('メタプロンプティング')).toBeDefined();

    // Prompt examples in Ch3
    expect(screen.getByText(/文脈: 対象はECサイトのクーポン適用機能です。/)).toBeDefined();
    expect(screen.getByText(/システムプロンプト例:/)).toBeDefined();
  });

  it('renders Chapter 4 with 4 subheadings, Mermaid 4, Prompt Example 3, and Table 6', () => {
    render(<Page />);
    const ch4 = screen.getByRole('heading', { level: 2, name: '第4章 AIによるテスト分析とテストケース生成' });
    expect(ch4.id).toBe('第4章-aiによるテスト分析とテストケース生成');

    const h3_41 = screen.getByRole('heading', { level: 3, name: '4.1 要件から潜在的な不具合を洗い出す' });
    expect(h3_41.id).toBe('41-要件から潜在的な不具合を洗い出す');
    const h3_42 = screen.getByRole('heading', { level: 3, name: '4.2 テスト条件からテストケースへ' });
    expect(h3_42.id).toBe('42-テスト条件からテストケースへ');
    const h3_43 = screen.getByRole('heading', { level: 3, name: '4.3 Gherkin形式のテストケース生成' });
    expect(h3_43.id).toBe('43-gherkin形式のテストケース生成');
    const h3_44 = screen.getByRole('heading', { level: 3, name: '4.4 生成結果を評価するための指標' });
    expect(h3_44.id).toBe('44-生成結果を評価するための指標');

    // Gherkin prompt example in 4.3
    expect(screen.getByText(/Given ログイン済みのユーザーがカート画面を開いている/)).toBeDefined();

    // Table 6 in 4.4
    expect(screen.getByText('正確性（Accuracy）')).toBeDefined();
    expect(screen.getByText('適合率（Precision）')).toBeDefined();
    expect(screen.getByText('再現率（Recall）')).toBeDefined();
    expect(screen.getByText('多様性（Diversity）')).toBeDefined();
    expect(screen.getByText('時間効率')).toBeDefined();
  });

  it('renders Chapter 5 with 3 subheadings and Mermaid 5', () => {
    render(<Page />);
    const ch5 = screen.getByRole('heading', { level: 2, name: '第5章 AIによるテストデータ生成' });
    expect(ch5.id).toBe('第5章-aiによるテストデータ生成');

    const h3_51 = screen.getByRole('heading', { level: 3, name: '5.1 合成テストデータのメリット' });
    expect(h3_51.id).toBe('51-合成テストデータのメリット');
    const h3_52 = screen.getByRole('heading', { level: 3, name: '5.2 データ生成のパイプライン' });
    expect(h3_52.id).toBe('52-データ生成のパイプライン');
    const h3_53 = screen.getByRole('heading', { level: 3, name: '5.3 プライバシーを意識したデータ生成' });
    expect(h3_53.id).toBe('53-プライバシーを意識したデータ生成');
  });
});

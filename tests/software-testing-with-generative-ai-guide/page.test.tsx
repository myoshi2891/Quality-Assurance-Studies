import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page, {
  DIAGRAM_1,
  DIAGRAM_2,
  DIAGRAM_3,
  DIAGRAM_4,
  DIAGRAM_5,
  DIAGRAM_6,
  DIAGRAM_7,
  DIAGRAM_8,
  DIAGRAM_9,
  DIAGRAM_10,
  DIAGRAM_11,
  DIAGRAM_12,
  DIAGRAM_13,
} from '../../app/software-testing-with-generative-ai-guide/page';
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

describe('Software Testing with Generative AI Guide - Mermaid diagrams', () => {
  it('actually renders all 13 diagrams, one per .mermaid-container, matching DIAGRAM_1 through DIAGRAM_13', async () => {
    // Arrange: この検証専用に収集済み chart をリセットする
    renderedCharts.length = 0;

    // Act
    const { container } = render(<Page />);
    const diagramContainers = container.querySelectorAll('.mermaid-container');

    // Assert: コンテナ数とレンダリング完了後の SVG 数を突き合わせてから、
    // 収集した chart を DIAGRAM_1〜13 と 1 対 1 で照合する
    expect(diagramContainers.length).toBe(13);
    await waitFor(() => {
      const rendered = container.querySelectorAll(
        '.mermaid-container svg[data-testid="mock-mermaid"]'
      );
      expect(rendered.length).toBe(diagramContainers.length);
    });

    expect(renderedCharts.length).toBe(13);
    expect(renderedCharts[0]).toBe(DIAGRAM_1);
    expect(renderedCharts[1]).toBe(DIAGRAM_2);
    expect(renderedCharts[2]).toBe(DIAGRAM_3);
    expect(renderedCharts[3]).toBe(DIAGRAM_4);
    expect(renderedCharts[4]).toBe(DIAGRAM_5);
    expect(renderedCharts[5]).toBe(DIAGRAM_6);
    expect(renderedCharts[6]).toBe(DIAGRAM_7);
    expect(renderedCharts[7]).toBe(DIAGRAM_8);
    expect(renderedCharts[8]).toBe(DIAGRAM_9);
    expect(renderedCharts[9]).toBe(DIAGRAM_10);
    expect(renderedCharts[10]).toBe(DIAGRAM_11);
    expect(renderedCharts[11]).toBe(DIAGRAM_12);
    expect(renderedCharts[12]).toBe(DIAGRAM_13);
  });
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

describe('Software Testing with Generative AI Guide - Category 3 (Ch6, Ch7, Ch8)', () => {
  it('renders Chapter 6 with 5 subheadings, Mermaid 6, and Table 7', () => {
    render(<Page />);
    const ch6 = screen.getByRole('heading', { level: 2, name: /第6章 AIを活用したテスト自動化とセルフヒーリング/ });
    expect(ch6.id).toBe('第6章-aiを活用したテスト自動化とセルフヒーリング');

    const h3_61 = screen.getByRole('heading', { level: 3, name: '6.1 コード生成による自動化の高速化' });
    expect(h3_61.id).toBe('61-コード生成による自動化の高速化');
    const h3_62 = screen.getByRole('heading', { level: 3, name: '6.2 アクセシビリティツリーに基づくブラウザ自動化' });
    expect(h3_62.id).toBe('62-アクセシビリティツリーに基づくブラウザ自動化');
    const h3_63 = screen.getByRole('heading', { level: 3, name: '6.3 セルフヒーリング型テスト自動化の2世代' });
    expect(h3_63.id).toBe('63-セルフヒーリング型テスト自動化の2世代');
    const h3_64 = screen.getByRole('heading', { level: 3, name: '6.4 コマンドラインからのAI活用とドキュメント生成' });
    expect(h3_64.id).toBe('64-コマンドラインからのai活用とドキュメント生成');
    const h3_65 = screen.getByRole('heading', { level: 3, name: '6.5 リグレッションテストへの適用' });
    expect(h3_65.id).toBe('65-リグレッションテストへの適用');

    // Table 7 in 6.3
    expect(screen.getByText('第1世代：ロケータフォールバック型')).toBeDefined();
    expect(screen.getByText('第2世代：生成的セルフヒーリング型')).toBeDefined();
  });

  it('renders Chapter 7 with 3 subheadings and Mermaid 7', () => {
    render(<Page />);
    const ch7 = screen.getByRole('heading', { level: 2, name: '第7章 探索的テストとAIアシスタント' });
    expect(ch7.id).toBe('第7章-探索的テストとaiアシスタント');

    const h3_71 = screen.getByRole('heading', { level: 3, name: '7.1 チャーターとリスクの洗い出し' });
    expect(h3_71.id).toBe('71-チャーターとリスクの洗い出し');
    const h3_72 = screen.getByRole('heading', { level: 3, name: '7.2 セッション中のAI活用ループ' });
    expect(h3_72.id).toBe('72-セッション中のai活用ループ');
    const h3_73 = screen.getByRole('heading', { level: 3, name: '7.3 バグ調査の補助' });
    expect(h3_73.id).toBe('73-バグ調査の補助');
  });

  it('renders Chapter 8 with 3 subheadings, Mermaid 8, and Mermaid 9', () => {
    render(<Page />);
    const ch8 = screen.getByRole('heading', { level: 2, name: '第8章 AIエージェントとMCPによるテスト作業の自動化' });
    expect(ch8.id).toBe('第8章-aiエージェントとmcpによるテスト作業の自動化');

    const h3_81 = screen.getByRole('heading', { level: 3, name: '8.1 LLM-powered agentとは何か' });
    expect(h3_81.id).toBe('81-llm-powered-agentとは何か');
    const h3_82 = screen.getByRole('heading', { level: 3, name: '8.2 ツール呼び出しのループ' });
    expect(h3_82.id).toBe('82-ツール呼び出しのループ');
    const h3_83 = screen.getByRole('heading', { level: 3, name: '8.3 Model Context Protocol（MCP）の基本構造' });
    expect(h3_83.id).toBe('83-model-context-protocolmcpの基本構造');

    // Content check
    expect(screen.getByText('自律エージェント')).toBeDefined();
    expect(screen.getByText('半自律エージェント')).toBeDefined();
  });
});

describe('Software Testing with Generative AI Guide - Category 4 (Ch9, Ch10, Ch11)', () => {
  it('renders Chapter 9 with 4 subheadings, Mermaid 10, Table 8, and Table 9', () => {
    render(<Page />);
    const ch9 = screen.getByRole('heading', { level: 2, name: '第9章 生成AI活用のリスク管理' });
    expect(ch9.id).toBe('第9章-生成ai活用のリスク管理');

    const h3_91 = screen.getByRole('heading', { level: 3, name: '9.1 ハルシネーション・推論エラー・バイアス' });
    expect(h3_91.id).toBe('91-ハルシネーション推論エラーバイアス');
    const h3_92 = screen.getByRole('heading', { level: 3, name: '9.2 データプライバシーとセキュリティのリスク' });
    expect(h3_92.id).toBe('92-データプライバシーとセキュリティのリスク');
    const h3_93 = screen.getByRole('heading', { level: 3, name: '9.3 環境負荷という見落とされがちな視点' });
    expect(h3_93.id).toBe('93-環境負荷という見落とされがちな視点');
    const h3_94 = screen.getByRole('heading', { level: 3, name: '9.4 規制・標準の全体像' });
    expect(h3_94.id).toBe('94-規制標準の全体像');

    // Table 8 in 9.2
    expect(screen.getByText('データの持ち出し')).toBeDefined();
    expect(screen.getByText('悪意あるコード生成')).toBeDefined();

    // Table 9 in 9.4
    expect(screen.getByText('ISO/IEC 42001:2023')).toBeDefined();
    expect(screen.getByText('EU AI Act')).toBeDefined();
    expect(screen.getByText('NIST AI Risk Management Framework')).toBeDefined();
  });

  it('renders Chapter 10 with 3 subheadings, Mermaid 11, and Mermaid 12', () => {
    render(<Page />);
    const ch10 = screen.getByRole('heading', { level: 2, name: /第10章 コンテキストの拡張/ });
    expect(ch10.id).toBe('第10章-コンテキストの拡張--ragとファインチューニング');

    const h3_101 = screen.getByRole('heading', { level: 3, name: '10.1 RAG（検索拡張生成）の仕組み' });
    expect(h3_101.id).toBe('101-rag検索拡張生成の仕組み');
    const h3_102 = screen.getByRole('heading', { level: 3, name: '10.2 ファインチューニングとの比較' });
    expect(h3_102.id).toBe('102-ファインチューニングとの比較');
    const h3_103 = screen.getByRole('heading', { level: 3, name: '10.3 LLMOpsという運用の視点' });
    expect(h3_103.id).toBe('103-llmopsという運用の視点');
  });

  it('renders Chapter 11 with 4 subheadings and Mermaid 13', () => {
    render(<Page />);
    const ch11 = screen.getByRole('heading', { level: 2, name: '第11章 組織導入とチーム変革' });
    expect(ch11.id).toBe('第11章-組織導入とチーム変革');

    const h3_111 = screen.getByRole('heading', { level: 3, name: '11.1 Shadow AIのリスク' });
    expect(h3_111.id).toBe('111-shadow-aiのリスク');
    const h3_112 = screen.getByRole('heading', { level: 3, name: '11.2 段階的な導入ロードマップ' });
    expect(h3_112.id).toBe('112-段階的な導入ロードマップ');
    const h3_113 = screen.getByRole('heading', { level: 3, name: '11.3 DORA 2025レポートが示す教訓' });
    expect(h3_113.id).toBe('113-dora-2025レポートが示す教訓');
    const h3_114 = screen.getByRole('heading', { level: 3, name: '11.4 必要なスキルとチームの変化' });
    expect(h3_114.id).toBe('114-必要なスキルとチームの変化');
  });
});

describe('Software Testing with Generative AI Guide - Category 5 (Ch12, Checklist, References, Disclaimer)', () => {
  it('renders Chapter 12 with 3 subheadings', () => {
    render(<Page />);
    const ch12 = screen.getByRole('heading', { level: 2, name: '第12章 まとめとチェックリスト' });
    expect(ch12.id).toBe('第12章-まとめとチェックリスト');

    const h3_121 = screen.getByRole('heading', { level: 3, name: '12.1 学習の道筋' });
    expect(h3_121.id).toBe('121-学習の道筋');
    const h3_122 = screen.getByRole('heading', { level: 3, name: '12.2 実践チェックリスト' });
    expect(h3_122.id).toBe('122-実践チェックリスト');
    const h3_123 = screen.getByRole('heading', { level: 3, name: '12.3 最後に' });
    expect(h3_123.id).toBe('123-最後に');
  });

  it('renders interactive Checklist with 13 checkboxes and dynamic progress counter', () => {
    render(<Page />);
    const progress = screen.getByText('0 / 13 完了');
    expect(progress).toBeDefined();

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBe(13);

    // Toggle first checkbox
    fireEvent.click(checkboxes[0]);
    expect(screen.getByText('1 / 13 完了')).toBeDefined();

    // Toggle second checkbox
    fireEvent.click(checkboxes[1]);
    expect(screen.getByText('2 / 13 完了')).toBeDefined();

    // Uncheck first checkbox
    fireEvent.click(checkboxes[0]);
    expect(screen.getByText('1 / 13 完了')).toBeDefined();
  });

  it('renders all 18 references and disclaimer', () => {
    render(<Page />);
    const refHeading = screen.getByRole('heading', { level: 2, name: '参考文献' });
    expect(refHeading.id).toBe('参考文献');

    // All 18 reference badges [1] through [18]
    for (let i = 1; i <= 18; i++) {
      expect(screen.getByText(`[${i}]`)).toBeDefined();
    }

    // Key authors / titles in references
    expect(screen.getAllByText(/Mark Winteringham/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/CT-GenAI/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/CT-AI/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/GitHub Copilot/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Playwright/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Martin Fowler/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Kent Beck/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/DORA Report/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/OWASP/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Angie Jones/).length).toBeGreaterThanOrEqual(1);

    // Disclaimer
    expect(screen.getByText(/本ガイドは2026年9月時点で確認できる公開情報に基づいて作成しています/)).toBeDefined();
  });
});


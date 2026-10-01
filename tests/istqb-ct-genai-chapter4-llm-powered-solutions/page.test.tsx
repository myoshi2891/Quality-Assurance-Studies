import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'bun:test';
import CtGenAiChapter4Page from '../../app/istqb-ct-genai-chapter4-llm-powered-solutions/page';

afterEach(() => cleanup());

export const EXPECTED_TOC_LINKS = [
    { href: '#s0', text: '本ガイドの読み方' },
    { href: '#s1', text: '第4章の全体像' },
    { href: '#s2', text: '4.1.1 基本アーキテクチャ' },
    { href: '#s3', text: '4.1.2 RAG' },
    { href: '#s4', text: '4.1.3 LLM搭載エージェント' },
    { href: '#s5', text: '4.2.1 ファインチューニング' },
    { href: '#s6', text: '4.2.2 LLMOps' },
    { href: '#s7', text: '手法の使い分け' },
    { href: '#s8', text: '用語集' },
    { href: '#s9', text: '学習目標対応表' },
    { href: '#s10', text: '確認問題' },
    { href: '#s11', text: '試験直前チェックリスト' },
    { href: '#s12', text: '参考文献' },
];

describe('CT-GenAI Chapter 4 Page - Category 1 (Architecture & Overview)', () => {
    it('renders the hero header with title, eyebrow, and metadata chips', () => {
        const { container } = render(<CtGenAiChapter4Page />);
        const hero = container.querySelector('.hero');
        expect(hero).not.toBeNull();
        expect(hero?.querySelector('.eyebrow')?.textContent).toContain('CT-GenAI');
        expect(hero?.querySelector('h1')?.textContent).toContain('第4章');
        expect(hero?.querySelector('h1')?.textContent).toContain('LLM 搭載テストインフラ');
        expect(hero?.querySelector('.lead')?.textContent).toContain('アーキテクチャの基本構成要素');

        const chips = container.querySelectorAll('.hero-meta .chip');
        expect(chips.length).toBeGreaterThanOrEqual(4);
        expect(chips[0].textContent).toContain('学習時間の目安');
        expect(chips[1].textContent).toContain('試験全体');
        expect(chips[2].textContent).toContain('学習目標レベル');
        expect(chips[3].textContent).toContain('対応シラバス');
    });

    it('renders all 13 sidebar navigation items in order', () => {
        const { container } = render(<CtGenAiChapter4Page />);
        const navLinks = container.querySelectorAll('.sidebar nav a');
        expect(navLinks.length).toBe(13);
        EXPECTED_TOC_LINKS.forEach((item, index) => {
            expect(navLinks[index].getAttribute('href')).toBe(item.href);
            expect(navLinks[index].textContent).toContain(item.text);
        });
    });

    it('renders Section 0: 本ガイドの読み方 with headings, table, and callouts', () => {
        const { container } = render(<CtGenAiChapter4Page />);
        const s0 = container.querySelector('#s0');
        expect(s0).not.toBeNull();
        expect(s0?.querySelector('h2')?.textContent).toContain('本ガイドの読み方');

        const h3List = Array.from(s0?.querySelectorAll('h3') || []).map((h) => h.textContent);
        expect(h3List).toContain('0.1 記号の意味');
        expect(h3List).toContain('0.2 バージョンについての重要な注意');
        expect(h3List).toContain('0.3 試験で問われる「型」');

        // テーブル
        const table = s0?.querySelector('table');
        expect(table).not.toBeNull();
        const headers = Array.from(table?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
        expect(headers).toEqual(['記号', '意味']);

        // コールアウト
        const callouts = s0?.querySelectorAll('.callout');
        expect(callouts?.length).toBeGreaterThanOrEqual(1);
    });

    it('renders Section 1: 第4章の全体像 with Mermaid d1 and mapping tables', () => {
        const { container } = render(<CtGenAiChapter4Page />);
        const s1 = container.querySelector('#s1');
        expect(s1).not.toBeNull();
        expect(s1?.querySelector('h2')?.textContent).toContain('第4章の全体像');

        const h3List = Array.from(s1?.querySelectorAll('h3') || []).map((h) => h.textContent);
        expect(h3List).toContain('1.1 一言でいうと');
        expect(h3List).toContain('1.2 章の構成');
        expect(h3List).toContain('1.3 各項目の位置づけ（初学者向けたとえ話）');
        expect(h3List).toContain('1.4 キーワード（シラバス記載）');

        // Mermaid d1
        const diagramCards = s1?.querySelectorAll('.diagram-card');
        expect(diagramCards?.length).toBeGreaterThanOrEqual(1);
        expect(diagramCards?.[0].textContent).toContain('全体像');

        // テーブル（章の構成、たとえ話）
        const tables = s1?.querySelectorAll('table');
        expect(tables?.length).toBeGreaterThanOrEqual(2);
    });

    it('renders Section 2: 4.1.1 基本アーキテクチャ with Mermaid d2 and detailed architecture tables', () => {
        const { container } = render(<CtGenAiChapter4Page />);
        const s2 = container.querySelector('#s2');
        expect(s2).not.toBeNull();
        expect(s2?.querySelector('h2')?.textContent).toContain('4.1.1');
        expect(s2?.querySelector('h2')?.textContent).toContain('主要なアーキテクチャ構成要素と概念');

        const h3List = Array.from(s2?.querySelectorAll('h3') || []).map((h) => h.textContent);
        expect(h3List).toContain('2.1 まず用語：「テストインフラ」とは');
        expect(h3List).toContain('2.2 チャットボットとLLM搭載テストツールの違い（第1章1.2.2の復習）');
        expect(h3List).toContain('2.3 典型アーキテクチャ：3つの主要コンポーネント');
        expect(h3List).toContain('2.4 全体のデータフロー');
        expect(h3List).toContain('2.5 従来のクライアント・サーバ型との違い（試験頻出）');
        expect(h3List).toContain('2.6 2種類のデータベースの使い分け');
        expect(h3List).toContain('2.7 後処理（Post-processing）で何をするか');

        const h4 = s2?.querySelector('h4');
        expect(h4?.textContent).toContain('2.7.1 この節の試験ポイント');

        // Mermaid d2
        const diagram = s2?.querySelector('.diagram-card');
        expect(diagram).not.toBeNull();
        expect(diagram?.textContent).toContain('データフロー');

        // アーキテクチャ比較テーブル
        const tables = s2?.querySelectorAll('table');
        expect(tables?.length).toBeGreaterThanOrEqual(5);

        // 試験ポイント
        const critique = s2?.querySelector('.critique-card');
        expect(critique).not.toBeNull();
    });

    it('renders Section 3: 4.1.2 RAG with Mermaid d3/d4, tables, step-list, and critique card', () => {
        const { container } = render(<CtGenAiChapter4Page />);
        const s3 = container.querySelector('#s3');
        expect(s3).not.toBeNull();
        expect(s3?.querySelector('h2')?.textContent).toContain('4.1.2');
        expect(s3?.querySelector('h2')?.textContent).toContain('Retrieval-Augmented Generation（RAG）');

        const h3List = Array.from(s3?.querySelectorAll('h3') || []).map((h) => h.textContent);
        expect(h3List).toContain('3.1 RAGとは何か');
        expect(h3List).toContain('3.2 なぜテストでRAGが必要か');
        expect(h3List).toContain('3.3 RAGの仕組み：2つのフェーズ');
        expect(h3List).toContain('3.4 「関連性のある応答（relevant response）」とは');
        expect(h3List).toContain('3.5 キーワード検索とベクトル検索の違い');
        expect(h3List).toContain('3.6 RAGを使ったテスト業務の例');
        expect(h3List).toContain('3.7 RAGとファインチューニングの違い（比較）');
        expect(h3List).toContain('3.8 RAGのリスクと限界');
        expect(h3List).toContain('3.9 ハンズオン目標 HO-4.1.2（H1）：RAGを試す');

        const h4List = Array.from(s3?.querySelectorAll('h4') || []).map((h) => h.textContent);
        expect(h4List).toContain('フェーズ1：事前処理（前処理・インデックス作成）');
        expect(h4List).toContain('フェーズ2：実行時（ユーザープロンプト処理）');
        expect(h4List).toContain('3.10 この節の試験ポイント');

        // Mermaid d3 & d4
        const diagramCards = s3?.querySelectorAll('.diagram-card');
        expect(diagramCards?.length).toBeGreaterThanOrEqual(2);
        expect(diagramCards?.[0].textContent).toContain('図3');
        expect(diagramCards?.[1].textContent).toContain('図4');

        // テーブル群（比較、フェーズ、業務例等）
        const tables = s3?.querySelectorAll('table');
        expect(tables?.length).toBeGreaterThanOrEqual(6);

        // ステップリスト（ハンズオンHO-4.1.2）
        const stepList = s3?.querySelector('.step-list');
        expect(stepList).not.toBeNull();
        const steps = stepList?.querySelectorAll('li');
        expect(steps?.length).toBe(5);

        // 試験ポイント
        const critique = s3?.querySelector('.critique-card');
        expect(critique).not.toBeNull();
    });

    it('renders Section 4: 4.1.3 LLM搭載エージェント with Mermaid d5/d6, tables, and critique card', () => {
        const { container } = render(<CtGenAiChapter4Page />);
        const s4 = container.querySelector('#s4');
        expect(s4).not.toBeNull();
        expect(s4?.querySelector('h2')?.textContent).toContain('4.1.3');
        expect(s4?.querySelector('h2')?.textContent).toContain('テストプロセス自動化におけるLLM搭載エージェントの役割');

        const h3List = Array.from(s4?.querySelectorAll('h3') || []).map((h) => h.textContent);
        expect(h3List).toContain('4.1 LLM搭載エージェントとは');
        expect(h3List).toContain('4.2 チャットボット・RAG・エージェントの違い');
        expect(h3List).toContain('4.3 エージェントの動作イメージ');
        expect(h3List).toContain('4.4 エージェントが呼び出せる「ツール」の例');
        expect(h3List).toContain('4.5 自律度の違い');
        expect(h3List).toContain('4.6 マルチエージェントとオーケストレーション');
        expect(h3List).toContain('4.7 エージェントが担えるテスト作業');
        expect(h3List).toContain('4.8 エージェントのリスクと対策');
        expect(h3List).toContain('4.9 ハンズオン目標 HO-4.1.3（H0）：エージェントの実演を観察する');

        const h4 = s4?.querySelector('h4');
        expect(h4?.textContent).toContain('4.10 この節の試験ポイント');

        // Mermaid d5 & d6
        const diagramCards = s4?.querySelectorAll('.diagram-card');
        expect(diagramCards?.length).toBeGreaterThanOrEqual(2);
        expect(diagramCards?.[0].textContent).toContain('図5');
        expect(diagramCards?.[1].textContent).toContain('図6');

        // テーブル群（比較、ツール、自律度、マルチ、作業、リスク、観察ポイント）
        const tables = s4?.querySelectorAll('table');
        expect(tables?.length).toBeGreaterThanOrEqual(6);

        // 試験ポイント
        const critique = s4?.querySelector('.critique-card');
        expect(critique).not.toBeNull();
    });
});

describe('CT-GenAI Chapter 4 Page - Category 4 (Finetuning & LLMOps)', () => {
    it('renders Section 5: 4.2.1 ファインチューニング with Mermaid d7, tables, and best practices', () => {
        const { container } = render(<CtGenAiChapter4Page />);
        const s5 = container.querySelector('#s5');
        expect(s5).not.toBeNull();
        expect(s5?.querySelector('h2')?.textContent).toContain('4.2.1');
        expect(s5?.querySelector('h2')?.textContent).toContain('テストタスクのためのLLMファインチューニング');

        const h3List = Array.from(s5?.querySelectorAll('h3') || []).map((h) => h.textContent);
        expect(h3List).toContain('5.1 ファインチューニングとは');
        expect(h3List).toContain('5.2 LLMとSLM');
        expect(h3List).toContain('5.3 どんなときにファインチューニングが有効か');
        expect(h3List).toContain('5.4 テストでの具体例');
        expect(h3List).toContain('5.5 ファインチューニングの手順（一般的な流れ）');
        expect(h3List).toContain('5.6 ファインチューニングの課題（試験頻出）');
        expect(h3List).toContain('5.7 ファインチューニングと「プロンプトエンジニアリング」「RAG」の使い分け');
        expect(h3List).toContain('5.8 ハンズオン目標 HO-4.2.1（H0）：ファインチューニングの実演を観察する');

        const h4 = s5?.querySelector('h4');
        expect(h4?.textContent).toContain('5.9 この節の試験ポイント');

        // Mermaid d7
        const diagramCard = s5?.querySelector('.diagram-card');
        expect(diagramCard).not.toBeNull();
        expect(diagramCard?.textContent).toContain('図7：ファインチューニングの一般的な手順');

        // テーブル群（LLM/SLM定義、LLM vs SLM比較、有効場面、ペア例、課題、手法使い分け）
        const tables = s5?.querySelectorAll('table');
        expect(tables?.length).toBeGreaterThanOrEqual(6);

        // コールアウト群
        const callouts = s5?.querySelectorAll('.callout');
        expect(callouts?.length).toBeGreaterThanOrEqual(3);

        // 試験ポイント
        const critique = s5?.querySelector('.critique-card');
        expect(critique).not.toBeNull();
    });

    it('renders Section 6: 4.2.2 LLMOps with Mermaid d8/d9, tables, and best practices', () => {
        const { container } = render(<CtGenAiChapter4Page />);
        const s6 = container.querySelector('#s6');
        expect(s6).not.toBeNull();
        expect(s6?.querySelector('h2')?.textContent).toContain('4.2.2');
        expect(s6?.querySelector('h2')?.textContent).toContain('LLMOps：テスト用LLMのデプロイと運用管理');

        const h3List = Array.from(s6?.querySelectorAll('h3') || []).map((h) => h.textContent);
        expect(h3List).toContain('6.1 LLMOpsとは');
        expect(h3List).toContain('6.2 LLMOpsのライフサイクル');
        expect(h3List).toContain('6.3 GenAIをテストプロセスに導入する3つのアプローチ');
        expect(h3List).toContain('6.4 アプローチ選択の考え方');
        expect(h3List).toContain('6.5 データの機密度に応じた環境の選択');
        expect(h3List).toContain('6.6 LLMOpsで監視・管理すべき項目');

        const h4 = s6?.querySelector('h4');
        expect(h4?.textContent).toContain('6.7 この節の試験ポイント');

        // Mermaid d8 & d9
        const diagramCards = s6?.querySelectorAll('.diagram-card');
        expect(diagramCards?.length).toBeGreaterThanOrEqual(2);
        expect(diagramCards?.[0].textContent).toContain('図8：LLMOpsのライフサイクル');
        expect(diagramCards?.[1].textContent).toContain('図9：GenAI導入アプローチの選択フロー');

        // テーブル群（目標、3つのアプローチ、機密度と環境、7領域の監視項目）
        const tables = s6?.querySelectorAll('table');
        expect(tables?.length).toBeGreaterThanOrEqual(4);

        // コールアウト群
        const callouts = s6?.querySelectorAll('.callout');
        expect(callouts?.length).toBeGreaterThanOrEqual(3);

        // 試験ポイント
        const critique = s6?.querySelector('.critique-card');
        expect(critique).not.toBeNull();
    });
});

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
        expect(hero?.querySelector('h1')?.textContent).toContain('LLM搭載テストインフラ');
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
        expect(headers).toEqual(['記号', '意味', 'どのように読むか']);

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
});

import { render, screen, cleanup } from '@testing-library/react';
import { expect, test, describe, beforeAll, afterAll, afterEach } from 'bun:test';
import React from 'react';
import Page from '../../app/istqb-ctal-tta-complete-guide/page';
import NavBar from '../../app/istqb-ctal-tta-complete-guide/NavBar';

// IntersectionObserver のモック
class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | Document | null = null;
    readonly rootMargin: string = '';
    readonly thresholds: readonly number[] = [];

    private callback: IntersectionObserverCallback;
    private options?: IntersectionObserverInit;

    constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
        this.callback = callback;
        this.options = options;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    observe(target: Element): void {}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    unobserve(target: Element): void {}
    disconnect(): void {}
    takeRecords(): IntersectionObserverEntry[] {
        return [];
    }
}

describe('istqb-ctal-tta-complete-guide', () => {
    let originalIntersectionObserver: typeof IntersectionObserver | undefined;

    beforeAll(() => {
        originalIntersectionObserver = window.IntersectionObserver;
        Object.defineProperty(window, 'IntersectionObserver', {
            writable: true,
            configurable: true,
            value: MockIntersectionObserver,
        });
    });

    afterAll(() => {
        Object.defineProperty(window, 'IntersectionObserver', {
            writable: true,
            configurable: true,
            value: originalIntersectionObserver,
        });
    });

    // 各テスト後にレンダリング結果を破棄し、未await の Mermaid 非同期処理が
    // テスト境界を越えて後続ファイルに漏れるのを防ぐ
    afterEach(() => {
        cleanup();
    });

    test('NavBar renders all section links', () => {
        render(<NavBar />);
        expect(screen.getByText('概要')).toBeTruthy();
        expect(screen.getByText('Ch1 リスク')).toBeTruthy();
        expect(screen.getByText('Ch2 ホワイトボックス')).toBeTruthy();
        expect(screen.getByText('Ch3 静的/動的')).toBeTruthy();
        expect(screen.getByText('Ch4 品質特性')).toBeTruthy();
        expect(screen.getByText('Ch5 レビュー')).toBeTruthy();
        expect(screen.getByText('Ch6 ツール')).toBeTruthy();
        expect(screen.getByText('試験対策')).toBeTruthy();
        expect(screen.getByText('参考資料')).toBeTruthy();
    });

    test('Page renders main title', async () => {
        render(<Page />);
        // Mermaid の非同期描画を待ち、未処理 Promise を残さない
        await screen.findAllByTestId('mock-mermaid');
        // 複数行に分かれているため正規表現か、一部のテキストでチェック
        expect(screen.getByText(/Technical Test Analyst/)).toBeTruthy();
        expect(screen.getByText(/完全ガイド/)).toBeTruthy();
    });

    test('Page renders sections', async () => {
        const { container } = render(<Page />);
        // Mermaid の非同期描画を待ち、未処理 Promise を残さない
        await screen.findAllByTestId('mock-mermaid');
        const sections = container.querySelectorAll('section');
        // hero, ch1, ch2, ch3, ch4, ch5, ch6, exam, refs で 9セクション
        expect(sections.length).toBeGreaterThanOrEqual(9);
        
        expect(container.querySelector('#overview')).toBeTruthy();
        expect(container.querySelector('#ch1')).toBeTruthy();
        expect(container.querySelector('#ch2')).toBeTruthy();
        expect(container.querySelector('#ch4')).toBeTruthy();
    });
});

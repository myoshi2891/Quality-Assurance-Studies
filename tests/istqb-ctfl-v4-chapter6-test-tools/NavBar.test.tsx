import React from 'react';
import { afterAll, afterEach, beforeAll, describe, expect, it, mock } from 'bun:test';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import NavBar from '../../app/istqb-ctfl-v4-chapter6-test-tools/NavBar';

let originalIntersectionObserver: typeof window.IntersectionObserver;

beforeAll(() => {
    originalIntersectionObserver = window.IntersectionObserver;
    const mockIntersectionObserver = mock(() => ({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null,
    }));
    window.IntersectionObserver = mockIntersectionObserver as unknown as typeof IntersectionObserver;
    // happy-dom は scrollIntoView を実装していないためスタブする
    Element.prototype.scrollIntoView = mock(() => undefined) as unknown as typeof Element.prototype.scrollIntoView;
});

afterAll(() => {
    window.IntersectionObserver = originalIntersectionObserver;
});

afterEach(() => {
    cleanup();
    document.getElementById('s61-1')?.remove();
});

describe('Chapter 6 NavBar - mobile menu focus management', () => {
    it('returns focus to the mobile toggle when a link is selected by keyboard', () => {
        // Arrange: ナビゲーションの遷移先要素を用意し、モバイルメニューを開く
        const target = document.createElement('div');
        target.id = 's61-1';
        document.body.appendChild(target);

        render(<NavBar />);
        const toggle = screen.getByRole('button', { name: '目次を開く' });
        fireEvent.click(toggle);
        expect(toggle.getAttribute('aria-expanded')).toBe('true');

        const link = screen.getByRole('link', { name: /2.1 テストツールとは/ });
        link.focus();
        expect(document.activeElement).toBe(link);

        // Act: キーボード操作でのリンク選択（Enter は click イベントを発火する）
        fireEvent.click(link);

        // Assert: メニューは閉じ、フォーカスはトグルへ戻る
        expect(toggle.getAttribute('aria-expanded')).toBe('false');
        expect(document.activeElement).toBe(toggle);
    });
});

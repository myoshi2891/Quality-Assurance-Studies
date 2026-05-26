'use client';

import { useEffect, useRef } from 'react';

/**
 * 固定位置の免責事項バナーをレンダリングし、バナーの現在の高さを CSS カスタムプロパティ
 * `document.documentElement.style` の `--disclaimer-height` に同期し続ける。
 *
 * バナーはビューポート上部付近（Header 直下）に固定表示され、短い日本語の免責文を表示する。
 * バナーの高さが変化するたびに `--disclaimer-height` を更新し、他のレイアウトコードが参照できるようにする。
 *
 * @returns 免責事項バナーをレンダリングする React 要素
 */
export function DisclaimerBanner() {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let lastHeight: number | null = null;
        const sync = () => {
            const h = el.getBoundingClientRect().height;
            if (lastHeight === null || Math.abs(h - lastHeight) >= 0.5) {
                lastHeight = h;
                document.documentElement.style.setProperty('--disclaimer-height', `${h}px`);
            }
        };

        const frameId = requestAnimationFrame(sync);

        if (typeof ResizeObserver !== 'undefined') {
            const ro = new ResizeObserver(sync);
            ro.observe(el);
            return () => {
                cancelAnimationFrame(frameId);
                ro.disconnect();
            };
        }

        window.addEventListener('resize', sync);
        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('resize', sync);
        };
    }, []);

    return (
        <aside
            ref={ref}
            className="fixed top-[60px] left-0 right-0 bg-yellow-500/12 border-b border-yellow-500/25 z-40 text-center px-4 py-[0.35rem] text-xs text-[#d4a017] leading-[1.4]"
            aria-label="免責事項"
        >
            <p style={{ margin: 0 }}>
                ⚠️ 本サイトは個人学習を目的として作成したものです。掲載内容の正確性・完全性は保証されておらず、試験の合否を含むいかなる結果に対しても責任を負いません。
            </p>
            <p style={{ margin: 0 }}>
                最新の公式情報は各試験プロバイダーの公式サイトをご確認ください。
            </p>
        </aside>
    );
}

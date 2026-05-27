'use client';

import { useEffect, useRef } from 'react';

/**
 * Render a fixed-position disclaimer banner and keep its height synchronized to the
 * CSS custom property `--disclaimer-height` on `document.documentElement`.
 *
 * The banner is positioned below the header and displays short Japanese disclaimer text;
 * its measured height is written to the custom property whenever the rendered height changes
 * so other layout code can reference it.
 *
 * @returns A React element that renders the disclaimer banner
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

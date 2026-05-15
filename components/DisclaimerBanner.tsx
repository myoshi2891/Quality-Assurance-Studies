'use client';

import { useEffect, useRef } from 'react';

/**
 * Renders a fixed-position disclaimer banner and keeps the document CSS custom property `--disclaimer-height` synchronized with the banner's current height.
 *
 * The banner is positioned near the top of the viewport and displays a short Japanese disclaimer. The component updates `document.documentElement.style.--disclaimer-height` to match the banner's rendered height so other layout code can react to its presence.
 *
 * @returns A React element that renders the disclaimer banner.
 */
export function DisclaimerBanner() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const sync = () => {
            const h = el.getBoundingClientRect().height;
            document.documentElement.style.setProperty('--disclaimer-height', `${h}px`);
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
        <div
            ref={ref}
            style={{
                position: 'fixed',
                top: '60px',
                left: 0,
                right: 0,
                background: 'rgba(234, 179, 8, 0.12)',
                borderBottom: '1px solid rgba(234, 179, 8, 0.25)',
                zIndex: 40,
                textAlign: 'center',
                padding: '0.35rem 1rem',
                fontSize: '0.75rem',
                color: '#d4a017',
                lineHeight: 1.4,
            }}
        >
            <p style={{ margin: 0 }}>
                ⚠️ 本サイトは個人学習を目的として作成したものです。掲載内容の正確性・完全性は保証されておらず、試験の合否を含むいかなる結果に対しても責任を負いません。
            </p>
            <p style={{ margin: 0 }}>
                最新の公式情報は各試験プロバイダーの公式サイトをご確認ください。
            </p>
        </div>
    );
}

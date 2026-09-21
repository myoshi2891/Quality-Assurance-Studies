#!/usr/bin/env bun
/**
 * globals.css の汎用セレクタがページ固有レイアウトへ干渉していないかを実測で検査する。
 *
 * 使い方（dev サーバーを起動した状態で）:
 *   bun scripts/check-globals-interference.mjs /istqb-ctal-ta-chapter2-risk-based-testing
 *   bun scripts/check-globals-interference.mjs http://127.0.0.1:3000/some-guide
 *
 * 検出できる既知の干渉（いずれも「移行したのに原本と見た目が違う」の常連）:
 *   - .hero に globals の min-height:100vh / display:flex / justify-content:center が残存
 *   - section に globals の padding-top:5rem、section + section の border-top が残存
 *   - main に globals の max-width:1100px が残存
 *   - .mermaid-wrapper に globals のダークカード（背景 #131929 / max-width:760px）が残存
 *   - 横スクロールする図の左端がスクロール原点より外に出ている（左端切れ）
 *
 * 警告が1件でもあれば終了コード 1 を返す。
 */

import { chromium } from '@playwright/test';

const DEFAULT_ORIGIN = 'http://127.0.0.1:3000';
const GLOBAL_DARK_CARD_BG = 'rgb(19, 25, 41)'; // globals の --color-bg-card

const args = process.argv.slice(2);
// 100vh ヒーローを意図しているページ（ダーク系ランディング風）が大半なので、
// 「カード型ヒーローのはずなのに 100vh になっている」判定は明示的なオプトイン時のみ警告する。
const cardHeroMode = args.includes('--card-hero');
const target = args.find((arg) => !arg.startsWith('--'));
if (!target) {
    console.error('usage: bun scripts/check-globals-interference.mjs <path-or-url> [--card-hero]');
    process.exit(2);
}
const url = target.startsWith('http') ? target : `${DEFAULT_ORIGIN}${target}`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded' });
    if (response?.status() !== 200) {
        console.error(`✖ HTTP ${response?.status()} for ${url}`);
        process.exit(1);
    }
    // Mermaid はクライアント描画。ハイドレーション前は wrapper 自体が存在しないため、
    // 「wrapper が出現するまで」→「全 wrapper に svg が入るまで」の二段で待つ。
    const hasWrappers = await page
        .waitForSelector('.mermaid-wrapper', { timeout: 10_000 })
        .then(() => true)
        .catch(() => false);
    if (hasWrappers) {
        await page
            .waitForFunction(
                () => {
                    const wrappers = document.querySelectorAll('.mermaid-wrapper');
                    return (
                        wrappers.length > 0 &&
                        [...wrappers].every((wrapper) => wrapper.querySelector('svg'))
                    );
                },
                undefined,
                { timeout: 30_000 }
            )
            .catch(() => {});
    }
    await page.waitForLoadState('networkidle').catch(() => {});

    const findings = await page.evaluate(({ darkCardBg, cardHero }) => {
        const results = [];
        const push = (level, rule, detail) => results.push({ level, rule, detail });

        const hero = document.querySelector('.hero');
        if (hero) {
            const cs = getComputedStyle(hero);
            const viewportHeight = window.innerHeight;
            const heroHeight = Math.round(hero.getBoundingClientRect().height);
            const stretched =
                Math.abs(heroHeight - viewportHeight) <= 2 || cs.minHeight === `${viewportHeight}px`;
            if (stretched) {
                push(
                    cardHero ? 'warn' : 'info',
                    '.hero min-height:100vh',
                    `ヒーローがビューポート高（${viewportHeight}px）まで伸びている。全画面ヒーローなら意図どおり。カード型なら min-height:0 / display:block を指定する（--card-hero で警告に昇格）`
                );
            }
            if (cs.display === 'flex' && cs.justifyContent === 'center') {
                push(
                    cardHero ? 'warn' : 'info',
                    '.hero flex centering',
                    'globals の display:flex + justify-content:center が有効（中身が上下中央に寄る。カード型ヒーローなら要リセット）'
                );
            }
            if (cs.overflow === 'hidden') {
                push('info', '.hero overflow:hidden', 'globals の overflow:hidden が残存（影やはみ出し要素が切れる）');
            }
        }

        const sections = [...document.querySelectorAll('section')];
        if (sections[0] && getComputedStyle(sections[0]).paddingTop === '80px') {
            push('warn', 'section padding-top:5rem', 'globals の section { padding-top: 5rem } が残存');
        }
        if (sections[1] && parseFloat(getComputedStyle(sections[1]).borderTopWidth) > 0) {
            push('info', 'section + section border-top', 'globals の区切り線が残存（ライト配色ページでは浮くことが多い）');
        }

        const main = document.querySelector('main');
        if (main && getComputedStyle(main).maxWidth === '1100px') {
            push('warn', 'main max-width:1100px', 'globals の main 幅制限が残存');
        }

        const wrappers = [...document.querySelectorAll('.mermaid-wrapper')];
        wrappers.forEach((wrapper, index) => {
            const cs = getComputedStyle(wrapper);
            const svg = wrapper.querySelector('svg');
            if (cs.backgroundColor === darkCardBg) {
                push('info', `.mermaid-wrapper[${index}] dark card`, 'globals のダークカード背景（ライト配色ページなら要リセット）');
            }
            if (cs.maxWidth === '760px') {
                push('info', `.mermaid-wrapper[${index}] max-width:760px`, 'globals の 760px 制限（図が縮小され文字が小さくなる）');
            }
            if (!svg) {
                push('warn', `.mermaid-wrapper[${index}] no svg`, '図が描画されていない');
                return;
            }
            let scroller = wrapper;
            for (let node = wrapper; node; node = node.parentElement) {
                const overflowX = getComputedStyle(node).overflowX;
                if (overflowX === 'auto' || overflowX === 'scroll') {
                    scroller = node;
                    break;
                }
            }
            const leftOverflow = Math.round(
                svg.getBoundingClientRect().left - scroller.getBoundingClientRect().left + scroller.scrollLeft
            );
            if (leftOverflow < 0) {
                push(
                    'warn',
                    `.mermaid-wrapper[${index}] left clipped`,
                    `図の左端が ${-leftOverflow}px はみ出しており横スクロールでも到達できない（overflow コンテナ内の中央寄せが原因）`
                );
            }
        });

        return results;
    }, { darkCardBg: GLOBAL_DARK_CARD_BG, cardHero: cardHeroMode });

    const warnings = findings.filter((f) => f.level === 'warn');
    console.log(`\n${url}`);
    if (findings.length === 0) {
        console.log('✔ globals 干渉は検出されませんでした');
    } else {
        for (const finding of findings) {
            const mark = finding.level === 'warn' ? '✖' : '·';
            console.log(`${mark} [${finding.rule}] ${finding.detail}`);
        }
    }
    process.exitCode = warnings.length > 0 ? 1 : 0;
} finally {
    await browser.close();
}

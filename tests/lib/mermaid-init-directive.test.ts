import { describe, it, expect, beforeAll } from 'bun:test';

/**
 * `%%{init}%%` ディレクティブの「シングルクォートで黙って壊れる」挙動を、
 * 実際に同梱している mermaid で再現して固定する契約テスト。
 *
 * fix-mermaid スキルはこの挙動を前提に「JSON 値にシングルクォートを書くな」と指示している。
 * mermaid 側の実装が変わってこの前提が崩れた場合、スキルの記述も更新する必要があるため、
 * ドキュメントではなくテストで検知できるようにする。
 *
 * 注: happydom-setup.ts が `mock.module('mermaid', ...)` で 'mermaid' 指定子を
 * スタブ化しているため、ここでは実体ファイルを直接 import して本物のレンダラーを使う。
 */

const GLOBAL_DARK_MAIN_BKG = '#0f2040';
const PAGE_LIGHT_MAIN_BKG = '#eff6ff';

const chartWith = (fontFamily: string) =>
    `%%{init: {"theme":"base","themeVariables":{"mainBkg":"${PAGE_LIGHT_MAIN_BKG}","fontFamily":${JSON.stringify(fontFamily)}}}}%%
flowchart LR
    A["ノードA"] --> B["ノードB"]`;

type Mermaid = { initialize: (config: object) => void; render: (id: string, chart: string) => Promise<{ svg: string }> };
let mermaid: Mermaid;

/** 生成された SVG からノード矩形の fill を取り出す。 */
function nodeFill(svg: string): string | undefined {
    return svg.match(/\.node rect[^{]*\{[^}]*?fill:([^;]+);/)?.[1]?.trim();
}

beforeAll(async () => {
    mermaid = (await import('mermaid/dist/mermaid.esm.mjs')).default as unknown as Mermaid;
    // components/Mermaid.tsx と同じ「アプリ全体のダークテーマ既定」を再現する
    mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        securityLevel: 'loose',
        themeVariables: { mainBkg: GLOBAL_DARK_MAIN_BKG },
    });
});

describe('%%{init}%% directive contract (実際の mermaid で検証)', () => {
    it('applies the page theme when the JSON contains no single quotes', async () => {
        const { svg } = await mermaid.render('probe-clean', chartWith('Noto Sans JP, sans-serif'));
        expect(nodeFill(svg)).toBe(PAGE_LIGHT_MAIN_BKG);
    });

    it('silently falls back to the global dark theme when a value contains single quotes', async () => {
        const { svg } = await mermaid.render('probe-quoted', chartWith("'Noto Sans JP', sans-serif"));
        // エラーは投げられない。だからこそ目視でしか気づけず再発を繰り返してきた。
        expect(nodeFill(svg)).toBe(GLOBAL_DARK_MAIN_BKG);
    });
});

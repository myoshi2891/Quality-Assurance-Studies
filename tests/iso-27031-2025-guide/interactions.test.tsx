import { describe, expect, it, afterEach, beforeEach } from 'bun:test';
import React from 'react';
import { render, fireEvent, cleanup, act } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot, type Root } from 'react-dom/client';
import { sourceModule } from '../helpers/source-module';
import inventory from '../../docs/migration-inventory/iso-27031-2025-guide.json';

const base = 'app/iso-27031-2025-guide';

// Expected alternatives are fixed independently of the component under test.
const expectedAlternatives: Record<string, string> = {
  'mmd-0': 'ISO/IEC 27031:2025 図 0：RTOとRPOの概念図。最後に確実に残っているデータの時点（例：直近のバックアップ）から障害発生までの間隔が「RPO：失ってよいデータの時間幅」、障害発生からICTサービス復旧までの間隔が「RTO：止まってよい時間」を示す。',
  'mmd-1': 'ISO/IEC 27031:2025 図 1：関連規格マップ。事業継続の規格（ISO 22301 要求事項、ISO 22313 ガイダンス）、情報セキュリティの規格（ISO/IEC 27001 / 27002、ISO/IEC 27005 リスク管理、ISO/IEC 27035-1 インシデント対応）と、その結節点となる ISO/IEC 27031:2025 IRBC の関係を示す。',
  'mmd-2': 'ISO/IEC 27031:2025 図 2：改訂の変遷。2011年版（自社ICT中心の準備）から、環境の変化（クラウド・SaaS・外部依存の拡大）を経て、2025年版（外部サービスへの依存も含めて準備）となり、ISO 27001 / ISO 22301と統合して運用する流れを示す。',
  'mmd-3': 'ISO/IEC 27031:2025 図 3：規格の章構成と全体の流れ。第6章 BCMへ統合する、第7章 事業側の期待を把握する、第8章 前提を決める（目的・RTO・RPO）、第9章 戦略を選ぶ、第10章 継続計画を作る、第11章 試験・演習・監査、第12章 最終MBCOの確定、第13章 経営層による評価へ進み、第13章から第6章へフィードバックで戻る。また、第11章の試験・演習・監査の学びを第9章の戦略と第10章の継続計画へ反映する。',
  'mmd-4': 'ISO/IEC 27031:2025 図 4：IRBCのBCM統合。経営・BCMの事業継続の目標、ISO/IEC 27005 リスクマネジメント、ISO/IEC 27035-1 インシデントマネジメント、BCM戦略のすべてが IRBC（ICT側の準備）へ入力され、ICTサービスの確実な復旧を実現する。',
  'mmd-5': 'ISO/IEC 27031:2025 図 5：事業側の期待の把握フロー。重要な事業プロセスから、BIA（止まったときの影響を評価）、重要なICTサービスの特定、依存関係の洗い出し（内部システム・ネットワーク・外部サービス）、契約面の確認（SLA・復旧に関する取り決め）へと進む。',
  'mmd-6': 'ISO/IEC 27031:2025 図 6：前提条件と目標の設定。事業が求める最低限の水準 MBCO から ICTサービスごとに分解し、何時間以内に戻すかの RTO 設定と、何分前のデータまで許容するかの RPO 設定を行い、設備冗長化・復旧能力を検討して、目標の合意（事業部門・ICT部門・経営層）に至る。',
  'mmd-7': 'ISO/IEC 27031:2025 図 7：IRBC戦略の6要素。IRBC戦略から、人材と知識、設備、技術、データ、プロセス、供給者（クラウド・委託先）の6つの柱へ展開される。',
  'mmd-8': 'ISO/IEC 27031:2025 図 8：RTO・RPOからクラウドDR方式を選ぶ判断フロー。RTOはどれくらい？の問いから、数時間以上でもよい場合は Backup and Restore（Cold）、数十分程度なら Pilot Light、数分程度なら Warm Standby（Warm）、ゼロに近いなら Multi-site active/active（Hot）へ分岐し、それぞれ RPO を満たせるか検討し、満たせる場合は候補として採用し、満たせない場合はデータ複製方式を見直す。',
  'mmd-9': 'ISO/IEC 27031:2025 図 9：ICT継続計画の発動シーケンス。監視・運用担当の異常検知から、インシデント責任者への第一報、影響確認と発動基準チェック、経営層への計画発動進言と発動承認、復旧組織への手順書に基づく復旧開始指示、復旧完了報告、経営層へのサービス復旧報告の一連の流れを示す。',
  'mmd-10': 'ISO/IEC 27031:2025 図 10：試験・演習・監査のPDCA。試験・演習の計画から、演習の実施、結果の評価（RTO・RPOを満たしたか）、学びの整理、戦略・計画の改善へと循環する。',
  'mmd-11': 'ISO/IEC 27031:2025 図 11：最終MBCOの確定と評価。試験・演習・監査の結果から、実際に達成できる水準の把握、最終MBCOの確定、経営層によるIRBCの評価へと進み、課題があれば戦略・計画・投資の見直し、問題なければ継続的な運用と定期見直しへ進む。',
  'mmd-12': 'ISO/IEC 27031:2025 図 12：導入ストーリーの例。事業部門の期待を聞くことから、決済：数分・サイト：1時間の目標設定、決済：複数拠点・サイト：縮小版待機の戦略選択、計画・手順書の作成、半期ごとの演習実施、経営層が評価しMBCO確定に至るストーリーを示す。',
  'mmd-13': 'ISO/IEC 27031:2025 図 13：次の一歩の学習ロードマップ。1. 本ガイドで全体像をつかむ、2. 正式版の規格を入手し第6〜13章を確認、3. 自社の重要ICTサービスでRTO・RPOを仮置き、4. 既存のISO 27001・ISO 22301の運用と接続、5. 小さな演習から開始し結果を経営層へ報告の順に進む。',
};

afterEach(cleanup);

it('shows the text alternative outside the image for every diagram only after rendering fails', () => {
    for (const { id } of inventory.diagrams) {
        let fail: (() => void) | undefined;
        const C = sourceModule(`${base}/Diagram.tsx`, { onMermaidChart: (_, onError) => { fail = onError; } }).default as React.ComponentType<{ id: string }>;
        const r = render(<C id={id} />);
        const image = r.getByRole('img');
        const expected = expectedAlternatives[id]!;
        expect(expected).toBeString();
        expect(image.getAttribute('aria-label')).toBe(expected);
        expect(r.queryByRole('alert')).toBeNull();
        expect(image.nextElementSibling).toBeNull();
        expect(fail).toBeFunction();
        act(() => fail!());
        const alert = r.getByRole('alert');
        expect(alert.closest('[role="img"]')).toBeNull();
        const explanation = alert.nextElementSibling!;
        expect(explanation?.textContent).toBe(expected);
        expect(explanation.closest('[role="img"],noscript,[hidden]')).toBeNull();
        expect(image.getAttribute('aria-label')).toBe(expected);
        r.unmount();
    }
});

const nav = () => sourceModule(`${base}/NavBar.tsx`).default as React.ComponentType;

const headingList = () => {
    const headings = document.createElement('div');
    headings.innerHTML = inventory.groups.toc.items.map(html => `<h2 id="${html.match(/data-target="([^"]+)"/)![1]}"></h2>`).join('');
    document.body.append(headings);
    return headings;
};

const place = (headings: Element, index: number) => Array.from(headings.children).forEach((h, i) => {
    h.getBoundingClientRect = () => ({ top: (i - index) * 300 } as DOMRect);
});

const current = (root: Element) => root.querySelector('[aria-current="location"]')?.getAttribute('data-target');

let queued: FrameRequestCallback[] = [];
const flush = () => {
    const callbacks = queued;
    queued = [];
    callbacks.forEach(callback => callback(0));
};

const realFrame = globalThis.requestAnimationFrame;
const realCancel = globalThis.cancelAnimationFrame;

const scrollTo = (scrollHeight: number, scrollY = 0) => {
    Object.defineProperty(document.documentElement, 'scrollHeight', { configurable: true, value: scrollHeight });
    Object.defineProperty(window, 'scrollY', { configurable: true, value: scrollY });
};

const realScrollY = Object.getOwnPropertyDescriptor(window, 'scrollY');
const restore = () => {
    delete (document.documentElement as unknown as { scrollHeight?: number }).scrollHeight;
    delete (window as unknown as { scrollY?: number }).scrollY;
    if (realScrollY) Object.defineProperty(window, 'scrollY', realScrollY);
};

describe('source TOC interactions', () => {
    beforeEach(() => {
        queued = [];
        scrollTo(window.innerHeight + 5000);
        globalThis.requestAnimationFrame = (callback: FrameRequestCallback) => {
            queued.push(callback);
            return queued.length;
        };
        globalThis.cancelAnimationFrame = () => {
            queued = [];
        };
    });

    afterEach(() => {
        restore();
        globalThis.requestAnimationFrame = realFrame;
        globalThis.cancelAnimationFrame = realCancel;
    });

    it('opens and closes by link and Escape, making the closed mobile TOC inert immediately', () => {
        const original = window.matchMedia;
        let change = undefined as (() => void) | undefined;
        const query = {
            matches: true,
            addEventListener: (_type: string, callback: () => void) => {
                change = callback;
            },
            removeEventListener: (_type: string, callback: () => void) => {
                expect(callback as unknown).toBe(change);
                change = undefined;
            },
        };
        window.matchMedia = (() => query) as unknown as typeof window.matchMedia;
        try {
            const C = nav();
            const r = render(<C />);
            const button = r.getByRole('button', { name: '目次を開く' });
            const sidebar = r.container.querySelector('.sidebar')!;
            expect(button.getAttribute('aria-expanded')).toBe('false');
            expect(sidebar.hasAttribute('inert')).toBe(true);

            fireEvent.click(button);
            expect(button.getAttribute('aria-expanded')).toBe('true');
            expect(sidebar.hasAttribute('inert')).toBe(false);
            expect(r.container.querySelector('.sidebar.open')).not.toBeNull();

            fireEvent.click(r.container.querySelector('.sidebar a')!);
            expect(button.getAttribute('aria-expanded')).toBe('false');
            expect(sidebar.hasAttribute('inert')).toBe(true);

            fireEvent.click(button);
            fireEvent.keyDown(document, { key: 'Escape' });
            expect(button.getAttribute('aria-expanded')).toBe('false');
            expect(document.activeElement).toBe(button);
            expect(sidebar.hasAttribute('inert')).toBe(true);

            query.matches = false;
            act(() => change?.());
            expect(sidebar.hasAttribute('inert')).toBe(false);

            query.matches = true;
            act(() => change?.());
            expect(sidebar.hasAttribute('inert')).toBe(true);

            r.unmount();
            expect(change).toBeUndefined();
        } finally {
            window.matchMedia = original;
        }
    });

    it('observes all 33 source headings, marks active location from measured positions and disconnects', () => {
        const previous = globalThis.IntersectionObserver;
        let callback: IntersectionObserverCallback = () => {};
        const observed: Element[] = [];
        let disconnected = false;
        globalThis.IntersectionObserver = class {
            constructor(cb: IntersectionObserverCallback, options: IntersectionObserverInit) {
                callback = cb;
                expect(options.rootMargin).toBe('-15% 0px -75% 0px');
            }
            observe(n: Element) {
                observed.push(n);
            }
            disconnect() {
                disconnected = true;
            }
        } as unknown as typeof IntersectionObserver;

        const headings = headingList();
        place(headings, 0);
        try {
            const C = nav();
            const r = render(<C />);
            expect(observed.map(n => n.id)).toEqual(Array.from(headings.children).map(n => n.id));
            const sidebar = r.container.querySelector('.sidebar') as HTMLElement;
            sidebar.getBoundingClientRect = () => ({ top: 0, bottom: 600, height: 600 } as DOMRect);
            (r.container.querySelectorAll('.sidebar a')[3] as HTMLElement).getBoundingClientRect = () => ({ top: 1000, bottom: 1020 } as DOMRect);
            place(headings, 3);
            act(() => {
                callback([{ isIntersecting: true, target: observed[3] } as IntersectionObserverEntry], {} as IntersectionObserver);
                flush();
            });
            expect(current(r.container)).toBe(observed[3]!.id);
            expect(sidebar.scrollTop).toBe(700);
            r.unmount();
            expect(disconnected).toBe(true);
        } finally {
            headings.remove();
            globalThis.IntersectionObserver = previous;
        }
    });

    it('re-measures when a diagram resizes, without any other notification', () => {
        const previous = globalThis.ResizeObserver;
        let notify: ResizeObserverCallback = () => {};
        const observed: Element[] = [];
        let disconnected = false;
        globalThis.ResizeObserver = class {
            constructor(cb: ResizeObserverCallback) {
                notify = cb;
            }
            observe(n: Element) {
                observed.push(n);
            }
            unobserve() {}
            disconnect() {
                disconnected = true;
            }
        } as unknown as typeof ResizeObserver;

        const headings = headingList();
        place(headings, 0);
        const diagram = document.createElement('div');
        diagram.className = 'mermaid-diagram';
        document.body.append(diagram);
        try {
            const C = nav();
            const r = render(<C />);
            expect(observed).toContain(diagram);
            place(headings, 2);
            act(() => {
                notify([], {} as ResizeObserver);
                flush();
            });
            expect(current(r.container)).toBe(headings.children[2]!.id);
            r.unmount();
            expect(disconnected).toBe(true);
        } finally {
            diagram.remove();
            headings.remove();
            globalThis.ResizeObserver = previous;
        }
    });

    it('makes main.main inert only while the mobile TOC is open and restores prior state on close or unmount', () => {
        const original = window.matchMedia;
        let change = undefined as (() => void) | undefined;
        const query = {
            matches: true,
            addEventListener: (_type: string, callback: () => void) => {
                change = callback;
            },
            removeEventListener: () => {
                change = undefined;
            },
        };
        window.matchMedia = (() => query) as unknown as typeof window.matchMedia;
        const main = document.createElement('main');
        main.className = 'main';
        document.body.append(main);
        try {
            const C = nav();
            const r = render(<C />);
            const button = r.getByRole('button', { name: '目次を開く' });
            expect(main.hasAttribute('inert')).toBe(false);

            fireEvent.click(button);
            expect(main.hasAttribute('inert')).toBe(true);

            // Switching to desktop width clears inert on main
            query.matches = false;
            act(() => change?.());
            expect(main.hasAttribute('inert')).toBe(false);

            // Back to mobile while open makes main inert again
            query.matches = true;
            act(() => change?.());
            expect(main.hasAttribute('inert')).toBe(true);

            fireEvent.keyDown(document, { key: 'Escape' });
            expect(main.hasAttribute('inert')).toBe(false);

            // Unmounting while open restores main
            fireEvent.click(button);
            expect(main.hasAttribute('inert')).toBe(true);
            r.unmount();
            expect(main.hasAttribute('inert')).toBe(false);

            // If main was already inert before opening, closing preserves prior inert state
            main.setAttribute('inert', '');
            const r2 = render(<C />);
            const button2 = r2.getByRole('button', { name: '目次を開く' });
            fireEvent.click(button2);
            fireEvent.click(r2.getByRole('button', { name: '目次を閉じる' }));
            expect(main.hasAttribute('inert')).toBe(true);
            r2.unmount();
        } finally {
            main.remove();
            window.matchMedia = original;
        }
    });

    for (const modifier of ['metaKey', 'ctrlKey', 'shiftKey', 'altKey'] as const) {
        it(`leaves the mobile TOC open on a ${modifier} link click`, () => {
            const original = window.matchMedia;
            window.matchMedia = (() => ({
                matches: true,
                addEventListener: () => {},
                removeEventListener: () => {},
            })) as unknown as typeof window.matchMedia;
            try {
                const C = nav();
                const r = render(<C />);
                fireEvent.click(r.getByRole('button', { name: '目次を開く' }));
                const link = r.container.querySelectorAll('.sidebar a')[2]!;
                fireEvent.click(link, { [modifier]: true });
                expect(r.getByRole('button', { name: '目次を閉じる' }).getAttribute('aria-expanded')).toBe('true');
                r.unmount();
            } finally {
                window.matchMedia = original;
            }
        });
    }
});

describe('IRBC checklist progress', () => {
    const checklist = () => sourceModule(`${base}/Section18.tsx`).default as React.ComponentType;

    it('labels all nine checkboxes and updates count, progress bar width and completion banner', () => {
        const C = checklist();
        const r = render(<C />);
        const boxes = r.getAllByRole('checkbox') as HTMLInputElement[];
        expect(boxes).toHaveLength(9);
        const count = r.container.querySelector('.cp-count')!;
        const fill = r.container.querySelector('.cp-fill') as HTMLElement;
        const done = r.container.querySelector('.cp-done') as HTMLElement;

        expect(count.textContent).toBe('0 / 9');
        expect(done.hidden).toBe(true);
        for (const box of boxes) {
            expect(box.labels?.[0]?.textContent?.trim().length).toBeGreaterThan(5);
        }

        for (const [i, box] of boxes.entries()) {
            fireEvent.click(box);
            const k = i + 1;
            expect(count.textContent).toBe(`${k} / 9`);
            expect(fill.style.width).toBe(`${(k / 9) * 100}%`);
            expect(done.hidden).toBe(k !== 9);
        }

        // Unchecking one hides completion banner and updates count/width
        fireEvent.click(boxes[0]!);
        expect(count.textContent).toBe('8 / 9');
        expect(fill.style.width).toBe(`${(8 / 9) * 100}%`);
        expect(done.hidden).toBe(true);
    });

    it('keeps progress state isolated per Section18 instance', () => {
        const C = checklist();
        const r = render(
            <>
                <C />
                <C />
            </>,
        );
        fireEvent.click(r.getAllByRole('checkbox')[0]!);
        expect(Array.from(r.container.querySelectorAll('.cp-count'), n => n.textContent)).toEqual(['1 / 9', '0 / 9']);
    });
});

for (const development of [false, true]) {
    it(`hydrates the real page without DOM warnings, with functional TOC and checklist (development=${development})`, async () => {
        const Page = sourceModule(`${base}/page.tsx`, { development }).default as React.ComponentType;
        const host = document.createElement('div');
        host.innerHTML = renderToString(<Page />);
        document.body.append(host);
        const warnings: unknown[][] = [];
        const errors: unknown[] = [];
        const originalError = console.error;
        console.error = (...args: unknown[]) => warnings.push(args);
        let root: Root | undefined;
        try {
            await act(async () => {
                root = hydrateRoot(host, <Page />, { onRecoverableError: e => errors.push(e) });
            });
            const button = host.querySelector('.nav-toggle')!;
            await act(async () => {
                fireEvent.click(button);
            });
            expect(button.getAttribute('aria-expanded')).toBe('true');
            await act(async () => {
                fireEvent.keyDown(document, { key: 'Escape' });
                fireEvent.click(host.querySelector('#irbc-checklist input[type="checkbox"]')!);
            });
            expect(host.querySelector('.cp-count')?.textContent).toBe('1 / 9');
            expect(errors).toEqual([]);
            expect(warnings).toEqual([]);
            expect(
                Array.from(host.querySelectorAll('table,thead,tbody,tr')).flatMap(n =>
                    Array.from(n.childNodes).filter(c => c.nodeType === Node.TEXT_NODE),
                ),
            ).toHaveLength(0);
        } finally {
            if (root) await act(async () => root!.unmount());
            console.error = originalError;
            host.remove();
        }
    });
}

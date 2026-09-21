import { afterAll, afterEach, beforeAll, beforeEach, describe, it, expect, mock } from 'bun:test';
import { render, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page, {
    DIAGRAM_OVERVIEW,
} from '../../app/istqb-ctal-ta-chapter1-test-process/page';
import NavBar from '../../app/istqb-ctal-ta-chapter1-test-process/NavBar';

afterEach(() => cleanup());

let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;
const renderedCharts: string[] = [];

beforeEach(() => {
    renderedCharts.length = 0;
});

beforeAll(() => {
    originalMermaidRender = mermaid.render;
    originalIntersectionObserver = window.IntersectionObserver;
    const mermaidRenderMock = mock(async (_id: string, text: string) => {
        renderedCharts.push(text);
        return {
            svg: '<svg data-testid="mock-mermaid"></svg>',
            diagramType: 'flowchart',
        };
    });
    mermaid.render = mermaidRenderMock as unknown as typeof mermaid.render;

    const mockIntersectionObserver = mock(() => {
        return {
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null,
        };
    });
    window.IntersectionObserver = mockIntersectionObserver as unknown as typeof IntersectionObserver;
});

afterAll(() => {
    mermaid.render = originalMermaidRender;
    window.IntersectionObserver = originalIntersectionObserver;
});

describe('CTAL-TA v4.0 Chapter 1 - Category 1: Hero & Section 0 (Overview, Keywords, LO)', () => {
    it('renders hero title and meta chips correctly', () => {
        const { container } = render(<Page />);
        const kicker = container.querySelector('.kicker');
        expect(kicker).toBeDefined();
        expect(kicker?.textContent).toContain('ISTQB® Certified Tester Advanced Level Test Analyst (CTAL-TA) v4.0');

        const h1 = container.querySelector('h1');
        expect(h1).toBeDefined();
        expect(h1?.textContent).toContain('第1章:テストプロセスにおけるテストアナリストのタスク');
        expect(h1?.textContent).toContain('The Tasks of the Test Analyst in the Test Process');

        const subtitle = container.querySelector('.subtitle');
        expect(subtitle).toBeDefined();
        expect(subtitle?.textContent).toContain('初学者向け完全ガイド');

        const pills = container.querySelectorAll('.pill-row .pill');
        expect(pills.length).toBe(4);
        expect(pills[0]?.textContent).toBe('配点時間 225分 / 全1215分');
        expect(pills[1]?.textContent).toBe('前提: ISTQB Foundation Level');
        expect(pills[2]?.textContent).toBe('図解11点(Mermaid)');
        expect(pills[3]?.textContent).toBe('出典明記');
    });

    it('renders sidebar navigation with all anchor links and mobile toggle', () => {
        const { container } = render(<NavBar />);
        const brand = container.querySelector('.sidebar-brand');
        expect(brand?.textContent).toContain('ISTQB® CTAL-TA v4.0');

        const sub = container.querySelector('.sidebar-sub');
        expect(sub?.textContent).toContain('第1章:テストプロセスにおける');

        const navLinks = container.querySelectorAll('.sidebar a');
        expect(navLinks.length).toBeGreaterThanOrEqual(16);

        const hrefs = Array.from(navLinks).map((a) => a.getAttribute('href'));
        expect(hrefs).toContain('#overview');
        expect(hrefs).toContain('#keywords');
        expect(hrefs).toContain('#lo');
        expect(hrefs).toContain('#sec11');
        expect(hrefs).toContain('#sec12');
        expect(hrefs).toContain('#sec13');
        expect(hrefs).toContain('#checklist');
        expect(hrefs).toContain('#references');
    });

    it('renders Section 0: overview, Mermaid mmd-overview, keywords, LO table, and callouts', () => {
        const { container } = render(<Page />);
        const overviewSec = container.querySelector('#overview');
        expect(overviewSec).toBeDefined();

        const h2 = overviewSec?.querySelector('h2');
        expect(h2?.textContent).toBe('0. この章の全体像');

        // Mermaid mmd-overview diagram definition and rendering
        expect(DIAGRAM_OVERVIEW).toBeDefined();
        expect(DIAGRAM_OVERVIEW).toContain('flowchart LR');
        expect(DIAGRAM_OVERVIEW).toContain('1.1 SDLCにおけるテスト');
        expect(DIAGRAM_OVERVIEW).toContain('1.2 テスト活動への関与');
        expect(DIAGRAM_OVERVIEW).toContain('1.3 成果物に関するタスク');

        // Keywords
        const keywordsH3 = container.querySelector('#keywords');
        expect(keywordsH3?.textContent).toContain('0.1 キーワード');

        // LO Table
        const loH3 = container.querySelector('#lo');
        expect(loH3?.textContent).toContain('0.2 学習目標(Learning Objectives)と認知レベル');

        const loTable = overviewSec?.querySelector('table');
        expect(loTable).toBeDefined();
        const loRows = loTable?.querySelectorAll('tbody tr');
        expect(loRows?.length).toBe(12);

        // Verify first and K3 LO items
        expect(loRows?.[0]?.textContent).toContain('TA-1.1.1');
        expect(loRows?.[0]?.textContent).toContain('K2');
        expect(loRows?.[10]?.textContent).toContain('TA-1.3.6');
        expect(loRows?.[10]?.textContent).toContain('K3');

        // Callouts in Section 0
        const calloutSource = overviewSec?.querySelector('.callout-source');
        expect(calloutSource?.textContent).toContain('ISTQB® CTAL-TA Syllabus v4.0, Section 1');

        const calloutPractice = overviewSec?.querySelector('.callout-practice');
        expect(calloutPractice?.textContent).toContain('ベストプラクティス');
        expect(calloutPractice?.textContent).toContain('ISTQB® Glossary');
    });
});

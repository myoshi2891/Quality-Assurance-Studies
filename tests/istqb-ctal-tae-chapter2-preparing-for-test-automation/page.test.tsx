import { afterEach, beforeEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import fs from 'fs';
import path from 'path';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/istqb-ctal-tae-chapter2-preparing-for-test-automation.json';
import Page from '../../app/istqb-ctal-tae-chapter2-preparing-for-test-automation/page';
import NavBar, { TOC_LINKS } from '../../app/istqb-ctal-tae-chapter2-preparing-for-test-automation/NavBar';
import {
  DIAGRAM_POSITION,
  DIAGRAM_TESTABILITY,
  DIAGRAM_ENVS,
  DIAGRAM_SUT,
  DIAGRAM_TOOLS,
  DIAGRAM_SUMMARY,
} from '../../app/istqb-ctal-tae-chapter2-preparing-for-test-automation/diagrams';

// Mock Mermaid and IntersectionObserver
const renderedDiagrams: string[] = [];
let origMermaidRender: typeof mermaid.render;
let origIntersectionObserver: typeof window.IntersectionObserver;

beforeEach(() => {
  renderedDiagrams.length = 0;
  origMermaidRender = mermaid.render;
  mermaid.render = mock(async (_id: string, text: string) => {
    renderedDiagrams.push(text);
    return { svg: '<svg data-testid="mock-mermaid"></svg>', diagramType: 'flowchart' };
  }) as unknown as typeof mermaid.render;

  origIntersectionObserver = window.IntersectionObserver;
  window.IntersectionObserver = mock(() => ({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  })) as unknown as typeof IntersectionObserver;
});

afterEach(() => {
  cleanup();
  mermaid.render = origMermaidRender;
  window.IntersectionObserver = origIntersectionObserver;
});

describe('CTAL-TAE Chapter 2 Page Migration Spec', () => {
  describe('Hero Section Inventory', () => {
    it('renders hero eyebrow, title, subtitle, and 3 meta items matching inventory', () => {
      const { container } = render(<Page />);
      const eyebrow = container.querySelector('.hero-eyebrow');
      expect(eyebrow?.textContent?.trim()).toBe(inventory.hero.eyebrow);

      const title = container.querySelector('.hero-title');
      expect(title?.textContent?.replace(/\s+/g, '').trim()).toBe('PreparingforTestAutomationテスト自動化の準備');
      expect(title?.querySelector('br')).not.toBeNull();

      const subtitle = container.querySelector('.hero-subtitle');
      expect(subtitle?.textContent?.trim()).toBe(inventory.hero.subtitle);

      const metaItems = container.querySelectorAll('.hero-meta-item');
      expect(metaItems.length).toBe(inventory.hero.meta.length);

      inventory.hero.meta.forEach((expected, i) => {
        const item = metaItems[i];
        expect(item.querySelector('.hero-meta-label')?.textContent?.trim()).toBe(expected.label);
        expect(item.querySelector('.hero-meta-value')?.textContent?.trim()).toBe(expected.value);
      });
    });
  });

  describe('Sidebar Navigation (NavBar) Inventory', () => {
    it('renders sidebar brand, subtitle, and all navigation links matching inventory', () => {
      const { container } = render(<NavBar />);
      const brand = container.querySelector('.sidebar-brand');
      expect(brand?.textContent?.trim()).toBe(inventory.sidebar.brand);

      const sub = container.querySelector('.sidebar-sub');
      expect(sub?.textContent?.trim()).toBe(inventory.sidebar.sub);

      const topLinks = container.querySelectorAll('.sidebar > nav > ul > li > a');
      expect(topLinks.length).toBe(inventory.sidebar.links.length);

      inventory.sidebar.links.forEach((expected, i) => {
        const link = topLinks[i];
        expect(link.getAttribute('href')).toBe(expected.href);
        expect(link.getAttribute('data-target')).toBe(expected.dataTarget);
        expect(link.textContent?.trim()).toBe(expected.text);

        if (expected.children) {
          const parentLi = link.parentElement;
          const subLinks = parentLi?.querySelectorAll('ul a') ?? [];
          expect(subLinks.length).toBe(expected.children.length);
          expected.children.forEach((childExpected, j) => {
            const subLink = subLinks[j];
            expect(subLink.getAttribute('href')).toBe(childExpected.href);
            expect(subLink.getAttribute('data-target')).toBe(childExpected.dataTarget);
            expect(subLink.textContent?.trim()).toBe(childExpected.text);
          });
        }
      });
    });

    it('exposes TOC_LINKS constant synchronized with inventory', () => {
      expect(TOC_LINKS.length).toBe(inventory.sidebar.links.length);
      TOC_LINKS.forEach((item, i) => {
        expect(item.href).toBe(inventory.sidebar.links[i].href);
        expect(item.text).toBe(inventory.sidebar.links[i].text);
      });
    });

    it('handles mobile sidebar toggle button', () => {
      const { container } = render(<NavBar />);
      const toggleBtn = container.querySelector('#sidebarToggle');
      const sidebar = container.querySelector('#sidebar');
      expect(sidebar?.classList.contains('open')).toBe(false);

      if (toggleBtn) {
        fireEvent.click(toggleBtn);
        expect(sidebar?.classList.contains('open')).toBe(true);
        fireEvent.click(toggleBtn);
        expect(sidebar?.classList.contains('open')).toBe(false);
      }
    });
  });

  describe('Section 0 (Positioning & Learning Objectives) Inventory', () => {
    it('renders heading, intro, ordered list, diagram, learning objectives table, and keywords', () => {
      const { container } = render(<Page />);
      const sec0 = container.querySelector('#sec-0');
      expect(sec0).not.toBeNull();

      const h2 = sec0?.querySelector('h2');
      expect(h2?.textContent?.trim()).toBe(inventory.sections.sec0.heading);

      const intro = sec0?.querySelector('p');
      expect(intro?.textContent).toContain('Chapter 1では「なぜテスト自動化を行うのか」を学びました');

      const olItems = sec0?.querySelectorAll('ol > li') ?? [];
      expect(olItems.length).toBe(inventory.sections.sec0.orderedItems.length);
      inventory.sections.sec0.orderedItems.forEach((expected, i) => {
        expect(olItems[i].textContent?.replace(/\s+/g, ' ').trim()).toBe(
          expected.replace(/\s+/g, ' ').trim()
        );
      });

      const loTitle = sec0?.querySelectorAll('h3')[0];
      expect(loTitle?.textContent?.trim()).toBe(inventory.sections.sec0.loHeading);

      const rows = sec0?.querySelectorAll('table tbody tr') ?? [];
      expect(rows.length).toBe(inventory.sections.sec0.learningObjectives.length);
      inventory.sections.sec0.learningObjectives.forEach((expected, i) => {
        const cells = rows[i].querySelectorAll('td');
        expect(cells[0].textContent?.trim()).toBe(expected.id);
        expect(cells[1].textContent?.trim()).toBe(expected.level);
        expect(cells[2].textContent?.trim()).toBe(expected.content);
      });

      const kwTitle = sec0?.querySelectorAll('h3')[1];
      expect(kwTitle?.textContent?.trim()).toBe(inventory.sections.sec0.keywordsHeading);

      const kwItems = sec0?.querySelectorAll('ul li') ?? [];
      expect(kwItems.length).toBe(inventory.sections.sec0.keywords.length);
      inventory.sections.sec0.keywords.forEach((expected, i) => {
        expect(kwItems[i].textContent?.trim()).toBe(expected);
      });
    });
  });

  describe('Section 1 (Infrastructure & Testability) Inventory', () => {
    it('renders 1.1 testability, quote callout, diagram, 1.2 3 aspects table & callout, 1.3 components table & callout', () => {
      const { container } = render(<Page />);
      const sec1 = container.querySelector('#sec-1');
      expect(sec1).not.toBeNull();

      expect(sec1?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.sec1.heading);

      // 1.1
      const sec1_1 = sec1?.querySelector('#sec-1-1');
      expect(sec1_1?.textContent?.trim()).toBe(inventory.sections.sec1.sec1_1.heading);
      const calloutSource = sec1?.querySelector('.callout-source');
      expect(calloutSource?.textContent?.trim()).toBe(inventory.sections.sec1.sec1_1.calloutSource);

      // 1.2
      const sec1_2 = sec1?.querySelector('#sec-1-2');
      expect(sec1_2?.textContent?.trim()).toBe(inventory.sections.sec1.sec1_2.heading);
      const tables = sec1?.querySelectorAll('table') ?? [];
      expect(tables.length).toBe(2);

      const aspectRows = tables[0].querySelectorAll('tbody tr');
      expect(aspectRows.length).toBe(inventory.sections.sec1.sec1_2.aspects.length);
      inventory.sections.sec1.sec1_2.aspects.forEach((expected, i) => {
        const cells = aspectRows[i].querySelectorAll('td');
        expect(cells[0].textContent?.trim()).toBe(expected.aspect);
        expect(cells[1].textContent?.trim()).toBe(expected.description);
        expect(cells[2].textContent?.trim()).toBe(expected.example);
      });

      // 1.3
      const sec1_3 = sec1?.querySelector('#sec-1-3');
      expect(sec1_3?.textContent?.trim()).toBe(inventory.sections.sec1.sec1_3.heading);

      const compRows = tables[1].querySelectorAll('tbody tr');
      expect(compRows.length).toBe(inventory.sections.sec1.sec1_3.components.length);
      inventory.sections.sec1.sec1_3.components.forEach((expected, i) => {
        const cells = compRows[i].querySelectorAll('td');
        expect(cells[0].textContent?.replace(/\s+/g, ' ').trim()).toBe(
          expected.name.replace(/\s+/g, ' ').trim()
        );
        expect(cells[1].textContent?.trim()).toBe(expected.summary);
        expect(cells[2].textContent?.trim()).toBe(expected.configuration);
      });

      const practiceCallouts = sec1?.querySelectorAll('.callout-practice') ?? [];
      expect(practiceCallouts.length).toBe(2);
    });
  });

  describe('Section 2 (Test Environments) Inventory', () => {
    it('renders heading, intro, diagram, legend note, environments table, and best practices', () => {
      const { container } = render(<Page />);
      const sec2 = container.querySelector('#sec-2');
      expect(sec2).not.toBeNull();

      expect(sec2?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.sec2.heading);
      expect(sec2?.querySelector('.legend-note')?.textContent?.trim()).toBe(
        inventory.sections.sec2.legendNote
      );

      const sec2_1 = sec2?.querySelector('#sec-2-1');
      expect(sec2_1?.textContent?.trim()).toBe(inventory.sections.sec2.sec2_1.heading);

      const rows = sec2?.querySelectorAll('table tbody tr') ?? [];
      expect(rows.length).toBe(inventory.sections.sec2.sec2_1.environments.length);
      inventory.sections.sec2.sec2_1.environments.forEach((expected, i) => {
        const cells = rows[i].querySelectorAll('td');
        expect(cells[0].textContent?.trim()).toBe(expected.environment);
        expect(cells[1].textContent?.trim()).toBe(expected.purpose);
        expect(cells[2].textContent?.trim()).toBe(expected.tests);
        expect(cells[3].textContent?.trim()).toBe(expected.notes);
      });

      const practices = sec2?.querySelectorAll('.callout-practice li') ?? [];
      expect(practices.length).toBe(inventory.sections.sec2.sec2_1.practices.length);
    });
  });

  describe('Section 3 (SUT Analysis & Tool Evaluation) Inventory', () => {
    it('renders 3.1 SUT analysis, quote, 8 perspectives table, 3.2 tool evaluation comparison table, and 7 tech requirements', () => {
      const { container } = render(<Page />);
      const sec3 = container.querySelector('#sec-3');
      expect(sec3).not.toBeNull();

      expect(sec3?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.sec3.heading);

      // 3.1
      const sec3_1 = sec3?.querySelector('#sec-3-1');
      expect(sec3_1?.textContent?.trim()).toBe(inventory.sections.sec3.sec3_1.heading);
      expect(sec3?.querySelector('blockquote')?.textContent?.trim()).toBe(
        inventory.sections.sec3.sec3_1.quote
      );

      const tables = sec3?.querySelectorAll('table') ?? [];
      expect(tables.length).toBe(3);

      // SUT 8 perspectives
      const pRows = tables[0].querySelectorAll('tbody tr');
      expect(pRows.length).toBe(inventory.sections.sec3.sec3_1.perspectives.length);
      inventory.sections.sec3.sec3_1.perspectives.forEach((expected, i) => {
        const cells = pRows[i].querySelectorAll('td');
        expect(cells[0].textContent?.trim()).toBe(expected.number);
        expect(cells[1].textContent?.trim()).toBe(expected.aspect);
        expect(cells[2].textContent?.trim()).toBe(expected.question);
      });

      // 3.2 Comparison table
      const sec3_2 = sec3?.querySelector('#sec-3-2');
      expect(sec3_2?.textContent?.trim()).toBe(inventory.sections.sec3.sec3_2.heading);
      const compRows = tables[1].querySelectorAll('tbody tr');
      expect(compRows.length).toBe(inventory.sections.sec3.sec3_2.comparisonRows.length);
      inventory.sections.sec3.sec3_2.comparisonRows.forEach((expected, i) => {
        const cells = compRows[i].querySelectorAll('td');
        expect(cells[0].textContent?.trim()).toBe(expected.requirement);
        expect(cells[1].textContent?.trim()).toBe(expected.priority);
        expect(cells[2].textContent?.trim()).toBe(expected.toolA);
        expect(cells[3].textContent?.trim()).toBe(expected.toolB);
        expect(cells[4].textContent?.trim()).toBe(expected.toolC);
      });

      // Tech requirements table
      const techRows = tables[2].querySelectorAll('tbody tr');
      expect(techRows.length).toBe(inventory.sections.sec3.sec3_2.techRequirements.length);
      inventory.sections.sec3.sec3_2.techRequirements.forEach((expected, i) => {
        const cells = techRows[i].querySelectorAll('td');
        expect(cells[0].textContent?.trim()).toBe(expected.number);
        expect(cells[1].textContent?.trim()).toBe(expected.requirement);
        expect(cells[2].textContent?.trim()).toBe(expected.checkpoint);
      });

      const practiceCallouts = sec3?.querySelectorAll('.callout-practice') ?? [];
      expect(practiceCallouts.length).toBe(2);
    });
  });

  describe('Section 4 (Summary & Interactive Checklist) Inventory', () => {
    it('renders summary diagram, interactive checklist with progress bar and counter', () => {
      const { container } = render(<Page />);
      const sec4 = container.querySelector('#sec-4');
      expect(sec4).not.toBeNull();

      expect(sec4?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.sec4.heading);

      const checkboxes = sec4?.querySelectorAll('input[type="checkbox"]') ?? [];
      expect(checkboxes.length).toBe(inventory.sections.sec4.checklistItems.length);

      const progressCount = sec4?.querySelector('.cp-count');
      expect(progressCount?.textContent?.trim()).toBe('0 / 7 完了');

      // Click first checkbox
      if (checkboxes.length > 0) {
        fireEvent.click(checkboxes[0]);
        expect(progressCount?.textContent?.trim()).toBe('1 / 7 完了');
        const fill = sec4?.querySelector('.cp-bar-fill') as HTMLElement;
        expect(fill?.style.width).toBe('14%');

        fireEvent.click(checkboxes[0]);
        expect(progressCount?.textContent?.trim()).toBe('0 / 7 完了');
      }
    });
  });

  describe('Section 5 (References) and Footer Inventory', () => {
    it('renders 3 reference cards with external links and footer disclaimer', () => {
      const { container } = render(<Page />);
      const sec5 = container.querySelector('#sec-5');
      expect(sec5).not.toBeNull();

      expect(sec5?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.sec5.heading);
      expect(sec5?.querySelector('p')?.textContent?.trim()).toBe(inventory.sections.sec5.intro);

      const refCards = sec5?.querySelectorAll('.ref-card') ?? [];
      expect(refCards.length).toBe(inventory.sections.sec5.referenceCards.length);

      inventory.sections.sec5.referenceCards.forEach((expected, i) => {
        const card = refCards[i];
        expect(card.querySelector('.ref-card-title')?.textContent?.replace(/\s+/g, ' ').trim()).toBe(
          expected.title.replace(/\s+/g, ' ').trim()
        );
        const link = card.querySelector('a');
        expect(link?.getAttribute('href')).toBe(expected.url);
        expect(link?.getAttribute('target')).toBe('_blank');
        expect(link?.getAttribute('rel')).toContain('noopener');
      });

      expect(sec5?.querySelector('.ref-note')?.textContent?.trim()).toBe(
        inventory.sections.sec5.refNote
      );

      const footer = container.querySelector('.page-footer');
      expect(footer?.textContent?.trim()).toBe(inventory.footer.disclaimer);
    });
  });

  describe('Diagram Definitions & Theme Contract', () => {
    it('defines all 6 diagrams with MERMAID_CONFIG and without single quotes in init', () => {
      const diagrams = [
        DIAGRAM_POSITION,
        DIAGRAM_TESTABILITY,
        DIAGRAM_ENVS,
        DIAGRAM_SUT,
        DIAGRAM_TOOLS,
        DIAGRAM_SUMMARY,
      ];

      diagrams.forEach((diag) => {
        expect(diag).toContain('%%{init:');
        expect(diag).not.toMatch(/%%\{init:[^}]*'[^}]*\}%%/);
        expect(diag).toContain('"theme": "base"');
      });
    });
  });

  describe('CSS Scoping and Resets Contract', () => {
    it('contains page css with globals resets for .hero, table, and .mermaid-wrapper', () => {
      const cssPath = path.resolve(
        __dirname,
        '../../app/istqb-ctal-tae-chapter2-preparing-for-test-automation/ctal-tae-ch2.css'
      );
      expect(fs.existsSync(cssPath)).toBe(true);
      const css = fs.readFileSync(cssPath, 'utf-8');

      expect(css).toContain('.ctal-tae-ch2-page');
      expect(css).toContain('.ctal-tae-ch2-page .hero');
      expect(css).toContain('.ctal-tae-ch2-page .mermaid-wrapper');
      expect(css).toContain('.ctal-tae-ch2-page table');
      expect(css).toContain('!important');
    });
  });
});

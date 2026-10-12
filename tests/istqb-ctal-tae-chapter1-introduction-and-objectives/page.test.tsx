import { afterEach, beforeEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import fs from 'fs';
import path from 'path';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/istqb-ctal-tae-chapter1-introduction-and-objectives.json';
import Page from '../../app/istqb-ctal-tae-chapter1-introduction-and-objectives/page';
import NavBar, { TOC_GROUPS } from '../../app/istqb-ctal-tae-chapter1-introduction-and-objectives/NavBar';
import {
  DIAGRAM_ROADMAP,
  DIAGRAM_PURPOSE3,
  DIAGRAM_DECISION,
  DIAGRAM_WATERFALL,
  DIAGRAM_VMODEL,
  DIAGRAM_AGILE,
  DIAGRAM_TOOLSELECT,
} from '../../app/istqb-ctal-tae-chapter1-introduction-and-objectives/diagrams';

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

describe('CTAL-TAE Chapter 1 Page Migration Spec', () => {
  describe('Hero Section Inventory', () => {
    it('renders hero eyebrow, title, lead, and 4 badges matching inventory', () => {
      const { container } = render(<Page />);
      const eyebrow = container.querySelector('.hero-eyebrow');
      expect(eyebrow?.textContent?.trim()).toBe(inventory.hero.eyebrow);

      const title = container.querySelector('.hero h1');
      expect(title?.textContent?.replace(/\s+/g, ' ').trim()).toBe(inventory.hero.title);

      const lead = container.querySelector('.hero-lead');
      expect(lead?.textContent?.replace(/\s+/g, ' ').trim()).toBe(inventory.hero.lead);

      const badges = container.querySelectorAll('.hero-badge');
      expect(badges.length).toBe(inventory.hero.badges.length);

      inventory.hero.badges.forEach((expected, i) => {
        const badge = badges[i];
        expect(badge.textContent?.trim()).toContain(expected.text);
        const icon = badge.querySelector('i');
        expect(icon?.className).toContain(expected.icon);
      });
    });
  });

  describe('Sidebar Navigation (NavBar) Inventory', () => {
    it('renders sidebar brand, groups, and all navigation links matching inventory', () => {
      const { container } = render(<NavBar />);
      const brandText = container.querySelector('.sidebar-brand-text');
      expect(brandText?.textContent).toContain(inventory.sidebar.brand.title);
      expect(brandText?.textContent).toContain(inventory.sidebar.brand.subtitle);

      const groupTitles = container.querySelectorAll('.side-group-title');
      expect(groupTitles.length).toBe(inventory.sidebar.groups.length);

      const allLinks = container.querySelectorAll('.side-nav a');
      const expectedLinksCount = inventory.sidebar.groups.reduce((acc, g) => acc + g.links.length, 0);
      expect(allLinks.length).toBe(expectedLinksCount);

      let linkIdx = 0;
      inventory.sidebar.groups.forEach((group, gIdx) => {
        expect(groupTitles[gIdx].textContent?.trim()).toBe(group.title);
        group.links.forEach((expected) => {
          const link = allLinks[linkIdx++];
          expect(link.getAttribute('href')).toBe(expected.href);
          expect(link.textContent?.trim()).toBe(expected.text);
          const icon = link.querySelector('i');
          expect(icon?.className).toContain(expected.icon);
        });
      });
    });

    it('exposes TOC_GROUPS constant synchronized with inventory', () => {
      expect(TOC_GROUPS.length).toBe(inventory.sidebar.groups.length);
      TOC_GROUPS.forEach((group, i) => {
        expect(group.title).toBe(inventory.sidebar.groups[i].title);
        expect(group.links.length).toBe(inventory.sidebar.groups[i].links.length);
      });
    });

    it('handles mobile drawer toggle and close button', () => {
      const { container } = render(<NavBar />);
      const menuBtn = container.querySelector('#menuBtn');
      const sidebar = container.querySelector('#sidebar');
      const closeBtn = container.querySelector('#sidebarClose');

      expect(sidebar?.classList.contains('open')).toBe(false);

      if (menuBtn) {
        fireEvent.click(menuBtn);
        expect(sidebar?.classList.contains('open')).toBe(true);
      }

      if (closeBtn) {
        fireEvent.click(closeBtn);
        expect(sidebar?.classList.contains('open')).toBe(false);
      }
    });
  });

  describe('Section 0 (Chapter 1 Overview) Inventory', () => {
    it('renders s0 eyebrow, heading, paragraphs, diagram, and callout matching inventory', () => {
      const { container } = render(<Page />);
      const s0 = container.querySelector('#s0');
      expect(s0).not.toBeNull();

      const eyebrow = s0?.querySelector('.eyebrow');
      expect(eyebrow?.textContent?.trim()).toBe(inventory.sections.s0.eyebrow);

      const h2 = s0?.querySelector('h2');
      expect(h2?.textContent?.trim()).toBe(inventory.sections.s0.heading);

      const paragraphs = s0?.querySelectorAll('p:not(.cap)');
      expect(paragraphs?.length).toBeGreaterThanOrEqual(2);

      const diagramCard = s0?.querySelector('.diagram-card');
      expect(diagramCard?.querySelector('[data-diagram="roadmap"]')).not.toBeNull();
      expect(diagramCard?.querySelector('.cap')?.textContent?.trim()).toBe(
        inventory.sections.s0.diagram.caption
      );

      const callout = s0?.querySelector('.callout.note');
      expect(callout?.querySelector('.callout-title')?.textContent?.trim()).toBe(
        inventory.sections.s0.callout.title
      );
      expect(callout?.textContent).toContain('Foundation Level認定');
    });
  });

  describe('Section 1 (Keywords and LOs) Inventory', () => {
    it('renders keywords table and learning objectives table matching inventory', () => {
      const { container } = render(<Page />);
      const s1 = container.querySelector('#s1');
      expect(s1).not.toBeNull();

      expect(s1?.querySelector('.eyebrow')?.textContent?.trim()).toBe(inventory.sections.s1.eyebrow);
      expect(s1?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.s1.heading);

      const tables = s1?.querySelectorAll('table');
      expect(tables?.length).toBe(2);

      // Keywords table
      const kwRows = tables?.[0].querySelectorAll('tbody tr');
      expect(kwRows?.length).toBe(inventory.sections.s1.keywords.length);
      inventory.sections.s1.keywords.forEach((kw, i) => {
        const cells = kwRows?.[i].querySelectorAll('td');
        expect(cells?.[0].textContent?.trim()).toBe(kw.term);
        expect(cells?.[1].textContent?.trim()).toBe(kw.japanese);
        expect(cells?.[2].textContent?.trim()).toBe(kw.coverage);
      });

      // LOs table
      const loRows = tables?.[1].querySelectorAll('tbody tr');
      expect(loRows?.length).toBe(inventory.sections.s1.learningObjectives.length);
      inventory.sections.s1.learningObjectives.forEach((lo, i) => {
        const cells = loRows?.[i].querySelectorAll('td');
        expect(cells?.[0].textContent?.trim()).toBe(lo.id);
        expect(cells?.[1].textContent?.trim()).toBe(lo.objective);
        expect(cells?.[2].textContent?.trim()).toBe(lo.kLevel);
      });

      // Practice card
      const practice = s1?.querySelector('.practice-card');
      expect(practice?.querySelector('.practice-card-head span')?.textContent?.trim()).toBe(
        inventory.sections.s1.bestPractices.title
      );
      const pItems = practice?.querySelectorAll('.practice-list li');
      expect(pItems?.length).toBe(inventory.sections.s1.bestPractices.items.length);
    });
  });

  describe('Section 2 (Purpose, Advantages, Disadvantages, Limitations) Inventory', () => {
    it('renders purpose, activities, purpose3 diagram, advantages, disadvantages, limitations, decision diagram, and practice card', () => {
      const { container } = render(<Page />);
      const s2 = container.querySelector('#s2');
      expect(s2).not.toBeNull();

      expect(s2?.querySelector('.eyebrow')?.textContent?.trim()).toBe(inventory.sections.s2.eyebrow);
      expect(s2?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.s2.heading);

      // Activities
      const activitiesList = s2?.querySelectorAll('ul li');
      expect(activitiesList?.length).toBeGreaterThanOrEqual(3);

      // Diagrams
      expect(s2?.querySelector('[data-diagram="purpose3"]')).not.toBeNull();
      expect(s2?.querySelector('[data-diagram="decision"]')).not.toBeNull();

      // Tables (advantages & disadvantages)
      const tables = s2?.querySelectorAll('table');
      expect(tables?.length).toBe(2);

      const advRows = tables?.[0].querySelectorAll('tbody tr');
      expect(advRows?.length).toBe(inventory.sections.s2.advantages.length);

      const disRows = tables?.[1].querySelectorAll('tbody tr');
      expect(disRows?.length).toBe(inventory.sections.s2.disadvantages.length);

      // Limitations
      inventory.sections.s2.limitations.forEach((limit) => {
        expect(s2?.textContent).toContain(limit);
      });

      // Practice card
      const practice = s2?.querySelector('.practice-card');
      expect(practice?.querySelector('.practice-card-head span')?.textContent?.trim()).toBe(
        inventory.sections.s2.bestPractices.title
      );
    });
  });

  describe('Section 3 (SDLC Models and Automation) Inventory', () => {
    it('renders waterfall, v-model, agile diagrams, comparison table, and practice card', () => {
      const { container } = render(<Page />);
      const s3 = container.querySelector('#s3');
      expect(s3).not.toBeNull();

      expect(s3?.querySelector('.eyebrow')?.textContent?.trim()).toBe(inventory.sections.s3.eyebrow);
      expect(s3?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.s3.heading);

      // 3 diagrams
      expect(s3?.querySelector('[data-diagram="waterfall"]')).not.toBeNull();
      expect(s3?.querySelector('[data-diagram="vmodel"]')).not.toBeNull();
      expect(s3?.querySelector('[data-diagram="agile"]')).not.toBeNull();

      // Comparison table
      const compTable = s3?.querySelector('table');
      const compRows = compTable?.querySelectorAll('tbody tr');
      expect(compRows?.length).toBe(inventory.sections.s3.comparisonTable.length);

      inventory.sections.s3.comparisonTable.forEach((row, i) => {
        const th = compRows?.[i].querySelector('th');
        const tds = compRows?.[i].querySelectorAll('td');
        expect(th?.textContent?.trim()).toBe(row.perspective);
        expect(tds?.[0].textContent?.trim()).toBe(row.waterfall);
        expect(tds?.[1].textContent?.trim()).toBe(row.vmodel);
        expect(tds?.[2].textContent?.trim()).toBe(row.agile);
      });

      // Practice card
      const practice = s3?.querySelector('.practice-card');
      expect(practice?.querySelector('.practice-card-head span')?.textContent?.trim()).toBe(
        inventory.sections.s3.bestPractices.title
      );
    });
  });

  describe('Section 4 (Tool Selection Process) Inventory', () => {
    it('renders paragraphs, toolselect diagram, and practice card', () => {
      const { container } = render(<Page />);
      const s4 = container.querySelector('#s4');
      expect(s4).not.toBeNull();

      expect(s4?.querySelector('.eyebrow')?.textContent?.trim()).toBe(inventory.sections.s4.eyebrow);
      expect(s4?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.s4.heading);

      expect(s4?.querySelector('[data-diagram="toolselect"]')).not.toBeNull();

      const practice = s4?.querySelector('.practice-card');
      expect(practice?.querySelector('.practice-card-head span')?.textContent?.trim()).toBe(
        inventory.sections.s4.bestPractices.title
      );
      expect(practice?.querySelectorAll('.practice-list li')?.length).toBe(
        inventory.sections.s4.bestPractices.items.length
      );
    });
  });

  describe('Section 5 (Checklist and Exam Prep) Inventory', () => {
    it('renders interactive checklist, progress bar, counter, and warning callout', () => {
      const { container } = render(<Page />);
      const s5 = container.querySelector('#s5');
      expect(s5).not.toBeNull();

      expect(s5?.querySelector('.eyebrow')?.textContent?.trim()).toBe(inventory.sections.s5.eyebrow);
      expect(s5?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.s5.heading);

      const checkboxes = s5?.querySelectorAll('input[type="checkbox"]');
      expect(checkboxes?.length).toBe(inventory.sections.s5.checklist.length);

      const fill = s5?.querySelector('#checkFill') as HTMLElement;
      const label = s5?.querySelector('#checkLabel');

      expect(label?.textContent?.trim()).toBe('0 / 7 完了');

      if (checkboxes?.[0]) {
        fireEvent.click(checkboxes[0]);
        expect(label?.textContent?.trim()).toBe('1 / 7 完了');
        expect(fill?.style.width).toBe('14.285714285714285%');
      }

      const callout = s5?.querySelector('.callout.warn');
      expect(callout?.querySelector('.callout-title')?.textContent?.trim()).toBe(
        inventory.sections.s5.callout.title
      );
    });
  });

  describe('Section 6 (References) and Footer Inventory', () => {
    it('renders 2 external reference cards with target="_blank" and rel="noopener noreferrer", and footer', () => {
      const { container } = render(<Page />);
      const s6 = container.querySelector('#s6');
      expect(s6).not.toBeNull();

      expect(s6?.querySelector('.eyebrow')?.textContent?.trim()).toBe(inventory.sections.s6.eyebrow);
      expect(s6?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.s6.heading);

      const refCards = s6?.querySelectorAll('.ref-card');
      expect(refCards?.length).toBe(inventory.sections.s6.references.length);

      inventory.sections.s6.references.forEach((ref, i) => {
        const link = refCards?.[i].querySelector('a');
        expect(link?.getAttribute('href')).toBe(ref.url);
        expect(link?.getAttribute('target')).toBe('_blank');
        expect(link?.getAttribute('rel')).toContain('noopener');
      });

      const footer = container.querySelector('.site-footer');
      expect(footer?.textContent).toContain(inventory.footer.text);
    });
  });

  describe('Diagram Definitions & Theme Contract', () => {
    it('defines all 7 diagrams with MERMAID_CONFIG and without single quotes in init', () => {
      const diagrams = [
        DIAGRAM_ROADMAP,
        DIAGRAM_PURPOSE3,
        DIAGRAM_DECISION,
        DIAGRAM_WATERFALL,
        DIAGRAM_VMODEL,
        DIAGRAM_AGILE,
        DIAGRAM_TOOLSELECT,
      ];

      diagrams.forEach((d) => {
        expect(d).toContain('%%{init:');
        expect(d).not.toMatch(/%%\{init:[^}]*'[^}]*\}%%/);
        expect(d).toContain('classDef box');
        expect(d).toContain('classDef hub');
        expect(d).toContain('classDef done');
      });
    });

    it('overrides dark mainBkg and nodeTextColor in MERMAID_CONFIG and defines default class', () => {
      expect(DIAGRAM_ROADMAP).toContain('"mainBkg": "#fffdf8"');
      expect(DIAGRAM_ROADMAP).toContain('"nodeTextColor": "#2b2620"');
      expect(DIAGRAM_ROADMAP).toContain('"nodeBorder": "#c9bfa8"');
      expect(DIAGRAM_ROADMAP).toContain('classDef default fill:#fffdf8,stroke:#c9bfa8,color:#2b2620');
    });
  });

  describe('CSS Scoping and Resets Contract', () => {
    it('contains page css with globals resets for .hero, table, and .mermaid-wrapper', () => {
      const cssPath = path.resolve(
        __dirname,
        '../../app/istqb-ctal-tae-chapter1-introduction-and-objectives/ctal-tae-ch1.css'
      );
      expect(fs.existsSync(cssPath)).toBe(true);

      const css = fs.readFileSync(cssPath, 'utf8');
      expect(css).toContain('.ctal-tae-ch1-page');
      expect(css).toContain('.mermaid-wrapper');
      expect(css).toContain('max-width: none !important');
    });

    it('ensures main content is offset by sidebar width and sidebar respects disclaimer height', () => {
      const cssPath = path.resolve(
        __dirname,
        '../../app/istqb-ctal-tae-chapter1-introduction-and-objectives/ctal-tae-ch1.css'
      );
      const css = fs.readFileSync(cssPath, 'utf8');

      // Sidebar must respect header + disclaimer height
      expect(css).toContain('calc(60px + var(--disclaimer-height, 0px))');
      // Main must have margin-left: var(--sidebar-w) without being overridden by margin: 0 !important
      expect(css).toMatch(/main\.main[^}]*margin-left:\s*var\(--sidebar-w\)\s*!important/);
      // Mermaid nodes must have light background and contrast styling
      expect(css).toContain('.node:not(.box):not(.hub):not(.done) rect');
    });
  });
});

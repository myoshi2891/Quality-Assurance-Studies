import { afterEach, beforeEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/istqb-ctal-tae-chapter3-test-automation-architecture.json';
import Page from '../../app/istqb-ctal-tae-chapter3-test-automation-architecture/page';
import NavBar, { TOC_ITEMS } from '../../app/istqb-ctal-tae-chapter3-test-automation-architecture/NavBar';
import {
  DIAGRAM_OVERVIEW,
  DIAGRAM_GTAA,
  DIAGRAM_TAA_DESIGN,
  DIAGRAM_TAF_LAYERS,
  DIAGRAM_TAF_SCALING,
  DIAGRAM_APPROACHES,
  DIAGRAM_TDD_CYCLE,
  DIAGRAM_FLOW_MODEL,
  DIAGRAM_CHECKLIST,
} from '../../app/istqb-ctal-tae-chapter3-test-automation-architecture/diagrams';

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

describe('CTAL-TAE Chapter 3 Page Migration Spec', () => {
  describe('Hero Section Inventory', () => {
    it('renders hero eyebrow, title, subtitle, and meta items matching inventory', () => {
      const { container } = render(<Page />);
      const eyebrow = container.querySelector('.hero-eyebrow');
      expect(eyebrow?.textContent?.trim()).toBe(inventory.hero.eyebrow);

      const title = container.querySelector('.hero-title');
      expect(title?.textContent?.replace(/\s+/g, ' ').trim()).toBe(inventory.hero.title);

      const subtitle = container.querySelector('.hero-subtitle');
      expect(subtitle?.textContent?.trim()).toBe(inventory.hero.subtitle);

      const metaItems = container.querySelectorAll('.hero-meta-item');
      expect(metaItems.length).toBe(inventory.hero.meta.length);

      inventory.hero.meta.forEach((expected, i) => {
        const item = metaItems[i];
        const label = item.querySelector('.hero-meta-label')?.textContent?.trim();
        const value = item.querySelector('.hero-meta-value')?.textContent?.replace(/\s+/g, ' ').trim();
        expect(label).toBe(expected.label);
        expect(value).toBe(expected.value);
      });
    });
  });

  describe('TOC Navigation Inventory', () => {
    it('renders sidebar TOC links matching inventory exactly', () => {
      render(<NavBar />);
      const navLinks = screen.getAllByRole('link');
      expect(navLinks.length).toBe(inventory.tocLinks.length);

      inventory.tocLinks.forEach((expected, i) => {
        const link = navLinks[i];
        expect(link.getAttribute('href')).toBe(expected.href);
        expect(link.getAttribute('data-target')).toBe(expected.dataTarget);
        expect(link.textContent?.replace(/\s+/g, ' ').trim()).toBe(expected.text);
      });
    });

    it('exposes TOC_ITEMS constant synchronized with inventory', () => {
      expect(TOC_ITEMS.length).toBe(inventory.tocLinks.length);
      TOC_ITEMS.forEach((item, i) => {
        expect(item.id).toBe(inventory.tocLinks[i].dataTarget);
        expect(item.label).toBe(inventory.tocLinks[i].text);
      });
    });

    it('toggles mobile sidebar open state and handles backdrop click', () => {
      const { container } = render(<NavBar />);
      const toggle = container.querySelector('#sidebarToggle');
      const sidebar = container.querySelector('#sidebar');
      const backdrop = container.querySelector('#sidebarBackdrop');

      expect(sidebar?.classList.contains('open')).toBe(false);
      expect(toggle?.getAttribute('aria-expanded')).toBe('false');

      if (toggle) fireEvent.click(toggle);
      expect(sidebar?.classList.contains('open')).toBe(true);
      expect(toggle?.getAttribute('aria-expanded')).toBe('true');

      if (backdrop) fireEvent.click(backdrop);
      expect(sidebar?.classList.contains('open')).toBe(false);
      expect(toggle?.getAttribute('aria-expanded')).toBe('false');
    });
  });

  describe('Headings Inventory', () => {
    it('renders all headings in exact document order with proper IDs', () => {
      const { container } = render(<Page />);
      const renderedHeadings = Array.from(container.querySelectorAll('.main h2, .main h3, .main h4')).map((el) => ({
        level: el.tagName.toLowerCase(),
        id: el.getAttribute('id'),
        text: el.textContent?.replace(/\s+/g, ' ').trim(),
      }));

      expect(renderedHeadings.length).toBe(inventory.headings.length);
      inventory.headings.forEach((expected, i) => {
        expect(renderedHeadings[i].level).toBe(expected.level);
        expect(renderedHeadings[i].id).toBe(expected.id);
        expect(renderedHeadings[i].text).toBe(expected.text);
      });
    });
  });

  describe('Tables Inventory', () => {
    it('renders all 10 data tables with correct headers and row contents', () => {
      const { container } = render(<Page />);
      const tables = container.querySelectorAll('table.data-table');
      expect(tables.length).toBe(inventory.tables.length);

      inventory.tables.forEach((expectedTable, tableIdx) => {
        const tableEl = tables[tableIdx];
        const headers = Array.from(tableEl.querySelectorAll('thead th')).map((th) =>
          th.textContent?.replace(/\s+/g, ' ').trim()
        );
        expect(headers).toEqual(expectedTable.headers);

        const rows = Array.from(tableEl.querySelectorAll('tbody tr')).map((tr) =>
          Array.from(tr.querySelectorAll('td')).map((td) => td.textContent?.replace(/\s+/g, ' ').trim())
        );
        expect(rows.length).toBe(expectedTable.rowCount);
        expect(rows).toEqual(expectedTable.rows);
      });
    });
  });

  describe('Mermaid Diagrams Inventory & Syntax', () => {
    it('defines all 9 diagrams with MERMAID_CONFIG header and matching source logic', () => {
      const diagrams = [
        DIAGRAM_OVERVIEW,
        DIAGRAM_GTAA,
        DIAGRAM_TAA_DESIGN,
        DIAGRAM_TAF_LAYERS,
        DIAGRAM_TAF_SCALING,
        DIAGRAM_APPROACHES,
        DIAGRAM_TDD_CYCLE,
        DIAGRAM_FLOW_MODEL,
        DIAGRAM_CHECKLIST,
      ];
      expect(diagrams.length).toBe(9);

      // Verify each diagram contains the init header with no single quotes
      diagrams.forEach((diag) => {
        expect(diag).toContain('%%{init:');
        expect(diag).not.toMatch(/'/); // fix-mermaid rule: no single quotes
      });

      // Verify diagrams contain core keywords from original diagrams
      expect(DIAGRAM_OVERVIEW).toContain('OV1');
      expect(DIAGRAM_GTAA).toContain('GTAA');
      expect(DIAGRAM_TAA_DESIGN).toContain('TAA');
      expect(DIAGRAM_TAF_LAYERS).toContain('Test Scripts');
      expect(DIAGRAM_TAF_SCALING).toContain('Core Libraries');
      expect(DIAGRAM_APPROACHES).toContain('Capture/Playback');
      expect(DIAGRAM_TDD_CYCLE).toContain('Red');
      expect(DIAGRAM_FLOW_MODEL).toContain('Flow Model');
      expect(DIAGRAM_CHECKLIST).toContain('TAA設計を始める');
    });

    it('renders all 9 mermaid container elements in the DOM', () => {
      const { container } = render(<Page />);
      const containers = container.querySelectorAll('.mermaid-container');
      expect(containers.length).toBe(9);
    });
  });

  describe('Callouts Inventory', () => {
    it('renders all 5 best practice callouts with exact list items', () => {
      const { container } = render(<Page />);
      const callouts = container.querySelectorAll('.callout');
      expect(callouts.length).toBe(inventory.callouts.length);

      inventory.callouts.forEach((expectedCallout, calloutIdx) => {
        const calloutEl = callouts[calloutIdx];
        const label = calloutEl.querySelector('.callout-label')?.textContent?.trim();
        expect(label).toBe(expectedCallout.label);

        const items = Array.from(calloutEl.querySelectorAll('li')).map((li) =>
          li.textContent?.replace(/\s+/g, ' ').trim()
        );
        expect(items).toEqual(expectedCallout.items);
      });
    });
  });

  describe('References Section & Links Security', () => {
    it('renders references table with secure external links', () => {
      const { container } = render(<Page />);
      const refSection = container.querySelector('#7-出典参考ソース');
      expect(refSection).not.toBeNull();

      const refTable = refSection?.parentElement?.querySelector('table.data-table:last-of-type') ||
        container.querySelectorAll('table.data-table')[9];
      expect(refTable).not.toBeNull();

      const links = Array.from(refTable.querySelectorAll('a'));
      expect(links.length).toBe(inventory.references.length);

      inventory.references.forEach((expected, i) => {
        const link = links[i];
        expect(link.getAttribute('href')).toBe(expected.url);
        expect(link.getAttribute('target')).toBe('_blank');
        expect(link.getAttribute('rel')).toBe('noopener noreferrer');
      });
    });
  });

  describe('Footer Inventory', () => {
    it('renders page footer with accurate disclaimer text', () => {
      const { container } = render(<Page />);
      const footer = container.querySelector('.page-footer');
      expect(footer?.textContent?.replace(/\s+/g, ' ').trim()).toBe(inventory.footer);
    });
  });
});

import { afterEach, beforeEach, describe, expect, it } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { load } from 'cheerio';
import type { Element as HtmlElement } from 'domhandler';
import postcss from 'postcss';
import type { Window as HappyWindow } from 'happy-dom';
import inventory from '../../docs/migration-inventory/iso-29119-1-2022-guide.json';
import { NAV_ITEMS, CATEGORY_ORDER, CATEGORY_TITLES, CATEGORY_CODES } from '../../lib/navigation';
import { PAGES, EXPECTED_PAGE_COUNT } from '../../e2e/pages';

// Font delivery is verified through markup; unit tests must not fetch external CSS.
const browserSettings = (window as unknown as HappyWindow).happyDOM.settings;
let previousCSSLoading = browserSettings.disableCSSFileLoading;
let previousDisabledLoading = browserSettings.handleDisabledFileLoadingAsSuccess;
beforeEach(() => {
  previousCSSLoading = browserSettings.disableCSSFileLoading;
  previousDisabledLoading = browserSettings.handleDisabledFileLoadingAsSuccess;
  browserSettings.disableCSSFileLoading = true;
  browserSettings.handleDisabledFileLoadingAsSuccess = true;
});
afterEach(() => {
  cleanup();
  browserSettings.disableCSSFileLoading = previousCSSLoading;
  browserSettings.handleDisabledFileLoadingAsSuccess = previousDisabledLoading;
});

const directory = 'app/iso-29119-1-2022-guide/';
const norm = (value: string) => value.replace(/\s+/g, '').trim();

function signatures(html: string, selector = '*'): { tag: string; attrs: string[][]; text: string }[] {
  const $ = load(html, null, false);
  $('.mermaid-wrapper').remove();
  $('.mermaid-diagram svg').remove();
  return $(selector).toArray().filter((node): node is HtmlElement => 'tagName' in node).map(node => ({
    tag: node.tagName,
    attrs: Object.entries(node.attribs).filter(([key]) => !key.startsWith('aria-') && key !== 'role' && key !== 'target' && key !== 'rel').sort(([a], [b]) => a.localeCompare(b)),
    text: norm($(node).text()),
  }));
}

async function markup(name: string) {
  const mod = await import('../../app/iso-29119-1-2022-guide/' + name);
  const Component = mod.default;
  return renderToStaticMarkup(<Component />);
}

describe('ISO/IEC/IEEE 29119-1:2022 Elements Inventory', () => {
  for (const group of inventory.groups) {
    describe(group.name, () => {
      it('preserves complete DOM structure and full text in document order', async () => {
        expect(signatures(await markup(group.name))).toEqual(group.structure);
      });
      for (const [selector, items] of Object.entries(group.items)) {
        if ((items as unknown[]).length === 0) continue;
        it(`preserves exact ordered inventory for ${selector}`, async () => {
          expect(signatures(await markup(group.name), selector)).toEqual(items as any);
        });
      }
    });
  }
});

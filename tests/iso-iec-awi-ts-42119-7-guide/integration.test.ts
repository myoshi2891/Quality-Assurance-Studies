import { expect, it } from 'bun:test';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { load } from 'cheerio';
import { sourceModule } from '../helpers/source-module';
import { NAV_ITEMS } from '../../lib/navigation';
import { PAGES, EXPECTED_PAGE_COUNT } from '../../e2e/pages';
import inventory from '../../docs/migration-inventory/iso-iec-awi-ts-42119-7-guide.json';

it('registers the red teaming guide exactly once in ISO and smoke E2E at 130 routes', () => {
  const href = '/iso-iec-awi-ts-42119-7-guide';
  const items = NAV_ITEMS.filter(i=>i.href === href);
  expect(items).toHaveLength(1);
  expect(items[0]).toMatchObject({category:'iso',label:'ISO/IEC AWI TS 42119-7 レッドチーミングガイド'});
  expect(items[0]!.description.length).toBeLessThanOrEqual(80);
  const pages = PAGES.filter(p=>p.path === href); expect(pages).toHaveLength(1);
  const Page = sourceModule('app/iso-iec-awi-ts-42119-7-guide/page.tsx').default as React.ComponentType;
  expect(pages[0]!.h1.test(load(renderToStaticMarkup(React.createElement(Page)))('h1').text())).toBe(true);
  expect(NAV_ITEMS).toHaveLength(130); expect(PAGES).toHaveLength(130); expect(EXPECTED_PAGE_COUNT).toBe(130);
});
for (const ext of ['html','md'] as const) it(`archives original ${ext} with identical tracked bytes`, () => {
  const name = `Iso-iec-awi-ts-42119-7-guide.${ext}`;
  const file = `archive/${ext}-archive/iso/${name}`;
  expect(existsSync(name)).toBe(false);
  expect(createHash('sha256').update(readFileSync(file)).digest('hex')).toBe(inventory.hashes[ext]);
  expect(execFileSync('git',['ls-files','--error-unmatch',file],{encoding:'utf8'}).trim()).toBe(file);
});

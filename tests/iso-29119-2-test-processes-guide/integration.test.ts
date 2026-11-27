import {it,expect} from 'bun:test';
import {execFileSync} from 'node:child_process';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {load} from 'cheerio';
import {sourceModule} from '../helpers/source-module';
import {NAV_ITEMS} from '../../lib/navigation';
import { PAGES } from '../../e2e/pages';
it('registers this guide exactly once in ISO navigation with searchable description',()=>{const entries=NAV_ITEMS.filter(n=>n.href==='/iso-29119-2-test-processes-guide');expect(entries).toHaveLength(1);expect(entries[0]).toMatchObject({category:'iso',label:'ISO/IEC/IEEE 29119-2:2021 テストプロセスガイド'});expect(entries[0]!.description.length).toBeGreaterThan(0);expect(entries[0]!.description.length).toBeLessThanOrEqual(80);});
it('registers the same route and correct h1 in the E2E registry',()=>{const entries=PAGES.filter(p=>p.path==='/iso-29119-2-test-processes-guide');expect(entries).toHaveLength(1);const Page=sourceModule('app/iso-29119-2-test-processes-guide/page.tsx').default as React.ComponentType;const h1=load(renderToStaticMarkup(React.createElement(Page)))('h1').first().text().replace(/\s+/g,' ').trim();expect(h1).not.toBe('');expect(entries[0]!.h1.test(h1)).toBe(true);});
it('tracks both archived originals in Git',()=>{for(const ext of ['html','md'])expect(execFileSync('git',['ls-files',`archive/${ext}-archive/iso/Iso-29119-2-test-processes-guide.${ext}`],{encoding:'utf8'}).trim()).not.toBe('');});

it('reproduces the fixed inventory from archived sources without rewriting it',()=>{expect(()=>execFileSync(process.execPath,['scripts/generate-iso-29119-2-inventory.mjs','--check'],{stdio:'pipe'})).not.toThrow();});

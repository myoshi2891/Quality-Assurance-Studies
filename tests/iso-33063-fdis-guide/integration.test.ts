import {it,expect} from 'bun:test';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {NAV_ITEMS} from '../../lib/navigation';
import {PAGES,EXPECTED_PAGE_COUNT} from '../../e2e/pages';
it('registers this guide exactly once in ISO navigation with searchable description',()=>{const entries=NAV_ITEMS.filter(n=>n.href==='/iso-33063-fdis-guide');expect(entries).toHaveLength(1);expect(entries[0]).toMatchObject({category:'iso',label:'ISO/IEC FDIS 33063 初学者ガイド'});expect(entries[0]!.description.length).toBeGreaterThan(0);expect(entries[0]!.description.length).toBeLessThanOrEqual(80);});
it('registers the same route and correct h1 in the E2E registry',()=>{const entries=PAGES.filter(p=>p.path==='/iso-33063-fdis-guide');expect(entries).toHaveLength(1);expect('ISO/IEC FDIS 33063 初学者向けステップバイステップ解説ガイド').toMatch(entries[0]!.h1);expect(EXPECTED_PAGE_COUNT).toBe(132);expect(PAGES.length).toBe(EXPECTED_PAGE_COUNT);});
it('tracks both archived originals in Git',()=>{for(const ext of ['html','md'])expect(execFileSync('git',['ls-files',`archive/${ext}-archive/iso/Iso-33063-fdis-guide.${ext}`],{encoding:'utf8'}).trim()).not.toBe('');});

it('reproduces the fixed inventory from archived sources without rewriting it',()=>{expect(()=>execFileSync('bun',['scripts/generate-iso-33063-fdis-inventory.mjs','--check'],{stdio:'pipe'})).not.toThrow();});

it('pins the Mermaid 11 compatible ELK extension and registers it only from this page',()=>{const pkg=JSON.parse(readFileSync('package.json','utf8'));expect(pkg.dependencies['@mermaid-js/layout-elk']).toBe('0.2.0');expect(readFileSync('app/iso-33063-fdis-guide/Diagram.tsx','utf8')).toContain('registerLayoutLoaders');});

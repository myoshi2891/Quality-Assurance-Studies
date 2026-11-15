import {it,expect} from 'bun:test';
import {execFileSync} from 'node:child_process';
import {NAV_ITEMS} from '../../lib/navigation';
import {PAGES,EXPECTED_PAGE_COUNT} from '../../e2e/pages';
it('registers this guide exactly once in ISO navigation with searchable description',()=>{const entries=NAV_ITEMS.filter(n=>n.href==='/iso-29119-2-test-processes-guide');expect(entries).toHaveLength(1);expect(entries[0]).toMatchObject({category:'iso',label:'ISO/IEC/IEEE 29119-2:2021 テストプロセスガイド'});expect(entries[0]!.description.length).toBeGreaterThan(0);expect(entries[0]!.description.length).toBeLessThanOrEqual(80);});
it('registers the same route and correct h1 in the E2E registry',()=>{const entries=PAGES.filter(p=>p.path==='/iso-29119-2-test-processes-guide');expect(entries).toHaveLength(1);expect('ISO/IEC/IEEE 29119-2:2021 テストプロセス 初学者向けステップバイステップ解説').toMatch(entries[0]!.h1);expect(EXPECTED_PAGE_COUNT).toBe(134);expect(PAGES.length).toBe(EXPECTED_PAGE_COUNT);});
it('tracks both archived originals in Git',()=>{for(const ext of ['html','md'])expect(execFileSync('git',['ls-files',`archive/${ext}-archive/iso/Iso-29119-2-test-processes-guide.${ext}`],{encoding:'utf8'}).trim()).not.toBe('');});

it('reproduces the fixed inventory from archived sources without rewriting it',()=>{expect(()=>execFileSync(process.execPath,['scripts/generate-iso-29119-2-inventory.mjs','--check'],{stdio:'pipe'})).not.toThrow();});

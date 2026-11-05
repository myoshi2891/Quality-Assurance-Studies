import { expect, it } from 'bun:test';
import { readdirSync } from 'node:fs';
import ts from 'typescript';
import { NAV_ITEMS } from '../../lib/navigation';
import { PAGES, EXPECTED_PAGE_COUNT } from '../../e2e/pages';
import inventory from '../../docs/migration-inventory/iso-iec-9075-1-2023-guide.json';
it('registers this distinct source once in ISO while retaining the older guide', () => {
    const entries = NAV_ITEMS.filter(n => n.href === '/iso-iec-9075-1-2023-guide');
    expect(entries).toHaveLength(1); expect(entries[0]?.category).toBe('iso'); expect(entries[0]?.description.length).toBeLessThanOrEqual(80);
    expect(NAV_ITEMS.filter(n => n.href === '/iso-9075-1-guide')).toHaveLength(1);
    expect(PAGES.filter(p => p.path === '/iso-iec-9075-1-2023-guide')[0]?.h1.test(inventory.groups.headings.items[0]!.children[0] as string)).toBe(true);
    expect(EXPECTED_PAGE_COUNT).toBe(122); expect(PAGES).toHaveLength(122); expect(NAV_ITEMS).toHaveLength(122);
});
it('typechecks every page module without a production build', () => {
    const config = ts.readConfigFile('tsconfig.json', ts.sys.readFile);
    const { options } = ts.parseJsonConfigFileContent(config.config, ts.sys, '.');
    const base = 'app/iso-iec-9075-1-2023-guide';
    const program = ts.createProgram(readdirSync(base).filter(f => /\.tsx?$/.test(f)).map(f => `${base}/${f}`), { ...options, noEmit: true });
    expect(ts.getPreEmitDiagnostics(program).filter(d => d.file?.fileName.includes(base)).map(d => ts.flattenDiagnosticMessageText(d.messageText,'\n'))).toEqual([]);
},60_000);

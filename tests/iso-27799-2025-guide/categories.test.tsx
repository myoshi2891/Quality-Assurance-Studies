import { expect, it } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { load } from 'cheerio';
import inventory from '../../docs/migration-inventory/iso-27799-2025-guide.json';
import { sourceModule } from '../helpers/source-module';
import { tree } from './fidelity';
for (const category of inventory.categories) it(`category ${category.file}: ${category.label}`, () => {
    const Component = sourceModule(`app/iso-27799-2025-guide/${category.file}.tsx`).default as React.ComponentType;
    const $ = load(renderToStaticMarkup(<Component />), null, false);
    expect($.root().contents().toArray().map(tree).filter(Boolean)).toEqual(category.nodes);
});

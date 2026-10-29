import { expect, it, mock } from 'bun:test';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot, type Root } from 'react-dom/client';
import { act, fireEvent } from '@testing-library/react';
import { sourceModule } from '../helpers/source-module';
for (const development of [false,true]) it(`SSR hydration development=${development}: no recoverable errors or invalid DOM and live check handlers`, async () => {
    const Page = sourceModule('app/iso-27799-2025-guide/page.tsx',{development}).default as React.ComponentType;
    const messages: string[] = [], recovered: unknown[] = []; const previous = console.error;
    const container = document.createElement('div');
    let root: Root | undefined;
    console.error=mock((...args: unknown[])=>{messages.push(args.map(String).join(' '));});
    try {
        container.innerHTML=renderToString(<Page />); document.body.appendChild(container);
        await act(async()=>{root=hydrateRoot(container,<Page />,{onRecoverableError:error=>{recovered.push(error);}});});
        expect(container.querySelectorAll('table')).toHaveLength(31);
        fireEvent.click(container.querySelector('input[type="checkbox"]')!);
        expect(container.querySelector('.cp-count')?.textContent).toBe('1 / 10');
        expect(container.querySelectorAll('li.done')).toHaveLength(1);
        expect(recovered).toEqual([]); expect(messages).toEqual([]);
    } finally {if(root)await act(async()=>root!.unmount());container.remove();console.error=previous;}
});

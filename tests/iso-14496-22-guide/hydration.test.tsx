import { expect, it, mock } from 'bun:test';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot, type Root } from 'react-dom/client';
import { act } from '@testing-library/react';
import { sourceModule } from '../helpers/source-module';
it('hydrates server HTML without recoverable errors or console diagnostics', async () => {
    const Page = sourceModule('app/iso-14496-22-guide/page.tsx').default as React.ComponentType;
    const previousError = console.error;
    const previousWarn = console.warn;
    const messages: string[] = [];
    const recoverableErrors: unknown[] = [];
    const container = document.createElement('div');
    let root: Root | undefined;
    console.error = mock((...args: unknown[]) => { messages.push(args.map(String).join(' ')); });
    console.warn = mock((...args: unknown[]) => { messages.push(args.map(String).join(' ')); });
    try {
        container.innerHTML = renderToString(<Page />);
        document.body.appendChild(container);
        await act(async () => {
            root = hydrateRoot(container, <Page />, {
                onRecoverableError: error => { recoverableErrors.push(error); },
            });
        });
        expect(recoverableErrors).toEqual([]);
        expect(messages).toEqual([]);
    } finally {
        try { await act(async () => { root?.unmount(); }); }
        finally {
            container.remove();
            console.error = previousError;
            console.warn = previousWarn;
        }
    }
});

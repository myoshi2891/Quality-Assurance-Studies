import { expect, it, mock } from 'bun:test';
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { sourceModule } from '../helpers/source-module';
it('renders without invalid table whitespace or hydration nesting diagnostics', () => {
    const Page = sourceModule('app/iso-19770-5-guide/page.tsx').default as React.ComponentType;
    const previous = console.error; const messages: string[] = [];
    console.error = mock((...args: unknown[]) => { messages.push(args.map(String).join(' ')); });
    try { render(<Page />); expect(messages).toEqual([]); }
    finally { cleanup(); console.error = previous; }
});

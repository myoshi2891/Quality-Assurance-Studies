import { afterEach, expect, it } from 'bun:test';
import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import inventory from '../../docs/migration-inventory/iso-19770-5-guide.json';
afterEach(cleanup);
const entry = '../../app/iso-19770-5-guide/Checklist';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
for (let index=0; index<8; index++) it('check '+index+': input, label and row each toggle once and update progress', async () => {
    const Checklist = (await import(entry)).default;
    const view = render(<Checklist />); const boxes = view.getAllByRole('checkbox') as HTMLInputElement[];
    const row = boxes[index]!.closest('li')!, label = boxes[index]!.closest('label')!;
    expect(norm(label.textContent!)).toBe(norm(inventory.groups.checks.items[index]!.children[0]!.children[1] as string));
    const check = (selected: boolean) => { expect(boxes[index]!.checked).toBe(selected); expect(row.classList.contains('done')).toBe(selected); expect(view.container.querySelector('.cp-count b')?.textContent).toBe(selected?'1':'0'); expect((view.container.querySelector('.cp-fill') as HTMLElement).style.width).toBe(selected?'13%':'0%'); };
    check(false); fireEvent.click(boxes[index]!); check(true); fireEvent.click(label); check(false); fireEvent.click(row); check(true); fireEvent.click(row); check(false);
});
it('selects and clears all eight checks with exact count and percentage at each step', async () => {
    const Checklist = (await import(entry)).default; const view = render(<Checklist />); const boxes = view.getAllByRole('checkbox');
    for (let index=0; index<8; index++) { fireEvent.click(boxes[index]!); expect(view.container.querySelector('.cp-count b')?.textContent).toBe(String(index+1)); expect((view.container.querySelector('.cp-fill') as HTMLElement).style.width).toBe(Math.round((index+1)/8*100)+'%'); }
    expect(view.container.querySelectorAll('li.done')).toHaveLength(8);
    for (let index=0; index<8; index++) fireEvent.click(boxes[index]!);
    expect(view.container.querySelectorAll('li.done')).toHaveLength(0); expect(view.container.querySelector('.cp-count b')?.textContent).toBe('0'); expect((view.container.querySelector('.cp-fill') as HTMLElement).style.width).toBe('0%');
});

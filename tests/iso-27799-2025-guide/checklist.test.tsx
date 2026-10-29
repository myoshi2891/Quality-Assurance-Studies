import { afterEach, expect, it } from 'bun:test';
import { cleanup, fireEvent, render } from '@testing-library/react';
import inventory from '../../docs/migration-inventory/iso-27799-2025-guide.json';
import { norm } from './fidelity';
afterEach(cleanup);
const entry = '../../app/iso-27799-2025-guide/Checklist';
for (let index=0; index<10; index++) it(`check ${index}: exact label, input and full label toggle once`, async () => {
    const Checklist = (await import(entry)).default; const view = render(<Checklist />);
    const boxes = view.getAllByRole('checkbox') as HTMLInputElement[]; expect(boxes).toHaveLength(10);
    const box = boxes[index]!, label = box.closest('label')!, row = box.closest('li')!;
    expect(norm(label.textContent!)).toBe(norm(inventory.checks[index]!));
    const state = (checked: boolean) => { expect(box.checked).toBe(checked); expect(row.classList.contains('done')).toBe(checked); expect(view.container.querySelector('.cp-count')?.textContent).toBe(checked?'1 / 10':'0 / 10'); expect((view.container.querySelector('.cp-fill') as HTMLElement).style.width || '0%').toBe(checked?'10%':'0%'); };
    state(false); fireEvent.click(box); state(true); fireEvent.click(label); state(false);
});
it('counts every combination of progress, completes all ten, resets and allows a fresh selection', async () => {
    const Checklist = (await import(entry)).default; const view = render(<Checklist />); const boxes = view.getAllByRole('checkbox') as HTMLInputElement[];
    for(let i=0;i<10;i++) { fireEvent.click(boxes[i]!); expect(view.container.querySelector('.cp-count')?.textContent).toBe(`${i+1} / 10`); expect((view.container.querySelector('.cp-fill') as HTMLElement).style.width).toBe(`${(i+1)*10}%`); expect(view.container.querySelector('.cp-done')!==null).toBe(i===9); }
    expect(view.container.querySelectorAll('li.done')).toHaveLength(10);
    fireEvent.click(view.getByRole('button',{name:'リセット'})); expect(boxes.every(b=>!b.checked)).toBe(true); expect(view.container.querySelectorAll('li.done')).toHaveLength(0); expect(view.container.querySelector('.cp-count')?.textContent).toBe('0 / 10'); expect(view.container.querySelector('.cp-done')).toBeNull();
    fireEvent.click(boxes[3]!); expect(view.container.querySelector('.cp-count')?.textContent).toBe('1 / 10');
});
it('exposes progress updates as a polite live status', async () => {const Checklist=(await import(entry)).default;const view=render(<Checklist />);expect(view.getByRole('status').getAttribute('aria-live')).toBe('polite');});

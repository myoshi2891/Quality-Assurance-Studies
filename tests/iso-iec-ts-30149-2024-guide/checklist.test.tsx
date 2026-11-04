import { it, expect } from 'bun:test';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { sourceModule } from '../helpers/source-module';
it('all seven checkboxes and labels update progress in both directions without affecting neighbours', () => {
    const Category = sourceModule('app/iso-iec-ts-30149-2024-guide/Category10.tsx').default as React.ComponentType;
    const view = render(<Category />);
    const boxes = view.getAllByRole('checkbox') as HTMLInputElement[];
    expect(boxes).toHaveLength(7);
    const count = view.container.querySelector('.cp-count')!;
    const fill = view.container.querySelector('.cp-fill') as HTMLElement;
    expect(count.textContent).toBe('0 / 7'); expect(fill.style.width).toBe('0%');
    expect(count.getAttribute('aria-live')).toBe('polite');
    boxes.forEach((box, i) => {
        fireEvent.click(box);
        expect(box.checked).toBe(true);
        expect(count.textContent).toBe(`${i+1} / 7`);
        expect(fill.style.width).toBe(Math.round((i+1)*100/7)+'%');
        expect(boxes.map(b => b.checked)).toEqual(boxes.map((_,j)=>j<=i));
    });
    boxes.forEach((box,i)=>{
        fireEvent.click(box.closest('label')!);
        expect(box.checked).toBe(false);
        expect(count.textContent).toBe(`${6-i} / 7`);
        expect(fill.style.width).toBe(Math.round((6-i)*100/7)+'%');
    });
});
it('keeps checkbox progress local to the card that changed', () => {
    const Checklist = sourceModule('app/iso-iec-ts-30149-2024-guide/Checklist.tsx').default as React.ComponentType<{ children: React.ReactNode }>;
    const card = (name: string) => <Checklist><span className="cp-count" /><div className="cp-fill" /><input type="checkbox" aria-label={`${name} 1`} /><input type="checkbox" aria-label={`${name} 2`} /></Checklist>;
    const view = render(<>{card('A')}{card('B')}</>);
    const [first, second] = view.container.querySelectorAll('.checklist-card');
    const progress = (el: Element) => [el.querySelector('.cp-count')?.textContent, el.querySelector<HTMLElement>('.cp-fill')?.style.width];
    expect(progress(first!)).toEqual(['0 / 2', '0%']);
    expect(progress(second!)).toEqual(['0 / 2', '0%']);
    fireEvent.click(view.getByRole('checkbox', { name: 'A 1' }));
    expect(progress(first!)).toEqual(['1 / 2', '50%']);
    expect(progress(second!)).toEqual(['0 / 2', '0%']);
});

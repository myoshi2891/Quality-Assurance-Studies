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

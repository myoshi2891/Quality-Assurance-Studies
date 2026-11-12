'use client';

import React, { useEffect, useRef } from 'react';

/** Keep each checklist's uncontrolled inputs and progress local to its card. */
export default function Checklist({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    function update() {
        const card = ref.current;
        if (!card) return;
        const boxes = Array.from(card.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'));
        const checked = boxes.filter(box => box.checked).length;
        const count = card.querySelector('.cp-count');
        const fill = card.querySelector<HTMLElement>('.cp-fill');
        if (count) count.textContent = `${checked} / ${boxes.length}`;
        if (fill) fill.style.width = `${boxes.length ? Math.round(checked * 100 / boxes.length) : 0}%`;
    }
    useEffect(update, []);
    return <div className="checklist-card" ref={ref} onChange={update}>{children}</div>;
}

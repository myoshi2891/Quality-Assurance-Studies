'use client';
import React, { useEffect, useState } from 'react';
import { ITEMS } from './checklist-items';
const STORAGE_KEY = 'sbe-guide-checklist-v1';
export default function Checklist() {
    const [checked, setChecked] = useState<boolean[]>(() => ITEMS.map(() => false));
    useEffect(() => {
        try {
            const saved: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
            if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
                setChecked(ITEMS.map((_, i) => (saved as Record<string, unknown>)[i] === true));
            }
        } catch { /* Storage may be unavailable or contain malformed data. */ }
    }, []);
    const toggle = (index: number) => {
        const next = checked.map((value, i) => i === index ? !value : value);
        setChecked(next);
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(Object.fromEntries(next.map((value, i) => [i, value])))); }
        catch { /* Interaction remains available when persistence is denied. */ }
    };
    const done = checked.filter(Boolean).length;
    return <>
        <p className="check-progress" id="checkProgress">
            <i className={`ti ${done === ITEMS.length ? 'ti-circle-check' : 'ti-circle-dashed'}`} />
            <span id="checkProgressText">{done} / {ITEMS.length} 完了</span>
        </p>
        <ul className="check-list" id="checklist9">{ITEMS.map((text, index) =>
            <li key={index} className={`check-item${checked[index] ? ' checked' : ''}`}
                role="checkbox" aria-checked={checked[index]} tabIndex={0} data-idx={index}
                onClick={() => toggle(index)} onKeyDown={event => {
                    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggle(index); }
                }}>
                <i className={`ti ${checked[index] ? 'ti-circle-check' : 'ti-circle'} check-icon`} />
                <span className="check-text">{text}</span>
            </li>
        )}</ul>
    </>;
}

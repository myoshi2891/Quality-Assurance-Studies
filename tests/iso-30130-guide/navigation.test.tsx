import { it, expect, afterEach } from 'bun:test';
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { sourceModule } from '../helpers/source-module';
afterEach(cleanup);
it('opens, closes with Escape and restores focus; disconnects observer',()=>{
 let disconnected=false;const observed:string[]=[];const original=globalThis.IntersectionObserver;
 globalThis.IntersectionObserver=class{observe(el:Element){observed.push(el.id)}disconnect(){disconnected=true}} as unknown as typeof IntersectionObserver;
 try {const Nav=sourceModule('app/iso-30130-guide/NavBar.tsx').default as React.ComponentType;const view=render(<Nav/>);const button=view.getByRole('button');expect(button.getAttribute('aria-expanded')).toBe('false');fireEvent.click(button);expect(button.getAttribute('aria-expanded')).toBe('true');fireEvent.keyDown(document,{key:'Escape'});expect(button.getAttribute('aria-expanded')).toBe('false');expect(document.activeElement).toBe(button);fireEvent.click(button);fireEvent.click(view.getAllByRole('link')[0]!);expect(button.getAttribute('aria-expanded')).toBe('false');expect(view.getAllByRole('link')[0]!.getAttribute('aria-current')).toBe('location');view.unmount();expect(disconnected).toBe(true);}finally{globalThis.IntersectionObserver=original;}
});

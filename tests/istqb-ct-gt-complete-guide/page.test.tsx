import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'bun:test';
import IstqbCtGtCompleteGuide from '../../app/istqb-ct-gt-complete-guide/page';

describe('IstqbCtGtCompleteGuide', () => {
    beforeEach(() => {
        // IntersectionObserverのモック
        const mockIntersectionObserver = vi.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('renders the main heading', () => {
        render(<IstqbCtGtCompleteGuide />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveTextContent(/CT-GT/i);
    });

    it('renders the sticky nav', () => {
        render(<IstqbCtGtCompleteGuide />);
        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument();
        expect(nav).toHaveClass('sticky-nav');
    });

    it('renders all sections', () => {
        render(<IstqbCtGtCompleteGuide />);
        expect(screen.getByRole('heading', { name: /資格概要・ロードマップ/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /ギャンブル産業入門/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /ギャンブル産業エコシステム/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /ギャンブル産業テスト技法/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /試験対策・サンプル問題/i })).toBeInTheDocument();
    });
});

import { describe, it, expect, afterEach } from 'bun:test';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Hero from '../../app/iso-29119-1-2022-guide/Hero';
import Footer from '../../app/iso-29119-1-2022-guide/Footer';
import NavBar from '../../app/iso-29119-1-2022-guide/NavBar';

const NAV_DATA = [
  {
    href: '#step-0このガイドの使い方と前提',
    text: 'STEP 0：このガイドの使い方と前提',
    subLinks: [
      { href: '#0-1-学習ロードマップ', text: '0-1. 学習ロードマップ' },
      { href: '#0-2-このガイドの根拠と限界重要', text: '0-2. このガイドの根拠と限界（重要）' }
    ]
  },
  {
    href: '#step-1規格の全体像',
    text: 'STEP 1：規格の全体像',
    subLinks: [
      { href: '#1-1-一言でいうと', text: '1-1. 一言でいうと' },
      { href: '#1-2-基本情報', text: '1-2. 基本情報' },
      { href: '#1-3-29119シリーズの中での位置付け', text: '1-3. 29119シリーズの中での位置付け' },
      { href: '#1-4-他の規格との関係', text: '1-4. 他の規格との関係' }
    ]
  },
  {
    href: '#step-22013年版からの変更点',
    text: 'STEP 2：2013年版からの変更点',
    subLinks: [
      { href: '#変更の読み取り方図解', text: '変更の読み取り方（図解）' }
    ]
  },
  {
    href: '#step-3規格の構成を地図で把握する',
    text: 'STEP 3：規格の構成を地図で把握する',
    subLinks: [
      { href: '#3-1-章立て2022年版', text: '3-1. 章立て（2022年版）' },
      { href: '#3-2-構成図', text: '3-2. 構成図' }
    ]
  },
  {
    href: '#step-4ソフトウェアテストの基本概念41節',
    text: 'STEP 4：ソフトウェアテストの基本概念（4.1節）',
    subLinks: [
      { href: '#4-1-10個の基本概念を一覧で理解する', text: '4-1. 10個の基本概念を一覧で理解する' },
      { href: '#4-2-静的テストと動的テスト', text: '4-2. 静的テストと動的テスト' },
      { href: '#4-3-なぜ網羅テストは不可能か計算例', text: '4-3. なぜ網羅テストは不可能か（計算例）' },
      { href: '#4-4-テストベースとテストオラクルの関係', text: '4-4. テストベースとテストオラクルの関係' }
    ]
  },
  {
    href: '#step-5テスト計画とテスト戦略42節',
    text: 'STEP 5：テスト計画とテスト戦略（4.2節）',
    subLinks: [
      { href: '#5-1-リスクの2種類', text: '5-1. リスクの2種類' },
      { href: '#5-2-リスクベースドテストとは', text: '5-2. リスクベースドテストとは' },
      { href: '#5-3-具体例リスク分析からテストの深さを決める学習用', text: '5-3. 具体例：リスク分析からテストの深さを決める（学習用）' },
      { href: '#5-4-テスト戦略とテストアプローチ', text: '5-4. テスト戦略とテストアプローチ' },
      { href: '#5-5-テスト戦略とテスト計画の違い整理', text: '5-5. テスト戦略とテスト計画の違い（整理）' },
      { href: '#5-6-42節の残り2項目', text: '5-6. 4.2節の残り2項目' }
    ]
  },
  {
    href: '#step-6テストフレームワーク43節',
    text: 'STEP 6：テストフレームワーク（4.3節）',
    subLinks: [
      { href: '#6-1-テストプロセスの3層モデル', text: '6-1. テストプロセスの3層モデル' },
      { href: '#6-2-プロセスのインスタンス化とプロジェクトベース', text: '6-2. プロセスの「インスタンス化」と「プロジェクトベース」' },
      { href: '#6-3-テスト文書3つのレベル', text: '6-3. テスト文書（3つのレベル）' },
      { href: '#6-4-43節のその他の項目', text: '6-4. 4.3節のその他の項目' },
      { href: '#6-5-メトリクスの例学習用', text: '6-5. メトリクスの例（学習用）' }
    ]
  },
  {
    href: '#step-7テスト設計と実行44節',
    text: 'STEP 7：テスト設計と実行（4.4節）',
    subLinks: [
      { href: '#7-1-テストモデルから実行まで概念図', text: '7-1. テストモデルから実行まで（概念図）' },
      { href: '#7-2-テストモデルとモデルベーステスト441442', text: '7-2. テストモデルとモデルベーステスト（4.4.1／4.4.2）' },
      { href: '#7-3-スクリプト化テストと探索的テスト443', text: '7-3. スクリプト化テストと探索的テスト（4.4.3）' },
      { href: '#7-4-テスト技法3つの分類と代表例444', text: '7-4. テスト技法：3つの分類と代表例（4.4.4）' },
      { href: '#7-5-経験ベースのテスト445', text: '7-5. 経験ベースのテスト（4.4.5）' },
      { href: '#7-6-再テストと回帰テスト446', text: '7-6. 再テストと回帰テスト（4.4.6）' },
      { href: '#7-7-手動テストと自動テスト447継続的テスト448', text: '7-7. 手動テストと自動テスト（4.4.7）、継続的テスト（4.4.8）' },
      { href: '#7-8-バックトゥバックテスト449', text: '7-8. バックトゥバックテスト（4.4.9）' },
      { href: '#7-9-abテスト4410', text: '7-9. A/Bテスト（4.4.10）' },
      { href: '#7-10-数学ベースのテストとファズテスト4411', text: '7-10. 数学ベースのテストとファズテスト（4.4.11）' },
      { href: '#7-11-テスト環境とテストデータ管理44124413', text: '7-11. テスト環境とテストデータ管理（4.4.12／4.4.13）' }
    ]
  },
  {
    href: '#step-8プロジェクト管理報告インシデント管理4547節',
    text: 'STEP 8：プロジェクト管理・報告・インシデント管理（4.5〜4.7節）',
    subLinks: [
      { href: '#8-1-各節の概要', text: '8-1. 各節の概要' },
      { href: '#8-2-インシデントとは', text: '8-2. インシデントとは' },
      { href: '#8-3-インシデントのライフサイクル典型例', text: '8-3. インシデントのライフサイクル（典型例）' },
      { href: '#8-4-良いインシデント報告の項目学習用チェックリスト', text: '8-4. 良いインシデント報告の項目（学習用チェックリスト）' }
    ]
  },
  {
    href: '#step-9システム特性とテストの役割附属書ab',
    text: 'STEP 9：システム特性とテストの役割（附属書A・B）',
    subLinks: [
      { href: '#9-1-附属書aシステム特性とテスト例', text: '9-1. 附属書A：システム特性とテスト（例）' },
      { href: '#9-2-システム特性から戦略を考える流れ', text: '9-2. システム特性から戦略を考える流れ' },
      { href: '#9-3-附属書bテストの役割', text: '9-3. 附属書B：テストの役割' }
    ]
  },
  {
    href: '#step-10実務への適用手順',
    text: 'STEP 10：実務への適用手順',
    subLinks: [
      { href: '#10-1-導入ステップ', text: '10-1. 導入ステップ' },
      { href: '#10-2-現場での使い方の指針', text: '10-2. 現場での使い方の指針' },
      { href: '#10-3-初学者が最初にやるべき3つのこと', text: '10-3. 初学者が最初にやるべき3つのこと' }
    ]
  },
  {
    href: '#step-11この規格をめぐる議論を知っておく',
    text: 'STEP 11：この規格をめぐる議論を知っておく',
    subLinks: [
      { href: '#11-1-議論の概要', text: '11-1. 議論の概要' },
      { href: '#11-2-2022年版の読み方への示唆', text: '11-2. 2022年版の読み方への示唆' },
      { href: '#11-3-istqbとの関係', text: '11-3. ISTQBとの関係' }
    ]
  },
  {
    href: '#step-12理解度チェック10問',
    text: 'STEP 12：理解度チェック（10問）',
    subLinks: []
  },
  {
    href: '#用語集',
    text: '用語集',
    subLinks: []
  },
  {
    href: '#根拠ソース一覧url',
    text: '根拠ソース一覧（URL）',
    subLinks: [
      { href: '#a-一次情報規格の公式ページ公開プレビュー', text: 'A. 一次情報（規格の公式ページ・公開プレビュー）' },
      { href: '#b-シリーズ全体関連規格', text: 'B. シリーズ全体・関連規格' },
      { href: '#c-著名な実践者研究者の発信国際的', text: 'C. 著名な実践者・研究者の発信（国際的）' },
      { href: '#d-本ガイドの注意事項', text: 'D. 本ガイドの注意事項' }
    ]
  }
];

afterEach(() => {
  cleanup();
});

describe('ISO/IEC/IEEE 29119-1:2022 Category 2 (Hero, Footer, NavBar)', () => {
  describe('Hero Component', () => {
    it('renders eyebrow, h1, lead, and 5 meta items correctly', () => {
      const { container } = render(<Hero />);
      const eyebrow = container.querySelector('.eyebrow');
      expect(eyebrow?.textContent?.trim()).toBe('ソフトウェアテスト規格ガイド');

      const h1 = container.querySelector('h1');
      expect(h1?.textContent?.trim()).toBe('ISO/IEC/IEEE 29119-1:2022 初学者向け解説ガイド');

      const lead = container.querySelector('.lead');
      expect(lead?.textContent?.trim()).toBe('ソフトウェアテストの「共通言語」を学ぶ：一般概念（General concepts）をステップバイステップで理解する');

      const metaDl = container.querySelector('.hero-meta');
      expect(metaDl).not.toBeNull();

      const dts = Array.from(container.querySelectorAll('.hero-meta dt')).map(el => el.textContent?.trim());
      const dds = Array.from(container.querySelectorAll('.hero-meta dd')).map(el => el.textContent?.trim());

      expect(dts).toEqual(['規格番号', '発行', '適用範囲', '対象読者', '基準日']);
      expect(dds).toEqual([
        'ISO/IEC/IEEE 29119-1:2022',
        '2022年1月（第2版）',
        '情報提供（informative）',
        'テスト・QA・開発の初学者〜中級者',
        '2026年10月21日'
      ]);
    });
  });

  describe('Footer Component', () => {
    it('renders disclaimer and official source reference', () => {
      const { container } = render(<Footer />);
      const footer = container.querySelector('.page-footer');
      expect(footer).not.toBeNull();
      expect(footer?.textContent).toContain('本ガイドは学習目的の解説資料であり');
      expect(footer?.textContent).toContain('ISO/IEC/IEEE 29119-1:2022');
      expect(footer?.textContent).toContain('公式情報をご確認ください');
    });
  });

  describe('NavBar Component', () => {
    it('renders navigation landmark with aria-label="目次"', () => {
      const { getByRole } = render(<NavBar />);
      const nav = getByRole('navigation', { name: '目次' });
      expect(nav).toBeDefined();
    });

    it('renders mobile nav-toggle button', () => {
      const { getByRole } = render(<NavBar />);
      const toggle = getByRole('button', { name: '目次の表示切替' });
      expect(toggle).toBeDefined();
    });

    it('renders exactly 67 links matching original hierarchy and targets', () => {
      const { container } = render(<NavBar />);
      const allLinks = Array.from(container.querySelectorAll('nav.sidebar a'));
      expect(allLinks.length).toBe(67);

      const topLis = Array.from(container.querySelectorAll('nav.sidebar > ul.nav > li.top'));
      expect(topLis.length).toBe(15);

      NAV_DATA.forEach((sec, i) => {
        const topLi = topLis[i];
        expect(topLi).toBeDefined();
        if (!topLi) return;
        const topA = topLi.querySelector(':scope > a');
        expect(topA?.getAttribute('href')).toBe(sec.href);
        expect(topA?.textContent?.replace(/\s+/g, ' ').trim()).toBe(sec.text);

        const subAs = Array.from(topLi.querySelectorAll(':scope > ul.sub > li > a'));
        expect(subAs.length).toBe(sec.subLinks.length);
        sec.subLinks.forEach((sub, j) => {
          expect(subAs[j]?.getAttribute('href')).toBe(sub.href);
          expect(subAs[j]?.textContent?.replace(/\s+/g, ' ').trim()).toBe(sub.text);
        });
      });
    });
  });
});

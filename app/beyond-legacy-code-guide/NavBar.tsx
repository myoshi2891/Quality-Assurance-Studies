'use client';

import React, { useEffect, useRef, useState } from 'react';

const TARGETS = [
  "background",
  "what-is-legacy",
  "shu-ha-ri",
  "overview",
  "practices",
  "practice-1",
  "practice-2",
  "practice-3",
  "practice-4",
  "practice-5",
  "practice-6",
  "practice-7",
  "practice-8",
  "practice-9",
  "pitfalls",
  "roadmap",
  "summary",
  "references"
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState('');
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 900px)');
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    let frame = 0;
    // Nested practice targets need document-order selection, as in the original.
    const update = () => {
      let current = TARGETS[0];
      for (const id of TARGETS) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= window.innerHeight * 0.25) current = id;
        else break;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => { frame = 0; update(); });
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [open]);

  const onNavigate = (event: React.MouseEvent<HTMLElement>) => {
    const link = (event.target as Element).closest('a');
    if (!link) return;
    setActive(link.getAttribute('href')!.slice(1));
    setOpen(false);
  };

  return <>
    <div className="mobile-bar">
      <button type="button" id="navToggle" ref={toggle} aria-label={open ? '目次を閉じる' : '目次を開く'} aria-controls="sidebar" aria-expanded={open} onClick={() => setOpen(value => !value)}>
        <i className="ti ti-menu-2" aria-hidden="true" />
      </button>
      <strong>Beyond Legacy Code ガイド</strong>
    </div>
    <nav className={open ? "sidebar open" : "sidebar"} inert={mobile && !open} onClick={onNavigate} id="sidebar" aria-label="目次">
                <p className="sidebar-brand">Beyond Legacy Code</p>
                <p className="sidebar-sub">初学者向け実践ガイド</p>
                <ul className="nav-list">
                    <li>
                        <a className={active === "background" ? "nav-a active" : "nav-a"} href="#background" aria-current={active === "background" ? "location" : undefined}><span className="n-num">01</span>この本が生まれた背景</a>
                    </li>
                    <li>
                        <a className={active === "what-is-legacy" ? "nav-a active" : "nav-a"} href="#what-is-legacy" aria-current={active === "what-is-legacy" ? "location" : undefined}><span className="n-num">02</span>レガシーコードとは何か</a>
                    </li>
                    <li>
                        <a className={active === "shu-ha-ri" ? "nav-a active" : "nav-a"} href="#shu-ha-ri" aria-current={active === "shu-ha-ri" ? "location" : undefined}><span className="n-num">03</span>学び方の姿勢: 守破離</a>
                    </li>
                    <li>
                        <a className={active === "overview" ? "nav-a active" : "nav-a"} href="#overview" aria-current={active === "overview" ? "location" : undefined}><span className="n-num">04</span>9つのプラクティス全体像</a>
                    </li>
                    <li>
                        <a className={active === "practices" ? "nav-a active" : "nav-a"} href="#practices" aria-current={active === "practices" ? "location" : undefined}><span className="n-num">05</span>プラクティス詳細解説</a>
                        <ul className="nav-sub">
                            <li><a className={active === "practice-1" ? "nav-a active" : "nav-a"} href="#practice-1" aria-current={active === "practice-1" ? "location" : undefined}>1. 目的を先に伝える</a></li>
                            <li><a className={active === "practice-2" ? "nav-a active" : "nav-a"} href="#practice-2" aria-current={active === "practice-2" ? "location" : undefined}>2. 小さなバッチで作る</a></li>
                            <li><a className={active === "practice-3" ? "nav-a active" : "nav-a"} href="#practice-3" aria-current={active === "practice-3" ? "location" : undefined}>3. 継続的に統合する</a></li>
                            <li><a className={active === "practice-4" ? "nav-a active" : "nav-a"} href="#practice-4" aria-current={active === "practice-4" ? "location" : undefined}>4. 協力しあう</a></li>
                            <li><a className={active === "practice-5" ? "nav-a active" : "nav-a"} href="#practice-5" aria-current={active === "practice-5" ? "location" : undefined}>5. CLEANなコード</a></li>
                            <li><a className={active === "practice-6" ? "nav-a active" : "nav-a"} href="#practice-6" aria-current={active === "practice-6" ? "location" : undefined}>6. まずテストを書く</a></li>
                            <li>
                                <a className={active === "practice-7" ? "nav-a active" : "nav-a"} href="#practice-7" aria-current={active === "practice-7" ? "location" : undefined}>7. テストで振る舞いを明示</a>
                            </li>
                            <li><a className={active === "practice-8" ? "nav-a active" : "nav-a"} href="#practice-8" aria-current={active === "practice-8" ? "location" : undefined}>8. 設計は最後に実装</a></li>
                            <li><a className={active === "practice-9" ? "nav-a active" : "nav-a"} href="#practice-9" aria-current={active === "practice-9" ? "location" : undefined}>9. レガシーコードを直す</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className={active === "pitfalls" ? "nav-a active" : "nav-a"} href="#pitfalls" aria-current={active === "pitfalls" ? "location" : undefined}><span className="n-num">06</span>つまずきやすいポイント</a>
                    </li>
                    <li>
                        <a className={active === "roadmap" ? "nav-a active" : "nav-a"} href="#roadmap" aria-current={active === "roadmap" ? "location" : undefined}><span className="n-num">07</span>4週間の実践ロードマップ</a>
                    </li>
                    <li>
                        <a className={active === "summary" ? "nav-a active" : "nav-a"} href="#summary" aria-current={active === "summary" ? "location" : undefined}><span className="n-num">08</span>まとめ</a>
                    </li>
                    <li>
                        <a className={active === "references" ? "nav-a active" : "nav-a"} href="#references" aria-current={active === "references" ? "location" : undefined}><span className="n-num">09</span>参考情報源</a>
                    </li>
                </ul>
            </nav>
  </>;
}

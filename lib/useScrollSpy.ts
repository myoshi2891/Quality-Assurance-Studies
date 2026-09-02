'use client';

import { useEffect, useState } from 'react';

/**
 * 目次のアクティブ判定に使う「読み取り帯」。
 * ビューポート高さに対する比率で、上端・下端の位置を指定する。
 * IntersectionObserver の rootMargin `-15% 0px -70% 0px` は
 * `{ top: 0.15, bottom: 0.30 }` に相当する。
 */
export interface ScrollSpyBand {
  top: number;
  bottom: number;
}

/**
 * スクロール位置から目次のアクティブ節を決定する。
 *
 * IntersectionObserver の `intersectionRatio` を保持する実装は `threshold: 0` の場合、
 * 「交差状態が変化した瞬間」の値しか受け取れない。交差したまま可視率が逆転しても
 * 通知が来ないため、保持している比率が古いままアクティブ判定が固まってしまう。
 * ここではスクロール／リサイズのたびに各節と読み取り帯の重なり量を実測し、
 * 交差状態を維持したままの可視率の逆転にも追従する。
 *
 * @param sectionIds 文書順の節 ID。参照が安定するようモジュールスコープで定義すること。
 * @param band 読み取り帯の位置
 * @returns 現在アクティブな節の ID
 */
export function useScrollSpy(
  sectionIds: readonly string[],
  band: ScrollSpyBand
): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');
  const { top: bandTopRatio, bottom: bandBottomRatio } = band;

  useEffect(() => {
    let frame = 0;

    const pickActive = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      const bandTop = viewportHeight * bandTopRatio;
      const bandBottom = viewportHeight * bandBottomRatio;

      // 文書順に走査し、重なりが同じ場合は先に現れる節を優先する（決定論的な選択）。
      let bestId = '';
      let bestOverlap = 0;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const overlap =
          Math.min(rect.bottom, bandBottom) - Math.max(rect.top, bandTop);
        if (overlap > bestOverlap) {
          bestOverlap = overlap;
          bestId = id;
        }
      }
      // 帯に重なる節が 1 つも無い区間（ページ最上部など）では直前の選択を維持する。
      if (bestId) {
        setActiveId(bestId);
      }
    };

    const schedule = () => {
      if (frame !== 0) return;
      frame = window.requestAnimationFrame(pickActive);
    };

    pickActive();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [sectionIds, bandTopRatio, bandBottomRatio]);

  return activeId;
}

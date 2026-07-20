import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, Ref, RefObject, MutableRefObject } from 'react';

/** Geometry of a single masked card relative to its section. */
export interface MaskPosition {
  /** Card top-left X offset relative to the section content box. */
  x: number;
  /** Card top-left Y offset relative to the section content box. */
  y: number;
  /** Section width. */
  sw: number;
  /** Section height. */
  sh: number;
}

/**
 * Merge multiple refs (object or callback) onto a single element.
 * Used where one element needs both a mask/section ref and a reveal ref.
 */
export function mergeRefs<T>(...refs: Array<Ref<T> | undefined>) {
  return (node: T | null) => {
    for (const ref of refs) {
      if (!ref) continue;
      if (typeof ref === 'function') ref(node);
      else (ref as MutableRefObject<T | null>).current = node;
    }
  };
}

/**
 * Computes, for every card, its top-left offset relative to the section plus
 * the section's own width/height. Offsets are read from the layout box
 * (offsetLeft/offsetTop) so they are unaffected by the reveal animation's
 * transform. Recomputes on resize via a ResizeObserver.
 */
export function useMaskPositions(
  sectionRef: RefObject<HTMLElement>,
  cardsRef: RefObject<Array<HTMLElement | null>>,
): MaskPosition[] {
  const [positions, setPositions] = useState<MaskPosition[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const compute = () => {
      const sw = section.offsetWidth;
      const sh = section.offsetHeight;
      const cards = cardsRef.current ?? [];
      const next = cards.map<MaskPosition>((card) => {
        if (!card) return { x: 0, y: 0, sw, sh };
        // Walk offsetParents up to the section so transforms don't distort the offset.
        let x = 0;
        let y = 0;
        let node: HTMLElement | null = card;
        while (node && node !== section) {
          x += node.offsetLeft;
          y += node.offsetTop;
          node = node.offsetParent as HTMLElement | null;
        }
        return { x, y, sw, sh };
      });
      setPositions(next);
    };

    compute();

    const ro = new ResizeObserver(compute);
    ro.observe(section);
    (cardsRef.current ?? []).forEach((c) => c && ro.observe(c));
    window.addEventListener('resize', compute);
    // Recompute once fonts/images have settled and shifted the layout.
    const settle = window.setTimeout(compute, 350);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', compute);
      window.clearTimeout(settle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionRef, cardsRef]);

  return positions;
}

/**
 * Returns how wide the shared background image would render if scaled to fill
 * the section height (backgroundSize: auto <sh>px). Loads the image once to
 * read its natural dimensions.
 */
export function useImageWidth(src: string, sectionHeight: number): number {
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.onload = () => {
      if (!cancelled) setNatural({ w: img.naturalWidth, h: img.naturalHeight });
    };
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  if (!natural || !sectionHeight || !natural.h) return 0;
  return natural.w * (sectionHeight / natural.h);
}

/** True when the viewport matches the mobile breakpoint (max-width: 767px). */
export function useIsMobile(): boolean {
  const query = '(max-width: 767px)';
  const [isMobile, setIsMobile] = useState<boolean>(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    setIsMobile(mq.matches);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isMobile;
}

/**
 * Reveals a set of elements with a staggered fade + rise the first time the
 * container crosses the given IntersectionObserver threshold.
 */
export function useStaggeredReveal(count: number, threshold = 0.15) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const getAnimStyle = (index: number): CSSProperties => {
    const clamped = Math.min(index, Math.max(count - 1, 0));
    const delay = clamped * 120;
    return {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    };
  };

  return { containerRef, getAnimStyle };
}

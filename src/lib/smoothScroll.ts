import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Sanftes, gleitendes Scrollen für die ganze Seite (Trägheit / Momentum).
 * Nutzt echtes Scrollen, damit sticky Elemente (Stapelkarten, Navbar) intakt bleiben.
 * Bei "reduzierte Bewegung" oder auf Touch bleibt das native Scrollen aktiv.
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const lenis = new Lenis({
      lerp: 0.11,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Anker-Links (#kontakt usw.) sanft ansteuern, mit Versatz für die fixe Navbar.
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -88 });
    };
    document.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('click', onClick);
      lenis.destroy();
    };
  }, []);
}

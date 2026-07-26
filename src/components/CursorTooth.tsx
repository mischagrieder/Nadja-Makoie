import { useEffect, useRef } from 'react';

/**
 * Ein kleiner blauer Zahn, der dem Mauszeiger sanft folgt und dezent schimmert.
 * Bewusst zurückhaltend: nur ein leichtes Glimmen, kein Ersatz für den Cursor.
 * Wird auf Touch-Geräten und bei "reduzierte Bewegung" nicht angezeigt.
 */
export default function CursorTooth() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduce) return;

    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let shown = false;
    let frame = 0;
    let idleTimer = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!shown) {
        shown = true;
        x = tx;
        y = ty;
        el.style.opacity = '1';
      }
      el.style.setProperty('--active', '1');
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => el.style.setProperty('--active', '0.45'), 140);
    };

    const loop = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
      window.clearTimeout(idleTimer);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="cursor-tooth pointer-events-none fixed left-0 top-0 z-[70] opacity-0"
      style={{ willChange: 'transform' }}
    >
      <div className="cursor-tooth-inner">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8.5 3.8C6.7 3.8 5.2 5.1 5.2 7.3c0 2.8 1.1 4.7 1.7 7.9.3 1.7.4 3.8 1.5 3.8s.9-1.9 2.4-1.9 1.3 1.9 2.4 1.9 1.2-2.1 1.5-3.8c.6-3.2 1.7-5.1 1.7-7.9 0-2.2-1.5-3.5-3.3-3.5-1.5 0-2.2.9-3.3.9s-1.8-.9-3.3-.9z" />
        </svg>
      </div>
    </div>
  );
}

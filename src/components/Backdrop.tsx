import { useEffect, useRef } from 'react';
import { IMG } from '../data';

/**
 * Das Startbild liegt fest im Hintergrund (fixed) und bleibt beim Scrollen stehen.
 * Der Inhalt scrollt darüber nach oben, während das Bild langsam sehr transparent
 * wird und nur noch ganz dezent zu sehen ist, damit die Seite nicht nur weiss wirkt.
 */
export default function Backdrop() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight || 800;
      const y = window.scrollY;
      // Oben gut sichtbar, verblasst beim Scrollen auf einen dezenten Rest, der
      // aber durchgehend leicht sichtbar bleibt (nicht ganz verschwindet).
      const op = Math.max(0.18, 1 - y / (vh * 0.8));
      img.style.opacity = op.toFixed(3);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 bg-ivory pointer-events-none">
      <img
        ref={imgRef}
        src={IMG.hero}
        alt=""
        style={{ filter: 'saturate(0.82) contrast(0.86)', willChange: 'opacity' }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* heller Schleier: senkt den Kontrast des Startbilds, damit der Inhalt klar
          im Vordergrund steht, das Bild aber dezent durchscheint */}
      <div className="absolute inset-0 bg-ivory/20" />
    </div>
  );
}

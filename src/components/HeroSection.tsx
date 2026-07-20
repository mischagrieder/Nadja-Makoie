import { useRef } from 'react';
import MaskedCard from './MaskedCard';
import {
  mergeRefs,
  useImageWidth,
  useIsMobile,
  useMaskPositions,
  useStaggeredReveal,
} from '../lib/hooks';
import { HERO_IMAGE, featureBars } from '../data';

// White overlay text needs a touch of shadow to stay legible on bright imagery.
const whiteShadow = { textShadow: '0 1px 10px rgba(0,0,0,0.35)' } as const;

export default function HeroSection() {
  const section1Ref = useRef<HTMLElement>(null);
  const cardsRef = useRef<Array<HTMLElement | null>>([]);
  const s1Reveal = useStaggeredReveal(4);

  const positions = useMaskPositions(section1Ref, cardsRef);
  const isMobile = useIsMobile();
  const focalX = isMobile ? 0.7 : 0.8;
  const sectionHeight = positions[0]?.sh ?? 0;
  const imageWidth = useImageWidth(HERO_IMAGE, sectionHeight);

  return (
    <section
      id="start"
      ref={mergeRefs(section1Ref, s1Reveal.containerRef)}
      className="relative h-screen w-full overflow-hidden flex flex-col pt-24 md:pt-24 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2"
    >
      {/* Three feature bars – each a window into the shared hero image */}
      {featureBars.map((label, i) => (
        <MaskedCard
          key={label}
          bgImage={HERO_IMAGE}
          position={positions[i]}
          imageWidth={imageWidth}
          focalX={focalX}
          cardRef={(el) => {
            cardsRef.current[i] = el;
          }}
          style={s1Reveal.getAnimStyle(i)}
          className="w-full h-14 md:h-20 shrink-0 rounded-xl md:rounded-2xl overflow-hidden relative"
        >
          <span className="flex items-center justify-center h-full text-black text-lg md:text-3xl font-bold text-center relative z-10">
            {label}
          </span>
        </MaskedCard>
      ))}

      {/* Main hero card */}
      <MaskedCard
        bgImage={HERO_IMAGE}
        position={positions[3]}
        imageWidth={imageWidth}
        focalX={focalX}
        cardRef={(el) => {
          cardsRef.current[3] = el;
        }}
        style={s1Reveal.getAnimStyle(3)}
        className="w-full flex-1 min-h-0 rounded-xl md:rounded-2xl overflow-hidden relative"
      >
        {/* Top-left intro */}
        <p className="absolute top-4 left-4 md:top-7 md:left-7 text-black text-xs md:text-sm font-semibold leading-4 md:leading-5 max-w-[200px] md:max-w-[300px] z-10">
          Fundierte, angstfreie Behandlung
          <br />
          mit modernster Technologie
        </p>

        {/* Bottom-left headline */}
        <div className="absolute bottom-5 left-3 md:bottom-8 md:left-4 z-10">
          <span className="block text-black text-xs md:text-sm font-semibold mb-1 md:mb-2">
            Ihre Zahnarztpraxis in Olten
          </span>
          <h1 className="text-black text-[clamp(3rem,11vw,11rem)] font-bold leading-[0.79] tracking-tight">
            Dental
            <br />
            Wellness
          </h1>
        </div>

        {/* Bottom-right CTA */}
        <a
          href="#kontakt"
          style={whiteShadow}
          className="absolute bottom-6 right-4 md:bottom-10 md:right-8 text-white text-xs md:text-sm font-semibold z-10 hover:opacity-80 transition-opacity"
        >
          Kostenlose Erstberatung →
        </a>
      </MaskedCard>
    </section>
  );
}

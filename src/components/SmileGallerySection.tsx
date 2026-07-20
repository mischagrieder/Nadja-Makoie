import { useRef } from 'react';
import MaskedCard from './MaskedCard';
import {
  mergeRefs,
  useImageWidth,
  useIsMobile,
  useMaskPositions,
  useStaggeredReveal,
} from '../lib/hooks';
import { CLINIC, SECTION2_IMAGE, services } from '../data';

const whiteShadow = { textShadow: '0 1px 10px rgba(0,0,0,0.35)' } as const;

export default function SmileGallerySection() {
  const section2Ref = useRef<HTMLElement>(null);
  const cardsRef = useRef<Array<HTMLElement | null>>([]);
  const s2Reveal = useStaggeredReveal(4);

  const positions = useMaskPositions(section2Ref, cardsRef);
  const isMobile = useIsMobile();
  const focalX = isMobile ? 0.65 : 0.8;
  const sectionHeight = positions[0]?.sh ?? 0;
  const imageWidth = useImageWidth(SECTION2_IMAGE, sectionHeight);

  const setCard = (i: number) => (el: HTMLElement | null) => {
    cardsRef.current[i] = el;
  };

  return (
    <section
      id="behandlungen"
      ref={mergeRefs(section2Ref, s2Reveal.containerRef)}
      className="relative min-h-screen md:h-screen w-full overflow-hidden flex flex-col pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2"
    >
      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto_auto_auto] md:grid-rows-[1fr_1fr_0.8fr] gap-1.5 md:gap-2">
        {/* Card 0 – Top left */}
        <MaskedCard
          bgImage={SECTION2_IMAGE}
          position={positions[0]}
          imageWidth={imageWidth}
          focalX={focalX}
          cardRef={setCard(0)}
          style={s2Reveal.getAnimStyle(0)}
          className="rounded-xl md:rounded-2xl overflow-hidden relative min-h-[160px] md:min-h-0"
        >
          <h2
            style={whiteShadow}
            className="absolute top-4 left-5 md:top-6 md:left-7 text-white md:text-black text-2xl md:text-3xl font-bold z-10"
          >
            Ihr Lächeln
          </h2>
          <span
            style={whiteShadow}
            className="absolute bottom-4 left-5 md:bottom-6 md:left-7 text-white md:text-black text-xs md:text-sm font-semibold z-10"
          >
            Ästhetik, Bleaching &amp; Veneers
          </span>
        </MaskedCard>

        {/* Card 1 – Top right (spans two rows) */}
        <MaskedCard
          bgImage={SECTION2_IMAGE}
          position={positions[1]}
          imageWidth={imageWidth}
          focalX={focalX}
          cardRef={setCard(1)}
          style={s2Reveal.getAnimStyle(1)}
          className="md:row-span-2 rounded-xl md:rounded-2xl overflow-hidden relative min-h-[200px] md:min-h-0"
        >
          <p
            style={whiteShadow}
            className="absolute bottom-16 left-5 md:bottom-20 md:left-7 text-white text-xs md:text-sm font-semibold leading-4 md:leading-5 z-10"
          >
            Sie wünschen sich ein strahlendes Lächeln?
            <br />
            Rufen Sie uns an – wir beraten Sie gerne.
          </p>
          <a
            href={`tel:${CLINIC.phoneHref}`}
            className="absolute bottom-4 right-4 md:bottom-6 md:right-6 px-5 py-3 md:px-8 md:py-5 bg-white rounded-full text-black text-base md:text-xl font-bold z-10 hover:scale-105 transition-transform"
          >
            Anrufen
          </a>
        </MaskedCard>

        {/* Card 2 – Bottom left */}
        <MaskedCard
          bgImage={SECTION2_IMAGE}
          position={positions[2]}
          imageWidth={imageWidth}
          focalX={focalX}
          cardRef={setCard(2)}
          style={s2Reveal.getAnimStyle(2)}
          className="rounded-xl md:rounded-2xl overflow-hidden relative min-h-[160px] md:min-h-0"
        >
          <h2
            style={whiteShadow}
            className="absolute top-4 left-5 md:top-6 md:left-7 text-white md:text-black text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9] z-10"
          >
            Strahlendes
            <br />
            Lächeln
          </h2>
        </MaskedCard>

        {/* Card 3 – Bottom full width (services) */}
        <MaskedCard
          bgImage={SECTION2_IMAGE}
          position={positions[3]}
          imageWidth={imageWidth}
          focalX={focalX}
          cardRef={setCard(3)}
          style={s2Reveal.getAnimStyle(3)}
          className="col-span-1 md:col-span-2 rounded-xl md:rounded-2xl overflow-hidden relative min-h-[200px] md:min-h-0"
        >
          <div className="absolute inset-0 z-10 flex flex-wrap md:flex-nowrap gap-1.5 md:gap-2 p-2 md:p-3">
            {services.map((svc) => (
              <div
                key={svc.name}
                className={`flex-1 min-w-[calc(50%-4px)] md:min-w-0 rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between ${
                  svc.active ? 'bg-white/90 backdrop-blur-md' : 'bg-white/20 backdrop-blur-xl'
                }`}
              >
                <h3
                  style={svc.active ? undefined : whiteShadow}
                  className={`text-xl md:text-4xl font-bold leading-[1.05] whitespace-pre-line ${
                    svc.active ? 'text-black' : 'text-white'
                  }`}
                >
                  {svc.name}
                </h3>
                {svc.num && (
                  <span
                    className={`self-end w-8 h-8 md:w-12 md:h-12 rounded-full border flex items-center justify-center text-xs md:text-sm font-semibold ${
                      svc.active ? 'border-black text-black' : 'border-white text-white'
                    }`}
                  >
                    {svc.num}
                  </span>
                )}
              </div>
            ))}
          </div>
        </MaskedCard>
      </div>
    </section>
  );
}

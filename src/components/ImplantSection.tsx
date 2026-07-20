import { useStaggeredReveal } from '../lib/hooks';
import { SECTION3_BG, SECTION3_IMG1, SECTION3_IMG2 } from '../data';

const whiteShadow = { textShadow: '0 1px 10px rgba(0,0,0,0.35)' } as const;

function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={`rotate-[-45deg] ${className}`}
      aria-hidden="true"
    >
      <path
        d="M1 7h12m0 0L8 2m5 5L8 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ImplantSection() {
  const s3Reveal = useStaggeredReveal(4);

  return (
    <section
      id="implantate"
      ref={s3Reveal.containerRef}
      className="relative min-h-screen md:h-screen w-full overflow-hidden flex flex-col pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2"
    >
      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-1.5 md:gap-2">
          {/* Heading card */}
          <div
            style={s3Reveal.getAnimStyle(0)}
            className="rounded-xl md:rounded-2xl bg-stone-50 p-5 md:p-7 flex flex-col justify-between flex-[1.2] min-h-[180px] md:min-h-0"
          >
            <h2 className="text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.95] text-black">
              Implantate
              <br />
              &amp; Ersatz
            </h2>
            <p className="text-xs md:text-sm font-semibold text-black">
              Fehlende Zähne dauerhaft ersetzen
            </p>
          </div>

          {/* Two image cards */}
          <div
            style={s3Reveal.getAnimStyle(1)}
            className="flex gap-1.5 md:gap-2 flex-1 min-h-[140px] md:min-h-0"
          >
            <div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src={SECTION3_IMG1}
                alt="Sanfte, moderne Zahnbehandlung in der Praxis Dental Wellness Olten"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src={SECTION3_IMG2}
                alt="Zahnimplantat – hochwertiger, dauerhafter Zahnersatz"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Consultation card */}
          <div
            style={s3Reveal.getAnimStyle(2)}
            className="rounded-xl md:rounded-2xl bg-zinc-200 p-5 md:p-7 flex items-end justify-between flex-[0.8] min-h-[160px] md:min-h-0"
          >
            <div>
              <p className="text-xs md:text-sm font-semibold text-black mb-2 md:mb-3">Beratung</p>
              <h3 className="text-xl md:text-3xl font-bold text-black leading-6 md:leading-8">
                Zahnersatz
                <br />
                &amp; feste
                <br />
                Zähne
              </h3>
            </div>
            <a
              href="#kontakt"
              className="px-5 py-3 md:px-8 md:py-5 bg-white rounded-full text-black text-base md:text-xl font-bold hover:scale-105 transition-transform whitespace-nowrap"
            >
              Online buchen
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN – tall image with overlay cards */}
        <div
          style={s3Reveal.getAnimStyle(3)}
          className="rounded-xl md:rounded-2xl overflow-hidden relative min-h-[350px] md:min-h-0"
        >
          <img
            src={SECTION3_BG}
            alt="Zufriedene, entspannte Patientin nach der Behandlung bei Dental Wellness Olten"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5 flex gap-1.5 md:gap-2">
            {/* Overlay card 1 – white */}
            <a
              href="#kontakt"
              className="group flex-1 bg-white rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between h-36 md:h-52 hover:bg-neutral-50 transition-colors"
            >
              <h4 className="text-lg md:text-2xl font-bold text-black leading-5 md:leading-7">
                Ablauf einer
                <br />
                Implantat-
                <br />
                Behandlung
              </h4>
              <span className="self-end w-9 h-9 md:w-12 md:h-12 rounded-full border border-black flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowIcon />
              </span>
            </a>

            {/* Overlay card 2 – glass */}
            <a
              href="#kontakt"
              className="group flex-1 bg-white/20 backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between h-36 md:h-52 hover:bg-white/30 transition-colors"
            >
              <h4
                style={whiteShadow}
                className="text-lg md:text-2xl font-bold text-white leading-5 md:leading-7"
              >
                Pflege &amp;
                <br />
                Prophylaxe
                <br />
                danach
              </h4>
              <span className="self-end w-9 h-9 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowIcon className="text-white" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

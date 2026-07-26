import { stats } from '../data';
import Reveal from './Reveal';

export default function StatsBar() {
  return (
    <section className="bg-sand/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="text-center">
            <div className="font-serif text-forest text-4xl md:text-5xl font-semibold">
              {s.value}
            </div>
            <div className="eyebrow text-bronze mt-2">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

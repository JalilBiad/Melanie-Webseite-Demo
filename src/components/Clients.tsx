import { useReveal } from '@/hooks/useReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { stats, clients } from '@/data/content';

function StatItem({
  stat,
  start,
  index,
}: {
  stat: { value: number; suffix: string; label: string };
  start: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value, 2000, start);

  return (
    <div
      className={`reveal reveal-delay-${index + 1} ${start ? 'is-visible' : ''} text-center`}
    >
      <div className="font-serif text-4xl lg:text-5xl text-clay-600">
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm text-stone-500 mt-2">{stat.label}</div>
    </div>
  );
}

export function Clients() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="kunden" className="py-24 lg:py-32 bg-stone-100/60">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center mb-16`}
        >
          <p className="text-clay-600 text-sm uppercase tracking-wider mb-4">
            Kunden & Referenzen
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-stone-800 max-w-2xl mx-auto leading-tight">
            Organisationen, die mir vertraut haben
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} start={visible} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((client) => (
            <div
              key={client}
              className="text-center text-sm text-stone-500 hover:text-stone-700 transition-colors py-3 px-2 border border-stone-200 rounded-lg bg-white/60"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

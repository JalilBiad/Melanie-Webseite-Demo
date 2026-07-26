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
      className={`reveal reveal-delay-${index + 1} ${start ? 'is-visible' : ''} text-center pb-8 border-b border-ocher/20`}
    >
      <div className="font-display text-4xl lg:text-5xl text-ocher tracking-tightest font-medium">
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm text-muted-300 mt-2">{stat.label}</div>
    </div>
  );
}

export function Clients() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="kunden" className="py-28 lg:py-36 bg-ink-900/40">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center mb-16`}
        >
          <p className="text-ocher text-xs tracking-[0.2em] uppercase mb-4">
            Kunden & Referenzen
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-bone-100 max-w-2xl mx-auto leading-tight tracking-tightest font-medium">
            Organisationen, die mir vertraut haben
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} start={visible} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-ocher/10 border border-ocher/10">
          {clients.map((client) => (
            <div
              key={client}
              className="text-center text-sm text-muted-400 hover:text-bone-200 transition-colors py-4 px-3 bg-ink-950"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

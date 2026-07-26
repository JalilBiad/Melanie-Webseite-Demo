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
      <div className="font-display text-5xl lg:text-6xl text-leaf-500 font-light">
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm text-muted mt-2 font-light">{stat.label}</div>
    </div>
  );
}

export function Clients() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="kunden" className="py-28 lg:py-36 bg-sage-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center mb-16`}
        >
          <p className="text-leaf-500 text-sm uppercase tracking-[0.2em] mb-5">
            Kunden & Referenzen
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-moss-800 font-light max-w-2xl mx-auto leading-[1.15] text-balance">
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
              className="text-center text-sm text-muted hover:text-leaf-500 transition-colors duration-300 py-3 px-2 border border-sage-200 rounded-lg bg-paper-50 font-light"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

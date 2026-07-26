import { useReveal } from '@/hooks/useReveal';
import { strengths } from '@/data/content';
import { Petal } from '@/components/Petal';

export function Strengths() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="staerken" className="py-28 lg:py-36 bg-sage-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center mb-16`}
        >
          <p className="text-leaf-500 text-sm uppercase tracking-[0.2em] mb-5">
            Was mich auszeichnet
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-moss-800 font-light max-w-2xl mx-auto leading-[1.15] text-balance">
            Eine seltene Kombination aus Tiefe, Weite und Erfahrung
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${i % 3 + 1} ${
                visible ? 'is-visible' : ''
              } group bg-paper-50 border border-sage-200 hover:border-leaf-400 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1`}
            >
              <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center mb-5 group-hover:bg-blossom-200/60 transition-colors duration-500">
                <Petal size={22} className="text-leaf-500" />
              </div>
              <h3 className="font-display text-2xl text-moss-800 font-light mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed font-light">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

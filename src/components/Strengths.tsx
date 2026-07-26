import { useReveal } from '@/hooks/useReveal';
import { strengths } from '@/data/content';
import {
  Brain,
  Sparkles,
  Telescope,
  Scale,
  Award,
  Globe,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Sparkles,
  Telescope,
  Scale,
  Award,
  Globe,
};

export function Strengths() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="staerken" className="py-28 lg:py-36 bg-ink-900/40">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center mb-16`}
        >
          <p className="text-ocher text-xs tracking-[0.2em] uppercase mb-4">
            Was mich auszeichnet
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-bone-100 max-w-2xl mx-auto leading-tight tracking-tightest font-medium">
            Eine seltene Kombination aus Tiefe, Weite und Erfahrung
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ocher/15 border border-ocher/15">
          {strengths.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Sparkles;
            return (
              <div
                key={s.title}
                className={`reveal reveal-delay-${i % 3 + 1} ${
                  visible ? 'is-visible' : ''
                } group bg-ink-950 p-8 transition-colors duration-300 hover:bg-ink-900/60`}
              >
                <div className="w-10 h-10 flex items-center justify-center mb-5 border border-ocher/30 group-hover:border-ocher/60 transition-colors duration-300">
                  <Icon className="text-ocher" size={20} />
                </div>
                <h3 className="font-display text-lg text-bone-100 mb-3 tracking-tightest font-medium">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-300 leading-relaxed">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
    <section id="staerken" className="py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center mb-16`}
        >
          <p className="text-sage-600 text-sm uppercase tracking-wider mb-4">
            Was mich auszeichnet
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-sage-900 max-w-2xl mx-auto leading-tight">
            Eine seltene Kombination aus Tiefe, Weite und Erfahrung
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Sparkles;
            return (
              <div
                key={s.title}
                className={`reveal reveal-delay-${i % 3 + 1} ${
                  visible ? 'is-visible' : ''
                } group bg-white border border-sand-200/70 hover:border-sage-400/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sand-300/40`}
              >
                <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-5 group-hover:bg-sage-200 transition-colors duration-300">
                  <Icon className="text-sage-700" size={24} />
                </div>
                <h3 className="font-serif text-xl text-sage-900 mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-sand-700 leading-relaxed">
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

import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { offers, type Offer } from '@/data/content';
import {
  Compass,
  Users,
  Scale,
  AudioLines,
  HeartPulse,
  GraduationCap,
  X,
  ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Users,
  Scale,
  AudioLines,
  HeartPulse,
  GraduationCap,
};

export function Offers() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [selected, setSelected] = useState<Offer | null>(null);

  const scrollToContact = () => {
    setSelected(null);
    document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="angebote" className="py-28 lg:py-36 bg-ink-950">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center mb-16`}
        >
          <p className="text-ocher text-xs tracking-[0.2em] uppercase mb-4">
            Angebote
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-bone-100 max-w-2xl mx-auto leading-tight tracking-tightest font-medium">
            Wo Sie mit mir arbeiten können
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ocher/15 border border-ocher/15">
          {offers.map((offer, i) => {
            const Icon = iconMap[offer.icon] ?? Compass;
            return (
              <div
                key={offer.id}
                className={`reveal reveal-delay-${i % 3 + 1} ${
                  visible ? 'is-visible' : ''
                } group bg-ink-950 p-8 transition-colors duration-300 hover:bg-ink-900/60 cursor-pointer`}
                onClick={() => setSelected(offer)}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 flex items-center justify-center border border-ocher/30 group-hover:border-ocher/60 transition-colors duration-300">
                    <Icon className="text-ocher" size={20} />
                  </div>
                  <div className="flex gap-1.5">
                    {offer.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] tracking-[0.15em] uppercase px-2 py-1 border ${
                          tag === 'B2B'
                            ? 'border-muted/40 text-muted-300'
                            : 'border-ocher/40 text-ocher'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-ocher text-[11px] tracking-[0.15em] uppercase mb-2">
                  {offer.subtitle}
                </p>
                <h3 className="font-display text-lg text-bone-100 mb-3 tracking-tightest font-medium">
                  {offer.title}
                </h3>
                <p className="text-sm text-muted-300 leading-relaxed mb-5">
                  {offer.description}
                </p>
                <div className="flex items-center gap-2 text-ocher text-sm group-hover:text-ocher transition-colors">
                  Mehr erfahren
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/85 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-ink-900 border border-ocher/20 max-w-2xl w-full p-8 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-ocher text-[11px] tracking-[0.15em] uppercase mb-2">
                  {selected.subtitle}
                </p>
                <h3 className="font-display text-2xl text-bone-100 tracking-tightest font-medium">
                  {selected.title}
                </h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-muted-400 hover:text-bone-100 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-muted-300 leading-relaxed mb-6">
              {selected.details}
            </p>
            <div className="flex gap-2 mb-6">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs tracking-[0.15em] uppercase px-3 py-1.5 border ${
                    tag === 'B2B'
                      ? 'border-muted/40 text-muted-300'
                      : 'border-ocher/40 text-ocher'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={scrollToContact}
              className="w-full bg-bone-100 text-ink-950 py-3.5 rounded-[6px] font-medium transition-colors hover:bg-bone-200"
            >
              Interesse an diesem Angebot? Kennenlerngespräch anfragen
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

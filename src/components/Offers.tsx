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
    <section id="angebote" className="py-24 lg:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center mb-16`}
        >
          <p className="text-sage-600 text-sm uppercase tracking-wider mb-4">
            Angebote
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-sage-900 max-w-2xl mx-auto leading-tight">
            Wo Sie mit mir arbeiten können
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, i) => {
            const Icon = iconMap[offer.icon] ?? Compass;
            return (
              <div
                key={offer.id}
                className={`reveal reveal-delay-${i % 3 + 1} ${
                  visible ? 'is-visible' : ''
                } group bg-white border border-sand-200/70 hover:border-sage-400/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sand-300/40 cursor-pointer`}
                onClick={() => setSelected(offer)}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center group-hover:bg-sage-200 transition-colors duration-300">
                    <Icon className="text-sage-700" size={24} />
                  </div>
                  <div className="flex gap-1.5">
                    {offer.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-full ${
                          tag === 'B2B'
                            ? 'bg-sage-100 text-sage-700'
                            : 'bg-gold-100 text-gold-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gold-600 text-xs uppercase tracking-wider mb-2">
                  {offer.subtitle}
                </p>
                <h3 className="font-serif text-xl text-sage-900 mb-3">
                  {offer.title}
                </h3>
                <p className="text-sm text-sand-700 leading-relaxed mb-5">
                  {offer.description}
                </p>
                <div className="flex items-center gap-2 text-sage-600 text-sm group-hover:text-sage-700 transition-colors">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sage-950/30 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white border border-sand-200 rounded-2xl max-w-2xl w-full p-8 max-h-[85vh] overflow-y-auto shadow-2xl shadow-sage-900/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-gold-600 text-xs uppercase tracking-wider mb-2">
                  {selected.subtitle}
                </p>
                <h3 className="font-serif text-2xl text-sage-900">
                  {selected.title}
                </h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-sand-500 hover:text-sage-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-sand-700 leading-relaxed mb-6">
              {selected.details}
            </p>
            <div className="flex gap-2 mb-6">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs uppercase tracking-wider px-3 py-1.5 rounded-full ${
                    tag === 'B2B'
                      ? 'bg-sage-100 text-sage-700'
                      : 'bg-gold-100 text-gold-700'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={scrollToContact}
              className="w-full bg-sage-600 hover:bg-sage-700 text-cream-50 py-3.5 rounded-full font-medium transition-colors shadow-sm hover:shadow-md hover:shadow-sage-700/20"
            >
              Interesse an diesem Angebot? Kennenlerngespräch anfragen
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

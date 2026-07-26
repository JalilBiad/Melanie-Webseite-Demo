import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { offers, type Offer } from '@/data/content';
import { X, ArrowRight } from 'lucide-react';
import { Petal } from '@/components/Petal';

export function Offers() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [selected, setSelected] = useState<Offer | null>(null);

  const scrollToContact = () => {
    setSelected(null);
    document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="angebote" className="py-28 lg:py-36 bg-paper-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center mb-16`}
        >
          <p className="text-leaf-500 text-sm uppercase tracking-[0.2em] mb-5">
            Angebote
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-moss-800 font-light max-w-2xl mx-auto leading-[1.15] text-balance">
            Wo Sie mit mir arbeiten können
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <div
              key={offer.id}
              className={`reveal reveal-delay-${i % 3 + 1} ${
                visible ? 'is-visible' : ''
              } group bg-paper-50 border border-sage-200 hover:border-leaf-400 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 cursor-pointer`}
              onClick={() => setSelected(offer)}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center group-hover:bg-blossom-200/60 transition-colors duration-500">
                  <Petal size={22} className="text-leaf-500" />
                </div>
                <div className="flex gap-1.5">
                  {offer.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        tag === 'B2B'
                          ? 'bg-sage-100 text-leaf-600'
                          : 'bg-pollen-200/60 text-pollen-500'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-leaf-500 text-xs uppercase tracking-[0.2em] mb-2">
                {offer.subtitle}
              </p>
              <h3 className="font-display text-2xl text-moss-800 font-light mb-3">
                {offer.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-5 font-light">
                {offer.description}
              </p>
              <div className="flex items-center gap-2 text-leaf-500 text-sm group-hover:text-leaf-400 transition-colors">
                Mehr erfahren
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-moss-900/30 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-paper-50 border border-sage-200 rounded-2xl max-w-2xl w-full p-8 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-leaf-500 text-xs uppercase tracking-[0.2em] mb-2">
                  {selected.subtitle}
                </p>
                <h3 className="font-display text-3xl text-moss-800 font-light">
                  {selected.title}
                </h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-muted hover:text-moss-800 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-muted leading-relaxed mb-6 font-light">
              {selected.details}
            </p>
            <div className="flex gap-2 mb-6">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs uppercase tracking-wider px-3 py-1.5 rounded-full ${
                    tag === 'B2B'
                      ? 'bg-sage-100 text-leaf-600'
                      : 'bg-pollen-200/60 text-pollen-500'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={scrollToContact}
              className="w-full bg-leaf-500 hover:bg-leaf-400 text-paper-50 py-3.5 rounded-full font-medium transition-colors duration-300"
            >
              Interesse an diesem Angebot? Kennenlerngespräch anfragen
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

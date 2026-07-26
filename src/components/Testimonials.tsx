import { useState, useEffect, useCallback } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { testimonials } from '@/data/content';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % testimonials.length),
    []
  );
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="stimmen" className="py-24 lg:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center mb-16`}
        >
          <p className="text-sage-600 text-sm uppercase tracking-wider mb-4">
            Stimmen
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-sage-900 max-w-2xl mx-auto leading-tight">
            Was Menschen über die Zusammenarbeit sagen
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full shrink-0 px-4">
                  <div className="text-center">
                    <Quote className="text-gold-500 mx-auto mb-6" size={40} />
                    <p className="font-serif text-xl lg:text-2xl text-sage-800 leading-relaxed mb-8 italic">
                      „{t.quote}"
                    </p>
                    <p className="text-sage-700 font-medium">{t.name}</p>
                    <p className="text-sm text-sand-500 mt-1">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 text-sand-400 hover:text-sage-700 transition-colors"
            aria-label="Vorheriges Zitat"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 text-sand-400 hover:text-sage-700 transition-colors"
            aria-label="Nächstes Zitat"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-8 bg-sage-500'
                  : 'w-2 bg-sand-300 hover:bg-sand-400'
              }`}
              aria-label={`Zitat ${i + 1}`}
            />
          ))}
        </div>

        <p className="text-center text-xs text-sand-500 mt-10">
          Hinweis: Diese Kundenstimmen sind Demo-Inhalte und werden später durch
          echte Referenzen ersetzt.
        </p>
      </div>
    </section>
  );
}

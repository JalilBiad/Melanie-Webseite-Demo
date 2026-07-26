import { useState, useEffect, useCallback } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { testimonials } from '@/data/content';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Petal } from '@/components/Petal';

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
    <section id="stimmen" className="py-28 lg:py-36 bg-paper-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center mb-16`}
        >
          <p className="text-leaf-500 text-sm uppercase tracking-[0.2em] mb-5">
            Stimmen
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-moss-800 font-light max-w-2xl mx-auto leading-[1.15] text-balance">
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
                    <Petal
                      size={40}
                      className="text-blossom-400 mx-auto mb-6"
                    />
                    <p className="font-display text-2xl lg:text-3xl text-moss-800 leading-relaxed mb-8 italic font-light text-balance">
                      „{t.quote}"
                    </p>
                    <p className="text-leaf-500 font-medium">{t.name}</p>
                    <p className="text-sm text-muted mt-1 font-light">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 text-muted hover:text-leaf-500 transition-colors duration-300"
            aria-label="Vorheriges Zitat"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 text-muted hover:text-leaf-500 transition-colors duration-300"
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
                  ? 'w-8 bg-leaf-500'
                  : 'w-2 bg-sage-300 hover:bg-sage-400'
              }`}
              aria-label={`Zitat ${i + 1}`}
            />
          ))}
        </div>

        <p className="text-center text-xs text-muted mt-10 font-light">
          Hinweis: Diese Kundenstimmen sind Demo-Inhalte und werden später durch
          echte Referenzen ersetzt.
        </p>
      </div>
    </section>
  );
}

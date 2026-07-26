import { ArrowRight } from 'lucide-react';
import { Aura } from '@/components/Aura';
import { Petal } from '@/components/Petal';

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <Aura variant="hero" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-leaf-500 text-sm mb-8 animate-fade-in">
            <Petal size={16} className="text-blossom-400" />
            <span className="tracking-[0.2em] uppercase text-xs text-muted">
              Coaching · Mediation · Führungsentwicklung
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-moss-800 font-light leading-[1.1] mb-8 animate-fade-in-up text-balance">
            Klar in die Führung.
            <br />
            <span className="text-leaf-500 italic">Stimmig im Leben.</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-12 max-w-xl animate-fade-in-up font-light">
            Coaching, Mediation & Führungsentwicklung für Menschen und
            Organisationen, die wirklich weitergehen wollen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <button
              onClick={() => scrollTo('#kontakt')}
              className="bg-leaf-500 hover:bg-leaf-400 text-paper-50 px-7 py-3.5 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
            >
              Kostenloses Kennenlerngespräch
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo('#angebote')}
              className="border border-sage-300 hover:border-leaf-400 text-moss-800 hover:text-leaf-500 px-7 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Angebote entdecken
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-leaf-400/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

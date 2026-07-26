import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/50" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <div className="mb-6 animate-fade-in">
            <span className="text-ocher text-xs tracking-[0.2em] uppercase border-b border-ocher/40 pb-1">
              Coaching · Mediation · Führungsentwicklung
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-bone-100 leading-[1.1] mb-6 animate-fade-in-up tracking-tightest font-medium text-balance">
            Klar in die Führung.
            <br />
            <span className="text-ocher">Stimmig im Leben.</span>
          </h1>
          <p className="text-lg text-muted-300 leading-relaxed mb-10 max-w-xl animate-fade-in-up">
            Coaching, Mediation & Führungsentwicklung für Menschen und
            Organisationen, die wirklich weitergehen wollen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <button
              onClick={() => scrollTo('#kontakt')}
              className="bg-bone-100 text-ink-950 px-7 py-3.5 rounded-[6px] font-medium transition-all duration-200 hover:bg-bone-200 inline-flex items-center justify-center gap-2"
            >
              Kostenloses Kennenlerngespräch
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo('#angebote')}
              className="border border-bone-100/60 hover:border-bone-100 text-bone-100 px-7 py-3.5 rounded-[6px] font-medium transition-all duration-200"
            >
              Angebote entdecken
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-ocher/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

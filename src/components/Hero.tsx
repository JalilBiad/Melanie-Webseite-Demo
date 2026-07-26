import { ArrowRight, Sparkles } from 'lucide-react';

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
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-cream-50 via-cream-50/90 to-cream-50/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-cream-50/80 via-transparent to-cream-50/40" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-sage-700 text-sm mb-6 animate-fade-in">
            <Sparkles size={16} />
            <span className="tracking-wide uppercase text-xs">
              Coaching · Mediation · Führungsentwicklung
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-sage-900 leading-[1.1] mb-6 animate-fade-in-up text-balance">
            Klar in die Führung.
            <br />
            <span className="text-gold-600">Stimmig im Leben.</span>
          </h1>
          <p className="text-lg text-sand-700 leading-relaxed mb-10 max-w-xl animate-fade-in-up">
            Coaching, Mediation & Führungsentwicklung für Menschen und
            Organisationen, die wirklich weitergehen wollen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <button
              onClick={() => scrollTo('#kontakt')}
              className="bg-sage-600 hover:bg-sage-700 text-cream-50 px-7 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-sage-700/25"
            >
              Kostenloses Kennenlerngespräch
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo('#angebote')}
              className="border border-sand-400 hover:border-sage-500 text-sage-800 hover:text-sage-700 px-7 py-3.5 rounded-full font-medium transition-all duration-200"
            >
              Angebote entdecken
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-sage-500/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

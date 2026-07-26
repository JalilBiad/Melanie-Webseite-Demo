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
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-stone-50 via-stone-50/85 to-stone-50/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-50 via-transparent to-stone-50/40" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-clay-600 text-sm mb-6 animate-fade-in">
            <Sparkles size={16} />
            <span className="tracking-wide uppercase text-xs">
              Coaching · Mediation · Führungsentwicklung
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 leading-[1.1] mb-6 animate-fade-in-up text-balance">
            Klar in die Führung.
            <br />
            <span className="text-clay-600">Stimmig im Leben.</span>
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed mb-10 max-w-xl animate-fade-in-up">
            Coaching, Mediation & Führungsentwicklung für Menschen und
            Organisationen, die wirklich weitergehen wollen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <button
              onClick={() => scrollTo('#kontakt')}
              className="bg-clay-600 hover:bg-clay-500 text-white px-7 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
            >
              Kostenloses Kennenlerngespräch
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo('#angebote')}
              className="border border-stone-300 hover:border-clay-400 text-stone-700 hover:text-clay-600 px-7 py-3.5 rounded-full font-medium transition-all duration-200"
            >
              Angebote entdecken
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-clay-400/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

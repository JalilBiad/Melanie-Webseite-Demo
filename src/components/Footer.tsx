export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-cream-100 border-t border-sand-200/80 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-serif text-lg text-sage-800 mb-3">
              Melanie Eberhard
            </p>
            <p className="text-sm text-sand-600 leading-relaxed">
              Diplom-Psychologin · Systemische Coach · Wirtschaftsmediatorin
              (IHK) · Führungskräfte-Trainerin
            </p>
          </div>

          <div>
            <p className="text-sm text-sand-500 mb-3">Navigation</p>
            <div className="flex flex-col gap-2">
              {[
                { href: '#ueber-mich', label: 'Über mich' },
                { href: '#angebote', label: 'Angebote' },
                { href: '#kunden', label: 'Kunden' },
                { href: '#kontakt', label: 'Kontakt' },
              ].map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-left text-sm text-sand-600 hover:text-sage-700 transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-sand-500 mb-3">Kontakt</p>
            <div className="text-sm text-sand-600 space-y-1">
              <p>Köln · 50931 / 50935</p>
              <p>info@melanie-eberhard.de</p>
              <p>www.melanie-eberhard.de</p>
            </div>
          </div>
        </div>

        <div className="border-t border-sand-200/80 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-sand-500">
            © {new Date().getFullYear()} Melanie Eberhard. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-6">
            <button className="text-xs text-sand-500 hover:text-sage-700 transition-colors">
              Impressum
            </button>
            <button className="text-xs text-sand-500 hover:text-sage-700 transition-colors">
              Datenschutz
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

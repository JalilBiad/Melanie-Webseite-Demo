import { Petal } from '@/components/Petal';

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-sage-50 border-t border-sage-200 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-display text-2xl text-moss-800 font-light mb-3">
              Melanie Eberhard
            </p>
            <p className="text-sm text-muted leading-relaxed font-light">
              Diplom-Psychologin · Systemische Coach · Wirtschaftsmediatorin
              (IHK) · Führungskräfte-Trainerin
            </p>
          </div>

          <div>
            <p className="text-sm text-moss-800 mb-3 font-light">Navigation</p>
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
                  className="text-left text-sm text-muted hover:text-leaf-500 transition-colors duration-300 font-light"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-moss-800 mb-3 font-light">Kontakt</p>
            <div className="text-sm text-muted space-y-1 font-light">
              <p>Köln · 50931 / 50935</p>
              <p>info@melanie-eberhard.de</p>
              <p>www.melanie-eberhard.de</p>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted font-light">
            © {new Date().getFullYear()} Melanie Eberhard. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Petal size={14} className="text-blossom-400" />
            <button className="text-xs text-muted hover:text-leaf-500 transition-colors duration-300">
              Impressum
            </button>
            <button className="text-xs text-muted hover:text-leaf-500 transition-colors duration-300">
              Datenschutz
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

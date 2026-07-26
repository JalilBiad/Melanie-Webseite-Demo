import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#ueber-mich', label: 'Über mich' },
  { href: '#staerken', label: 'Stärken' },
  { href: '#angebote', label: 'Angebote' },
  { href: '#kunden', label: 'Kunden' },
  { href: '#stimmen', label: 'Stimmen' },
  { href: '#philosophie', label: 'Philosophie' },
  { href: '#kontakt', label: 'Kontakt' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/90 backdrop-blur-md border-b border-ocher/15 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNav('#hero')}
          className="font-display text-lg text-bone-100 tracking-tightest font-medium"
        >
          Melanie Eberhard
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm text-muted-300 hover:text-bone-100 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#kontakt')}
            className="text-sm bg-bone-100 text-ink-950 px-5 py-2.5 rounded-[6px] font-medium hover:bg-bone-200 transition-colors duration-200"
          >
            Kennenlerngespräch
          </button>
        </nav>

        <button
          className="lg:hidden text-bone-100"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-ink-950/95 backdrop-blur-md border-t border-ocher/15 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-muted-300 hover:text-bone-100 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#kontakt')}
            className="text-center bg-bone-100 text-ink-950 px-5 py-2.5 rounded-[6px] font-medium transition-colors"
          >
            Kennenlerngespräch
          </button>
        </nav>
      )}
    </header>
  );
}

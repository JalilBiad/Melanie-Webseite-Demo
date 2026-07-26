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
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/90 backdrop-blur-md border-b border-sand-200/80 py-3 shadow-sm shadow-sand-200/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNav('#hero')}
          className="font-serif text-xl text-sage-800 tracking-tight"
        >
          Melanie Eberhard
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm text-sand-700 hover:text-sage-700 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#kontakt')}
            className="text-sm bg-sage-600 hover:bg-sage-700 text-cream-50 px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-sage-700/20"
          >
            Kennenlerngespräch
          </button>
        </nav>

        <button
          className="lg:hidden text-sage-800"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-cream-50/98 backdrop-blur-md border-t border-sand-200/80 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-sand-700 hover:text-sage-700 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#kontakt')}
            className="text-center bg-sage-600 hover:bg-sage-700 text-cream-50 px-5 py-2.5 rounded-full transition-colors"
          >
            Kennenlerngespräch
          </button>
        </nav>
      )}
    </header>
  );
}

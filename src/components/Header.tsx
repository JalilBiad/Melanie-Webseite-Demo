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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-paper-50/85 backdrop-blur-md border-b border-sage-200 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNav('#hero')}
          className="font-display text-2xl text-moss-800 tracking-tight font-light"
        >
          Melanie Eberhard
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm text-muted hover:text-leaf-500 transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#kontakt')}
            className="text-sm bg-leaf-500 hover:bg-leaf-400 text-paper-50 px-5 py-2.5 rounded-full transition-colors duration-300"
          >
            Kennenlerngespräch
          </button>
        </nav>

        <button
          className="lg:hidden text-moss-800"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-paper-50/95 backdrop-blur-md border-t border-sage-200 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-muted hover:text-leaf-500 transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#kontakt')}
            className="text-center bg-leaf-500 hover:bg-leaf-400 text-paper-50 px-5 py-2.5 rounded-full transition-colors duration-300"
          >
            Kennenlerngespräch
          </button>
        </nav>
      )}
    </header>
  );
}

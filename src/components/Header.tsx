import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/MAPL_Logo_Colour_2022_-_Copy.png"
            alt="Maithri Aquatech"
            className="h-10 w-auto"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('features')} className="text-sm font-medium hover:text-blue-600 transition">Features</button>
          <button onClick={() => scrollToSection('specs')} className="text-sm font-medium hover:text-blue-600 transition">Specs</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium hover:text-blue-600 transition">How It Works</button>
          <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-blue-600 transition">FAQ</button>
          <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-blue-600 transition">Contact</button>
        </div>

        <button
          onClick={() => scrollToSection('order')}
          className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
        >
          Buy Now
        </button>
      </nav>
    </header>
  );
}

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logoImg from '@/assets/team/logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  const navTextClass = isScrolled ? 'text-gray-900' : 'text-white/90';
  const navHoverClass = isScrolled ? 'hover:text-primary' : 'hover:text-white';


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
        }`}
    >

      <div className="container mx-auto px-4 py-2">

        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Sangharsh Graphics Logo"
              className="w-12 h-12 scale-110 rounded-full object-contain shadow-md"
            />

            <span
              className={`text-xl font-semibold tracking-wide transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'
                }`}
            >
              Sangharsh Graphics
            </span>

          </div>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (

              <a
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors duration-300 ${navTextClass} ${navHoverClass}`}
              >
                {item.label}
              </a>

            ))}
            <Button variant="default" className="bg-gradient-primary shadow-glow animate-glow">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-gradient-card rounded-lg backdrop-blur-md">
            <div className="flex flex-col space-y-4 px-4 py-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-smooth font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="default" className="bg-gradient-primary shadow-glow mt-4">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
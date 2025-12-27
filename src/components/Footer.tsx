import { Button } from '@/components/ui/button';
import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ];

  const services = [
    'Logo Design',
    'Business Cards',
    'Social Media Graphics',
    'Political Banners',
    'Product Packaging',
    'Flex Printing'
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/sngharsh__graphic__design16/#', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/sangharshgraphics', label: 'Facebook' },
    { icon: MessageCircle, href: 'https://wa.me/919876543210', label: 'WhatsApp' }
  ];

  return (
    <footer className="relative bg-gradient-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sangharsh Graphics</h3>
              <p className="text-white/80 leading-relaxed">
                Transforming ideas into stunning visual experiences. Your trusted partner for all graphic design needs.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>+91 9545563314</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>sangharshgraphicdesign0@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>Nanded , Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/80 hover:text-white transition-colors">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Connect With Us</h4>
            
            <div className="space-y-4 mb-6">
              <p className="text-white/80">
                Follow us for daily design inspiration and updates on our latest projects.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors hover:scale-110 transition-transform"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                variant="secondary" 
                className="w-full bg-white text-primary hover:bg-white/90"
              >
                Get Free Quote
              </Button>
              <Button 
                variant="secondary" 
                className="w-full bg-white text-primary hover:bg-white/90"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-white/80">
              <span>© 2024 Sangharsh Graphics. Made with</span>
              <Heart className="w-4 h-4 text-red-300 fill-current" />
              <span>in India</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 z-50 bg-white text-primary hover:bg-white/90 shadow-elegant animate-bounce"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full" />
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-white/15 rounded-full" />
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-white/20 rounded-full" />
      </div>
    </footer>
  );
};

export default Footer;
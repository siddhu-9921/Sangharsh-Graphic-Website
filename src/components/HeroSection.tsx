import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, Phone } from 'lucide-react';
import heroBackground from '@/assets/hero-background.png';
import logoImg from '@/assets/team/logo.png';

const HeroSection = () => {
  return (
    // Background Image
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={logoImg}
            alt="Sangharsh Graphic Logo"

            className="w-40 h-40 rounded-full object-cover shadow-xl"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Sangharsh
          <br />
          <span className="text-red bg-blue">Graphic Designs</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          Creative Professional Impactful
        </p>

        <p className="text-lg text-white/80 mb-11 max-w-2xl mx-auto animate-fadeInUp"  style={{ animationDelay: '0.6s' }}>
          Transforming ideas into stunning visual experiences that captivate audiences and drive results for businesses across all industries.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-elegant hover-lift group px-8 py-4 text-lg"
          >
            <Eye className="mr-2 w-5 h-5" />
            View Portfolio
           {/* <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
          </Button>

          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-elegant hover-lift group px-8 py-4 text-lg"
          >
            <Phone className="mr-2 w-5 h-5" />
            Contact Now
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-white/80">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10+</div>
            <div className="text-white/80">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-white/80">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
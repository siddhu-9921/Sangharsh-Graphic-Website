import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DesignsSection from '@/components/DesignsSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {

  const navigate = useNavigate();
  const clickCount = useRef(0);

  /* ======================
     KEYBOARD SHORTCUT
     Ctrl + Shift + A
  ====================== */
  useEffect(() => {

    const handleKey = (e) => {

      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
        e.preventDefault();
        navigate("/admin-login");
      }

    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);

  }, []);

  /* ======================
     SECRET CLICK (5 TIMES)
  ====================== */
  const handleSecretClick = () => {

    clickCount.current += 1;

    if (clickCount.current === 5) {
      navigate("/admin-login");
      clickCount.current = 0;
    }

    // reset after 2 sec
    setTimeout(() => {
      clickCount.current = 0;
    }, 2000);
  };

  return (
    <div className="min-h-screen">

      {/* 👇 SECRET CLICK AREA (you can attach to logo later) */}
      <div onClick={handleSecretClick}>
        <Navigation />
      </div>

      <HeroSection />
      <AboutSection />
      <DesignsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />

    </div>
  );
};

export default Index;
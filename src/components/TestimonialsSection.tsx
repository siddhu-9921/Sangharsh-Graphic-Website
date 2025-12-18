import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart Solutions',
      image: '👨‍💼',
      rating: 5,
      text: 'Sangharsh transformed our brand identity completely. The logo design and business cards exceeded our expectations. Professional service with quick turnaround!'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Marketing Director, Fashion Hub',
      image: '👩‍💼',
      rating: 5,
      text: 'The social media graphics created by Sangharsh boosted our engagement by 300%. Creative, modern, and exactly what our brand needed.'
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Restaurant Owner',
      image: '👨‍🍳',
      rating: 5,
      text: 'From menu design to bill books, everything was perfectly crafted. The packaging design for our takeaway increased our sales significantly.'
    },
    {
      id: 4,
      name: 'Dr. Neha Gupta',
      role: 'Clinic Owner',
      image: '👩‍⚕️',
      rating: 5,
      text: 'Professional letterheads and prescription pads that reflect the quality of our medical practice. Attention to detail was exceptional.'
    },
    {
      id: 5,
      name: 'Suresh Singh',
      role: 'Political Candidate',
      image: '🎗️',
      rating: 5,
      text: 'The campaign banners and flex designs were impactful and helped us connect with voters. Great understanding of political messaging.'
    },
    {
      id: 6,
      name: 'Kavya Reddy',
      role: 'Startup Founder',
      image: '👩‍💻',
      rating: 5,
      text: 'Complete branding solution from logo to packaging. Sangharsh understood our vision and delivered beyond expectations. Highly recommended!'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-gradient-card border-0 shadow-elegant max-w-4xl mx-auto">
                      <CardContent className="p-8 md:p-12 text-center">
                        {/* Quote Icon */}
                        <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
                        
                        {/* Rating */}
                        <div className="flex justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        {/* Testimonial Text */}
                        <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>
                        
                        {/* Client Info */}
                        <div className="flex items-center justify-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
                            {testimonial.image}
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-foreground text-lg">
                              {testimonial.name}
                            </div>
                            <div className="text-muted-foreground">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10"
              onClick={nextSlide}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">1000+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">99%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
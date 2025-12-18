import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award, Zap } from 'lucide-react';
import founderImg from '@/assets/team/founder.jpg';


const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: 'Strategic Design',
      description: 'Every design is crafted with purpose, ensuring maximum impact for your brand.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your vision is our priority. We work closely with you throughout the process.'
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized for excellence in design and client satisfaction across industries.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality or creativity.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              About Sangharsh Graphics
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Led by a passionate designer and professor, we bring academic excellence and real-world experience to every project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Transforming Ideas into Visual Masterpieces
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With over a decade of experience in graphic design and education, Sangharsh Graphics combines
                academic rigor with creative innovation. Our mission is to deliver impactful designs that not
                only look stunning but also drive real business results.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                From small startups to established enterprises, political campaigns to personal branding,
                we've helped hundreds of clients across diverse industries establish their visual identity
                and communicate their message effectively.
              </p>

              <div className="bg-gradient-primary p-6 rounded-lg text-white">
                <blockquote className="text-lg italic">
                  "Design is not just what it looks like and feels like. Design is how it works.
                  Every pixel, every color, every element serves a purpose."
                </blockquote>
                <cite className="block mt-4 font-semibold">- Sangameshwar Kamjalge, Founder & Creative Director</cite>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant hover-lift group">

                {/* Image Container */}
                <div className="aspect-square rounded-xl mb-6 overflow-hidden bg-gradient-primary">
                  <img
                    src={founderImg}
                    alt="Sangameshwar Kamjalge – Founder & Creative Director"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-foreground mb-2">
                    Sangameshwar Kamjalge
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Creative Director & Founder
                  </p>
                  <div className="flex justify-center space-x-2 text-sm text-muted-foreground">
                    <span>M.Des Graphics</span>
                    <span>•</span>
                    <span>5+ Years</span>
                    <span>•</span>
                    <span>1000+ Design</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
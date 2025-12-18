import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  PenTool, 
  Printer, 
  Smartphone, 
  Package, 
  Megaphone, 
  Palette,
  FileText,
  Zap 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: PenTool,
      title: 'Brand Identity Design',
      description: 'Complete brand identity packages including logos, business cards, and letterheads that make lasting impressions.',
      features: ['Logo Design', 'Business Cards', 'Letterheads', 'Brand Guidelines'],
     
    },
    {
      icon: Smartphone,
      title: 'Social Media Graphics',
      description: 'Eye-catching social media designs that boost engagement and grow your online presence across all platforms.',
      features: ['Instagram Posts', 'Facebook Covers', 'Story Templates', 'Video Thumbnails'],
      
    },
    {
      icon: Megaphone,
      title: 'Political Campaign Design',
      description: 'Powerful political banners, posters, and campaign materials that capture attention and convey your message.',
      features: ['Campaign Banners', 'Posters', 'Flex Designs', 'Digital Ads'],
      
    },
    {
      icon: FileText,
      title: 'Bill Books & Invoices',
      description: 'Professional bill books, invoices, and business forms designed to enhance your business credibility.',
      features: ['Custom Bill Books', 'Invoice Templates', 'Receipt Designs', 'Order Forms'],
      
    },
    {
      icon: Package,
      title: 'Product Packaging',
      description: 'Stunning packaging designs that make your products stand out on shelves and drive sales.',
      features: ['Box Design', 'Label Design', 'Bag Design', '3D Mockups'],
      
    },
    {
      icon: Printer,
      title: 'Flex & Large Format',
      description: 'High-impact large format designs for outdoor advertising, events, and promotional campaigns.',
      features: ['Flex Banners', 'Hoarding Design', 'Vehicle Wraps', 'Event Backdrops'],
      
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive design solutions tailored to meet your business needs and exceed expectations.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover-lift bg-gradient-card border-0 shadow-card h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform animate-glow">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-sm text-muted-foreground">
                        <Zap className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <div className="text-2xl font-bold text-primary mb-4">
                     
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-gradient-primary group-hover:text-white group-hover:border-transparent transition-all"
                    >
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white shadow-elegant">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need Something Custom?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg hover-lift"
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
              >
                View Pricing Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
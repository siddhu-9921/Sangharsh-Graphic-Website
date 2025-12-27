import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Filter } from 'lucide-react';
import businessCardImg from '@/assets/portfolio/business-card.jpg';
import letterheadImg from '@/assets/portfolio/letterhead.jpg';
import socialMediaImg from '@/assets/portfolio/social-media.jpg';
import politicalImg from '@/assets/portfolio/political-banner.jpg';
import logoImg from '@/assets/portfolio/logo-design.jpg';
import billBookImg from '@/assets/portfolio/bill-book.jpg';
import flexPrintImg from '@/assets/portfolio/flex-print.jpg';
import productImg from '@/assets/portfolio/product-packaging.jpg'

import { useNavigate } from 'react-router-dom';






const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'branding', label: 'Branding' },
    { id: 'print', label: 'Print Design' },
    { id: 'digital', label: 'Digital Media' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'political', label: 'Political' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Modern Business Cards',
      category: 'branding',
      description: 'Premium business card designs with embossed details',
      image: businessCardImg,
      tags: ['Business Cards', 'Branding', 'Print']
    },
    {
      id: 2,
      title: 'Corporate Letterheads',
      category: 'print',
      description: 'Professional letterhead designs for various industries',
      image: letterheadImg,
      tags: ['Letterhead', 'Corporate', 'Print']
    },
    {
      id: 3,
      title: 'Social Media Graphics',
      category: 'digital',
      description: 'Engaging social media posts and story designs',
      image: socialMediaImg,
      tags: ['Social Media', 'Digital', 'Marketing']
    },
    {
      id: 4,
      title: 'Political Campaign Banners',
      category: 'political',
      description: 'Large format political banners and flex designs',
      image: politicalImg,
      tags: ['Political', 'Banners', 'Campaigns']
    },
    {
      id: 5,
      title: 'Custom Logo Designs',
      category: 'branding',
      description: 'Unique logo designs for startups and enterprises',
      image: logoImg,
      tags: ['Logo', 'Branding', 'Identity']
    },
    {
      id: 6,
      title: 'Product Packaging',
      category: 'packaging',
      description: 'Eye-catching packaging designs that sell',
      image: productImg,
      tags: ['Packaging', 'Product', 'Retail']
    },
    {
      id: 7,
      title: 'Bill Book Designs',
      category: 'print',
      description: 'Professional invoice and bill book layouts',
      image: billBookImg,

      tags: ['Bill Books', 'Business', 'Print']
    },
    {
      id: 8,
      title: 'Flex Printing Projects',
      category: 'print',
      description: 'Large format flex and vinyl printing designs',
      image: flexPrintImg,
      tags: ['Flex Print', 'Large Format', 'Outdoor']
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Our Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse range of design work across multiple industries and mediums.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? 'default' : 'outline'}
                onClick={() => setActiveFilter(category.id)}
                className={activeFilter === category.id ? 'bg-gradient-primary shadow-glow' : ''}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="group hover-lift bg-gradient-card border-0 shadow-card overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Image Placeholder */}
                  <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="shadow-lg">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </div>


                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="bg-gradient-primary shadow-glow hover-lift">
              View Complete Portfolio
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
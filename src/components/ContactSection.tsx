import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  Clock,
  Send
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      alert("Please fill in required fields");
      return;
    }

    const phoneNumber = "919545563314";

    const whatsappMessage = `
New Design Enquiry

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}
  `;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 9545563314',
      description: 'Mon-Sat, 9AM-8PM',
      action: 'tel:+919545563314'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+91 9545563314',
      description: 'Quick response guaranteed',
      action: 'https://wa.me/919545563314'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'sangharshgraphicdesign0@Gmail.com',
      description: 'We reply within 2 hours',
      action: 'mailto:sangharshgraphicdesign0@Gmail.com'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@sangharsh__graphic__design__16',
      description: 'Follow for daily inspiration',
      action: 'https://www.instagram.com/sangharsh__graphic__design__16?igsh=bzM5d3J1cngwanNz'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <Input
                        id="service"
                        name="service"
                        placeholder="Logo Design, Branding, etc."
                        value={formData.service}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project requirements..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary shadow-glow hover-lift"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>

                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="grid gap-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="hover-lift bg-gradient-card border-0 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{method.title}</h3>
                          <a
                            href={method.action}
                            className="text-primary hover:text-primary-glow font-medium transition-colors"
                          >
                            {method.value}
                          </a>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Location */}
              <Card className="bg-gradient-card border-0 shadow-card rounded-2xl">
                <CardContent className="p-6">

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Visit Our Studio
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Nanded, Maharashtra 431708
                      </p>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="w-full h-[260px] rounded-xl overflow-hidden shadow-sm">

                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.4342587438997!2d77.11512806952896!3d18.9460733673397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfd3dd8e5a63cd%3A0x3ae1ae66d8c99f04!2sSangharsh%20Graphic!5e1!3m2!1sen!2sin!4v1774622578795!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                  </div>

                </CardContent>
              </Card>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


import { Clock, Users, Award, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutStory = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Our Story */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                Founded in 2014, Dermo Spa Meknes was born from a passion for preserving ancient Moroccan wellness traditions while embracing modern skincare innovations. What started as a small traditional hammam has blossomed into Meknes' premier luxury spa destination.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our founder, inspired by generations of Moroccan beauty rituals passed down through her family, envisioned a sanctuary where these time-honored practices could be experienced in an atmosphere of refined elegance. Today, we continue this legacy by combining authentic hammam rituals with advanced dermatological treatments.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Every treatment at Dermo Spa is thoughtfully crafted to honor the wisdom of traditional Moroccan wellness while incorporating the latest advancements in skincare and spa therapy. We source only the finest organic ingredients, from pure argan oil to rose water distilled from Moroccan valleys.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-card border-border shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Clock className="text-gold" size={32} />
                  </div>
                  <p className="text-3xl font-bold text-gold mb-2">10+</p>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Users className="text-secondary" size={32} />
                  </div>
                  <p className="text-3xl font-bold text-secondary mb-2">5000+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Award className="text-gold" size={32} />
                  </div>
                  <p className="text-3xl font-bold text-gold mb-2">15+</p>
                  <p className="text-sm text-muted-foreground">Expert Therapists</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Heart className="text-secondary" size={32} />
                  </div>
                  <p className="text-3xl font-bold text-secondary mb-2">20+</p>
                  <p className="text-sm text-muted-foreground">Signature Treatments</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cream">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Sparkles className="text-gold" size={40} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-cream">Authenticity</h3>
                <p className="text-muted-foreground">
                  We honor traditional Moroccan wellness practices while staying true to our heritage and cultural roots in every treatment we offer.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="text-secondary" size={40} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-cream">Personalization</h3>
                <p className="text-muted-foreground">
                  Every client receives tailored treatments designed specifically for their unique needs, ensuring optimal results and satisfaction.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="text-gold" size={40} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-cream">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in service, products, and expertise, continuously training our team in the latest spa techniques.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
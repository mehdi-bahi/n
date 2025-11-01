import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Calendar, Gift } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-gold opacity-20"></div>
      <div className="absolute inset-0 pattern-moroccan opacity-20"></div>
      
      {/* Floating 3D elements */}
      <div className="absolute top-10 left-[5%] text-gold/20 float-animation pointer-events-none">
        <Sparkles size={60} />
      </div>
      <div className="absolute bottom-10 right-[10%] text-cream/20 float-delayed pointer-events-none">
        <Gift size={70} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream">
            Begin Your Wellness Journey Today
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect harmony of traditional Moroccan spa rituals and modern wellness treatments. Book your appointment and discover true relaxation.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center items-center mb-12">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold/90 text-background font-semibold text-lg px-10 py-7 shadow-glow transition-smooth hover:scale-105"
              >
                <Calendar className="mr-2" size={24} />
                Book Your Experience
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold/10 font-semibold text-lg px-10 py-7 transition-smooth hover:scale-105 bg-transparent"
              >
                <Gift className="mr-2" size={24} />
                View Gift Packages
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card/30 backdrop-blur border border-border rounded-2xl p-6 hover:shadow-elegant transition-smooth">
              <p className="text-3xl font-bold text-gold mb-2">10+</p>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
            <div className="bg-card/30 backdrop-blur border border-border rounded-2xl p-6 hover:shadow-elegant transition-smooth">
              <p className="text-3xl font-bold text-gold mb-2">5000+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="bg-card/30 backdrop-blur border border-border rounded-2xl p-6 hover:shadow-elegant transition-smooth">
              <p className="text-3xl font-bold text-gold mb-2">20+</p>
              <p className="text-sm text-muted-foreground">Signature Treatments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
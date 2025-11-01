import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-spa.jpg";
import { Sparkles, Flame, Droplets } from "lucide-react";

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>

      {/* Moroccan Pattern Overlay */}
      <div className="absolute inset-0 pattern-moroccan opacity-30"></div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] text-gold/30 float-animation">
          <Sparkles size={40} />
        </div>
        <div className="absolute top-40 right-[15%] text-gold/20 float-delayed">
          <Flame size={50} />
        </div>
        <div className="absolute bottom-32 left-[20%] text-secondary/30 animate-float">
          <Droplets size={45} />
        </div>
        <div className="absolute top-1/3 right-[25%] text-gold/25" style={{ animation: 'float 8s ease-in-out infinite' }}>
          <Sparkles size={35} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-cream animate-fadeIn">
          Salon Escal Souad SPA
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gold mb-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Luxury Wellness & Beauty Sanctuary
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          Experience the perfect blend of traditional Moroccan spa rituals and modern skincare treatments in the heart of Meknes
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-background font-semibold text-lg px-8 py-6 shadow-glow transition-smooth hover:scale-105"
            >
              Book Your Experience
            </Button>
          </Link>
          <Link to="/services">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gold text-gold hover:bg-gold/10 font-semibold text-lg px-8 py-6 transition-smooth hover:scale-105 bg-transparent"
            >
              Discover Our Services
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

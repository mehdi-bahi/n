import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Waves, Sparkles, Flame, Flower } from "lucide-react";

const services = [
  {
    icon: Waves,
    title: "Traditional Hammam",
    description: "Authentic Moroccan steam bath experience with black soap and eucalyptus",
    price: "From 300 MAD",
    duration: "60 min",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Sparkles,
    title: "Signature Facial",
    description: "Advanced skincare treatment using organic Moroccan ingredients",
    price: "From 400 MAD",
    duration: "75 min",
    color: "text-gold",
    bgColor: "bg-gold/10"
  },
  {
    icon: Flame,
    title: "Hot Stone Massage",
    description: "Deep tissue relaxation with heated volcanic stones and argan oil",
    price: "From 500 MAD",
    duration: "90 min",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Flower,
    title: "Rose Water Ritual",
    description: "Luxurious body treatment with Moroccan rose petals and essential oils",
    price: "From 450 MAD",
    duration: "80 min",
    color: "text-gold",
    bgColor: "bg-gold/10"
  }
];

const FeaturedServices = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 text-gold/10 float-animation pointer-events-none">
        <Sparkles size={80} />
      </div>
      <div className="absolute bottom-20 left-10 text-secondary/10 float-delayed pointer-events-none">
        <Waves size={100} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream">
            Featured Treatments
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our most popular spa experiences, each designed to restore balance and radiance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-smooth hover:-translate-y-2 animate-fade-in border-border bg-card/50 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-smooth`}>
                  <service.icon className={service.color} size={32} />
                </div>
                <CardTitle className="text-center text-cream">{service.title}</CardTitle>
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-gold mb-2">{service.price}</p>
                <p className="text-sm text-muted-foreground">{service.duration}</p>
              </CardContent>
              <CardFooter className="justify-center">
                <Link to="/services" className="w-full">
                  <Button variant="outline" className="w-full border-gold/50 text-gold hover:bg-gold/10">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-background font-semibold px-8 py-6 shadow-glow transition-smooth hover:scale-105">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
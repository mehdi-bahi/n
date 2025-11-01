import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Relaxation Ritual",
    price: "450 DH",
    duration: "90 minutes",
    description: "Perfect for first-time guests",
    features: [
      "Traditional Hammam",
      "Black Soap Treatment",
      "Argan Oil Massage (30min)",
      "Mint Tea & Refreshments"
    ],
    popular: false
  },
  {
    name: "Royal Hammam",
    price: "750 DH",
    duration: "2.5 hours",
    description: "Our signature wellness experience",
    features: [
      "Complete Hammam Ritual",
      "Ghassoul Clay Wrap",
      "Full Body Massage (60min)",
      "Facial Treatment",
      "Rose Water Ceremony",
      "Premium Refreshments"
    ],
    popular: true
  },
  {
    name: "Ultimate Luxury",
    price: "1200 DH",
    duration: "4 hours",
    description: "The complete spa journey",
    features: [
      "Everything in Royal Package",
      "Advanced Facial Treatment",
      "Hot Stone Therapy",
      "Hair & Scalp Treatment",
      "Manicure & Pedicure",
      "Private Relaxation Suite",
      "Gourmet Light Meal"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-20 px-4 relative bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream">
            Spa Packages
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully curated wellness packages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative border-border bg-card shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2 ${
                pkg.popular ? 'border-gold border-2' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-background px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-10">
                <CardTitle className="text-3xl mb-2 text-cream">{pkg.name}</CardTitle>
                <CardDescription className="text-base mb-4">{pkg.description}</CardDescription>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gold">{pkg.price}</span>
                </div>
                <p className="text-muted-foreground">{pkg.duration}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-gold mr-3 mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button
                    className={`w-full py-6 text-lg font-semibold transition-smooth ${
                      pkg.popular
                        ? 'bg-gold hover:bg-gold/90 text-background shadow-glow'
                        : 'bg-secondary hover:bg-secondary/90 text-background'
                    }`}
                  >
                    Book This Package
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All packages include complimentary use of our spa facilities
          </p>
          <p className="text-sm text-muted-foreground">
            Custom packages available upon request • Group bookings welcome
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

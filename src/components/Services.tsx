import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bath, HandHeart, Sparkles, Leaf } from "lucide-react";
import massageImage from "@/assets/massage-room.jpg";
import hammamImage from "@/assets/hammam.jpg";
import facialImage from "@/assets/facial-room.jpg";

const services = [
  {
    icon: HandHeart,
    title: "Signature Massages",
    description: "Therapeutic and relaxing massage treatments",
    image: massageImage,
    treatments: [
      "Traditional Moroccan Massage",
      "Argan Oil Deep Tissue",
      "Hot Stone Therapy",
      "Aromatherapy Massage"
    ]
  },
  {
    icon: Bath,
    title: "Hammam Experience",
    description: "Authentic Moroccan steam bath rituals",
    image: hammamImage,
    treatments: [
      "Traditional Hammam & Gommage",
      "Black Soap Treatment",
      "Ghassoul Clay Wrap",
      "Royal Hammam Package"
    ]
  },
  {
    icon: Sparkles,
    title: "Facial Treatments",
    description: "Advanced skincare and beauty treatments",
    image: facialImage,
    treatments: [
      "Deep Cleansing Facial",
      "Anti-Aging Treatment",
      "Hydrating Rose Water Facial",
      "Brightening Vitamin C"
    ]
  },
  {
    icon: Leaf,
    title: "Body Treatments",
    description: "Nourishing body care rituals",
    image: massageImage,
    treatments: [
      "Argan Oil Body Wrap",
      "Honey & Milk Polish",
      "Detoxifying Seaweed Wrap",
      "Moroccan Mint Scrub"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 relative bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our curated selection of luxury treatments designed to restore, rejuvenate, and revitalize
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-border bg-card shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center mb-3">
                    <service.icon className="text-background" size={28} />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-cream">{service.title}</CardTitle>
                <CardDescription className="text-lg">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.treatments.map((treatment, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      {treatment}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

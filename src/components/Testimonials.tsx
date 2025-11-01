import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amina El Fassi",
    location: "Meknes",
    rating: 5,
    text: "An absolutely divine experience! The traditional hammam treatment was authentic and rejuvenating. The staff was incredibly professional and welcoming.",
    treatment: "Hammam Ritual"
  },
  {
    name: "Sophie Laurent",
    location: "Fes",
    rating: 5,
    text: "I've been to many spas across Morocco, but Dermo Spa Meknes stands out. The ambiance is serene, and their signature facial left my skin glowing for weeks.",
    treatment: "Signature Facial"
  },
  {
    name: "Yasmine Benali",
    location: "Rabat",
    rating: 5,
    text: "The rose water ritual was pure bliss. Every detail was perfect, from the ambient music to the aromatic oils. I felt completely renewed after my visit.",
    treatment: "Rose Water Ritual"
  },
  {
    name: "Sarah Johnson",
    location: "Marrakech",
    rating: 5,
    text: "A hidden gem in Meknes! The hot stone massage was exceptional, and the facilities are immaculate. I will definitely return on my next visit to Morocco.",
    treatment: "Hot Stone Massage"
  },
  {
    name: "Laila Moussaoui",
    location: "Meknes",
    rating: 5,
    text: "Outstanding service and authentic Moroccan hospitality. The argan oil treatments are incredible, and the relaxation lounge is the perfect place to unwind.",
    treatment: "Argan Oil Treatment"
  },
  {
    name: "Emma Martinez",
    location: "Casablanca",
    rating: 5,
    text: "My experience exceeded all expectations. The therapists are highly skilled, and the spa's attention to traditional Moroccan techniques is impressive.",
    treatment: "Wellness Package"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-moroccan opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why clients choose Dermo Spa for their wellness journey
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-card/50 backdrop-blur border-border hover:shadow-elegant transition-smooth hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-gold fill-gold" size={20} />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-cream">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <p className="text-xs text-gold mt-2">{testimonial.treatment}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-card/80 backdrop-blur border-gold/50 hover:bg-gold/20" />
          <CarouselNext className="right-2 bg-card/80 backdrop-blur border-gold/50 hover:bg-gold/20" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
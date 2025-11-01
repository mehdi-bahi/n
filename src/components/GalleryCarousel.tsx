import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import massageImage from "@/assets/massage-room.jpg";
import hammamImage from "@/assets/hammam.jpg";
import facialImage from "@/assets/facial-room.jpg";
import loungeImage from "@/assets/lounge.jpg";
import heroImage from "@/assets/hero-spa.jpg";

const galleryImages = [
  { src: heroImage, alt: "Spa Entrance", title: "Welcome to Serenity" },
  { src: massageImage, alt: "Massage Room", title: "Massage Sanctuary" },
  { src: hammamImage, alt: "Traditional Hammam", title: "Traditional Hammam Experience" },
  { src: facialImage, alt: "Facial Treatment Room", title: "Advanced Skincare Studio" },
  { src: loungeImage, alt: "Relaxation Lounge", title: "Tranquil Relaxation Space" },
];

const GalleryCarousel = () => {
  return (
    <section className="py-20 px-4 relative bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream">
            Experience Our Sanctuary
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a visual journey through our beautiful spa facilities
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
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-smooth">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-semibold text-cream mb-2">{image.title}</h3>
                      <p className="text-sm text-muted-foreground">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-card/80 backdrop-blur border-gold/50 hover:bg-gold/20" />
          <CarouselNext className="right-2 bg-card/80 backdrop-blur border-gold/50 hover:bg-gold/20" />
        </Carousel>

        <div className="text-center mt-12">
          <Link to="/gallery">
            <Button size="lg" variant="outline" className="border-2 border-gold text-gold hover:bg-gold/10 font-semibold px-8 py-6 transition-smooth hover:scale-105">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
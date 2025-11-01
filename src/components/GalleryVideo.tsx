import { Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import hammamImage from "@/assets/hammam.jpg";

const GalleryVideo = () => {
  return (
    <section className="py-20 px-4 relative bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cream">
            Experience the Journey
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in the ambiance of our sanctuary
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Virtual Tour Card */}
          <Card className="bg-card border-border shadow-card hover:shadow-elegant transition-smooth group overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={hammamImage} 
                  alt="Spa Virtual Tour"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-smooth shadow-glow">
                    <Play className="text-background ml-1" size={36} fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-cream">Virtual Spa Tour</h3>
                <p className="text-muted-foreground">
                  Take a guided tour through our luxurious facilities and treatment rooms
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Video Card */}
          <Card className="bg-card border-border shadow-card hover:shadow-elegant transition-smooth group overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={hammamImage} 
                  alt="Client Testimonials"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-smooth shadow-glow">
                    <Play className="text-background ml-1" size={36} fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-cream">Client Stories</h3>
                <p className="text-muted-foreground">
                  Hear from our satisfied clients about their transformative experiences
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <p className="text-4xl font-bold text-gold mb-2">8</p>
            <p className="text-sm text-muted-foreground">Treatment Rooms</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-secondary mb-2">3</p>
            <p className="text-sm text-muted-foreground">Hammam Suites</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gold mb-2">2</p>
            <p className="text-sm text-muted-foreground">Relaxation Lounges</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-secondary mb-2">1</p>
            <p className="text-sm text-muted-foreground">VIP Suite</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryVideo;
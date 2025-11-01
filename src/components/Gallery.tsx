import massageImage from "@/assets/massage-room.jpg";
import hammamImage from "@/assets/hammam.jpg";
import facialImage from "@/assets/facial-room.jpg";
import loungeImage from "@/assets/lounge.jpg";

const images = [
  { src: massageImage, alt: "Massage Room", span: "md:col-span-2" },
  { src: hammamImage, alt: "Traditional Hammam" },
  { src: facialImage, alt: "Facial Treatment Room" },
  { src: loungeImage, alt: "Relaxation Lounge", span: "md:col-span-2" },
];

const Gallery = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream">
            Our Sanctuary
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Step into a world of elegance and tranquility
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-smooth ${image.span || ''}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-semibold text-cream">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

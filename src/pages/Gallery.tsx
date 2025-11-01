import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import GalleryVideo from "@/components/GalleryVideo";
import GalleryCarousel from "@/components/GalleryCarousel";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <Header />
      <div className="pt-20">
        <Gallery />
        <GalleryVideo />
        <GalleryCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Welcome from "@/components/Welcome";
import FeaturedServices from "@/components/FeaturedServices";
import GalleryCarousel from "@/components/GalleryCarousel";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

const Home = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <Header />
      <Hero />
      <Welcome />
      <FeaturedServices />
      <GalleryCarousel />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;

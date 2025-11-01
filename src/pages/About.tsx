import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import AboutStory from "@/components/AboutStory";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <Header />
      <div className="pt-20">
        <Welcome />
        <AboutStory />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default About;

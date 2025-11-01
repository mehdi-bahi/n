import Header from "@/components/Header";
import Services from "@/components/Services";
import ServiceProcess from "@/components/ServiceProcess";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <Header />
      <div className="pt-20">
        <Services />
        <ServiceProcess />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;

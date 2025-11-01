import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import PricingBenefits from "@/components/PricingBenefits";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <Header />
      <div className="pt-20">
        <Pricing />
        <PricingBenefits />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;

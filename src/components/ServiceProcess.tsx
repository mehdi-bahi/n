import { Calendar, Sparkles, Leaf, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Calendar,
    title: "Book Your Session",
    description: "Choose your preferred treatment and schedule your appointment online or by phone",
    color: "text-gold",
    bgColor: "bg-gold/10"
  },
  {
    icon: Sparkles,
    title: "Personal Consultation",
    description: "Meet with our expert therapist who will assess your needs and customize your experience",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Leaf,
    title: "Enjoy Your Treatment",
    description: "Relax and surrender to the healing touch of our skilled professionals in our serene environment",
    color: "text-gold",
    bgColor: "bg-gold/10"
  },
  {
    icon: Heart,
    title: "Post-Care Guidance",
    description: "Receive personalized aftercare recommendations to extend the benefits of your treatment",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  }
];

const ServiceProcess = () => {
  return (
    <section className="py-20 px-4 relative bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream">
            Your Spa Journey
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From booking to bliss, we've crafted every step to ensure your complete comfort and satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative bg-card border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2 group"
            >
              <CardContent className="p-8">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center font-bold text-background text-xl shadow-glow">
                  {index + 1}
                </div>
                <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-smooth`}>
                  <step.icon className={step.color} size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-cream">{step.title}</h3>
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <div className="bg-card border border-border rounded-3xl p-12 shadow-elegant">
            <h3 className="text-3xl font-bold mb-8 text-center text-cream">Why Choose Dermo Spa?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-cream">100% Organic Products:</span> We use only premium, certified organic Moroccan ingredients
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-cream">Certified Therapists:</span> Our team holds international certifications in spa therapy
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-cream">Hygiene Standards:</span> We maintain the highest cleanliness protocols for your safety
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-cream">Private Treatment Rooms:</span> Enjoy complete privacy in our luxurious individual suites
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-cream">Flexible Scheduling:</span> Book online 24/7 with convenient morning, afternoon, and evening slots
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-cream">Satisfaction Guarantee:</span> Your complete satisfaction is our commitment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
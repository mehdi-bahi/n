import { Gift, Calendar, Star, Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Gift,
    title: "Gift Vouchers",
    description: "Perfect for special occasions - birthdays, anniversaries, or just because",
    features: ["Custom amounts", "Beautiful presentation", "Valid for 12 months", "Transferable"]
  },
  {
    icon: Calendar,
    title: "Membership Benefits",
    description: "Join our exclusive wellness club for premium perks and savings",
    features: ["10% off all services", "Priority booking", "Birthday gift", "Exclusive events"]
  },
  {
    icon: Star,
    title: "Loyalty Rewards",
    description: "Earn points with every visit and unlock special rewards",
    features: ["Points per visit", "Bonus treatments", "Referral rewards", "VIP upgrades"]
  },
  {
    icon: Crown,
    title: "VIP Packages",
    description: "Indulge in our most exclusive experiences with premium amenities",
    features: ["Private suites", "Extended sessions", "Complimentary refreshments", "Personal concierge"]
  }
];

const PricingBenefits = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cream">
            More Ways to Experience Luxury
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enhance your spa journey with our exclusive offers and membership benefits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-card border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2 group"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-smooth">
                  <benefit.icon className="text-gold" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-cream">{benefit.title}</h3>
                <p className="text-muted-foreground text-center text-sm mb-4">
                  {benefit.description}
                </p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Offers */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-gold border-border shadow-elegant overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-3xl font-bold text-background">First Visit Special</h3>
                <span className="bg-background text-gold font-bold px-4 py-2 rounded-full text-sm">-20%</span>
              </div>
              <p className="text-background/80 mb-6 text-lg">
                Welcome to Dermo Spa! Enjoy 20% off your first treatment when you book this month.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-background text-gold hover:bg-background/90 font-semibold">
                  Book Your First Visit
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-2 border-gold shadow-elegant overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-3xl font-bold text-cream">Couples Retreat</h3>
                <span className="bg-gold text-background font-bold px-4 py-2 rounded-full text-sm">Special</span>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Share the experience with someone special. Book a couples package and receive a complimentary rose water treatment.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-background font-semibold">
                  Explore Couples Packages
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* FAQ-style Pricing Info */}
        <div className="bg-card border border-border rounded-3xl p-12 shadow-elegant">
          <h3 className="text-3xl font-bold mb-8 text-center text-cream">Pricing Information</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-cream mb-2">Booking & Cancellation</h4>
                <p className="text-muted-foreground text-sm">
                  We require a 24-hour notice for cancellations. Late cancellations may incur a 50% charge.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-cream mb-2">Payment Methods</h4>
                <p className="text-muted-foreground text-sm">
                  We accept cash, credit cards, and mobile payments. Gift vouchers can be purchased online or in-person.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-cream mb-2">Group Bookings</h4>
                <p className="text-muted-foreground text-sm">
                  Special rates available for groups of 4 or more. Perfect for bridal parties or celebrations.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-cream mb-2">Package Validity</h4>
                <p className="text-muted-foreground text-sm">
                  All package services must be used within 6 months of purchase. Extensions available upon request.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-cream mb-2">Arrival Time</h4>
                <p className="text-muted-foreground text-sm">
                  Please arrive 15 minutes before your appointment to complete paperwork and prepare.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-cream mb-2">Custom Packages</h4>
                <p className="text-muted-foreground text-sm">
                  Contact us to create a personalized package tailored to your specific wellness goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingBenefits;
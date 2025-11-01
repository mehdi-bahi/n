import { Sparkles, Heart, Award } from "lucide-react";

const Welcome = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream">
            Welcome to Paradise
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where ancient Moroccan wellness traditions meet modern luxury in the historic city of Meknes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Sparkles className="text-gold" size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-cream">Authentic Treatments</h3>
            <p className="text-muted-foreground text-center">
              Experience traditional Moroccan spa rituals including hammam, argan oil treatments, and rose water therapies
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="text-secondary" size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-cream">Holistic Wellness</h3>
            <p className="text-muted-foreground text-center">
              Our treatments focus on complete well-being, harmonizing body, mind, and spirit in a serene environment
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Award className="text-gold" size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-cream">Expert Therapists</h3>
            <p className="text-muted-foreground text-center">
              Our skilled professionals are trained in both traditional Moroccan techniques and modern spa therapies
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-3xl p-12 shadow-elegant">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Nestled in the heart of Meknes, Dermo Spa offers an oasis of tranquility where you can escape the stresses of daily life. Our spa combines the rich heritage of Moroccan wellness traditions with state-of-the-art facilities and premium organic products.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Each treatment is carefully designed to rejuvenate your body, calm your mind, and restore your natural radiance. From our signature hammam rituals to advanced skincare treatments, we invite you to discover the art of Moroccan relaxation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

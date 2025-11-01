import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20),
  date: z.string().min(1, "Please select a date"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().max(1000).optional(),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      bookingSchema.parse(formData);
      setErrors({});
      
      // Encode data for WhatsApp
      const message = `New Spa Booking Request:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Date: ${formData.date}\nService: ${formData.service}\nMessage: ${formData.message || 'N/A'}`;
      const encodedMessage = encodeURIComponent(message);
      
      toast.success("Thank you! We'll contact you shortly to confirm your booking.");
      
      // Optional: Open WhatsApp (uncomment and add real number when ready)
      // window.open(`https://wa.me/2125XXXXXXXX?text=${encodedMessage}`, '_blank');
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        service: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast.error("Please check your form for errors");
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream">
            Book Your Experience
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Begin your journey to wellness and relaxation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`bg-card border-border h-12 text-lg ${errors.name ? 'border-destructive' : ''}`}
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`bg-card border-border h-12 text-lg ${errors.email ? 'border-destructive' : ''}`}
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number (e.g., +212 6XX-XXXXXX)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`bg-card border-border h-12 text-lg ${errors.phone ? 'border-destructive' : ''}`}
                />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className={`bg-card border-border h-12 text-lg ${errors.date ? 'border-destructive' : ''}`}
                />
                {errors.date && <p className="text-destructive text-sm mt-1">{errors.date}</p>}
              </div>
              <div>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className={`bg-card border-border h-12 text-lg ${errors.service ? 'border-destructive' : ''}`}>
                    <SelectValue placeholder="Select a service package" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="relaxation">Relaxation Ritual (450 DH)</SelectItem>
                    <SelectItem value="royal">Royal Hammam (750 DH)</SelectItem>
                    <SelectItem value="ultimate">Ultimate Luxury (1200 DH)</SelectItem>
                    <SelectItem value="massage">Signature Massage</SelectItem>
                    <SelectItem value="facial">Facial Treatment</SelectItem>
                    <SelectItem value="custom">Custom Package</SelectItem>
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-destructive text-sm mt-1">{errors.service}</p>}
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your preferences or any special requests... (optional)"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card border-border text-lg resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gold hover:bg-gold/90 text-background font-semibold text-lg py-6 shadow-glow transition-smooth"
              >
                Request Booking
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cream">Location</h3>
                    <p className="text-muted-foreground">
                      Avenue Hassan II<br />
                      Meknes 50000<br />
                      Morocco
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cream">Phone</h3>
                    <p className="text-muted-foreground">
                      +212 5XX-XXXXXX<br />
                      WhatsApp Available
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cream">Email</h3>
                    <p className="text-muted-foreground">
                      info@dermospameknes.ma<br />
                      bookings@dermospameknes.ma
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cream">Opening Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-card h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106410.69467474!2d-5.625285!3d33.893791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda044d14b2f2e6f%3A0x8ff8df4f2d6a8d7!2sMeknes%2C%20Morocco!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dermo Spa Meknes Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4 font-playfair">Salon Escal Souad SPA</h3>
            <p className="text-muted-foreground">
              Your sanctuary for wellness and beauty in the heart of Meknes
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/services" className="hover:text-gold transition-smooth">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-gold transition-smooth">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-smooth">Contact</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-smooth">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gold" />
                +212 5XX-XXXXXX
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gold" />
                info@SalonEscalSouadSPA.ma
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-smooth">
                <Facebook size={20} className="text-gold" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-smooth">
                <Instagram size={20} className="text-gold" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Salon Escal Souad SPA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

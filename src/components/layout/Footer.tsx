import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import vensLogo from "@/assets/vens-logo.png";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

const products = [
  { name: "ABG Analyzers", href: "/products#analyzers" },
  { name: "ABG Reagents", href: "/products#reagents" },
  { name: "Rapid Test Cards", href: "/products#rapid-tests" },
  { name: "ABG Syringes", href: "/products#syringes" },
  { name: "Control Cards", href: "/products#control-cards" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={vensLogo} alt="VENS Healthcare Logo" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Trusted distributor of advanced medical equipment and diagnostic consumables for hospitals and laboratories across India.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/srirangam-kadarkarai-91b03938/" target="_blank" rel="noopener noreferrer" className="rounded-lg p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/srirangam.kadarkarai" target="_blank" rel="noopener noreferrer" className="rounded-lg p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/srirangamkadarkarai/" target="_blank" rel="noopener noreferrer" className="rounded-lg p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Products</h3>
            <ul className="space-y-3">
              {products.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:venshealthcare@gmail.com" className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                  venshealthcare@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919543488988" className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                  +91-9543488988
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} VENS Healthcare Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

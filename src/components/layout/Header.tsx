import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import vensLogo from "@/assets/vens-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="hidden items-center gap-6 md:flex">
            <a href="mailto:venshealthcare@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              venshealthcare@gmail.com
            </a>
            <a href="tel:+919543488988" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              +91-9543488988
            </a>
          </div>
          <div className="flex items-center gap-4 md:ml-auto">
            <span className="text-primary-foreground/80">Trusted Medical Equipment Distributor</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="border-b border-border bg-card/95 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex items-center gap-3">
            {/* <img src={vensLogo} alt="VENS Healthcare Logo" className="h-10 w-auto lg:h-12" /> */}
            <div>
              <img src={vensLogo} alt="VENS Healthcare Logo" className="h-10 w-auto lg:h-12" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground lg:text-xl">VENS Healthcare</span>
              <span className="hidden text-xs text-muted-foreground lg:block">Private Limited</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  location.pathname === item.href
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Enquire Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden rounded-lg p-2 text-muted-foreground hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card animate-fade-in">
            <div className="container py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button asChild variant="hero" className="w-full">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Enquire Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";

const trustIndicators = [
  { icon: Shield, label: "Quality Assured" },
  { icon: Award, label: "Certified Products" },
  { icon: Clock, label: "Timely Delivery" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="container relative py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-primary-foreground animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Trusted Medical Equipment Distributor
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Advanced Diagnostic Solutions for{" "}
              <span className="text-accent">Healthcare Excellence</span>
            </h1>
            
            <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
              VENS Healthcare Private Limited delivers premium medical equipment and diagnostic consumables to hospitals and laboratories across India. Precision, reliability, and quality in every product.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/products">
                  View Products
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">Enquire Now</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap gap-6">
              {trustIndicators.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="Advanced medical diagnostic equipment in a modern laboratory setting"
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating card */}
            {/* <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-card animate-float hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">ISO Certified</p>
                  <p className="text-xs text-muted-foreground">Quality Standards</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50L60 45.8C120 41.7 240 33.3 360 37.5C480 41.7 600 58.3 720 62.5C840 66.7 960 58.3 1080 50C1200 41.7 1320 33.3 1380 29.2L1440 25V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
}

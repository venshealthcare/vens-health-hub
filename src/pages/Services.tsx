import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Truck, Headphones, Settings, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Truck,
    title: "Medical Equipment Distribution",
    description: "We partner with leading manufacturers like Siemens to distribute state-of-the-art medical diagnostic equipment to hospitals and laboratories across India.",
    features: ["Siemens ePOC ABG Analyzers", "Point-of-care testing devices", "Laboratory equipment"],
  },
  {
    icon: Settings,
    title: "Diagnostic Reagents & Consumables",
    description: "Premium quality reagents and consumables that ensure accurate diagnostic results and reliable test outcomes for your laboratory.",
    features: ["ABG reagents", "Randox Controls", "Rapid test cards"],
  },
  {
    icon: Clock,
    title: "Timely Delivery & Logistics",
    description: "Efficient supply chain management ensuring your critical medical supplies arrive when you need them, maintaining cold chain requirements where necessary.",
    features: ["Pan-India delivery", "Cold chain logistics", "Emergency supply support"],
  },
  {
    icon: Headphones,
    title: "Technical Support & Training",
    description: "Comprehensive after-sales support including installation assistance, user training, and ongoing technical guidance for all distributed equipment.",
    features: ["Installation support", "User training programs", "Maintenance guidance"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container relative text-center text-primary-foreground">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6">Our Services</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive healthcare support from equipment distribution to technical assistance
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid gap-8 lg:grid-cols-2 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-hero mb-6">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl bg-gradient-subtle p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-card shadow-card mx-auto">
                    <service.icon className="h-16 w-16 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-6">
            Need a Customized Solution?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific requirements. We'll work with you to find the perfect diagnostic solutions for your healthcare facility.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

import { Truck, Headphones, Settings, Clock } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Medical Equipment Distribution",
    description: "Reliable supply chain ensuring your hospital or laboratory receives premium medical devices and consumables on time.",
  },
  {
    icon: Settings,
    title: "Technical Support",
    description: "Expert after-sales coordination and technical assistance for all distributed equipment and products.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Efficient logistics and delivery services ensuring your critical medical supplies arrive when needed.",
  },
  {
    icon: Headphones,
    title: "Dedicated Client Support",
    description: "Personalized support and consultation to meet your specific diagnostic and medical equipment needs.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <span className="inline-block mb-4 text-sm font-medium text-accent uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl mb-4">
            Comprehensive Healthcare Support
          </h2>
          <p className="text-lg text-muted-foreground">
            Beyond distribution, we provide end-to-end support to ensure seamless operations for your healthcare facility.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group flex gap-5 rounded-xl bg-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-hero">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

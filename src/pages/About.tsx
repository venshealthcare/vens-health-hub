import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Award, Users, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We distribute only the highest quality medical equipment that meets international standards.",
  },
  {
    icon: Target,
    title: "Precision & Accuracy",
    description: "Every product we supply is tested for precision to ensure reliable diagnostic outcomes.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We build long-term relationships with healthcare facilities through trust and dependability.",
  },
  {
    icon: CheckCircle,
    title: "Compliance",
    description: "All our products meet regulatory requirements and quality certifications.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container relative text-center text-primary-foreground">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6">About VENS Healthcare</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Your trusted partner in advanced medical diagnostics and healthcare solutions
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-block mb-4 text-sm font-medium text-accent uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-6">
                Delivering Healthcare Excellence Since Day One
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  VENS Healthcare Private Limited is a premier distributor of advanced medical equipment and diagnostic consumables, serving hospitals and diagnostic laboratories across India.
                </p>
                <p>
                  Our commitment to quality, accuracy, and reliability has made us a trusted partner for healthcare facilities seeking cutting-edge diagnostic solutions. We specialize in blood gas analysis equipment, reagents, and critical care consumables.
                </p>
                <p>
                  With a focus on customer satisfaction and technical excellence, we ensure that every product we distribute meets the highest standards of quality and performance.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl bg-secondary p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-sm text-muted-foreground">Partner Hospitals</p>
              </div>
              <div className="rounded-xl bg-secondary p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Diagnostic Labs</p>
              </div>
              <div className="rounded-xl bg-secondary p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <p className="text-sm text-muted-foreground">Product Categories</p>
              </div>
              <div className="rounded-xl bg-secondary p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-card p-8 shadow-card">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-hero mb-6">
                <Eye className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and preferred partner for healthcare facilities seeking advanced diagnostic solutions, contributing to improved patient care and healthcare outcomes across India.
              </p>
            </div>
            <div className="rounded-xl bg-card p-8 shadow-card">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-hero mb-6">
                <Target className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver premium quality medical equipment and consumables with exceptional service, ensuring healthcare providers have access to the best diagnostic tools for accurate and timely patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="inline-block mb-4 text-sm font-medium text-accent uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl bg-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

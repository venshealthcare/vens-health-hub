import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "VENS Healthcare has been our trusted partner for diagnostic consumables. Their product quality and timely delivery have significantly improved our laboratory operations.",
    author: "Dr. Rajesh Kumar",
    role: "Lab Director",
    organization: "City General Hospital",
  },
  {
    quote: "The Siemens ePOC analyzer supplied by VENS Healthcare transformed our point-of-care testing capabilities. Excellent service and reliable products.",
    author: "Dr. Priya Sharma",
    role: "Chief Pathologist",
    organization: "Metro Diagnostic Center",
  },
  {
    quote: "Outstanding technical support and product quality. VENS Healthcare understands the critical nature of medical diagnostics and delivers accordingly.",
    author: "Dr. Anil Verma",
    role: "Medical Director",
    organization: "Regional Medical Institute",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <span className="inline-block mb-4 text-sm font-medium text-accent uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by hospitals and diagnostic laboratories across India.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative rounded-xl bg-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-secondary" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-primary">{testimonial.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

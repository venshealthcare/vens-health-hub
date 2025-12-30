import { Link } from "react-router-dom";
import { ArrowRight, TestTube, Syringe, BarChart3, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import siemensEpoc2 from "@/assets/siemens-epoc-2.png";

const products = [
  {
    image: siemensEpoc2,
    name: "Siemens ABG Gas Analyzer – ePOC",
    description: "Advanced point-of-care blood gas analysis with rapid, accurate results for critical care settings.",
    category: "ABG Analyzers",
  },
  {
    icon: TestTube,
    name: "ABG Reagents & Consumables",
    description: "Premium quality reagents ensuring precise diagnostics and reliable test outcomes.",
    category: "Reagents",
  },
  {
    icon: Microscope,
    name: "Rapid Test Cards",
    description: "Quick and efficient testing solutions for routine clinical analysis and screening.",
    category: "Rapid Tests",
  },
  {
    icon: Syringe,
    name: "ABG Syringes (Heparin Pre-coated)",
    description: "Pre-coated syringes designed for accurate blood gas sample collection.",
    category: "Syringes",
  },
  {
    icon: BarChart3,
    name: "Randox Controls",
    description: "Quality control solutions maintaining laboratory testing standards and accuracy.",
    category: "Quality Control",
  },
];

export function ProductsPreview() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <span className="inline-block mb-4 text-sm font-medium text-accent uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl mb-4">
            Premium Medical Equipment & Consumables
          </h2>
          <p className="text-lg text-muted-foreground">
            We distribute cutting-edge diagnostic solutions trusted by hospitals and laboratories nationwide.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative overflow-hidden rounded-xl bg-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex items-center justify-between">
                {product.image ? (
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary overflow-hidden">
                    <img src={product.image} alt={product.name} className="h-10 w-10 object-contain" />
                  </div>
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                    {product.icon && <product.icon className="h-6 w-6 text-primary" />}
                  </div>
                )}
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/products">
              View All Products
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

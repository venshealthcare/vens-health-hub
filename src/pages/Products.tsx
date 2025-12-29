import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Activity, TestTube, Syringe, BarChart3, Microscope, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  { id: "all", name: "All Products" },
  { id: "analyzers", name: "ABG Analyzers" },
  { id: "reagents", name: "Reagents" },
  { id: "rapid-tests", name: "Rapid Tests" },
  { id: "syringes", name: "Syringes" },
  { id: "control-cards", name: "Control Cards" },
];

const products = [
  {
    id: 1,
    name: "Siemens ABG Gas Analyzer – ePOC",
    category: "analyzers",
    icon: Activity,
    description: "Advanced point-of-care blood gas analyzer delivering rapid, accurate results for critical care decisions.",
    features: ["Rapid results in minutes", "Compact design", "Easy-to-use interface", "Comprehensive test menu"],
    availability: "In Stock",
  },
  {
    id: 2,
    name: "ABG Reagents & Consumables",
    category: "reagents",
    icon: TestTube,
    description: "Premium quality reagents specifically designed for blood gas analysis, ensuring accurate and reliable results.",
    features: ["High accuracy", "Long shelf life", "Compatible with major analyzers", "Quality certified"],
    availability: "In Stock",
  },
  {
    id: 3,
    name: "Rapid Test Cards",
    category: "rapid-tests",
    icon: Microscope,
    description: "Quick and efficient testing solutions for routine clinical analysis and screening procedures.",
    features: ["Fast results", "Easy interpretation", "No special equipment needed", "Wide test range"],
    availability: "In Stock",
  },
  {
    id: 4,
    name: "ABG Syringes (Heparin Pre-coated)",
    category: "syringes",
    icon: Syringe,
    description: "Pre-coated syringes designed specifically for accurate arterial blood gas sample collection.",
    features: ["Pre-coated with heparin", "Prevents sample clotting", "Optimal sample quality", "Easy to use"],
    availability: "In Stock",
  },
  {
    id: 5,
    name: "Randox Control",
    category: "controls",
    icon: BarChart3,
    description: "Quality control solutions designed to maintain laboratory testing standards and ensure accuracy.",
    features: ["Multi-level controls", "Wide analyte range", "Lot-to-lot consistency", "Extended stability"],
    availability: "In Stock",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container relative text-center text-primary-foreground">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6">Our Products</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Premium medical equipment and diagnostic consumables for healthcare excellence
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-card border-b border-border sticky top-[88px] lg:top-[104px] z-40">
        <div className="container">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group rounded-xl bg-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                        <product.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-accent bg-secondary px-3 py-1 rounded-full">
                        {product.availability}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link to="/contact">
                        Enquire Now
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Products;

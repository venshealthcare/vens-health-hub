import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductsPreview />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;

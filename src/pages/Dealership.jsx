import VolvoSection from "./About/VolvoSection";
import Demolition from "./Dealership/Demolition";
import HeroSection from "./Dealership/HeroSection";
import ProductsGrid from "./Dealership/ProductsGrid";
import ClientSection from "./Home/ClientSection";
import ContactSection from "./Home/ContactSection";



export default function HomePage() {
  return (
    <>
       <HeroSection />
       <ClientSection />
       <VolvoSection />
       <Demolition />
       <ProductsGrid />
       <ContactSection />
    </>
  );
}
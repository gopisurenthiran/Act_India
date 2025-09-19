import VolvoSection from "./About/VolvoSection";
import Products from "./Dealership/Products";
import HeroSection from "./Dealership/HeroSection";
import ClientSection from "./Home/ClientSection";
import ContactSection from "./Home/ContactSection";



export default function Dealership() {
  return (
    <>
       <HeroSection />
       <ClientSection />
       <VolvoSection />
       <Products />
       <ContactSection />
    </>
  );
}
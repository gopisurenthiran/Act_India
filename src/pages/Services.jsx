import TestimonialSlider from "./About/TestimonialSlider";
import ClientSection from "./Home/ClientSection";
import ContactSection from "./Home/ContactSection";
import DemolitionSection from "./Services/DemolitionSection";
import ProductSection from "./Services/ProductSection";
import ServiceBanner from "./Services/ServiceBanner";
import ExcavatorSlider from "./Services/ExcavatorSlider";
import ServicesSlider from "./Services/ServicesSlider";



export default function Service() {
  return (
    <>
    <ServiceBanner />
    <ClientSection />
    <DemolitionSection />
    <ProductSection />
    <ServicesSlider />
    <ExcavatorSlider />
    <TestimonialSlider />
    <ContactSection />
    </>
  )
}
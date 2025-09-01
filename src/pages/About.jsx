import AboutSection from "./About/AboutSection";
import ClientSection from "./Home/ClientSection";
import ContactSection from "./Home/ContactSection";
import CompaniesCarousel from  "./Home/CompaniesCarousel";
import ActSection from "./About/ActSection";
import VolvoSection from "./About/VolvoSection";
import WhyChooseACT from "./About/WhyChooseAct";
import TestimonialSlider from "./About/TestimonialSlider";

export default function About() {
  return (
   <>
   <AboutSection />
   <ClientSection />
   <ActSection />
   <VolvoSection />
   <WhyChooseACT />
   <TestimonialSlider />
   <ContactSection />
   <CompaniesCarousel />
   </>
  )
}
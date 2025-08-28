import AboutACT from "./Home/AboutACTSection";
import ClientSection from "./Home/ClientSection";
import CompaniesCarousel from "./Home/CompaniesCarousel";
import ContactSection from "./Home/ContactSection";
import DealersSection from "./Home/DealersSection";
import HomeSection from "./Home/HomeSection";
import SolutionsSection from "./Home/SolutionsSection";
import VideoSection from "./Home/VideoSection";


export default function HomePage() {
  return (
    <>
    <HomeSection />
    <ClientSection />
    <AboutACT />
    <VideoSection />
    <DealersSection />
    <SolutionsSection />
    <ContactSection />
    <CompaniesCarousel />
    </>
  );
}

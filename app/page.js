import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import AboutUs from "./components/home/AboutUs";
import ClientFeedBack from "./components/home/ClientFeedBack";
import Features from "./components/home/Features";
import FreshManicure from "./components/home/FreshManicure";
import Hero from "./components/home/Hero";
import NailArtGallery from "./components/home/NailsArtGallery";
import PriceGuide from "./components/home/PriceGuide";
import Services from "./components/home/Services";
import ServicesGallery from "./components/home/ServicesGallery";
import Testimonial from "./components/home/Testimonial";

export default function Home() {
  return (
   <>
   <Header />
   <Hero />
   <AboutUs />
   <Features />
   <FreshManicure/>
   <Services />
   <PriceGuide/>
   <NailArtGallery />
   <ClientFeedBack />
   <Testimonial />
   <ServicesGallery />
   <Footer />
   </>
  );
}

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import AboutUs from "./components/home/AboutUs";
import Features from "./components/home/Features";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";

export default function Home() {
  return (
   <>
   <Header />
   <Hero />
   <AboutUs />
   <Features />
   <Services />
   <Footer />
   </>
  );
}

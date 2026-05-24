import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import WhyChooseUs from "./components/home/WhyChooseUs";
import SpecialMessage from "./components/home/SpecialMessage";
import Projects from "./components/home/Projects";
import Services from "./components/home/Services";
import BankSlider from "./components/home/BankSlider";
import ContactSection from "./components/home/ContactSection";
import Contact from "./components/home/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <SpecialMessage />
      <Projects />
      <Services />
      <BankSlider />
      <ContactSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

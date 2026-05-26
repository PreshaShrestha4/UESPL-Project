import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

/* HOME COMPONENTS */
import Hero from "./components/home/Hero";
import AboutHome from "./components/home/About";
import WhyChooseUs from "./components/home/WhyChooseUs";
import SpecialMessage from "./components/home/SpecialMessage";
import ProjectsHome from "./components/home/Projects";
import ServicesHome from "./components/home/Services";
import BankSlider from "./components/home/BankSlider";
import ContactSection from "./components/home/ContactSection";
import ContactHome from "./components/home/Contact";

/* PAGES */
import AboutUs from "./pages/AboutUs/AboutUs";
// import Projects from "./pages/Projects";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";

/* HOME PAGE */

const Home = () => {
  return (
    <>
      <Hero />
      <AboutHome />
      <WhyChooseUs />
      <SpecialMessage />
      <ProjectsHome />
      <ServicesHome />
      <BankSlider />
      <ContactSection />
      <ContactHome />
    </>
  );
};

function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />
        {/* 
        <Route path="/projects" element={<Projects />} />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;

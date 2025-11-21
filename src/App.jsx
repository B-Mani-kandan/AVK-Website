import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import "./index.css";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import AirFreight from "./Components/Services/AirFreight/AirFreight";
import SeaFreight from "./Components/Services/SeaFreight/SeaFreight";
import HeavyLift from "./Components/Services/HeavyProject/HeavyLift";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path="/ocean-freight" element={<SeaFreight />} />
          <Route path="/air-freight" element={<AirFreight />} />
          <Route path="/project-cargo" element={<HeavyLift />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

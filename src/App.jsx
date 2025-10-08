import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import SeaFreight from "./Components/ServicePages/SeaFreight/SeaFreight";
import AirFreight from "./Components/ServicePages/AirFreight/AirFreight";
import HeavyLift from "./Components/ServicePages/HeavyProject/HeavyLift";
import ScrollToTop from "./ScrollToTop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      startEvent: "DOMContentLoaded",
    });

    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }, []);
  return (
    <>
      <Router>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/Ocean-Freight-Services" element={<SeaFreight />} />
          <Route path="/Air-Freight-Services" element={<AirFreight />} />
          <Route path="/Heavy-Lift-Cargo" element={<HeavyLift />} />
          {/* <Route path="/Road-Freight-Services" element={<Transportation />} />
        
        <Route path="/Air-Freight-Services" element={<AirFreight />} />
        <Route path="/FTWZ-Operations" element={<FTWZ />} />
        <Route path="/Customs-Clearance" element={<CustomClearence />} /> */}
        </Routes>
        {/* {location.pathname !== "/Contact-Us" && <HomeContact />} */}
        {/* <HomeDesc /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;

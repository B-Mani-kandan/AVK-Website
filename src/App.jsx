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
import Customs from "./Components/Services/Customs/Customs";
import Forwarding from "./Components/Services/Forwarding/Forwarding";
import WareHousing from "./Components/Services/WareHouse/WareHousing";
import { Products } from "./Components/Services/Products/Products";
import { AboutUs } from "./Components/AboutUs/AboutUs";

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
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path="/ocean-freight" element={<SeaFreight />} />
          <Route path="/air-freight" element={<AirFreight />} />
          <Route path="/project-cargo" element={<HeavyLift />} />
          <Route path="/custom-clearence" element={<Customs />} />
          <Route path="/forwarding" element={<Forwarding />} />
          <Route path="/warehousing" element={<WareHousing />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import logo from "./assets/logo.png";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product"; 
import Contact from "./pages/Contact";

import Import from "./pages/Import";
import Export from "./pages/Export";
import Warehousing from "./pages/Warehousing";
import ProjectCargo from "./pages/ProjectCargo";
import Forwarding from "./pages/Forwarding";
import CustomClearance from "./pages/CustomClearance";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen w-full text-white">
      
      {/* Navbar */}
      <nav className="bg-transparent backdrop-blur-sm fixed top-0 w-full z-50 shadow-md">
        <div className="max-w-7.5xl mx-auto flex justify-between items-center px-3 py-2">
          
          {/* Logo */}
          <img src={logo} alt="Company Logo" className="h-16 cursor-pointer" />

          {/* Nav Links */}
          <ul className="flex space-x-10 text-sm uppercase font-bold">
            <li><Link to="/" className="text-black hover:text-red-700">Home</Link></li>
            <li><Link to="/about" className="text-black hover:text-red-700">About</Link></li>
            <li><Link to="/product" className="text-black hover:text-red-700">Product</Link></li>

            {/* Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="text-black hover:text-red-700"
              >
                SERVICES ▾
              </button>

              {openDropdown && (
                <ul className="absolute left-0 mt-2 bg-white/20 text-white rounded-md shadow-lg">
                  {[
                    { label: "Import", link: "/import" },
                    { label: "Export", link: "/export" },
                    { label: "Warehousing", link: "/warehousing" },
                    { label: "Project Cargo", link: "/project-cargo" },
                    { label: "Forwarding", link: "/forwarding" },
                    { label: "Custom Clearance", link: "/custom-clearance" },
                  ].map((i) => (
                    <li key={i.label} className="px-6 py-2 hover:bg-red-600">
                      <Link to={i.link} onClick={() => setOpenDropdown(false)}>
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link to="/contact" className="text-black hover:text-red-700">Contact</Link></li>
          </ul>

        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-24 bg-black/40 min-h-screen">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:productName" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />

            {/* Services */}
            <Route path="/import" element={<Import />} />
            <Route path="/export" element={<Export />} />
            <Route path="/warehousing" element={<Warehousing />} />
            <Route path="/project-cargo" element={<ProjectCargo />} />
            <Route path="/forwarding" element={<Forwarding />} />
            <Route path="/custom-clearance" element={<CustomClearance />} />

          </Routes>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default App;

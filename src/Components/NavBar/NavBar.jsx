import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "lucide-react";
import Logo from "../../assets/Avk_Logo.webp";
import "../Home/Home.css";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    {
      name: "OUR SERVICES",
      subMenu: [
        { name: "OCEAN-FREIGHT", path: "/ocean-freight" },
        { name: "AIR-FREIGHT", path: "/air-freight" },
        { name: "WAREHOUSING", path: "/warehousing" },
        { name: "PROJECT CARGO", path: "/project-cargo" },
        { name: "FORWARDING", path: "/forwarding" },
        { name: "CUSTOM CLEARENCE", path: "/custom-clearence" },
      ],
    },
    { name: "CONTACT US", path: "/contact-us" },
  ];

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`navbar-container ${
        isScrolled ? "navbar-scrolled" : "navbar-top"
      }`}
    >
      <div className="flex items-center space-x-3">
        <img src={Logo} alt="logo" className="nav-logo" />
        <div>
          <h1 className="text-2xl font-semibold text-[#a9a7a7] font-changeHeading">
            Trans Global<span className="text-[20px] align-super"> ®</span>
          </h1>
          <p className="text-[12px] text-[#a9a7a7] font-change">
            Delivering Excellence in Global Logistics
          </p>
        </div>
      </div>

      <ul
        ref={dropdownRef}
        className="flex items-center space-x-8 text-[#a9a7a7] font-semibold text-sm uppercase relative"
      >
        {menuItems.map((item, index) => (
          <li key={index} className="relative group">
            {item.subMenu ? (
              <>
                <button
                  onClick={() => handleDropdown(index)}
                  className="flex items-center space-x-1 hover:text-sky-600 focus:outline-none"
                >
                  <span>{item.name}</span>
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === index && (
                  <ul className="absolute top-full left-0 bg-white rounded-md shadow-lg mt-2 w-72 p-2 z-50">
                    {item.subMenu.map((sub, i) => (
                      <li key={i}>
                        <Link
                          to={sub.path}
                          className="block px-3 py-2 text-gray-800 hover:text-sky-600 font-medium"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                to={item.path}
                className="hover:text-sky-600 transition-colors"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <button className="quote-btn">Get a Quote</button>
    </nav>
  );
};

export default Navbar;

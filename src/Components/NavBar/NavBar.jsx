// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { ChevronDownIcon } from "lucide-react";
// import Logo from "../../assets/Avk_Logo.webp";
// import "../Home/Home.css";
// import { Mail, Phone } from "lucide-react";

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const dropdownRef = useRef(null);

//   const menuItems = [
//     { name: "HOME", path: "/" },
//     { name: "ABOUT US", path: "/About-Us" },
//     {
//       name: "OUR SERVICES",
//       subMenu: [
//         { name: "OCEAN-FREIGHT", path: "/ocean-freight" },
//         { name: "AIR-FREIGHT", path: "/air-freight" },
//         { name: "WAREHOUSING", path: "/warehousing" },
//         { name: "PROJECT CARGO", path: "/project-cargo" },
//         { name: "FORWARDING", path: "/forwarding" },
//         { name: "CUSTOM CLEARENCE", path: "/custom-clearence" },
//       ],
//     },
//     { name: "PRODUCTS", path: "/products" },
//     { name: "CONTACT US", path: "/Contact-Us" },
//   ];

//   const handleDropdown = (index) => {
//     setOpenDropdown(openDropdown === index ? null : index);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpenDropdown(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);
//   const InfoItem = ({ icon, text }) => (
//     <div className="flex items-center text-[#a9a7a7] gap-2">
//       {icon}
//       <p className="text-[#a9a7a7] text-lg">{text}</p>
//     </div>
//   );

//   return (
//     <nav
//       className={`navbar-container ${
//         isScrolled ? "navbar-scrolled" : "navbar-top"
//       }`}
//     >
//       <div className="flex items-center space-x-3">
//         <img src={Logo} alt="logo" className="nav-logo" />
//         <div>
//           <h1 className="text-2xl font-semibold text-[#a9a7a7] font-changeHeading">
//             Trans Global<span className="text-[20px] align-super"> ®</span>
//           </h1>
//           <p className="text-[12px] text-[#a9a7a7] font-change">
//             Delivering Excellence in Global Logistics
//           </p>
//         </div>
//       </div>

//       <ul
//         ref={dropdownRef}
//         className="flex items-center space-x-8 font-new text-[#a9a7a7] font-bold text-sm uppercase relative"
//       >
//         {menuItems.map((item, index) => (
//           <li key={index} className="relative group">
//             {item.subMenu ? (
//               <>
//                 <button
//                   onClick={() => handleDropdown(index)}
//                   className="flex items-center space-x-1 hover:text-sky-600 focus:outline-none"
//                 >
//                   <span>{item.name}</span>
//                   <ChevronDownIcon
//                     className={`w-4 h-4 transition-transform ${
//                       openDropdown === index ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 {openDropdown === index && (
//                   <ul className="absolute top-full left-0 bg-white rounded-md shadow-lg mt-2 w-72 p-2 z-50">
//                     {item.subMenu.map((sub, i) => (
//                       <li key={i}>
//                         <Link
//                           to={sub.path}
//                           className="block px-3 py-2 text-gray-800 hover:text-sky-600 font-semibold"
//                           onClick={() => setOpenDropdown(null)}
//                         >
//                           {sub.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </>
//             ) : (
//               <Link
//                 to={item.path}
//                 className="hover:text-sky-600 font-new transition-colors"
//               >
//                 {item.name}
//               </Link>
//             )}
//           </li>
//         ))}
//       </ul>
//       <div className="flex flex-col gap-1 ">
//         <InfoItem icon={<Mail />} text="avktransglobal@gmail.com" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, Menu, X } from "lucide-react";
import Logo from "../../assets/Avk_Logo.webp";
import "../Home/Home.css";
import { Mail } from "lucide-react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // MOBILE MENU STATE
  const dropdownRef = useRef(null);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/About-Us" },
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
    { name: "PRODUCTS", path: "/products" },
    { name: "CONTACT US", path: "/Contact-Us" },
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

  const InfoItem = ({ icon, text }) => (
    <div className="flex items-center text-[#a9a7a7] gap-2">
      {icon}
      <p className="text-[#a9a7a7] text-lg">{text}</p>
    </div>
  );

  return (
    <nav
      className={`navbar-container ${
        isScrolled ? "navbar-scrolled" : "navbar-top"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-3 scale-90 md:scale-100">
        <img src={Logo} alt="logo" className="nav-logo" />
        <div>
          <h1 className="text-lg md:text-2xl font-semibold text-[#a9a7a7] font-changeHeading">
            Trans Global<span className="text-[20px] align-super"> ®</span>
          </h1>
          <p className="text-[10px] md:text-[12px] text-[#a9a7a7] font-change">
            Delivering Excellence in Global Logistics
          </p>
        </div>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="lg:hidden text-white text-3xl"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X /> : <Menu />}
      </button>

      {/* DESKTOP MENU */}
      <ul
        ref={dropdownRef}
        className="hidden lg:flex items-center space-x-8 font-new text-[#a9a7a7] font-bold text-sm uppercase relative"
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
                          className="block px-3 py-2 text-gray-800 hover:text-sky-600 font-semibold"
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
                className="hover:text-sky-600 font-new transition-colors"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* RIGHT SIDE EMAIL */}
      <div className="hidden lg:flex flex-col gap-1 ">
        <InfoItem icon={<Mail />} text="avktransglobal@gmail.com" />
      </div>

      {/* MOBILE SLIDE MENU */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-[#111] text-white p-5 flex flex-col gap-4 lg:hidden z-50">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.subMenu ? (
                <div>
                  <button
                    onClick={() => handleDropdown(index)}
                    className="flex justify-between w-full text-left text-lg font-semibold"
                  >
                    {item.name}
                    <ChevronDownIcon
                      className={`transition-transform ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === index && (
                    <div className="mt-2 ml-4 flex flex-col gap-2">
                      {item.subMenu.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.path}
                          onClick={() => setMobileOpen(false)}
                          className="text-gray-300 text-[15px] hover:text-sky-400"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-semibold hover:text-sky-400"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <div className="mt-4">
            <InfoItem icon={<Mail />} text="avktransglobal@gmail.com" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

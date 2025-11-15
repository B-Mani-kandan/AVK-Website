import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom' // Import Link and Outlet
import './App.css'
import logo from "./assets/logo.jpeg";

// --- NAVBAR ICONS (No changes) ---
const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
const XIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const ChevronDown = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);
// --- All other icons for content are now in AboutPage.jsx ---


const App = () => {
  // --- State for Navbar (No changes) ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false); 
  const [isServicesDesktopOpen, setIsServicesDesktopOpen] = useState(false);
  
  // This hook helps us close the menu when we change pages
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu on page change
    setIsMenuOpen(false);
    setIsServicesMobileOpen(false);
  }, [location.pathname]);

  // --- NAVBAR LOGIC (No changes) ---
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsServicesMobileOpen(false); 
  }
  const toggleServicesMobile = () => setIsServicesMobileOpen(!isServicesMobileOpen);
  
  // --- MODIFY THIS ARRAY ---
  const serviceItems = [
    // { name: "Import", href: "#services-import" }, // REMOVED
    // { name: "Export", href: "#services-export" }, // REMOVED
    { name: "Warehousing", href: "#services-warehousing" },
    { name: "Project Cargo", href: "#services-project" },
    { name: "Forwarding", href: "#services-forwarding" },
    { name: "Custom Clearance", href: "#services-custom" },
  ];
  // --- END OF MODIFICATION ---

  // Note: closeMenuAndScroll is no longer needed, it's handled by the useEffect
  const closeMenuAndScroll = () => {
    setIsMenuOpen(false);
    setIsServicesMobileOpen(false);
  }

  // --- Scroll animations are now in the page components, not here ---

  return (
    <div className="font-['Inter'] bg-white text-gray-800 overflow-x-hidden">
      
      {/* =================================== */}
      {/* ========== HEADER / NAVBAR ========== */}
      {/* =================================== */}
      <header className="bg-[#7A0C0C] text-white py-4 lg:py-5 px-6 lg:px-16 flex justify-between items-center fixed w-full top-0 z-50 shadow-md">
        
        <Link to="/" className="flex items-center space-x-3"> {/* Changed to Link */}
          <img src={logo} alt="AVK Logo" className="h-10 w-auto object-contain rounded-sm" />
          <h1 className="text-2xl font-bold tracking-tight uppercase">AVK LOGISTICS</h1>
        </Link>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden lg:flex items-center space-x-10 font-semibold text-sm tracking-wide">
          <Link to="/" className="hover:text-amber-400 transition-colors duration-200">HOME</Link>
          <Link to="/" className="hover:text-amber-400 transition-colors duration-200">ABOUT</Link> {/* Changed to Link */}

          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesDesktopOpen(true)}
            onMouseLeave={() => setIsServicesDesktopOpen(false)}
          >
            <button className="flex items-center hover:text-amber-400 transition-colors duration-200">
              SERVICES
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isServicesDesktopOpen ? 'rotate-180' : ''}`} />
            </button>

            {isServicesDesktopOpen && (
              <div className="absolute left-0 top-full mt-3 w-56 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-100 py-2 transition-all duration-200 z-50">
                {/* These are still anchor links, which is fine if they are on the About/Home page */}
                {serviceItems.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href} // This will only work on the home page.
                    className="block px-5 py-2.5 text-sm hover:bg-[#7A0C0C] hover:text-white transition-colors"
                    onClick={() => setIsServicesDesktopOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* --- ADD THESE LINKS --- */}
          <Link to="/import" className="hover:text-amber-400 transition-colors duration-200">IMPORT</Link>
          <Link to="/export" className="hover:text-amber-400 transition-colors duration-200">EXPORT</Link>
          {/* --- END OF ADDITIONS --- */}

          <Link to="/contact" className="hover:text-amber-400 transition-colors duration-200">CONTACT</Link> {/* Changed to Link */}
        </nav>

        <button className="hidden lg:inline-block bg-amber-400 text-[#7A0C0C] font-semibold px-5 py-2 rounded-md shadow-md hover:bg-amber-300 transition-all duration-200">
          Get a Quote
        </button>

        <button onClick={toggleMenu} className="lg:hidden p-2 hover:bg-red-700 rounded-md transition-colors">
          {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </header>

      {/* =================================== */}
      {/* ========== MOBILE MENU ============ */}
      {/* =================================== */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white text-gray-800 shadow-xl fixed w-full mt-[68px] p-5 z-40 space-y-3 border-t border-gray-200">
          <Link to="/" className="block py-2 hover:text-[#7A0C0C] transition">Home</Link>
          <Link to="/" className="block py-2 hover:text-[#7A0C0C] transition">About</Link>
          
          <div>
            <button 
              className="flex items-center justify-between w-full hover:text-[#7A0C0C] font-medium py-2 transition"
              onClick={toggleServicesMobile}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform text-[#7A0C0C] ${isServicesMobileOpen ? 'rotate-180' : ''}`} />
            </button>
            {isServicesMobileOpen && (
              <div className="ml-4 space-y-2 border-l border-gray-200 pl-4 pt-1 pb-2">
                {serviceItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} // This will only work on the home page
                    className="block text-base text-gray-600 hover:text-[#7A0C0C] transition"
                    onClick={closeMenuAndScroll} 
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          {/* --- ADD THESE LINKS --- */}
          <Link to="/import" className="block py-2 hover:text-[#7A0C0C] transition">Import</Link>
          <Link to="/export" className="block py-2 hover:text-[#7A0C0C] transition">Export</Link>
          {/* --- END OF ADDITIONS --- */}

          <Link to="/contact" className="block py-2 hover:text-[#7A0C0C] transition">Contact</Link>
        </div>
      )}

      {/* =================================== */}
      {/* ======== YOUR PAGE CONTENT ======== */}
      {/* =================================== */}
      
      {/* Outlet is the placeholder where your pages will be rendered */}
      <Outlet /> 

      {/* --- FIXED SOCIAL ICONS (No changes) --- */}
      <div className="fixed right-5 top-1/3 flex flex-col items-center gap-3 z-50">
        <a href="#" className="bg-[#1877f2] p-3 rounded-full hover:scale-110 transition">
          <i className="fab fa-facebook-f text-white text-lg"></i>
        </a>
        <a href="#" className="bg-[#e4405f] p-3 rounded-full hover:scale-110 transition">
          <i className="fab fa-instagram text-white text-lg"></i>
        </a>
        <a href="#" className="bg-[#0a66c2] p-3 rounded-full hover:scale-110 transition">
          <i className="fab fa-linkedin-in text-white text-lg"></i>
        </a>
        <a href="#" className="bg-[#25d366] p-3 rounded-full hover:scale-110 transition">
          <i className="fab fa-whatsapp text-white text-lg"></i>
        </a>
      </div>

      <div className="fixed right-5 bottom-6 flex flex-col items-center gap-3 z-50">
        <a href="#" className="bg-[#111] p-3 rounded-full hover:scale-110 transition">
          <i className="fas fa-comment text-white text-lg"></i>
        </a>
      </div>
      <div className="fixed left-5 bottom-6 z-50">
        <a href="#" className="bg-[#25d366] p-3 rounded-md hover:scale-110 transition">
          <i className="fab fa-whatsapp text-white text-lg"></i>
        </a>
      </div>

      {/* --- FOOTER (No changes) --- */}
      <footer className="bg-[#111] text-gray-300 py-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-10 mb-10">
            
            <div className="max-w-md">
              <img src={logo} alt="AVK Logo" className="h-10 w-auto object-contain rounded-sm mb-4" />
              <p className="text-gray-400">
                We offer solutions for our customers' transportation, storage, distribution and logistics needs.
              </p>
            </div>

            <Link to="/" className="text-base font-medium hover:text-amber-400 transition-colors">
              Home
            </Link>

            {/* This link is tricky. For now, it just goes to the top of the home page */}
            <Link to="/" className="text-base font-medium hover:text-amber-400 transition-colors">
              Services
            </Link>

            <Link to="/contact" className="text-base font-medium hover:text-amber-400 transition-colors">
              Contact Us
            </Link>
          </div>

          <hr className="border-gray-700" />

          <div className="flex flex-row flex-wrap justify-between items-center gap-6 mt-10">
            
            <div className="flex space-x-6">
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-amber-400 transition-colors">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-amber-400 transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-amber-400 transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>

            <p className="text-sm text-gray-500 text-left md:text-right">
              © 2024 AVK LOGISTICS. All Rights Reserved.
            </p>

          </div>
        </div>
      </footer>
    </div>
  );
};
export default App;
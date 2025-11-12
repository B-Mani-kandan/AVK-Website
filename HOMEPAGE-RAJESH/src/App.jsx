import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from "./assets/logo.jpeg";
import shipImage from "./assets/ship-m.jpg";

const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
const XIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const ChevronDown = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);
const ShieldCheck = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
);
const Rocket = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.79-2.28.5-3.24L4.5 16.5Zm1.5 4.86a2.5 2.5 0 1 0-3.23-3.23L15.65 6.45 20.3 11.1 6.36 21.36Z"/><path d="m18.5 7.5 2.15-2.15"/><path d="m13 12.5 1.5 1.5"/><path d="M15.03 21.43 4.29 10.68"/><path d="m16 2.5-4 4"/></svg>
);
const Handshake = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-8-8 1.5-1.5c.33-.33.7-.62 1.09-.89l-.02-2.31 3.53 3.53"/><path d="M16 8l3 3"/><path d="m20 4-4 4"/><path d="M8 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>
);
const Globe = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);
const Crane = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 11V3"/><path d="M6 3h12"/><path d="M3 11a7 7 0 0 0 14.36 1.76l.14-.76-5.87 2.17"/><path d="M10 19v2"/><path d="M2 21h20"/><path d="m15 15 5.5-5.5"/></svg>
);
const Warehouse = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 22V5l-8-3-8 3v17"/><path d="M4 12h16"/><path d="M12 7v5"/><path d="M18 17H6"/></svg>
);
const ReceiptCheck = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M4 4h16V2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2"/><path d="m9 14 2 2 4-4"/></svg>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);  
  const [isServicesDesktopOpen, setIsServicesDesktopOpen] = useState(false);
  

  const [scrollY, setScrollY] = useState(0);

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsServicesMobileOpen(false);  
  }
  const toggleServicesMobile = () => setIsServicesMobileOpen(!isServicesMobileOpen);
  
  const serviceItems = [
    { name: "Import", href: "#services-import" },
    { name: "Export", href: "#services-export" },
    { name: "Warehousing", href: "#services-warehousing" },
    { name: "Project Cargo", href: "#services-project" },
    { name: "Forwarding", href: "#services-forwarding" },
    { name: "Custom Clearance", href: "#services-custom" },
  ];

  const closeMenuAndScroll = () => {
    setIsMenuOpen(false);
    setIsServicesMobileOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); 
    };
    checkScreenSize(); 
    window.addEventListener('resize', checkScreenSize); 
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="font-['Inter'] bg-white text-gray-800 overflow-x-hidden">
      <header className="bg-[#7A0C0C] text-white py-4 lg:py-5 px-6 lg:px-16 flex justify-between items-center fixed w-full top-0 z-50 shadow-md">
       
        <div className="flex items-center space-x-3">
          <img src={logo} alt="AVK Logo" className="h-10 w-auto object-contain rounded-sm" />
          <h1 className="text-2xl font-bold tracking-tight uppercase">AVK LOGISTICS</h1>
        </div>

        <nav className="hidden lg:flex items-center space-x-10 font-semibold text-sm tracking-wide">
          <a href="#" className="hover:text-amber-400 transition-colors duration-200">HOME</a>
          <a href="#about" className="hover:text-amber-400 transition-colors duration-200">ABOUT</a>

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
                {serviceItems.map((item) => (
                  <a  
                    key={item.name}
                    href={item.href}
                    className="block px-5 py-2.5 text-sm hover:bg-[#7A0C0C] hover:text-white transition-colors"
                    onClick={() => setIsServicesDesktopOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" className="hover:text-amber-400 transition-colors duration-200">CONTACT</a>
        </nav>

        <button className="hidden lg:inline-block bg-amber-400 text-[#7A0C0C] font-semibold px-5 py-2 rounded-md shadow-md hover:bg-amber-300 transition-all duration-200">
          Get a Quote
        </button>

        <button onClick={toggleMenu} className="lg:hidden p-2 hover:bg-red-700 rounded-md transition-colors">
          {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </header>

      {isMenuOpen && (
        <div className="lg:hidden bg-white text-gray-800 shadow-xl absolute w-full mt-16 p-5 z-40 space-y-3 border-t border-gray-200">
          <a href="#" className="block py-2 hover:text-[#7A0C0C] transition" onClick={closeMenuAndScroll}>Home</a>
          <a href="#about" className="block py-2 hover:text-[#7A0C0C] transition" onClick={closeMenuAndScroll}>About</a>
          
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
                    href={item.href}  
                    className="block text-base text-gray-600 hover:text-[#7A0C0C] transition"
                    onClick={closeMenuAndScroll} 
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" className="block py-2 hover:text-[#7A0C0C] transition" onClick={closeMenuAndScroll}>Contact</a>
        </div>
      )}

      <section className="relative h-auto min-h-[110vh] lg:min-h-[100vh] pt-40 pb-20 bg-[#000d1a] text-white flex flex-col lg:flex-row justify-start items-center">

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

        <div className="relative z-20 text-left px-6 sm:px-10 md:px-10 lg:ml-2 lg:w-3/5 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Streamlining Your Global Supply Chain
            <br className="hidden sm:block" />
            With Comprehensive Logistics Solutions
          </h2>

          <a
            href="#services"
            className="inline-block mt-6 bg-amber-500 text-[#000d1a] px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-amber-400 transition-all duration-200"
          >
            Get a Quote Today
          </a>

          <div className="mt-10 w-full flex flex-col lg:flex-row lg:items-start lg:gap-12">
          
            <div className="flex flex-col py-4 border-b border-white/15 lg:border-b-0 lg:border-r lg:pr-8 border-white/15">
              <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
              <p className="text-gray-300 font-medium leading-snug">
                Successful Shipments<br />Monthly
              </p>
            </div>

            <div className="flex flex-col py-4 border-b border-white/15 lg:border-b-0 lg:border-r lg:pr-8 lg:pl-8 border-white/15">
              <h3 className="text-4xl font-bold text-white mb-2">100+</h3>
              <p className="text-gray-300 font-medium leading-snug">
                Fleet Vehicles
              </p>
            </div>

            <div className="flex flex-col py-4 lg:pl-8">
              <h3 className="text-4xl font-bold text-white mb-2">200+</h3>
              <p className="text-gray-300 font-medium leading-snug">
                Global Partners
              </p>
            </div>
          </div>
        </div>

        <div 
          className="hidden lg:flex w-full lg:w-2/5 h-[90vh] justify-center items-center z-10 overflow-visible"
          style={isLargeScreen ? {
            transform: `translateX(16.6667%) translateY(calc(6.25rem + ${scrollY * 0.3}px))`
          } : {}}
        >
          <div className="relative w-full h-full flex justify-center items-end pr-12">
            
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="absolute w-[1400px] h-[700px] border-[0.8px] border-white/10 rounded-full animate-arcMove1"></div>
              <div className="absolute w-[1100px] h-[550px] border-[0.8px] border-white/15 rounded-full animate-arcMove2"></div>
            </div>
      
            <img
              src={shipImage}
              alt="Cargo Ship"
              className="relative z-10 w-full h-auto max-h-[75vh] object-contain boat-float"
              style={{ objectPosition: "center bottom" }}
            />
          </div>
        </div>

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
      </section>

      <section id="about" className="relative z-30 py-20 px-6 lg:px-10 bg-white">
        <h3 className="text-4xl font-bold text-[#7A0C0C] mb-6">Your Trusted Partner in Global Trade</h3>
        <p className="text-lg text-gray-600 max-w-3xl mb-10">
          AVK Logistics delivers comprehensive, efficient, and cost-effective transport solutions powered by innovation and reliability.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[{icon: ShieldCheck, title: "Integrity"}, {icon: Rocket, title: "Innovation"}, {icon: Handshake, title: "Commitment"}].map((item, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-xl shadow-lg border-t-4 border-[#7A0C0C] hover:-translate-y-1 transition transform text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 text-[#7A0C0C]">
                <item.icon className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">Delivering with trust, technology, and dedication every single time.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-100 px-6 lg:px-10 relative">
        <img
          src="https://images.unsplash.com/photo-1554189097-ffe88e998a2b?auto:format&fit:crop&w:1600&q:80"
          alt="container-bg"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative">
          <h3 className="text-4xl font-bold text-[#7A0C0C] mb-6">Comprehensive Logistics Solutions</h3>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            From warehousing to freight forwarding — AVK offers tailored logistics built for global reach.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {Icon: Globe, title: "Global Freight", description: "Seamless international shipping by sea and air."},
              {Icon: Crane, title: "Project Cargo", description: "Handling oversized and complex cargo efficiently."},
              {Icon: Warehouse, title: "Warehousing", description: "Secure storage and inventory management services."},
              {Icon: ReceiptCheck, title: "Customs & Clearance", description: "Fast, compliant processing for smooth border crossings."}
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md border-b-4 border-amber-500 hover:shadow-xl hover:-translate-y-1 transition">
                <item.Icon className="w-8 h-8 text-[#7A0C0C] mb-4" />
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#111] text-gray-300 py-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-10 mb-10">
            
            <div className="max-w-md">
              <img src={logo} alt="AVK Logo" className="h-10 w-auto object-contain rounded-sm mb-4" />
              <p className="text-gray-400">
                We offer solutions for our customers' transportation, storage, distribution and logistics needs.
              </p>
            </div>

            <a href="#" className="text-base font-medium hover:text-amber-400 transition-colors">
              Home
            </a>

            <a href="#services" className="text-base font-medium hover:text-amber-400 transition-colors">
              Services
            </a>

            <a href="#contact" className="text-base font-medium hover:text-amber-400 transition-colors">
              Contact Us
            </a>
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
export default App
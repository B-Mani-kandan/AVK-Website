import { useState, useEffect, useRef } from 'react'
import '../App.css' // We need to go up one folder: ../App.css

// --- (UNCHANGED) ICONS FOR ABOUT PAGE CONTENT ---
const AwardIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a2.25 2.25 0 01-2.25-2.25v-9a2.25 2.25 0 012.25-2.25h9A2.25 2.25 0 0118.75 7.5v9a2.25 2.25 0 01-2.25 2.25z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a2.25 2.25 0 01-2.25-2.25v-9a2.25 2.25 0 012.25-2.25h9A2.25 2.25 0 0118.75 7.5v9a2.25 2.25 0 01-2.25 2.25zM12 10.5h.008v.008H12v-.008zM12 14.25h.008v.008H12v-.008zM9 10.5h.008v.008H9v-.008zM9 14.25h.008v.008H9v-.008zM15 10.5h.008v.008H15v-.008zM15 14.25h.008v.008H15v-.008z" /></svg>
);
const HandshakeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
);
const GlobeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0112 13.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0021 12c0-.778-.099 1.533-.284-2.253M12 21a9.004 9.004 0 01-8.716-6.747M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
);
const AnchorIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12v9m0 0H9m3 0h3m-3 0a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const ChartLineIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
);
const TopQualityIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const CheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
);
const TruckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5h10.5m-10.5-4.5H15m-10.5-4.5H15m-10.5-4.5H15M3 12h12v-4.5M3 7.5h12M3 7.5a2.25 2.25 0 012.25-2.25h1.5A2.25 2.25 0 019 7.5v1.5m-6 0v1.5m6-1.5v1.5m6 0v1.5m6 0v1.5m0-1.5a2.25 2.25 0 00-2.25-2.25h-1.5A2.25 2.25 0 0015 7.5v1.5m-6-1.5v1.5m6-1.5" /></svg>
);
const BuildingStorefrontIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.25a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h11.25m-4.5 0V6a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v4.5m11.378 0c.264 0 .523-.04.773-.118a.75.75 0 00.51-1.034l-1.328-3.418a.75.75 0 00-1.316-.213l-1.328 3.418a.75.75 0 00.51 1.034.75.75 0 00.773.118zM11.25 10.125h.008v.008h-.008V10.125z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 13.5v7.5a.75.75 0 00.75.75h3a.75.75 0 00.75-.75V13.5m0 0h.008v.008h-.008V13.5m-4.5 0h.008v.008h-.008V13.5" />
  </svg>
);
const ArchiveBoxIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10.5 11.25h3M12 15h.008M12 18h.008m-3.75-3h.008m3.75 0h.008m-3.75-3h.008m3.75 0h.008M12 3.75h.008m-3.75 0h.008m3.75 0h.008M3.75 7.5h16.5c.621 0 1.125-.504 1.125-1.125V6.375c0-.621-.504-1.125-1.125-1.125H3.75c-.621 0-1.125.504-1.125 1.125v.001c0 .621.504 1.125 1.125 1.125z" />
  </svg>
);
const QuoteIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"><path d="M10.512 8.336C3.92 8.336 0 12.736 0 18.592c0 5.44 3.968 9.072 8.688 9.072 4.8 0 8.336-3.2 8.336-7.824 0-4.8-3.328-8.336-8.512-8.512zm13.312 0C17.232 8.336 13.312 12.736 13.312 18.592c0 5.44 3.968 9.072 8.688 9.072 4.8 0 8.336-3.2 8.336-7.824 0-4.8-3.328-8.336-8.512-8.512z"/></svg>
);
const ChevronLeftIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
);
const ChevronRightIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
);

// --- (NEW) ADD THIS ICON ---
const ArrowRightIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
);


// --- (UNCHANGED) IMPORT LOCAL IMAGES ---
import factoryImage from "../assets/factory.jpg";
import shipImage from "../assets/ship.jpg";
import warehouseImage from "../assets/warehouse.jpg";
import aboutBanner from "../assets/about-banner.jpg"; 
import aboutTech from "../assets/about-tech.jpg"; 
import member1Image from "../assets/member1.jpg";
import member2Image from "../assets/member2.jpg";

// --- (UNCHANGED) TESTIMONIAL DATA ---
const testimonials = [
  {
    quote: "Joining AVK Logistics was a career-defining move. The company's vision for the future of freight is inspiring, and we are given the autonomy to make a real impact. Our leadership truly values innovation.",
    name: "SKYLER",
    title: "Director",
    image: member1Image 
  },
  {
    quote: "What I appreciate most is the collaborative spirit. Every team, from operations to tech, works seamlessly to solve complex problems. It's a challenging environment that fosters professional growth.",
    name: "RAJESH",
    title: "Manager",
    image: member2Image
  }
];

// --- (UNCHANGED) DATA FOR 'ABOUT DETAILS' SECTION BOXES ---
const detailCards = [
  { icon: AnchorIcon, title: "30+ Years", text: "Industry Experience" },
  { icon: ChartLineIcon, title: "Global Leader", text: "Cargo Securing Solutions" },
  { icon: TopQualityIcon, "title": "Top-Tier Quality", text: "World Standards" },
  { icon: GlobeIcon, title: "Worldwide", text: "Market Reach" }
];

// --- (NEW) DATA FOR COMPANIES ---
// This organizes your company data to make the new layout easy to build
const companiesData = [
  {
    shortTitle: "Rayzor",
    division: "Industrial Packaging",
    image: factoryImage,
    products: [
      "Polyester Composite Strap",
      "Container Desiccant",
      "Wooden Pallet"
    ]
  },
  {
    shortTitle: "Bulwark",
    division: "Industrial Solutions",
    image: shipImage,
    products: [
      "Polyester Lashing Belt",
      "Ratchet Lashing Belt",
      "Container Net",
      "Dunnage Air Bag"
    ]
  },
  {
    shortTitle: "Cordex",
    division: "Packaging Films",
    image: warehouseImage,
    products: [
      "LDPE Film",
      "VCI Film",
      "Anti-Static Film",
      "(Pallet Cover, Container Liner, Roll, Pouch, Bag)"
    ]
  }
];


// Renamed App to AboutPage
const AboutPage = () => {
  // State for testimonials is specific to this page
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // --- (UNCHANGED) SLIDER LOGIC ---
  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  const currentTestimonial = testimonials[currentTestimonialIndex];

  // --- (UNCHANGED) ON-SCROLL ANIMATION LOGIC ---
  // This logic is specific to this page
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const targets = document.querySelectorAll('.animate-on-scroll');
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []); // Runs once when this page mounts

  return (
    <main> 
      
      {/* =================================== */}
      {/* === (UNCHANGED) HERO SECTION === */}
      {/* =================================== */}
      <section className="relative w-full h-[400px] lg:h-[650px] pt-[68px] flex items-center">
        {/* ... hero content ... */}
        <img 
          src={aboutBanner} 
          alt="Logistics truck on a highway" 
          className="w-full h-full object-cover absolute inset-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <nav className="text-sm font-medium text-gray-200 animate-on-scroll animate-fade-in-up">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2 text-amber-400">/</span>
            <span>About Us</span>
          </nav>
          <h1 
            className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight mt-4 animate-on-scroll animate-fade-in-up" 
            style={{ animationDelay: '0.1s' }}
          >
            About AVK Logistics
          </h1>
          <div 
            className="w-24 h-1.5 bg-amber-400 mt-8 animate-on-scroll animate-fade-in-up" 
            style={{ animationDelay: '0.2s' }}>
          </div>
          <p 
            className="text-xl lg:text-2xl text-gray-200 max-w-2xl mt-6 animate-on-scroll animate-fade-in-up" 
            style={{ animationDelay: '0.3s' }}
          >
            Driving the future of freight with decades of expertise and a commitment to innovation.
          </p>
        </div>
      </section>


      {/* =================================== */}
      {/* === (UNCHANGED) ABOUT US CONTENT SECTION === */}
      {/* =================================== */}
      <section 
        id="about-hero"
        className="py-20 lg:py-28 px-6 lg:px-10 bg-white"
      >
        {/* ... about-hero content ... */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll animate-zoom-in">
            <img 
              src={aboutTech} 
              alt="Global logistics technology network" 
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="animate-on-scroll animate-fade-in-up">
            <div className="w-16 h-1 bg-amber-400 mb-4"></div> 
            <p className="text-sm font-semibold text-amber-500 uppercase tracking-widest mb-3">
              ABOUT US
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Expert Cargo Logistics
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Cargo's efficiency, connectivity, and global reach ensure seamless logistics, timely deliveries, and robust international trade, driving economic growth and innovation. Cargo's efficiency, connectivity, and global reach ensure seamless logistics, timely deliveries, and robust international trade, driving economic growth and innovation.
Get StartedCargo's efficiency, connectivity, and global reach ensure seamless logistics, timely deliveries, and robust international trade, driving economic growth and innovation.
Get Started
            </p>
            <button className="border border-[#7A0C0C] text-[#7A0C0C] font-semibold px-8 py-3 rounded-md hover:bg-[#7A0C0C] hover:text-white transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* =================================== */}
      {/* === (THIS IS THE *UPDATED* SECTION) === */}
      {/* =================================== */}
      <section id="companies" className="py-20 lg:py-28 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="animate-on-scroll animate-fade-in-up">
              <div className="w-16 h-1 bg-amber-400 mx-auto mb-4"></div>
              <h2 className="text-sm font-semibold text-amber-500 uppercase tracking-widest">
                OUR COMPANIES
              </h2>
            </div>
            <h3 className="mt-4 text-4xl lg:text-5xl font-bold text-[#7A0C0C] animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Three Divisions, One Vision
            </h3>
            <p className="mt-6 text-lg text-gray-600 animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Comprehensive cargo securing solutions through our specialized manufacturing divisions
            </p>
          </div>

          {/* New 3-Column Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companiesData.map((company, index) => (
              <div 
                key={company.shortTitle}
                className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-on-scroll animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                
                {/* 1. Image with Text Overlay */}
                <div className="relative h-56">
                  <img 
                    src={company.image} 
                    alt={company.shortTitle}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-2xl font-bold">{company.shortTitle}</h4>
                    <p className="text-gray-200">{company.division}</p>
                  </div>
                </div>

                {/* 2. Content Area (Product List) */}
                <div className="p-6 flex-grow">
                  <ul className="space-y-4 text-gray-700 text-base">
                    {company.products.map((product) => (
                      <li key={product} className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-amber-400 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <CheckIcon className="w-4 h-4" />
                        </div>
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Button */}
                <div className="p-6 pt-0 mt-auto">
                  <button className="w-full group flex items-center justify-center gap-2 border border-[#7A0C0C] text-[#7A0C0C] font-semibold px-6 py-3 rounded-lg hover:bg-[#7A0C0C] hover:text-white transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =================================== */}
      {/* === (UNCHANGED) ABOUT DETAILS SECTION === */}
      {/* =================================== */}
      <section id="about-details" className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        {/* ... about-details content ... */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="animate-on-scroll animate-fade-in-up">
              <h3 className="mt-4 text-4xl lg:text-5xl font-bold text-[#7A0C0C] mb-8">
                Premier Global Manufacturer
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed space-y-4 mb-10">
                <span>
                  Our Companies stands as a premier global manufacturer of cargo load securing solutions, 
                  providing an expansive product portfolio that encompasses Lashing Belt, Composite Strap, 
                  Ratchet Tie Down, Dunnage Air Bag, VCI Film, Container Net, Cargo Bar.
                </span>
                <span>
                  We have been dedicated to making movements of goods safer. We have consistently delivered 
                  top-tier cargo securement products to global markets. This enduring commitment to quality, 
                  coupled with competitive pricing, positions as a trusted manufacturer in the industry.
                </span>
              </p>
              <button className="bg-[#7A0C0C] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#630a0a] transition-colors duration-300">
                Explore Our Products
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {detailCards.map((card, index) => (
                <div 
                  key={card.title}
                  className="group relative bg-white p-6 rounded-xl border border-gray-200 overflow-hidden shadow-lg 
                          animate-on-scroll transition-all duration-300 hover:-translate-y-2 hover:border-[#7A0C0C]"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <span className="absolute top-4 right-5 text-7xl font-extrabold text-gray-100/70 transition-colors duration-300 
                                [.is-visible_&]:text-amber-100/50">
                    0{index + 1}
                  </span>
                  <div className="relative z-10 transition-transform duration-500 translate-y-28 [.is-visible_&]:translate-y-0">
                    <div className="w-16 h-16 bg-amber-400 rounded-lg flex items-center justify-center mb-6 
                                transition-all duration-500 group-hover:bg-[#7A0C0C] group-hover:rotate-[360deg]">
                      <card.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="relative z-10 transition-transform duration-500 translate-y-28 [.is-visible_&]:translate-y-0">
                    <h4 className="text-xl font-bold text-[#7A0C0C] mb-3 h-14">{card.title}</h4>
                    <p className="text-gray-600 h-12">{card.text}</p>
                  </div>
                  <div className="absolute left-6 bottom-6 h-1 w-12 bg-[#7A0C0C] transition-transform duration-500 scale-x-0 [.is-visible_&]:scale-x-100" 
                    style={{ transformOrigin: 'left' }}>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- (UNCHANGED) JOIN US / TESTIMONIAL SECTION --- */}
      <section id="join-us" className="bg-[#7A0C0C] text-white py-20 lg:py-28 px-6 lg:px-10">
        {/* ... join-us content ... */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Lead the Freight Transformation
            </h2>
            <p className="text-lg text-red-100 leading-relaxed mb-10">
              Our Companies stands as a premier global manufacturer of cargo load securing solutions, providing an expansive product portfolio that encompasses Lashing Belt, Composite Strap, Ratchet Tie Down, Dunnage Air Bag, VCI Film, Container Net, Cargo Bar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-400 text-[#7A0C0C] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-amber-300 transition-colors duration-300">
                Come Join Us
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-[#7A0C0C] transition-colors duration-300">
                Who We Are
              </button>
            </div>
          </div>
          <div className="relative animate-on-scroll animate-zoom-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl text-gray-800">
              <QuoteIcon className="w-20 h-20 lg:w-24 lg:h-24 text-red-100 absolute top-6 right-8 z-0" />
              <div className="relative z-10">
                <p className="text-lg lg:text-xl text-gray-700 italic mb-8 min-h-[160px] lg:min-h-[140px]">
                  "{currentTestimonial.quote}"
                </p>
                <div className="flex items-center mb-16">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name}
                    className="w-14 h-14 rounded-full object-cover shadow-md"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</p>
                    <p className="text-sm text-gray-500">{currentTestimonial.title}</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-8 flex space-x-3 z-10">
                <button 
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-full border-2 border-amber-300 text-amber-500 hover:bg-[#7A0C0C] hover:text-white hover:border-[#7A0C0C] transition-colors flex items-center justify-center"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-full border-2 border-amber-300 text-amber-500 hover:bg-[#7A0C0C] hover:text-white hover:border-[#7A0C0C] transition-colors flex items-center justify-center"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;
import { useEffect } from 'react';
import '../App.css'; 
import importBanner from '../assets/new_import_banner.jpg'; // Updated Banner
import passportImage from '../assets/passport.jpg'; // New Image for Documentation Section

// --- ICONS ---
// Standard Check Circle Icon (used in Documentation Lists)
const CheckCircleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
// Document Text Icon (used for Step 1: Pre-Shipment)
const DocumentTextIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);
// Magnifying Glass Icon (used for Step 2: Customs Clearance)
const MagnifyingGlassIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);
// Truck Icon (used for Step 3: Goods Release)
const TruckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 17H6v-6h10.468c.28.001.55.097.759.27l1.54 1.232a1.25 1.25 0 01.332.938V17h-2.121m-2.121-4H6m7 4h2.121M13 17L10.879 15m2.121 2l2.121-2m-2.121 2V13m2.121 4V13m0 0L10.879 15m2.121-2H6" />
  </svg>
);
// Identification Icon (used in Key Requirements)
const IdentificationIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A1.5 1.5 0 0118 21.75H6.75a1.5 1.5 0 01-1.45-1.632z" />
  </svg>
);
// Globe Icon (used in Key Requirements)
const GlobeAltIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 3v18m0-18c-5.96 0-10.83 3.96-10.83 8.86 0 4.9 4.87 8.86 10.83 8.86m0-17.72c5.96 0 10.83 3.96 10.83 8.86 0 4.9-4.87 8.86-10.83 8.86" />
  </svg>
);
// Shield Exclamation Icon (used in Key Requirements)
const ShieldExclamationIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.374c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);


// --- PAGE DATA ---
const processSteps = [
  {
    icon: DocumentTextIcon,
    title: "1. Pre-Shipment",
    text: "Verify supplier, confirm Purchase Order, and secure vital documents like the Proforma Invoice and Letter of Credit.",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "2. Customs Clearance",
    text: "We handle the filing of the Bill of Entry, coordinate customs examination and valuation, and ensure all duties are paid.",
  },
  {
    icon: TruckIcon,
    title: "3. Goods Release",
    text: "After duty payment, we obtain the Out of Charge (OOC) order and manage final-mile logistics to your warehouse.",
  }
];

const requirements = [
  {
    icon: IdentificationIcon,
    title: "Import-Export Code (IEC)",
    text: "A mandatory 10-digit code required for any business importing goods into the country. We can assist in the application process."
  },
  {
    icon: GlobeAltIcon,
    title: "HS Codes & Incoterms",
    text: "Correctly classify your goods with HS Codes to determine duties, and understand your risks/costs with Incoterms (e.g., FOB, CIF)."
  },
  {
    icon: ShieldExclamationIcon,
    title: "Restricted Goods",
    text: "Be aware of items that are prohibited or require special licenses (e.g., food products, chemicals, defense goods)."
  }
];

// --- MAIN COMPONENT ---
const ImportPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll('.animate-on-scroll');
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return (
    <main>
      {/* 🚢 HERO SECTION */}
      <section className="relative w-full h-[500px] pt-[68px] flex items-center">
        <img 
          src={importBanner} 
          alt="Import logistics containers on a ship" 
          className="w-full h-full object-cover absolute inset-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <nav className="text-sm font-medium text-gray-200 animate-on-scroll animate-fade-in-up">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2 text-amber-400">/</span>
            <span>Import</span>
          </nav>
          <h1 
            className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight mt-4 animate-on-scroll animate-fade-in-up" 
            style={{ animationDelay: '0.1s' }}
          >
            Import Services
          </h1>
          <div 
            className="w-24 h-1.5 bg-amber-400 mt-8 animate-on-scroll animate-fade-in-up" 
            style={{ animationDelay: '0.2s' }}>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* ⚙️ THE IMPORT PROCESS - With Hover Animations and Arrows */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="animate-on-scroll animate-fade-in-up">
              <div className="w-24 h-1.5 bg-amber-400 mx-auto mb-4"></div> 
              <h2 className="text-sm font-semibold text-amber-500 uppercase tracking-widest">
                Our Process
              </h2>
            </div>
            <h3 className="mt-4 text-4xl lg:text-5xl font-bold text-[#7A0C0C] animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              A Clear Path for Your Imports
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Horizontal Arrow Lines */}
            <div className="hidden md:flex absolute inset-0 top-[60px] justify-around items-start pointer-events-none px-10">
                <div className="relative flex items-center w-full justify-center">
                    <hr className="w-[85%] border-t-2 border-dashed border-amber-300" />
                    <span className="text-amber-400 text-3xl absolute right-[-20px] top-[-18px]">
                        &gt;
                    </span>
                </div>
                <div className="relative flex items-center w-full justify-center">
                    <hr className="w-[85%] border-t-2 border-dashed border-amber-300" />
                    <span className="text-amber-400 text-3xl absolute right-[-20px] top-[-18px]">
                        &gt;
                    </span>
                </div>
                <div className="w-full"></div> 
            </div>

            {processSteps.map((step, index) => (
              // Card with hover shadow and lift, and 'group' class for child hovers
              <div 
                key={step.title}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 animate-on-scroll animate-fade-in-up transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Container with hover color change */}
                <div className="w-16 h-16 bg-[#7A0C0C] text-white rounded-lg flex items-center justify-center mb-6 transition-transform duration-500 group-hover:bg-amber-500">
                  {/* Icon with rotation effect on card hover */}
                  <step.icon className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      {/* 🔑 KEY REQUIREMENTS */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="animate-on-scroll animate-fade-in-up">
              <div className="w-24 h-1.5 bg-amber-400 mx-auto mb-4"></div> 
              <h2 className="text-sm font-semibold text-amber-500 uppercase tracking-widest">
                Get Started
              </h2>
            </div>
            <h3 className="mt-4 text-4xl lg:text-5xl font-bold text-[#7A0C0C] animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Key Import Requirements
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((item, index) => (
              <div 
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 animate-on-scroll animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mr-5">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      {/* 📄 DOCUMENT CHECKLIST / COMPLIANCE SECTION - With Image Layout */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="animate-on-scroll animate-fade-in-up">
              <div className="w-24 h-1.5 bg-amber-400 mx-auto mb-4"></div> 
              <h2 className="text-sm font-semibold text-amber-500 uppercase tracking-widest">
                Compliance
              </h2>
            </div>
            <h3 className="mt-4 text-4xl lg:text-5xl font-bold text-[#7A0C0C] animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Essential Documentation
            </h3>
            <p className="mt-6 text-lg text-gray-600 animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Proper paperwork is the key to a smooth customs clearance.
            </p>
          </div>
          
          {/* Two-Column Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT COLUMN: Image and Text Block */}
            <div className="relative animate-on-scroll animate-fade-in-up group">
              {/* Large Image */}
              <img 
                src={passportImage} 
                alt="International documents and passports" 
                className="w-full h-auto rounded-xl shadow-2xl object-cover lg:max-h-[500px]"
              />
              
              {/* Overlayed Text Box */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 bg-white/95 backdrop-blur-sm rounded-b-xl shadow-lg border-t-4 border-[#7A0C0C] transition-all duration-300 group-hover:bg-white">
                <h4 className="text-3xl font-bold text-gray-900 mb-2">
                  Complete Documentation
                </h4>
                <p className="text-lg text-gray-600">
                  We guide you through every requirement to ensure fast, compliant entry for your goods.
                </p>
              </div>

              {/* Decorative Red Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#7A0C0C] rounded-tr-xl opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
            
            {/* RIGHT COLUMN: Document Lists */}
            <div className="space-y-12">
              
              {/* Commercial Documents */}
              <div className="animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-amber-400 pl-4">
                  Commercial Documents
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span><span className="font-semibold">Commercial Invoice:</span> The primary document detailing the transaction between seller and buyer.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span><span className="font-semibold">Packing List:</span> An itemized list of all goods in the shipment, including weight, dimensions, and packing details.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span><span className="font-semibold">Bill of Lading (B/L) / Air Waybill (AWB):</span> The contract between the shipper and the carrier.</span>
                  </li>
                </ul>
              </div>
              
              {/* Regulatory Documents */}
              <div className="animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-amber-400 pl-4">
                  Regulatory & Support Documents
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span><span className="font-semibold">Certificate of Origin (COO):</span> Certifies the country where the goods were manufactured.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span><span className="font-semibold">Insurance Certificate:</span> Required to cover the goods against loss or damage during transit.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span><span className="font-semibold">Special Licenses:</span> Any permits required for restricted goods (e.g., health certificates for food items).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* 📞 CTA SECTION */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-[#7A0C0C] text-white rounded-xl shadow-2xl p-10 lg:p-16 animate-on-scroll animate-zoom-in">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Don't Navigate Import Complexity Alone
            </h2>
            <p className="text-lg text-red-100 max-w-2xl mx-auto mb-8">
              From freight forwarding to customs brokerage, our team is ready to make your import process simple, compliant, and cost-effective.
            </p>
            <button className="bg-amber-400 text-[#7A0C0C] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-amber-300 transition-colors duration-300">
              Get an Import Quote
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ImportPage;
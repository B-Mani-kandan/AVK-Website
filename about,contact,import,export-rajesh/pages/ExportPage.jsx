import { useEffect } from 'react';
import '../App.css'; 
import exportBanner from '../assets/new_export_banner.jpg'; // Ensure this is your actual image path

// ⚠️ TODO: Replace these with your actual image file paths in the /assets folder
import exportStep1 from '../assets/export-packaging.jpg'; 
import exportStep2 from '../assets/export-customs.jpg';
import exportStep3 from '../assets/export-payment.jpg';

// --- ICONS FOR THIS PAGE ---
const CheckCircleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const ArchiveBoxIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10.5 11.25h3M12 15h.008M12 18h.008m-3.75-3h.008m3.75 0h.008m-3.75-3h.008m3.75 0h.008M12 3.75h.008m-3.75 0h.008m3.75 0h.008M3.75 7.5h16.5c.621 0 1.125-.504 1.125-1.125V6.375c0-.621-.504-1.125-1.125-1.125H3.75c-.621 0-1.125.504-1.125 1.125v.001c0 .621.504 1.125 1.125 1.125z" />
  </svg>
);
const DocumentCheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9l-3 3m0 0l-3-3m3 3v5.25m0-13.5v3.75M3 13.5h.008v.008H3v-.008zm1.5 0h.008v.008H4.5v-.008zm1.5 0h.008v.008H6v-.008zm1.5 0h.008v.008H7.5v-.008zm1.5 0h.008v.008H9v-.008zm1.5 0h.008v.008H10.5v-.008zm1.5 0h.008v.008H12v-.008zm1.5 0h.008v.008H13.5v-.008zm1.5 0h.008v.008H15v-.008zm1.5 0h.008v.008H16.5v-.008zm1.5 0h.008v.008H18v-.008zm1.5 0h.008v.008H19.5v-.008z" />
  </svg>
);
const BanknotesIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.3-5.332A60.07 60.07 0 0121.75 18.75m-19.5 0a3.003 3.003 0 003.75 0M9 11.25v3.75m3-3.75v3.75m3-3.75v3.75m3-3.75v3.75M3 15v3.75A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V15M3 11.25v-3.75A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25v3.75" />
  </svg>
);
const IdentificationIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A1.5 1.5 0 0118 21.75H6.75a1.5 1.5 0 01-1.45-1.632z" />
  </svg>
);
const GlobeAltIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 3v18m0-18c-5.96 0-10.83 3.96-10.83 8.86 0 4.9 4.87 8.86 10.83 8.86m0-17.72c5.96 0 10.83 3.96 10.83 8.86 0 4.9-4.87 8.86-10.83 8.86" />
  </svg>
);
const ShieldExclamationIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.374c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);

// --- Page Data (UPDATED) ---
const processSteps = [
  {
    image: exportStep1, // Added image
    title: "1. Order & Packaging",
    text: "Conduct pre-shipment quality inspection and ensure all goods are packed and labeled to international standards.",
  },
  {
    image: exportStep2, // Added image
    title: "2. Customs Formalities",
    text: "We file the Shipping Bill, manage customs verification, and secure the Let Export Order (LEO) to load your cargo.",
  },
  {
    image: exportStep3, // Added image
    title: "3. Post-Shipment",
    text: "We help you realize your export proceeds on time and provide all documentation for claiming incentives like Duty Drawback.",
  }
];

const requirements = [
  {
    icon: IdentificationIcon,
    title: "Import-Export Code (IEC)",
    text: "A mandatory 10-digit code required for any business exporting goods from the country. We can assist in the application process."
  },
  {
    icon: GlobeAltIcon,
    title: "HS Codes & Incoterms",
    text: "Correctly classify your goods with HS Codes for the destination country, and define your risks/costs with Incoterms (e.g., FOB, CIF)."
  },
  {
    icon: ShieldExclamationIcon,
    title: "Restricted Goods",
    text: "Be aware of the destination country's regulations for items that are prohibited or require special permits to be imported."
  }
];

const ExportPage = () => {

  // Scroll to top and set up animations
  useEffect(() => {
    window.scrollTo(0, 0);

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
      {/* HERO SECTION */}
      <section className="relative w-full h-[500px] pt-[68px] flex items-center">
        <img 
          src={exportBanner} 
          alt="Export logistics at a factory" 
          className="w-full h-full object-cover absolute inset-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <nav className="text-sm font-medium text-gray-200 animate-on-scroll animate-fade-in-up">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2 text-amber-400">/</span>
            <span>Export</span>
          </nav>
          <h1 
            className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight mt-4 animate-on-scroll animate-fade-in-up" 
            style={{ animationDelay: '0.1s' }}
          >
            Export Services
          </h1>
          <div 
            className="w-24 h-1.5 bg-amber-400 mt-8 animate-on-scroll animate-fade-in-up" 
            style={{ animationDelay: '0.2s' }}>
          </div>
        </div>
      </section>

      {/* --- THE EXPORT PROCESS (UPDATED) --- */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* --- Section Header --- */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="animate-on-scroll animate-fade-in-up">
              <div className="w-24 h-1.5 bg-amber-400 mx-auto mb-4"></div> 
              <h2 className="text-sm font-semibold text-amber-500 uppercase tracking-widest">
                Our Process
              </h2>
            </div>
            <h3 className="mt-4 text-4xl lg:text-5xl font-bold text-[#7A0C0C] animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Your Gateway to Global Markets
            </h3>
          </div>
          {/* --- End Section Header --- */}

          {/* === Process Steps Grid (NEW DESIGN) === */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.title}
                className="relative rounded-xl shadow-lg overflow-hidden group animate-on-scroll animate-fade-in-up h-80" // Set a fixed height
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* 1. Background Image */}
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                
                {/* 2. Default Title (Overlay at bottom) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h4 className="text-white text-2xl font-bold">{step.title}</h4>
                </div>

                {/* 3. Hover Overlay (Hidden by default) */}
                <div className="absolute inset-0 bg-[#7A0C0C]/95 p-6 flex flex-col justify-center text-white
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-200 mb-4">{step.text}</p>
                  <a href="#" className="font-semibold text-amber-400 hover:text-amber-300 self-start">
                    Learn More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* === End Process Steps Grid === */}

        </div>
      </section>

      {/* KEY REQUIREMENTS */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* --- Section Header --- */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="animate-on-scroll animate-fade-in-up">
              <div className="w-24 h-1.5 bg-amber-400 mx-auto mb-4"></div> 
              <h2 className="text-sm font-semibold text-amber-500 uppercase tracking-widest">
                Get Started
              </h2>
            </div>
            <h3 className="mt-4 text-4xl lg:text-5xl font-bold text-[#7A0C0C] animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Key Export Requirements
            </h3>
          </div>
          {/* --- End Section Header --- */}

          {/* Requirements Grid */}
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

      {/* DOCUMENT CHECKLIST */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* --- Section Header --- */}
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
              Secure and accurate paperwork ensures fast, compliant exports.
            </p>
          </div>
          {/* --- End Section Header --- */}

          {/* Document Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            
            {/* Commercial Documents */}
            <div className="animate-on-scroll animate-fade-in-up">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-amber-400 pb-2">
                Core Documents
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><span className="font-semibold">Shipping Bill:</span> The primary customs document filed to get clearance for export.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><span className="font-semibold">Commercial Invoice & Packing List:</span> Details the transaction, value, and contents of the shipment.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><span className="font-semibold">Bill of Lading (B/L) / Air Waybill (AWB):</span> The contract from the carrier for transporting the goods.</span>
                </li>
              </ul>
            </div>
            
            {/* Regulatory Documents */}
            <div className="animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h4 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-amber-400 pb-2">
                Regulatory & Support Documents
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><span className="font-semibold">Certificate of Origin (COO):</span> Proves where the goods were manufactured, often needed for trade agreements.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><span className="font-semibold">Quality Inspection Certificate:</span> Proves the goods meet the specifications agreed upon with the buyer.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><span className="font-semibold">Phytosanitary/Health Certificates:</span> Required for exporting agricultural products, plants, or animal products.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-5xl mx-auto bg-[#7A0C0C] text-white rounded-xl shadow-2xl p-10 lg:p-16 animate-on-scroll animate-zoom-in">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Go Global?
            </h2>
            <p className="text-lg text-red-100 max-w-2xl mx-auto mb-8">
              Let our experts handle the complexities of export documentation, compliance, and logistics. We'll get your goods to any market, anywhere.
            </p>
            <button className="bg-amber-400 text-[#7A0C0C] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-amber-300 transition-colors duration-300">
              Get an Export Quote
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ExportPage;
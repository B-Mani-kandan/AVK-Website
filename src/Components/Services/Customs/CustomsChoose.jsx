import {
  ShieldCheck,
  FileCheck,
  RefreshCcw,
  MapPin,
  Bell,
  IndianRupee,
} from "lucide-react";

export default function CustomsChoose() {
  const features = [
    {
      title: "Experienced Licensed Professionals",
      icon: ShieldCheck,
      desc: "Our experts stay updated with customs laws, EXIM policies, and global trade regulations.",
    },
    {
      title: "Fast & Error-Free Documentation",
      icon: FileCheck,
      desc: "We prepare, verify, and submit all documents with precision to avoid delays.",
    },
    {
      title: "End-to-End Support",
      icon: RefreshCcw,
      desc: "From shipment planning to post-clearance follow-up, we manage the entire process.",
    },
    {
      title: "Nationwide Network",
      icon: MapPin,
      desc: "We provide clearance at all major ports, airports, and ICDs across India.",
    },
    {
      title: "Real-Time Updates",
      icon: Bell,
      desc: "Stay informed with timely notifications throughout the clearance cycle.",
    },
    {
      title: "Cost-Effective Solutions",
      icon: IndianRupee,
      desc: "Transparent pricing with no hidden fees — complete value for money.",
    },
  ];

  return (
    <div className="w-full   py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
            WHY CHOOSE US
          </p>
          <h2 className="text-4xl md:text-4xl font-new font-bold text-gray-900 leading-tight mb-4">
            Customs Clearance — Made Effortless & Reliable
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Our customized, compliance-led customs clearance solutions ensure
            your cargo moves without delays, penalties, or disruptions.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/50 border border-white/40 shadow-lg rounded-2xl p-7 transition cursor-pointer 
                hover:shadow-2xl hover:-translate-y-2 duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className=" rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#7e0001]" />
                  </div>
                </div>
                <h3 className="text-xl font-new font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-4 h-1 w-0 bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

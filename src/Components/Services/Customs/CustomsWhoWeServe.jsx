import {
  Building2,
  Factory,
  ShoppingCart,
  Truck,
  Boxes,
  Store,
} from "lucide-react";

export default function CustomsWhoWeServe() {
  const sectors = [
    {
      title: "Importers & Exporters",
      icon: Building2,
      desc: "End-to-end customs support to ensure smooth import and export documentation, clearance, and compliance.",
    },
    {
      title: "Manufacturers",
      icon: Factory,
      desc: "Efficient clearance of raw materials and machinery to avoid production delays and ensure smooth operations.",
    },
    {
      title: "Traders",
      icon: ShoppingCart,
      desc: "Fast and reliable customs processing to help traders move goods quickly and reduce turnaround times.",
    },
    {
      title: "E-commerce Businesses",
      icon: Store,
      desc: "Specialized small-parcel customs solutions for fast-moving online orders and global shipments.",
    },
    {
      title: "Project Logistics & Heavy Cargo",
      icon: Truck,
      desc: "Expert handling of oversized, complex, and high-value cargo with complete customs coordination.",
    },
    {
      title: "Retail & Distribution Companies",
      icon: Boxes,
      desc: "Smooth clearance for bulk shipments, ensuring timely replenishment and uninterrupted supply chain.",
    },
  ];

  return (
    <div className="w-full py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          WHO WE SERVE
        </p>

        <h2 className="text-3xl md:text-4xl font-new lg:text-4xl font-bold text-gray-900 leading-tight">
          Supporting Every Segment of Global Trade
        </h2>

        <p className="text-gray-600 max-w-3xl mt-4 mb-12 text-base md:text-lg">
          From SMEs to large enterprises, we deliver seamless and compliant
          customs clearance support across industries—ensuring faster cargo
          movement and hassle-free global trade.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-[#7e0001] transition-all duration-300 cursor-pointer transform hover:-translate-y-1 flex flex-col"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-100 group-hover:bg-[#7e0001]  transition duration-300">
                  <IconComponent className="w-7 h-7 text-yellow-500" />
                </div>

                <h3 className="text-lg font-new font-semibold text-gray-800 group-hover:text-black transition mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <div className="w-0 group-hover:w-full h-1 bg-[#7e0001] mt-4 rounded-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

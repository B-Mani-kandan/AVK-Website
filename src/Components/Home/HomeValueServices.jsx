import {
  FileCheck,
  Warehouse,
  PackageCheck,
  HeartHandshake,
} from "lucide-react";

const HomeValueServices = () => {
  return (
    <section className="py-20 px-6 md:px-16 mt-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <h4 className="font-bold text-sm tracking-wide font-serif">
            04. Value Added Services
          </h4>
        </div>
        <h2 className="text-3xl md:text-3xl font-bold font-serif leading-snug mb-12">
          Enhancing Logistics With Value-Added Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            data-aos="fade-right"
            className="bg-gray-100 p-6 rounded-xl hover:bg-[#04558c] transition-all duration-300 group"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 bg-gray-100 mb-5">
              <FileCheck className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-lg font-bold mb-2 style-font text-gray-900 group-hover:text-white">
              Customs Clearance & Documentation
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-white text-justify">
              We manage all customs procedures, permits, and compliance
              documentation to ensure smooth cross-border trade. Our team
              reduces delays and streamlines international shipments with
              expertise in global regulations.
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="bg-gray-100 p-6 rounded-xl hover:bg-[#04558c] transition-all duration-300 group"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 bg-gray-100 mb-5">
              <Warehouse className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-lg font-bold mb-2 style-font text-gray-900 group-hover:text-white">
              Warehousing & Inventory Management
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-white text-justify">
              Our modern warehouses provide secure storage, real-time inventory
              tracking, and flexible space solutions. We help optimize your
              supply chain while reducing storage and distribution costs.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="bg-gray-100 p-6 rounded-xl md:row-span-2 hover:bg-[#04558c] transition-all duration-300 group"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 bg-gray-100 mb-5">
              <PackageCheck className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-lg font-bold mb-2 style-font text-gray-900 group-hover:text-white">
              Packaging & Labeling Solutions
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-white text-justify mb-6">
              We provide specialized packaging and labeling to protect your
              cargo during transport and meet international standards. From
              fragile goods to oversized cargo, we ensure safe handling and
              compliance.
            </p>
            <p className="text-sm text-gray-600 group-hover:text-white text-justify">
              Custom labels and barcoding also improve traceability,
              transparency, and brand visibility across the supply chain.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="bg-gray-100 p-6 rounded-xl md:col-span-2 hover:bg-[#04558c] transition-all duration-300 group"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 bg-gray-100 mb-5">
              <HeartHandshake className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-lg font-bold mb-2 style-font text-gray-900 group-hover:text-white">
              Insurance & Risk Management
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-white text-justify">
              Protect your cargo against unforeseen risks with comprehensive
              insurance coverage. We provide tailored policies that minimize
              financial exposure and ensure peace of mind throughout the
              shipping process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeValueServices;

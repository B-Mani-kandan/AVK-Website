import { Package, Warehouse, Truck, ClipboardList } from "lucide-react";

const offerings = [
  {
    icon: <Warehouse className="w-8 h-8" />,
    title: "Modern, Secure Warehousing",
    points: [
      "Fully equipped, temperature-controlled, and bonded warehouses",
      "24/7 CCTV surveillance, access control & security monitoring",
      "Fire safety compliance and insurance coverage",
    ],
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Inventory Management",
    points: [
      "Real-time stock visibility",
      "Barcode/RFID-enabled tracking",
      "Order picking, packing & consolidation",
      "FIFO, LIFO, FEFO inventory systems as per your requirement",
    ],
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Distribution & Last-Mile Delivery",
    points: [
      "Timely distribution across domestic and global networks",
      "Route-optimized last-mile solutions",
      "Complete order fulfillment & delivery tracking",
    ],
  },
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: "Value-Added Services",
    points: [
      "Palletizing & de-palletizing",
      "Kitting & labelling",
      "Repacking & bundling",
      "Reverse logistics support",
    ],
  },
];

export default function WareHouseOffer() {
  return (
    <section className="bg-white py-16 sm:py-20 px-6 lg:px-20 max-w-7xl mx-auto">
      <div className=" mb-12">
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          What We Offer
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-new font-bold text-gray-900 mt-2">
          Comprehensive Logistics & Warehouse Solutions
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {offerings.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
          >
            <div className="text-[#7c0204] mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold font-new mb-8 text-gray-900">
              {item.title}
            </h3>

            <ul className="space-y-3 text-gray-700 text-sm">
              {item.points.map((point, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-[#7c0204]">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

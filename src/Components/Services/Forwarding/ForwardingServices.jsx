import { Plane, Ship, Truck, FileCheck, Boxes, ArrowRight } from "lucide-react";

export default function ForwardingServices() {
  const services = [
    {
      title: "Air Freight Forwarding",
      icon: Plane,
      desc: "Fast, secure, and reliable solutions for time-critical cargo.",
      points: [
        "Express, Priority & Standard Air Freight",
        "Airport-to-Airport / Door-to-Door",
        "Consolidation & Charter Services",
      ],
      color: "bg-blue-50",
    },
    {
      title: "Sea Freight Forwarding",
      icon: Ship,
      desc: "Cost-effective and flexible shipping options for global trade.",
      points: [
        "FCL (Full Container Load)",
        "LCL (Less Container Load)",
        "Break Bulk & Project Cargo",
        "Cross-trade shipments",
      ],
      color: "bg-teal-50",
    },
    {
      title: "Road & Land Freight",
      icon: Truck,
      desc: "Seamless domestic and cross-border transport services.",
      points: [
        "Full Truck Load (FTL)",
        "Less Truck Load (LTL)",
        "Multimodal Connections",
      ],
      color: "bg-orange-50",
    },
    {
      title: "Customs Documentation & Compliance",
      icon: FileCheck,
      desc: "Accurate documentation and regulatory compliance support.",
      points: [
        "Import/Export Documentation",
        "Duty/Tax Assessment",
        "Customs Clearance",
        "HS Code & Compliance Guidance",
      ],
      color: "bg-yellow-50",
    },
    {
      title: "End-to-End Logistics Coordination",
      icon: Boxes,
      desc: "Complete cargo movement support from pickup to delivery.",
      points: [
        "Route Optimization",
        "Cargo Handling & Packaging",
        "Warehousing & Distribution",
        "Last-mile Delivery",
      ],
      color: "bg-purple-50",
    },
  ];

  return (
    <section className="w-full bg-white lg:px-20 max-w-7xl mx-auto px-6 py-16 md:px-20">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          FORWARDING SERVICES
        </p>
        <h2 className="text-3xl md:text-4xlm font-new font-bold text-gray-900 mb-4">
          Forwarding Services We Offer
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Comprehensive logistics and freight forwarding solutions tailored for
          global businesses. From air to sea, road transport to compliance, we
          manage your cargo with precision.
        </p>

        {/* Grid Layout */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition group ${service.color}`}
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow group-hover:scale-105 transition">
                  <Icon className="w-7 h-7 text-gray-800" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>

                {/* Bullet Points */}
                <ul className="text-gray-700 text-sm space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-gray-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

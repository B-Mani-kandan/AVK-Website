import { Truck, Package, Ship, ClipboardCheck, Warehouse } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "International Freight Forwarding (Air & Sea)",
    desc: "Fast, secure, and cost-efficient air & sea freight services across major global routes.",
    icon: Ship,
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    id: 2,
    title: "Customs Clearance",
    desc: "Complete documentation, compliance handling, and smooth regulatory clearance.",
    icon: ClipboardCheck,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    id: 3,
    title: "Project Cargo & Special Handling",
    desc: "Expertise in transporting oversized, heavy, and technically complex cargo.",
    icon: Package,
    bg: "bg-red-100",
    color: "text-red-600",
  },
  {
    id: 4,
    title: "Warehousing & Distribution",
    desc: "Secure storage, inventory management, and efficient last-mile distribution.",
    icon: Warehouse,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    id: 5,
    title: "Transportation Services",
    desc: "Reliable domestic trucking and multimodal transport solutions.",
    icon: Truck,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
];

export default function AboutWhatWeDo() {
  return (
    <section className="w-full bg-white max-w-7xl mx-auto px-6 py-16 md:px-20 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 inline-block mb-3">
            What We Do
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-new font-bold text-gray-900 leading-tight">
            Smart, Reliable & Complete
            <span className="text-[#7c0204] "> Logistics Solutions</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl">
            We offer a complete suite of global logistics services to move your
            cargo safely, quickly, and efficiently—no matter the size or
            destination.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div
                className={`w-12 h-12 rounded-full ${service.bg} flex items-center justify-center mb-4`}
              >
                <service.icon className={service.color} />
              </div>

              <h3 className="text-xl font-semibold font-new mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

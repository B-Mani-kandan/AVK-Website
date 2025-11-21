import { Package, Send, Calendar } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Import",
    description:
      "Efficient handling of global imports with simplified processes, reliable schedules, and cost savings every shipment.",
    icon: Package,
    bg: "bg-red-100",
    color: "text-red-500",
  },
  {
    id: 2,
    title: "Export",
    description:
      "Seamless export management with transparent documentation, trusted carriers, and optimized routes for your cargo.",
    icon: Send,
    bg: "bg-orange-100",
    color: "text-orange-500",
  },
  {
    id: 3,
    title: "Weekly Sailings",
    description:
      "Regular weekly departures ensuring predictable timelines, consistent availability, and dependable delivery worldwide.",
    icon: Calendar,
    bg: "bg-blue-100",
    color: "text-blue-500",
  },
];

export default function SeaFreightServices() {
  return (
    <div className="bg-white max-w-7xl mx-auto px-6 py-16 md:px-20 md:mt-10 md:mb-10">
      <div className="mb-4">
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          OUR SEA SERVICES
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-gray-900 leading-tight">
            Solution for your <br /> business need
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-gray-500 md:max-w-md">
          We make logistic shipping much easier and straightforward. Combining
          good service and technology make everything efficient.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className=" p-6 rounded-2xl  transition">
              <div
                data-aos="fade-right"
                className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${service.bg}`}
              >
                <Icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h3
                data-aos="fade-up"
                className="text-lg font-semibold font-serif text-gray-900"
              >
                {service.title}
              </h3>
              <p data-aos="fade-up" className="text-sm text-gray-600 mt-2">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

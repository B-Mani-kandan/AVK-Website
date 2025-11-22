import { CheckCircle } from "lucide-react";

export default function CustomsHandling() {
  const services = [
    "Import Customs Filing",
    "Export Documentation",
    "HS Code Classification",
    "Duty & Tax Assessment",
    "Bill of Entry / Shipping Bill Filing",
    "Customs Liaison & Inspection Assistance",
    "Port, ICD, and Airport Clearance",
    "Duty Drawback & Bond/License Management",
  ];

  return (
    <div className="w-full bg-white py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-left">
        <p className="text-sm text-gray-500 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          CUSTOMS CLEARANCE SERVICES
        </p>
        <h2 className="text-3xl md:text-4xl font-new lg:text-5xl font-bold text-gray-900 mb-10 leading-tight">
          We Handle Every Step <br /> of Your Customs Process
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white"
            >
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <p className="text-gray-800 font-medium leading-relaxed">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

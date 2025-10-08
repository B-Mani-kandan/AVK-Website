import {
  FaHandshake,
  FaShippingFast,
  FaWarehouse,
  FaBalanceScale,
} from "react-icons/fa";

const services = [
  {
    title: "Customer Ownership",
    description:
      "We take full responsibility for every client’s success, treating their goals and achievements as our own journey.",
    icon: <FaHandshake className="text-[#16a3e6] text-2xl" />,
  },
  {
    title: "Speed & Reliability",
    description:
      "From port to final destination, we ensure dependable and timely operations with quick turnaround and reliable delivery.",
    icon: <FaShippingFast className="text-[#16a3e6] text-2xl" />,
  },
  {
    title: "Single-Window Logistics",
    description:
      "We provide integrated solutions that combine freight, warehousing, and customs services seamlessly under one comprehensive system.",
    icon: <FaWarehouse className="text-[#16a3e6] text-2xl" />,
  },
  {
    title: "Integrity & Respect",
    description:
      "We uphold strong ethical standards, fostering fairness, dignity, and mutual respect in every business relationship we build.",
    icon: <FaBalanceScale className="text-[#16a3e6] text-2xl" />,
  },
];

export default function AboutCoreValues() {
  return (
    <section className=" bg-white mt-10  px-6 py-16 md:px-20">
      <div className="max-w-7xl mx-auto ml-5 mb-12">
        <h4 className="font-bold text-sm font-serif tracking-wide mb-2">
          04. Core Values
        </h4>
        <h2 className="text-4xl font-serif font-bold">Our Core Values</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-start p-6 ">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold font-serif mb-2 style-font">
              {service.title}
            </h3>
            <p data-aos="fade-up" className="text-gray-600 mb-4">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

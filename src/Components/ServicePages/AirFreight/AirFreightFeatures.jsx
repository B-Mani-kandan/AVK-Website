import {
  FaShippingFast,
  FaGlobe,
  FaDollarSign,
  FaEye,
  FaBoxes,
  FaHeadset,
} from "react-icons/fa";
import Container from "../../../assets/AirFreight/Container_3.webp";

const featuresLeft = [
  {
    icon: <FaShippingFast className="text-sky-400 text-2xl" />,
    title: "Fast Delivery Times",
    desc: "We ensure your shipments reach their destination quickly and efficiently, minimizing delays and downtime.",
  },
  {
    icon: <FaGlobe className="text-sky-400 text-2xl" />,
    title: "Global Network ",
    desc: "Our extensive network of partners and hubs enables worldwide shipping and logistics support.",
  },
  {
    icon: <FaDollarSign className="text-sky-400 text-2xl" />,
    title: "Competitive Rates",
    desc: "Benefit from cost-effective air freight solutions without compromising on speed or service quality.",
  },
];

const featuresRight = [
  {
    icon: <FaEye className="text-sky-400 text-2xl" />,
    title: "Real-time Tracking",
    desc: "Track your cargo in real-time with our advanced tracking system for complete transparency.",
  },
  {
    icon: <FaBoxes className="text-sky-400 text-2xl" />,
    title: "Expert Cargo Handling",
    desc: "Our trained staff handle sensitive and specialized cargo with the utmost care and expertise.",
  },
  {
    icon: <FaHeadset className="text-sky-400 text-2xl" />,
    title: "24/7 Customer Support",
    desc: "Our support team is available around the clock to assist with any queries or issues.",
  },
];

const AirFreightFeatures = () => {
  return (
    <section className="relative bg-[#04558c] text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <h4 className="font-bold text-sm tracking-wide !text-white mb-14 font-serif">
          02. Why Choose Us
        </h4>
        <div className="flex flex-col lg:flex-row items-center justify-center -space-x-8 md:-space-x-16 lg:-space-x-24">
          <div className="w-full lg:w-1/3 flex flex-col bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
            {featuresLeft.map((item, idx) => (
              <div
                key={idx}
                className="p-10 border-b border-white/10 last:border-b-0"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold font-serif">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-auto flex-shrink-0 z-10 relative">
            <img
              src={Container}
              alt="container"
              className="w-[400px] md:w-[500px] lg:w-[600px] object-contain mx-auto"
            />
          </div>

          <div className="w-full lg:w-1/3 flex flex-col bg-white/5 backdrop-blur-md border border-white/10 shadow-xl z-20">
            {featuresRight.map((item, idx) => (
              <div
                key={idx}
                className="p-10 border-b border-white/10 last:border-b-0"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold font-serif">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirFreightFeatures;

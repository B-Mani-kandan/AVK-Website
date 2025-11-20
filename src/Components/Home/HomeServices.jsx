import HeavyLifting from "../../assets/HeavyLift.webp";
import ShipImage from "../../assets/SeaFreight.webp";
import AirImage from "../../assets/AirFreight.webp";
import DynamicButton from "../Buttons/DynamicButton";
const services = [
  {
    id: "01",
    title: "OCEAN FREIGHT",
    image: ShipImage,
    ParaghTitle:
      "LCL Consolidation at the center of our comprehensive services",
    ParaghSub: "Worldwide Shipping",
    Paragh:
      "We specialize in reliable ocean freight forwarding, ensuring your goods reach international destinations securely, on schedule, and cost-effectively.",
    link: "/Ocean-Freight-Services",
  },
  {
    id: "02",
    title: "AIR FREIGHT",
    image: AirImage,
    ParaghTitle:
      "Fast And Reliable Air Freight Solutions For Urgent And Time-Sensitive Cargo.",
    ParaghSub: "Express Transport",
    Paragh:
      "Our air freight services prioritize speed and precision, offering express solutions with global coverage to keep your supply chain efficient.",
    link: "/Air-Freight-Services",
  },
  {
    id: "03",
    title: "PROJECT & HEAVY LIFT CARGO",
    image: HeavyLifting,
    ParaghTitle:
      "Specialized Transport For Heavy, Oversized, And Project Cargo With Precision Handling.",
    ParaghSub: "Special Handling",
    Paragh:
      "From industrial equipment to infrastructure materials, our team ensures secure transport with custom planning, safety protocols, and expert execution.",
    link: "/Heavy-Lift-Cargo",
  },
];

const HomeServices = () => {
  return (
    <div className=" px-6 md:px-20 py-16 mt-15 bg-[#052138] ">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-200 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          SERVICES
        </p>
        <h2 className="text-2xl md:text-4xl text-white font-serif font-bold mt-4 mb-10  leading-snug font-new">
          Comprehensive Logistics Across Ocean, Air & Specialized Services
        </h2>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-12 last:border-b-0"
            >
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold font-serif text-white font-new">
                  {service.title}
                </h3>
                <img
                  data-aos="zoom-in-left"
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div data-aos="fade-up" className="space-y-6">
                <h4 className="font-bold font-serif text-white text-xl leading-loose min-h-[60px] font-new">
                  {service.ParaghTitle}
                </h4>
                <div>
                  <span className="block font-serif font-bold text-gray-200 text-sm min-h-[20px]">
                    {service.ParaghSub}
                  </span>
                  <p className="mt-2 text-gray-400 max-w-lg min-h-[80px]">
                    {service.Paragh}
                  </p>
                </div>
                <DynamicButton text={"Learn More"} to={service.link} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;

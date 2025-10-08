import HeavyLifting from "../../assets/Common/HeavyLift.webp";
import ShipImage from "../../assets/Common/SeaFreight.webp";
import AirImage from "../../assets/Common/AirFreight.webp";
import DynamicButton from "../Buttons/DynamicButton";

const services = [
  {
    id: "01",
    title: "OCEAN FREIGHT",
    image: ShipImage,
    ParaghTitle:
      "Global Ocean Freight Solutions For Large And Small Shipments With Flexibility And Safety.",
    ParaghSub: "Worldwide Shipping",
    Paragh:
      "We specialize in reliable ocean freight forwarding, ensuring your goods reach international destinations securely, on schedule, and cost-effectively.",
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
  },
];

const HomeServices = () => {
  return (
    <div className=" px-6 md:px-16 py-16 mt-15">
      <div className="max-w-7xl mx-auto">
        <h4 className="font-bold text-sm tracking-wide font-serif ">
          03. Our Services
        </h4>
        <h2 className="text-2xl md:text-4xl font-serif font-bold mt-4 mb-10  leading-snug text-black">
          Comprehensive Logistics Solutions Across Ocean, Air And Specialized
          Services.
        </h2>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-gray-300 pb-12"
            >
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold font-serif">
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
                <h4 className="font-bold font-serif text-lg leading-loose min-h-[60px]">
                  {service.ParaghTitle}
                </h4>
                <div>
                  <span className="block font-serif font-bold  text-sm min-h-[20px]">
                    {service.ParaghSub}
                  </span>
                  <p className="mt-2 text-gray-400 max-w-lg min-h-[80px]">
                    {service.Paragh}
                  </p>
                </div>
                <DynamicButton text={"Learn More"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;

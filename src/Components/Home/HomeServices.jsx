import HeavyLifting from "../../assets/HeavyLift.webp";
import ShipImage from "../../assets/SeaFreight.webp";
import AirImage from "../../assets/AirFreight.webp";
import DynamicButton from "../Buttons/DynamicButton";
import Customs from "../../assets/Customs.webp";
import Forwarding from "../../assets/Forwarding.webp";
import Warehouse from "../../assets/Warehousing.webp";

const services = [
  {
    id: "01",
    title: "OCEAN FREIGHT",
    image: ShipImage,
    ParaghTitle:
      "Reliable Global Sea Freight Solutions Tailored for All Cargo Types.",
    ParaghSub: "Worldwide Sea Transport",
    Paragh:
      "We provide efficient and cost-effective ocean freight services with dependable schedules, professional handling, and complete visibility from port to port or door to door.",
    link: "/Ocean-Freight-Services",
  },
  {
    id: "02",
    title: "AIR FREIGHT",
    image: AirImage,
    ParaghTitle:
      "Fast, Secure & Priority Air Freight for Time-Critical Shipments.",
    ParaghSub: "Express Air Cargo",
    Paragh:
      "Our air freight services ensure speed, reliability, and precision for urgent shipments. We offer global coverage, competitive transit times, and seamless customs coordination.",
    link: "/Air-Freight-Services",
  },
  {
    id: "03",
    title: "PROJECT & HEAVY LIFT CARGO",
    image: HeavyLifting,
    ParaghTitle:
      "Specialized Handling for Oversized, Heavy, and Complex Project Cargo.",
    ParaghSub: "Engineering-Based Cargo Planning",
    Paragh:
      "From industrial machinery to infrastructure components, our experts deliver safe, customized heavy-lift solutions with route surveys, lifting strategies, and on-site supervision.",
    link: "/Heavy-Lift-Cargo",
  },
  {
    id: "04",
    title: "WAREHOUSING & DISTRIBUTION",
    image: Warehouse,
    ParaghTitle:
      "Secure, Scalable Storage Solutions for Streamlined Supply Chain Control.",
    ParaghSub: "Safe Storage & Inventory Handling",
    Paragh:
      "We offer modern warehousing facilities with efficient inventory management, bonded storage, packaging, labeling, and last-mile distribution to optimize your logistics flow.",
    link: "/Warehousing-Services",
  },
  {
    id: "05",
    title: "FREIGHT FORWARDING",
    image: Forwarding,
    ParaghTitle:
      "End-to-End Freight Forwarding with Complete Coordination & Visibility.",
    ParaghSub: "Global Forwarding Network",
    Paragh:
      "Our forwarding solutions cover transportation planning, carrier negotiation, documentation, and multimodal movement—ensuring smooth and timely delivery worldwide.",
    link: "/Freight-Forwarding-Services",
  },
  {
    id: "06",
    title: "CUSTOMS CLEARANCE",
    image: Customs,
    ParaghTitle:
      "Hassle-Free Customs Clearance with Expert Documentation Support.",
    ParaghSub: "Compliance & Clearance",
    Paragh:
      "Our experienced customs team ensures quick processing, accurate filing, HS code classification, duty guidance, and regulatory compliance to prevent delays at ports and airports.",
    link: "/Custom-Clearance",
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

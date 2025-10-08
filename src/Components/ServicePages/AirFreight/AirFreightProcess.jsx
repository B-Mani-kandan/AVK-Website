"use client";
import { StickyScroll } from "../../ui/sticky-scroll";
import {
  FaBox,
  FaTruckPickup,
  FaPlaneDeparture,
  FaFileInvoice,
  FaTruck,
} from "react-icons/fa";
import AirTrans from "../../../assets/AirFreight/AirTrans.webp";
import PackagePickup from "../../../assets/AirFreight/PackagePick.webp";
import Delivery from "../../../assets/SeaFreight/Delivery_3.webp";
import CustomsClear from "../../../assets/AirFreight/CustomsClear.webp";
const content = [
  {
    title: "Request a Quote",
    description:
      "Submit your shipment details and receive a quick, transparent quote tailored to your logistics needs. Our specialists analyze the weight, volume, and destination to provide the most efficient and cost-effective air freight solution. You’ll get instant clarity on pricing and transit times, ensuring full control over your shipping plan.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#06b6d4,#10b981)] text-white">
        <FaBox size={80} />
      </div>
    ),
    icon: <FaBox className="text-cyan-400 text-3xl mb-4" />,
  },
  {
    title: "Package Pickup & Handling",
    description:
      "Once you confirm, our team collects your shipment directly from your warehouse or office. We ensure secure handling, international-standard packaging, and precise labeling. Fragile or perishable goods are handled with extra care, minimizing risks during transit. Our professionals take responsibility for preparing your cargo for safe air travel.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <img
          src={PackagePickup}
          alt="Package Pickup"
          className="h-full w-full object-cover"
        />
      </div>
    ),
    icon: <FaTruckPickup className="text-pink-500 text-3xl mb-4" />,
  },
  {
    title: "Air Transport",
    description:
      "Your cargo is transported with trusted airline partners, ensuring speed and security. We monitor your shipment in real time and keep you updated at every stage. Whether it’s express or standard air freight, we guarantee timely departures and arrivals. With strong global airline networks, your goods are always on the fastest, safest route.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <img
          src={AirTrans}
          alt="Air Transport"
          className="h-full w-full object-cover"
        />
      </div>
    ),
    icon: <FaPlaneDeparture className="text-indigo-500 text-3xl mb-4" />,
  },
  {
    title: "Customs Clearance",
    description:
      "We take care of all customs formalities so you don’t have to. From preparing export documents to managing duties and taxes, our experts ensure smooth clearance at both origin and destination airports. This eliminates delays, avoids penalties, and guarantees full compliance with international trade regulations. We make complex customs simple.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <img
          src={CustomsClear}
          alt="Customs Clearance"
          className="h-full w-full object-cover"
        />
      </div>
    ),
    icon: <FaFileInvoice className="text-orange-400 text-3xl mb-4" />,
  },
  {
    title: "Final Delivery",
    description:
      "After customs clearance, we handle the last-mile delivery to your chosen destination. Whether it’s a business address, warehouse, or doorstep delivery, our team ensures your cargo arrives on schedule and in perfect condition. This completes the supply chain with efficiency, giving you peace of mind from pickup to final drop-off.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <img
          src={Delivery}
          alt="Final Delivery"
          className="h-full w-full object-cover"
        />
      </div>
    ),
    icon: <FaTruck className="text-green-500 text-3xl mb-4" />,
  },
];

export function AirFreightProcess() {
  return (
    <>
      <h4 className="font-bold text-sm tracking-wide  px-6 md:px-12 md:mt-15 font-serif">
        04. How It Works / Process
      </h4>
      <div className="w-full py-4">
        <StickyScroll
          content={content.map(({ icon, title, description, content }) => ({
            title: (
              <div className="flex flex-col items-start">
                {icon}
                <span>{title}</span>
              </div>
            ),
            description,
            content,
          }))}
        />
      </div>
    </>
  );
}

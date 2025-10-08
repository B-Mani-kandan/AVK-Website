import { Timeline } from "../../ui/timeline";
import CargoPick_1 from "../../../assets/SeaFreight/CargoPick_1.webp";
import CargoPick_2 from "../../../assets/SeaFreight/CargoPick_2.webp";
import Warehouse_1 from "../../../assets/SeaFreight/Warehouse_2.webp";
import Warehouse_2 from "../../../assets/SeaFreight/Warehouse_3.webp";
import Warehouse_3 from "../../../assets/SeaFreight/Warehouse_4.webp";
import CustClear_1 from "../../../assets/SeaFreight/CustClear_1.webp";
import CustClear_2 from "../../../assets/SeaFreight/CustClear_2.webp";
import ContLoad_1 from "../../../assets/SeaFreight/ContLoad_2.webp";
import ContLoad_2 from "../../../assets/SeaFreight/ContLoad_3.webp";
import ContLoad_3 from "../../../assets/SeaFreight/ContLoad_4.webp";
import oceanTrans_1 from "../../../assets/SeaFreight/oceanTrans_1.webp";
import oceanTrans_2 from "../../../assets/SeaFreight/oceanTrans_2.webp";
import Delivery_1 from "../../../assets/SeaFreight/Delivery_1.webp";
import Delivery_2 from "../../../assets/SeaFreight/Delivery_2.webp";
import Delivery_3 from "../../../assets/SeaFreight/Delivery_3.webp";
import Delivery_4 from "../../../assets/SeaFreight/Delivery_4.webp";

const steps = [
  {
    title: "Cargo Pickup",
    paragraphs: [
      "Our sea freight process begins with efficient cargo pickup from your suppliers or warehouse. We ensure timely collection, proper handling, and secure transport to our main consolidation points.",
      "Each pickup is coordinated by trained personnel who follow strict safety protocols, ensuring your goods start their journey safely.",
    ],
    images: [`${CargoPick_1}`, `${CargoPick_2}`],
  },
  {
    title: "Warehousing",
    paragraphs: [
      "After pickup, shipments are moved to our secure warehouses for temporary storage and consolidation. Our facilities are equipped to handle diverse cargo types with proper monitoring and inventory management.",
      "Goods are organized, inspected, and prepared for the next stage of the shipping process, ensuring minimal delays and maximum efficiency.",
    ],
    images: [`${Warehouse_1}`, `${Warehouse_2}`, `${Warehouse_3}`],
  },
  {
    title: "Customs Clearance",
    paragraphs: [
      "Our expert team handles customs documentation and clearance to ensure shipments comply with international regulations. We minimize delays and prevent potential issues at ports of departure and arrival.",
      "By coordinating with customs authorities, we ensure that your cargo moves smoothly across borders, reducing lead times and avoiding fines.",
    ],
    images: [`${CustClear_1}`, `${CustClear_2}`],
  },
  {
    title: "Container Loading",
    paragraphs: [
      "Once cleared, goods are carefully loaded into containers. We follow strict loading standards to optimize space and secure cargo during long ocean voyages.",
      "Each container is inspected, sealed, and tracked to maintain the integrity and security of your shipment from origin to destination.",
    ],
    images: [`${ContLoad_1}`, `${ContLoad_2}`, `${ContLoad_3}`],
  },
  {
    title: "Ocean Transport",
    paragraphs: [
      "Containers are then shipped across the ocean via our trusted carriers. We monitor transit conditions and provide real-time tracking for peace of mind.",
      "Our global network ensures flexible routes, timely deliveries, and secure handling of your cargo across international waters.",
    ],
    images: [`${oceanTrans_1}`, `${oceanTrans_2}`],
  },
  {
    title: "Last-Mile Delivery",
    paragraphs: [
      "The final step involves delivering cargo to its destination with utmost care. Our last-mile delivery services are efficient, reliable, and tailored to meet specific client requirements.",
      "Our local partners ensure on-time delivery, handling any challenges that arise, so your goods reach their final destination safely.",
    ],
    images: [
      `${Delivery_1}`,
      `${Delivery_2}`,
      `${Delivery_3}`,
      `${Delivery_4}`,
    ],
  },
];

function SeaFreightTimeline() {
  const data = steps.map(({ title, paragraphs, images }) => ({
    title,
    content: (
      <div>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6 text-justify"
          >
            {p}
          </p>
        ))}
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${title} ${i + 1}`}
              loading="lazy"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg bg-gray-200"
            />
          ))}
        </div>
      </div>
    ),
  }));

  return <Timeline data={data} />;
}

export default SeaFreightTimeline;

"use client";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
import { Link } from "react-router-dom";
import CordedStrap from "../../../assets/Products/CordedStrap.webp";
import WovenStarp from "../../../assets/Products/WovenStrap.webp";
import AirBag from "../../../assets/Products/Bags.webp";
import Polythene from "../../../assets/Products/Polythene.webp";
import DryAbsorb from "../../../assets/Products/DryAbsorb.webp";
import Net from "../../../assets/Products/Net.webp";
import Palatte from "../../../assets/Products/Palatte.webp";
import SleeveBox from "../../../assets/Products/SleeveBox.webp";
import CorruguatedBox from "../../../assets/Products/SleeveBox.webp";
import StrapTools from "../../../assets/Products/StrapTools.webp";
import PackingFilm from "../../../assets/Products/PackingFilm.webp";

const products = [
  {
    title: "POLYESTER CORDED STRAP",
    desc: "High-strength, lightweight corded straps designed for safe cargo securing.",
    image: CordedStrap,
    link: "/products/polyester-corded-strap",
  },
  {
    title: "POLYESTER NARROW WOVEN STRAP",
    desc: "Durable woven polyester straps suitable for heavy-duty load fastening.",
    image: WovenStarp,
    link: "/products/woven-polyester-strap",
  },
  {
    title: "AAR CERTIFIED DUNNAGE AIR BAG",
    desc: "Premium air bags designed to protect cargo from impact and movement.",
    image: AirBag,
    link: "/products/additional",
  },
  {
    title: "LOW DENSITY POLYETHYLENE FILM",
    desc: "Flexible LDPE films ideal for packing, wrapping, and moisture resistance.",
    image: Polythene,
    link: "/products/additional",
  },
  {
    title: "MOISTURE ABSORPTION DESICCANT",
    desc: "High-performance desiccants preventing moisture damage during transit.",
    image: DryAbsorb,
    link: "/products/additional",
  },
  {
    title: "CARGO BAR & NET",
    desc: "Strong cargo bars and nets to keep goods stable during transportation.",
    image: Net,
    link: "/products/additional",
  },
  {
    title: "PALLET (PLASTIC / WOOD)",
    desc: "Durable, reusable pallets suitable for heavy-weight industrial use.",
    image: Palatte,
    link: "/products/additional",
  },
  {
    title: "PLASTIC SLEEVE BOX (PSB)",
    desc: "Lightweight and durable plastic sleeve boxes for safe material handling.",
    image: SleeveBox,
    link: "/products/additional",
  },
  {
    title: "PP CORRUGATED BOX",
    desc: "Strong and reusable PP corrugated packaging for industrial shipments.",
    image: CorruguatedBox,
    link: "/products/additional",
  },
  {
    title: "PACKING STRAP & TOOLS",
    desc: "Complete range of strapping tools and accessories for easy packaging.",
    image: StrapTools,
    link: "/products/additional",
  },
  {
    title: "PACKING FILM",
    desc: "Protective packing films designed for stretch, wrap, and pallet stability.",
    image: PackingFilm,
    link: "/products/additional",
  },
];

export default function ProductsCard() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:px-20  md:py-16 space-y-12 productcard">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {products.map((item, index) => (
          <CardContainer key={index} className="h-full py-6 md:py-8">
            <CardBody
              className="
            bg-gray-200 
            border border-gray-300
            rounded-xl p-4 md:p-6 
            flex flex-col 
            justify-between 
            w-full
            h-auto md:h-full
          "
            >
              <div>
                <CardItem
                  translateZ={50}
                  className="text-base md:text-sm font-bold font-new text-black"
                >
                  {item.title}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ={60}
                  className="text-gray-600 text-xs md:text-sm mt-2 leading-relaxed"
                >
                  {item.desc}
                </CardItem>

                <CardItem translateZ={100} className="w-full mt-4">
                  <img
                    src={item.image}
                    className="h-40 md:h-48 w-full object-cover rounded-lg"
                  />
                </CardItem>
              </div>

              {/* <div className="flex justify-end mt-6">
                <CardItem
                  translateZ={20}
                  as={Link}
                  to={item.link}
                  className="px-3 md:px-4 py-2 rounded-lg bg-black text-white text-xs hover:bg-gray-800"
                >
                  View More →
                </CardItem>
              </div> */}
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}

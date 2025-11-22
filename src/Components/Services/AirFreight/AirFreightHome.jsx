import Air1 from "../../../assets/AirFreight/Aero.webp";
import Air2 from "../../../assets/AirFreight/Aero.webp";
import { Link } from "react-scroll";
export default function AirFreightHome() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 md:mt-25 mt-15 px-6 py-16 md:px-20 md:mb-20 ">
      <div className="flex-1 text-left">
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          AIR FREIGHT SERVICES
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Fast & Reliable Air Freight Services
        </h1>
        <p className="text-gray-600 mb-6">
          From urgent shipments to high-value goods, we provide tailored air
          cargo solutions with seamless handling, real-time tracking, and
          end-to-end reliability. Experience the fastest route to global
          delivery with our premium Air Freight services.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            to="productcard"
            smooth={true}
            offset={-100}
            duration={2000}
            href="#Discover"
            className="border bg-[#ffd21c] font-bold border-[#ffd21c] font-new text-black px-5 py-2 rounded hover:bg-[#fcd34d] hover:text-black transition"
          >
            Discover More
          </Link>
        </div>
      </div>
      <div className="flex-1 relative w-full flex justify-center items-center hide-on-mobile">
        <div className="absolute w-[450px] h-[450px] rounded-t-full  bg-gradient-to-tr from-[#1d0f3b] to-[#052138] opacity-80 z-0"></div>
        <img
          src={Air1}
          alt="Large Truck"
          className="relative z-10 w-full max-w-lg"
        />
      </div>
    </div>
  );
}

import Air from "../../assets/AirFreight/Aero.webp";
import Container from "../../assets/HangContiner.webp";
import ContShip from "../../assets/SeaFreight/HomeShip.webp";
import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-[#0e0e0f] text-white px-6 md:px-16 lg:px-24 py-20 md:mt-5 flex flex-col lg:flex-row items-center justify-between">
      <div className="max-w-lg space-y-6">
        <p className="text-sm text-gray-500 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          ABOUT US
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-new font-bold leading-tight">
          Delivering Global Logistics
          <br /> With Precision & Trust
        </h1>

        <p className="text-gray-300 leading-relaxed">
          We specialize in providing seamless logistics solutions across air,
          sea, and land. With a commitment to reliability and innovation, we
          ensure your cargo moves efficiently and safely to any destination
          worldwide.
        </p>

        <div className="mt-4">
          <Link
            to="ForwardingIntro"
            smooth={true}
            offset={-100}
            duration={2000}
            href="#About"
            className="
                      px-6 sm:px-8 
                      py-2 sm:py-3 
                      bg-white/30 
                      backdrop-blur-md 
                      border border-black/40 
                      rounded-md
                      text-white 
                      text-xs sm:text-sm 
                      hover:bg-white 
                      hover:text-black
                      transition
                    "
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="mt-16 lg:mt-0 grid grid-cols-2 gap-5 lg:gap-8">
        <div className="flex flex-col gap-5">
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-xl ">
            <img src={ContShip} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-b-full overflow-hidden shadow-xl bg-blue-400">
            <img
              src={Container}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-36 h-72 sm:w-48 sm:h-96 rounded-t-full rounded-b-full overflow-hidden shadow-xl bg-purple-400">
            <img src={Air} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

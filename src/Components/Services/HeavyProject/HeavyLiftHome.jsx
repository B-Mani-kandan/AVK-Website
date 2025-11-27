import Forwarding from "../../../assets/HeavyLift/HeavyFaq.webp";
import { Link } from "react-scroll";

export default function HeavyLiftHome() {
  return (
    <div
      className="
        w-full 
        min-h-[500px] 
        md:min-h-screen
        bg-no-repeat 
        bg-cover 
        bg-center 
        relative 
        flex 
        items-center
      "
      style={{ backgroundImage: `url(${Forwarding})` }}
    >
      <div className="absolute inset-0 bg-black/80 md:bg-black/50 backdrop-blur-xs"></div>
      <div
        className="
          relative z-20 
          px-4 
          sm:px-6 
          md:px-16 
          max-w-xl 
          py-10 
          md:py-0
        "
      >
        <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-3 font-medium">
          HEAVY LIFT CARGO
        </p>

        <h1
          className="
            text-2xl 
            sm:text-2xl 
            md:text-3xl 
            lg:text-5xl 
            font-bold 
            font-new
            text-white 
            leading-tight
          "
        >
          Heavy-Lift Support for Big Shipments
        </h1>

        <p className="text-gray-300 text-sm sm:text-base mt-4 sm:mt-6 max-w-md">
          We handle oversized and project cargo with safe, efficient, and
          industry-leading heavy-lifting solutions.
        </p>

        <div className="flex gap-3 sm:gap-4 mt-5 sm:mt-8">
          <Link
            to="HeavyIntro"
            smooth={true}
            offset={-100}
            duration={2000}
            className="
              px-6 sm:px-8 
              py-2 sm:py-3 
              bg-white/20 
              backdrop-blur-md 
              border border-white/30 
              rounded-md
              text-white 
              text-xs sm:text-sm 
              hover:bg-white/40 
              transition
            "
          >
            Get HeavyLift Support
          </Link>
        </div>
      </div>
    </div>
  );
}

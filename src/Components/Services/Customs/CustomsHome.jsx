import Containers from "../../../assets/Containers.webp";
import { Link } from "react-scroll";

export default function CustomsHome() {
  return (
    <section
      className="
        relative 
        w-full 
        min-h-[420px] 
        sm:min-h-[480px]
        md:min-h-[600px]
        lg:min-h-screen
        bg-cover 
        bg-center 
        flex 
        items-center
      "
      style={{ backgroundImage: `url(${Containers})` }}
    >
      <div
        className="
          relative z-10
          px-4 
          sm:px-6 
          md:px-16 
          max-w-xl
          md:text-left
        "
      >
        <p className="text-xs sm:text-sm text-gray-800 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-3 font-medium inline-block">
          CUSTOMS CLEARANCE
        </p>
        <h1
          className="
            text-2xl 
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl 
            font-semibold 
            text-black 
            leading-tight
            font-new
          "
        >
          Fast & Hassle-Free <br className="hidden sm:block" />
          Customs Clearance
        </h1>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-md mx-auto md:mx-0">
          We ensure smooth customs processing with accurate documentation,
          compliance support, and end-to-end clearance solutions for all cargo
          types.
        </p>
        <div className="flex md:justify-start gap-3 sm:gap-4 mt-5 sm:mt-8">
          <Link
            to="CustomsIntro"
            smooth={true}
            offset={-100}
            duration={800}
            className="
              px-6 sm:px-8 
              py-2 sm:py-3 
              bg-black/80 
              backdrop-blur-md 
              border border-black/40 
              rounded-md
              text-white 
              text-xs sm:text-sm 
              hover:bg-black 
              transition
            "
          >
            Get Clearance Support
          </Link>
        </div>
      </div>
    </section>
  );
}

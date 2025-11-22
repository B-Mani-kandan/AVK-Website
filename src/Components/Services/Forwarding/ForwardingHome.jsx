import Forwarding from "../../../assets/ForwardingHome.webp";
import { Link } from "react-scroll";
export default function ForwardingHome() {
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
        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-3 font-medium">
          FORWARDING
        </p>

        <h1
          className="
            text-2xl 
            sm:text-2xl 
            md:text-3xl 
            lg:text-4xl 
            font-semibold 
            text-white 
            leading-tight
            font-new
        "
        >
          Reliable & Global Freight Forwarding Solutions
        </h1>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-md">
          We provide seamless freight forwarding services across air, sea, and
          land, ensuring fast delivery, transparent handling, and complete
          end-to-end logistics coordination for cargo of all sizes.
        </p>

        <div className="flex gap-3 sm:gap-4 mt-5 sm:mt-8">
          <Link
            to="ForwardingIntro"
            smooth={true}
            offset={-100}
            duration={2000}
            href="#Forward"
            className="
              px-6 sm:px-8 
              py-2 sm:py-3 
              bg-white/30 
              backdrop-blur-md 
              border border-black/40 
              rounded-md
              text-white 
              text-xs sm:text-sm 
              hover:bg-black 
              transition
            "
          >
            Get Forwarding Support
          </Link>
        </div>
      </div>
    </div>
  );
}

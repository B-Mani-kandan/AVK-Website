import Containers from "../../../assets/Containers.webp";

export default function CustomsHome() {
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
      style={{ backgroundImage: `url(${Containers})` }}
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
        <p className="text-xs sm:text-sm text-gray-800 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-3 font-medium">
          CUSTOMS CLEARANCE
        </p>

        <h1
          className="
            text-3xl 
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl 
            font-semibold 
            text-black 
            leading-tight
            font-new
        "
        >
          Fast & Hassle-Free Customs Clearance
        </h1>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-md">
          We ensure smooth customs processing with accurate documentation,
          compliance support, and end-to-end clearance solutions for all cargo
          types.
        </p>

        <div className="flex gap-3 sm:gap-4 mt-5 sm:mt-8">
          <button
            className="
              px-6 sm:px-8 
              py-2 sm:py-3 
              bg-black/80 
              backdrop-blur-md 
              border border-black/40 
              rounded-full 
              text-white 
              text-xs sm:text-sm 
              hover:bg-black 
              transition
            "
          >
            Get Clearance Support
          </button>
        </div>
      </div>
    </div>
  );
}

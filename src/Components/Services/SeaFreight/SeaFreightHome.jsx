import bgShip from "../../../assets/SeaFreight/HomeShip.webp";

export default function SeaFreightHome() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden flex items-end"
      style={{
        backgroundImage: `url(${bgShip})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bottom-6 left-4 sm:left-10 md:left-16 z-20 max-w-xl sm:max-w-2xl px-2 ">
        <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-3 font-medium">
          OCEAN FREIGHT
        </p>

        <h1 className="text-3xl sm:text-4xl font-new md:text-5xl lg:text-6xl font-light text-white leading-tight">
          Moving Business
        </h1>

        <h1 className="text-3xl sm:text-4xl font-new md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          BEYOND BORDERS
        </h1>

        <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs sm:text-sm hover:bg-white/20 transition">
            Get Started
          </button>
        </div>
      </div>
      <div className="absolute bottom-6 right-4 sm:right-10 md:right-14 z-20 max-w-xs sm:max-w-sm md:max-w-md text-right hidden sm:block">
        <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
          Trusted global logistics partner for seamless export and import
          operations. Reliable, Compliant, <br />
          and on time — every time.
        </p>
      </div>
    </section>
  );
}

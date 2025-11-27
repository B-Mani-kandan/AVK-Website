const WareHouseInro = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-16 md:px-20 mb-15 FTWZIntro mt-10">
      <div>
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          Warehousing Introduction
        </p>
        <h2 className="text-5xl font-bold leading-snug text-black font-new">
          Smart, Secure & <br />
          Scalable Storage <br />
          Solutions
        </h2>
      </div>

      <div className="space-y-10">
        <div className="pt-8">
          <p className="text-gray-600 text-xl text-justify">
            Our warehousing solutions are designed to offer secure, flexible,
            and efficient storage options for businesses of all sizes. With
            modern infrastructure and 24/7 monitoring, we ensure complete safety
            and accessibility for your cargo at all times.
          </p>
        </div>

        <div>
          <p className="text-gray-600 text-xl text-justify">
            Whether you require short-term storage, long-term inventory
            management, or specialized handling, our facilities are equipped
            with advanced racking systems, climate-controlled areas, and
            seamless digital tracking for real-time visibility of your goods.
          </p>
        </div>

        <div>
          <p className="text-gray-600 text-xl text-justify">
            We also offer value-added services including packaging, labeling,
            palletization, consolidation, and dispatch management—ensuring your
            supply chain remains smooth, cost-effective, and fully optimized
            from warehouse to final delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WareHouseInro;

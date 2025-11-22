const AirFreightIntro = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-16 md:px-20 mb-15 AirIntro">
      <div>
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          Air Freight Introduction
        </p>
        <h2 className="text-5xl font-bold leading-snug text-black font-new">
          Fast, Reliable & <br />
          Global Air Cargo <br />
          Solutions
        </h2>
      </div>

      <div className="space-y-10">
        <div className="pt-8">
          <p className="text-gray-600 text-xl text-justify">
            Air freight is the ideal solution for time-critical, high-value, and
            fast-moving cargo. At Professional Freight Logistics, we provide
            reliable and efficient air transportation services designed to meet
            the rapidly changing demands of global supply chains. Our strong
            network across major international airports ensures swift
            connections and priority handling for all shipments.
          </p>
        </div>

        <div>
          <p className="text-gray-600 text-xl text-justify">
            From express deliveries to consolidated air shipments, we offer
            flexible options tailored to your deadlines and budget. Our team
            manages every step—cargo booking, documentation, customs clearance,
            security checks, and real-time tracking—ensuring a smooth and
            transparent shipping experience.
          </p>
        </div>

        <div>
          <p className="text-gray-600 text-xl text-justify">
            Whether you’re moving perishables, electronics, pharmaceuticals,
            machinery parts, or urgent replacement goods, our air freight
            expertise ensures speed, precision, and total reliability. We
            deliver your cargo safely and on time, wherever in the world it
            needs to be.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AirFreightIntro;

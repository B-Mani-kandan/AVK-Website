const AboutIntro = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-16 md:px-20 md:mt-15 ForwardingIntro">
      <div>
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          About AVK Trans Global
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold leading-snug text-black font-new">
          Who We Are <br />
          Your Trusted <br />
          Logistics Partner
        </h2>
      </div>
      <div className="space-y-8 md:space-y-10">
        <div>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed text-justify">
            We are a global logistics partner offering end-to-end freight
            forwarding, customs clearance, warehousing, and transportation
            services. Our mission is to simplify the supply chain for businesses
            of all sizes through precise planning, expert execution, and
            personalized support.
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed text-justify">
            With modern technology, real-time cargo visibility, and a dedicated
            team of logistics experts, we ensure your shipments are handled with
            efficiency, safety, and transparency. From international trade to
            domestic distribution, AVK Trans Global delivers reliability at
            every step of the journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;

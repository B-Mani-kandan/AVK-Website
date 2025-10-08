import seaFreight from "../../../assets/SeaFreight.jpg"; // replace with actual image

const SeaFreightSolution = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="relative bg-gray-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Ocean Freight Services{" "}
          <span className="text-red-500">Reimagined</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          LCL Consolidation is at the very core of our expertise — offering
          efficiency, reliability, and unmatched global connectivity.
        </p>
        <button className="bg-red-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition">
          Get a Quote
        </button>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 md:px-16 py-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Why LCL is Our Core</h2>
          <p className="text-gray-600 leading-relaxed">
            Unlike standard freight forwarders who treat LCL as an add-on, we
            have built our reputation and global recognition on mastering the
            complexities and nuances of LCL shipping. With strategic hubs in
            major port cities, we optimize every shipment.
          </p>
        </div>
        <img
          src={seaFreight}
          alt="Sea Freight"
          className="rounded-lg shadow-lg"
        />
      </section>
      <section className="bg-gray-50 py-16 px-8 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our LCL Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            {
              title: "Import LCL",
              desc: "Timely delivery from global origins.",
            },
            { title: "Export LCL", desc: "Connect your goods worldwide." },
            {
              title: "Weekly Sailings",
              desc: "Consistency on key trade lanes.",
            },
            {
              title: "Competitive Rates",
              desc: "Strong carrier relationships.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-red-600">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customization */}
      <section className="py-16 px-8 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Customized for Every Shipment
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          From tailored handling for automotive components, electronics, or
          retail merchandise to industry-specific consolidation strategies, we
          adapt to your unique requirements.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Automotive</h3>
            <p className="text-sm text-gray-600">
              Precision handling solutions
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Electronics</h3>
            <p className="text-sm text-gray-600">Safe & efficient transport</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Retail</h3>
            <p className="text-sm text-gray-600">
              Optimized consolidation strategies
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-gray-100 py-16 px-8 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          End-to-End Process
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Cargo Pickup",
            "Warehousing",
            "Customs Clearance",
            "Container Loading",
            "Ocean Transport",
            "Deconsolidation",
            "Last-Mile Delivery",
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-4 px-6 rounded-full shadow text-sm font-medium"
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* Tracking & Support */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 md:px-16 py-16 items-center">
        <img src={seaFreight} alt="Tracking" className="rounded-lg shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Real-Time Tracking & Support
          </h2>
          <p className="text-gray-600 mb-6">
            With advanced tracking technology, clients have real-time visibility
            over their shipments at every stage, supported by proactive updates
            from our dedicated customer service teams.
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition">
            Track Shipment
          </button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 text-white text-center py-16 px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Optimize Your Freight?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-100">
          Partner with us to experience cost efficiency, speed, and reliability
          that set the benchmark in global LCL Consolidation.
        </p>
        <button className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default SeaFreightSolution;

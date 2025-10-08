export default function SeaFreightBentoGrid() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white md:mt-20 md:mb-20 p-10">
      <h4 className="font-bold text-sm  tracking-wide"></h4>
      <h4 className="font-bold text-sm tracking-wide font-serif">
        02. PERSONALIZED LOGISTICS
      </h4>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:mt-20 auto-rows-auto">
        <div className="col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-serif font-bold">
              Customized for Every Shipment
            </h1>
            <p className="mt-2 text-sm leading-relaxed md:pr-15 text-justify">
              From tailored handling for automotive components, electronics, or
              retail merchandise to industry-specific consolidation strategies,
              we adapt to your unique requirements. We offer end-to-end
              visibility, scalable solutions, and compliance-driven processes to
              ensure your cargo moves seamlessly across borders.
            </p>
            <p className="mt-3 text-sm leading-relaxed md:pr-15 text-justify">
              Our expertise lies in aligning logistics with your industry
              standards—whether it’s precision, speed, or cost optimization—so
              every shipment is delivered with maximum efficiency and
              reliability.
            </p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-2xl shadow-lg flex flex-col">
          <h1 className="text-2xl font-bold font-serif">Automotive</h1>
          <h2 className="mt-2 font-semibold font-serif text-gray-700">
            Precision Handling Solutions
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We provide specialized logistics and supply chain services tailored
            for the automotive industry. From the safe transport of delicate
            components to just-in-time delivery of critical parts, our solutions
            ensure efficiency, reliability, and cost-effectiveness.
          </p>
        </div>
        <div className="col-span-1 bg-white p-6 rounded-2xl shadow-lg flex flex-col">
          <h1 className="text-2xl font-bold font-serif">Electronics</h1>
          <h2 className="mt-2 font-semibold font-serif text-gray-700">
            Safe & Efficient Transport
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We deliver specialized logistics solutions for the electronics
            industry, ensuring fragile and high-value goods are moved with the
            utmost care and efficiency.
          </p>
        </div>
        <div className="col-span-1 bg-white p-6 rounded-2xl shadow-lg flex flex-col">
          <h1 className="text-2xl font-bold font-serif">Retail</h1>
          <h2 className="mt-2 font-semibold font-serif text-gray-700">
            Optimized Consolidation
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We provide tailored logistics solutions for the retail sector,
            designed to optimize inventory flow, reduce costs, and enhance
            delivery performance.
          </p>
        </div>
      </div>
    </div>
  );
}

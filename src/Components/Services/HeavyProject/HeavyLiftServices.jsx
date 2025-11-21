export default function HeavyLiftServices() {
  const services = [
    {
      title: "Heavy Cargo Transportation",
      desc: "We transport oversized and heavy cargo safely and efficiently, ensuring timely delivery with full compliance.",
      icon: "🚛",
      highlight: false,
    },
    {
      title: "Crane Lifting Operations",
      desc: "High-capacity cranes and expert operators deliver safe and precise lifting for construction and industry projects.",
      icon: "🏗️",
      highlight: false,
    },
    {
      title: "Project Logistics",
      desc: "Complete logistics support from route planning to permits and execution for smooth heavy lift operations.",
      icon: "📦",
      highlight: false,
    },
    {
      title: "Engineering & Route Survey",
      desc: "We design safe lifting and transport strategies with detailed surveys and engineering studies.",
      icon: "🛣️",
      highlight: false,
    },
    {
      title: "Maintenance & Support",
      desc: "Ongoing inspection, repair, and proactive support to extend equipment life and minimize downtime.",
      icon: "🔧",
      highlight: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:px-20 ">
      <div className="mb-4">
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          OUR HEAVY LIFT SERVICES
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
        <div>
          <h2
            data-aos="fade-right"
            className="text-4xl font-bold font-new leading-snug"
          >
            Our Comprehensive <br />
            Heavy Lift Services
          </h2>
        </div>
        <div className="max-w-xl mt-6 lg:mt-0">
          <p data-aos="fade-up" className="text-gray-600 mb-2">
            From heavy cargo transport to on-site installation, our services
            cover every stage of your project with safety and efficiency.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative p-6 transition-all duration-300 transform hover:scale-105 ${
              service.highlight
                ? "bg-[#052138] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-[#052138] hover:text-white"
            } clip-corner`}
          >
            <div className="mb-6 mt-3 inline-block rounded text-3xl">
              {service.icon}
            </div>
            <h3 className="text-lg  font-semibold font-new leading-loose mb-3">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

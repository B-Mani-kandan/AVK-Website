// export default function HeavyLiftServices() {
//   const services = [
//     {
//       title: "INDUSTRIAL EQUIPMENT SUPPLY",
//       desc: "Lorem ipsum dolor sit a consectetur adipiscing elit ma commodo vita velit ac blandit sed sodales.",
//       icon: "🏭",
//       highlight: false,
//     },
//     {
//       title: "INSTALLATION & MAINTENANCE",
//       desc: "Lorem ipsum dolor sit a consectetur adipiscing elit ma commodo vita velit ac blandit sed sodales.",
//       icon: "⚙️",
//       highlight: false,
//     },
//     {
//       title: "ENGINEERING SOLUTION",
//       desc: "Lorem ipsum dolor sit a consectetur adipiscing elit ma commodo vita velit ac blandit sed sodales.",
//       icon: "📐",
//       highlight: false,
//     },
//     {
//       title: "TECHNICAL CONSULTATION",
//       desc: "Lorem ipsum dolor sit a consectetur adipiscing elit ma commodo vita velit ac blandit sed sodales.",
//       icon: "👷",
//       highlight: false,
//     },
//     {
//       title: "ON-SITE SUPPORT & REPAIRS",
//       desc: "Lorem ipsum dolor sit a consectetur adipiscing elit ma commodo vita velit ac blandit sed sodales.",
//       icon: "🔧",
//       highlight: false,
//     },
//     {
//       title: "UPGRADES & RETROFITTING",
//       desc: "Lorem ipsum dolor sit a consectetur adipiscing elit ma commodo vita velit ac blandit sed sodales.",
//       icon: "🚜",
//       highlight: true,
//     },
//   ];

//   return (
//     <section className="py-16 px-6 lg:px-20">
//       <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
//         <div>
//           <h2 className="text-4xl font-extrabold leading-snug">
//             OUR <span className="text-[#16a3e6]">COMPREHENSIVE</span> <br />
//             <span className="text-[#16a3e6]">MACHINERY</span> SERVICES
//           </h2>
//         </div>
//         <div className="max-w-xl mt-6 lg:mt-0">
//           <p className="text-gray-600 mb-2">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit ma commodo
//             vitae velit ac blandit sed sodales tellus in imperdiet hendrerit
//             ipsum lorem fringilla velit facilisis consequat.
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`relative p-6 ${
//               service.highlight ? "bg-yellow-500 text-black" : "bg-gray-100"
//             } clip-corner`}
//           >
//             <div className="mb-4 inline-block  p-3 rounded">
//               <span className="text-2xl">{service.icon}</span>
//             </div>
//             <h3 className="text-lg font-bold leading-loose mb-2">
//               {service.title}
//             </h3>
//             <p className="text-gray-700 mb-4">{service.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function HeavyLiftServices() {
  const services = [
    {
      title: "HEAVY CARGO TRANSPORTATION",
      desc: "We transport oversized and heavy cargo safely and efficiently, ensuring timely delivery with full compliance.",
      icon: "🚛",
      highlight: false,
    },
    {
      title: "CRANE & LIFTING OPERATIONS",
      desc: "High-capacity cranes and expert operators deliver safe and precise lifting for construction and industry projects.",
      icon: "🏗️",
      highlight: false,
    },
    {
      title: "PROJECT LOGISTICS",
      desc: "Complete logistics support from route planning to permits and execution for smooth heavy lift operations.",
      icon: "📦",
      highlight: false,
    },
    {
      title: "ENGINEERING & ROUTE SURVEY",
      desc: "We design safe lifting and transport strategies with detailed surveys and engineering studies.",
      icon: "🛣️",
      highlight: false,
    },
    {
      title: "ON-SITE INSTALLATION",
      desc: "Specialized teams assemble and install heavy equipment with precision and safety on client sites.",
      icon: "⚡",
      highlight: false,
    },
    {
      title: "MAINTENANCE & SUPPORT",
      desc: "Ongoing inspection, repair, and proactive support to extend equipment life and minimize downtime.",
      icon: "🔧",
      highlight: true,
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20">
      <div className="mb-4">
        <h4 className="font-bold text-sm tracking-wide font-serif">
          01. Our Services
        </h4>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
        <div>
          <h2 className="text-4xl font-extrabold  leading-snug">
            OUR <span className="text-[#16a3e6]">COMPREHENSIVE</span> <br />
            <span className="text-[#16a3e6]">HEAVY LIFT</span> SERVICES
          </h2>
        </div>
        <div className="max-w-xl mt-6 lg:mt-0">
          <p className="text-gray-600 mb-2">
            From heavy cargo transport to on-site installation, our services
            cover every stage of your project with safety and efficiency.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative p-6 transition-colors duration-300 ${
              service.highlight
                ? "bg-[#16a3e6] text-white"
                : "bg-gray-100 text-gray-800 hover:bg-[#16a3e6] hover:!text-white"
            } clip-corner`}
          >
            <div className="mb-6 mt-3 inline-block  rounded text-3xl">
              {service.icon}
            </div>
            <h3 className="text-lg font-bold leading-loose mb-3">
              {service.title}
            </h3>
            <p className="text-sm  leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

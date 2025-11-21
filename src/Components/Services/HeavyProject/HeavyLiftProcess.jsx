import HeavyImg from "../../../assets/HeavyLift/HeavyLiftCardImg.webp";

export default function HeavyLiftProcess() {
  const processes = [
    {
      title: <>Project Consultation</>,
      number: "01",
      desc: "We begin with a detailed consultation to understand cargo specifications, route challenges, and project timelines.",
      bg: "bg-[#16a3e6] text-white",
    },
    {
      title: <>Engineering & Planning</>,
      number: "02",
      desc: "Our team conducts route surveys, load studies, and develops customized lifting and transport strategies.",
      bg: "bg-[#16a3e6] text-white",
      clip: true,
    },
    {
      title: <>Transport & Installation</>,
      number: "03",
      desc: "We manage secure transportation and precise on-site installation using advanced equipment and expertise.",
      bg: "bg-[#16a3e6] text-white",
    },
    {
      title: <>Maintenance & Support</>,
      number: "04",
      desc: "Post-installation, we provide reliable maintenance, inspections, and 24/7 support to ensure smooth operations.",
      bg: "bg-black text-white",
      clip: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:px-20 ">
      <div className="mb-8">
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          PROJECT CARGO PROCESS
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">
        <div
          data-aos="fade-right"
          className="relative h-[510px] lg:col-span-2 flex items-end p-8 clip-both-corners"
          style={{
            backgroundImage: "url(" + HeavyImg + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-white">
            <h3 className="text-2xl font-bold  leading-snug mb-4 border-l-4 border-yellow-500 pl-4">
              DELIVERING SAFE AND RELIABLE HEAVY LIFT SOLUTIONS.
            </h3>
          </div>
        </div>
        <div className="lg:col-span-3 flex flex-col">
          <h2
            data-aos="fade-up"
            className="text-4xl font-new font-bold mb-8 leading-snug"
          >
            <span className="block text-[#7c0204]">
              Project &amp; Heavy Lift Cargo
            </span>
            Tailored Solutions for Oversized{" "}
            <span className="text-black">Shipments</span>
          </h2>

          <div className="grid grid-cols-2 gap-6 flex-grow">
            {processes.map((process, index) => (
              <div
                key={index}
                className={`relative transition-all duration-300 transform hover:scale-105 p-6 ${
                  process.bg
                }  ${process.clip ? "clip-corner" : ""}`}
              >
                <h3 className="font-bold font-new text-lg mb-4">
                  {process.title}
                </h3>
                <p className="text-sm">{process.desc}</p>
                <span
                  className={`absolute top-2 right-4 text-4xl font-extrabold ${
                    process.bg.includes("black")
                      ? "text-yellow-500"
                      : "text-black"
                  }`}
                >
                  {process.number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

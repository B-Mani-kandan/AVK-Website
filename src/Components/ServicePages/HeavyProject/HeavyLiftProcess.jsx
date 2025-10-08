import HeavyImg from "../../../assets/HeavyLift/HeavyLiftCardImg.webp";

export default function HeavyLiftProcess() {
  const processes = [
    {
      title: (
        <>
          PROJECT <br /> CONSULTATION
        </>
      ),
      number: "01",
      desc: "We begin with a detailed consultation to understand cargo specifications, route challenges, and project timelines.",
      bg: "bg-[#16a3e6] text-white",
    },
    {
      title: (
        <>
          ENGINEERING & <br /> PLANNING
        </>
      ),
      number: "02",
      desc: "Our team conducts route surveys, load studies, and develops customized lifting and transport strategies.",
      bg: "bg-[#16a3e6] text-white",
      clip: true,
    },
    {
      title: (
        <>
          TRANSPORT & <br /> INSTALLATION
        </>
      ),
      number: "03",
      desc: "We manage secure transportation and precise on-site installation using advanced equipment and expertise.",
      bg: "bg-[#16a3e6] text-white",
    },
    {
      title: (
        <>
          MAINTENANCE & <br /> SUPPORT
        </>
      ),
      number: "04",
      desc: "Post-installation, we provide reliable maintenance, inspections, and 24/7 support to ensure smooth operations.",
      bg: "bg-black text-white",
      clip: true,
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20">
      <div className="mb-4">
        <h4 className="font-bold text-sm tracking-wide font-serif">
          02. Our Process
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">
        <div
          className="relative h-[510px] lg:col-span-2 flex items-end p-8 clip-both-corners"
          style={{
            backgroundImage: "url(" + HeavyImg + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-white">
            <h3 className="text-2xl font-extrabold leading-snug mb-4 border-l-4 border-yellow-500 pl-4">
              DELIVERING SAFE AND RELIABLE HEAVY LIFT SOLUTIONS.
            </h3>
            <p className="text-sm mb-4 pl-4">
              From planning to execution, we ensure every lift is carried out
              with precision, safety, and efficiency.
            </p>
          </div>
        </div>
        <div className="lg:col-span-3 flex flex-col">
          <h2 className="text-4xl font-extrabold mb-8 leading-snug">
            OUR PROCESS FOR <span className="text-[#16a3e6]">SUCCESSFUL</span>{" "}
            HEAVY LIFT <span className="text-[#16a3e6]">PROJECTS.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
            {processes.map((process, index) => (
              <div
                key={index}
                className={`relative p-6 ${process.bg} ${
                  process.clip ? "clip-corner" : ""
                }`}
              >
                <h3 className="font-extrabold text-lg mb-4">{process.title}</h3>
                <p className="text-sm">{process.desc}</p>
                <span
                  className={`absolute top-2 right-4 text-4xl font-extrabold ${
                    process.bg.includes("black")
                      ? "text-orange-500"
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

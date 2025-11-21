import AirHome from "../../../assets/AirFreight/AirHome.webp";
const AirFreightHome = () => {
  return (
    <section className="relative bg-[#fff] text-black overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 mt-15">
        <div className="max-w-xl pr-5 space-y-6">
          {/* <h4
            data-aos="fade-right"
            className="font-bold text-sm tracking-wide font-serif"
          >
            01. Reliable Air Freight Services
          </h4> */}
          <h1
            data-aos="fade-right"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 font-serif leading-snug mb-6"
          >
            <span className="text-[#16a3e6]"> Speed and Reliability </span>
            Across Global Markets
          </h1>
          <p
            data-aos="fade-up"
            className="text-gray-700  text-justify leading-relaxed"
          >
            In today’s competitive business environment, speed can be the
            defining factor in securing market advantage. Our Air Freight
            services are designed to move goods quickly, safely, and reliably
            across global markets. We offer express air cargo solutions for
            urgent shipments, complete door-to-door services covering pickup,
            customs clearance, and final delivery, as well as specialized
            charter services for oversized or high-value cargo. Every shipment
            benefits from personalized service, ensuring attention to detail and
            compliance at every stage. Our partnerships with leading airlines
            allow us to offer competitive rates and priority space allocations,
            even in peak seasons.
          </p>
        </div>
        <div className="relative mt-10 md:mt-0 flex gap-4">
          <img
            src={AirHome}
            alt="airplane"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* <div className="bg-[#04558c] py-3 overflow-hidden relative">
        <div className="marquee whitespace-nowrap font-serif text-white font-medium">
          <span className="mx-6">OneLink Logistic Services</span>
          <span className="mx-6">➤</span>
          <span className="mx-6">OneLink Logistic Services</span>
          <span className="mx-6">➤</span>
          <span className="mx-6">OneLink Logistic Services</span>
          <span className="mx-6">➤</span>
          <span className="mx-6">OneLink Logistic Services</span>
          <span className="mx-6">➤</span>
          <span className="mx-6">OneLink Logistic Services</span>
        </div>
      </div> */}
    </section>
  );
};

export default AirFreightHome;

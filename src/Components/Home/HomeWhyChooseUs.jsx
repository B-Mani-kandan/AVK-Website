export default function WhyChoose() {
  const cards = [
    {
      title: "Global Expertise",
      desc: "With years of experience in freight forwarding and supply chain management, we ensure smooth and efficient operations worldwide.",
      bg: "bg-yellow-50",
      pin: "bg-yellow-400",
      icon: "✦",
      style: "md:top-6 md:left-6 md:rotate-6 md:w-74",
    },
    {
      title: "Customized Logistics",
      desc: "We design tailored logistics solutions—ocean, air, and multimodal—based on your business needs and cargo requirements.",
      bg: "bg-purple-50",
      pin: "bg-purple-500",
      icon: "⚡",
      style: "md:top-20 md:-right-6 md:-rotate-3 md:w-74",
    },
    {
      title: "Reliable Support",
      desc: "From documentation to customs clearance, our dedicated team provides end-to-end support for a hassle-free experience.",
      bg: "bg-pink-50",
      pin: "bg-pink-500",
      icon: "❤",
      style: "md:-bottom-30 md:left-2 md:-rotate-6 md:w-74",
    },
    {
      title: "On-Time Delivery",
      desc: "We prioritize timely delivery with optimized routing, advanced tracking, and strong global partner networks.",
      bg: "bg-blue-50",
      pin: "bg-blue-500",
      icon: "★",
      style: "md:-bottom-35 md:right-10 md:rotate-3 md:w-74",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:px-20 md:mb-40 bg-white">
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl font-serif font-bold ">
          Why <span className="text-[#7c0204] italic">Choose</span> AVK Trans
          Global ?
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Trusted by businesses for our dedicated service, timely delivery, and
          smooth logistics experience.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative px-4 md:px-6">
        <svg
          className="absolute inset-0 w-full h-full hidden md:block"
          viewBox="0 0 600 500"
          preserveAspectRatio="none"
        >
          <path
            d="M120 120 C 220 40, 380 40, 480 120"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeDasharray="6 8"
            strokeLinecap="round"
          />
          <path
            d="M500 170 C 400 230, 300 310, 180 380"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeDasharray="6 8"
            strokeLinecap="round"
          />
          <path
            d="M200 420 C 300 390, 380 390, 480 420"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeDasharray="6 8"
            strokeLinecap="round"
          />
        </svg>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:block md:h-[520px] relative">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`relative md:absolute ${card.style} transform ${card.bg}
    rounded-2xl shadow-xl p-6
    transition-transform duration-500 ease-out
    origin-top hover:-rotate-20 hover:-translate-y-2`}
            >
              <div
                className={`absolute -top-4 left-6 w-10 h-10 ${card.pin} rounded-full shadow-md`}
              />

              <div className="bg-white rounded-xl p-4 mt-6 shadow-sm">
                <div className="text-2xl mb-2">{card.icon}</div>
                <h3 className="font-semibold text-lg mb-3 font-new">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

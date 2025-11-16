import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Global Sourcing",
    desc: "Trusted worldwide supplier coordination with full compliance.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
    icon: "🌐",
  },
  {
    title: "Customs Clearance",
    desc: "Hassle-free documentation, regulations handling, and legal compliance.",
    img: "https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=800",
    icon: "📑",
  },
  {
    title: "Freight Forwarding",
    desc: "Global air, sea, and land freight with real-time tracking.",
    img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=800",
    icon: "🚚",
  },
  {
    title: "Door-to-Door Delivery",
    desc: "We deliver directly from international suppliers to your warehouse.",
    img: "https://images.unsplash.com/photo-1494412651409-8963e1a93a96?q=80&w=800",
    icon: "🏠",
  },
  {
    title: "Warehousing Solutions",
    desc: "Well-maintained, secure warehouses with inventory support.",
    img: "https://images.unsplash.com/photo-1581091870620-5b106f1a47e5?q=80&w=800",
    icon: "🏢",
  },
  {
    title: "Real-Time Tracking",
    desc: "Track your cargo anytime with GPS-enabled dashboard.",
    img: "https://images.unsplash.com/photo-1603354350317-87f2f5a26d74?q=80&w=800",
    icon: "📍",
  },
];

const Import = () => {
  return (
    <div
      className="min-h-screen w-full text-white bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504270997636-07ddfbd48945?q=80&w=1920')",
      }}
    >
      {/* Full-page overlay */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>

      {/* Page content */}
      <div className="relative z-10 px-6 md:px-20 py-16">

        {/* Hero Section */}
        <div className="h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold drop-shadow-xl text-red-400 tracking-wide"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Import Services
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-xl max-w-3xl text-gray-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AVK Logistics delivers seamless international import services—
            enabling businesses to move goods faster, safer, and smarter.
          </motion.p>

          {/* Small floating banners */}
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {["Fast Delivery", "Global Coverage", "Secure Logistics"].map(
              (text) => (
                <div
                  key={text}
                  className="bg-red-600/70 backdrop-blur-md px-4 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition"
                >
                  {text}
                </div>
              )
            )}
          </motion.div>
        </div>

        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-red-500 drop-shadow-lg mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Import Solutions
        </motion.h2>

        <motion.p
          className="mt-6 max-w-4xl mx-auto text-center text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          From customs compliance and freight forwarding to delivery at your
          doorstep—AVK Logistics handles the complete lifecycle of your
          international imports with precision and reliability.
        </motion.p>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl hover:scale-105 transition cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-4 text-2xl">
                <span>{service.icon}</span>
                <h3 className="text-2xl font-bold text-red-400">
                  {service.title}
                </h3>
              </div>
              <img
                className="rounded-xl mb-4 w-full h-40 object-cover"
                src={service.img}
                alt={service.title}
              />
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Import;

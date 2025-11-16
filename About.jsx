import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
   const navigate = useNavigate();

  const banners = [
    {
      title: "Who We Are",
      desc: "We are a team of passionate logistics experts dedicated to simplifying global trade. Whether it's freight forwarding, warehousing, or customs clearance, we handle each step with precision and care.",
      img: "https://images.unsplash.com/photo-1644352744450-a391b8ce158d?q=80&w=1170&auto=format&fit=crop",
    },
    {
      title: "Our Mission",
      desc: "To provide reliable, efficient, and innovative logistics solutions that empower businesses to grow globally.",
      img: "https://images.unsplash.com/photo-1586528116022-aeda1613c63d?q=80&w=1171&auto=format&fit=crop",
    },
    {
      title: "Our Vision",
      desc: "Redefining the future of logistics with technology-driven solutions and sustainable practices.",
      img: "https://plus.unsplash.com/premium_photo-1681487829842-2aeff98f8b63?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const companyBrands = [
    {
      name: "Rayzor Industrial Packaging Pvt Ltd",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm9I3C0rqjz8HyFLLOcZfg3zeqmcujWHnySA&s",
    },
    {
      name: "Bulwark Industrial Solutions",
      img: "https://image.isu.pub/230223115909-b0c497084adf0cd0e3544239a7b108b8/jpg/page_1_thumb_large.jpg",
    },
    {
      name: "Cordex Pack Pvt Ltd",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgxPNkAyPgvRfo8GyCgl67p598gV7Cwjmqg&s",
    },
  ];

  const products = [
    {
      name: "Woven Sack Bags",
      img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390617611/WB/TX/OF/2559181/pp-woven-bags-500x500.jpg",
      specs: [
        ["Material", "PP / HDPE"],
        ["Width", "30–90 cm"],
        ["Capacity", "5–50 kg"],
      ],
    },
    {
      name: "PP Box Straps",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgVGjmY2_trthhPijm1U0ePBSodLjH1DvIkw&s",
      specs: [
        ["Width", "9mm / 12mm / 15mm"],
        ["Strength", "High Tensile"],
        ["Usage", "Packaging & Cartons"],
      ],
    },
    {
      name: "Lashing Straps",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGeevAiV6dskh4MjhyvGP7vXlH_J_RIV4Mw&s",
      specs: [
        ["Material", "Polyester"],
        ["Strength", "3–8 Ton"],
        ["Application", "Cargo Securing"],
      ],
    },
  ];

  const displayedProducts = showAllProducts ? products : products.slice(0, 3);

  return (
    <motion.div
      className="relative min-h-screen text-grey-800 pt-24"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-black/20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606964212858-c215029db704?q=80&w=1170&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: -1,
        }}
      ></div>

      {/* Heading */}
      <div className="text-center px-6 mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-500 drop-shadow-lg">
          About Us
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90 drop-shadow-md">
          Discover how AVK Logistics moves possibilities, not just cargo
        </p>
      </div>

      {/* Main Overview */}
      <section className="text-center px-6 bg-black/25 backdrop-blur-sm py-10 rounded-2xl mx-4 md:mx-32 shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black-800 mb-4 tracking-wide">
          <span className="text-red-500">AVK Logistics</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-white leading-relaxed mt-2">
          We Make Global Trade Effortless. Founded with a vision to redefine logistics, AVK is a next-generation freight forwarding and supply chain partner offering end-to-end logistics solutions.
        </p>
      </section>

      {/* Horizontal Banners */}
      <section className="mt-10 px-8 md:px-20 flex flex-wrap justify-center gap-6 py-6">
        {banners.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-80 md:w-96 rounded-2xl shadow-lg bg-white/70 backdrop-blur-sm"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-bold text-red-600 mb-2">{item.title}</h3>
              <p className="text-black leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Our Company */}
      <section className="mt-20 px-8 md:px-20">
        <h2 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
          Our Company
        </h2>

        <motion.div
          className="flex flex-wrap justify-center gap-6 py-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, duration: 0.5 },
            },
          }}
        >
          {companyBrands.map((brand, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 w-56 hover:shadow-2xl cursor-pointer"
              variants={{
                hidden: { opacity: 0, scale: 0.5, y: 50 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              whileHover={{ scale: 1.08 }}
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="w-full h-28 object-contain mb-4"
              />
              <h4 className="text-center text-xl font-bold text-black">
                {brand.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ⭐ PRODUCT CATEGORIES & SPECIFICATIONS */}
      <section className="mt-25 px-6 md:px-50 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-10 drop-shadow-lg">
          Product Categories & Specifications
        </h2>

        <div className="grid md:grid-cols-3 gap-5 justify-items-center">
          {displayedProducts.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl cursor-pointer w-80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-bold text-black mb-3">{item.name}</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-black bg-white rounded-lg overflow-hidden border border-gray-200">
                  <tbody>
                    {item.specs.map((spec, i) => (
                      <tr key={i} className="border-b last:border-b-0">
                        <td className="font-semibold p-2 bg-gray-100">{spec[0]}</td>
                        <td className="p-2">{spec[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered View More Button */}
        {!showAllProducts && (
          <div className="flex justify-center mt-7">
            <div
              className="bg-red-500 text-white rounded-3xl shadow-lg p-4 flex items-center justify-center cursor-pointer w-80  hover:bg-red-600 transition"
              onClick={() =>  navigate("/Product")}
            >
              <h3 className="text-1xl font-bold">View More Products</h3>
            </div>
          </div>
        )}
      </section>

      {/* Core Values */}
      <section className="mt-24 px-6 md:px-20 text-center bg-white/25 backdrop-blur-sm rounded-2xl mx-4 md:mx-32 p-10 shadow-md">
        <h3 className="text-3xl font-bold text-white mb-10">Our Core Values</h3>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Integrity", desc: "We maintain honesty and fairness in every shipment we handle.", icon: "🌍" },
            { title: "Reliability", desc: "Your deadlines are our top priority — we deliver what we promise.", icon: "🚚" },
            { title: "Innovation", desc: "We adopt smart logistics solutions for faster, greener delivery.", icon: "⚙️" },
          ].map((value, i) => (
            <div
              key={i}
              className="bg-black rounded-2xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-bold text-red-600 mb-2">{value.title}</h4>
              <p className="text-white">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About;

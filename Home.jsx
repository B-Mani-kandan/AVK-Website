import React from "react";
import { motion } from "framer-motion";

// Import your images
import frontImage from "../assets/back.png";
import backImage from "../assets/front.png";

const Home = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1606964212858-c215029db704?q=80&w=1170&auto=format&fit=crop')",
      }}
    >
      {/* Hero Overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 z-10">
        
        {/* Back image floating behind heading */}
        <motion.img
          src={backImage}
          alt="Back Floating"
          className="absolute top-1/4 left-0 w-auto h-50 object-contain -z-10"
          style={{ filter: "brightness(1) contrast(1)" }}
          animate={{ x: ["-10%", "500%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 60, // slower float
            ease: "linear",
          }}
        />

        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-yellow-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)] z-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          AVK Logistics
        </motion.h1>

        {/* Front image floating in front of heading */}
        <motion.img
          src={frontImage}
          alt="Front Floating"
          className="absolute top-1/2 right-0 w-auto h-60 object-contain z-30"
          style={{ filter: "brightness(1) contrast(1)" }}
          animate={{ x: ["10%", "-300%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40, // faster than back
            ease: "linear",
          }}
        />

        <motion.p
          className="mt-4 text-lg md:text-xl text-white/90 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          “We don’t just move cargo — we move possibilities.”
        </motion.p>

        <motion.div
          className="mt-8 flex space-x-4 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Learn More
          </button>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-red-600 text-white text-center px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Grow Your Business Globally?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Partner with AVK Logistics for reliable, efficient, and innovative logistics solutions.
        </p>
        <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Home;

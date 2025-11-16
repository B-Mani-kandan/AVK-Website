import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center px-4 py-16 overflow-hidden"
      style={{
        background: "linear-gradient(to top right, #ff0000, #000000)",
      }}
    >
      {/* Background Floating Shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-30"
          style={{
            width: `${50 + i * 10}px`,
            height: `${50 + i * 10}px`,
            background: i % 2 === 0 ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 8 + i, ease: "easeInOut" }}
        />
      ))}

      {/* 3D Form Card */}
      <motion.div
        className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-md w-full z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 15, duration: 1 }}
        whileHover={{ rotateY: 8, rotateX: 4, scale: 1.03 }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-extrabold text-red-700 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Contact Us
        </motion.h2>

        <motion.form className="flex flex-col gap-4">
          {[
            { type: "text", placeholder: "Name" },
            { type: "email", placeholder: "Email" },
            { type: "textarea", placeholder: "Feedback" },
          ].map((field, i) =>
            field.type !== "textarea" ? (
              <motion.input
                key={i}
                type={field.type}
                placeholder={field.placeholder}
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-lg text-gray-800 font-semibold"
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 12px 20px rgba(0,0,0,0.25)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.2 }}
              />
            ) : (
              <motion.textarea
                key={i}
                placeholder={field.placeholder}
                rows="4"
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-lg text-gray-800 font-semibold resize-none"
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 12px 20px rgba(0,0,0,0.25)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.2 }}
              />
            )
          )}

          <motion.button
            type="submit"
            className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-xl mt-2 shadow-md relative overflow-hidden"
            whileTap={{ scale: 0.97, rotateX: -3 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Media Links */}
        <motion.div
          className="mt-6 flex justify-center space-x-6 text-red-700 text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-900 transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-900 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-900 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-900 transition duration-300"
          >
            <FaLinkedinIn />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;

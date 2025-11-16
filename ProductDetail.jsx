import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// SAME products array
const products = [
  {
    name: "Polyester Corded Strap",
    desc: "Technical Specification Chart: Includes width, roll weight, meters per box, gross weight, and breaking strength for models CPC-13 to CPC-34.",
    img: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/polyester-composite-cord-strap-20240612054244035.jpg",
    category: "Straps",
  },
  {
    name: "Polyester Narrow Woven Strap",
    desc: "Models CPW-13 to CPW-50H with width, meters per box, and system breaking strength.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKq3nlMnr39v0oFuGd0qFgrnayLhitruphjA&s",
    category: "Straps",
  },
  {
    name: "AAR Certified Dunnage Air Bag",
    desc: "Models DAB-912 to DAB-2121 with width, height, and void filling capacity.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmbxULvhyiW7_mlSuYeQoWO2MZcIuDxKcpQ&s",
    category: "Bags",
  },
  {
    name: "LDPE & VCI Products",
    desc: "VCI & LDPE pouches, bags, sheets, film rolls, pallet covers, and container liners. Max roll width: 3000 mm, Thickness: 50–200 microns.",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/1/381824923/FN/OX/JO/3823628/ldpe-vci-sheet.jpg",
    category: "Packaging Films",
  },
  {
    name: "Moisture Absorption Desiccant",
    desc: "Models CPCD-10GM to CPCD-1000GM showing absorption capacity using calcium chloride & clay beads.",
    img: "https://www.roycopackaging.com/cdn/shop/articles/silica-gel-bag-close.jpg?v=1702906702",
    category: "Cargo Accessories",
  },
  {
    name: "Cargo Bar & Net",
    desc: "Product category for cargo securing and protection.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoI9i4If0gJjun--29drUFtAvHdT8XUa4agA&s",
    category: "Cargo Accessories",
  },
  {
    name: "Pallet (Plastic / Wood)",
    desc: "Sizes: 1200×800, 1000×1200, 1100×1100, 1200×1200 mm. Types: Pine Wood, Rubber Wood, Plywood. As per ISPM-15 Standard.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZNnxl81IkhlJuSgvW2kv2NSSSxVGtREuHA&s",
    category: "Storage",
  },
  {
    name: "Plastic Sleeve Box (PSB)",
    desc: "Size: 1000×1200 mm / 1200×800 mm. Board size: 3–10 mm. GSM: 300–2000.",
    img: "https://img1.wsimg.com/isteam/ip/71751381-ed7b-41b9-9119-d12987f55115/Screenshot_2023-07-14_at_1.37.00_PM-removebg-p.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true",
    category: "Packaging",
  },
  {
    name: "PP Corrugated Box",
    desc: "Product category for packaging solutions.",
    img: "https://nilkamalmaterialhandling.com/cdn/shop/products/resized-box-pic2_-744x550_600x.jpg?v=1614768758",
    category: "Packaging",
  },
  {
    name: "Packing Strap & Tools",
    desc: "Product category for packing straps and related tools.",
    img: "https://m.media-amazon.com/images/I/41RPMQE1QUL._AC_UF1000,1000_QL80_.jpg",
    category: "Straps",
  },
  {
    name: "Packing Film",
    desc: "Product category for packing films.",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/1/379958048/AI/QT/RI/7809369/ldpe-manual-grade-stretch-film-roll.jpg",
    category: "Packaging Films",
  },
];

const ProductDetail = () => {
  const { productName } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (p) => p.name === decodeURIComponent(productName)
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Product not found.
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6 flex justify-center items-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1200')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white/90 max-w-4xl rounded-2xl p-6 shadow-2xl grid md:grid-cols-2 gap-6 backdrop-blur-md"
      >
        {/* Image */}
        <motion.img
          src={product.img}
          alt={product.name}
          className="w-full h-72 object-cover rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Info */}
        <div>

          {/* Wrap text + category so back button stays separate */}
          <div>
            <motion.h1
              className="text-3xl font-extrabold text-red-600 mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {product.name}
            </motion.h1>

            <motion.p
              className="text-gray-700 text-lg mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {product.desc}
            </motion.p>

            {/* Category Tag */}
            <motion.span
              className="inline-block px-4 py-2 bg-red-600 text-white rounded-full shadow-md text-sm font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Category: {product.category}
            </motion.span>
          </div>

          {/* Back Button — only this moves down now */}
          <motion.button
            onClick={() => navigate(-1)}
            className="mt-5 px-4 py-2 bg-black text-white rounded-lg shadow hover:bg-red-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back
          </motion.button>

        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetail;

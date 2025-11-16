import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "Polyester Corded Strap",
    img: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/polyester-composite-cord-strap-20240612054244035.jpg",
    category: "Straps",
  },
  {
    name: "Polyester Narrow Woven Strap",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKq3nlMnr39v0oFuGd0qFgrnayLhitruphjA&s",
    category: "Straps",
  },
  {
    name: "AAR Certified Dunnage Air Bag",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmbxULvhyiW7_mlSuYeQoWO2MZcIuDxKcpQ&s",
    category: "Bags",
  },
  {
    name: "LDPE & VCI Products",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/1/381824923/FN/OX/JO/3823628/ldpe-vci-sheet.jpg",
    category: "Packaging Films",
  },
  {
    name: "Moisture Absorption Desiccant",
    img: "https://www.roycopackaging.com/cdn/shop/articles/silica-gel-bag-close.jpg?v=1702906702",
    category: "Cargo Accessories",
  },
  {
    name: "Cargo Bar & Net",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoI9i4If0gJjun--29drUFtAvHdT8XUa4agA&s",
    category: "Cargo Accessories",
  },
  {
    name: "Pallet (Plastic / Wood)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZNnxl81IkhlJuSgvW2kv2NSSSxVGtREuHA&s",
    category: "Storage",
  },
  {
    name: "Plastic Sleeve Box (PSB)",
    img: "https://img1.wsimg.com/isteam/ip/71751381-ed7b-41b9-9119-d12987f55115/Screenshot_2023-07-14_at_1.37.00_PM-removebg-p.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true",
    category: "Packaging",
  },
  {
    name: "PP Corrugated Box",
    img: "https://nilkamalmaterialhandling.com/cdn/shop/products/resized-box-pic2_-744x550_600x.jpg?v=1614768758",
    category: "Packaging",
  },
  {
    name: "Packing Strap & Tools",
    img: "https://m.media-amazon.com/images/I/41RPMQE1QUL._AC_UF1000,1000_QL80_.jpg",
    category: "Straps",
  },
  {
    name: "Packing Film",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/1/379958048/AI/QT/RI/7809369/ldpe-manual-grade-stretch-film-roll.jpg",
    category: "Packaging Films",
  },
];

const Product = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    "All",
    "Straps",
    "Bags",
    "Packaging Films",
    "Packaging",
    "Cargo Accessories",
    "Storage",
  ];

  const filteredProducts = products.filter(
    (p) =>
      (p.name.toLowerCase().includes(search.toLowerCase()) ||
        (p.desc && p.desc.toLowerCase().includes(search.toLowerCase()))) &&
      (categoryFilter === "All" || p.category === categoryFilter)
  );

  const productCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed text-gray-900 px-6 md:px-20 py-10 relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1170&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">
        <motion.h1
          className="text-center text-3xl md:text-4xl font-extrabold text-red-600 mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          AVK PRODUCTS
        </motion.h1>

        {/* Search Bar */}
        <motion.div
          className="flex justify-center mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-md p-2 rounded border border-gray-300 bg-white text-gray-900 shadow-md text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </motion.div>

        {/* Show Categories Button */}
        <div className="flex justify-center mb-3">
          <button
            className="px-2 py-1 bg-red-600 text-white rounded shadow hover:bg-red-700 transition text-xs"
            onClick={() => setShowCategories(!showCategories)}
          >
            {showCategories ? "Hide Categories" : "Show Categories"}
          </button>
        </div>

        {/* Categories */}
        {showCategories && (
          <motion.div
            className="flex justify-center flex-wrap gap-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-2 py-1 rounded shadow text-xs ${
                  categoryFilter === cat
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-900"
                } hover:bg-red-500 hover:text-white transition`}
                onClick={() => setCategoryFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}

        {/* Product Grid */}
        <motion.main
          className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 gap-20"
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.name}
                className="relative bg-white/90 p-6 rounded shadow-lg cursor-pointer overflow-hidden aspect-square mt-6"
                variants={productCardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() =>
                  navigate(`/product/${encodeURIComponent(product.name)}`)
                }
              >
                <motion.img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md mb-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute bottom-1 left-1 right-1 bg-white p-1 rounded text-xl font-semibold text-gray-900 truncate">
                  {product.name}
                </div>

                {/* Overlay Click */}
                <motion.div
                  className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-sm font-semibold rounded-lg opacity-0 hover:opacity-100 transition"
                >
                  Click for more details
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.main>
      </div>
    </div>
  );
};

export default Product;

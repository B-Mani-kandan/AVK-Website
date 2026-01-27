// import TruckImage from "../../../assets/Products/ProductHome.webp";
// import SmallTruck from "../../../assets/Products/ProductHome.webp";
// import { Link } from "react-scroll";

// const ProductHome = () => {
//   return (
//     <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mt-12 px-6 py-16 md:px-20 ">
//       <div className="flex-1 text-left">
//         <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
//           Your Delivery Partner
//         </p>
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
//           Premier Global
//           <br />
//           Cargo
//           <span className="inline-block mx-2 align-middle">
//             <img
//               src={SmallTruck}
//               alt="Small Truck"
//               className="h-15 w-[230px] rounded-full border-2 border-orange-400 object-cover shadow-md"
//             />
//           </span>
//           <br />
//           Securing Solutions
//         </h1>
//         <p className="text-gray-600 mb-6">
//           We are dedicated to making the movement of goods safer and have
//           consistently delivered top-tier cargo securement products to global
//           markets. Our commitment to quality, paired with competitive pricing,
//           positions us as a trusted leader in the cargo securing industry.
//         </p>
//         <div className="flex gap-4 flex-wrap">
//           <Link
//             to="productcard"
//             smooth={true}
//             offset={-100}
//             duration={2000}
//             href="#Discover"
//             className="
//               px-6 sm:px-8
//               py-2 sm:py-3
//               bg-black/80
//               backdrop-blur-md
//               border border-black/40
//               rounded-md
//               text-white
//               text-xs sm:text-sm
//               hover:bg-black
//               transition
//             "
//           >
//             Discover More
//           </Link>
//         </div>
//       </div>
//       <div className="flex-1 relative w-full flex justify-center items-center hide-on-mobile">
//         <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-orange-2500 to-[#052138] opacity-80 z-0"></div>
//         <img
//           src={TruckImage}
//           alt="Large Truck"
//           className="relative z-10 w-full max-w-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default ProductHome;

import TruckImage from "../../../assets/Products/ProductHome.webp";
import SmallTruck from "../../../assets/Products/ProductHome.webp";
import { Link } from "react-scroll";

const ProductHome = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:mt-20 mt-10">
        <div className="flex-1  lg:text-left">
          <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium inline-block">
            Your Delivery Partner
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Premier Global
            <br />
            Cargo
            <span className="inline-block mx-2 align-middle">
              <img
                src={SmallTruck}
                alt="Small Truck"
                className="h-15 w-[230px] rounded-full border-2 border-orange-400 object-cover shadow-md"
              />
            </span>
            <br />
            Securing Solutions
          </h1>

          <p className="text-gray-600 mb-8 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            We are dedicated to making the movement of goods safer and have
            consistently delivered top-tier cargo securement products to global
            markets. Our commitment to quality, paired with competitive pricing,
            positions us as a trusted leader in the cargo securing industry.
          </p>

          <Link
            to="productcard"
            smooth={true}
            offset={-100}
            duration={800}
            className="
              inline-block
              px-8 py-3
              bg-black/80 
              backdrop-blur-md 
              border border-black/40 
              rounded-md
              text-white 
              text-sm 
              hover:bg-black 
              transition
            "
          >
            Discover More
          </Link>
        </div>
        <div className="flex-1 relative flex justify-center lg:justify-end">
          <div
            className="
            absolute 
            w-[280px] h-[280px] 
            sm:w-[350px] sm:h-[350px] 
            md:w-[420px] md:h-[420px] 
            rounded-full 
            bg-gradient-to-tr from-orange-400 to-[#052138] 
            opacity-80 
            z-0
          "
          ></div>

          <img
            src={TruckImage}
            alt="Large Truck"
            className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductHome;

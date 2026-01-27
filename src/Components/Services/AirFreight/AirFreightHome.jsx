// import Air from "../../../assets/AirFreight/Aero.webp";
// import { Link } from "react-scroll";
// export default function AirFreightHome() {
//   return (
//     <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 md:mt-25 mt-15 px-6 py-16 md:px-20 md:mb-20 ">
//       <div className="flex-1 text-left">
//         <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
//           AIR FREIGHT SERVICES
//         </p>
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
//           Fast & Reliable Air Freight Services
//         </h1>
//         <p className="text-gray-600 mb-6">
//           From urgent shipments to high-value goods, we provide tailored air
//           cargo solutions with seamless handling, real-time tracking, and
//           end-to-end reliability. Experience the fastest route to global
//           delivery with our premium Air Freight services.
//         </p>
//         <div className="flex gap-4 flex-wrap">
//           <Link
//             to="AirIntro"
//             smooth={true}
//             offset={-100}
//             duration={2000}
//             href="#AirFreight"
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
//         <div className="absolute w-[450px] h-[450px] rounded-t-full  bg-gradient-to-tr from-[#1d0f3b] to-[#052138] opacity-80 z-0"></div>
//         <img
//           src={Air}
//           alt="Large Truck"
//           className="relative z-10 w-full max-w-lg"
//         />
//       </div>
//     </div>
//   );
// }

import Air from "../../../assets/AirFreight/Aero.webp";
import { Link } from "react-scroll";

export default function AirFreightHome() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-16 md:py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 lg:text-left mt-10 md:mt-20">
          <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium inline-block">
            AIR FREIGHT SERVICES
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Fast & Reliable Air Freight Services
          </h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
            From urgent shipments to high-value goods, we provide tailored air
            cargo solutions with seamless handling, real-time tracking, and
            end-to-end reliability. Experience the fastest route to global
            delivery with our premium Air Freight services.
          </p>
          <div className="flex  lg:justify-start gap-4 flex-wrap">
            <Link
              to="AirIntro"
              smooth={true}
              offset={-100}
              duration={800}
              className="
                px-6 sm:px-8 
                py-2 sm:py-3 
                bg-black/80 
                backdrop-blur-md 
                border border-black/40 
                rounded-md
                text-white 
                text-xs sm:text-sm 
                hover:bg-black 
                transition
              "
            >
              Discover More
            </Link>
          </div>
        </div>
        <div className="flex-1 relative w-full flex justify-center items-center">
          <div
            className="
              absolute 
              w-[280px] h-[280px]
              sm:w-[350px] sm:h-[350px]
              md:w-[420px] md:h-[420px]
              lg:w-[450px] lg:h-[450px]
              rounded-t-full 
              bg-gradient-to-tr 
              from-[#1d0f3b] 
              to-[#052138] 
              opacity-80 
              z-0
            "
          ></div>

          <img
            src={Air}
            alt="Air Freight"
            className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}

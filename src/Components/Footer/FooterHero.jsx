import { Link } from "react-router-dom";
import Globe from "../Footer/Globe.jsx";

export default function FooterHero() {
  return (
    <section className="relative w-full text-white max-w-7xl mx-auto mt-10 px-4 sm:px-6 md:px-20">
      <div className="bg-[#0c0c0c] rounded-2xl md:rounded-3xl overflow-hidden relative z-20 shadow-xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 sm:px-8 lg:px-14 py-10 gap-10">
          <div className="flex-1 max-w-xl text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-new leading-tight mb-4">
              Reliable & Efficient <br />
              <span>Logistics Support</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8">
              Need assistance with shipping, tracking, warehousing, or freight
              solutions? Our logistics experts are ready to help you with fast
              and reliable support.
            </p>

            <Link
              to="/Contact-Us"
              className="px-6 py-3 bg-white text-black rounded-lg text-sm font-bold font-new hover:bg-gray-200 transition inline-block"
            >
              Get in Touch
            </Link>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div
              className="w-[200px] h-[200px] 
                         sm:w-[250px] sm:h-[250px] 
                         md:w-[300px] md:h-[300px] 
                         lg:w-[330px] lg:h-[330px]"
            >
              <Globe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

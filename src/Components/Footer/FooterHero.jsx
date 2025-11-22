import { Link } from "react-router-dom";
import Globe from "../Footer/Globe.jsx";

export default function FooterHero() {
  return (
    <section className="relative w-full text-white max-w-7xl mx-auto md:mt-10 md:px-20">
      <div className="max-w-7xl mx-auto bg-[#0c0c0c] rounded-3xl md:rounded-4xl overflow-hidden relative z-20 shadow-xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-8 lg:px-14 py-10">
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold font-new leading-tight mb-4">
              Reliable & Efficient <br />
              <span>Logistics Support</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8">
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
          <div className="flex-1 flex justify-end relative ">
            <div
              className="w-[220px] sm:w-[270px] md:w-[300px] lg:w-[330px] 
                            h-[220px] sm:h-[270px] md:h-[300px] lg:h-[330px]"
            >
              <Globe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

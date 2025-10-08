"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import ShipImage from "../../assets/Common/HomeShip.webp";
import DynamicButton from "../Buttons/DynamicButton";
import Globe from "./Globe";
const HomeHeroSection = () => {
  return (
    <div className="px-6 md:px-16 mt-20 md:mt-1">
      <div className="w-full bg-white flex flex-col lg:flex-row items-center justify-between  lg:py-15  max-w-7xl mx-auto relative">
        <div className="flex-1 space-y-6">
          <h1
            data-aos="fade-right"
            className="text-xl md:text-4xl font-extrabold leading-tight text-gray-900"
          >
            YOUR<span className="text-[#16a3e6]"> GLOBAL</span> PARTNER IN
            <span className="flex items-center gap-4">
              SEAMLESS<span className="text-[#16a3e6]"> CARGO SOLUTIONS</span>
            </span>
          </h1>
          <div>
            <h4 className="font-bold text-sm tracking-wide font-serif">
              01. Header
            </h4>
            <p className="text-gray-700 mt-2 max-w-lg">
              At our logistics agency we combine precision, innovation and years
              industry expertise to deliver solutions that go far beyond
              transportation. We specialize in building seamless, scalable
              logistics
            </p>
          </div>
          <DynamicButton text="Let’s Together" />
        </div>

        <div className="flex-1 flex flex-col items-center lg:items-end  lg:mt-0">
          <Globe />
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;

import React from "react";
import HomeHeroSection from "./HomeHeroSection";
import HomeAbout from "./HomeAbout";
import HomeServices from "./HomeServices";
import HomeValueServices from "./HomeValueServices";
import IndustriesWeServe from "./IndustriesWeServe";
import HomeGlobalNetwork from "./HomeGlobalNetwork";
import HomeCSR from "./HomeCSR";

const Home = () => {
  return (
    <div>
      <HomeHeroSection />
      <HomeAbout />
      <HomeServices />
      <HomeValueServices />
      <IndustriesWeServe />
      <HomeGlobalNetwork />
      <HomeCSR />
    </div>
  );
};

export default Home;

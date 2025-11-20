// import Testimonials from "../Testimonials/Testimonials";
import HomeAbout from "./HomeAbout";
import HomeAchivement from "./HomeAchivement";
import HomeHeroSection from "./HomeHeroSection";
import HomeServices from "./HomeServices";
import WhyChooseUs from "./HomeWhyChooseUs";
import HomeWorkingProcess from "./HomeWorkingProcess";

const Home = () => {
  return (
    <div>
      <HomeHeroSection />
      <HomeAbout />
      <WhyChooseUs />
      <HomeServices />
      <HomeWorkingProcess />
      <HomeAchivement />
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;

import AboutCEO from "./AboutCEO";
import AboutFAQ from "./AboutFAQ";
import AboutHeroHome from "./AboutHome";
import AboutIntro from "./AboutIntro";
import AboutVisionMission from "./AboutVisionMission";
import AboutWhatWeDo from "./AboutWhatWeDo";

export const AboutUs = () => {
  return (
    <div>
      <AboutHeroHome />
      <AboutIntro />
      <AboutWhatWeDo />
      <AboutVisionMission />
      <AboutFAQ />
      <AboutCEO />
    </div>
  );
};

import SeaFreightAbout from "./SeaFreightAbout";
import SeaFreightBentoGrid from "./SeaFreightBentoGrid";
import { SeaFreightContact } from "./SeaFreightContact";
import SeaFreightHome from "./SeaFreightHome";
import SeaFreightServices from "./SeaFreightServices";
import SeaFreightTimeline from "./SeaFreightTimeline";

const SeaFreight = () => {
  return (
    <div>
      <SeaFreightHome />
      <SeaFreightAbout />
      <SeaFreightBentoGrid />
      <SeaFreightServices />
      <SeaFreightTimeline />
      <SeaFreightContact />
    </div>
  );
};

export default SeaFreight;

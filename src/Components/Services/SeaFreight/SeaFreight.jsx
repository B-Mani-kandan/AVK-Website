import HomeAchivement from "../../Home/HomeAchivement";
import SeaFreightHome from "./SeaFreightHome";
import SeaFreightIntro from "./SeaFreightIntro";
import SeaFreightServices from "./SeaFreightServices";
import SeaFreightTimeline from "./SeaFreightTimeline";

const SeaFreight = () => {
  return (
    <div>
      <SeaFreightHome />
      <SeaFreightIntro />
      <SeaFreightServices />
      <SeaFreightTimeline />
      <HomeAchivement />
    </div>
  );
};

export default SeaFreight;

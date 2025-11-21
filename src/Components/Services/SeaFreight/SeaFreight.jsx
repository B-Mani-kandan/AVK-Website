import HomeAchivement from "../../Home/HomeAchivement";
import SeaFreightHome from "./SeaFreightHome";
import SeaFreightServices from "./SeaFreightServices";
import SeaFreightTimeline from "./SeaFreightTimeline";

const SeaFreight = () => {
  return (
    <div>
      <SeaFreightHome />
      <SeaFreightServices />
      <SeaFreightTimeline />
      <HomeAchivement />
    </div>
  );
};

export default SeaFreight;

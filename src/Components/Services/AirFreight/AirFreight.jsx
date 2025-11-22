import AirFreightHome from "./AirFreightHome";
import AirFreightFeatures from "./AirFreightFeatures";
import { AirFreightBento } from "./AirFreightBento";
import AirFreightIntro from "./AirFreightIntro";
import HomeAchivement from "../../Home/HomeAchivement";

const AirFreight = () => {
  return (
    <div>
      <AirFreightHome />
      <AirFreightIntro />
      <AirFreightFeatures />
      <AirFreightBento />
      <HomeAchivement />
    </div>
  );
};

export default AirFreight;

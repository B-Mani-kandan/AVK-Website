import AirFreightHome from "./AirFreightHome";
import AirFreightFeatures from "./AirFreightFeatures";
import { AirFrieghtMap } from "./AirFrieghtMap";
import { AirFreightBento } from "./AirFreightBento";
import { AirFreightContact } from "./AirFreightContact";
import { AirFreightProcess } from "./AirFreightProcess";

const AirFreight = () => {
  return (
    <div>
      <AirFreightHome />
      <AirFreightFeatures />
      <AirFreightBento />
      <AirFreightProcess />
      <AirFrieghtMap />
      <AirFreightContact />
    </div>
  );
};

export default AirFreight;

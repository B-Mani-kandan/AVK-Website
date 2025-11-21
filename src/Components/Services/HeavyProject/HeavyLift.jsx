import HeavyLiftHome from "./HeavyLiftHome";
import HeavyLiftServices from "./HeavyLiftServices";
import HeavyLiftProcess from "./HeavyLiftProcess";
import HeavyLiftFAQ from "./HeavyLiftFAQ";
import HeavyIntro from "./HeavyInto";

const HeavyLift = () => {
  return (
    <div>
      <HeavyLiftHome />
      <HeavyIntro />
      <HeavyLiftServices />
      <HeavyLiftProcess />
      <HeavyLiftFAQ />
    </div>
  );
};

export default HeavyLift;

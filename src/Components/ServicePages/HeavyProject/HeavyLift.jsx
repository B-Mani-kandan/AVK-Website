import React from "react";
import HeavyLiftHome from "./HeavyLiftHome";
import HeavyLiftServices from "./HeavyLiftServices";
import HeavyLiftProcess from "./HeavyLiftProcess";
import HeavyLiftFAQ from "./HeavyLiftFAQ";
import { HeavyLiftImg } from "./HeavyLiftImg";

const HeavyLift = () => {
  return (
    <div>
      <HeavyLiftHome />
      <HeavyLiftServices />
      <HeavyLiftProcess />
      <HeavyLiftImg />
      <HeavyLiftFAQ />
    </div>
  );
};

export default HeavyLift;

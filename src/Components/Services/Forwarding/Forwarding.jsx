import React from "react";
import ForwardingIntro from "./ForwardingIntro";
import ForwardingHome from "./ForwardingHome";
import ForwardingServices from "./ForwardingServices";
import ForwardingChoose from "./ForwardingChoose";
import ForwardingFAQ from "./ForwardingFAQ";

const Forwarding = () => {
  return (
    <div>
      <ForwardingHome />
      <ForwardingIntro />
      <ForwardingChoose />
      <ForwardingServices />
      <ForwardingFAQ />
    </div>
  );
};

export default Forwarding;

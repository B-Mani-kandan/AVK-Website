import React from "react";

const Forwarding = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 text-white">
      <h1 className="text-4xl font-extrabold mb-6">Freight Forwarding</h1>

      <p className="text-lg max-w-4xl text-center leading-relaxed">
        Our freight forwarding solutions ensure fast, safe, and cost-effective
        transport of goods across international borders. We coordinate all
        logistics so you can focus on business growth.
      </p>

      <ul className="mt-8 max-w-3xl space-y-3 text-left text-lg">
        <li>• Air, sea, and land freight services</li>
        <li>• End-to-end logistics coordination</li>
        <li>• Real-time tracking and updates</li>
        <li>• Consolidation and deconsolidation</li>
      </ul>
    </div>
  );
};

export default Forwarding;

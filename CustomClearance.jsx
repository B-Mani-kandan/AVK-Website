import React from "react";

const CustomClearance = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 text-white">
      <h1 className="text-4xl font-extrabold mb-6">Custom Clearance</h1>

      <p className="text-lg max-w-4xl text-center leading-relaxed">
        Our customs clearance services ensure your shipments pass through border
        controls without delay. We take care of all legal, regulatory, and
        documentation procedures for smooth cargo movement.
      </p>

      <ul className="mt-8 max-w-3xl space-y-3 text-left text-lg">
        <li>• Handling import & export customs procedures</li>
        <li>• Duty, taxes, and compliance assistance</li>
        <li>• HS code classification guidance</li>
        <li>• Fast clearance at all major ports</li>
      </ul>
    </div>
  );
};

export default CustomClearance;

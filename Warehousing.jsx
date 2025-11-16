import React from "react";

const Warehousing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 text-white">
      <h1 className="text-4xl font-extrabold mb-6">Warehousing Solutions</h1>

      <p className="text-lg max-w-4xl text-center leading-relaxed">
        Our warehousing services ensure secure storage, efficient handling, and
        seamless distribution of goods. With advanced facilities and monitored
        environments, we safeguard your inventory with care.
      </p>

      <ul className="mt-8 max-w-3xl space-y-3 text-left text-lg">
        <li>• Secure storage facilities</li>
        <li>• Inventory tracking and management</li>
        <li>• Cross-docking & distribution</li>
        <li>• Temperature-controlled storage options</li>
      </ul>
    </div>
  );
};

export default Warehousing;

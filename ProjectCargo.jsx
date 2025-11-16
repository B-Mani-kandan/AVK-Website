import React from "react";

const ProjectCargo = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 text-white">
      <h1 className="text-4xl font-extrabold mb-6">Project Cargo Handling</h1>

      <p className="text-lg max-w-4xl text-center leading-relaxed">
        Project cargo requires specialized planning and execution. Our team
        manages heavy, oversized, and complex cargo with precision and safety,
        ensuring smooth end-to-end logistics.
      </p>

      <ul className="mt-8 max-w-3xl space-y-3 text-left text-lg">
        <li>• Heavy and oversized cargo movement</li>
        <li>• Route planning and feasibility analysis</li>
        <li>• On-site handling and supervision</li>
        <li>• Multi-modal transportation solutions</li>
      </ul>
    </div>
  );
};

export default ProjectCargo;

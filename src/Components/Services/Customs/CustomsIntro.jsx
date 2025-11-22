const CustomsIntro = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-16 md:px-20 mb-15 md:mt-25 CustomsIntro">
      <div>
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          Custom Clearance Introduction
        </p>
        <h2 className="text-5xl font-bold leading-snug text-black font-new">
          Seamless & Faster <br />
          Customs Processing <br />
          For Your Cargo
        </h2>
      </div>

      <div className="space-y-10">
        <div className="pt-8">
          <p className="text-gray-600 text-xl text-justify">
            Our custom clearance services simplify the complexities of global
            trade by ensuring your shipments pass through customs smoothly,
            accurately, and without delays. We handle all documentation,
            regulatory compliance, and clearance procedures end-to-end.
          </p>
        </div>

        <div>
          <p className="text-gray-600 text-xl text-justify">
            With extensive experience across import and export regulations, our
            team works closely with authorities to minimize hold-ups and avoid
            unnecessary penalties. From HS classification to duty calculations,
            we ensure every process is completed precisely.
          </p>
        </div>

        <div>
          <p className="text-gray-600 text-xl text-justify">
            Whether it’s general cargo, hazardous materials, perishables, or
            heavy machinery, our experts manage compliance requirements,
            inspections, documentation, and seamless cargo release—keeping your
            supply chain moving without interruptions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomsIntro;

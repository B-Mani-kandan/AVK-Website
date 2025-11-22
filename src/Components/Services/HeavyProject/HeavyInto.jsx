const HeavyIntro = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-16 md:px-20 mb-15 HeavyIntro">
      <div>
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          Project Cargo & Heavy Lift Introduction
        </p>
        <h2 className="text-5xl font-bold leading-snug  font-new">
          Engineering Precision <br />
          For Oversized & <br />
          Complex Cargo
        </h2>
      </div>

      <div className="space-y-10">
        <div className="pt-8">
          <p className="text-gray-600 text-xl text-justify">
            Project and heavy lift cargo requires specialized expertise,
            precision planning, and advanced handling capabilities. At
            Professional Freight Logistics, we manage large, heavy, and
            oversized shipments with exceptional attention to detail—ensuring
            safe, compliant, and on-schedule transport across global routes.
          </p>
        </div>

        <div>
          <p className="text-gray-600 text-xl text-justify">
            From industrial machinery and power plant equipment to construction
            structures and high-value engineering components, our team conducts
            full route surveys, risk assessments, lifting plans, and regulatory
            compliance checks. We coordinate cranes, special trailers, barges,
            and custom lifting gear to handle even the most challenging cargo.
          </p>
        </div>

        <div>
          <p className="text-gray-600 text-xl text-justify">
            Whether it's port-to-site delivery, multimodal movement, turnkey
            project logistics, or on-site installation coordination, we ensure a
            seamless end-to-end experience. Our heavy lift solutions guarantee
            safety, structural integrity, and precision execution—no matter the
            scale or complexity of the project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeavyIntro;

const ForwardingIntro = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-16 md:px-20  md:mt-10 ForwardingIntro">
      <div>
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          Forwarding Services Introduction
        </p>
        <h2 className="text-5xl font-bold leading-snug text-black font-new">
          Reliable Global <br />
          Freight Forwarding <br />
          For Every Business
        </h2>
      </div>

      <div className="space-y-10">
        <div className="pt-8">
          <p className="text-gray-600 text-xl text-justify">
            Our forwarding services connect you to the world through safe,
            efficient, and cost-effective transportation solutions. We manage
            the complete logistics cycle—from pickup, documentation, and
            consolidation to shipping and final delivery.
          </p>
        </div>

        <div>
          <p className="text-gray-600 text-xl text-justify">
            With a strong global network of carriers, agents, and logistics
            partners, we ensure flexible routing, competitive pricing, and
            reliable transit times for both LCL and FCL shipments across sea,
            air, and land.
          </p>
        </div>

        <div>
          <p className="text-gray-600 text-xl text-justify">
            Our team provides continuous monitoring, real-time tracking, and
            tailored freight solutions to handle large volumes, urgent cargo,
            and specialized shipments—ensuring your goods reach their
            destination safely and on schedule.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForwardingIntro;

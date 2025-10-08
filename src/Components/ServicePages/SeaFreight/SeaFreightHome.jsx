import seaFreight from "../../../assets/Common/SeaFreight.webp";

const SeaFreightHome = () => {
  return (
    <section className="bg-white text-center px-6 md:px-12 py-16 mt-15">
      <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 font-serif leading-snug md:px-9 mb-6">
        Grow your business. <span className="text-[#16a3e6]">We will</span>{" "}
        <span className="text-[#16a3e6]">take care</span> all your logistics
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        It&apos;s time to adapt your business to keep up with how the world of
        commerce is evolving. Onlineize your offline logistics service. Booking,
        controlling, and monitoring your shipments are all simple with OneLink
        India.
      </p>
      <div className="max-w-6xl mx-auto">
        <img
          src={seaFreight}
          alt="Logistics ship"
          className="rounded-lg shadow-lg w-full  "
        />
      </div>
    </section>
  );
};

export default SeaFreightHome;

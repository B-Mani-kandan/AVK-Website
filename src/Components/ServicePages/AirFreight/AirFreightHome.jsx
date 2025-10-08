import AirHome from "../../../assets/AirFreight/AirHome.webp";
import DynamicButton from "../../Buttons/DynamicButton";

const AirFreightHome = () => {
  return (
    <section className="relative bg-[#fff] text-black overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 mt-15">
        <div className="max-w-xl space-y-6">
          <h4 className="font-bold text-sm tracking-wide font-serif">
            01. Reliable Air Freight Services
          </h4>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-serif leading-snug mb-6">
            <span className="text-[#16a3e6]">OneLink </span>India Freight
            Services
          </h1>
          <p className="text-gray-700 text-base leading-relaxed">
            Our air freight solutions are built for speed, reliability, and
            global reach. Whether urgent shipments or scheduled consignments, we
            ensure your cargo arrives on time, every time. With end-to-end
            tracking and dedicated customer support, OneLink makes international
            logistics simple and seamless.
          </p>

          <DynamicButton text={"Learn More"} />
        </div>
        <div className="relative mt-10 md:mt-0 flex gap-4">
          <img
            src={AirHome}
            alt="airplane"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-[#04558c] py-3 overflow-hidden relative">
        <div className="marquee whitespace-nowrap font-serif text-white font-medium">
          <span className="mx-6">OneLink Logistic Services</span>
          <span className="mx-6">➤</span>
          <span className="mx-6">OneLink Logistic Services</span>
          <span className="mx-6">➤</span>
          <span className="mx-6">OneLink Logistic Services</span>
          <span className="mx-6">➤</span>
          <span className="mx-6">OneLink Logistic Services</span>
          <span className="mx-6">➤</span>
          <span className="mx-6">OneLink Logistic Services</span>
        </div>
      </div>
    </section>
  );
};

export default AirFreightHome;

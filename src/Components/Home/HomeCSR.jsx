import GlobePlant from "../../assets/Common/GlobeGreen.webp";
import Buildings from "../../assets/Common/Buildings.webp";
import Community from "../../assets/Common/Community.webp";

const HomeCSR = () => {
  return (
    <div className="bg-white text-black px-6 md:px-20 lg:px-32 max-w-7xl mx-auto py-16 mt-15 font-sans">
      <h4 className="font-bold text-sm tracking-wide font-serif">07. CSR</h4>
      <div
        data-aos="zoom-in"
        className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <div>
          <p className="uppercase text-xs font-semibold tracking-wider text-gray-700">
            Corporate Social Responsibility
          </p>
        </div>
        <div className="col-span-2">
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight max-w-3xl">
            Investing in responsible change that endures
          </h1>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <div>
          <p className="uppercase text-xs font-semibold tracking-wide text-gray-700">
            More than just a company
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
            At One Link Logistic, we believe logistics is more than moving cargo
            — it’s about creating sustainable impact. Our CSR philosophy is
            built around community engagement, environmental responsibility, and
            ethical business practices.We actively support green logistics
            initiatives, working with carriers that prioritize low-emission
            vessels and airlines with carbon-offset programs. Within India, we
            are adopting digital documentation to reduce paper use and actively
            measure our carbon footprint per CBM shipped.Beyond the environment,
            our focus is on education and skill development in underprivileged
            communities near key ports and ICDs. We sponsor vocational training
            programs in supply chain and logistics, creating opportunities for
            young talent to enter this industry, Transparency, fairness, and
            responsible partnerships remain central to our CS
          </p>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="overflow-hidden rounded-md">
          <img
            src={Buildings}
            alt="Image 1"
            className="rounded-md object-cover w-full h-64 transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="overflow-hidden rounded-md">
          <img
            src={GlobePlant}
            alt="Image 2"
            className="rounded-md object-cover w-full h-64 transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="overflow-hidden rounded-md">
          <img
            src={Community}
            alt="Image 3"
            className="rounded-md object-cover w-full h-64 transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCSR;

import Img1 from "../../assets/Common/Packages.webp";
import Img2 from "../../assets/Common/Containers.webp";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const HomeAbout = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="text-black px-6 md:px-16 py-16">
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h4 className="font-bold text-sm tracking-wide font-serif">
            02. About Us
          </h4>
          <h2 className="text-3xl md:text-4xl font-serif font-bold leading-snug mt-3">
            Delivering Reliable, Cost Effective Logistics Solution
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            OneLink Logistics India Pvt. Ltd. is powered by a dynamic team of
            sales strategists and logistics professionals, backed by over three
            decades of core handling expertise. Our goal is to be recognized as
            the foremost neutral consolidator in the logistics domain. We pride
            ourselves on delivering value throughout India and beyond, fueled by
            unwavering dedication, professionalism, and ethical conduct.
          </p>
        </div>

        <div className="flex gap-6 justify-center">
          <div
            data-aos="zoom-in-left"
            className="w-1/2 transform -skew-x-6 overflow-hidden rounded-lg"
          >
            <img
              src={Img1}
              alt="Worker"
              className="w-full h-full object-cover transform skew-x-6 scale-110"
            />
          </div>
          <div
            data-aos="zoom-in-left"
            className="w-1/2 transform -skew-x-6 overflow-hidden rounded-lg"
          >
            <img
              src={Img2}
              alt="Fabric"
              className="w-full h-full object-cover transform skew-x-6 scale-110"
            />
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className="max-w-7xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
      >
        <div>
          <h3 className="text-5xl font-bold">
            {inView && <CountUp end={100} duration={2} />}+
          </h3>
          <p className="mt-2 text-gray-600">
            Skilled team of 100+ industry experts
          </p>
        </div>
        <div>
          <h3 className="text-5xl font-bold">
            {inView && <CountUp end={10} duration={2} />}+
          </h3>
          <p className="mt-2 text-gray-600">years of experience</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold">
            {inView && <CountUp end={98} duration={2} />}%
          </h3>
          <p className="mt-2 text-gray-600">
            High Rate Of Customer Satisfaction
          </p>
        </div>
        <div>
          <h3 className="text-5xl font-bold">
            {inView && <CountUp end={1000} duration={2.5} />}+
          </h3>
          <p className="mt-2 text-gray-600">Customers Worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;

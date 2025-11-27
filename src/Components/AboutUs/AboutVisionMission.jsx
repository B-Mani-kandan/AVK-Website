import WorkProcess1 from "../../assets/WorkProcess1.webp";
import WorkProcess2 from "../../assets/WorkProcess2.webp";
import { FaCheckCircle } from "react-icons/fa";

const AboutVisionMission = () => {
  return (
    <div className="bg-[#0d2d42] text-white py-20 px-6 md:px-16 md:mt-15">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={WorkProcess1}
            alt="Delivery"
            className="rounded-lg w-full object-cover shadow-lg"
          />
          <div>
            <h3 className="text-sm text-gray-400 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
              OUR VISION MISSION
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Driving Global Logistics <br /> Forward With Innovation
            </h2>
            <p className="text-gray-300 mb-3">
              Our vision is to redefine global logistics by delivering smarter,
              faster, and more reliable supply chain solutions. We empower
              businesses with transparency, advanced technology, and a
              commitment to excellence in every shipment we handle.
            </p>
            <p className="text-gray-300 mb-6">
              We aim to build sustainable logistics ecosystems that adapt to
              evolving market demands, ensuring seamless cargo movement across
              all international borders.
            </p>

            <div className="flex gap-10 text-white text-lg font-medium">
              <div>
                <span className="text-2xl font-bold text-yellow-300">50%</span>
                <br />
                Operational Efficiency
              </div>
              <div>
                <span className="text-2xl font-bold text-yellow-300">98%</span>
                <br />
                On-Time Deliveries
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Our Mission – What Drives Us
            </h2>
            <p className="text-gray-300 mb-8">
              Our mission is to simplify logistics for businesses of all sizes
              by offering end-to-end forwarding, customs clearance, warehousing,
              and transportation solutions. We are committed to accuracy,
              compliance, and timely delivery—ensuring a seamless logistics
              experience.
            </p>

            <ul className="space-y-5 text-gray-100">
              {[
                "Commitment to Transparency & Trust",
                "Seamless End-to-End Logistics Solutions",
                "Customer-Centric Operations",
                "Technology-Driven Supply Chain",
                "Global Network & Reliable Partnerships",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-white" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={WorkProcess2}
            alt="Team"
            className="rounded-lg w-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutVisionMission;

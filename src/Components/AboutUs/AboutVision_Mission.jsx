import { CheckCircle } from "lucide-react";
import Mission1 from "../../assets/Common/Mission1.webp";
import Mission2 from "../../assets/Common/Mission2.webp";
import Vission1 from "../../assets/Common/Vission1.webp";
import Vission2 from "../../assets/Common/Vission2.webp";
export default function AboutVision_Mission() {
  return (
    <section className="px-6 md:px-20 py-16 mt-10 bg-white">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10  items-center">
          <div className="relative w-full flex justify-start">
            <img
              data-aos="fade-right"
              src={Mission1}
              alt="Blueprint"
              className="rounded-xl shadow-lg w-80 h-60 object-cover"
            />
            <img
              data-aos="fade-left"
              src={Mission2}
              alt="Team"
              className="rounded-xl shadow-xl w-64 h-48 object-cover absolute -bottom-6 right-15 border-4 border-white"
            />
          </div>
          <div data-aos="fade-up" className="space-y-6">
            <h4 className="font-bold text-sm tracking-wide font-serif mb-2">
              02. Mission
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To deliver seamless, end-to-end LCL consolidation and multimodal
              logistics solutions—driven by innovation, personalized service,
              and unwavering reliability—that empower our clients to thrive in
              global trade.
            </p>
            <ul className="space-y-3">
              {[
                "Safe and reliable cargo movement worldwide.",
                "Customer-focused and transparent services.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 items-center">
          <div data-aos="fade-up" className="space-y-6">
            <h4 className="font-bold text-sm tracking-wide font-serif mb-2">
              03. Vision
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To be the most trusted, technology-enabled logistics
              partner—breaking geographical boundaries and setting new
              benchmarks in efficiency, transparency, and customer satisfaction.
            </p>
            <ul className="space-y-3">
              {[
                "Lead the industry with innovation.",
                "Set global standards in logistics.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full flex justify-center">
            <img
              data-aos="fade-left"
              src={Vission1}
              alt="Surveyor"
              className="rounded-xl shadow-lg w-80 h-60 object-cover"
            />
            <img
              data-aos="fade-right"
              src={Vission2}
              alt="Workers"
              className="rounded-xl shadow-xl w-64 h-48 object-cover absolute -bottom-6 -right-6 border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

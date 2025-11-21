import WorkProcess1 from "../../assets/WorkProcess1.webp";
import WorkProcess2 from "../../assets/WorkProcess2.webp";
import { PointerHighlight } from "../ui/pointer-highlight";

const steps = [
  {
    id: "01",
    title: "Real-time monitoring",
    desc: "Finally, we ensure timely and secure delivery of your goods, followed by a thorough review.",
  },
  {
    id: "02",
    title: "Planning and strategy",
    desc: "Throughout the journey, our team monitors progress in real-time, providing you with updates.",
  },
  {
    id: "03",
    title: "Coordination & execution",
    desc: "We coordinate & manage all aspects of transportation, leveraging our global network.",
  },
  {
    id: "04",
    title: "Secure transportation",
    desc: "Trust our meticulous process to streamline your supply chain and drive your business forward.",
  },
];

export default function HomeWorkingProcess() {
  return (
    <div className="w-full bg-white md:mb-10 max-w-7xl mx-auto px-6 py-16 md:px-20">
      <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
        WORKING PROCESS
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        <div className="grid grid-cols-2 gap-6 w-full">
          <img
            src={WorkProcess1}
            className="w-full h-56 rounded-xl object-cover shadow-md"
          />
          <img
            src={WorkProcess2}
            className="w-full h-56 rounded-xl object-cover shadow-md"
          />
        </div>
        <div className="w-full text-left lg:pl-10">
          <h2 className="text-3xl font-semibold leading-snug text-right font-new text-[#7c0204]">
            <PointerHighlight
              rectangleClassName="bg-blue-100 dark:bg-[#AAC4F5] border-[#AAC4F5] dark:border-[#AAC4F5] leading-loose"
              pointerClassName="text-blue-500 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10 text-black">
                Our working process is designed to deliver efficient, reliable,
                & tailored logistics solutions.
              </span>
            </PointerHighlight>
            From the initial consultation to the final delivery,
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
        {steps.map((step) => (
          <div key={step.id} className="text-left">
            <span className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full text-gray-700 font-semibold mb-4">
              {step.id}
            </span>
            <h3 className="text-xl font-semibold mb-2 font-new">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

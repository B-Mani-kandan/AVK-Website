import {
  Globe2,
  DollarSign,
  Radar,
  FileCheck2,
  ShieldCheck,
  Headphones,
  ArrowRight,
} from "lucide-react";

export default function ForwardingChoose() {
  const reasons = [
    {
      title: "Global Network",
      icon: Globe2,
      desc: "Strong international partners, agents, and carriers across major trade routes.",
    },
    {
      title: "Cost-Effective Shipping Plans",
      icon: DollarSign,
      desc: "Optimized routes and competitive freight rates tailored to your cargo needs.",
    },
    {
      title: "Real-Time Cargo Tracking",
      icon: Radar,
      desc: "Stay informed with live shipment updates at every stage.",
    },
    {
      title: "Expertise in Documentation",
      icon: FileCheck2,
      desc: "Avoid delays with accurate paperwork and compliance handling.",
    },
    {
      title: "Safe & Secure Handling",
      icon: ShieldCheck,
      desc: "Advanced cargo protection, monitoring, and risk management.",
    },
    {
      title: "Dedicated Support",
      icon: Headphones,
      desc: "A professional logistics team assisting you round the clock.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          WHY CHOOSE US
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-new text-gray-900 mb-4">
          Why Choose Us for Freight Forwarding?
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          We combine global reach with local expertise, ensuring efficient,
          secure, and reliable freight movement—no matter the cargo or
          destination.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  bg-white 
                  p-7 
                  rounded-2xl 
                  shadow-md 
                  border border-gray-200 
                  hover:shadow-xl 
                  hover:border-[#7e0001]
                  transition 
                  group
                "
              >
                <div
                  className="
                    w-14 h-14 
                    rounded-xl 
                    bg-yellow-100 
                    flex items-center justify-center 
                    group-hover:bg-yellow-200 
                    transition
                  "
                >
                  <Icon className="w-7 h-7 text-yellow-700" />
                </div>
                <h3 className="text-lg font-semibold mt-5 text-gray-900 group-hover:text-black">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

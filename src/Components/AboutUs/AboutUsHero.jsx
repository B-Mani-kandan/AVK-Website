"use client";
import { useEffect, useRef, useState } from "react";
import AboutImg from "../../assets/Common/AboutUs.webp";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function AboutUsHero() {
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let st;
    if (statsRef.current) {
      st = ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 80%",
        onEnter: () => {
          setHasAnimated(true);
          st && st.kill();
        },
      });
    }

    return () => {
      st && st.kill();
    };
  }, []);

  const words =
    "One Link India is your reliable partner for global logistics, offering seamless solutions across air, sea, and land. With a strong network and proven expertise, we ensure your cargo reaches safely and on time, anywhere in the world.";

  const stats = [
    { end: 150, label: "Complete Projects" },
    { end: 100, label: "Team Members" },
    { end: 500, label: "Trusted Clients" },
    { end: 10, label: "Years Of Experience" },
  ];

  return (
    <section className="px-6 md:px-20 py-16 mt-15 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h4 className="font-bold text-sm font-serif tracking-wide">
              01. About Us
            </h4>
            <h2
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold leading-snug font-serif text-gray-900 mt-3 mb-4"
            >
              Crafting Excellence <br /> Together
            </h2>
            <p data-aos="zoom-in-up" className="text-gray-600 leading-relaxed">
              OneLink Logistics India Pvt. Ltd. is powered by a dynamic team of
              sales strategists and logistics professionals, backed by over
              three decades of core handling expertise. Our goal is to be
              recognized as the foremost neutral consolidator in the logistics
              domain. We pride ourselves on delivering value throughout India
              and beyond, fueled by unwavering dedication, professionalism, and
              ethical conduct.
            </p>
          </div>

          <div data-aos="zoom-in" className="relative">
            <img src={AboutImg} alt="Team" className="rounded-2xl shadow-md" />
            <div className="absolute bottom-[-30px] left-10 bg-white rounded-full shadow-lg px-6 py-4">
              <span className="text-sm text-gray-800 font-medium">
                + OneLink India
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white py-12 px-4 mt-0 md:mt-15 text-center">
          <TextGenerateEffect words={words} />
        </div>

        <div
          ref={statsRef}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, i) => (
            <div key={i}>
              <h3 className="text-6xl font-bold text-gray-900">
                {hasAnimated ? <CountUp end={stat.end} duration={3} /> : 0}+
              </h3>
              <p className="text-gray-600 mt-3 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

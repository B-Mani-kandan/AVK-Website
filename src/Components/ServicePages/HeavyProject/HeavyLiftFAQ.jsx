import { useState } from "react";
import ExcavatorImg from "../../../assets/HeavyLift/HeavyFaq.webp";

export default function HeavyLiftFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "HOW CAN I REQUEST A HEAVYLIFT PROJECT ASSESSMENT?",
      answer:
        "You can contact our team with your project specifications and lifting requirements. We will evaluate your site, load capacity, and provide a tailored lifting strategy that ensures safety and efficiency.",
    },
    {
      question: "DO YOU PROVIDE END-TO-END HEAVYLIFT SOLUTIONS?",
      answer:
        "Yes, we handle everything from planning and logistics to equipment mobilization, lifting execution, and final placement of heavy cargo or structures on-site.",
    },
    {
      question: "WHAT IS THE USUAL TIMELINE FOR A HEAVYLIFT OPERATION?",
      answer:
        "Timelines vary depending on the scale and complexity of the project. Smaller lifts can be completed within days, while large-scale industrial operations may require weeks of preparation and execution.",
    },
    {
      question: "DO YOU OFFER ONSITE ENGINEERING & SAFETY SUPPORT?",
      answer:
        "Absolutely. Our experts conduct detailed lift studies, risk assessments, and provide onsite supervision to ensure that every lift is carried out safely and meets international standards.",
    },
    {
      question: "HOW CAN I GET A DETAILED QUOTE FOR MY HEAVYLIFT PROJECT?",
      answer:
        "Share your project details such as load specifications, site conditions, and timelines. Our team will prepare a comprehensive proposal with cost estimates, equipment plans, and execution schedules.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 lg:px-20">
      <div className="mb-4">
        <h4 className="font-bold text-sm tracking-wide font-serif">03. FAQ</h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-bold  uppercase mb-3">
            HeavyLift Project FAQs
          </h3>
          <p className="text-gray-600 mb-6">
            We specialize in complex heavy-lift projects across industries like
            construction, oil & gas, power, and logistics. Our solutions are
            engineered to handle the toughest lifting challenges with precision
            and safety.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-3 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-semibold uppercase">
                    {faq.question}
                  </h4>
                  <span className="text-2xl font-bold text-[#16a3e6]">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src={ExcavatorImg} alt="Heavy Lift Equipment" />
        </div>
      </div>
    </section>
  );
}

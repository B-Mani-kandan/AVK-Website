import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How can I request a heavylift project assessment?",
    answer:
      "You can contact our team with your project specifications and lifting requirements. We will evaluate your site, load capacity, and provide a tailored lifting strategy that ensures safety and efficiency.",
  },
  {
    question: "Do you provide end-to-end heavylift solutions?",
    answer:
      "Yes, we handle everything from planning and logistics to equipment mobilization, lifting execution, and final placement of heavy cargo or structures on-site.",
  },
  {
    question: "What is the usual timeline for a heavylift operation?",
    answer:
      "Timelines vary depending on the scale and complexity of the project. Smaller lifts can be completed within days, while large-scale industrial operations may require weeks of preparation and execution.",
  },
  {
    question: "Do you offer onsite engineering & safety support?",
    answer:
      "Absolutely. Our experts conduct detailed lift studies, risk assessments, and provide onsite supervision to ensure that every lift is carried out safely and meets international standards.",
  },
  {
    question: "How can I get a detailed quote for my heavylift project?",
    answer:
      "Share your project details such as load specifications, site conditions, and timelines. Our team will prepare a comprehensive proposal with cost estimates, equipment plans, and execution schedules.",
  },
];

const HeavyLiftFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white  sm:px-6 lg:px-20  max-w-7xl mx-auto px-6 py-16 md:px-20  sm:py-14 md:py-16 flex flex-col lg:flex-row gap-8 sm:gap-10 mb-10 sm:mb-16 md:mb-20">
      <div className="lg:w-1/2">
        <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-2 sm:pl-3 mb-3 sm:mb-4 font-medium">
          FTWZ FAQ
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-snug sm:leading-tight">
          You’ve Got
          <br />
          Questions, We’ve
          <br />
          Got Answers
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
          Explore clear answers to common queries and understand how Free Trade
          Warehousing Zones can benefit your business.
        </p>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 space-y-4 sm:space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`transition-all duration-300  overflow-hidden ${
              openIndex === index
                ? "border-t border-red-500 bg-[#f2f2f2]"
                : "border-t border-gray-200"
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-4 sm:p-6 flex justify-between items-center"
            >
              <span className="font-medium text-gray-800 text-sm sm:text-base">
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 sm:px-6 pb-4 text-gray-600 text-sm sm:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeavyLiftFAQ;

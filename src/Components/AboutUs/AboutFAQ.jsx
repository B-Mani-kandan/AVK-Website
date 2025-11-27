import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does AVK Trans Global provide?",
    answer:
      "We offer end-to-end logistics solutions including freight forwarding, customs clearance, warehousing, distribution, project cargo handling, and multimodal transportation.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We support a wide range of industries such as manufacturing, retail, e-commerce, automotive, textiles, engineering, and project logistics.",
  },
  {
    question:
      "How is AVK Trans Global different from other logistics providers?",
    answer:
      "Our technology-driven operations, transparent communication, real-time tracking, and specialized logistics expertise help businesses simplify their entire supply chain.",
  },
  {
    question: "Do you offer customized logistics solutions?",
    answer:
      "Yes, every logistics plan is customized based on shipment type, route, urgency, cargo nature, and regulatory requirements.",
  },
  {
    question: "Where is your service network available?",
    answer:
      "We operate across major ports, airports, ICDs, and logistics hubs in India with a strong global partner network for international shipments.",
  },
];

const AboutFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white max-w-7xl mx-auto px-6 sm:px-6 md:px-20 lg:px-20 py-16 sm:py-14 md:mt-15 md:py-16 flex flex-col lg:flex-row gap-8 sm:gap-10 ">
      <div className="lg:w-1/2">
        <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-2 sm:pl-3 mb-3 sm:mb-4 font-medium">
          ABOUT US FAQ
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-new font-bold mb-3 sm:mb-4 leading-snug sm:leading-tight">
          Learn More
          <br />
          About Our
          <br />
          Logistics Expertise
        </h2>

        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
          Here are answers to the most common questions about our company,
          services, expertise, and how we deliver seamless logistics for
          businesses.
        </p>
      </div>
      <div className="lg:w-1/2 space-y-4 sm:space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`transition-all duration-300 overflow-hidden ${
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

export default AboutFAQ;

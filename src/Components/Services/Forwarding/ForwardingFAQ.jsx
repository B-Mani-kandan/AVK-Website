import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of freight forwarding services do you offer?",
    answer:
      "We offer Air Freight, Sea Freight (FCL/LCL), Road Transport (FTL/LTL), Cross-trade shipments, and complete multimodal logistics solutions.",
  },
  {
    question: "How long does international shipping usually take?",
    answer:
      "Transit time depends on the mode: Air Freight (1–7 days), Sea Freight (15–45 days), and Road Freight varies by distance. We provide accurate ETA for every shipment.",
  },
  {
    question: "Can you handle door-to-door delivery?",
    answer:
      "Yes, we offer complete end-to-end services including pickup, customs clearance, freight movement, warehousing, and final delivery.",
  },
  {
    question: "Do you provide cargo tracking?",
    answer:
      "Absolutely. You can track your cargo in real time, including location updates, shipping milestones, and delivery status.",
  },
  {
    question: "How do you ensure cargo safety and security?",
    answer:
      "We follow strict handling protocols, use reliable carriers, offer insurance support, and monitor your cargo throughout the entire journey.",
  },
];

const ForwardingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white max-w-7xl mx-auto px-6 sm:px-6 md:px-20 lg:px-20 py-16 sm:py-14 md:py-16 flex flex-col lg:flex-row gap-8 sm:gap-10 mb-10 sm:mb-16 md:mb-20">
      <div className="lg:w-1/2">
        <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-2 sm:pl-3 mb-3 sm:mb-4 font-medium">
          FREIGHT FORWARDING FAQ
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-snug sm:leading-tight">
          You’ve Got
          <br />
          Questions, We’ve
          <br />
          Got Answers
        </h2>

        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
          Get quick answers to common freight forwarding queries and understand
          how we ensure smooth, reliable, and cost-effective logistics for your
          cargo.
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

export default ForwardingFAQ;

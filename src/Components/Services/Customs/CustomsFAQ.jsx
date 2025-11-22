import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What documents are required for customs clearance?",
    answer:
      "Common documents include the commercial invoice, packing list, bill of lading or airway bill, import/export license (if applicable), HS code details, and any mandatory certificates. Our team will guide you based on your shipment type.",
  },
  {
    question: "How long does the customs clearance process take?",
    answer:
      "Clearance times vary by port, cargo category, and documentation accuracy. In most cases, import and export clearance is completed within 24–72 hours if all documents are correct.",
  },
  {
    question: "Do you handle both import and export customs clearance?",
    answer:
      "Yes, we provide end-to-end customs clearance for both import and export shipments, including documentation, filing, duty calculation, inspection coordination, and final release.",
  },
  {
    question: "Can you help with duty & tax calculation?",
    answer:
      "Absolutely. We assist with HS code classification, duty structure verification, tax calculation, and checking eligibility for exemptions, notifications, and preferential duty benefits.",
  },
  {
    question: "Do you offer clearance at all major ports and airports?",
    answer:
      "Yes, our customs clearance services are available across major Indian seaports, airports, and ICDs. We coordinate with customs officials to ensure a fast and smooth clearance experience.",
  },
];

const CustomsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white  sm:px-6 lg:px-20  max-w-7xl mx-auto px-6 py-16 md:px-20  sm:py-14 md:py-16 flex flex-col lg:flex-row gap-8 sm:gap-10 mb-10 sm:mb-16 md:mb-20">
      <div className="lg:w-1/2">
        <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-2 sm:pl-3 mb-3 sm:mb-4 font-medium">
          PROJECT HEAVY LIFT FAQ
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-snug sm:leading-tight">
          You’ve Got
          <br />
          Questions, We’ve
          <br />
          Got Answers
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
          Explore clear answers to common customs clearance queries and
          understand how our expertise ensures smooth, compliant, and
          hassle-free shipment processing.
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

export default CustomsFAQ;

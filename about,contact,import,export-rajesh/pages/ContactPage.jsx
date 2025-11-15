import { useState, useEffect } from 'react';
import '../App.css'; // Use shared styles

// --- IMPORT YOUR IMAGE ---
import contactUsImage from '../assets/contactus.jpg';

// --- ICONS NEEDED FOR THIS PAGE ---
// Icons for Hero Info Row
const CheckBadgeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const ShieldCheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.314-.213-2.613-.623-3.832M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const ClockIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const CalendarDaysIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008z" /></svg>
);

// Icons for Stats Boxes
const UsersIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 00-12 0m12 0a9.094 9.094 0 01-12 0m12 0v.013M6 18.72v.013m12 0v.013M6 18.72v.013M6 12a6 6 0 1112 0 6 6 0 01-12 0z" /></svg>
);
const ChartPieIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>
);
const GlobeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0112 13.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0021 12c0-.778-.099 1.533-.284-2.253M12 21a9.004 9.004 0 01-8.716-6.747M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
);
const HeadsetIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-4.991-1.685v-2.252A8.25 8.25 0 0112 4.5v2.252" /></svg>
);

// Icon for FAQ
const ChevronDownIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);

// --- Data for the page ---
// Data for the 4 info icons in the hero
const heroInfo = [
  { icon: CheckBadgeIcon, text: "ISO 27001 Certified" },
  { icon: ShieldCheckIcon, text: "GDPR Compliant" },
  { icon: ClockIcon, text: "Average 2hr Response" },
  { icon: CalendarDaysIcon, text: "24/7 Availability" },
];

// Data for the 4 stat boxes
const stats = [
  { 
    icon: UsersIcon, 
    value: "50,000+", 
    label: "Happy Clients",
    color: "red" 
  },
  { 
    icon: ChartPieIcon,
    value: "98%", 
    label: "Satisfaction Rate",
    color: "amber" 
  },
  { 
    icon: GlobeIcon,
    value: "45+", 
    label: "Countries Served",
    color: "red" 
  },
  { 
    icon: HeadsetIcon, 
    value: "24/7", 
    label: "Support Available",
    color: "amber" 
  },
];

const faqData = [
  {
    question: "What is your response time?",
    answer: "Our support team typically responds to all inquiries within 24 business hours. For urgent matters, we recommend using our Live Chat or calling us directly."
  },
  {
    question: "Do you offer 24/7 support?",
    answer: "We offer 24/7 support for critical operational issues. Our standard email and chat support hours are Monday to Friday, 8am to 6pm."
  },
  {
    question: "Can I schedule a consultation?",
    answer: "Yes! Please fill out the contact form with details about your needs, and one of our logistics experts will reach out to schedule a consultation."
  },
  {
    question: "What information should I include in my message?",
    answer: "Please include as much detail as possible, such as your company name, shipment type, origin, destination, and any specific questions you have. This will help us assist you more efficiently."
  },
  {
    question: "Do you offer international support?",
    answer: "Yes, AVK Logistics is a global company. We have offices and partners around the world to support your international shipping and logistics needs."
  }
];


const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  // Add scroll animation logic to this page
  useEffect(() => {
    // We also need to manually scroll to top on page load
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll('.animate-on-scroll');
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return (
    <main>

      {/* --- Hero Section - With Blurred Background Image and Styled Heading --- */}
      <section className="relative py-20 lg:py-28 pt-40 px-6 lg:px-10 overflow-hidden bg-gray-900">
        {/* Blurred Background Image Element */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: `url(${contactUsImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px) brightness(0.6)', 
            WebkitFilter: 'blur(3px) brightness(0.6)', 
            transform: 'scale(1.02)' 
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30 z-10" /> 
        
        <div className="max-w-7xl mx-auto text-center relative z-20">
          <div className="animate-on-scroll animate-fade-in-up">
            {/* "We're Here to Help" - Styled with Orange Underline */}
            <div className="flex flex-col items-center mb-4">
              <span className="text-orange-500 font-semibold text-lg uppercase tracking-widest">
                We're Here to Help
              </span>
              <div className="w-16 h-1 bg-orange-500 mt-2 rounded-full"></div> 
            </div>
            {/* End of "We're Here to Help" styling */}

            <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-white leading-tight">
              Let's Start a Conversation
            </h1>
            <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
              Our dedicated team is ready to assist you with any questions, concerns, or opportunities. Experience world-class support that puts you first.
            </p>
          </div>
          
          {/* Info Icons */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-200 animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {heroInfo.map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="w-5 h-5 text-orange-400" />
                <span className="font-medium text-white">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      ---
      
      {/* --- Stats Boxes Section (Unchanged) --- */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="group relative bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-on-scroll animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`relative w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12
                  ${stat.color === 'red' ? 'bg-red-100/60 text-[#7A0C0C] group-hover:shadow-xl group-hover:shadow-red-100' : 'bg-amber-100/60 text-amber-600 group-hover:shadow-xl group-hover:shadow-amber-100'}
                `}>
                  <stat.icon className="w-10 h-10" />
                </div>
                <h2 className="mt-6 text-4xl font-bold text-gray-900">{stat.value}</h2>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      ---
      
      {/* --- Contact Form & Image Section (Unchanged) --- */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Form */}
          <div className="bg-white p-8 lg:p-10 rounded-xl shadow-xl animate-on-scroll animate-slide-in-left">
            <h3 className="text-3xl font-bold text-[#7A0C0C] mb-4">Send us a message</h3>
            <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you.</p>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  required
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  placeholder="Regarding my shipment"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="5" 
                  required
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-[#7A0C0C] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#630a0a] transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Image */}
          <div className="animate-on-scroll animate-slide-in-right">
            <img 
              src={contactUsImage} 
              alt="Our team working together" 
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
          </div>

        </div>
      </section>
      
      ---
      
      {/* --- FAQ Section - With Styled Heading --- */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-3xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll animate-fade-in-up">
            {/* FAQ Heading - Styled with Orange Underline */}
            <div className="flex flex-col items-center mb-4"> 
              <h2 className="text-orange-500 font-semibold text-lg uppercase tracking-widest">
                FAQ
              </h2>
              <div className="w-16 h-1 bg-orange-500 mt-2 rounded-full"></div> 
            </div>
            {/* End of FAQ Heading styling */}

            <h3 className="mt-4 text-4xl lg:text-5xl font-bold text-[#7A0C0C]">
              Frequently Asked Questions
            </h3>
            <p className="mt-6 text-lg text-gray-600">
              Quick answers to common questions.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4 animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {faqData.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left p-5 bg-gray-50 hover:bg-gray-100"
                >
                  <span className="text-lg font-semibold text-gray-800">{item.question}</span>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-[#7A0C0C] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="p-5 text-gray-600 leading-relaxed bg-white border-t border-gray-200">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
};

export default ContactPage;
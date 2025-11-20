import { Check, Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ContactUs() {
  const [result, setResult] = useState("");

  const notifySuccess = () => toast.success("File Submitted Successfully!");
  const notifySending = () => toast.warn("Submitting...");

  const handleSubmit = async (event) => {
    event.preventDefault();
    notifySending();

    const formData = new FormData(event.target);
    formData.append("access_key", "19af2c1f-ca21-4f2c-86ac-32352f17776d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        event.target.reset();
        setResult("");
        notifySuccess();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const elements = document.querySelectorAll("[data-aos='fade-up-left']");

      elements.forEach((element) => {
        if (isMobile) {
          element.removeAttribute("data-aos");
        } else {
          element.setAttribute("data-aos", "fade-up-left");
        }
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:px-20 mt-15 md:mt-20 ">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold font-new">
          Get in touch with us
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Fill out the form below or schedule a meeting with us at your
          convenience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <form id="Form-Fields" onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputField
              label="FIRST NAME"
              id="firstname"
              placeholder="First name"
            />
            <InputField
              label="LAST NAME"
              id="lastname"
              placeholder="Last name"
            />
          </div>
          <InputField
            label="EMAIL"
            id="email"
            placeholder="Enter your email"
            type="email"
          />
          <InputField
            id="phone"
            label="PHONE NUMBER"
            placeholder="Enter your phone number"
          />
          <div>
            <label className="text-xs font-semibold font-new text-gray-700">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              required
              autoComplete="off"
              rows="4"
              placeholder="Enter your message"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-500 outline-none transition"
            />
          </div>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input type="checkbox" className="w-4 h-4" />I agree with{" "}
            <a href="#" className="text-blue-600 underline">
              Terms and Conditions
            </a>
          </label>
          <button
            type="submit"
            className="w-full bg-black font-new text-white text-lg py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Send Your Request
          </button>
          {result && <span className="text-red-600">{result}</span>}
          <ToastContainer />
        </form>
        <div>
          <p className="font-semibold font-new text-lg mb-6">
            With our services you can
          </p>
          <ul className="space-y-4 text-gray-700">
            {[
              "Streamline your shipping operations with end-to-end visibility",
              "Reduce transit delays with optimized routing and smart planning",
              "Improve supply chain efficiency with real-time tracking",
              "Ensure cost-effective and reliable freight movement across borders",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-12 space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <p className="font-semibold font-new">India</p>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Ground Floor 10 , Thirumurugan Nagar Road , Madhavaram <br />
              Chennai , Tamil Nadu - 600060
            </p>
          </div>
          <div className="mt-10">
            <h4 className="font-semibold mb-4 font-new text-gray-800 text-lg">
              You can also Contact Us via
            </h4>

            <div className="flex flex-col sm:flex-row gap-6">
              <ContactItem icon={<Mail />} text="avktransglobal@gmail.com" />
              <ContactItem icon={<Phone />} text="+91 9361252587" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function InputField({ label, type = "text", id, placeholder }) {
  return (
    <div>
      <label className="text-xs font-semibold font-new text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete="off"
        placeholder={placeholder}
        className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-500 outline-none transition"
      />
    </div>
  );
}
function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

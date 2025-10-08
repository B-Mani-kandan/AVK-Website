import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowRight } from "lucide-react";
export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [result, setResult] = useState("");

  const notifySuccess = () => toast.success("File Submitted Successfully!");
  const notifySending = () => toast.warn("Submitting...");

  const handleSubmit = async (event) => {
    event.preventDefault();
    notifySending();

    const formData = new FormData(event.target);
    formData.append("access_key", "1076caf2-d2c7-4fb4-8bbe-1276b7ad2829");

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
    <section className="bg-gray-50 py-16 px-6 md:px-20 mt-15">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-5xl font-bold font-serif text-gray-900 mb-4">
            Get in — <br /> touch with us
          </h2>
          <p className="text-gray-600 mb-6">
            We’re here to help! Whether you have a question about our services,
            need assistance with your account, or want to provide feedback, our
            team is ready to assist you.
          </p>
          <div className="mb-4">
            <p className="text-gray-900 font-semibold font-serif">Email:</p>
            <p className="text-gray-600 font-sm">info@onelinkindia.com</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-900 font-semibold font-serif">Phone:</p>
            <p className="text-gray-600 font-sm">+91 22 49630280</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-900 font-semibold font-serif">Location:</p>
            <p className="text-gray-600 font-sm">
              C-110, Plot No.-13, Kukreja Centre Sector 11, CBD Belapur Navi
              Mumbai 400614
            </p>
          </div>
          <p className="text-gray-500 text-sm">
            Available Monday to Friday, 9 AM - 6 PM GMT
          </p>
        </div>
        <div className="bg-white p-8">
          <form id="Form-Fields" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Enter Your Name."
                  className="mt-1 w-full rounded-full border border-gray-300 px-4 py-3 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700  mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  autoComplete="tel"
                  placeholder="Enter Your Phone No."
                  className="mt-1 w-full rounded-full border border-gray-300 px-4 py-3  focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                placeholder="Enter Your Email Address."
                className="mt-1 w-full rounded-full border border-gray-300 px-4 py-3  focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-2">
                How can we help you?
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                required
                placeholder="Enter Your Message."
                className="mt-1 w-full rounded-2xl border border-gray-300 px-4 py-3  focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="group inline-flex items-center px-6 py-3 font-semibold text-sm clip-btn bg-[#16a3e6] font-serif cursor-pointer text-white hover:bg-[#04558c] transition"
            >
              Send Message{" "}
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </button>
            {result && <span className="error">{result}</span>}
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
}

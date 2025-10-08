import { Meteors } from "../../ui/meteors";
import { Link } from "react-router-dom";

export function SeaFreightContact() {
  return (
    <div className="flex justify-center items-center md:mt-10 py-12">
      <div className="relative w-full max-w-3xl">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full  blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-6 py-10 shadow-xl">
          <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
          <h1 className="relative z-50 mb-4 text-2xl font-bold text-white">
            Ready to Optimize Your Sea Freight?
          </h1>
          <p className="relative z-50 mb-8 text-base text-slate-400 leading-relaxed">
            We simplify complex sea freight operations with smart, reliable
            solutions tailored to your business. Our team ensures your shipments
            move faster, safer, and at the best possible cost. From booking to
            delivery, we handle every step with transparency and efficiency.
          </p>
          <Link
            to="/Contact-Us"
            className="relative z-50 rounded-lg border border-gray-500 px-6 py-2 text-gray-300 hover:bg-[#16a3e6] hover:border-0 transition"
          >
            Reach Us
          </Link>
          <Meteors number={80} />
        </div>
      </div>
    </div>
  );
}

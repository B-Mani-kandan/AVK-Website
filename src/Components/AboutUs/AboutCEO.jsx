import pic from "../../assets/pic.webp";
import Partner from "../../assets/TSG_Partner.webp";

export default function AboutCEO() {
  return (
    <section className="w-full bg-white max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-12 md:py-16">
      <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
        CEO
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-new mb-4">
        Message From Managing Director
      </h2>
      <hr className="border-gray-200 mb-8 mt-4" />
      <div className="space-y-5 text-gray-700 leading-relaxed font-new text-base sm:text-lg md:text-xl">
        <p>
          Welcome, and thank you for visiting the Transit Sync Global website.
          We deeply appreciate your time and interest in learning about our
          organization. At Transit Sync Global, we are committed to delivering
          dependable, efficient, and customer-focused logistics solutions that
          stand apart in quality and service.
        </p>

        <p>
          Our journey has always been driven by integrity, innovation, and a
          strong dedication to building long-lasting relationships with our
          clients. We believe that trust is earned through consistent
          performance, transparent communication, and delivering value in every
          service we offer. Your support motivates us to continue growing and
          setting new standards in the logistics industry.
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-8 md:flex-row md:gap-16">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
          <img
            src={pic}
            alt="Managing Director"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover"
          />
          <div>
            <p className="text-lg sm:text-xl font-new font-bold">
              – ANANTHALAKSHMI N
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Managing Director, Transit Sync Global
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
          <img
            src={Partner}
            alt="Managing Director"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover"
          />
          <div>
            <p className="text-lg sm:text-xl font-new font-bold">
              – BAJIBABU R
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Managing Director, Transit Sync Global
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

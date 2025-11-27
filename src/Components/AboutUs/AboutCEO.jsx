import pic from "../../assets/pic.jpeg";
export default function AboutCEO() {
  return (
    <section className="w-full bg-white  max-w-7xl mx-auto px-6 py-16 md:px-20">
      <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
        CEO
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold font-new mb-4">
        Message From Managing Director
      </h2>
      <hr className="border-gray-200 mb-10 mt-5" />
      <div className="space-y-6 text-gray-700 leading-relaxed font-new text-lg md:text-xl">
        <p>
          Welcome, and thank you for visiting the AVK Trans Global website. We
          deeply appreciate your time and interest in learning about our
          organization. At AVK Trans Global, we are committed to delivering
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
      <div className="mt-10 flex items-center gap-4">
        <img
          src={pic}
          alt="Managing Director"
          className="w-30 h-30 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <p className="text-xl font-new font-bold">– ANANTHALAKSHMI N</p>
          <p className="text-gray-500 text-sm px-3 mt-2">
            Managing Director, AVK Trans Global
          </p>
        </div>
      </div>
    </section>
  );
}

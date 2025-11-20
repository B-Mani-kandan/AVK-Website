const HomeAbout = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-16 md:px-20 md:mt-10  AboutContent">
      <div>
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          ABOUT US
        </p>
        <h2 className="text-5xl font-bold text-[#7c0204] leading-tight font-new">
          Delivering <br />
          Excellence in <br />
          Every Shipment
        </h2>
      </div>
      <div className="space-y-10">
        <div className="border-t border-gray-300 pt-8">
          <h3 className="text-xl font-bold uppercase mb-2 font-new">
            Who We Are
          </h3>
          <p className="text-gray-800 text-xl">
            We are a dedicated logistics company committed to providing reliable
            and efficient cargo transportation solutions. Our team of
            professionals ensures that your shipments reach their destinations
            safely and on time.
          </p>
        </div>
        <hr className="border-t border-gray-300" />
        <div>
          <h3 className="text-xl font-bold uppercase mb-2 font-new">
            Our Mission
          </h3>
          <p className="text-gray-800 text-xl">
            Our mission is to deliver excellence in every shipment by leveraging
            innovative technology, prioritizing customer needs, and maintaining
            transparent communication. We strive to exceed expectations and
            build lasting relationships with our clients.
          </p>
        </div>
        <hr className="border-t border-gray-300" />
        <div>
          <h3 className="text-xl font-bold uppercase mb-2 font-new">
            Our Commitment
          </h3>
          <p className="text-gray-800 text-xl">
            We are committed to sustainability and eco-friendly practices,
            actively working to reduce our environmental impact. We uphold the
            highest standards of integrity and professionalism in all our
            operations, ensuring peace of mind for our customers.
          </p>
        </div>
        <hr className="border-t border-gray-300" />
      </div>
    </section>
  );
};

export default HomeAbout;

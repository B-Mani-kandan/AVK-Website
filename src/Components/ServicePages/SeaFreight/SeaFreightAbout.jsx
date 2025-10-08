import seaFrieght from "../../../assets/Common/SeaFreight.webp";
import oceanTrans_1 from "../../../assets/SeaFreight/oceanTrans_1.webp";
import oceanTrans_2 from "../../../assets/SeaFreight/oceanTrans_2.webp";
const SeaFreightAbout = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 mt-20 bg-white">
        <div className="flex flex-col justify-between">
          <h4 className="font-bold text-sm tracking-wide font-serif">
            01. LCL CORE
          </h4>
          <img
            src={seaFrieght}
            alt="Container transport"
            className="rounded-lg shadow-md self-end"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-2xl font-bold font-serif text-gray-900 leading-snug mb-4">
            Navigating the World of Transportation Services: An Essential Guide
            for Modern Logistics.
          </h2>
          <img
            src={oceanTrans_1}
            alt="Ship logistics"
            className="rounded-lg shadow-md mb-6"
          />
          <div className="">
            <div>
              <h3 className="text-[#16a3e6] font-semibold mb-2">
                Why LCL Is Our Core
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unlike standard freight forwarders who treat LCL as an add-on,
                we have built our reputation and global recognition on mastering
                the complexities and nuances of LCL shipping. With strategic
                hubs in major port cities, we optimize every shipment.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <img
            src={oceanTrans_2}
            alt="Truck logistics"
            className="rounded-lg shadow-md"
          />
          <p className="text-gray-600 text-sm leading-relaxed">
            At the heart of our services lies Less-than-Container Load (LCL) — a
            solution built for flexibility, efficiency, and cost-effectiveness.
          </p>
        </div>
      </div>
    </>
  );
};

export default SeaFreightAbout;

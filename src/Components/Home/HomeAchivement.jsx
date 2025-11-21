import HangeContainer from "../../assets/HangContiner.webp";
import Australia from "../../assets/Flags/AustaliaFlag.png";
import Europe from "../../assets/Flags/EuropeFlag.png";
import Indonesia from "../../assets/Flags/IndonesiaFlag.png";
import Malasiya from "../../assets/Flags/MalasiyaFlag.png";
import NewsZland from "../../assets/Flags/NewsZlandFlag.png";
import Portugal from "../../assets/Flags/PortugalFlag.png";
import Singapore from "../../assets/Flags/SingaporeFlag.png";
import SouthAfrica from "../../assets/Flags/SouthAfricaFlag.png";

export default function HomeAchivement() {
  const exportCountries = [
    { name: "Europe", flag: Europe },
    { name: "Malaysia", flag: Malasiya },
    { name: "Australia", flag: Australia },
    { name: "New Zealand", flag: NewsZland },
    { name: "Singapore", flag: Singapore },
    { name: "Indonesia", flag: Indonesia },
    { name: "South Africa", flag: SouthAfrica },
  ];

  const importCountries = [
    { name: "Portugal", flag: Portugal },
    { name: "Africa", flag: SouthAfrica },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:px-20  font-new ">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-4xl font-semibold leading-snug text-[#7c0204]">
          Our Achievements Made Us <br /> Well Known Through
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center px-4 gap-10">
        <div className="flex flex-col items-center md:items-end gap-10">
          <div className="text-center md:text-right">
            <p className="text-5xl font-bold mb-4">50+</p>
            <p className="text-gray-600 text-sm">Daily Shipments</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-5xl font-bold mb-4">50+</p>
            <p className="text-gray-600 text-sm">Trusted Clients</p>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={HangeContainer}
            alt="Container"
            className="w-64 md:w-72 lg:w-80"
          />
        </div>
        <div className="flex flex-col items-center md:items-start gap-10">
          <div className="text-center md:text-left">
            <p className="text-5xl font-bold mb-4">10+</p>
            <p className="text-gray-600 text-sm">Countries Connected</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-5xl font-bold mb-4">50+</p>
            <p className="text-gray-600 text-sm">Successful Projects</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20 px-4">
        <h3 className="text-2xl font-semibold text-[#7c0204] mb-6">
          Export Countries
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {exportCountries.map((c, i) => (
            <div
              key={i}
              className="border bg-[#f7f5f5] rounded-lg p-6 flex flex-col items-center shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden  mb-4">
                <img
                  src={c.flag}
                  alt={c.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-lg font-medium">{c.name}</p>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-semibold text-[#7c0204] mb-6">
          Import Countries
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {importCountries.map((c, i) => (
            <div
              key={i}
              className="border bg-[#f7f5f5] rounded-lg p-6 flex flex-col items-center shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <img
                  src={c.flag}
                  alt={c.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-lg font-medium">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

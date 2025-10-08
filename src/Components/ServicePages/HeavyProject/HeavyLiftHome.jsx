import DynamicButton from "../../Buttons/DynamicButton";
import HeavyLift from "../../../assets/HeavyLift/HeavyLift.webp";

export default function HeavyLiftHome() {
  return (
    <section className="relative text-black font-sans md:mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-16 relative">
        {/* Top Section */}
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="uppercase font-extrabold leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-5xl">
              <span className="text-black block">
                <span className="text-[#16a3e6]">Heavy Lift</span> Solutions
              </span>
              <span className="block">Safe &amp; Reliable</span>
              For Every<span className="text-[#16a3e6] "> Project</span>
            </h1>
          </div>

          {/* Review Card */}
          <div className="col-span-12 lg:col-span-5 flex lg:justify-end lg:mt-0">
            <div className="bg-[#16a3e6] text-white w-72 rounded-tr-xl rounded-bl-xl shadow-lg p-5">
              <div className="flex -space-x-2 mb-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="client1"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="client2"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  alt="client3"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <div className="w-8 h-8 rounded-full bg-black text-[#16a3e6] flex items-center justify-center text-sm font-bold border-2 border-white">
                  +
                </div>
              </div>
              <h4 className="font-extrabold text-lg font-serif">
                10k+ Trusted Clients
              </h4>
              <p className="text-sm text-gray-300 mt-2 leading-snug">
                Delivering lifting & transport services with top safety
                standards and customer trust worldwide.
              </p>
              <a
                href="#"
                className="mt-3 block text-sm font-semibold underline"
              >
                Read success stories
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 items-center mt-20">
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="bg-[#16a3e6] relative h-[340px] flex items-end bord justify-center p-6">
              <img
                src={HeavyLift}
                alt="heavy lift crane"
                className="h-[410px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <p className="text-gray-500 leading-relaxed">
              At HeavyLift Services, we provide advanced lifting and transport
              solutions that ensure efficiency, safety, and reliability across
              industries. From oversized cargo to critical infrastructure, our
              fleet and expertise deliver results every time.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <DynamicButton text={"Get Started"} />
            </div>
            <div className="flex md:gap-18 gap-5 mt-12">
              <div>
                <p className="text-5xl font-extrabold">
                  500<span className="text-[#16a3e6]">+</span>
                </p>
                <p className="text-sm uppercase mt-3 text-gray-400">
                  Projects Completed
                </p>
              </div>
              <div>
                <p className="text-5xl font-extrabold">
                  98<span className="text-[#16a3e6]">%</span>
                </p>
                <p className="text-sm uppercase mt-3 text-gray-400">
                  Client Satisfaction
                </p>
              </div>
              <div>
                <p className="text-5xl font-extrabold">
                  10<span className="text-[#16a3e6]">+</span>
                </p>
                <p className="text-sm uppercase mt-3 text-gray-400">
                  Years of Expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

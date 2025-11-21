import { Link } from "react-router-dom";
import FooterHero from "./FooterHero";
import Logo from "../../assets/Avk_Logo.webp";
import { useLocation } from "react-router-dom";
export default function Footer() {
  const footerLinks = {
    "Quick links": [
      { name: "Pricing", to: "/pricing" },
      { name: "Resources", to: "/resources" },
      { name: "About us", to: "/about" },
      { name: "FAQ", to: "/faq" },
      { name: "Contact us", to: "/contact" },
    ],
    Social: [
      { name: "Facebook", to: "/facebook" },
      { name: "Instagram", to: "/instagram" },
      { name: "LinkedIn", to: "/linkedin" },
      { name: "Twitter", to: "/twitter" },
      { name: "Youtube", to: "/youtube" },
    ],
    Legal: [
      { name: "Terms of service", to: "/terms" },
      { name: "Privacy policy", to: "/privacy" },
      { name: "Cookie policy", to: "/cookies" },
    ],
  };
  const location = useLocation();
  const showHero = location.pathname !== "/Contact-Us";
  return (
    <>
      {/* {showHero && <FooterHero />} */}
      <footer
        className={`bg-[#052138] text-gray-300 px-6 md:px-16 lg:px-24 py-14
          ${showHero ? "-mt-40" : ""}  
        `}
      >
        <div
          className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10
            ${showHero ? "mt-50" : ""}
          `}
        >
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={Logo} alt="Company Logo" className="w-22 h-10" />
              <span className="text-white text-2xl font-semibold font-new">
                Trans Global
              </span>
            </div>
            <div className="space-y-1 text-sm leading-relaxed">
              <p>Ground Floor 10</p>
              <p>Thirumurugan Nagar Road</p>
              <p>Madhavaram, Chennai</p>
              <p>Tamil Nadu - 600060</p>
            </div>
            <div className="grid grid-cols-3 mt-6 text-sm">
              <div>
                <h4 className="text-white font-medium mb-1">Phone number</h4>
                <p>+91 9361252587</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email</h4>
                <p>avktransglobal@gmail.com</p>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="https://invosys.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <h2 className="text-white font-bold text-xl mb-1 font-new">
                  Developed by <span className="text-yellow-400">Invosys</span>
                </h2>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 text-sm">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="space-y-3">
                <h4 className="text-white font-semibold font-new mb-5">
                  {section}
                </h4>

                {links.map((link, i) => (
                  <Link
                    key={i}
                    to={link.to}
                    className="block hover:text-white font-new cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center text-gray-400 text-xs mt-10">
          © {new Date().getFullYear()} Avk Trans Global. All rights reserved.
        </div>
      </footer>
    </>
  );
}

import { useState, useEffect } from "react";
import "./NavBar.css";
import "remixicon/fonts/remixicon.css";
// import PFLLogo from "../../assets/HomeImages/PFLLogo.webp";
import { Link } from "react-router-dom";
import Logo from "../../assets/Common/Logo.webp";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1118) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="header">
      <nav className="nav containers">
        <div className="nav__data">
          <Link to="/" className="nav__logo" onClick={closeMenu}>
            <img src={Logo} alt="" />
          </Link>
          <div
            className={`nav__toggle ${showMenu ? "show-icon" : ""}`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <i className="ri-menu-line nav__toggle-menu"></i>
            <i className="ri-close-line nav__toggle-close"></i>
          </div>
        </div>
        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li>
              <Link to="/" className="nav__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/About-Us" className="nav__link" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <Dropdown
              title="Services"
              items={discoverItems}
              closeMenu={closeMenu}
            />
            <li>
              <Link to="/Contact-Us" className="nav__link" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const Dropdown = ({ title, items, closeMenu }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1118px)");
    const handleMediaChange = (event) => {
      if (event.matches) {
        setShowDropdown(false);
      }
    };
    mediaQuery.addListener(handleMediaChange);
    return () => mediaQuery.removeListener(handleMediaChange);
  }, []);

  return (
    <li
      className="dropdown__item"
      onMouseEnter={() => window.innerWidth >= 1118 && setShowDropdown(true)}
      onMouseLeave={() => window.innerWidth >= 1118 && setShowDropdown(false)}
    >
      <div
        className="nav__link dropdown__button"
        onClick={() =>
          window.innerWidth < 1118 && setShowDropdown(!showDropdown)
        }
      >
        {title}{" "}
        <i
          className={`ri-arrow-down-s-line dropdown__arrow ${
            showDropdown ? "rotate" : ""
          }`}
        ></i>
      </div>
      <div
        className={`dropdown__container ${showDropdown ? "show-dropdown" : ""}`}
      >
        <div className="dropdown__content">
          {items.map((group, index) => (
            <div className="dropdown__group" key={index}>
              <ul className="dropdown__list">
                {group.links.map((link, idx) => (
                  <li key={idx} className="dropdown_li">
                    <Link
                      to={link.href}
                      className="dropdown__link"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

const discoverItems = [
  {
    links: [
      { href: "/Ocean-Freight-Services", label: "Sea Freight" },
      { href: "/Air-Freight-Services", label: "Air Freight" },
      { href: "/Heavy-Lift-Cargo", label: "Heavy Lift Cargo" },
    ],
  },
];

export default NavBar;

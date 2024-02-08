import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const [menuVisible, setMenuVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClick = (to) => {
    if (location.pathname === to) {
      scrollToTop();
    }
  };

  const navToggle = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <nav>
        <div className="navbar flex justify-end">
          <div>
            <Link to="/home" onClick={() => handleClick("/home")}>
              <img
                src="src/assets/e-logo.svg"
                className="w-12"
                alt="Enysite Logo"
              />
            </Link>
          </div>
          <div>
            <span
              onClick={navToggle}
              className="cursor-pointer block material-symbols-outlined text-5xl sm:hidden"
            >
              menu
            </span>
            <ul className="sm:flex flex-col sm:flex-row sm:relative justify-end gap-10 items-center text-lg font-light nav-menu">
              <li>
                <Link to="/home" onClick={() => handleClick("/home")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => handleClick("/services")}>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => handleClick("/contact")}
                  className="cursor-pointer sm:p-3 sm:px-12 sm:bg-lightblue sm:text-white sm:rounded-full sm:border sm:border-black"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

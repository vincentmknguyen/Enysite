import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/e-logo.svg";
import "./NavBar.css";

const Nav = () => {
  const [isResponsiveNav, setResponsiveNav] = useState(false);

  const toggleNav = () => {
    setResponsiveNav(!isResponsiveNav);
  };
  return (
    <header>
      <nav className="flex items-center justify-between">
        <Link to="/home" onClick={() => handleClick("/home")}>
          <img src={logo} className="w-12 nav-logo logo" alt="Enysite" />
        </Link>
        <ul className="hidden sm:flex gap-10 items-center text-lg font-light main-nav">
          <li className="hover:text-gray-600 duration-200">
            <Link to="/home" onClick={() => handleClick("/home")}>
              Home
            </Link>
          </li>
          <li className="hover:text-gray-600 duration-200">
            <Link to="/services" onClick={() => handleClick("/services")}>
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => handleClick("/contact")}
              className="cursor-pointer sm:p-3 sm:px-12 bg-mainblue text-white sm:rounded-full sm:border sm:border-black"
            >
              Contact
            </Link>
          </li>
          <li className="sm:hidden">
            <span className="text-black cursor-pointer block material-symbols-outlined text-5xl">
              close
            </span>
          </li>
        </ul>
        <ul
          className={`${
            isResponsiveNav ? "responsive-nav" : ""
          } px-8 py-8 sm:hidden bg-mainblue flex flex-col gap-6 text-7xl font-bold text-darkblue mobile-nav`}
        >
          <li>
            {" "}
            <img
              onClick={toggleNav}
              src={logo}
              className="w-12 cursor-pointer logo"
              alt="Enysite"
            />
          </li>

          <li className="hover:text-white duration-200">
            <Link to="/home" onClick={() => handleClick("/home")}>
              Home
            </Link>
          </li>
          <li className="hover:text-white duration-200">
            <Link to="/services" onClick={() => handleClick("/services")}>
              Services
            </Link>
          </li>
          <li className="hover:text-white duration-200">
            <Link
              to="/contact"
              onClick={() => handleClick("/contact")}
              className="cursor-pointer sm:p-3 sm:px-12 sm:bg-lightblue sm:text-white sm:rounded-full sm:border sm:border-black"
            >
              Contact
            </Link>
          </li>
          <li className="sm:hidden">
            <span
              onClick={toggleNav}
              className="absolute top-6 right-6 text-darkblue cursor-pointer block material-symbols-outlined text-6xl font-light hover:text-white duration-200"
            >
              close
            </span>
          </li>
        </ul>

        <span
          onClick={toggleNav}
          className="sm:hidden text-black cursor-pointer block material-symbols-outlined text-5xl hover:text-gray-600 duration-200"
        >
          menu
        </span>
      </nav>
    </header>
  );
};

export default Nav;

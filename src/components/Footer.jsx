import { Link } from "react-router-dom";
import logo from "../assets/e-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-lightblue px-8 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-24 text-white">
      <div className="flex sm:justify-between gap-8">
        <div className="flex flex-col gap-4">
          <img
            className="w-24 sm:w-32"
            rel="preload"
            src={logo}
            alt="Enysite logo"
          />
          <div className="text-sm sm:text-md md:text-lg flex flex-col gap-1">
            <p>enysitewebdesigns@gmail.com</p>
            <p>+1 408-646-1221</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="border-b border-white w-9/12">
            <h4 className="text-2xl mb-2">Links</h4>
          </div>

          <ul className="text-lg flex flex-col gap-2">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="hidden sm:flex flex-col gap-6 w-full">
          <div className="border-b border-white w-9/12">
            <h4 className="text-2xl mb-2">Services</h4>
          </div>

          <ul className="text-lg flex flex-col gap-2">
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Website Maintenance</li>
            <li>SEO Optimization</li>
            <li>Logos and Graphics</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

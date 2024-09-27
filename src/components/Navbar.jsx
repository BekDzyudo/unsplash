import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/globalContext";
// icon heart
import { FaHeart } from "react-icons/fa";
import { FcStackOfPhotos } from "react-icons/fc";

// rrd
function Navbar() {
  const { likeImageArr } = useContext(GlobalContext);
  return (
    <header className="py-5 bg-slate-400">
      <div className="navbar flex justify-between items-center align-elements">
        <div className="navbar-start">
          <Link>
            <FcStackOfPhotos className="text-4xl hidden md:flex" />
          </Link>
          <Link className="dropdown">
            <FcStackOfPhotos className="text-4xl md:hidden" />
            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <Link to="/" className="font-medium hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-medium hover:text-black">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-medium hover:text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </Link>
        </div>
        <nav className="hidden md:flex navbar-center">
          <ul className="flex gap-5 items-center">
            <li>
              <Link
                to="/"
                className="text-white font-medium hover:text-slate-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white font-medium hover:text-slate-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white font-medium hover:text-slate-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className="text-white font-medium hover:text-slate-200 navbar-end">
          <Link to="/likes" className="flex relative top-0 left-0 py-2 pr-3">
            <FaHeart className="text-red-700 text-lg" />
            <span className="absolute top-0 right-0 text-sm">
              {likeImageArr.length}
            </span>
          </Link>
        </button>
      </div>
    </header>
  );
}

export default Navbar;

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/globalContext";
// icon heart
import { FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

// rrd
function Navbar() {
  const { likeImageArr } = useContext(GlobalContext);
  const [active, setActive] = useState(false);
  return (
    <header className="py-5 bg-slate-400">
      <div className="flex justify-between items-center align-elements">
        <Link className="text-white text-3xl">Logo</Link>
        <nav className="hidden md:flex">
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
            <li>
              <Link
                to="/likes"
                className="flex relative top-0 left-0 py-2 pr-3"
              >
                <FaHeart className="text-red-700 text-lg" />
                <span className="absolute top-0 right-0 text-sm">
                  {likeImageArr.length}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => {
            setActive(!active);
          }}
          className="text-white font-medium hover:text-slate-200 md:hidden"
        >
          {active ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <GiHamburgerMenu className="text-2xl" />
          )}
        </button>
      </div>
      {active && (
        <div className="modalContainer h-screen bg-slate-400 z-10 w-full fixed flex justify-center items-center">
          <div className="menuModal w-full">
            <ul className="flex flex-col gap-7 items-center">
              <li>
                <Link
                  onClick={() => {
                    setActive(false);
                  }}
                  to="/"
                  className="text-black font-medium text-xl hover:text-slate-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setActive(false);
                  }}
                  to="/about"
                  className="text-black font-medium text-xl hover:text-slate-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setActive(false);
                  }}
                  to="/contact"
                  className="text-black font-medium text-xl hover:text-slate-500"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setActive(false);
                  }}
                  to="/likes"
                  className="flex relative top-0 left-0 py-2 pr-3"
                >
                  <FaHeart className="text-red-700 text-2xl" />
                  <span className="absolute top-0 right-0 text-sm">
                    {likeImageArr.length}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

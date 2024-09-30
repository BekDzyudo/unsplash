import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/globalContext";
// icon heart
import { FaHeart, FaMoon, FaSun } from "react-icons/fa";
import { FcStackOfPhotos } from "react-icons/fc";

function themeLocalStorage() {
  return localStorage.getItem("theme") || "winter";
}

function Navbar() {
  const { likeImageArr } = useContext(GlobalContext);

  const [theme, setTheme] = useState(themeLocalStorage());
  const toogleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="py-3 bg-base-300">
      <div className="navbar flex justify-between items-center align-elements">
        <div className="navbar-start">
          <Link>
            <FcStackOfPhotos className="text-6xl hidden md:flex" />
          </Link>
          <Link className="dropdown">
            <FcStackOfPhotos className="text-6xl md:hidden" />
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
              <Link to="/" className="font-medium hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-medium hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="font-medium hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="navbar-end flex items-center gap-4">
          <Link to="/likes">
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">
                {likeImageArr.length}
              </span>
              <FaHeart className="text-red-70 text-3xl m-1" />
            </div>
          </Link>
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={toogleTheme} />

            {/* sun icon */}
            <FaSun className="swap-on h-7 w-7 fill-current" />

            {/* moon icon */}
            <FaMoon className="swap-off h-7 w-7 fill-current" />
          </label>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

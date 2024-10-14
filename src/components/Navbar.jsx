import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../context/globalContext";
// icon heart
import { FaDownload, FaHeart, FaMoon, FaSun } from "react-icons/fa";
import { FcStackOfPhotos } from "react-icons/fc";

// firebase imports
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

function themeLocalStorage() {
  return localStorage.getItem("theme") || "winter";
}

function Navbar() {
  const { likeImageArr, downloadImagesArr, user, dispatch } =
    useContext(GlobalContext);

  const [theme, setTheme] = useState(themeLocalStorage());
  const toogleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      toast.success("See you soon");

      dispatch({ type: "LOGOUT" });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="bg-base-300 py-3">
      <div className="align-elements navbar flex items-center justify-between">
        <div className="navbar-start">
          <Link>
            <FcStackOfPhotos className="hidden text-6xl md:flex" />
          </Link>
          <Link className="dropdown">
            <FcStackOfPhotos className="text-6xl md:hidden" />
            <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
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
        <nav className="navbar-center hidden md:flex">
          <ul className="flex items-center gap-5">
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
        <div className="navbar-end flex items-center gap-3 md:gap-4">
          <Link to="/download-images">
            <div className="indicator">
              <span className="badge indicator-item badge-secondary">
                {downloadImagesArr.length}
              </span>
              <FaDownload className="text-red-70 m-1 text-xl md:text-3xl" />
            </div>
          </Link>
          <Link to="/likes">
            <div className="indicator">
              <span className="badge indicator-item badge-secondary">
                {likeImageArr.length}
              </span>
              <FaHeart className="text-red-70 m-1 text-xl md:text-3xl" />
            </div>
          </Link>
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={toogleTheme} />

            {/* sun icon */}
            <FaSun className="swap-on h-5 w-5 fill-current md:h-7 md:w-7" />

            {/* moon icon */}
            <FaMoon className="swap-off h-5 w-5 fill-current md:h-7 md:w-7" />
          </label>
          {/* dropdown Avatar */}
          <div className="hidden items-center gap-1 md:flex">
            {/* <p>{user.displayName && user.displayName.split(" ")[0]}</p> */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar btn btn-circle btn-ghost"
              >
                <div className="w-10 rounded-full">
                  {user.photoURL && (
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL}
                    />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
                <li>
                  <button onClick={signOutUser}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

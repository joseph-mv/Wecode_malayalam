import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMapMarkedAlt,
  faBook,
  faInfoCircle,
  faUniversity,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className=" flex p-3 h-20  justify-between items-center ">
      <div className="">
        <img style={{ width: "50px", height: "auto" }} src="images/logo.png" alt="logo" />
      </div>
      <button className="md:hidden relative z-20 w-[30px]  h-[20px]">
        <label
          className="flex  label flex-col gap-1  w-[30px]  h-[20px] "
          htmlFor="burger"
        >
          <input
            className="hidden peer"
            type="checkbox"
            id="burger"
            onChange={toggleMenu}
          />
          <span className="absolute top-0 block h-[4px] w-full origin-left transition-all bg-black peer-checked:rotate-45 peer-checked:left-[4.5px]"></span>
          <span className="absolute top-[50%] block h-[4px] w-full  bg-black peer-checked:bg-transparent"></span>
          <span className="absolute top-[100%]  block h-[4px]  w-full origin-left transition-all bg-black peer-checked:-rotate-45 peer-checked:left-[4.5px] peer-checked:top-[21px]"></span>
        </label>
      </button>
      <nav
        className={`md:flex-row md:relative md:right-0  gap-3 font-bold flex flex-col ${
          isOpen
            ? "fixed z-10 text-white  h-[100vh] top-2 rounded pt-[60px] transition-all  right-0 w-[200px]  gap-4 flex backdrop-blur-sm  p-2   md:h-auto md:w-auto md:top-0 md:bg-transparent md:backdrop-sepia-0"
            : "fixed -right-[200px] transition-all"
        }`}
      >
        <Link
          className="link flex items-center gap-2 p-2 hover:scale-105 "
          to="/"
        >
          <FontAwesomeIcon icon={faHome} className="text-xl" />
          <span>Home</span>
        </Link>
        <Link
          className="link flex items-center gap-2 p-2 hover:scale-105 "
          to="/destinations"
        >
          <FontAwesomeIcon icon={faMapMarkedAlt} className="text-xl" />
          <span>Events</span>
        </Link>
        <Link
          className="link flex items-center gap-2 p-2 hover:scale-105 "
          to="/trips"
        >
          <FontAwesomeIcon icon={faBook} className="text-xl" />
          <span>Resources</span>
        </Link>
        <Link
          className="link flex items-center gap-2 p-2 hover:scale-105 "
          to="/about"
        >
          <FontAwesomeIcon icon={faInfoCircle} className="text-xl" />
          <span>Discussions</span>
        </Link>
        <Link
          className="link flex items-center gap-2 p-2 hover:scale-105 "
          to="/contact"
        >
          <FontAwesomeIcon icon={faUniversity} className="text-xl" />
          <span>Colleges</span>
        </Link>
        <Link
          className="link flex items-center gap-2 p-2 hover:scale-105 "
          to="/account"
        >
          <FontAwesomeIcon icon={faUser} className="text-xl" />
          <span>Account</span>
        </Link>
      </nav>
    </header>
  );
};

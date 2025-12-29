import Logo from "../assets/appverse-logo.png";
import { Link, NavLink } from "react-router-dom";
import { Github, HomeIcon, Menu, LayoutGrid, MonitorDown } from "lucide-react";

const Header = () => {
  const baseClass =
    "inline-flex text-sm font-medium py-1 gap-1.5 items-center transition-all duration-200";
  const activeClass = "text-indigo-500 border-b-2 border-indigo-500";
  const inactiveClass = "text-neutral-700 border-b-2 border-transparent";
  return (
    <div className="bg-base-100 px-4 py-2 md:px-6 md:py-3 flex justify-center shadow-2xs">
      <div className="w-full flex justify-between items-center max-w-350">
        <div className="flex items-center gap-x-4">
          <div className="block md:hidden">
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
            {/* For TSX uncomment the commented types below */}
            <button
              className="p-2 rounded-full transition-all hover:bg-gray-50 focus:bg-gray-50"
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
            >
              <Menu className="size-5 stroke-2 stroke-neutral-800" />
            </button>

            <ul
              className="dropdown menu w-52 mt-2 rounded-box bg-base-100 shadow-sm"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
              }
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${baseClass} ${isActive ? activeClass : inactiveClass}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <HomeIcon
                        className={`h-4 w-4 stroke-2 ${
                          isActive ? "stroke-indigo-500" : "stroke-neutral-700"
                        }`}
                      />
                      Home
                    </>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/apps"
                  className={({ isActive }) =>
                    `${baseClass} ${isActive ? activeClass : inactiveClass}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <LayoutGrid
                        className={`h-4 w-4 stroke-2 ${
                          isActive ? "stroke-indigo-500" : "stroke-neutral-700"
                        }`}
                      />
                      Apps
                    </>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/installation"
                  className={({ isActive }) =>
                    `${baseClass} ${isActive ? activeClass : inactiveClass}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <MonitorDown
                        className={`h-4 w-4 stroke-2 ${
                          isActive ? "stroke-indigo-500" : "stroke-neutral-700"
                        }`}
                      />
                      My Installation
                    </>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
          <Link className="flex items-center gap-2" to="/">
            <img className="h-7 md:h-9" src={Logo} alt="logo" />
            <h2 className="text-lg md:text-xl font-semibold text-neutral-800">
              AppVerse
            </h2>
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {/* Home Link */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : inactiveClass}`
                }
              >
                {({ isActive }) => (
                  <>
                    <HomeIcon
                      className={`h-4 w-4 stroke-2 ${
                        isActive ? "stroke-indigo-500" : "stroke-neutral-700"
                      }`}
                    />
                    Home
                  </>
                )}
              </NavLink>
            </li>

            {/* Apps Link */}
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : inactiveClass}`
                }
              >
                {({ isActive }) => (
                  <>
                    <LayoutGrid
                      className={`h-4 w-4 stroke-2 ${
                        isActive ? "stroke-indigo-500" : "stroke-neutral-700"
                      }`}
                    />
                    Apps
                  </>
                )}
              </NavLink>
            </li>

            {/* My Installation Link */}
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : inactiveClass}`
                }
              >
                {({ isActive }) => (
                  <>
                    <MonitorDown
                      className={`h-4 w-4 stroke-2 ${
                        isActive ? "stroke-indigo-500" : "stroke-neutral-700"
                      }`}
                    />
                    My Installation
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-x-8">
          <Link to="https://github.com/abrarmahabub125" target="_blank">
            <button className="inline-flex gap-1 text-white text-sm font-medium cursor-pointer items-center bg-linear-to-l px-2.5 py-1.5 md:px-3 rounded-md md:py-2 from-violet-500 to-indigo-500">
              <Github className="size-3.5 md:size-4 stroke-2 stroke-white" />
              Contribute
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

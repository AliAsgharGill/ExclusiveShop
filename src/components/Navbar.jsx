import { Link, NavLink } from "react-router-dom";
import SearchBar from "./Serach/Search";
const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="text-black text-2xl font-bold font-['Inter'] leading-normal tracking-wide">
              Exclusive
            </span>
          </NavLink>
          {/* Links */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <NavLink
                  to="/"
                  className="text-center text-black text-base font-normal font-['Poppins'] leading-normal hover:underline"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <Link
                  to="products"
                  className="text-center text-black text-base font-normal font-['Poppins'] leading-normal hover:underline"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
          {/* serach bar */}
          <div className="flex md:order-2">
            <SearchBar />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { TbShoppingBag } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import NikeLogo from "../assets/nike-logo.svg?react";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
const Nav = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>

      {/* Burger button */}
      <button
        className="hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200 rounded-lg lg:hidden"
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}
      <div
        className={`w-full lg:w-auto lg:block ${
          !isMobileMenuShown && "hidden"
        }`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 text-lg border border-gray-100 lg:border-none lg:bg-transparent rounded-lg p-4">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`rounded py-2 px-3 cursor-pointer ${
                  i === 0
                    ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                    : "hover:bg-gray-100"
                }`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cart button */}
      <div className="fixed left-4 bottom-4 lg:static">
        <div className="rounded-full bg-white shadow-md h-12 w-12 flex-center">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

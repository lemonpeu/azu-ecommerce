import { useState } from "react";
import Link from "next/link";

const navItems = ["Inicio", "Contacto", "Sobre mi", "Registrarse"];

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="p-2 mb-2 md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <Link href="/"><span className="text-2x1 cursor-pointer">Magic Blend</span></Link>
        <button
          className="text-3xl cursor-pointer md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      <ul className={`md:flex md:items-center md:z-auto md:static absolute bg-white w-full left-0  md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ${showMenu ? "top-[50px] opacity-100" : ""}`}>
        {navItems.map((item) => (
          <li className="mx-4 my-6 md:my-0">
            <a className="bottom-2 hover:bg-[#C1DCDC] duration-500">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

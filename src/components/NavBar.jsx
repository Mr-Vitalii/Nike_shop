import React from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState } from "react";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    document.body.style.overflow = open ? "auto" : "hidden";
  };
  return (
    <header className="shadow-md w-full fixed top-0 left-0 z-30">
      <nav className="md:flex bg-white items-center justify-between padding-x py-8 ">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
        </div>
        <div
          onClick={toggleMenu}
          className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu-outline"}></ion-icon>
        </div>
        <ul
          className={`bg-white pb-12 pt-5 left-0 w-full absolute z-[-1] transition-all duration-500 ease-in flex flex-col items-center md:pt-0 md:gap-12 md:flex-row md:justify-start sm:items-start sm:padding-l md:pl-0 md:pb-0 md:static md:z-auto md:h-auto md:w-auto lg:gap-16 ${
            open ? "top-[95px]" : "top-[-790px]"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.label} className="my-7 md:my-0 text-xl ">
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-red-500 duration-500"
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

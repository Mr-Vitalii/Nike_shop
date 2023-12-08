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
    <header className="shadow-md w-full fixed top-0 left-0 z-30   ">
      <nav className="md:flex bg-white items-center justify-between padding-x py-8 ">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 ">
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
          className={`md:flex md:items-center pb-12 padding-l md:pl-0 md:pb-0 absolute md:static bg-blue md:z-auto z-[-1] left-0 w-full h-screen md:h-auto md:w-auto transition-all duration-500 ease-in flex-1 justify-center items-center gap-12 lg:gap-16 ${
            open ? "top-[65px]" : "top-[-490px]"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.label} className="my-7 md:my-0 text-xl ">
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-red-500 duration-500"
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

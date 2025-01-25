'use client';

import { assets } from '@/assest/assets';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Track menu open/close state
  const sideMenuRef = useRef(null);

  const openMenu = () => {
    console.log('Menu opened'); // Debugging
    setMenuOpen(true); // Set menu open state
  };

  const closeMenu = () => {
    console.log('Menu closed'); // Debugging
    setMenuOpen(false); // Set menu closed state
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="header-bg-color" className="w-full h-20" />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="#top">
          <Image src={assets.logo} alt="logo" className="w-28 cursor-pointer mr-14" />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About</a></li>
          <li><a className="font-Ovo" href="#projects">Projects</a></li>
          <li><a className="font-Ovo" href="#contact">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="moon-icon" className="w-6" />
          </button>
          <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo">
            Contact Me <Image src={assets.arrow_icon} alt="right-arrow" className="w-3" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="menu-icon" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className={`md:hidden gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 ${
            menuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
          style={{ right: 0 }} // Ensures the menu is aligned to the right side
        >
          <div className="absolute top-5 right-5" onClick={closeMenu}>
            <Image src={assets.close_black} alt="close-icon" className="w-6 cursor-pointer" />
          </div>
          <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#about">About</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#projects">Projects</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

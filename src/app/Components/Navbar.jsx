// components/Navbar.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-white shadow-md px-4 py-2 w-full">
      {/* Logo */}
      <Link href="/" className="font-bold pl-6 text-xl">
        Avion
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-5 items-center text-lg font-serif">
        <Link href="/about" className="hover:text-[#2A254B] ">About</Link>
        <Link href="/blogs" className="hover:text-[#2A254B] ">Blogs</Link>
        <Link href="/contact" className="hover:text-[#2A254B] ">Contact Us</Link>
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex space-x-4">
        <Link href="/search">
          <FaSearch className="hover:text-[#2A254B]" />
        </Link>
        <Link href="/cart">
          <FaShoppingCart className="hover:text-[#2A254B]" />
        </Link>
        <Link href="/profile">
          <FaUser className="hover:text-[#2A254B]" />
        </Link>
      </div>

      {/* Mobile Icons */}
      <div className="flex md:hidden space-x-4 items-center">
        <Link href="/search">
          <FaSearch className="hover:text-[#2A254B]" />
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-12 left-0 w-full bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col py-4 pl-6 space-y-3">
          <Link href="/about" className="py-2 text-lg hover:text-[#2A254B]">About</Link>
          <Link href="/blogs" className="py-2 text-lg hover:text-[#2A254B]">Blogs</Link>
          <Link href="/contact" className="py-2 text-lg hover:text-[#2A254B]">Contact Us</Link>
          <div className="flex space-x-4 pt-3">
            <Link href="/cart">
              <FaShoppingCart className="text-xl hover:text-[#2A254B]" />
            </Link>
            <Link href="/profile">
              <FaUser className="text-xl hover:text-[#2A254B]" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

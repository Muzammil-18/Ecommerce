import React from 'react';
import Link from 'next/link';

const Navbar_2 = () => {
  return (
    <nav className="p-3 hidden md:flex justify-center items-center bg-[#F9F9F9] m-2 h-12 font-medium space-x-10 text-gray-500">
      <Link href="/plant-pots" className="hover:text-gray-800">
        Plant Pots
      </Link>
      <Link href="/ceramics" className="hover:text-gray-800">
        Ceramics
      </Link>
      <Link href="/tables" className="hover:text-gray-800">
        Tables
      </Link>
      <Link href="/chairs" className="hover:text-gray-800">
        Chairs
      </Link>
      <Link href="/crockery" className="hover:text-gray-800">
        Crockery
      </Link>
      <Link href="/tableware" className="hover:text-gray-800">
        Tableware
      </Link>
      <Link href="/cutlery" className="hover:text-gray-800">
        Cutlery
      </Link>
    </nav>
  );
};

export default Navbar_2;

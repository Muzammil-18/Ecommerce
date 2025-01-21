// components/Navbar.js
"use client"
import React, { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen,setMenuOpen]= useState(false)
    return(
        <nav className='flex justify-between items-center bg-white shadow-md px-4 py-2 w-full overflow-x-hidden'>
            <div className='font-bold text-xl'>Avion</div>
            <div className='hidden md:flex space-x-4'>
                <button><FaSearch/></button>
                <button><FaShoppingCart/></button>
                <button><FaUser/></button>
            </div>
            <div className=' flex md:hidden space-x-4 items-center' >
                <button><FaSearch/></button>
                <button onClick={()=>setMenuOpen(!menuOpen)}><FaBars/></button>
            </div>

            {menuOpen&& (
                <div className=' flex flex-col absolute top-12 left-0 bg-white space-y-3 w-full shadow-md items-center py-4'>
                    <button>
                        <FaShoppingCart/>
                    </button>
                    <button>
                        <FaUser/>
                    </button>
                </div>
            )}
        </nav>
    )
};

export default Navbar;

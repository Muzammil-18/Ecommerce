import React from 'react'

const Navbar_2 = () => {
  return (
    <nav className='p-3 hidden md:flex justify-center items-center bg-white m-2 h-12 font-bold space-x-4 text-gray-500 '>
        <button className="hover:text-gray-800">
            Plant Pots
        </button>
        <button className="hover:text-gray-800">
            Ceramics
        </button>       
        <button className="hover:text-gray-800">
            Tables
        </button>  
        <button className="hover:text-gray-800">
            Chairs
        </button>        
        <button className="hover:text-gray-800">
            Crockery
        </button>
        <button className="hover:text-gray-800">
            Tableware
        </button>
        <button className="hover:text-gray-800">
            Cutlery
        </button>
    </nav>
  )
}

export default Navbar_2
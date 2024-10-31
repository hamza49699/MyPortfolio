"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';
import { TfiMenuAlt } from "react-icons/tfi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };

  return (
    <div className='container pt-2 bg-yellow-400 pb-2'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-extrabold'>Muhammad Hamza Javed</div>

        <ul className='gap-10 lg:gap-16 hidden md:flex font-bold text-2xl'>
          <li className='menuLink'><a href='#hero'>Home</a></li>
          <li className='menuLink'><a href='#about'>About</a></li>
          <li className='menuLink'><a href='#contact'>Contact</a></li>
          <li className='menuLink'><a href='#skills'>Skills</a></li>
        </ul>

        <TfiMenuAlt className='md:hidden cursor-pointer' size={30} onClick={toggleMenu} />
      </div>

      {/* Dropdown menu for small screens */}
      {isOpen && (
        <div className='md:hidden bg-yellow-400 mt-2'>
          <ul className='flex flex-col font-bold text-2xl'>
            <li className='menuLink'><a href='#hero'>Home</a></li>
            <li className='menuLink'><a href='#about'>About</a></li>
            <li className='menuLink'><a href='#contact'>Contact</a></li>
            <li className='menuLink'><a href='#skills'>Skills</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

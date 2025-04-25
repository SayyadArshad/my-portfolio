import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'certificates' },

  ];

  return (
    <nav className="fixed w-full h-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white z-20">
      <div className="flex justify-between items-center h-full max-w-screen-xl mx-auto px-4">
        <h1 className="text-2xl font-bold">Arshad's Portfolio</h1>

        {/* Desktop Nav Links and Dark Mode Toggle */}
        <div className="hidden md:flex items-center">
          <ul className="flex">
            {links.map(({ id, link }) => (
              <li key={id} className="px-4 cursor-pointer capitalize text-lg hover:text-blue-500 duration-200">
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden cursor-pointer" onClick={() => setNav(!nav)}>
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* Mobile Nav Links and Dark Mode Toggle */}
      {nav && (
        <ul className="md:hidden absolute w-full bg-white dark:bg-gray-900 px-4">
          {links.map(({ id, link }) => (
            <li key={id} className="py-4 text-center capitalize">
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <div className="flex justify-center py-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo.png";
// this is for search icon
import { IoMdSearch } from "react-icons/io";
// this is for cart icon
import { FaCartShopping } from "react-icons/fa6";
// this is for caret icon
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved user preference
    const savedMode = localStorage.getItem('theme') === 'dark';
    setDarkMode(savedMode);
    document.documentElement.classList.toggle('dark', savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 4,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 5,
      name: "Electronics",
      link: "/#",
    },
  ];

  const DropdownLinks = [
    {
      id: 1,
      name: "Trending",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="logo"
                className="w-10 uppercase" />
              STORE
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            {/* {"search bar placed here "} */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] 
                        group-hover:w-[300px] 
                        transition-all duration-300 rounded-full border border-gray-300
                        px-2 py-1
                        focus:outline-none focus:border-1
                        focus:border-primary"
              />
              <IoMdSearch
                className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>
            {/* order button placed here */}
            {/* ordering functionality will be added later */}
            <button
              onClick={() => alert("ordering not available yet")}
              className="bg-gradient-to-r from-primary to-secondary
            transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
              <span
                className="group-hover:block hidden transition-all duration-200"
              >Order</span>
              <FaCartShopping
                className="text-xl text-white drop-shadow-sm cursor-pointer"
              />
            </button>
            {/* darkmode switch */}
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary dark:peer-focus:ring-secondary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary peer-checked:dark:bg-secondary"></div>
                {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle Theme</span> */}
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* LowerNavbar */}
      <div className="flex justify-center">
        {/* Add content for the lower navbar here */}
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link}
              className="inlilne-block px-4 hover:text-primary duration-200"
              >
              {data.name}</a>
            </li>
          ))}
          {/* dropdown */}
          <li className="group relative cursor-pointer">
          <a
          href="#"
          className="flex items-center gap-[2px] py-2"
          >
          Trending Products
          <span>
            <FaCaretDown
              className="transition-all duration-200
              group-hover:rotate-180"
            />
          </span>
          </a>
          <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white
          p-2 text-black shadow-md">
            <ul>
              {DropdownLinks.map((data) => (
                <li key={data.id}>
                  <a
                  href= {data.link}
                  className="inline-block w-full rounded-md p-2
                  hover:bg-primary/20"
                  >{data.name}</a>
                </li>
              ))}
            </ul>
          </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;

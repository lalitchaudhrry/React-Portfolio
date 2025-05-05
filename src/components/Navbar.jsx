import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="relative z-50">
      <div className="container mx-auto flex justify-end pt-8">
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-700 font-bold" : "text-gray-700 hover:text-red-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="border-l pl-5 pr-5">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-700 font-bold" : "text-gray-700 hover:text-red-500"
              }
            >
              About
            </NavLink>
          </li>
          <li className="pl-5 pr-10 border-l">
            <NavLink
              to="/connect"
              className={({ isActive }) =>
                isActive ? "text-orange-700 font-bold" : "text-gray-700 hover:text-red-500"
              }
            >
              Connect
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Profile Section (This does NOT affect routing) */}
      <div className="flex items-center space-x-3 p-5 rounded-lg -mt-12">
        <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
        <h1 className="text-xl font-bold">
          Lalit Chaudhary <span className="text-sm font-normal text-gray-600">Web Developer</span>
        </h1>
      </div>
      </div>
    </>
  );
};

export default Navbar;

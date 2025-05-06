import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Connect', to: '/connect' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" w-full z-50 bg-white">
      <div className="container mx-auto flex items-center justify-end p-4">
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 border-gray-800 pb-1 font-semibold text-gray-800'
                    : 'text-gray-800 hover:text-gray-600 transition-colors'
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? 'block text-lg font-semibold text-gray-800'
                        : 'block text-lg text-gray-800 hover:text-gray-600 transition-colors'
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
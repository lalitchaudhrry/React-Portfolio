import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    
    <footer id="footer" className= "bg-gray-900 text-white py-6 px-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Connect Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Let's Connect!</h2>
          <p className="text-gray-300 mt-1">
           Want to work together?
          </p>
          {/* Link to your Connect Page */}
          <a
            href="/connect" 
            className="inline-flex items-center mt-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaEnvelope className="mr-2" />
            lc7906798@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/lalit-chaudhrry/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://leetcode.com/u/lalitchaudhrry/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            <SiLeetcode size={24} />
          </a>
          <a
            href="https://github.com/lalitchaudhrry"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/lalit_chaudhrry/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Lalit Chaudhary. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

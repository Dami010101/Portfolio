import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Dami</h2>
            <p>Front-end Developer</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/damilola-akinwande-920629141/" className="text-gray-400 hover:text-white">
              <FaLinkedin size="1.5em" />
            </a>
            <a href="https://github.com/Dami010101" className="text-gray-400 hover:text-white">
              <FaGithub size="1.5em" />
            </a>
            <a href="mailto:akinwande@gmail.com.com" className="text-gray-400 hover:text-white">
              <FaEnvelope size="1.5em" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

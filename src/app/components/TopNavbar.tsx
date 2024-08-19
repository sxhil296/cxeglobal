import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className="w-full bg-custom-bg py-3 top-0 fixed z-50">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-4 lg:px-8">
        {/* Moving Text */}
        <div className="hidden lg:block overflow-hidden whitespace-nowrap">
          <div className="animate-marquee text-white font-medium">
            Welcome to CXE-Global - Transforming Your Business with Innovation!
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center w-full lg:w-auto lg:justify-end">
          <div className="flex space-x-4 text-white">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

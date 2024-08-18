"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { IoPhonePortraitSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="w-full top-0 fixed shadow-[0_6px_10px_-1px_rgba(0,0,0,0.1)] bg-white z-50">
      <div className="max-w-[1280px] flex items-center justify-between mx-auto p-4 md:p-6 lg:p-8">
        {/* LOGO */}
        <div>
          <Link href={"/"}>CXE-Global</Link>
        </div>

        {/* Hamburger Icon (Mobile & Tablet only) */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Links and buttons (Desktop only) */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              Services <FaChevronDown className="ml-1" />
            </button>
            {isServicesOpen && (
              <div className="absolute mt-2 bg-white border rounded shadow-lg py-2">
                <Link
                  href="/service1"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Service1
                </Link>
                <Link
                  href="/service2"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Service2
                </Link>
                <Link
                  href="/service3"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Service3
                </Link>
                <Link
                  href="/service4"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Service4
                </Link>
              </div>
            )}
          </div>

          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* buttons (Desktop only) */}
        <div className="lg:flex hidden gap-2">
          <button className="flex items-center px-6 py-2  font-medium">
            <IoPhonePortraitSharp className="mr-3 text-xl" />
            <div className="flex flex-col text-left">
              <span className="text-xs text-gray-400">Have any Questions?</span>
              <span className="text-sm">+91 7070707070</span>
            </div>
          </button>
          <button className="px-6 py-2 border border-blue-400 hover:bg-blue-400 hover:text-white font-medium">
            Consult Now
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white w-full text-center py-4 space-y-2">
          <Link
            href="/"
            className="block text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-center mx-auto text-lg text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              Services <FaChevronDown className="ml-1" />
            </button>
            {isServicesOpen && (
              <div className="mt-2 bg-white border rounded shadow-lg py-2">
                <Link
                  href="/service1"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setIsServicesOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  Service1
                </Link>
                <Link
                  href="/service2"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setIsServicesOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  Service2
                </Link>
                <Link
                  href="/service3"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setIsServicesOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  Service3
                </Link>
                <Link
                  href="/service4"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setIsServicesOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  Service4
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/projects"
            className="block text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

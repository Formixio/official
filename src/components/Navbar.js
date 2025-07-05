"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { title: 'About Us', href: '/about-us' },
    { title: 'Class 10th', href: '/class-10' },
    { title: 'Class 12th', href: '/class-12' },
    { title: 'Community', href: '/community' },
    { title: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              title="FORMIXIO - Your own Maths Trainer" 
              href="/" 
              className="text-3xl font-bold text-white hover:text-gray-300 underline transition-colors duration-200"
            >
              FORMIXIO
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  title={`FORMIXIO - ${item.title}`}
                  className="text-white hover:text-[#3BD9C9] px-4 py-3 text-base font-medium transition-colors duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              title={isOpen ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center p-2 text-gray-300 hover:text-white focus:outline-none transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 shadow-lg">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              title={`FORMIXIO - ${item.title}`}
              onClick={closeMenu}
              className="text-gray-300 hover:text-white block px-4 py-3 text-lg font-medium transition-colors duration-200"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
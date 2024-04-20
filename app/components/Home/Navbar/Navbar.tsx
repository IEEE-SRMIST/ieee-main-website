import React from "react";
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(darkModeMediaQuery.matches);
      const handleChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => {
        setIsDarkMode(e.matches);
      };
      darkModeMediaQuery.addEventListener('change', handleChange);
      return () => darkModeMediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full border-b py-4 sm:py-0 dark:bg-black bg-white sticky top-0">
      <nav className="relative max-w-9xl w-full mx-auto sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-12 h-15 md:h-20 lg:h-20" aria-label="Global">
        <div className="flex items-end justify-between">
          <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl text-black dark:text-white" aria-label="logo">
            <img
              src={isDarkMode ? "/assests/logo/IEEE logo/Logo_white.png" : "/assests/logo/IEEE logo/Logo_color.png"}
              alt="IEEE SRM SB logo"
              className="w-32 xl:w-32 h-auto pl-4 md:pl-0 lg:pl-0" 
            />
          </a>
          <div className="sm:hidden pr-4 md:pr-0 lg:pr-0">
            <button
              type="button"
              className="rounded-full hs-collapse-toggle size-10  flex justify-center items-center text-sm font-semibold border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg className="rounded-full" width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill={isDarkMode ? 'white' : '#253AA0'}/>
                <path d="M17.75 28.5L26.25 20L17.75 11.5" stroke={isDarkMode ? '#0A0D10' : 'white'} strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div id="navbar-collapse-with-animation" className="hs-collapse bg-white dark:bg-black hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
          <div className="flex flex-col gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <a className="py-5 md:py-0 lg:py-0  pl-4 md:pl-0 lg:pl-0 align-middle bg-[#CFD4DE] font-medium sm:bg-white lg:bg-white dark:bg-black text-blue-600 sm:py-6 dark:text-blue-600" href="#" aria-current="page">
              <span className="sm:hidden inline">
                <img
                  src="/assests/icons/home-icon.png"
                  alt="Home"
                  className="inline-block h-6 w-6 mr-2 dark:bg-white"
                />
              </span>
              MAIN
            </a>
            <a className="py-5 md:py-0 lg:py-0  pl-4 md:pl-0 lg:pl-0 align-middle sm:bg-white dark:bg-black bg-[#DFE3E9] font-medium lg:bg-white md:bg-white text-black hover:text-blue-600 sm:py-6 dark:text-white dark:hover:text-blue-600" href="#">
              <span className="sm:hidden inline">
                <img
                  src="/assests/icons/about-icon.png"
                  alt="About"
                  className="inline-block h-6 w-6 mr-2 dark:bg-white"
                />
              </span>
              ABOUT
            </a>
            <a className="py-5 md:py-0 lg:py-0  pl-4 md:pl-0 lg:pl-0 align-middle sm:bg-white dark:bg-black bg-[#CFD4DE] lg:bg-white md:bg-white font-medium text-black hover:text-blue-600 sm:py-6 dark:text-white dark:hover:text-blue-600" href="#">
              <span className="sm:hidden inline">
                <img
                  src="/assests/icons/events-icon.png"
                  alt="Events"
                  className="inline-block h-6 w-6 mr-2 dark:bg-white"
                />
              </span>
              EVENTS
            </a>
            <a className="py-5 md:py-0 lg:py-0  pl-4 md:pl-0 lg:pl-0 align-middle sm:bg-white dark:bg-black bg-[#DFE3E9] font-medium lg:bg-white md:bg-white text-black hover:text-blue-600 sm:py-6 dark:text-white dark:hover:text-blue-600" href="#">
              <span className="sm:hidden inline">
                <img
                  src="/assests/icons/members-icon.png"
                  alt="Members"
                  className="inline-block h-6 w-6 mr-2 dark:bg-white"
                />
              </span>
              MEMBERS
            </a>
            <a className="py-5 md:py-0 lg:py-0  pl-4 md:pl-0 lg:pl-0 align-middle sm:bg-white dark:bg-black bg-[#CFD4DE] font-medium lg:bg-white md:bg-white text-black hover:text-blue-600 sm:py-6 dark:text-white dark:hover:text-blue-600" href="#">
              <span className="sm:hidden inline">
                <img
                  src="/assests/icons/contact-icon.png"
                  alt="Contact"
                  className="inline-block h-6 w-6 mr-2 dark:bg-white"
                />
              </span>
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

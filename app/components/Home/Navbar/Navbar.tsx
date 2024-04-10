import React from "react";

const Navbar = () => {
  return (
    // <header className="bg-blue-100 max-w-screen-2xl mx-auto px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10">
    //     <div className="mx-auto flex items-center justify-between">
    // <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
    //     <img src="/assets/Logo/IEEE Logo/IEEE SRM SB.png" alt="IEEE SRM SB logo" className="w-24 xl:w-32 h-auto" />
    // </a>
    //         <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
    //             <img src="/assets/Logo/IEEE Logo/IEEE SRM SB.png" alt="IEEE SRM SB logo" className="w-24 xl:w-32 h-auto" />
    //         </a>
    //     </div>
    // </header>

<header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full border-b border-gray-100 py-4 sm:py-0 dark:bg-gray-800 bg-gray-100 sticky top-0">
  <nav className="relative max-w-8xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-12 h-15" aria-label="Global">
    <div className="flex items-center justify-between">
      <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl dark:text-white" aria-label="logo">
        <img
          src="/assets/Logo/IEEE Logo/IEEE SRM SB.png"
          alt="IEEE SRM SB logo"
          className="w-32 xl:w-32 h-auto" 
        />
      </a>
      <div className="sm:hidden">
        <button
          type="button"
          className="rounded-full hs-collapse-toggle size-10 flex justify-center items-center text-sm font-semibold border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
          data-hs-collapse="#navbar-collapse-with-animation"
          aria-controls="navbar-collapse-with-animation"
          aria-label="Toggle navigation"
        >
          <svg className="rounded-full" width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="#253AA0"  />
            <path d="M17.75 28.5L26.25 20L17.75 11.5" stroke="white" strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
        <a className="font-medium text-blue-600 sm:py-6 dark:text-blue-600" href="#" aria-current="page">MAIN</a>
        <a className="font-medium text-lightText hover:text-blue-600 sm:py-6 dark:text-gray-100 dark:hover:text-blue-600" href="#">ABOUT</a>
        <a className="font-medium text-lightText hover:text-blue-600 sm:py-6 dark:text-gray-100 dark:hover:text-blue-600" href="#">EVENTS</a>
        <a className="font-medium text-lightText hover:text-blue-600 sm:py-6 dark:text-gray-100 dark:hover:text-blue-600" href="#">MEMBERS</a>
        <a className="font-medium text-lightText hover:text-blue-600 sm:py-6 dark:text-gray-100 dark:hover:text-blue-600" href="#">CONTACT</a>
      </div>
    </div>
  </nav>
</header>


  );
};

export default Navbar;

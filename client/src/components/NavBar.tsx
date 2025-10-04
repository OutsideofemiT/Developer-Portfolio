import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-smoky border-b border-ash fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo/Brand */}
        <a href="#" className="flex items-center space-x-3">
          <span className="self-center text-2xl whitespace-nowrap text-whitesmoke" style={{ fontFamily: 'var(--font-sans)' }}>
            NEW PORTFOLIO LOADING...
          </span>
        </a>
        
        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <a href="#contact"
            type="button" 
            className="text-whitesmoke bg-burnt hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-burnt focus:ring-opacity-50 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all"
          >
            Contact Me
          </a>
          <button 
            data-collapse-toggle="navbar-sticky" 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-whitesmoke rounded-lg md:hidden hover:bg-ash focus:outline-none focus:ring-2 focus:ring-ash transition-all" 
            aria-controls="navbar-sticky" 
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        
        {/* Navigation Links */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-ash rounded-lg bg-ash md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a 
                href="#about" 
                className="block py-2 px-3 text-whitesmoke bg-burnt rounded-sm md:bg-transparent md:text-burnt md:p-0 transition-all" 
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="block py-2 px-3 text-whitesmoke rounded-sm hover:bg-ash md:hover:bg-transparent md:hover:text-burnt md:p-0 transition-all"
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="block py-2 px-3 text-whitesmoke rounded-sm hover:bg-ash md:hover:bg-transparent md:hover:text-burnt md:p-0 transition-all"
              >
                Featured Project
              </a>
            </li>
             <li>
              <a 
                href="#experience" 
                className="block py-2 px-3 text-whitesmoke rounded-sm hover:bg-ash md:hover:bg-transparent md:hover:text-burnt md:p-0 transition-all"
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="block py-2 px-3 text-whitesmoke rounded-sm hover:bg-ash md:hover:bg-transparent md:hover:text-burnt md:p-0 transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
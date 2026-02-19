import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    /* 1. Changed 'justify-between' to 'justify-end' to shift links to the right.
       2. Removed any logo/text div from the left side.
    */
    <nav className="fixed top-0 w-full h-20 z-50 bg-transparent flex items-center justify-end px-10">
      
      {/* Menu Links shifted to the right */}
      <div className="flex gap-10 text-xs font-black uppercase tracking-widest text-white">
        <Link to="/" className="hover:text-orange-500 transition-colors duration-300">Home</Link>
        <Link to="/gallery" className="hover:text-orange-500 transition-colors duration-300">Gallery</Link>
        <Link to="/videos" className="hover:text-orange-500 transition-colors duration-300">Videos</Link>
      </div>
      
    </nav>
  );
};

export default Navbar;
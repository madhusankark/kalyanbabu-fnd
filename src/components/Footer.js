import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-24 text-center border-t-4 border-orange-600">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-2xl md:text-4xl font-serif italic text-white leading-snug">
          "I don't need fans, I need soldiers who can question the system."
        </p>
        <div className="mt-8 flex justify-center items-center space-x-4">
          <div className="h-[1px] w-12 bg-orange-500"></div>
          <p className="uppercase tracking-[0.3em] text-orange-500 font-black">Power Star Pawan Kalyan</p>
          <div className="h-[1px] w-12 bg-orange-500"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
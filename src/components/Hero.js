import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    /* Change 'h-screen' to a height that subtracts your Navbar height. 
       If your Navbar is 80px, we use h-[calc(100vh-80px)].
    */
    <section className="relative h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden">
      <img 
        src="https://pbs.twimg.com/media/FNk6tINVcAAmUeX?format=jpg&name=large" 
        // object-top ensures the head/face is prioritized when cropping
        className="absolute inset-0 w-full h-full object-cover object-top brightness-50" 
        alt="Heroic Pawan Kalyan"
      />
      
      <motion.h1 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        className="relative z-10 text-6xl md:text-9xl font-black text-white drop-shadow-2xl text-center px-4"
      >
        PAWAN KALYAN
      </motion.h1>
    </section>
  );
};

export default Hero;
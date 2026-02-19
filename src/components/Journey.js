import React from 'react';
import { motion } from 'framer-motion';

const Journey = ({ image, title, content, reverse = false }) => {
  return (
    <section className="py-20 px-6 bg-black">
      <div className={`max-w-7xl mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
        
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-[500px] object-cover rounded-3xl border border-white/10 shadow-2xl shadow-orange-900/10" 
          />
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <h2 className="text-5xl font-black text-orange-500 uppercase italic tracking-tighter">
            {title}
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed font-medium">
            {content}
          </p>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Journey;
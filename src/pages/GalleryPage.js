import React from 'react';
import { motion } from 'framer-motion';

// This array ONLY points to your manual assets folder
const pspkImages = [
  { id: 1, src: "https://m.media-amazon.com/images/M/MV5BN2M3ZTQyMTktOTllMi00YmE4LTkzZWEtMDEyYmM1OGNjOWQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", title: "The Debut", year: "1996" },
  { id: 2, src: "https://m.media-amazon.com/images/M/MV5BNDc3ZjE4NTctZGY1MS00YTM5LTlhYTUtMTQ4YjBhMzAyYjBmXkEyXkFqcGc@._V1_.jpg", title: "Youth Icon", year: "1999" },
  { id: 3, src: "https://m.media-amazon.com/images/M/MV5BODdjNjFlYTctMmY1Yy00YTAxLWFkZjEtNTJlOTk3YmY3ZDJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", title: "Trendsetter", year: "2001" },
  { id: 4, src: "https://m.media-amazon.com/images/M/MV5BYWIyM2QyZTYtYjg0Zi00YjM4LTk0MjAtYTUzMjBiOTM3Y2M2XkEyXkFqcGc@._V1_.jpg", title: "Style King", year: "2008" },
  { id: 5, src: "https://m.media-amazon.com/images/M/MV5BNjRmZTU4NjYtMjgzNC00ZWY5LThlMDUtNjc4MWRiZmQzM2VmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", title: "Mass God", year: "2012" },
  { id: 6, src: "https://m.media-amazon.com/images/M/MV5BYWM0Y2YyMmYtYjhjYS00NTc2LTllZjktZDMxMWFkMGFmMzU2XkEyXkFqcGc@._V1_.jpg", title: "The Comeback", year: "2021" },
  { id: 7, src: "https://i.pinimg.com/736x/a6/ce/c1/a6cec111363304757706afdaab68c086.jpg", title: "Devotional power", year: "2024" },
  { id: 8, src: "https://i.pinimg.com/736x/40/da/28/40da28b7ebd23a888d9011500e871527.jpg", title: "political success", year: "2024" },
  { id: 9, src: "https://i.pinimg.com/736x/a2/5a/31/a25a31c4caafbc98867276bc7b1d7027.jpg", title: "Redemption of OG", year: "2025" },
];

const GalleryPage = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-black text-center text-white mb-16 uppercase italic tracking-tighter">
          The <span className="text-orange-600">Evolution</span>
        </h2>
        
        {/* Grid for all 6 images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pspkImages.map((item) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }} // The "Pop" effect
              className="relative h-[450px] overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl group"
            >
              <img 
                src={item.src} 
                alt={item.title} 
                /* REMOVED 'grayscale' and 'group-hover:grayscale-0' */
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                onError={(e) => { 
                  e.target.src = `https://via.placeholder.com/400x600?text=Check+Filename+${item.src.split('/').pop()}`; 
                }} 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="text-orange-500 font-bold tracking-widest text-sm">{item.year}</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
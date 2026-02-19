import React, { useState } from 'react';


const videoData = [
  { 
    id: 1, 
    title: "The Cinematic Movie Journey", 
    path: "/videos/cinematic.mp4", 
    thumb: "https://i.pinimg.com/736x/f4/9e/78/f49e78d2ed55223f8473021579896205.jpg" 
  },
  { 
    id: 2, 
    title: "Undisputed Fan Base ", 
    path: "/videos/fanbase.mp4", 
    thumb: "https://i.pinimg.com/736x/3b/4a/f7/3b4af72b36cc96360afef3133982e412.jpg" 
  },
  { 
    id: 3, 
    title: "roar of lion", 
    path: "/videos/roar.mp4", 
    thumb: "https://i.pinimg.com/736x/4a/5e/17/4a5e177fdd7633e4951d17cbdb2237f3.jpg" 
  },
  { 
    id: 4, 
    title: "Martial Arts Discipline", 
    path: "/videos/martial_arts.mp4", 
    thumb: "https://i.pinimg.com/736x/7d/f4/8b/7df48b3953cc58b7bf70a4e38643bc6b.jpg" 
  },
 
  /* ADDED VIDEO 6 */
  { 
    id: 6, 
    title: "Powerful Ideology Towards Society", 
    path: "/videos/ideology.mp4", 
    thumb: "https://i.pinimg.com/736x/41/2f/6b/412f6b4041ec50d563d55e956ddfc3da.jpg" 
  }
];

const VideoPlayer = () => {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 bg-black p-6 rounded-3xl">
      
      {/* LEFT: The Main Screen */}
      <div className="flex-[3]">
        <div className="aspect-video w-full bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <video 
            key={currentVideo.path} 
            controls 
            autoPlay 
            className="w-full h-full object-contain"
          >
            <source src={currentVideo.path} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h2 className="text-3xl font-black mt-6 text-orange-500 uppercase italic tracking-tighter">
          {currentVideo.title}
        </h2>
      </div>

      {/* RIGHT: The Clickable Sidebar */}
      <div className="flex-1 flex flex-col gap-4 max-h-[550px] overflow-y-auto pr-2 custom-scrollbar">
        <h3 className="text-white font-black uppercase tracking-widest border-b border-orange-500 pb-2 mb-2 italic">
          Up Next
        </h3>
        {videoData.map((vid) => (
          <div 
            key={vid.id}
            onClick={() => setCurrentVideo(vid)}
            className={`flex gap-3 p-3 rounded-2xl cursor-pointer transition-all duration-300 ${
              currentVideo.id === vid.id 
                ? 'bg-orange-600/20 border border-orange-500/50 scale-[1.02]' 
                : 'bg-zinc-900 hover:bg-zinc-800 border border-transparent'
            }`}
          >
            <div className="relative min-w-[96px]">
              <img src={vid.thumb} className="w-24 h-14 object-cover rounded-lg" alt="thumb" />
              {currentVideo.id === vid.id && (
                <div className="absolute inset-0 bg-orange-600/20 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
                </div>
              )}
            </div>
            <p className={`text-xs font-bold leading-tight self-center ${
              currentVideo.id === vid.id ? 'text-orange-500' : 'text-zinc-400'
            }`}>
              {vid.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
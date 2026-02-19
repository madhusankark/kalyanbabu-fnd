import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import VideoPlayer from './components/VideoPlayer';
import GalleryPage from './pages/GalleryPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={{ duration: 0.5 }}>
            <Hero />
            
            {/* 1. Bio Section: Birth to Youth */}
            <div id="bio">
              <Journey 
                image="https://preview.redd.it/pawan-kalyan-before-he-became-an-actor-v0-5xzsybcfqldc1.jpg?width=554&format=pjpg&auto=webp&s=62e09b8d44f97db92d24ec30dd3c1bc168d7c958"
                title="The Early Years" 
                content="Pawan Kalyan was born as Konidela Kalyan Babu on September 2, 1971, in Bapatla, Andhra Pradesh. Raised in a disciplined middle-class family, he grew up observing strong values and social realities. Though he was the younger brother of Chiranjeevi, he carved his own identity through determination and self-belief. Quiet yet intense, he was deeply drawn to martial arts and earned a black belt in Karate, which built his confidence and resilience. Rather than following a conventional academic path, he chose self-learning and personal growth. With a strong will and clarity of purpose, he stepped toward cinema, ready to create his own legacy."
              />
            </div>

            {/* 2. Cinema Journey */}
            <div id="upcoming">
              <Journey 
                image="https://i.pinimg.com/736x/9c/50/23/9c50234d18a00a873ec54d7528cd9f6a.jpg" 
                title="Cinematic Legend" 
                reverse={true} 
                content="Pawan Kalyan began his cinematic journey with Akkada Ammayi Ikkada Abbayi (1996), marking a powerful entry into Telugu cinema. He gained massive recognition with films like Tholi Prema, which won a National Award and established him as a romantic icon. His energetic screen presence and unique style in Badri and Kushi made him a youth sensation. Over the years, he delivered blockbusters like Gabbar Singh, redefining mass entertainment and strengthening his title as “Power Star.” Known for his distinct dialogue delivery, charisma, and unconventional script choices, Pawan Kalyan built a loyal fan base across generations."
              />
            </div>

            {/* 3. Social Contribution Section */}
            <div id="social">
              <Journey 
                image="https://i.pinimg.com/736x/0c/ad/58/0cad58476303bee1ba0df4b484a77bc0.jpg"
                title="Society & Service" 
                content="Pawan Kalyan has been actively involved in humanitarian and social service activities. He has extended financial support to families of farmers in distress and victims of natural disasters. He has donated to families of martyrs and supported medical and educational needs of the underprivileged. Known for his quiet philanthropy, many of his contributions were made without publicity. Pawan Kalyan has also inspired youth toward discipline and integrity, often emphasizing social responsibility. Through charity and public awareness, he has demonstrated a strong commitment to society beyond his cinematic career."
              />
            </div>

            {/* 4. Political Journey Section */}
            <div id="politics">
              <Journey 
                image="https://pbs.twimg.com/media/Gz0mgsXacAAWaiF?format=jpg&name=large" 
                title="The Political Force" 
                reverse={true}
                content="Pawan Kalyan founded the Jana Sena Party in 2014 with a vision of transparent governance and people-centric leadership. After years of strengthening the party at the grassroots level, the 2024 elections marked a major milestone. He contested from Pithapuram and secured a historic victory. Currently, as the Deputy Chief Minister of Andhra Pradesh, he is working toward his promise of change, moving from a star of the silver screen to a pivotal leader dedicated to the constitution and the welfare of the people."
              />
            </div>

            {/* 5. Common Queries (FAQ) */}
            <FAQ image="https://pbs.twimg.com/media/Gz0mgsXacAAWaiF?format=jpg&name=large" />
          </motion.div>
        } />

        <Route path="/gallery" element={
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
            <GalleryPage />
          </motion.div>
        } />

        <Route path="/videos" element={
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
            <div className="pt-24 min-h-screen bg-black">
              <h1 className="text-4xl font-black text-center mb-8 uppercase tracking-tighter">
                Inspirational <span className="text-orange-500">Videos</span>
              </h1>
              <VideoPlayer />
            </div>
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black text-white selection:bg-orange-500 min-h-screen">
        <Navbar />
        <AnimatedRoutes />
        {/* Footer with Powerful Inspirational Dialogue */}
        <Footer 
          quote="To live greatly, you have to risk greatly." 
          author="Power Star Pawan Kalyan"
        />
      </div>
    </Router>
  );
}

export default App;
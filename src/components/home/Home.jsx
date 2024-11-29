import React from 'react';
import WhatWeDo from '../whatwedo/WhatWeDo';
import WhatWeThink from '../whatwethink/WhatWeThink';
import WhoWeAre from '../whoweare/WhoWeAre';
import Career from '../career/Career';
import Contact from '../contact/Contact';

const Hero = () => {
  return (
    <>
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-center text-white px-4" 
      style={{ backgroundImage: 'url(https://i.postimg.cc/yY4LTYkp/home1.jpg)' }} 
    >
     

      <div className="relative z-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Welcome to Our Dreamy Space
        </h1>
        <p className="text-lg sm:text-xl font-medium mb-8 max-w-xl mx-auto">
          Discover the magic of beautifully designed experiences. Let us help you create something truly special.
        </p>
        <button className="px-8 py-3 bg-sky-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-slate-600 transition-all transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
    <WhatWeDo/>
    <WhatWeThink/>
    <WhoWeAre/>
    <Career/>
    <Contact/>
    </>
  );
};

export default Hero;

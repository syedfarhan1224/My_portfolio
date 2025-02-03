import React from "react";
import avatar from "../assets/farhan.png";
import cv from "../assets/Farhan's Resume MERN Stack Developer.pdf"

function Home() {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-center items-center md:justify-between px-6 md:px-20 py-10 md:py-16 max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="md:w-2/4 text-center md:text-left space-y-3 md:space-y-5">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tighter">
          Hello, I'm <span className="text-emerald-400">Syed Farhan</span>
        </h1>
        <h1 className="text-xl md:text-3xl font-bold leading-tight tracking-tighter">MERN Stack Developer</h1>
        {/* <p className="text-sm md:text-xl leading-relaxed">
          I am a MERN Stack Developer working with React.js, Next.js, MongoDB, and Node.js.
        </p> */}
        <a href={cv} 
        target="_blank" 
        rel="noopener noreferrer">
        <button className="mt-4 md:mt-6 text-white py-2 mx-2 px-4 md:text-lg hover:opacity-85 transition duration-300 hover:scale-105 font-semibold rounded-3xl bg-emerald-600">
          View CV
        </button>
        </a>
        <button className="mt-4 md:mt-6 text-white py-2 px-4 md:text-lg hover:opacity-85 transition duration-300 hover:scale-105 font-semibold rounded-3xl bg-emerald-600">
          Contact Me
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="w-3/5 md:w-2/5 mt-6 md:mt-0">
        <img className="w-full object-cover rounded-lg shadow-lg" src={avatar} alt="Farhan" />
      </div>
    </div>
  );
}

export default Home;

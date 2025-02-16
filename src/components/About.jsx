import React, { useState } from "react";
import { FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import farhan from "../assets/profile1.png";

function AboutMe() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id="about" className="text-white bg-black shadow-xl mx-6 md:mx-20 bg-opacity-30 rounded-lg p-8 md:p-12">
      
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>

      {/* Main Section - Image Left, Cards Right */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Left - Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={farhan}
            alt="Muhammad Farhan Syed"
            className="w-48 h-48 md:w-60 md:h-60 rounded-lg border-4 border-emerald-500 shadow-lg"
          />
        </div>

        {/* Right - Experience & Education Cards (Stacked) */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          
          {/* Experience */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-4">
            <FaLaptopCode size={40} className="text-emerald-500" />
            <div>
              <h4 className="text-xl font-semibold">Experience</h4>
              <p className="text-gray-400 mt-1">1+ Years in Frontend Development</p>
            </div>
          </div>

          {/* Education */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-4">
            <FaGraduationCap size={40} className="text-emerald-500" />
            <div>
              <h4 className="text-xl font-semibold">Education</h4>
              <p className="text-gray-400 mt-1">BS IT - BBSU (2025)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Who Am I Section - Condensed for Mobile */}
      <div className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Who Am I?</h3>
        <p className="text-gray-300 leading-relaxed">
          👨‍💻 My name is Muhammad Farhan Syed, and I am 22 years old 🎂.
        </p>
        <p className="text-gray-300 leading-relaxed">
          💻 I am a MERN Stack Developer with 1+ years of experience.
        </p>
        
        {expanded || window.innerWidth >= 768 ? (
          <div className="mt-4">
            <p>
              I completed my Matriculation in Computer Science in 2017 from Crescent School 🏫
              and my F.Sc. in 2019 from Baldia Degree 🎓.
            </p>
            <p>
              I graduated with a BS-IT 📚 from Benazir Bhutto Shaheed University (BBSUL), Karachi, Pakistan 🇵🇰, in 2025 🎉.
            </p>
            <p>
              🛠️ <strong>Tech Stack:</strong>
            </p>
            <p>
              ✅ <strong>Frontend:</strong> HTML/CSS, JavaScript/TypeScript, Bootstrap, Tailwind CSS, React.js, Next.js.
            </p>
            <p>
              ✅ <strong>Backend:</strong> Node.js, Firebase, MongoDB.
            </p>
            <p>
              ✅ <strong>Version Control & Collaboration:</strong> Git, GitHub.
            </p>
          </div>
        ) : (
          <button
            className="mt-4 text-emerald-500 hover:underline focus:outline-none"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </div>
  );
}

export default AboutMe;

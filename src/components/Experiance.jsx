import React from "react";
import { 
  FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaNodeJs 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiFirebase, SiMongodb, SiNextdotjs, SiTypescript 
} from "react-icons/si";

function Experience() {
  return (
    <div id="experience" className="p-10 md:p-24 text-white">
      
      {/* Section Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Experience</h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Left - Technologies Icons */}
        <div className="w-full md:w-1/2 flex flex-wrap gap-6 justify-center">
          {[ 
            { icon: FaHtml5, color: "#E34F26" }, { icon: FaCss3, color: "#1572b6" },
            { icon: FaJs, color: "#F7DF1E" }, { icon: SiTypescript, color: "#3178C6" },
            { icon: SiTailwindcss, color: "#38B2AC" }, { icon: FaReact, color: "#61DAFB" },
            { icon: SiNextdotjs, color: "#fffff" }, { icon: FaBootstrap, color: "#7952B3" },
            { icon: FaNodeJs, color: "#339933" }, { icon: SiFirebase, color: "#FFCA28" },
            { icon: SiMongodb, color: "#47A248" }
          ].map(({ icon: Icon, color }, index) => (
            <span key={index} className="bg-slate-950 p-4 rounded-xl shadow-lg">
              <Icon size={50} color={color} />
            </span>
          ))}
        </div>

        {/* Right - Experience Cards */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          
          {/* Experience Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold">Frontend Developer</h4>
            <p className="text-gray-400 mt-1">1+ Years Experience</p>
            <ul className="text-gray-300 mt-2 text-sm list-disc pl-4">
              <li>Worked with React.js, Next.js, and Tailwind CSS</li>
              <li>Developed scalable and responsive applications</li>
            </ul>
          </div>

          {/* Experience Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold">Backend Developer</h4>
            <p className="text-gray-400 mt-1">1+ Year Experience</p>
            <ul className="text-gray-300 mt-2 text-sm list-disc pl-4">
              <li>Worked with Node.js, MongoDB, and Firebase</li>
              <li>Developed RESTful APIs and authentication systems</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Experience;

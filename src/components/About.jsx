// import React from "react";
// import { IoArrowForward } from "react-icons/io5"
// import farhan from "../assets/farhan.png"

// function About(){
//     return(
//         <div className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-20 bg-opacity-30 rounded-lg p-12 ">
//             <div>
//                 <h2 className="text-2xl md:text-4xl font-bold">About</h2>
//                 <div className="md:flex flex-wrap md:flex-row items-center">
//                     <img className="md:h-80" src={farhan} alt="about_img" />
//                     <ul>
//                         <div className="flex gap-3 py-4">
//                             <IoArrowForward size={30} className="mt-1 text-emerald-400"/>
//                             <span className="w-96">
//                                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend Developer</h1>
//                                 <p className="text-sm md:text-md leading-tight">Plugin: vite:import-analysis
//                                 File: E:/My Portfolio/vite_project/src/components/About.jsx:2:31</p>
//                             </span>
//                         </div>
//                         <div className="flex gap-3 py-4">
//                             <IoArrowForward size={30} className="mt-1 text-emerald-400"/>
//                             <span className="w-96">
//                                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">backend Developer</h1>
//                                 <p className="text-sm md:text-md leading-tight">Plugin: vite:import-analysis
//                                 File: E:/My Portfolio/vite_project/src/components/About.jsx:2:31</p>
//                             </span>
//                         </div>
//                         <div className="flex gap-3 py-4">
//                             <IoArrowForward size={30} className="mt-1 text-emerald-400"/>
//                             <span className="w-96">
//                                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">software  Developer</h1>
//                                 <p className="text-sm md:text-md leading-tight">Plugin: vite:import-analysis
//                                 File: E:/My Portfolio/vite_project/src/components/About.jsx:2:31</p>
//                             </span>
//                         </div>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default About;


// import React from "react";
// import { FaLaptopCode, FaGraduationCap, FaUser } from "react-icons/fa";
// import { IoArrowForward } from "react-icons/io5";
// import farhan from "../assets/farhan.png";

// function AboutMe() {
//   return (
//     <div className="text-white bg-black shadow-xl mx-6 md:mx-20 bg-opacity-30 rounded-lg p-8 md:p-12">
      
//       {/* Section Title */}
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">About Me</h2>

//       {/* Profile Section */}
//       <div className="flex flex-col md:flex-row items-center gap-8">
//         <img
//           src={farhan}
//           alt="Muhammad Farhan Syed"
//           className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-emerald-500 shadow-lg"
//         />
//         <div className="text-center md:text-left">
//           <h3 className="text-2xl font-semibold">Muhammad Farhan Syed 👨‍💻</h3>
//           <p className="text-gray-400 mt-2">Frontend Developer | 2+ Years Experience</p>
//         </div>
//       </div>

//       {/* Experience & Education */}
//       <div className="flex flex-col md:flex-row justify-center gap-10 mt-10">
//         {/* Experience */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-64">
//           <FaLaptopCode size={40} className="text-emerald-500 mx-auto mb-4" />
//           <h4 className="text-xl font-semibold">Experience</h4>
//           <p className="text-gray-400 mt-2">2+ Years in Frontend Development</p>
//         </div>

//         {/* Education */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-64">
//           <FaGraduationCap size={40} className="text-emerald-500 mx-auto mb-4" />
//           <h4 className="text-xl font-semibold">Education</h4>
//           <p className="text-gray-400 mt-2">BS IT - BBSU (2025)</p>
//         </div>
//       </div>

//       {/* Skills Section */}
//       <div className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg">
//         <h3 className="text-xl font-semibold mb-6">Skills & Expertise</h3>
//         <ul>
//           <li className="flex items-start gap-4 mb-4">
//             <IoArrowForward size={30} className="text-emerald-400" />
//             <div>
//               <h4 className="text-lg font-semibold">Frontend Development</h4>
//               <p className="text-gray-400 text-sm">React.js, Next.js, Tailwind CSS, JavaScript, TypeScript</p>
//             </div>
//           </li>

//           <li className="flex items-start gap-4 mb-4">
//             <IoArrowForward size={30} className="text-emerald-400" />
//             <div>
//               <h4 className="text-lg font-semibold">Backend Development</h4>
//               <p className="text-gray-400 text-sm">Node.js, MongoDB, Firebase</p>
//             </div>
//           </li>

//           <li className="flex items-start gap-4">
//             <IoArrowForward size={30} className="text-emerald-400" />
//             <div>
//               <h4 className="text-lg font-semibold">Version Control & Deployment</h4>
//               <p className="text-gray-400 text-sm">Git, Vercel, Netlify</p>
//             </div>
//           </li>
//         </ul>
//       </div>

//       {/* Bio Section */}
//       <div className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg">
//         <h3 className="text-xl font-semibold mb-4">Who Am I?</h3>
//         <p className="text-gray-300 leading-relaxed">
//           I am **Muhammad Farhan Syed**, a passionate **Frontend Developer** with over **2 years of experience** in building dynamic web applications.  
//           I hold a **BS-IT** degree from **Benazir Bhutto Shaheed University, Karachi (2025)**.  
//           My expertise includes **React.js, Next.js, Firebase, Tailwind CSS, and MongoDB**.  
//           I am always eager to learn new technologies and improve my skills in modern web development.
//         </p>
//       </div>

//     </div>
//   );
// }

// export default AboutMe;

import React from "react";
import { FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import farhan from "../assets/profile1.png";

function AboutMe() {
  return (
    <div className="text-white bg-black shadow-xl mx-6 md:mx-20 bg-opacity-30 rounded-lg p-8 md:p-12">
      
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

      {/* Who Am I Section - Below the Cards */}
      <div className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Who Am I?</h3>
        <p className="text-gray-300 leading-relaxed">
        <p>👨‍💻 My name is Muhammad Farhan Syed, and I am 22 years old 🎂.</p>

<p>
  I completed my Matriculation in Computer Science in 2017 from Crescent School 🏫
  and my F.Sc. in 2019 from Baldia Degree 🎓.
</p>

<p>
  I graduated with a BS-IT 📚 from Benazir Bhutto Shaheed University (BBSUL), Karachi, Pakistan 🇵🇰, in 2025 🎉.
</p>

<p>
  💻 I am a Frontend Developer with 1+ years of experience, specializing in modern web development.
  I have built interactive and scalable web applications and have expertise in the following technologies:
</p>

<p>🛠️ <strong>Tech Stack:</strong></p>

<p>
  ✅ <strong>Frontend:</strong> HTML/CSS 🖥️, JavaScript/TypeScript ⚡, Bootstrap 🧱, Tailwind CSS 🌊, React.js ⚛️, Next.js 🚀.
</p>

<p>
  ✅ <strong>Backend:</strong> Node.js 🌿, Firebase 🔥, MongoDB 🍃.
</p>

<p>
  ✅ <strong>Version Control & Collaboration:</strong> Git 🗂️, GitHub 🌍.
</p>

        </p>
      </div>

    </div>
  );
}

export default AboutMe;

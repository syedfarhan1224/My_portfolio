// import React from "react";
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";

// function Footer(){
//     return(
//         <div id="Footer" className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center ">
//             <div>
//                 <h1 className="text-2xl md:text-6xl font-bold">contact</h1>
//                 <h3 className="text-sm md:text-2xl font-normal "> Feel Free to reach out!</h3>
//             </div>
//             <ul className="text-sm md:text-xl ">
//                 <li className="flex gap-2 items-center"><MdOutlineEmail size={20}/>syedfarhan@gmail.com</li>
//                 <li className="flex gap-2 items-center"><CiLinkedin size={20}/>linkedin.com/in/m-farhan-syed/</li>
//                 <li className="flex gap-2 items-center"><FaGithub size={20}/>github.com/syedfarhan1224</li>
//             </ul>
//         </div>
//     )
// }

// export default Footer;



import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-6 md:flex md:justify-between">
        
        {/* Left Section - Logo & Text */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold text-white">Muhammad Farhan Syed</h2>
          <p className="text-sm text-gray-400">Frontend Developer | 1+ Years of Experience</p>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex flex-wrap gap-6 text-sm">
          <a href="#About" className="hover:text-white">About</a>
          <a href="#Experince" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex gap-4 text-lg mt-4 md:mt-0">
          <a href="https://github.com/your-github" target="_blank" className="hover:text-white">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" className="hover:text-white">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com/your-facebook" target="_blank" className="hover:text-white">
            <FaFacebook />
          </a>
          <a href="mailto:syedfarhan1224398@gmail.com" className="hover:text-white">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-400 mt-6">
        <p>© {new Date().getFullYear()} Muhammad Farhan Syed. All Rights Reserved.</p>
        <p>Designed & Developed by <span className="text-white">Farhan Syed</span></p>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll"; // Import react-scroll

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-6 md:flex md:justify-between">
        
        {/* Left Section - Logo & Text */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold text-white">Muhammad Farhan Syed</h2>
          <p className="text-sm text-gray-400">MERN Stack Developer | 1+ Years of Experience</p>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex flex-wrap gap-6 text-sm">
          <Link to="about" smooth={true} duration={500} className="hover:text-white cursor-pointer">
            About
          </Link>
          <Link to="experience" smooth={true} duration={500} className="hover:text-white cursor-pointer">
            Experience
          </Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-white cursor-pointer">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-white cursor-pointer">
            Contact
          </Link>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex gap-4 text-lg mt-4 md:mt-0">
          <a href="https://github.com/syedfarhan1224" target="_blank" className="hover:text-white cursor-pointer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/m-farhan-syed/" target="_blank" className="hover:text-white cursor-pointer">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100022418505127" target="_blank" className="hover:text-white cursor-pointer">
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-400 mt-6">
        <p>© {new Date().getFullYear()} Muhammad Farhan Syed. All Rights Reserved.</p>
        <p>Designed & Developed by <span className="text-white">Syed Farhan</span></p>
      </div>
    </footer>
  );
}

export default Footer;

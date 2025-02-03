import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";

function Navbar({ scrollToSection, aboutRef, experianceRef, projectsRef, contactRef }) {
    const [menu, setMenu] = useState(false);

    return (
        <div className="flex justify-between items-center text-white px-10 py-6 md:px-20 bg-gray-900">
            <span className="text-2xl font-bold tracking-wide text-emerald-400">Syed Farhan</span> 
            <ul className={`md:flex gap-6 absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-auto px-10 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out ${menu ? "block" : "hidden"}`}>
                <li className="text-lg transition-all duration-300 p-2 md:p-0 hover:text-gray-400 cursor-pointer" onClick={() => scrollToSection(aboutRef)}>About</li>
                <li className="text-lg transition-all duration-300 p-2 md:p-0 hover:text-gray-400 cursor-pointer" onClick={() => scrollToSection(experianceRef)}>Experience</li>
                <li className="text-lg transition-all duration-300 p-2 md:p-0 hover:text-gray-400 cursor-pointer" onClick={() => scrollToSection(projectsRef)}>Projects</li>
                <li className="text-lg transition-all duration-300 p-2 md:p-0 hover:text-gray-400 cursor-pointer" onClick={() => scrollToSection(contactRef)}>Contact</li>
            </ul>
            <div className="md:hidden cursor-pointer">
                {menu ? (
                    <RiCloseLine 
                        size={30} 
                        className="absolute right-10 top-6 transition-all duration-300"
                        onClick={() => setMenu(false)}
                    />
                ) : (
                    <RiMenu2Line 
                        size={30} 
                        className="absolute right-10 top-6 transition-all duration-300"
                        onClick={() => setMenu(true)}
                    />
                )}
            </div>
        </div>
    );
}

export default Navbar;

// import React from "react"
// import Project_card from "./Project_card";

// function Projects(){
//     return(
//         <div id="projects" className="p-10 md:p-24 text-white">
//             <h1 className="text-2xl md:text-4xl text-white font-bold">project</h1>
//             <div className="py-12 px-5 flex flex-wrap gap-5">
//                 <Project_card 
//                     title="project1"
//                     main="this was made by using react js this was made by using react js " 
//                     />
//                 <Project_card 
//                     title="project2"
//                     main="this was made by using react js this was made by using react js " 
//                     />
//                 <Project_card 
//                     title="project3"
//                     main="this was made by using react js this was made by using react js " 
//                     />
//                 <Project_card 
//                     title="project4"
//                     main="this was made by using react js this was made by using react js " 
//                     />
//             </div>
//         </div>
//     )
// }

// export default Projects;

import React from "react";
import project2 from "../assets/appoitment_system.png"
import clock from "../assets/clock.png"
import echallan from "../assets/echallan.png"

const projects = [
  {
    id: 1,
    title: "Food Blogging App",
    description: "A modern food blogging app built with Next.js and Firebase.",
    image: project2, // Replace with actual image path
    demoLink: "https://doctor-appointment-six-sable.vercel.app/",
    codeLink: "https://github.com/syedfarhan1224/doctor_appointment",
  },
  {
    id: 2,
    title: "Event Planner",
    description: "A fully responsive event planning app with real-time updates.",
    image: echallan,
    demoLink: "https://e-challan-frontend-v1.vercel.app/?vercelToolbarCode=vyvKQG7RTjFX-UR",
    codeLink: "https://github.com/your-github",
  },
  {
    id: 3,
    title: "E-Commerce Store",
    description: "An interactive e-commerce store using React.js and MongoDB.",
    image: clock,
    demoLink: "https://clock-theta-nine.vercel.app/",
    codeLink: "https://github.com/syedfarhan1224/clock",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center">My Projects</h2>

      {/* Project Grid */}
      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="flex gap-4 mt-4">
              <a
                href={project.demoLink}
                target="_blank"
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-600 transition"
              >
                Live Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

import React from "react"
import bannerImg from "../assets/project2.jpg"

function Project_card({title , main}){
    return(
        <div id="projects" className="p-3 md:p-6 flex flex-col w-80 bg-slate-950 shadow-xl shadow-slate-900 rounded-2xl">
            <img  src={bannerImg} alt="project_img" className="p-4 "></img>
            <h3 className="px-4 text-xl md:text-2xl leading-normal font-bold">{title}</h3>
            <p className="px-4 text-sm md:text-md leading-tight py-2 ">{main}</p>
            <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4 ">
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]  ">Demo</button>
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]  ">Source Code </button>
            </div>
        </div>
    )
}

export default Project_card;
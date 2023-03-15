import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { projectsDaniela } from '../daniela/projectsDaniela';

const Projects=({nav,setNav})=>{
    return(
        <div id='projects' className="w-full  bg-white p-6">
            <h1 className="w-full text-3xl font-bold text-center text-[#00df9a]" id="projectm">Projects</h1>
            <div className="flex flex-wrap justify-center gap-7">
                {projectsDaniela.map(({imageSrc,name,projectLink,description})=>
                    <div className='mt-5 relative  rounded-[12px] w-[300px] h-[350px] p-5 border-solid border-2 border-[#00df9a]'>
                        <a href={projectLink} className='flex items-center gap-1 mb-5 absolute right-[-10px] rounded-md p-2 w-[130px] text-1xl bg-[#00df9a]'><FaGithub/>open project</a>
                        <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a] '>{name}</h2>
                        <p className='text-[#ccc] lg:text-1xl text-justify'>{description}</p>
                        <img src={imageSrc} className="rounded-[12px] h-[150px] mx-auto" alt=""  id="image2"/>
                         </div>
                )}
                 <div id="linkmenu">
                    <a href="http://localhost:3000/">Menu👆🏻</a> 
                    </div> 
            </div>
        </div>
    )   
}
export default Projects;
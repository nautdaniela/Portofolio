import React from 'react';



const NavBar=({nav,setNav})=>{
    
    return(
        <div id="home" className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <h1  id ="namenav" className="flex w-full text-3xl font-bold text-[#00df9a]">👩🏻‍💻 <p id="who">I'm</p> Daniela, <p id="who"> web developer</p> <a id="download" href={require('../assets/resume/resume.pdf')} download='resume.pdf'>Download CV 📩</a></h1>
            <ul className="hidden md:flex" onClick={()=>{setNav(false)}} id="navbar">
                <li className="p-4" id="navli">
                    <a href="http://localhost:3000/">
                        About
                    </a>
                </li>      
                <li className="p-4" id="navli3">
                    <a href="#projects">
                        Projects
                    </a>
                </li>
                <li className="p-4" id="navli1">
                    <a href="#experience">
                        Experience
                    </a>
                </li>
                <li className="p-4" id="navli2">
                    <a href="#book">
                        Referencies
                    </a>
                </li>
                <li className="p-4" id="navli4">
                    <a href="#details">
                        Contact
                    </a>
                </li>
            </ul>
           
        
        </div>
    )
}
export default NavBar;
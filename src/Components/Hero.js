import React from 'react';
import avatar from '../assets/avatar.jpg';

import {
    FaYahoo,
    FaFacebookSquare,
    FaGithubSquare,
    FaLinkedin,
} from 'react-icons/fa';

const Hero = ({ nav, setNav })=>{
    return(
        <div className="text-white" onClick={() => { setNav(false) }} >
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto  text-center flex flex-col justify-center">
                <div className = "about">
                <div className=''>
                     <img src={avatar} id="imgprofile" className="md:w-[100px] md:h-[100px] md:mt-10 w-[70px] h-[70px] mx-auto mt-48 rounded-full hover:scale-2 hover:rotate-90" alt="" />
                </div>
                   <div>
                <div className='flex md:w-[75%] my-6 justify-between'>
                <a  id ="icons" href="https://www.linkedin.com/in/daniela-naut-87a9a510a">
                        <FaLinkedin size={30}/></a>
                <a  id ="icons2" href="https://www.linkedin.com/in/daniela-naut-87a9a510a"><FaYahoo size={30}/></a>
                <a id ="icons" href="https://github.com/nautdaniela"><FaGithubSquare size={30}/></a>
                <a  id ="icons2" href="https://www.linkedin.com/in/daniela-naut-87a9a510a"><FaFacebookSquare size={30}/></a>
        
                    
                </div>
                    <p className="md:text-3xl sm:text-1xl text-xl font-bold" strings={['Daniela Front-End 😎']} typeSpeed={120} backSpeed={140} loop/>
                </div>
                <p className='md:text-1xl font-bold-300 text-gray-600'>😎Hello! I am a web developer with focus on front-end development.😎 Contact me on:</p>
                   <button  id="btnlink1" className='bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 p-2 text-black'><a href="https://www.linkedin.com/in/daniela-naut-87a9a510a" target="_blanck">LinkedIn</a></button>  
                   </div>
            </div>
        </div>
    )
}
export default Hero;
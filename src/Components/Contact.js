import React from 'react';
import avatar from '../assets/avatar.jpg';

import {
    FaYahoo,
    FaFacebookSquare,
    FaGithubSquare,
    FaLinkedin,
} from 'react-icons/fa';

const Contact=({ nav, setNav })=>{
    return(
        <div onClick={() => { setNav(false) }} className="p-5" >
            <p><span className="text-center text-3xl font-bold text-[#00df9a] p-5" class="contactme">Contact</span></p>
            <div className="m-auto max-w-screen-md p-6" class="secondSection">
                <div className="flex flex-wrap gap-5">
                    <input className="w-[100%] lg:w-[350px] h-12 rounded-md p-3" placeholder="Name" type="text"  id="name"/>
                    <input className="w-[100%] lg:w-[350px]  h-12 rounded-md p-3" placeholder="Email" type="text" id="email"/>
                </div>
                <textarea className="w-[100%] h-40 my-6 rounded-md p-3 "  placeholder="Message..." name="" id="subject" ></textarea>
                <button className="bg-[#00df9a] text-black w-[100%] md:w-[200px] rounded-md font-medium px-6 py-3" class="sendBtn"><a href="https://mail.yahoo.com/d/compose/9752500337">Submit</a></button>
                  </div>
            <div onClick={() => { setNav(false) }} id='details' className="max-w-[1240px] mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div class="contme">
            <h1 className="flex w-full text-3xl font-bold text-[#00df9a]" id="named"><img src={avatar} className="w-[40px] ml-2 h-[40px] rounded-full" alt=""/></h1>
                
                <div className='flex md:w-[75%] my-6 justify-between'>
                <a href="https://www.linkedin.com/in/daniela-naut-87a9a510a">
                        <FaLinkedin size={30}/>
                    <FaYahoo size={30}/>
                    <a href="https://github.com/nautdaniela">
                        <FaGithubSquare size={30}/>
                    <FaFacebookSquare size={30}/>
                    </a>
                </a>
                    <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Front-End <span id="nameD">Developer</span></h1>
               
                </div>
            </div>
           </div>
           <div id="linkmenu1">
                    <a href="http://localhost:3000/">Menu👆🏻</a> 
                    </div> 
        </div>
        
    )
}

export default Contact;


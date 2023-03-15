import React from 'react';
import tecnologiesImage from "../daniela/technologiesDaniela";

const Tecnologies = ({ nav, setNav }) => {
    return (
        <div onClick={() => { setNav(false) }} id='tecnologies' className=' w-full  bg-black'>
            <div className="max-w-[1240px] mx-auto grid grid-cols-8 py-16 px-4">
                {
                    
                    tecnologiesImage.map(({src,alt})=>(
                        <img src={src} alt={alt}/>
                        
                    ))
                }
            </div>
          
        </div>
    )
}
export default Tecnologies;
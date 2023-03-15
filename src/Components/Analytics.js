import React, {useState, useEffect} from 'react';
import tecnologiesImage from "../daniela/technologiesDaniela";


const Analytics = ({ nav, setNav })=>{
   
        const [isVisible, setIsVisible] = useState({
            id: "comOne",
        });
    
        useEffect(() => {
            console.log(isVisible);
        },[isVisible]);
    
        const toggleDiv = (e) => {
            setIsVisible({
                id: e.target.id, 
            });
        };


    return(
        <div onClick={() => { setNav(false) }} id='about' className=" w-full bg-white py-16 px-4">
               <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                   <div className='flex flex-col justify-center '>
                   <h2 id="realname" className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">My skills and my aspirations as web developer</h2>
                
                       <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2' id="textme"> About me</h1>
                       <p className='text-justify' id="textabout">I am a front-end developer, ambitious, hyper-focused and looking for growth in this field.I am passionate about technology. My aspiration is to become the best in this field. I have very good project management skills, team spirit, stress resistance and can easily adapt to dynamic working conditions. I believe that my dedication and ambition have helped me to successfully manage and complete any task assigned to me.</p>
                       
                   </div>
               </div>



<div id="home">
         <div className="row">
            <h2 className="mb-5 text-center">
                Details Technologies Passions
            </h2>
            <br/>

            <div className="col-4">
                <div className="d-grid mb-4">
                    <button
                        id="comOne"
                        onClick={(e) => {
                            toggleDiv(e);
                        }}
                        className="btn btn-primary"
                    >
                        Name Mail Phone
                        </button>    
                </div>
                <div className={isVisible.id === "comOne" ? `comOne` : "comOne d-none"}>
                <div class="details">
                                                <ul>
                                                    <li>
                                                        <span>Năut Nicoleta Daniela</span>
                                                    </li>
                                                    <li>
                                                      <span class="linkmail"><a href="mail.yahoo.com" >nautnicoletadaniela@yahoo.com</a></span>
                                                    </li>
                                                    <li>
                                                      <span>+40 747 388 622</span>
                                                    </li>
                                                 </ul>
                                            </div>
                </div>
                </div>
           
                
                <div className ="col-4">
                        <div className="d-grid mb-4">
                            <button
                                id="comTwo"
                                onClick={(e) => {
                                    toggleDiv(e);
                                }}
                                className="btn btn-success"
                            >Technologies</button>
                        </div>
                        <div className={isVisible.id === "comTwo" ? `comTwo` : "comTwo d-none"}>
                    <p>
                    <div onClick={() => { setNav(false) }} id='tecnologies' className=' w-full  bg-black'>
            <div className="max-w-[1240px] mx-auto grid grid-cols-8 py-16 px-4">
                {
                    tecnologiesImage.map(({src,alt})=>(
                        <img src={src} alt={alt}/>
                    ))
                }
            </div>
        </div>
                    </p>
                </div>
                 </div>

                 <div className="col-4">
                <div className="d-grid mb-4">
                    <button
                        id="comThree"
                        onClick={(e) => {
                            toggleDiv(e);
                        }}
                        className="btn btn-primary"
                    >
                       Passions and Personal values
                        </button>    
                </div>
                <div className={isVisible.id === "comThree" ? `comThree` : "comThree d-none"}>
                    <p>
                        Passions: Music, IT community, Travel
                        Values:Leadership,Challenge,Knowledge
                    </p>
                </div>
                </div>
           
         </div>
        

</div>
           </div>
       );
   }



   export default Analytics;

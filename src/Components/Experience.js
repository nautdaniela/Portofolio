import React from 'react';


const Experience = ({ nav, setNav })=>{
    return(
        <div onClick={() => { setNav(false) }} id="experience" className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3"> 
                <div className="lg:col-span-2 my-4" id="expall">
                    <table>
                        <tr>
                            <td><h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2" id="experience2">
                                Experience </h1>
                    <div class="exp1">
                    <h3>Web Development – JavaScript - Course Online</h3>
                    <p>SCOALA INFORMALA DE IT - BUCURESTI,
                        Project use HTML, CSS, JAVASCRIPT, React, Git, Bootstrap</p>
                        <p>2022-10 ~ 2023-03</p></div>
                    <div class="exp2">
                    <h3>Junior Developer-graduation Certificate-Frontend</h3>
                    <p>HELLO IT FACTORY – CLUJ NAPOCA, SIGHISOARA
                        Project use HTML, CSS, JAVASCRIPT</p>
                        <p>2021-05 ~ 2022-08</p></div>

                        <div class="exp3">
                    <h3>Computer Network Administrator</h3>
                    <p>SC BRIKSTON CONSTRUCTION SOLUTION SA, SIGHISOARA 
                        Computers administration and update company website with Wordpress
                        My Sql, Wordpress,Elementor, Windows 10,Office 2019, Google Chrome
                        Emails and install ERP software and Printers and Webcams
                    </p>
                    <p>2016-01 ~ 2021-07</p></div>
                   
                    </td>
                        </tr>
                                               <tr>
                            <td><h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2" id="experience3">Education</h1>
                    <div class="edu1">
                    Master of Science: <h3> Computer Tehnologies in Computational Optimization
                    </h3>
                    <p>Transilvania Univeristy Of Brasov - Brasov, Romania</p>
                    <p>2008-10 ~ 2010-07</p>
                   
                    </div>
                    <div class="edu2">
                    Bachelor of Science:<h3> Computer Science</h3>
                    <p>1 Decembrie 1918 University of Alba Iulia - Alba Iulia, Romania</p>
                    <p>2005-10 ~ 2008-07</p>
                    </div>

                       </td>
                        </tr>
                    </table>
                    
                    <div id="linkmenu">
                    <a href="http://localhost:3000/">Menu👆🏻</a> 
                    </div>        
                </div>
                
            </div>
         </div>
    ) 
}
export default Experience;
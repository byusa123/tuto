
import React,{Component,useState} from 'react';
import './css/tailwindcss.css';


function Navbar(){
    return(
        <>
    <div class="bs-example">
    <nav class="navbar navbar-expand-md navbar-light  bg-light">
    <a href="#" class="nav-item nav-link active">
                    <div className="text-2xl font-bold"><span className="text-blue-800">Umwarimu</span><span className="text-blue-400 text-bold">Toto</span></div>
                    
                </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
               
                
            </div>
            <div className="px-3 ml-auto navbar-nav">
               <a herf="" className="px-3 text-gray-400 - nav-item nav-link">Become a tutor</a>
               <a herf="" className="px-3 text-gray-400 - nav-item nav-link">Find a tutor</a>
               <a href="#" className="px-3 text-gray-400 - nav-item nav-link">Login</a>
            </div>
            
            <div class="navbar-nav ml-auto">
                
            <button className="px-4 text-white bg-blue-400 rounded-full ">
                <a href="#" className="text-white nav-item nav-link ">sign up</a>
            </button>
                
                
                
            </div>
        </div>
    </nav>
</div>
   
</>

    )
    
}

export default Navbar;
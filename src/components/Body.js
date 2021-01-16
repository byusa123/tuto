import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import Navbar from './Navbar';
//importing images
import svg from '../images/svg.png';
import svgog from '../images/svgog.png';


function Body(){
    return (
        <>
        <Navbar />
        
        <div className="flex-wrap mt-20 md:flex">
            <div className="w-full md:mt-32 sm:mt-5 md:w-1/2">
                <div className="px-32 md:text-3xl sm:mr-10">
                <span className="font-bold text-blue-800 md:w-full ">
                    The Right Platform to 
                    learn with the best
                    Tutos,
                </span>
                </div>

                <div className="w-full px-10 mt-20 sm:px-10 md:px-32 ">
                    
                <div class="input-group md-form  form-2 pl-0">   
                <span className="p-1 text-white bg-blue-800 rounded-l-full ">By Filter </span>
                <input class="form-control my-0 py-1    rounded-full border-blue-400" type="text" placeholder="Find Subject" aria-label="Search"/>
                <div class="input-group-append">
                <span class="input-group-text rounded-full border-blue-400 bg-blue-800 " id="basic-text1"><i class="fas fa-search text-white"
                    aria-hidden="true"></i></span>
                </div>
                </div>
                </div>

            </div>
            <div className="w-full mt-15 md:w-1/2">
                <img src={svgog} />

            </div>
        </div>
        {/* why umwarimu tuto */}

        <div class="bg-gradient-to-t text-center mt-5 from-blue-400 to-teal-500">
        
        <h3 className="text-2xl font-bold md:mt-4 umu">Why UmwarimuTuto</h3>
        
            <div className="flex flex-wrap px-5 py-5 ">
            
                <div className="w-full px-4 py-5 md:w-1/3 "> 
                    <div className="px-10 py-5 bg-white rounded-l sm:mt-5">
                        <h3 className="py-3 bg-teal-400 bookico"><i class="fa fa-address-book" aria-hidden="true"></i></h3> 
                      <h3 className="mt-4 font-bold text-blue-500 ">Outstanding Tutor</h3>
                    <h5 className="mt-5"> In publpanmr-5 ishi-5ng and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
                         document or a typeface without relying on meaningful content. Wikipedia</h5>
                    
                    </div>
                </div>
                <div className="w-full px-4 py-5 md:w-1/3 "> 
                    <div className="px-10 py-5 bg-white rounded-l sm:mt-5">
                        <h3 className="py-3 bg-teal-400 bookico"><i class="fa fa-address-book" aria-hidden="true"></i></h3> 
                      <h3 className="mt-4 font-bold text-blue-500 ">Outstanding Tutor</h3>
                    <h5 className="mt-5"> In publpanmr-5 ishi-5ng and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
                         document or a typeface without relying on meaningful content. Wikipedia</h5>
                    
                    </div>
                </div>
                <div className="w-full px-4 py-5 md:w-1/3 "> 
                    <div className="px-10 py-5 bg-white rounded-l sm:mt-5">
                        <h3 className="py-3 bg-teal-400 bookico"><i class="fa fa-address-book" aria-hidden="true"></i></h3> 
                      <h3 className="mt-4 font-bold text-blue-500 ">Outstanding Tutor</h3>
                    <h5 className="mt-5"> In publpanmr-5 ishi-5ng and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
                         document or a typeface without relying on meaningful content. Wikipedia</h5>
                    
                    </div>
                </div>
               
                
            </div>
     

   
     </div>


    {/* how it works */}

    <div className="flex flex-wrap ">

    

        
        <div className="w-full md:w-1/2">
        <h3 className="px-32 mt-32 font-bold text-blue-500 ">Search by subject name</h3>
        <h5 className="px-32 mt-2">From the subject you will get a list of matching tutor for your session</h5>
        </div>
        <div className="w-full md:w-1/2"></div>
        
        
    </div>


    <div className="flex flex-wrap ">
    
        
        
        <div className="w-full md:w-1/2">
        </div>
        <div className="w-full md:w-1/2">
        <h3 className="px-32 mt-32 font-bold text-blue-500 ">Search by subject name</h3>
        <h5 className="px-32 mt-2">From the subject you will get a list of matching tutor for your session</h5>
        </div>
        
        
    </div>


    <div className="flex flex-wrap ">
    
    
        
        
    <div className="w-full md:w-1/2">
    <h3 className="px-32 mt-32 font-bold text-blue-500 ">Search by subject name</h3>
    <h5 className="px-32 mt-2">From the subject you will get a list of matching tutor for your session</h5>
    
    </div>
    <div className="w-full md:w-1/2">
    
    </div>
    
    
</div>


<div className="flex flex-wrap ">

    
    
    <div className="w-full md:w-1/2">

        </div>
    <div className="w-full md:w-1/2">
    <h3 className="px-32 mt-32 font-bold text-blue-500 ">Search by subject name</h3>
    <h5 className="px-32 mt-2">From the subject you will get a list of matching tutor for your session</h5>
    

    
    </div>
    
    
</div>
<div class="bg-gradient-to-t text-center from-blue-400 to-teal-500">
<h3 className="text-2xl font-bold md:mt-4 umu">Join Now</h3>
<div className="flex flex-wrap px-22">
<div className="w-full mt-3 px10 md:w-1/2">
<MDBBtn color="primary w-50 rounded-full" outline rounded>Become a Tutor</MDBBtn>
</div>
<div className="w-full mt-3 mb-5 px10 md:w-1/2">
<MDBBtn rounded color="info w-50 rounded-full">Become a student</MDBBtn>


</div>
</div>
</div>
    
    

   

    
    

    

   
        
       
    </>
    

    )

  
}

export default Body;
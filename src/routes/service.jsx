import React from "react";
import Coding from '../assets/coding.jpg';

function Service() {
  return (
    <div className="bg-black h-screen overflow-hidden text-white">
      
      <div className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl  font-bold mb-4">
          My Service
        </h1>
        <p className="text-gray-400">Home / Service</p>
      </div>

    
      <div className="flex flex-row items-center justify-around gap-10 pb-20">
        
  
        <div className="max-w-xl text-gray-300 leading-7">
          <p>
            As a student developer,
            I create simple websites and landing pages with clean designs.
              I focus on building clear and user-friendly interfaces and turning ideas into functional
              web pages using technologies like React and Tailwind CSS.
          </p>
        </div>
      
          <img src={Coding} alt="" className="w-1/4 h-64 bg-gray-700 flex items-center justify-center rounded-lg" />    
        </div>
      </div>
    
  );
}

export default Service;
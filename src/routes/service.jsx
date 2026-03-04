import React from "react";
import Coding from '../assets/coding.jpg';


function Service() {
  return (
    <div className="bg-black text-white px-6 h-screen w-screen bg-cover flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        

        <h1 className="text-5xl font-bold leading-30">
          Service
        </h1>
        

        <div className="flex flex-col items-center justify-around gap-10 pb-10 font-Poppins">

          <div className="w-full max-w-md h-64 bg-gray-700 flex items-center justify-center rounded-lg shadow-lg">
            <img src={Coding} alt="" />
          </div>
          
          <div className="max-w-xl text-gray-300 leading-7">
            <p className="mb-4">
              As a student developer, I create simple websites and landing pages. My focus is on turning your ideas into a functional web presence that <strong>attracts ideal customers and generates leads</strong>.
            </p>

            <h3 className="text-xl font-semibold mb-2">What you'll get:</h3>
            <ul className="list-disc list-inside text-left max-w-md mx-auto space-y-2">
              <li> Student developer who values learning and improvement.</li>
              <li> Clean and organized website that are easy to use.</li>
              <li> functional web page built with React and Tailwind CSS.</li>
              <li> Clear communications and responsible project delivery.</li>
            </ul>
          </div>
        </div>



        <div className="mt-10">
          <a
            href="/ContactMe"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-teal-400 hover:bg-teal-500 md:py-4 md:text-lg md:px-10 transition duration-300"
          >
            Let's Start a Project Together
          </a>
        </div>

      </div>
    </div>
  );
}

export default Service;

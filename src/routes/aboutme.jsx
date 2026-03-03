import React from "react";
import Profile from "../assets/profile.jpg";

function AboutMe() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-72 h-72 md:w-80 md:h-80 bg-gray-700 rounded-xl flex items-center justify-center shadow-lg">
            <img src={Profile} alt="" className="rounded-xl" />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I am a passionate developer focused on building clean and 
            responsive web applications. I enjoy turning complex problems 
            into simple, beautiful, and intuitive designs.
          </p>
          <p className="text-gray-400">
            My goal is to continuously improve my skills and create impactful 
            digital experiences.
          </p>

          <button className="mt-4 px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-300 transition duration-300">
            Download CV
          </button>
        </div>

      </div>
    </section>
  );
}

export default AboutMe;
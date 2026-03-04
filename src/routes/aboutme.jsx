import React from 'react';
import Profile from '../assets/profile.jpg'; 

function AboutMe() {
  const skills = ["React", "Tailwind CSS", "JavaScript", "Node.js", "UI/UX"];

  return (
    <section className="bg-black text-white pb-20 w-full h-screen flex items-center justify-center bg-cover">

      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-center items-center gap-12">
        

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="      w-64 h-64 md:w-80 md:h-80 bg-gray-700 rounded-full shadow-2xl overflow-hidden border-4 border-orange-500 transform transition duration-500 hover:scale-105">
            <img src={Profile} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>


        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-orange-500 tracking-tight">
            About <span className="text-white">Me</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I am a passionate student developer focused on building clean, functional websites. 
            I enjoy turning complex problems into simple, beautiful, and intuitive user experiences.
          </p>
          <p className="text-gray-400">
            My goal is to continuously improve my skills, adopt new technologies, and create impactful digital solutions.
          </p>


          <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-800 text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>

          <button className="mt-6 p-8 py-3 bg-orange-500 text-white rounded-full font-bold hover:bg-white hover:text-black transition duration-300 shadow-md">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

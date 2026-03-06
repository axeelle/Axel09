import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../assets/profile.jpg';
import { IoGameControllerSharp } from 'react-icons/io5';
import { MdSportsBasketball } from 'react-icons/md';
import { IoMdMusicalNotes } from 'react-icons/io';

function Home() {
  return (
    // Changed pt-20 to py-20 to ensure bottom spacing and removed rigid lg:flex-row constraints
    <section className="min-h-screen bg-gray-950 text-white flex flex-col lg:flex-row items-center justify-center lg:justify-around py-20 px-6 md:px-10 lg:px-20 gap-12 overflow-y-auto">
      
      {/* TEXT SECTION */}
      <div className="max-w-xl space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
        <div>
          <p className="text-gray-400 text-lg">Hi! I am</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white font-Poppins">
            Axel De las Alas
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-amber-700 pt-2">
            MY PORTFOLIO
          </h2>
        </div>

        {/* HOBBIES ICONS */}
        <ul className="flex gap-6 text-white text-4xl md:text-5xl">
          <li className="hover:text-amber-600 cursor-pointer transition">
            <IoGameControllerSharp />
          </li>
          <li className="hover:text-amber-600 cursor-pointer transition">
            <MdSportsBasketball />
          </li>
          <li className="hover:text-amber-600 cursor-pointer transition">
            <IoMdMusicalNotes />
          </li>
        </ul>

        {/* BUTTONS */}
        <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
          <Link to="/contactme" className="bg-amber-700 px-6 py-3 rounded-xl text-white font-semibold hover:bg-amber-600 transition shadow-lg">
            Hire Me
          </Link>
          <a href="#" download className="border border-white px-6 py-3 rounded-xl text-white font-semibold hover:bg-white hover:text-black transition">
            Download CV
          </a>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-6 bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden text-center w-full max-w-md lg:max-w-full">
          <div className="py-6 border-b sm:border-b-0 sm:border-r border-gray-700">
            <p className="text-amber-600 text-2xl font-bold">3+</p>
            <p className="text-gray-400 text-xs md:text-sm mt-1 uppercase tracking-wider">Years Learning</p>
          </div>
          <div className="py-6 border-b sm:border-b-0 sm:border-r border-gray-700">
            <p className="text-amber-600 text-2xl font-bold">3+</p>
            <p className="text-gray-400 text-xs md:text-sm mt-1 uppercase tracking-wider">Academic Projects</p>
          </div>
          <div className="py-6">
            <p className="text-amber-600 text-2xl font-bold">3+</p>
            <p className="text-gray-400 text-xs md:text-sm mt-1 uppercase tracking-wider">Team Collaborations</p>
          </div>
        </div>
      </div>

      {/* IMAGE SECTION */}
<div className="relative flex justify-center order-1 lg:order-2 mt-120 md:mt-0"> {/* Added mt-10 for mobile */}
  <div className="absolute inset-0 bg-amber-700 blur-[80px] opacity-20 rounded-full"></div>
  <img 
    src={Profile} 
    alt="Axel" 
    className="relative w-64 md:w-80 lg:w-96 rounded-3xl shadow-2xl border-4 border-gray-800 object-cover" 
    // Removed sm:mt-100 and md:mt-100
  />
</div>
      
    </section>
  );
}

export default Home;

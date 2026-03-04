import React from "react";
import { Link } from "react-router";
import Profile from "../assets/profile.jpg";
import { IoGameControllerSharp } from "react-icons/io5";
import { MdSportsBasketball } from "react-icons/md";
import { IoMdMusicalNotes } from "react-icons/io";

function Home() {
  return (
    <section className="h-screen overflow-hidden flex items-center justify-around md:px-16 bg-linear-to-r from-gray-950 to-gray-900">


      <div className="max-w-xl space-y-6">

        <div>
          <p className="text-gray-300 text-lg">Hi! I am</p>

          <h1 className="text-4xl font-semibold text-white font-Poppins">
            Axel De las Alas
          </h1>

          <h2 className="text-7xl font-bold text-amber-700 pt-2">
            MY PORTFOLIO
          </h2>
        </div>

        <ul className="flex gap-6 text-white text-5xl">
          <li className="hover:text-amber-600 cursor-pointer transition"><IoGameControllerSharp/></li>
          <li className="hover:text-amber-600 cursor-pointer transition"><MdSportsBasketball/></li>
          <li className="hover:text-amber-600 cursor-pointer transition"><IoMdMusicalNotes/></li>
        </ul>

   
        <div className="flex gap-4">
          <Link
            to="/contactme"
            className="bg-amber-700 px-6 py-3 rounded-xl text-white font-semibold hover:bg-amber-600 transition shadow-lg"
          >
            Hire Me
          </Link>

          <a
            href="#"
            download
            className="border border-white px-6 py-3 rounded-xl text-white font-semibold hover:bg-white hover:text-black transition"
          >
            Download CV
          </a>
        </div>

   
        <div className="grid grid-cols-3 mt-8 bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden text-center">

          <div className="py-6">
            <p className="text-amber-600 text-2xl font-bold">3+</p>
            <p className="text-gray-300 text-sm mt-1">Years Learning</p>
          </div>

          <div className="py-6 border-x border-gray-700">
            <p className="text-amber-600 text-2xl font-bold">3+</p>
            <p className="text-gray-300 text-sm mt-1">Academic Projects</p>
          </div>

          <div className="py-6">
            <p className="text-amber-600 text-2xl font-bold">3+</p>
            <p className="text-gray-300 text-sm mt-1">Team Collaborations</p>
          </div>

        </div>

      </div>

      <div className="relative">

        
        <div className="absolute inset-0 bg-amber-700 blur-3xl opacity-20 rounded-full"></div>

        <img
          src={Profile}
          alt="Axel"
          className="relative w-87.5 rounded-3xl shadow-2xl border-4 border-gray-800"
        />

      </div>

    </section>
  );
}

export default Home;
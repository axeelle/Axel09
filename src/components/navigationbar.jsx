import React from 'react';
import { NavLink } from 'react-router-dom'; // 1. Import NavLink instead of Link
import { BiLogoReact } from 'react-icons/bi';

function Navigationbar() {
 
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "px-4 underline text-orange-600 font-bold"
      : "px-4 hover:underline hover:text-orange-600 text-white"; 

  return (
    <nav className="flex flex-row justify-around pt-5 bg-black">
      <div>
        <h1 className="text-orange-600 font-extrabold text-6xl"><BiLogoReact /></h1>
      </div>
      <div className="flex flex-row justify-center">
        <ul className="flex text-white cursor-pointer gap-5">
        
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/Service" className={navLinkClass}>Service</NavLink>
          <NavLink to="/AboutMe" className={navLinkClass}>AboutMe</NavLink>
          <NavLink to="/Portfolio" className={navLinkClass}>Portfolio</NavLink>
          <NavLink to="/ContactMe" className={navLinkClass}>Contact me</NavLink>
        </ul>
      </div>
      <div className="">
        <button className="text-white bg-orange-800 py-3 px-10 rounded-2xl">Hire Me</button>
      </div>
    </nav>
  );
}

export default Navigationbar;

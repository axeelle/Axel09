import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiLogoReact } from 'react-icons/bi';
import { DiGithubBadge } from 'react-icons/di';
import { GiHamburgerMenu } from 'react-icons/gi'; // Added for mobile
import { AiOutlineClose } from 'react-icons/ai'; // Added for close button

function Navigationbar() {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu

    const navLinkClass = ({ isActive }) => 
        isActive 
            ? "block md:inline px-4 py-2 md:py-0 underline text-orange-600 font-bold" 
            : "block md:inline px-4 py-2 md:py-0 hover:underline hover:text-orange-600 text-white";

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black p-4 shadow-lg">
            <div className="flex flex-row justify-between items-center">
                {/* Logo */}
                <div>
                    <h1 className="text-blue-300 font-extrabold text-4xl md:text-6xl"><BiLogoReact /></h1>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white text-3xl">
                        {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                    </button>
                </div>

                {/* Desktop Menu - Hidden on mobile */} 
                <div className="hidden md:flex flex-row justify-center">
                    <ul className="flex text-white cursor-pointer gap-5 font-Poppins">
                        <NavLink to="/" className={navLinkClass}>Home</NavLink>
                        <NavLink to="/Service" className={navLinkClass}>Service</NavLink>
                        <NavLink to="/AboutMe" className={navLinkClass}>AboutMe</NavLink>
                        <NavLink to="/Portfolio" className={navLinkClass}>Portfolio</NavLink>
                        <NavLink to="/ContactMe" className={navLinkClass}>ContactMe</NavLink>
                    </ul>
                </div>

                {/* GitHub - Hidden on mobile, shown on desktop */}
                <div className="hidden md:block">
                    <a className="text-amber-50 text-6xl" href="https://github.com/axeelle/Axel09"><DiGithubBadge/></a>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden mt-4 bg-black text-white p-4">
                    <ul className="flex flex-col gap-3 font-Poppins">
                        <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>Home</NavLink>
                        <NavLink to="/Service" className={navLinkClass} onClick={toggleMenu}>Service</NavLink>
                        <NavLink to="/AboutMe" className={navLinkClass} onClick={toggleMenu}>AboutMe</NavLink>
                        <NavLink to="/Portfolio" className={navLinkClass} onClick={toggleMenu}>Portfolio</NavLink>
                        <NavLink to="/ContactMe" className={navLinkClass} onClick={toggleMenu}>ContactMe</NavLink>
                    </ul>
                </div>
            )}
        </nav>
    );  
}

export default Navigationbar;

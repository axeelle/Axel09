import React from "react"
import { Link } from "react-router"
function Navigationbar() {

  return (

        <nav className="flex flex-row justify-around pt-5">
            <div>
              <h1 className=" text-orange-600 font-extrabold text-3xl ">logo</h1>
            </div>
            <div className="flex flex-row justify-center">
              <ul className="flex text-white cursor-pointer gap-5">
                <Link to="/Home"className="px-4 hover:underline hover:text-orange-600">Home</Link>
                <Link to="/Service"className="px-4 hover:underline hover:text-orange-600">Service</Link>
                <Link to="/AboutMe" className="px-4 hover:underline hover:text-orange-600">AboutMe</Link>
                <Link to="/Portfolio" className="px-4 hover:underline hover:text-orange-600">Portfolio</Link>
                <Link to="/ContactMe" className="px-4 hover:underline hover:text-orange-600">Contact me</Link>
              </ul>
            </div>
            <div className="">  
              <button className=" text-white bg-orange-800 py-3 px-10 rounded-2xl">Hire Me</button>
            </div>
        </nav>
    )
}
export default Navigationbar
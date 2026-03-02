import React from "react"

function home() {

  return (
    
        <div className="flex flex-col justify-between h-full"> 
          <content className="flex flex-col grow justify-center gap-5 pl-7">
            <h1 className="text-2xl text-white">hi! I am</h1>
            <h1 className="text-2xl text-white">Axel De las ALas</h1>
            <h1 className=" text-7xl text-amber-800">MY PORTFOLIO</h1>
            <icon>
              <ul className=" inline-flex gap-5 text-white">
                <li>icon1</li>
                <li>icon2</li>
                <li>icon3</li>
                <li>icon4</li>
              </ul>
            </icon>
            <buttonn className="flex gap-5">
              <button className=" bg-orange-800 rounded-2xl px-6 py-2 text-white">Hire Me</button>
              <button className=" bg-black border rounded-2xl px-6 py-2 text-white">Download CV</button>
            </buttonn>
            <others>
                <ul className="inline-grid grid-cols-3 border-2 border-white text-white bg-gray-900 rounded-2xl py-5 divide-x divide-white">
                  <li className="px-6 text-amber-800 text-center font-bold">5+</li>
                  <li className="px-6 text-amber-800 text-center font-bold">20+</li>
                  <li className="px-6 text-amber-800 text-center font-bold">80+</li>
                  <li className="px-6 text-sm text-center pt-2">Experience</li>
                  <li className="px-6 text-sm text-center pt-2">Project Done</li>
                  <li className="px-6 text-sm text-center pt-2">Happy Clients</li>
                </ul>

            </others>
          </content>
        </div>
  )
}

export default home

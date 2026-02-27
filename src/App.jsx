function App() {

  return (
      <main className="flex flex-col h-screen bg-black bg-cover w-full">
        <div className="flex flex-col justify-between h-full"> 
          <nav className="flex flex-row justify-around pt-5">
            <div>
              <h1 className=" text-white">logo</h1>
            </div>
            <div className="flex flex-row justify-center">
              <ul className="flex text-white cursor-pointer gap-5">
                <li className="px-4 hover:underline">Home</li>
                <li className="px-4 hover:underline">Service</li>
                <li className="px-4 hover:underline">About me</li>
                <li className="px-4 hover:underline">Portfolio</li>
                <li className="px-4 hover:underline">Contact me</li>
              </ul>
            </div>
            <div className="">  
              <button className=" text-white bg-orange-600py-4">hire me</button>
            </div>
          </nav>
          <content className="flex flex-col grow justify-center gap-5">
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
            <buttonn className="flex flex-row gap-5">
              <button className=" bg-orange-800 rounded-2xl px-6 py-2 text-white">Hire Me</button>
              <button className="bg-orange-800 rounded-2xl px-6 py-2 text-white">Download CV</button>
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
      </main>


  )
}

export default App

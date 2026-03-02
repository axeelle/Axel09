import React from "react"

function contactme() {
    return(
        <div className=" flex flex-row justify-center w-screen h-full">
          <div className="flex flex-col justify-around">
             <div className="flex flex-col gap-6">
              <h1 className="text-white text-5xl"> have a project in mind</h1>
              <p className="text-white self-center    ">mini texthhfdhafidsahfiusadhfidushgfafd</p>
              <button className=" bg-orange-600 text-white w-20 h-10 self-center"> contactme</button>
             </div>
         
              <div className="  text-white">
                <ul className="flex flex-row justify-center gap-6">
                  <li>icon1</li>
                  <li>icon2</li>
                  <li>icon3</li>
                </ul>
              </div>  
          </div>
        
        </div>
    )
}
export default contactme
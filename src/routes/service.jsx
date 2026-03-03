import React from "react";

function Service() {
  return (
    <div className="bg-black h-screen overflow-hidden text-white">
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          My Service
        </h1>
        <p className="text-gray-400">Home / Service</p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-10 md:px-20 pb-20">
        
        {/* Text */}
        <div className="max-w-xl text-gray-300 leading-relaxed">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. It has survived not only five centuries, but also the 
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="w-full md:w-1/2 h-64 bg-gray-700 flex items-center justify-center rounded-lg">
          <span className="text-gray-300">Photo Here</span>
        </div>

      </div>

    </div>
  );
}

export default Service;
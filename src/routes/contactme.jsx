import React from "react";

function ContactMe() {
  return (
<section className="min-h-screen flex items-center justify-center bg-gray-950 px-4 py-12 sm:px-6">
  <div className="bg-gray-900 p-8 sm:p-12 rounded-2xl shadow-xl w-full max-w-xl space-y-8">
    
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl text-white font-bold tracking-tight">
        Have a Project in Mind?
      </h1>
      <p className="text-gray-400 pt-3 text-sm sm:text-base">
        Feel free to contact me. I'm always open to discussing new projects.
      </p>
    </div>

    <form className="flex flex-col gap-4">
      <input 
        type="text" 
        placeholder="Your Name" 
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-transparent outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all" 
      />
      <input 
        type="email" 
        placeholder="Your Email" 
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-transparent outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all" 
      />
      <textarea 
        rows="4" 
        placeholder="Your Message" 
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-transparent outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all resize-none" 
      />
      
      <button 
        type="submit" 
        className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-500 active:scale-[0.98] transition-all"
      >
        Send Message
      </button>
    </form>
    
  </div>
</section>
  
  );
}

export default ContactMe;
import React from "react";

function ContactMe() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-950 px-6 overflow-y-auto sm:px-6 sm:py-20">

      <div className="bg-gray-900 p-12 rounded-2xl shadow-xl w-full max-w-xl space-y-8">

       
        <div className="text-center">
          <h1 className="text-4xl text-white font-bold">
            Have a Project in Mind?
          </h1>
          <p className="text-gray-400 pt-3">
            Feel free to contact me. I'm always open to discussing new projects.
          </p>
        </div>

      
        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-amber-600"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-amber-600"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-amber-600"
          />

          <button
            type="submit"
            className="bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-500 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactMe;
import React from "react";
import Bustracking from '../assets/bustracking.jpeg';
import Coffee from '../assets/coffee.png';
import Robot from '../assets/robot.jpeg';

function Portfolio() {

  const projects = [
    {
      title: "Bus Tracking System",
      description: "IoT and Cloud based real-time GPS tracking system for buses.",
      tech: ["React", "Node.js", "Firebase"],
      image: Bustracking,
      github: "#",
      demo: "#"
    },
    {
      title: "Coffee Shop Management",
      description: "A management system for orders, payments, and customer data.",
      tech: ["PHP", "MySQL", "HTML/CSS/JS"],
      image: Coffee ,
      github: "#",
      demo: "#"
    },
    {
      title: "Obstacle Avoiding Robot",
      description: "Arduino robot that detects obstacles and navigates automatically.",
      tech: ["Arduino", "Sensors", "C++"],
      image: Robot,
      github: "#",
      demo: "#"
    },
  ];

  return (
<section className="h-screen overflow-hidden bg-gray-950 text-white px-10 py-10 flex flex-col">


  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold text-amber-600">My Portfolio</h1>
    <p className="text-gray-400 mt-2 text-sm">
      Here are some of the projects I have worked on
    </p>
  </div>

    
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 grow content-center">

    {projects.map((project, index) => (
      <div
        key={index}
        className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:scale-105 transition duration-300"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover"
        />

        <div className="p-4 space-y-3">
          <h2 className="text-lg font-semibold text-amber-500">
            {project.title}
          </h2>

          <p className="text-gray-400 text-xs">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="text-[10px] bg-gray-800 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2 pt-1">
            <a
              href={project.github}
              className="text-xs px-3 py-1 bg-gray-800 rounded-md hover:bg-gray-700"
            >
              GitHub
            </a>

            <a
              href={project.demo}
              className="text-xs px-3 py-1 bg-amber-600 rounded-md hover:bg-amber-500"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    ))}

  </div>

</section>
  );
}

export default Portfolio;
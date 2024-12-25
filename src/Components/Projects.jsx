import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Icon for "Read More"
import computer from "../Images/computer.jpg";
import music from "../Images/music.jpeg";
import swimming from "../Images/swimming.jpg";

const SchoolProjects = [
  {
    title: "SWIMMING LESSONS",
    image: swimming,
  },
  {
    title: "COMPUTER LESSONS",
    image: computer,
  },
  {
    title: "MUSIC AND DANCING LESSONS",
    image: music,
  },
];

const Schoolproject = () => {
  return (
    <section className="py-16 bg-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">SCHOOL PROJECTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SchoolProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold mb-4 text-xl">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  Full Version: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <div className="flex items-center">
                  <button className="flex items-center gap-2 px-3 py-1 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-colors">
                    Read More <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schoolproject;

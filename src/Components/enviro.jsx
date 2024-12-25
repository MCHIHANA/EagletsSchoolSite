import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Icon for button
import play from "../Images/play.jpeg";
import clasz from "../Images/clasz.jpg";
import bus from "../Images/bus.png";

const environment = [
  {
    title: "LEARNERS PLAY GROUNDS",
    image: play,
  },
  {
    title: "CONDUCIVE AND MODERN CLASSROOMS",
    image: clasz,
  },
  {
    title: "MODERN SCHOOL BUS",
    image: bus,
  },
];

const Enviro = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">OUR ENVIRONMENT</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {environment.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="font-bold mb-4 text-xl">{item.title}</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

export default Enviro;

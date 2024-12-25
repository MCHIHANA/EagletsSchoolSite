import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Icon for button
import kids from "../Images/kids.webp";
import kidsprimary from "../Images/kidsprimary.jpg";

const schoolCategories = [
  {
    title: "KINDERGARTEN AND RECEPTION",
    image: kids,
  },
  {
    title: "PRIMARY AND INTERMEDIATE",
    image: kidsprimary,
  },
  {
    title: "SECONDARY AND HIGH SCHOOLS",
    image: kidsprimary,
  },
];

const SchoolCategories = () => {
  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          SCHOOL CATEGORIES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {schoolCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold mb-4 text-xl">{category.title}</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center">
                  <button className="flex items-center gap-2 px-3 py-1 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-colors">
                    View Syllabus <FaArrowRight />
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

export default SchoolCategories;

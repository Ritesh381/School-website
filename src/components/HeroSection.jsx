import React from "react";
import schoolImg from "../assets/school-image.jpg";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative from-blue-600 to-blue-800 text-white py-20 md:py-32 overflow-hidden shadow-lg rounded-lg mx-4 mt-4"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
style={{
  backgroundImage: `url(${schoolImg})`,
}}

      ></div>
      <div className="container mx-auto text-center relative z-10 px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-down drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]">
          Welcome to RS Public School
        </h2>

        <p className="drop-shadow-[1px_1px_3px_rgba(0,0,0,0.7)] text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Nurturing young minds for a brighter future through excellence in
          education.
        </p>

        <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transform hover:scale-105 transition duration-300 ease-in-out">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

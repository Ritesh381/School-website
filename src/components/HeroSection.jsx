import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative from-blue-600 to-blue-800 text-white py-20 md:py-32 overflow-hidden shadow-lg rounded-lg mx-4 mt-4"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage:
            "url('https://scontent.fvns6-1.fna.fbcdn.net/v/t39.30808-6/457739319_7876295552480533_4163457373461603389_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=2285d6&_nc_ohc=b-2Qpex7lzQQ7kNvwG1OvU_&_nc_oc=Adlvja0DCgnWdM72aE7ASpLvLE8FSQzYm6omPwPU9OWLX6pQRrtTcvZR7w9drCuVtpOv8lUtg3EyjgvvAYuDANNl&_nc_zt=23&_nc_ht=scontent.fvns6-1.fna&_nc_gid=R6kwXoEJFnufPgI8E3kh-Q&oh=00_AfQQ0h8FNYGGUpqlh5mUfaPN3hcozWW4qHwT6PZ5N0CncA&oe=68816895')",
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

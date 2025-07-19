import React from 'react'

const Header = () => {
  return (
    <header className="bg-yellow-100  p-4 shadow-md rounded-b-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold mb-2 md:mb-0">
          <a href="#" className="hover:text-blue-200 transition duration-300">
            Radha Swami Public School
          </a>
        </h1>
        <nav>
          <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-lg">
            <li>
              <a href="#home" className="hover:text-blue-200 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-200 transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#courses" className="hover:text-blue-200 transition duration-300">
                Courses
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-200 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header
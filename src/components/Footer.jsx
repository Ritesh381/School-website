import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 rounded-t-lg shadow-inner mx-4">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Radha Swami Public School. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a> |{' '}
          <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer
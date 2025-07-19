import React from "react";

const ContactUsSection = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-white rounded-lg shadow-md mx-4 mt-4 mb-4"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Get in Touch
            </h3>
            <p className="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              RADHA SWAMI PUBLIC SCHOOL Barachawar (pincode: 233001) Ghazipur
              Uttar Pradesh.
            </p>
            <p className="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.5 9.168a1 1 0 00.077 1.16L13.342 15a1 1 0 00.128.128l3.18 3.18a1 1 0 001.16.077l4.162-1.665a1 1 0 00.684-.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91 9452205072
            </p>
            <p className="mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0h18"
                />
              </svg>
              prajapatiritesh381@gmail.com
            </p>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                School Hours
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Monday - Saturday: 8:00 AM - 2:10 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email/Phone
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;

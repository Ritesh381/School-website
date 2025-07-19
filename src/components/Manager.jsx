import React from "react";

function Manager() {
  return (
    <section
      id="manager-message"
      className="py-16 md:py-24 bg-blue-50 rounded-lg shadow-md mx-4 mt-4"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-700">
          A Message from Our Manager
        </h2>
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <img
            src="https://scontent.fvns6-2.fna.fbcdn.net/v/t39.30808-1/464012719_3475874332557313_2287421057856572512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=emKlPGaWGaIQ7kNvwG12rnW&_nc_oc=Adk5MNLKLJWO5obIEkGgcJ-oNxpdvwyhSnbv9W9-KK9iOk2yOrv9EjG1UAMO1fgNXS1nhRwNRQveXg8burgac1Ep&_nc_zt=24&_nc_ht=scontent.fvns6-2.fna&_nc_gid=ZCgf-Vd80f1zeJxk9UnfVA&oh=00_AfSsdzqmMos7D0xUvdlHhrdBANKkqBb5pfY3jHwppLaIOQ&oe=68815764" // Placeholder for a manager's/principal's photo
            alt="Principal's Photo"
            className="w-40 h-40 rounded-full object-cover shadow-lg mb-4 border-4 border-blue-300 transform hover:scale-105 transition duration-300 ease-in-out"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/150x150/4682B4/FFFFFF?text=Principal";
            }}
          />
          <p className="text-xl font-semibold text-blue-800 mb-8">
            Purushottam Singh, Manager
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg text-lg leading-relaxed text-gray-700 text-left">
            <p className="mb-4">Dear students, parents, and staff,</p>
            <p className="mb-4">
              As we stand on the threshold of a new academic session, I extend a
              hearty and warm welcome to all. Each academic year is a challenge
              to achieve greater heights with new targets set for the future. As
              Manager, I am honored to lead a team of talented, committed
              educators who share a passion for teaching and learning.
            </p>
            <p className="mb-4">
              Our school is built on a foundation of values that promotes
              respect, empathy, and kindness. We strive to create a safe,
              inclusive, and supportive environment that allows each student to
              grow and thrive. Our curriculum is designed to be challenging,
              engaging, and relevant, with a focus on developing critical
              thinking, problem-solving, and communication skills.
            </p>
            <p>
              We believe that every student has the potential to succeed and
              make a positive impact in the world. Our goal is to inspire and
              empower them to become confident, curious, and compassionate
              individuals. We invite you to explore our school community and
              join us in nurturing the leaders of tomorrow.
            </p>
            <p className="mt-6 font-semibold text-right text-blue-700">
              Sincerely,
              <br />
              Purushottam Singh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Manager;

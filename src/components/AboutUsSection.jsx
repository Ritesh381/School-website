import React from 'react'

const AboutUsSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white rounded-lg shadow-md mx-4 mt-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">About Our School</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://scontent.fvns6-2.fna.fbcdn.net/v/t1.6435-9/70867485_2256136724496472_9033019129245728768_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=-evwxpj5OUYQ7kNvwHwBwp5&_nc_oc=Adnf_T4nFHyj8Vo18UsLkaUJysfhO-WPdBknLv5qy42GauMo-EhuAph5p6LzE_l3lqJPr9l-5lgjYLjI8uttljXf&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=KF_wF70n8C9ytrQOtJOvDw&oh=00_AfS0R9W8AcXBTTKKC-X8-pWid3Fu_ZqBF8mfx2jDkVjoHA&oe=68A2EE22"
              alt="Happy Students"
              className="rounded-xl shadow-lg w-full h-auto object-cover transform hover:scale-105 transition duration-300 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/ADD8E6/000000?text=Image+Not+Found'; }}
            />
          </div>
          <div className="md:w-1/2 text-lg leading-relaxed">
            <p className="mb-4">
              RS Public School is dedicated to providing a holistic and enriching educational experience for students from diverse backgrounds. Established in 2014, we have consistently strived for academic excellence and character development.
            </p>
            <p className="mb-4">
              Our curriculum is designed to foster critical thinking, creativity, and a love for lifelong learning. We believe in nurturing each student's unique potential, preparing them not just for examinations, but for life's challenges and opportunities.
            </p>
            <p>
              With a team of highly qualified and passionate educators, state-of-the-art facilities, and a supportive community, RS Public School is a place where students can thrive, explore their interests, and build a strong foundation for their future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection
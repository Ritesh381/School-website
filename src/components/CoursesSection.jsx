import React from 'react'

const CoursesSection = () => {
  const courses = [
    { title: 'Kindergarten Program', description: 'Early childhood education focusing on foundational skills and play-based learning.' },
    { title: 'Primary School Curriculum', description: 'Grades 1-5, comprehensive subjects including Math, Science, English, and Social Studies.' },
    { title: 'Middle School Program', description: 'Grades 6-8, advanced studies, introduction to electives, and critical thinking development.' },
    { title: 'High School Diploma', description: 'Grades 9-10, career guidance, CBSE.' },
    { title: 'Art & Music Classes', description: 'Creative expression through various art forms and musical instruments.' },
    { title: 'Sports & Athletics', description: 'Promoting physical fitness, teamwork, and sportsmanship through diverse sports.' },
  ];

  return (
    <section id="courses" className="py-16 md:py-24 bg-gray-50 rounded-lg shadow-md mx-4 mt-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Our Programs & Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold mb-3 text-blue-600">{course.title}</h3>
              <p className="text-gray-700">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CoursesSection
import React from 'react';

interface CourseListProps {
  title: string;
}

const CourseList: React.FC<CourseListProps> = ({ title }) => {
  const courses = [
    { id: 1, title: 'Curso de JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { id: 2, title: 'Curso de React', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { id: 3, title: 'Curso de MongoDB', image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
    { id: 4, title: 'Curso de Python', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { id: 5, title: 'Curso de Docker', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
    { id: 6, title: 'Curso de AWS', image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  ];

  return (
    <div className="px-8 my-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {courses.map((course) => (
          <div key={course.id} className="flex-none w-48">
            <div className="bg-gray-800 p-4 rounded-lg h-72 flex flex-col items-center justify-center">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-center text-sm">{course.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
import React from 'react';

const Internship = () => {
  return (
    <section
      name="internships"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-4 pb-4"  
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="pb-2 flex items-center space-x-3">
          {/* Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-blue-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18m9-9H3" />
          </svg>
          <h2 className="text-4xl font-bold">Summer Training Internship</h2>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md dark:shadow-gray-700 hover:scale-[1.01] duration-300">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
            Lovely Professional University <span className="text-sm text-gray-500 dark:text-gray-400"> June 2024 - July 2024</span>
          </h3>

          <div className="mt-4">
            <h4 className="text-lg font-semibold underline mb-2">Course Overview:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Participated in a skill development course on "Object-Oriented
                Programming using C++" at Lovely Professional University 
              </li>
              <li>
                Demonstrated a strong foundation in OOP principles such as encapsulation, inheritance, polymorphism, and abstraction
              </li>
              <li>
                Developed an event ticketing system enabling seamless participation in summit activities, integrating dynamic features like schedules and registration forms.
              </li>
            </ul>
          </div>

          {/* Certificate Link */}
          <div className="mt-4">
            <a 
              href="https://drive.google.com/file/d/1mg29_bRkOfcD1bA8PV9Y8Rwo3Naqt5Mb/view" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;

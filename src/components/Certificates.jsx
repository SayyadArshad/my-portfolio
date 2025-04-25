import React from 'react';

const certificates = [
  {
    title: 'Automation Testing Basics ',
    provider: 'Simplilearn',
    date: 'April 2025',
  },
  {
    title: 'Software Testing',
    provider: 'Scaler',
    date: 'March 2025',
  },
  {
    title: 'Elementary English as a Second Language',
    provider: 'Slayor',
    date: 'March 2025',
  },
  {
    title: 'Web and Mobile Testing with Selenium',
    provider: 'Coursera',
    date: 'December 2024',
  },
  {
    title: 'Cloud Computing',
    provider: 'NPTEL',
    date: 'July - October 2024',
  },
];

const Certificates = () => {
  return (
    <section
      name="certificates"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-8"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="pb-4">  {/* Reduced bottom padding */}
          <h2 className="text-4xl font-bold inline border-b-4 border-blue-500">
            Certificates
          </h2>
          <p className="py-4">Here are some of the certifications I’ve completed</p> 
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-500 pl-4 shadow-md dark:shadow-gray-700 hover:scale-105 duration-300 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
            >
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {cert.provider}
              </p>
              {cert.date && (
                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

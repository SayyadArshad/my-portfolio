import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Using an external link icon

const certificates = [
  {
    title: 'Automation Testing Basics',
    provider: 'Simplilearn',
    date: 'April 2025',
    link: 'https://drive.google.com/file/d/151s6wH1xhLw-m2d-ia4XrlvuA-Th3OH0/view?usp=drivesdk', 
  },
  {
    title: 'Software Testing',
    provider: 'Scaler',
    date: 'March 2025',
    link: 'https://drive.google.com/file/d/14w9WdZzLz42V-OkClN20AsKmDYCVi_2L/view?usp=drivesdk',
  },
  {
    title: 'Elementary English as a Second Language',
    provider: 'Slayor',
    date: 'March 2025',
    link: 'https://drive.google.com/file/d/14wWkreySpJEHwVz_dV3zx7FAZN0aYnbN/view?usp=drivesdk',
  },
  {
    title: 'Web and Mobile Testing with Selenium',
    provider: 'Coursera',
    date: 'December 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/9NZ9RNFW091F',
  },
  {
    title: 'Cloud Computing',
    provider: 'NPTEL',
    date: 'July - October 2024',
    link: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S167020242104432420.pdf',
  },
];

const Certificates = () => {
  return (
    <section
      name="certificates"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-8"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="pb-4">
          <h2 className="text-4xl font-bold inline border-b-4 border-blue-500">
            Certificates
          </h2>
          <p className="py-4">Here are some of the certifications I’ve completed</p> 
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="relative border-l-4 border-blue-500 pl-4 shadow-md dark:shadow-gray-700 hover:scale-105 duration-300 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
            >
              {/* Icon at top right */}
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-2 right-2 text-blue-500 hover:text-blue-700"
                title="View Certificate"
              >
                <FaExternalLinkAlt size={20} />
              </a>

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

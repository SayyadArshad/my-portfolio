import React from 'react';
import cura from './assets/cura.png';
import gym from './assets/gym.png';
import reg from './assets/reg.png';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Katalon Demo CURA",
      description: "utomate end-to-end testing for the CURA Healthcare Service application to ensure seamless and bug-free functionality across UI and API layers.",
      image: cura,
      codeLink: "https://github.com/SayyadArshad/katalon-demo-cura"
    },
    {
      id: 2,
      title: "Pmd Regression Tester",
      description: "A regression testing tool ensure that new problems and unexpected behaviors will not be introduced to PMD project after fixing an issue , and new rules can work as expected.",
      image: reg,
      codeLink: "https://github.com/SayyadArshad/pmd-regression-tester"
    },
    {
      id: 3,
      title: "Gold Gym Website",
      description: "The Gold Gym Website is a fitness platform showcasing gym facilities, membership plans, workout programs, and trainer details. It includes an intuitive homepage, a blog for fitness tips.",
      image: gym,
      codeLink: "https://github.com/SayyadArshad/Golds_Gym_Website"
    },

  ];

  return (
    <section
      name="projects" id="projects"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-blue-500">
            Projects
          </h2>
          <p className="py-6">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
  {projects.map(({ id, title, description, image, codeLink }) => (
    <div
      key={id}
      className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md dark:shadow-gray-700 hover:scale-105 duration-500"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <div className="flex justify-between mt-4">
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#003161] text-white rounded hover:bg-[#1F509A]"
              >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Projects;

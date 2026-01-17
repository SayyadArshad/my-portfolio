import React from 'react';
import cura from './assets/cura.png';
import ngo from './assets/ngo.png';
import user from './assets/user.jpeg';
import ipl from './assets/ipl.png';


const Projects = () => {
 const projects = [
  {
    id: 1,
     title: "Hope Foundation – NGO Website",
    description:
      "Designed and developed a static NGO website using HTML and CSS to learn frontend structure and UI/UX principles. Implemented clean layouts, navigation, and card-based sections with a focus on usability and visual consistency.",
    image: ngo,
    codeLink: "https://github.com/SayyadArshad/ngo-website",
  
  },
  {
    id: 2,
    title: "User Management API Automation Testing",
    description:
      "Automated REST API testing for a mock User Management system using Java, TestNG, Maven, and Rest Assured. Validated CRUD operations (GET, POST, PUT, DELETE) with structured and maintainable test suites.",
    image: user,
    codeLink: "https://github.com/SayyadArshad/UserManagement-API-Testing",
  },
  {
    id: 3,
     title: "Katalon Demo CURA",
    description:
      "Automated end-to-end testing for the CURA Healthcare Service application using Katalon Studio, covering UI and API test scenarios. Developed reusable test cases to validate core functionalities and improve test coverage.",
    image: cura,
    codeLink: "https://github.com/SayyadArshad/katalon-demo-cura",
  },
    {
    id: 4,
     title: "IPL Player Profile API Testing",
    description:
      "Implemented API testing with Postman, creating test suites to validate status codes.Performed end-to-end API testing using CRUD operations (GET, POST, PUT, DELETE) on mock API endpoints.",
    image: ipl,
    codeLink: "https://www.youtube.com/watch?v=OXVNiJmmEH4&feature=youtu.be",
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

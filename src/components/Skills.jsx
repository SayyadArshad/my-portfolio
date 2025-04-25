import React from "react";
import {  FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiApachejmeter, SiPostman, SiSelenium, SiApachemaven, SiJunit5, SiAppium } from 'react-icons/si';
import { DiJava } from 'react-icons/di';



const skills = [
  // Languages
  { icon: <DiJava size={40} style={{ color: '#f89820' }} />, name: "Java" },
  { icon: <SiJavascript size={40} style={{ color: '#F7DF1E' }} />, name: "JavaScript" },
  { icon: <SiApachejmeter size={40} style={{ color: '#D22128' }} />, name: "JMeter" },
  { icon: <SiPostman size={40} style={{ color: '#FF6C37' }} />, name: "Postman" },
  { icon: <SiSelenium size={40} style={{ color: '#43B02A' }} />, name: "Selenium" },
  { icon: <SiAppium size={40} style={{ color: '#6610F2' }} />, name: "Appium" },
  { icon: <SiApachemaven size={40} style={{ color: '#C71A36' }} />, name: "Maven" },
  { icon: <SiJunit5 size={40} style={{ color: '#4CAF50' }} />, name: "JUnit" },
  { icon: <FaCss3Alt size={40} style={{ color: '#2965F1' }} />, name: "CSS" },
  { icon: <FaHtml5 size={40} style={{ color: '#E34F26' }} />, name: "HTML" }
  
];


const Skills = () => {
  return (
    <section
    name="skills"
    className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white mt-0 mb-0"
  >
    <div className="max-w-screen-xl mx-auto px-4 py-8"> {/* Reduced padding */}
      <div className="pb-8">
        <h2 className="text-4xl font-bold inline border-b-4 border-blue-500">
          Skills
        </h2>
        <p className="py-6">These are the technologies I work with</p>
      </div>
  
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center"> {/* Reduced gap */}
        {skills.map((skill, index) => (
          <div key={index} className="shadow-md dark:shadow-gray-700 hover:scale-105 duration-500 py-2 rounded-lg">
            <div className="w-20 mx-auto">
              <div>{skill.icon}</div>
              <h5>{skill.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default Skills;

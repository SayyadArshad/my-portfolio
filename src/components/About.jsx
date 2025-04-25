import React from 'react';
import myimg from './assets/myimg.png';

const About = () => {
  return (
    <section
      name="about"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-blue-500">
            About
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
        <div className="flex items-center">
  <p className="text-xl leading-relaxed">
    Hi, I'm <span className="font-semibold text-blue-500">Sayyad Arshad</span>, an enthusiastic 
    <span className="font-semibold text-blue-500"> QA Testing Freshman</span> with a solid foundation in software testing principles. 
    I’m passionate about ensuring product quality through both 
    <span className="font-semibold text-blue-500"> manual and automation testing</span> using tools like 
    <span className="font-semibold text-blue-500"> Selenium IDE, Postman, Appium,</span> and 
    <span className="font-semibold text-blue-500"> JMeter</span>.
    <br /><br />
    With a background in <span className="font-semibold text-blue-500">Java, C++, HTML, CSS,</span> and 
    <span className="font-semibold text-blue-500"> JavaScript</span>, I enjoy learning new technologies and applying testing strategies that enhance product reliability and user satisfaction.
    <br /><br />
    I'm committed, detail-oriented, and love working in collaborative team environments. I’m always eager to learn and grow as a QA professional.
    Let’s connect and explore opportunities to build quality-driven software together!
  </p>
</div>

          <div className="flex items-center justify-center">
            <img
              src={myimg}
              alt="my profile"
              className="rounded-full w-80 h-80 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

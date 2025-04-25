import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      child: <FaEnvelope size={25} />,
      href: 'mailto:sayyadarshad415@gmail.com',
    },
    {
      id: 2,
      child: <FaLinkedin size={25} />,
      href: 'https://www.linkedin.com/in/sayyad-arshad/',
    },
   
    {
      id: 3,
      child: <FaGithub size={25} />,
      href: 'https://github.com/SayyadArshad',
    },
    
    
  ];

  return (
    <footer id="footer" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0">
            © 2025 Sayyad Arshad. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {socialLinks.map(({ id, child, href }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                {child}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
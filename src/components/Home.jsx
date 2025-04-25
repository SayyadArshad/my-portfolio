import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      type: 'spring',
      stiffness: 200,
    },
  }),
};

const AnimatedText = ({ text }) => (
  <h2 className="text-4xl sm:text-7xl font-bold text-gray-900 dark:text-white flex justify-center flex-wrap">
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={letterVariant}
        initial="hidden"
        animate="visible"
        className="inline-block"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </h2>
);

const Home = () => {
  return (
    <section
      name="home"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 pt-16 relative"
    >
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col justify-center w-full h-full text-center">
        <AnimatedText text="Hello," />
        <br />
        <AnimatedText text="I'm" />
        <br />
        <AnimatedText text="Sayyad Arshad" />

        <p className="text-gray-600 dark:text-gray-400 py-4 max-w-2xl mx-auto text-lg">
        Dedicated QA Tester skilled in Selenium, Postman, and JMeter.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="projects"
              smooth
              duration={500}
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
            >
              View Work
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="footer"
              smooth
              duration={500}
              className="px-6 py-3 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <a
    href="/pdf/Sayyad Arshad Cv 1.pdf"
    className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
    target="_blank" rel="noopener noreferrer"
  >
    Download CV
  </a>
</motion.div>

        </div>

        {/* Down Arrow Scroll */}
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
  <Link to="about" smooth duration={500} className="cursor-pointer group">
    <motion.div
      animate={{
        y: [0, 8, 0],
        boxShadow: [
          '0 0 10px rgba(59, 130, 246, 0.5)',
          '0 0 20px rgba(59, 130, 246, 0.7)',
          '0 0 10px rgba(59, 130, 246, 0.5)',
        ],
      }}
      transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      className="p-3 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-500 text-blue-500"
    >
      <ChevronDown
        className="w-8 h-8 group-hover:text-blue-600 transition-colors duration-300"
      />
    </motion.div>
  </Link>
</div>

      </div>
    </section>
  );
};

export default Home;

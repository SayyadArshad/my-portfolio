import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import Internships from './components/Internships';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Internships />
        <Footer />
      </div>
    </div>
  );
}

export default App;
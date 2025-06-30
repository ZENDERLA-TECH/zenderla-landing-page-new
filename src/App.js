import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Product from './components/Product';
import Skills from './components/Skills';
import Contact from './components/Contact';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'dark bg-dark-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900'
    }`}>
      {/* Interactive Background */}
      <InteractiveBackground darkMode={darkMode} />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <main>
          <Home darkMode={darkMode} />
          <Services darkMode={darkMode} />
          <About darkMode={darkMode} />
          {/* <Product /> */}
          <Skills />
          <Contact darkMode={darkMode} />
        </main>
      </div>
      {/* Footer (not fixed, only at the bottom of main page) */}
      <footer className="w-full flex justify-center items-center py-2 text-xs font-semibold text-gray-700 dark:text-gray-300 bg-transparent" style={{backdropFilter: 'blur(8px)', opacity: 0.7, letterSpacing: '0.05em'}}>
        <span>DESIGNED BY TAWFEEQ ||</span>
        <a href="https://github.com/tawfeeq-bahur" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 underline hover:text-blue-600 ml-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>
          <span>@tawfeeq-bahur</span>
        </a>
      </footer>
    </div>
  );
}

export default App; 
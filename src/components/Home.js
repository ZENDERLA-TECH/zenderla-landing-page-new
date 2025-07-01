import React from 'react';

const Home = ({ darkMode }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left" data-aos="fade-right">
            {/* Main Title */}
            <div className={`mb-0 text-xl md:text-2xl font-extrabold uppercase text-center lg:text-left drop-shadow-lg ${darkMode ? 'text-primary-500' : 'text-primary-700'}`} data-aos="fade-down">
              Empowering Digital Innovation
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 leading-tight animate-pulse drop-shadow-[0_2px_32px_rgba(99,102,241,0.5)]">
              ZENDERLA
            </h1>

            {/* Description */}
            <div className={`space-y-4 text-xl md:text-2xl mb-8 leading-relaxed font-mono tracking-wide ${darkMode ? 'text-blue-100 dark:text-blue-200' : 'text-slate-700'}`} style={{letterSpacing: '0.01em'}}>
              <p>
                We are a cutting-edge digital solutions company specializing in innovative technology services.
              </p>
              <p>
                Our team of experts delivers exceptional results in digital marketing, automation, design, and development.
              </p>
              <p>
                From concept to execution, we transform ideas into powerful digital experiences that drive growth.
              </p>
              <p>
                Partner with us to unlock your business potential in the digital landscape.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <button
                className="btn-primary"
                onClick={() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
              </button>
              <button
                className="bg-transparent border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://www.linkedin.com/company/zenderla-technologies/?viewAsMember=true', '_blank')}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Animated Tech Vector */}
          <div className="flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative w-96 h-96">
              {/* Main Tech Circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-500 rounded-full animate-pulse shadow-2xl"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-white dark:bg-dark-700 rounded-lg shadow-lg flex items-center justify-center animate-float">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="absolute top-8 right-8 w-12 h-12 bg-white dark:bg-dark-700 rounded-full shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <div className="absolute bottom-8 left-8 w-14 h-14 bg-white dark:bg-dark-700 rounded-lg shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="absolute bottom-4 right-4 w-10 h-10 bg-white dark:bg-dark-700 rounded-full shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '3s' }}>
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/images/Z-without-BG logo 2_00000.png" alt="Zenderla Technologies Center Logo - Digital Solutions Tamil Nadu" className="w-72 h-72 object-contain" />
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="150" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse">
                  <animate attributeName="stroke-dashoffset" values="0;20" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Home; 
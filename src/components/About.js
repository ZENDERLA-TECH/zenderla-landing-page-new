import React from 'react';

const About = ({ darkMode }) => {
  const teamSections = [
    {
      title: 'AUTOMATION / BOTS',
      lead: 'TAWFEEQ',
      description: 'Specializing in intelligent automation solutions and chatbot development to streamline business processes.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-50 to-teal-50',
      darkBgColor: 'from-green-900/20 to-teal-900/20'
    },
    {
      title: 'DIGITAL MARKETING',
      lead: 'SRIMATHI, PRATHISHA',
      description: 'Creating comprehensive digital marketing strategies to boost brand visibility and drive customer engagement.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      darkBgColor: 'from-blue-900/20 to-indigo-900/20'
    },
    {
      title: 'BRANDING',
      lead: 'VIGNESHWAR, PRITIKA',
      description: 'Crafting compelling brand identities and visual experiences that resonate with target audiences.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 01-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
      darkBgColor: 'from-purple-900/20 to-pink-900/20'
    },
    {
      title: 'WEB / APP',
      lead: 'SIVA DHARSHNA, SINDHUJA',
      description: 'Building cutting-edge web and mobile applications with modern technologies and exceptional user experiences.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50',
      darkBgColor: 'from-orange-900/20 to-red-900/20'
    }
  ];

  const handleGetStartedClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-[0_2px_32px_rgba(99,102,241,0.5)] animate-pulse">ABOUT</h2>
          <p className="text-lg md:text-xl text-blue-900 dark:text-blue-200 font-mono tracking-wide max-w-3xl mx-auto mb-8">
            Meet our talented team of experts who are passionate about delivering exceptional digital solutions. The below mentioned team members are well skilled in their respective domains.<br/>
            The skills listed below are just our core strengths. If you need any tech-related service, we can handle it!
          </p>
        </div>

        {/* Team Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamSections.map((section, index) => (
            <div
              key={index}
              className={`relative group p-0 flex flex-col justify-between min-h-[320px] rounded-[2.5rem_1.5rem_2.5rem_1.5rem/1.5rem_2.5rem_1.5rem_2.5rem] 
                ${darkMode ? 'bg-dark-800/40' : 'bg-white/70'} 
                backdrop-blur-xl border border-white/20 dark:border-dark-700/40 shadow-2xl overflow-visible transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/30 hover:border-blue-400/40 will-change-transform hover:z-20 rotate-[-2deg] hover:rotate-0`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
            >
              {/* Floating Icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 w-20 h-20 flex items-center justify-center rounded-3xl shadow-xl bg-gradient-to-br from-white/80 via-blue-100/60 to-blue-200/40 dark:from-dark-700/80 dark:via-dark-800/60 dark:to-dark-900/40 group-hover:scale-110 transition-transform duration-300">
                <div className={`w-14 h-14 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center shadow-lg`}>{section.icon}</div>
              </div>
              {/* Card Content */}
              <div className="pt-16 pb-8 px-8 flex flex-col flex-1">
                <h3 className="text-2xl font-extrabold font-montserrat mb-1 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide uppercase">
                  {section.title}
                </h3>
                <p className="text-lg font-semibold font-montserrat text-primary-600 dark:text-primary-400 text-center mb-2 tracking-wide">
                  {section.lead}
                </p>
                <p className="text-base font-normal font-inter text-center mb-4 tracking-wide text-slate-700 dark:text-blue-100">
                  {section.description}
                </p>
                {/* Skills/Tags */}
                <div className="flex flex-wrap gap-2 justify-center mt-auto font-inter font-medium">
                  {section.title === 'AUTOMATION / BOTS' && (
                    <>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">n8n Workflows</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">Custom Bots</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">Webhooks & APIs</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">No-Code Automation</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">AI Agents</span>
                    </>
                  )}
                  {section.title === 'DIGITAL MARKETING' && (
                    <>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">SEO</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">Social Media</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">PPC</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">Content</span>
                    </>
                  )}
                  {section.title === 'BRANDING' && (
                    <>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full">Logo Design</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full">Visual Identity</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full">Brand Strategy</span>
                    </>
                  )}
                  {section.title === 'WEB / APP' && (
                    <>
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-sm font-medium rounded-full">React</span>
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-sm font-medium rounded-full">Node.js</span>
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-sm font-medium rounded-full">Mobile Apps</span>
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-sm font-medium rounded-full">UI/UX</span>
                    </>
                  )}
                </div>
              </div>
              {/* Animated Glowing Border on Hover */}
              <div className="pointer-events-none absolute inset-0 rounded-[2.5rem_1.5rem_2.5rem_1.5rem/1.5rem_2.5rem_1.5rem_2.5rem] border-4 border-transparent group-hover:border-blue-400/60 group-hover:shadow-[0_0_32px_8px_rgba(99,102,241,0.15)] transition-all duration-500"></div>
              {/* Decorative floating blobs */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-blue-400/10 rounded-full blur-2xl opacity-40 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-purple-400/10 rounded-full blur-2xl opacity-40 group-hover:scale-125 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Constantly pushing boundaries with cutting-edge technology solutions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Excellence</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Delivering exceptional quality in every project we undertake
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Collaboration</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Working together to achieve outstanding results for our clients
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Ready to work with our amazing team?
          </p>
          <button className="btn-primary" onClick={handleGetStartedClick}>
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default About; 
import React, { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'FULL STACK', percent: 81, color: 'from-green-400 to-green-500', text: 'text-green-600' },
  { name: 'AUTOMATION', percent: 63, color: 'from-yellow-400 to-yellow-500', text: 'text-yellow-600' },
  { name: 'DIGITAL MARKETING', percent: 72, color: 'from-pink-400 to-pink-500', text: 'text-pink-600' },
  { name: 'DESIGN', percent: 90, color: 'from-blue-400 to-blue-500', text: 'text-blue-600' },
  { name: 'BOTS', percent: 71, color: 'from-red-400 to-red-500', text: 'text-red-600' },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-[0_2px_32px_rgba(99,102,241,0.5)] animate-pulse">SKILLS</h2>
          <p className="text-lg md:text-xl text-blue-900 dark:text-blue-200 font-mono tracking-wide max-w-3xl mx-auto mb-8">
            At ZENDERLA, we bring together innovation, automation, and design to build smart digital solutions. Our expertise spans full stack development, intelligent workflow automation, digital marketing strategies, and creative design systems. We are constantly enhancing and evolving our services to meet the changing needs of businesses. Our goal is to deliver impactful results by combining technology with purpose-driven design.
          </p>
        </div>
        {/* Mobile: vertical progress bars */}
        <div className="flex md:hidden flex-row justify-center gap-6 mt-12">
          {skills.map((skill, idx) => (
            <div key={skill.name} className="flex flex-col items-center w-14">
              <div className={`relative flex flex-col items-center w-full`} style={{height: '220px'}}>
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-10 rounded-full bg-gradient-to-t ${skill.color} shadow-lg transition-all duration-1000`}
                  style={{
                    height: visible ? `${skill.percent * 2}px` : '0px',
                    transitionDelay: `${idx * 120 + 200}ms`,
                    opacity: 0.9,
                  }}
                >
                  <span className="absolute top-2 left-1/2 -translate-x-1/2 font-bold text-lg text-white/90 select-none">
                    {visible ? skill.percent : ''}
                  </span>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[200px] rounded-full bg-gray-200 dark:bg-dark-700 opacity-30"></div>
              </div>
              <span className={`mt-4 font-extrabold text-xs text-center uppercase ${skill.text}`}>{skill.name}</span>
            </div>
          ))}
        </div>
        {/* Desktop: animated horizontal bars */}
        <div className="hidden md:flex flex-col gap-8 mt-12">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className={`w-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative`}
              style={{
                transitionDelay: `${idx * 120}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(40px)',
              }}
            >
              <div
                className={`relative rounded-xl h-16 flex flex-row items-center shadow-lg transition-all duration-1000 bg-gradient-to-r ${skill.color}`}
                style={{
                  width: visible ? `${skill.percent}%` : '0%',
                  opacity: 0.9,
                  minHeight: '4rem',
                  transitionDelay: `${idx * 120 + 200}ms`,
                }}
              >
                <span
                  className={`font-extrabold text-4xl uppercase ${skill.text} opacity-80 text-left px-6`}
                  style={{ zIndex: 2 }}
                >
                  {skill.name}
                </span>
                <span
                  className="font-extrabold text-4xl text-white/70 absolute right-6 top-1/2 -translate-y-1/2 select-none"
                  style={{ zIndex: 2 }}
                >
                  {skill.percent}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 
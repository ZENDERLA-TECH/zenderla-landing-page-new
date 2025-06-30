import React, { useRef, useState, useEffect } from "react";

const Services = ({ darkMode }) => {
  const services = [
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive growth.',
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Automation',
      description: 'Streamline your business processes with cutting-edge automation solutions.',
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Designing',
      description: 'Creative and modern design solutions that captivate your audience and enhance user experience.',
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Branding',
      description: 'Build a strong brand identity that resonates with your target audience and sets you apart.',
      icon: (
        <svg className="w-12 h-12 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Web/App Development',
      description: 'Custom web and mobile applications built with the latest technologies and best practices.',
      icon: (
        <svg className="w-12 h-12 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Bots',
      description: 'Intelligent chatbot solutions to enhance customer service and automate interactions.',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-red-500 to-red-600'
    }
  ];

  const scrollRef = useRef(null);
  const [scrollBar, setScrollBar] = useState({ left: 0, width: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = scrollRef.current;
      if (!el) return;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const barWidth = (clientWidth / scrollWidth) * clientWidth;
      const barLeft = (scrollLeft / scrollWidth) * clientWidth;
      setScrollBar({ left: barLeft, width: barWidth });
    };
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Drag logic for scrollbar
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragging) return;
      const el = scrollRef.current;
      if (!el) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const dx = clientX - dragStartX;
      const { scrollWidth, clientWidth } = el;
      const maxScroll = scrollWidth - clientWidth;
      const maxBarMove = clientWidth - scrollBar.width;
      let newBarLeft = Math.min(Math.max(startScrollLeft + dx, 0), maxBarMove);
      let newScrollLeft = (newBarLeft / maxBarMove) * maxScroll;
      el.scrollLeft = newScrollLeft;
    };
    const handleMouseUp = () => setDragging(false);
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [dragging, dragStartX, startScrollLeft, scrollBar.width]);

  const handleBarDown = (e) => {
    setDragging(true);
    setDragStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setStartScrollLeft(scrollBar.left);
    e.preventDefault();
  };

  const handleGetStartedClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-[0_2px_32px_rgba(99,102,241,0.5)] animate-pulse">SERVICES</h2>
          <p className="text-lg md:text-xl text-blue-900 dark:text-blue-200 font-mono tracking-wide max-w-3xl mx-auto mb-8">Comprehensive digital solutions tailored to your business needs</p>
        </div>

        {/* Services Cards Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-6 flex-nowrap scrollbar-hide mt-16"
          >
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={`relative group p-0 flex-shrink-0 w-80 h-96 z-10 mt-8${idx === 0 ? ' ml-8' : ''}`}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div
                  className="glass-card bg-white/10 dark:bg-dark-800/40 backdrop-blur-xl border border-white/20 dark:border-dark-700/40 shadow-2xl rounded-[2.5rem_1.5rem_2.5rem_1.5rem/1.5rem_2.5rem_1.5rem_2.5rem] px-8 pt-10 pb-8 flex flex-col items-center transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/40 group-hover:z-20 will-change-transform w-full h-full">
                  <div
                    className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg"
                    style={{
                      background: darkMode
                        ? 'linear-gradient(135deg, #3b82f6 0%, #a21caf 60%, #ec4899 100%)'
                        : 'linear-gradient(135deg, rgba(59,130,246,0.18) 0%, rgba(147,51,234,0.15) 60%, rgba(236,72,153,0.13) 100%)',
                      filter: darkMode ? 'none' : 'saturate(1.2) brightness(1.2)',
                      boxShadow: darkMode
                        ? '0 4px 24px 0 #3b82f655, 0 0 0 0 #fff0'
                        : '0 4px 24px 0 #a21caf22, 0 0 0 0 #fff0',
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 className={`text-2xl font-semibold font-montserrat mb-2 tracking-wide group-hover:text-blue-400 transition-colors duration-300 text-center ${darkMode ? 'text-white' : 'text-slate-800'}`}
                  >
                    {service.title}
                  </h3>
                  <p className={`text-base font-normal font-inter text-center mb-2 tracking-wide ${darkMode ? 'text-blue-100 dark:text-blue-200' : 'text-slate-600'}`}
                  >
                    {service.description}
                  </p>
                </div>
                {/* Decorative floating blob */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-purple-400/10 rounded-full blur-2xl opacity-60 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-blue-400/10 rounded-full blur-2xl opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
          {/* Custom horizontal scrollbar (interactive) */}
          <div className="relative w-full h-3 mt-2 select-none">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 rounded-full -translate-y-1/2"></div>
            <div
              className="absolute top-1/2 h-2 rounded-full shadow-lg transition-all duration-200 cursor-pointer active:scale-y-125"
              style={{
                left: scrollBar.left,
                width: scrollBar.width,
                background:
                  "linear-gradient(90deg, #3b82f6, #a21caf 60%, #ec4899)",
                boxShadow: darkMode
                  ? "0 0 12px 2px #a21caf66, 0 0 24px 4px #3b82f666, 0 0 32px 8px #ec489966"
                  : "0 0 6px 1px #a21caf33, 0 0 12px 2px #3b82f622, 0 0 16px 4px #ec489922",
                transform: "translateY(-50%)",
                touchAction: "none",
              }}
              onMouseDown={handleBarDown}
              onTouchStart={handleBarDown}
            ></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Ready to transform your business with our services?
          </p>
          <button className="btn-primary" onClick={handleGetStartedClick}>
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services; 
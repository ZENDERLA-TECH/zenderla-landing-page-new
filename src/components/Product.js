import React from 'react';

const products = [
  {
    title: 'AI Chatbot',
    image: '/images/product-chatbot.png',
    description: 'Intelligent conversational assistant for your business, available 24/7.',
    tags: ['AI', 'Automation', 'Support']
  },
  {
    title: 'Branding Suite',
    image: '/images/product-branding.png',
    description: 'Complete branding toolkit for startups and enterprises.',
    tags: ['Branding', 'Design']
  },
  {
    title: 'Web/App Platform',
    image: '/images/product-webapp.png',
    description: 'Robust, scalable web and mobile app solutions for any industry.',
    tags: ['Web', 'App', 'Cloud']
  },
  {
    title: 'Marketing Automation',
    image: '/images/product-marketing.png',
    description: 'Automate your marketing campaigns and boost your reach effortlessly.',
    tags: ['Marketing', 'Automation']
  }
];

const Product = () => {
  return (
    <section id="product" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 dark:bg-dark-800/40 backdrop-blur-md"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-[0_2px_32px_rgba(99,102,241,0.5)] animate-pulse">PRODUCTS</h2>
          <p className="text-lg md:text-xl text-blue-900 dark:text-blue-200 font-mono tracking-wide max-w-3xl mx-auto mb-8">Explore our innovative digital products designed for modern businesses</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div
              key={product.title}
              className="bg-white/80 dark:bg-dark-800/80 rounded-2xl shadow-xl p-6 flex flex-col items-center card-hover group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <img src={product.image} alt={`Zenderla Product: ${product.title}`} className="w-20 h-20 object-contain mb-4 rounded-xl shadow-md" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gradient transition-colors duration-300">
                {product.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {product.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product; 
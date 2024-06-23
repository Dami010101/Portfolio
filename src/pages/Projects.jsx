import React from 'react';

const projects = [
  {
    name: 'shopBeta',
    description: 'An E-commerce website built using HTML, CSS, JavaScript,  TailwindCSS and ReactJS.',
    link: 'https://ecommerce-delta-puce-22.vercel.app/',
  },
  {
    name: 'topFood',
    description: 'A website that teaches how to cook by recommending cooking videos. This website was built HTML, CSS, JavaScript,  TailwindCSS and ReactJS.',
    link: 'https://top-food.vercel.app/',
  },
  {
    name: 'Task Manager',
    description: 'A CRUD web app that enables user manage tasks, built using HTML, CSS, JavaScript,  TailwindCSS, ReactJS, ExpressJS and NodeJS .',
    link: 'https://task-manager-tau-ten.vercel.app/',
  },
  {
    name: 'Harkledge',
    description: 'A standard multi-page business website built using HTML, CSS,  JavaScript, TailwindCSSand ReactJS.',
    link: 'https://harkledge.vercel.app/',
  },
  {
    name: 'Authentication',
    description: 'A website consisting of Login, Register and Password webpage built using HTML, CSS, JavaScript,  TailwindCSS, ReactJS and Frebase.',
    link: 'https://authentication-4sfh-reglog.vercel.app/',
  },
  {
    name: 'xBet',
    description: 'A sport betting website built using HTML, CSS, Tailwind, JavaScript and ReactJS.',
    link: 'https://xbet-nu.vercel.app/',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div id='Projects' className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-5">My Projects</h1>

<p className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300 p-3 text-lg">
  Here are some of my projects!!!
</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.name}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

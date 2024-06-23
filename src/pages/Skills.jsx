import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,
        })
      }, [])
  

  const skills = [
    { name: 'HTML', level: 'Expert' },
    { name: 'CSS', level: 'Expert' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'TailwindCSS', level: 'Advanced' },
    { name: 'NextJS', level: 'Advanced' },
    // Add more skills as needed
  ];

  return (
    <div id='Skills'>
      <main className="relative  overflow-hidden font-mono bg-white dark:bg-gray-800">


        <div className="container mx-auto p-4">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">My Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{skill.name}</h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;

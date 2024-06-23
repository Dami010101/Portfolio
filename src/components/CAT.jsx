import React from 'react';
import coder from '../asset/noun-programmer-4988608.png';
import { Link as ScrollLink } from 'react-scroll';


const CAT = () => {
  return (
    <div id='CAT'>
      <main className="relative h-screen overflow-hidden font-mono bg-white dark:bg-gray-800">
        <div className="absolute md:block -bottom-32 -left-32 w-96 h-96">
          <div className="absolute z-20 text-xl font-extrabold right-12 text-start top-1/4">
            <span className="text-7xl">🎨</span>
            <p className=' text-xs'>Need a front-end developer?</p>
            <a href="Contact" className="text-blue-800">Let's talk</a>
          </div>
          <svg viewBox="0 0 200 200" className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFDBB9" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.1C32.4,85.6,16.2,87.1,0.7,85.9C-14.8,84.7,-29.6,80.9,-43.9,74.4C-58.3,67.9,-72,58.7,-79.8,45.9C-87.7,33,-89.5,16.5,-88.9,0.3C-88.4,-15.9,-85.4,-31.7,-78.1,-45.4C-70.8,-59.1,-59.1,-70.6,-45.3,-77.9C-31.6,-85.3,-15.8,-88.5,-0.3,-88.1C15.3,-87.6,30.5,-83.5,44.7,-76.4Z" transform="translate(100 100)"></path>
          </svg>
        </div>
        <div className="relative z-20 flex items-center">
          <div className="container relative flex flex-col items-center justify-between px-6 py-4 mx-auto">
            <div className="flex flex-col">
              <img src={coder} alt="Coder" className="mx-auto w-28 h-28 object-contain rounded-full" />
              <p className="my-6 text-3xl text-center dark:text-white">Hi, I'm Dami 🤘</p>
              <h2 className="max-w-3xl py-2 mx-auto text-2xl font-bold text-center text-gray-800 md:text-3xl dark:text-white">
                I'm a UK based web designer & front end developer focused on crafting clean & user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.
              </h2>
              <div className="flex items-center justify-center mt-4">
                <ScrollLink className="px-4 py-2 my-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 md:mt-16 dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 hover:dark:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-white hover:bg-gray-800 hover:text-white text-md" to='Contact' smooth={true} duration={500}>
                  CONNECT WITH ME
                  </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CAT;

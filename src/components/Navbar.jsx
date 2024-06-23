import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link as ScrollLink } from 'react-scroll';
// import logo from '../../asset/noun-shop-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navStylez = 'text-black font-bold text-sm px-2 py-1 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300 items-center';

  const navContent = (
    <>
      <div className={navStylez}><ScrollLink to='About' smooth={true} duration={500}>About</ScrollLink></div>
      <div className={navStylez}><ScrollLink to='Skills' smooth={true} duration={500}>Skills</ScrollLink></div>
      <div className={navStylez}><ScrollLink to='Projects' smooth={true} duration={500}>Projects</ScrollLink></div>
      <div className={navStylez}><ScrollLink to='Contact' smooth={true} duration={500}>Contact</ScrollLink></div>
    </>
  );

  return (
    <nav className='shadow bg-white z-40 text-black sticky top-0 w-full'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-6'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center w-full justify-between'>
            <div className='flex items-center'>
              {/* <Link to='/'>
                <img src={logo} className='h-8' alt='Logo' />
              </Link> */}
              <ScrollLink to='/' className='ml-3 text-xl font-bold' smooth={true} duration={500}>Dami</ScrollLink>
            </div>
            <div className='hidden lg:flex lg:items-center lg:space-x-4'>
              {navContent}
            </div>
          </div>
          <div className='lg:hidden'>
            <button onClick={() => setIsOpen(!isOpen)} type='button'>
              {isOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='lg:hidden'>
          <div className='flex flex-col items-start px-4 py-2'>
            {navContent}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

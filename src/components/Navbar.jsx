import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full h-[130px] px-[20px] md:px-[104px] py-[20px] md:py-[52px] flex items-center z-10 transition-colors duration-300 ${isScrolled ? 'bg-white/50' : 'bg-white'}`}>
      <div className='container flex items-center justify-between mx-auto'>
        <div className='text-[#132322] text-xl font-bold' style={{ fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '700', lineHeight: 'normal' }}>
          ZeroWaste
        </div>
        <div className='hidden space-x-4 md:flex'>
          <a href='#about' className='text-[#132322] hover:text-gray-300' style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', lineHeight: '20px' }}>
            ABOUT US
          </a>
          <a href='#category' className='text-[#132322] hover:text-gray-300' style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', lineHeight: '20px' }}>
            CATEGORY
          </a>
          <a href='#contact' className='text-[#132322] hover:text-gray-300' style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', lineHeight: '20px' }}>
            CONTACT
          </a>
        </div>
        <div className='md:hidden'>
          <FaBars onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-[#132322] cursor-pointer' />
        </div>
      </div>
      {isMenuOpen && (
        <div className='md:hidden absolute top-[130px] left-0 w-full bg-white flex flex-col items-center'>
          <a href='#about' className='py-2 text-[#132322] hover:text-gray-300' style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', lineHeight: '20px' }}>
            ABOUT US
          </a>
          <a href='#category' className='py-2 text-[#132322] hover:text-gray-300' style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', lineHeight: '20px' }}>
            CATEGORY
          </a>
          <a href='#contact' className='py-2 text-[#132322] hover:text-gray-300' style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', lineHeight: '20px' }}>
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

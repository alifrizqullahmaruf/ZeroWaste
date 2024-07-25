import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };
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
    <nav className={`fixed top-0 w-full h-[80px] px-5 md:px-16 py-5 flex items-center z-10 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-[#EDF7F5]'}`}>
      <div className='container flex items-center justify-between mx-auto'>
        <div className='text-[#132322] text-xl font-bold' style={{ fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '700' }} onClick={() => handleNavigation('/')}>
          <a href="">ZeroWaste</a>
        </div>
        <div className='hidden space-x-6 md:flex'>
          <a href='#about' className='text-[#132322] hover:text-gray-600' style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600' }}>
            ABOUT US
          </a>
          <a href='#category' className='text-[#132322] hover:text-gray-600' style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600' }}>
            CATEGORY
          </a>
          <a href='#contact' className='text-[#132322] hover:text-gray-600' style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600' }}>
            CONTACT
          </a>
        </div>
        <div className='md:hidden'>
          <FaBars onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-[#132322] cursor-pointer' size={24} />
        </div>
      </div>
      {isMenuOpen && (
        <div className='md:hidden absolute top-[80px] left-0 w-full bg-white flex flex-col items-center'>
          <a href='#about' className='py-2 text-[#132322] hover:text-gray-600' style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600' }}>
            ABOUT US
          </a>
          <a href='#category' className='py-2 text-[#132322] hover:text-gray-600' style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600' }}>
            CATEGORY
          </a>
          <a href='#contact' className='py-2 text-[#132322] hover:text-gray-600' style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600' }}>
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

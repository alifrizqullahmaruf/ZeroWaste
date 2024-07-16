// import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-white flex w-full h-[130px] px-[104px] py-[52px] items-center gap-[805px]'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-[#132322] text-xl font-bold' style={{ fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '700', lineHeight: 'normal' }}>
          ZeroWaste
        </div>
        <div className='flex space-x-4'>
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
      </div>
    </nav>
  );
}

export default Navbar;

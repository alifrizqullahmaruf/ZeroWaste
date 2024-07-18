import React from 'react'
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const navigate = useNavigate(); // Perbaiki penulisan ini

  const handleNavigation = (route) => {
    navigate(route); // Menggunakan navigate untuk mengarahkan ke rute
  };

  return (
<section className='flex flex-col items-center py-20 bg-[#EDF7F5] ' style={{ height: '842px', flexShrink: '0' }}>
      <h2 className='text-[#132322] font-extrabold mb-12' style={{ fontFamily: 'Montserrat', fontSize: '48px', fontWeight: '800', lineHeight: 'normal' }}>
      CATEGORIES
      </h2>
      <div className='inline-flex items-end gap-[60px] my-auto'>
        <div className='flex flex-col items-center gap-[33px] mx-auto bg-white p-8 rounded-xl' onClick={() => handleNavigation('/organic')}  >
          <p className='text-[#132322] text-center' style={{ fontFamily: 'Montserrat', fontSize: '32px', fontWeight: '800', lineHeight: '24px', width: '294px' }}>
            ORGANIC
          </p>
          <img src='.\src\assets\categoriesOrganic.png' alt='Feature 1' style={{ width: '300PX', height: '300PX' }} />
        </div>
        <div className='flex flex-col items-center gap-[33px] mx-auto bg-white p-8 rounded-xl' onClick={() => handleNavigation('/')} >
          <p className='text-[#132322] text-center' style={{ fontFamily: 'Montserrat', fontSize: '32px', fontWeight: '800', lineHeight: '24px', width: '294px' }}>
           INORGANIC
          </p>
          <img src='.\src\assets\categoriesInorganic.png' alt='Feature 2' style={{ width: '300PX', height: '300PX' }} />
        </div>
        <div className='flex flex-col items-center gap-[33px] mx-auto bg-white p-8 rounded-xl' onClick={() => handleNavigation('/')} >
          <p className='text-[#132322] text-center' style={{ fontFamily: 'Montserrat', fontSize: '32px', fontWeight: '800', lineHeight: '24px', width: '294px' }}>
            B3
          </p>
          <img src='.\src\assets\categoriesB3.png' alt='Feature 3' style={{ width: '300PX', height: '300PX' }} />
        </div>
      </div>
    </section>
  )
}

export default Category
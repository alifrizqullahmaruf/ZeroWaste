import React from 'react';
import { useNavigate } from 'react-router-dom';
import categoriesOrganic from '/src/assets/categoriesOrganic.png';
import categoriesInorganic from '/src/assets/categoriesInorganic.png';
import categoriesB3 from '/src/assets/categoriesB3.png';

const Category = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <section className='flex flex-col items-center py-20 bg-[#EDF7F5]'>
      <h2 className='text-[#132322] font-extrabold mb-12 text-center' style={{ fontFamily: 'Montserrat', fontSize: '48px', fontWeight: '800', lineHeight: 'normal' }}>
        CATEGORIES
      </h2>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        <div
          className='flex flex-col items-center gap-8 p-8 transition-transform duration-300 bg-white cursor-pointer rounded-xl hover:scale-105'
          onClick={() => handleNavigation('/organic')}
        >
          <p className='text-[#132322] text-center' style={{ fontFamily: 'Montserrat', fontSize: '32px', fontWeight: '800', lineHeight: '24px' }}>
            ORGANIC
          </p>
          <img src={categoriesOrganic} alt='Organic' className='w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80' />
        </div>
        <div
          className='flex flex-col items-center gap-8 p-8 transition-transform duration-300 bg-white cursor-pointer rounded-xl hover:scale-105'
          onClick={() => handleNavigation('/inorganic')}
        >
          <p className='text-[#132322] text-center' style={{ fontFamily: 'Montserrat', fontSize: '32px', fontWeight: '800', lineHeight: '24px' }}>
            INORGANIC
          </p>
          <img src={categoriesInorganic} alt='Inorganic' className='w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80' />
        </div>
        <div
          className='flex flex-col items-center gap-8 p-8 transition-transform duration-300 bg-white cursor-pointer rounded-xl hover:scale-105'
          onClick={() => handleNavigation('/b3')}
        >
          <p className='text-[#132322] text-center' style={{ fontFamily: 'Montserrat', fontSize: '32px', fontWeight: '800', lineHeight: '24px' }}>
            B3
          </p>
          <img src={categoriesB3} alt='B3' className='w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80' />
        </div>
      </div>
    </section>
  );
};

export default Category;

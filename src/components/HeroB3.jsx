import React from 'react';
import categoriesB3 from '/src/assets/categoriesB3.png';

const HeroB3 = () => {
  return (
    <section className='flex flex-col items-center w-full px-4 py-20 bg-white md:px-8'>
      <div className='container mx-auto flex flex-col md:flex-row items-center max-w-[1240px]'>
        <div className='flex justify-center w-full mb-8 md:w-1/2 md:justify-end md:mb-0' data-aos="fade-right">
          <img
            src={categoriesB3}
            alt='B3 Waste'
            className='rounded-lg'
            style={{ width: '100%', maxWidth: '580px', height: 'auto' }}
          />
        </div>
        <div className='w-full text-center md:text-left md:w-1/2' data-aos="fade-left">
          <h1 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '32px', fontWeight: '800', lineHeight: 'normal' }}>
            B3 WASTE
          </h1>
          <p className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontStyle: 'italic', fontWeight: '500', lineHeight: '24px' }}>
            <span className='font-bold'>B3 waste</span> comes from the initial letters of the Indonesian word for each type of hazardous waste. This hazardous waste is categorized into three main groups: <span className='font-bold'>flammable waste, reactive waste, and toxic waste.</span> 
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroB3;

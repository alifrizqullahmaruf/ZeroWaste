import React from 'react';

const Statistik = () => {
  return (
    <div className='w-full py-20 bg-white'>
      <div className='container mx-auto grid grid-cols-1 gap-8 max-w-[1240px] px-4 md:grid-cols-3' >
        <div className='text-center' data-aos="zoom-in" >
          <h2 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '36px', fontWeight: '800', lineHeight: 'normal' }}>
            40-50%
          </h2>
          <p className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '400', lineHeight: '24px' }}>
            of total waste in Indonesia is organic, meaning 14-17 million tons annually
          </p>
        </div>
        <div className='text-center' data-aos="zoom-in">
          <h2 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '36px', fontWeight: '800', lineHeight: 'normal' }}>
            95,500 tons
          </h2>
          <p className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '400', lineHeight: '24px' }}>
            waste were generated in Indonesia daily
          </p>
        </div>
        <div className='text-center' data-aos="zoom-in">
          <h2 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '36px', fontWeight: '800', lineHeight: 'normal' }}>
            2nd
          </h2>
          <p className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '400', lineHeight: '24px' }}>
            largest contributor to global plastic pollution after China
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statistik;

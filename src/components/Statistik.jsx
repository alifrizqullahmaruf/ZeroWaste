import React from 'react';

const Statistik = () => {
  return (
    <div className='bg-white py-20 w-full'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1240px]'>
        <div className='text-center'>
          <h2 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '48px', fontWeight: '800', lineHeight: 'normal' }}>
            40-50%
          </h2>
          <p className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>
            of total waste in Indonesia is organic, meaning 14-17 million tons annually
          </p>
        </div>
        <div className='text-center'>
          <h2 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '48px', fontWeight: '800', lineHeight: 'normal' }}>
            95,500 tons
          </h2>
          <p className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>
            waste were generated in Indonesia daily
          </p>
        </div>
        <div className='text-center'>
          <h2 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '48px', fontWeight: '800', lineHeight: 'normal' }}>
            2nd
          </h2>
          <p className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>
            largest contributor to global plastic pollution after China
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statistik;
import React from 'react';
import CountUp from 'react-countup';

const Statistik = () => {
  return (
    <div className='w-full py-20 bg-[#EDF7F5]'>
      <div className='container mx-auto grid grid-cols-1 gap-8 max-w-[1240px] px-4 md:grid-cols-3' >
        <div className='text-center' data-aos="zoom-in" data-aos-delay="300" >
          <h2 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '36px', fontWeight: '800', lineHeight: 'normal' }}>
          <CountUp end={40} duration={6} /> - <CountUp end={50} duration={6} />%
          </h2>
          <p className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '400', lineHeight: '24px' }}>
            of total waste in Indonesia is organic, meaning 14-17 million tons annually
          </p>
        </div>
        <div className='text-center' data-aos="zoom-in" data-aos-delay="500">
          <h2 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '36px', fontWeight: '800', lineHeight: 'normal' }}>
          <CountUp end={95500} duration={6} /> tons
          </h2>
          <p className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '400', lineHeight: '24px' }}>
            waste were generated in Indonesia daily
          </p>
        </div>
        <div className='text-center' data-aos="zoom-in" data-aos-delay="700">
          <h2 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '36px', fontWeight: '800', lineHeight: 'normal' }}>
          <CountUp end={2} duration={6} />nd
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

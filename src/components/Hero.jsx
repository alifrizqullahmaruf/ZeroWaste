// import React from 'react';

const Hero = () => {
  return (
    <section className='bg-white py-20 w-full'>
      <div className='container mx-auto flex flex-col md:flex-row items-center max-w-[1240px]'>
        <div className='w-full md:w-1/2 text-center md:text-left'>
          <h1 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '48px', fontWeight: '800', lineHeight: 'normal' }}>
            Greening the Future: Your Journey to a Sustainable Tomorrow with ZeroWaste
          </h1>
          <p className='text-[#132322] mb-6' style={{ fontFamily: 'Montserrat', fontSize: '20px', fontStyle: 'italic', fontWeight: '500', lineHeight: '28px' }}>
            Let’s actively participate in creating a waste-free world by implementing environmentally friendly practices into everyday life.
          </p>
        </div>
        <div className='w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end'>
          <img src='./src/assets/hero.png' alt='ZeroWaste' className='rounded-lg' style={{ width: '624px', height: '602px', flexShrink: '0' }} />
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React from 'react';
import hero from '/src/assets/hero.png';
import AOS from 'aos';

const Hero = () => {
  return (
    <section className='w-full py-20 pt-32 bg-[#EDF7F5]'>
      <div className='container mx-auto flex flex-col md:flex-row items-center max-w-[1240px] px-4'>
        <div className='w-full text-center md:w-1/2 md:text-left' data-aos="fade-right">
          <h1 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '52px', fontWeight: '800', lineHeight: 'normal' }}>
            Greening the Future: Your Journey to a Sustainable Tomorrow with ZeroWaste
          </h1>
          <p className='text-[#132322] mb-6' style={{ fontFamily: 'Montserrat', fontSize: '20px', fontStyle: 'italic', fontWeight: '500', lineHeight: '28px' }}>
            Let’s actively participate in creating a waste-free world by implementing environmentally friendly practices into everyday life.
          </p>
        </div>
        <div className='flex justify-center w-full mt-8 md:w-1/2 md:mt-0 md:justify-end' data-aos="fade-left">
          <img src={hero} alt='ZeroWaste' className='rounded-lg' style={{ width: '100%', maxWidth: '624px', height: 'auto' }} />
        </div>
      </div>
    </section>
  );
}

export default Hero;

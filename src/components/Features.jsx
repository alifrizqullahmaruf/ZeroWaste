import React from 'react';
import features1 from '/src/assets/features1.png';
import features2 from '/src/assets/features2.png';
import features3 from '/src/assets/features3.png';

const Features = () => {
  return (
    <section className='flex flex-col items-center py-20 bg-[#BFDED6]'>
      <h2 className='text-[#132322] font-extrabold mb-12 text-center' data-aos="zoom-in" data-aos-delay="300" style={{ fontFamily: 'Montserrat', fontSize: '36px', fontWeight: '800', lineHeight: 'normal' }}>
        What can you do with ZeroWaste?
      </h2>
      <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-[60px]'>
        <div className='flex flex-col items-center gap-[20px]' data-aos="zoom-in" data-aos-delay="400">
          <img src={features1} alt='Feature 1' className='w-[100px] md:w-[150px] h-auto' />
          <p className='text-[#132322] text-center' style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '400', lineHeight: '24px', maxWidth: '294px' }}>
            Discover practical solutions and tips for effectively managing each type of waste at home.
          </p>
        </div>
        <div className='flex flex-col items-center gap-[20px]' data-aos="zoom-in" data-aos-delay="500">
          <img src={features2} alt='Feature 2' className='w-[100px] h-auto' />
          <p className='text-[#132322] text-center' style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '400', lineHeight: '24px', maxWidth: '294px' }}>
            Get personalized advice and answers from our intelligent AI assistant.
          </p>
        </div>
        <div className='flex flex-col items-center gap-[20px]' data-aos="zoom-in" data-aos-delay="600">
          <img src={features3} alt='Feature 3' className='w-[100px] h-auto' />
          <p className='text-[#132322] text-center' style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '400', lineHeight: '24px', maxWidth: '294px' }}>
            Be the change! Contribute to a cleaner and greener future of Indonesia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

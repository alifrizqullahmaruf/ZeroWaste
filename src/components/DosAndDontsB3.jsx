import React from 'react';
import doIcon from '/src/assets/do.png';
import dontIcon from '/src/assets/dont.png';

const DosAndDontsB3 = () => {
  return (
    <section className='w-full px-4 py-10 bg-white md:px-8'>
      <div className='container flex flex-col mx-auto md:flex-row'>
        {/* DO's Section */}
        <div className='flex flex-col items-center w-full p-6 text-center md:w-1/2 md:text-left' data-aos="zoom-in" data-aos-delay="300">
          <h1 className='text-[#132322] mb-6 text-3xl md:text-4xl font-extrabold text-center' 
              style={{ fontFamily: 'Montserrat', lineHeight: 'normal', width: '100%', maxWidth: '610px' }}>
            DO’s
          </h1>
          <ul className='flex flex-col items-center gap-6 md:gap-8'>
            <li className='flex items-start gap-4 w-full max-w-[473px] py-2'>
              <img src={doIcon} alt='Do' className='w-6 h-6' />
              <span className='text-[#132322] text-sm md:text-base' style={{ fontFamily: 'Montserrat', lineHeight: '24px' }}>
                Clearly identify and label B3 waste containers with appropriate hazard symbols and information about the contents.
              </span>
            </li>
            <li className='flex items-start gap-4 w-full max-w-[473px] py-2'>
              <img src={doIcon} alt='Do' className='w-6 h-6' />
              <span className='text-[#132322] text-sm md:text-base' style={{ fontFamily: 'Montserrat', lineHeight: '24px' }}>
                Store B3 waste in a secure place. Use containers that are compatible with the type of waste being stored.
              </span>
            </li>
            <li className='flex items-start gap-4 w-full max-w-[473px] py-2'>
              <img src={doIcon} alt='Do' className='w-6 h-6' />
              <span className='text-[#132322] text-sm md:text-base' style={{ fontFamily: 'Montserrat', lineHeight: '24px' }}>
                Implement waste minimization practices to reduce the generation of B3 waste. This may include using alternative materials, improving processes, or recycling where possible.
              </span>
            </li>
          </ul>
        </div>
        {/* DON'Ts Section */}
        <div className='flex flex-col items-center w-full p-6 text-center bg-[#BFDED6] md:w-1/2 md:text-left' data-aos="zoom-in" data-aos-delay="400">
          <h1 className='text-[#132322] mb-6 text-3xl md:text-4xl font-extrabold text-center' 
              style={{ fontFamily: 'Montserrat', lineHeight: 'normal', width: '100%', maxWidth: '610px' }}>
            DON’Ts
          </h1>
          <ul className='flex flex-col items-center gap-6 md:gap-8'>
            <li className='flex items-start gap-4 w-full max-w-[473px] py-2'>
              <img src={dontIcon} alt='Dont' className='w-6 h-6' />
              <span className='text-[#132322] text-sm md:text-base' style={{ fontFamily: 'Montserrat', lineHeight: '24px' }}>
                Don’t ignore labeling. Ignoring labeling increases the risk of accidental exposure or improper handling.
              </span>
            </li>
            <li className='flex items-start gap-4 w-full max-w-[473px] py-2'>
              <img src={dontIcon} alt='Dont' className='w-6 h-6' />
              <span className='text-[#132322] text-sm md:text-base' style={{ fontFamily: 'Montserrat', lineHeight: '24px' }}>
                Don’t dispose of electronics improperly. Electronics often contain hazardous materials.
              </span>
            </li>
            <li className='flex items-start gap-4 w-full max-w-[473px] py-2'>
              <img src={dontIcon} alt='Dont' className='w-6 h-6' />
              <span className='text-[#132322] text-sm md:text-base' style={{ fontFamily: 'Montserrat', lineHeight: '24px' }}>
                Don’t bury or burn B3 waste. Burying or burning B3 waste at home can result in environmental pollution and health hazards.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DosAndDontsB3;

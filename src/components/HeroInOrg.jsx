import React from 'react';
import categoriesInOrganic from "/src/assets/categoriesInorganic.png";

const HeroInOrg = () => {
  return (
    <section className='w-full py-20 bg-white'>
      <div className='container mx-auto flex flex-col md:flex-row items-center max-w-[1240px] px-4'>
        <div className='flex justify-center w-full mt-8 md:w-1/2 md:mt-0 md:justify-end'>
          <img 
            src={categoriesInOrganic} 
            alt='Inorganic Waste' 
            className='rounded-lg' 
            style={{ width: '100%', maxWidth: '580px', height: 'auto', maxHeight: '580px' }}
          />
        </div>
        <div className='w-full text-center md:w-1/2 md:text-left md:pl-8'>
          <h1 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '36px', fontWeight: '800', lineHeight: 'normal' }}>
            INORGANIC WASTE
          </h1>
          <p className='text-[#132322] mb-6' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontStyle: 'italic', fontWeight: '500', lineHeight: '24px' }}>
            <span className='font-bold'>Inorganic waste</span> is any type of waste that does not come from living organisms. Inorganic waste can be a major problem for the environment because it often <span className='font-bold'>takes a very long time to decompose.</span> For example, it can take <span className='font-bold'>hundreds of years</span> for a plastic bottle to decompose in a landfill. This can lead to pollution and other environmental problems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroInOrg;

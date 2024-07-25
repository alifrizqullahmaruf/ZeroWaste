import React from 'react';
import categoriesOrganic from '/src/assets/categoriesOrganic.png';

const HeroOrg = () => {
  return (
    <section className='w-full py-20 bg-[#EDF7F5]'>
      <div className='container mx-auto flex flex-col md:flex-row items-center max-w-[1240px]'>
        <div className='flex justify-center w-full mt-8 md:w-1/2 md:mt-0 md:justify-end' data-aos="fade-right">
          <img src={categoriesOrganic} alt='ZeroWaste' className='w-full h-auto max-w-xs rounded-lg md:w-auto md:max-w-none' />
        </div>
        <div className='w-full mt-8 text-center md:w-1/2 md:text-left md:mt-0' data-aos="fade-left">
          <h1 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '36px', md: { fontSize: '48px' }, fontWeight: '800', lineHeight: 'normal' }}>
            ORGANIC WASTE
          </h1>
          <p className='text-[#132322] mb-6' style={{ fontFamily: 'Montserrat', fontSize: '18px', md: { fontSize: '20px' }, fontStyle: 'italic', fontWeight: '500', lineHeight: '28px' }}>
            <span className='font-bold'>Organic waste</span> refers to any material that comes from living organisms and can decompose naturally. This includes <span className='font-bold'>food scrapes</span> (fruit and vegetable peels, eggshells, tea bags, etc), <span className='font-bold'>yard waste</span> (leaves, twigs, branches, etc), and <span className='font-bold'>paper products</span> (paper towels, tissues, etc).
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroOrg;

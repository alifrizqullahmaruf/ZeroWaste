// import React from 'react'
import valueCompany from '/src/assets/valueCompany.png';

const ValueCompany = () => {
  return (
    <section className='w-full py-20 bg-white'>
      <div id='about' className='container mx-auto flex flex-col md:flex-row items-center max-w-[1240px] px-4'>
        <div className='flex justify-center w-full mb-8 md:w-1/2 md:mb-0 md:justify-end' data-aos="fade-right">
          <img src={valueCompany} alt='ZeroWaste' className='rounded-lg w-full h-auto md:w-[624px] md:h-[602px]' />
        </div>
        <div className='flex flex-col items-center mt-8 space-y-8 md:items-start md:w-1/2'>
          {/* OUR VALUES */}
          <div className='pb-10 text-center md:text-left' data-aos="fade-left">
            <h3 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '32px', fontWeight: '800', lineHeight: 'normal' }}>
              OUR VALUES
            </h3>
            <div className='w-full md:w-[650px] h-auto flex-shrink-0'>
              <p className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '400', lineHeight: '24px' }}>
                We believe that anyone, especially homemakers who often manage household waste, has the power to make a positive impact on the environment. We strive to be a reliable source of information and education, empowering individuals to make informed decisions about waste management.
              </p>
            </div>
          </div>
          {/* OUR MISSION */}
          <div className='text-center md:text-left' data-aos="fade-left">
            <h3 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '32px', fontWeight: '800', lineHeight: 'normal' }}>
              OUR MISSION
            </h3>
            <div className='w-full md:w-[650px] h-auto flex-shrink-0'>
              <p className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '400', lineHeight: '24px' }}>
                We want to provide the knowledge and resources needed to confidently manage household waste. Furthermore, we encourage practices that minimize our environmental footprint and conserve resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueCompany

import React from 'react'

const ValueCompany = () => {
  return (
    <section className='w-full py-20 bg-white'>
      <div className='container mx-auto flex flex-col md:flex-row items-center max-w-[1240px]'>
        <div className='flex justify-center w-full mt-8 md:w-1/2 md:mt-0 md:justify-end'>
          <img src='./src/assets/valueCompany.png' alt='ZeroWaste' className='rounded-lg' style={{ width: '624px', height: '602px', flexShrink: '0' }} />
        </div>
        <div className='flex flex-col items-center space-y-8 mt- md:items-start md:w-1/2'>
          {/* OUR VALUES */}
          <div className='text-center md:text-left'>
            <h3 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '32px', fontWeight: '800', lineHeight: 'normal' }}>
              OUR VALUES
            </h3>
            <div className='w-full md:w-[650px] h-[197px] flex-shrink-0'>
              <p className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px', width: '527px' }}>
                We believe that anyone, especially homemakers who often manage household waste, has the power to make a positive impact on the environment. We strive to be a reliable source of information and education, empowering individuals to make informed decisions about waste management.
              </p>
            </div>
          </div>
          {/* OUR MISSION */}
          <div className='text-center md:text-left'>
            <h3 className='text-[#132322] font-extrabold mb-4' style={{ fontFamily: 'Montserrat', fontSize: '32px', fontWeight: '800', lineHeight: 'normal' }}>
              OUR MISSION
            </h3>
            <div className='w-full md:w-[650px] h-[197px] flex-shrink-0'>
              <p className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px', width: '527px' }}>
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

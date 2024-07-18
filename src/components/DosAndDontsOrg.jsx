import React from 'react';

const DosAndDontsOrg = () => {
  return (
    <section className='w-full py-20 bg-white'>
      <div className='container flex flex-col items-center mx-auto md:flex-row'>
        {/* DO's Section */}
        <div className='flex flex-col items-center w-full p-8 text-center md:w-1/2 md:text-left'>
          <h1 className='text-[#132322] flex flex-col justify-center mb-4 font-extrabold text-center ' style={{ fontFamily: 'Montserrat', fontSize: '48px', fontWeight: '800', lineHeight: 'normal', width: '610px', height: '110px', flexShrink: '0' }}>
            DO’s
          </h1>
          <ul className='flex flex-col items-center gap-[20px]'>
            <li className='flex items-start gap-[27px] w-[473px] py-[5px]'>
              <img src='./src/assets/do.png' alt='Do' style={{ width: '25px', height: '25px', flexShrink: '0' }} />
              <span className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>
                Separate your organic waste from other types of waste.
              </span>
            </li>
            <li className='flex items-start gap-[27px] w-[473px] py-[5px]'>
              <img src='./src/assets/do.png' alt='Do' style={{ width: '25px', height: '25px', flexShrink: '0' }} />
              <span className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>
                Use organic waste for composting if possible.
              </span>
            </li>
            <li className='flex items-start gap-[27px] w-[473px] py-[5px]'>
              <img src='./src/assets/do.png' alt='Do' style={{ width: '25px', height: '25px', flexShrink: '0' }} />
              <span className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>
                Educate your family and friends about the importance of proper waste management.
              </span>
            </li>
          </ul>
        </div>
        {/* DON'Ts Section */}
        <div className='flex flex-col items-center w-full p-8 text-center bg-[#BFDED6] md:w-1/2 md:text-left'>
          <h1 className='text-[#132322] font-extrabold mb-4 flex flex-col justify-center text-center' style={{ fontFamily: 'Montserrat', fontSize: '48px', fontWeight: '800', lineHeight: 'normal', width: '610px', height: '110px', flexShrink: '0' }}>
            DON’Ts
          </h1>
          <ul className='flex flex-col items-center gap-[20px]'>
            <li className='flex items-start gap-[27px] w-[473px] py-[5px]'>
              <img src='./src/assets/dont.png' alt='Dont' style={{ width: '25px', height: '25px', flexShrink: '0' }} />
              <span className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>
                Do not mix organic waste with hazardous or non-organic waste.
              </span>
            </li>
            <li className='flex items-start gap-[27px] w-[473px] py-[5px]'>
              <img src='./src/assets/dont.png' alt='Dont' style={{ width: '25px', height: '25px', flexShrink: '0' }} />
              <span className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>
                Avoid disposing of organic waste in non-designated areas.
              </span>
            </li>
            <li className='flex items-start gap-[27px] w-[473px] py-[5px]'>
              <img src='./src/assets/dont.png' alt='Dont' style={{ width: '25px', height: '25px', flexShrink: '0' }} />
              <span className='text-[#132322]' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>
                Never burn organic waste as it can cause environmental damage.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DosAndDontsOrg;

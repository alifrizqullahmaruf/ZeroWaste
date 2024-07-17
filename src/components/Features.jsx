// import React from 'react';

const Features = () => {
  return (
    <section className='flex flex-col items-center py-20 bg-[#BFDED6] ' style={{ height: '550px', flexShrink: '0' }}>
      <h2 className='text-[#132322] font-extrabold mb-12' style={{ fontFamily: 'Montserrat', fontSize: '48px', fontWeight: '800', lineHeight: 'normal' }}>
        What can you do with ZeroWaste?
      </h2>
      <div className='inline-flex items-end gap-[60px] my-auto'>
        <div className='flex flex-col items-center gap-[33px] mx-auto'>
          <img src='.\src\assets\features1.png' alt='Feature 1' style={{ width: '150px', height: '70px' }} />
          <p className='text-[#132322] text-center' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px', width: '294px' }}>
            Discover practical solutions and tips for effectively managing each type of waste at home.
          </p>
        </div>
        <div className='flex flex-col items-center gap-[33px] mx-auto'>
          <img src='.\src\assets\features2.png' alt='Feature 2' style={{ width: '100px', height: '76.735px' }} />
          <p className='text-[#132322] text-center' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px', width: '294px' }}>
            Get a personalized advice and answers from our intelligent AI assistant.
          </p>
        </div>
        <div className='flex flex-col items-center gap-[33px] mx-auto'>
          <img src='.\src\assets\features3.png' alt='Feature 3' style={{ width: '100px', height: '66.953px' }} />
          <p className='text-[#132322] text-center' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px', width: '294px' }}>
            Be the change! Contribute to a cleaner and greener future of Indonesia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;

import React from 'react';

const WasteManagementOrg = () => {
  return (
    <section className='flex flex-col items-center w-full px-4 py-20 bg-white md:px-8'>
      <h2 className='text-[#132322] font-extrabold text-center mb-6 md:mb-12' style={{ fontFamily: 'Montserrat', fontSize: '36px', fontWeight: '800', lineHeight: 'normal' }}>
        INORGANIC WASTE MANAGEMENT
      </h2>
      <div className='flex flex-col items-center text-center md:flex-row md:justify-center'>
        <p className='text-[#132322] text-center' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px', maxWidth: '800px' }}>
          Inorganic waste management involves the proper handling, collection, disposal, and, whenever possible, recycling or reuse of non-biodegradable materials that do not originate from living organisms. Inorganic waste includes materials such as plastics, metals, glass, ceramics, and other synthetic or man-made items.
        </p>
      </div>
    </section>
  );
}

export default WasteManagementOrg;

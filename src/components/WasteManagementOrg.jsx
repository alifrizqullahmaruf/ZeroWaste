import React from 'react';

const WasteManagementOrg = () => {
  return (
    <section className='flex flex-col items-center py-20 bg-white' style={{ minHeight: '550px' }}>
      <h2 className='text-[#132322] font-extrabold mb-8 text-center' style={{ fontFamily: 'Montserrat', fontSize: '36px', md: { fontSize: '48px' }, fontWeight: '800', lineHeight: 'normal', width: '90%', maxWidth: '610px' }}>
        ORGANIC WASTE MANAGEMENT
      </h2>
      <div className='flex flex-col items-center gap-6 px-4 md:px-0'>
        <p className='text-[#132322] text-center' style={{ fontFamily: 'Montserrat', fontSize: '16px', md: { fontSize: '18px' }, fontWeight: '400', lineHeight: '24px', width: '90%', maxWidth: '616px' }}>
          Organic waste management involves the proper handling, recycling, and disposal of biodegradable materials derived from living organisms. Organic waste includes materials such as food scraps, yard waste, agricultural residues, and other biodegradable substances.
        </p>
      </div>
    </section>
  );
};

export default WasteManagementOrg;

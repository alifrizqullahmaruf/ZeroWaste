import doIcon from '/src/assets/do.png';
import dontIcon from '/src/assets/dont.png';

const DosAndDontsOrg = () => {
  return (
    <section className='w-full px-4 bg-[#EDF7F5] md:px-8 pb-14'>
      <div className='container flex flex-col md:flex-row'> 
        {/* DO's Section */}
        <div className='flex flex-col items-center w-full p-8 m-8 text-center bg-white md:w-1/2 md:text-left drop-shadow-xl rounded-xl' data-aos="zoom-in" data-aos-delay="300">
          <h1 className='text-[#132322] mb-6 text-3xl md:text-4xl font-extrabold text-center' 
              style={{ fontFamily: 'Montserrat', lineHeight: 'normal', width: '100%', maxWidth: '610px' }}>
            DO’s
          </h1>
          <ul className='flex flex-col items-center gap-6 md:gap-8'>
            <li className='flex items-start gap-4 w-full max-w-[473px] py-2'>
              <img src={doIcon} alt='Do' className='w-6 h-6' />
              <span className='text-[#132322] text-sm md:text-base' style={{ fontFamily: 'Montserrat', lineHeight: '24px',fontSize: '18px' }}>
              <span className='font-bold'> Reduce food waste. </span>    Plan your meals, buy only what you need, and store food properly to minimize spoilage.
              </span>
            </li>
            <li className='flex items-start gap-4 w-full max-w-[473px] py-2'>
              <img src={doIcon} alt='Do' className='w-6 h-6' />
              <span className='text-[#132322] text-sm md:text-base' style={{ fontFamily: 'Montserrat', lineHeight: '24px',fontSize: '18px' }}>
              <span className='font-bold'>  Segregate waste. </span>   Separate organic waste from other types of waste at the source to prevent contamination of recyclable materials.
              </span>
            </li>
            <li className='flex items-start gap-4 w-full max-w-[473px] py-2'>
              <img src={doIcon} alt='Do' className='w-6 h-6' />
              <span className='text-[#132322] text-sm md:text-base' style={{ fontFamily: 'Montserrat', lineHeight: '24px',fontSize: '18px' }}>
              <span className='font-bold'> Compost. </span>    You can compost food scraps, yard trimming, and even some paper products.
              </span>
            </li>
          </ul>
        </div>
        {/* DON'Ts Section */}
        <div className='flex flex-col items-center w-full p-8 text-center bg-[#BFDED6] md:w-1/2 md:text-left m-8 drop-shadow-xl rounded-xl ' data-aos="zoom-in" data-aos-delay="500">
          <h1 className='text-[#132322] mb-6 text-3xl md:text-4xl font-extrabold text-center' 
              style={{ fontFamily: 'Montserrat', lineHeight: 'normal', width: '100%', maxWidth: '610px' }}>
            DON’Ts
          </h1>
          <ul className='flex flex-col items-center gap-6 md:gap-8'>
            <li className='flex items-start gap-4 w-full max-w-[473px] py-2'>
              <img src={dontIcon} alt='Dont' className='w-6 h-6' />
              <span className='text-[#132322] text-sm md:text-base' style={{ fontFamily: 'Montserrat', lineHeight: '24px',fontSize: '18px' }}>
              <span className='font-bold'> Burn organic waste. </span>    Burning releases harmful air pollutants and contributes to climate change.
              </span>
            </li>
            <li className='flex items-start gap-4 w-full max-w-[473px] py-2'>
              <img src={dontIcon} alt='Dont' className='w-6 h-6' />
              <span className='text-[#132322] text-sm md:text-base' style={{ fontFamily: 'Montserrat', lineHeight: '24px',fontSize: '18px' }}>
              <span className='font-bold'> Landfill organic waste.  </span>   Organic waste decomposes anaerobically in landfills, generating methane, a potent greenhouse gas.
              </span>
            </li>
            <li className='flex items-start gap-4 w-full max-w-[473px] py-2'>
              <img src={dontIcon} alt='Dont' className='w-6 h-6' />
              <span className='text-[#132322] text-sm md:text-base' style={{ fontFamily: 'Montserrat', lineHeight: '24px',fontSize: '18px' }}>
              <span className='font-bold'> Add chemicals to your compost pile. </span>    Avoid using pesticides or other harmful chemical in your compost.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DosAndDontsOrg;

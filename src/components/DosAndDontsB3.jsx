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
              <span className='font-bold'> Clearly identify and label B3 waste containers. </span>     with appropriate hazard symbols and information about the contents.
              </span>
            </li>
            <li className='flex items-start gap-4 w-full max-w-[473px] py-2'>
              <img src={doIcon} alt='Do' className='w-6 h-6' />
              <span className='text-[#132322] text-sm md:text-base' style={{ fontFamily: 'Montserrat', lineHeight: '24px',fontSize: '18px' }}>
              <span className='font-bold'>  Store B3 waste. </span>   in a secure place. Use containers that are compatible with the type of waste being stored.
              </span>
            </li>
            <li className='flex items-start gap-4 w-full max-w-[473px] py-2'>
              <img src={doIcon} alt='Do' className='w-6 h-6' />
              <span className='text-[#132322] text-sm md:text-base' style={{ fontFamily: 'Montserrat', lineHeight: '24px',fontSize: '18px' }}>
              <span className='font-bold'> Implement waste minimization practices to reduce the generation of B3 waste. </span>    This may include using alternative materials, improving processes, or recycling where possible.
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
              <span className='font-bold'> Don’t ignore labeling. </span>    Ignoring labeling increase the risk of accidental exposure or improper handling.
              </span>
            </li>
            <li className='flex items-start gap-4 w-full max-w-[473px] py-2'>
              <img src={dontIcon} alt='Dont' className='w-6 h-6' />
              <span className='text-[#132322] text-sm md:text-base' style={{ fontFamily: 'Montserrat', lineHeight: '24px',fontSize: '18px' }}>
              <span className='font-bold'> Don’t dispose of electronics improperly. </span>    Electronics often contain hazardous materials.
              </span>
            </li>
            <li className='flex items-start gap-4 w-full max-w-[473px] py-2'>
              <img src={dontIcon} alt='Dont' className='w-6 h-6' />
              <span className='text-[#132322] text-sm md:text-base' style={{ fontFamily: 'Montserrat', lineHeight: '24px',fontSize: '18px' }}>
              <span className='font-bold'> Don’t bury or burn B3 waste.  </span> Burying or burning B3 waste at home can result in environmental pollution and health hazards.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DosAndDontsOrg;

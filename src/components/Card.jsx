import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ imageSrc, text }) => {
  return (
    <div className='relative flex items-center justify-center mx-4 my-12 md:mx-8 lg:mx-12' 
         style={{ width: '100%', maxWidth: '610px', height: 'auto' }}>
      <img src={imageSrc} alt="Card image" 
           style={{ width: '100%', height: 'auto' }} />
      <div className='absolute flex items-center justify-center text-center' 
           style={{ width: '100%', height: '100%', color: '#132322', fontFamily: 'Montserrat', fontSize: '48px', fontWeight: '800', lineHeight: 'normal' }}>
        {text}
      </div>
    </div>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;

import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ imageSrc, text }) => {
  return (
    <div className='relative flex items-center justify-center mx-4 my-12' style={{ width: '610px', height: '406px' }}>
      <img src={imageSrc} alt="Card image" style={{ width: '610px', height: '406px' }} />
      <div className='absolute flex items-center justify-center text-center' style={{ width: '610px', height: '406px', color: '#132322', fontFamily: 'Montserrat', fontSize: '48px', fontWeight: '800', lineHeight: 'normal' }}>
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

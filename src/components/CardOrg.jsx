import React from 'react';
import Marquee from "react-fast-marquee";
import Card from './Card';

const CardOrg = () => {
  return (
    <div className="w-full overflow-hidden">
      <Marquee>
        <Card imageSrc='./src/assets/org1.png' text='COMPOSTING' />
        <Card imageSrc='./src/assets/org2.png' text='FOOD WASTE REDUCTION' />
        <Card imageSrc='./src/assets/org3.png' text='REDUCING' />
      </Marquee>
    </div>
  );
};

export default CardOrg;

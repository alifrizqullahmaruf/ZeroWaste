import React from "react";
import Marquee from "react-fast-marquee";
import Card from "./Card";

import b31 from "/src/assets/b31.png";
import b32 from "/src/assets/b32.png";
import b33 from "/src/assets/b33.png";

const CardB3 = () => {
  return (
    <div className="w-full overflow-hidden">
      <Marquee>
        <Card imageSrc={b31} text="USED COSMETICS AND SKINCARE" />
        <Card imageSrc={b32} text="USED BATTERY" />
        <Card imageSrc={b33} text="EXPIRED DRUG" />
      </Marquee>
    </div>
  );
};

export default CardB3;

import React from "react";
import Marquee from "react-fast-marquee";
import Card from "./Card";

import inorg1 from "/src/assets/inorg1.png";
import inorg2 from "/src/assets/inorg2.png";
import inorg3 from "/src/assets/inorg3.png";

const CardInOrg = () => {
  return (
    <div className="w-full overflow-hidden">
      <Marquee>
        <Card imageSrc={inorg1} text="MAKING ECOBRICK" />
        <Card imageSrc={inorg2} text="MAKING PAPER FROM WASTE PAPER" />
        <Card imageSrc={inorg3} text="REUSABLE SHOPPING BAG" />
      </Marquee>
    </div>
  );
};

export default CardInOrg;

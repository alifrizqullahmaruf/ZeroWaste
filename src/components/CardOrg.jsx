import React from "react";
import Marquee from "react-fast-marquee";
import Card from "./Card";

import org1 from "/src/assets/org1.png";
import org2 from "/src/assets/org2.png";
import org3 from "/src/assets/org3.png";
import org4 from "/src/assets/org4.png";
import org5 from "/src/assets/org5.png";
import org6 from "/src/assets/org6.png";

const CardOrg = () => {
  return (
    <div className="w-full overflow-hidden" data-aos="zoom-in">
      <Marquee>
        <Card imageSrc={org1} text="VERMICOMPOSTING" />
        <Card imageSrc={org2} text="COMPOSTING" />
        <Card imageSrc={org3} text="FOOD WASTE REDUCTION" />
        <Card imageSrc={org4} text="VERMICOMPOSTING" />
        <Card imageSrc={org5} text="COMPOSTING" />
        <Card imageSrc={org6} text="FOOD WASTE REDUCTION" />
      </Marquee>
    </div>
  );
};

export default CardOrg;

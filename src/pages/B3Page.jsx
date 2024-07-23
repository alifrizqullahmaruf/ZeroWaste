// import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import DosAndDontsB3 from "../components/DosAndDontsInOrg"
import WasteManagementB3 from "../components/WasteManagementB3"
import CardB3 from "../components/CardB3"
import HeroB3 from "../components/HeroB3"

const B3Page = () => {
  return (
    <div>
      <Navbar />
      <HeroB3 />
      <DosAndDontsB3 />
      <WasteManagementB3 />
      <CardB3 />
      <Footer />
    </div>
  );
};

export default B3Page;

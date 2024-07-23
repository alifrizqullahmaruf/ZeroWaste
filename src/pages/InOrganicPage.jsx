// import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import DosAndDontsInOrg from "../components/DosAndDontsInOrg"
import WasteManagementInOrg from "../components/WasteManagementInOrg"
import CardInOrg from "../components/CardInOrg"
import HeroInOrg from "../components/HeroInOrg"

const InOrganicPage = () => {
  return (
    <div>
      <Navbar />
      <HeroInOrg />
      <DosAndDontsInOrg />
      <WasteManagementInOrg />
      <CardInOrg />
      <Footer />
    </div>
  );
};

export default InOrganicPage;

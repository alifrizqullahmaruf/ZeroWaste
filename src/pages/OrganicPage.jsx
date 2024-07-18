// import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroOrg from "../components/HeroOrg"
import DosAndDontsOrg from "../components/DosAndDontsOrg"
import WasteManagementOrg from "../components/WasteManagementOrg"
import CardOrg from "../components/CardOrg"

const OrganicPage = () => {
  return (
    <>
        <Navbar />
        <HeroOrg />
        <DosAndDontsOrg />
        <WasteManagementOrg />
        <CardOrg />
        <Footer />
    </>
  )
}

export default OrganicPage
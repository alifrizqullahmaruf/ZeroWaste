import React from 'react';
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='py-10 bg-[#132322] text-white'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start max-w-[1240px] px-4 md:px-0'>
        {/* Logo and Description */}
        <div className='w-full mb-8 md:w-1/4 md:mb-0'>
          <h2 className='mb-4 font-extrabold' style={{ fontFamily: 'Montserrat', fontSize: '36px', fontWeight: '800', lineHeight: 'normal' }}>
            Zero<span className='text-[#BFDED6]'>Waste</span>
          </h2>
          <p style={{ fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '700', lineHeight: '24px', width: '100%' }}>
            Make a difference, start at home.
          </p>
        </div>
        {/* Category */}
        <div className='w-full mb-8 md:w-1/4 md:mb-0'>
          <h3 className='mb-4 font-extrabold' style={{ fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '800', lineHeight: 'normal' }}>
            Category
          </h3>
          <ul>
            <li className='mb-2' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>
              Organic Waste
            </li>
            <li className='mb-2' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>
              Inorganic Waste
            </li>
            <li style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>
              B3 Waste
            </li>
          </ul>
        </div>
        {/* About */}
        <div className='w-full mb-8 md:w-1/4 md:mb-0'>
          <h3 className='mb-4 font-extrabold' style={{ fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '800', lineHeight: 'normal' }}>
            About
          </h3>
          <ul>
            <li className='mb-2' style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>
              Our Values
            </li>
            <li style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>
              Our Mission
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className='w-full mb-8 md:w-1/4 md:mb-0'>
          <h3 className='mb-4 font-extrabold' style={{ fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '800', lineHeight: 'normal' }}>
            Contact
          </h3>
          <p style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>
            zerowaste@example.com
          </p>
        </div>
        {/* Follow Us */}
        <div className='w-full md:w-1/4'>
          <h3 className='mb-4 font-extrabold' style={{ fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '800', lineHeight: 'normal' }}>
            Follow Us
          </h3>
          <div className='flex space-x-4'>
            <a href='#' className=''><FaInstagram size={24} /></a>
            <a href='#' className=''><FaYoutube size={24} /></a>
            <a href='#' className=''><FaTwitter size={24} /></a>
            <a href='#' className=''><FaFacebook size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

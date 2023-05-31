import React from 'react'
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import { TfiTwitter, TfiApple } from 'react-icons/tfi';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

function Footer() {
  return (
    <div>
      {/* footer section  */}

      <div className='footerContainer'>
        <div className='footLogo'>
          {/* <h1>Himma </h1> */}
          <div className='privacyMedia'>
            <div className='privacy'>
              <li>Privacy Policy</li>
              <Link to={'/about'} className='myLink'>
                <li>Terms</li>
              </Link>
              <Link to={'/contact'} className='myLink'>
                <li>Contact</li>
              </Link>
            </div>
          </div>
        </div>
        <div className='siteMap'>
          <h1>SITE MAP</h1>
          <li>Home</li>
          <li>News</li>
          <li>Himma-Tv</li>
          <li>Shows</li>
          <li>Events</li>
          <li>Presenters</li>
        </div>
        <div className='otherStation'>
          <h1>ADDRESS</h1>
          <li>NMA Estate Abuja</li>
          <li>+234 81 515 3780</li>
          <li>+234 81 515 3780</li>
        </div>
        <div className='connectWithUs'>
          <h1>Connect With Us</h1>

          <div className='socialMedia'>
            <li>
              <FaInstagram className='nav-media-icons' size={'25px'} />
            </li>
            <li>
              <TfiTwitter className='nav-media-icons' size={'25px'} />
            </li>
            <li>
              <FaFacebookF className='nav-media-icons' size={'25px'} />
            </li>
            <li>
              <FaWhatsapp className='nav-media-icons' size={'25px'} />
            </li>
            <li>
              <FaYoutube className='nav-media-icons' size={'25px'} />
            </li>
          </div>

          <div className='siteApp'>
            <li>
              <IoLogoGooglePlaystore size={'25px'} />
            </li>
            <li>
              <TfiApple size={'25px'} />
            </li>
            <li></li>
          </div>
        </div>
      </div>

      <div className='copyRight'>
        <p>2023 &copy; All rights reserved. Eletech & Sunny</p>
        <p>Designed by Eletech & Sunny</p>
      </div>
    </div>
  );
}

export default Footer
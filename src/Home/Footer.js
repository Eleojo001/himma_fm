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
          <h1>Himma Policy</h1>
          <div className='privacyMedia'>
            <div className='privacy'>
              <li>Privacy Policy</li>
              <Link to={'#'} className='myLink'>
                <li>Terms</li>
              </Link>
              <Link to={'#'} className='myLink'>
                <li>Contact</li>
              </Link>
            </div>
          </div>
        </div>
        <div className='siteMap'>
          <h1>SITE MAP</h1>
          <li>
            <Link to={'/'} className='myLink'>
              Home
            </Link>
          </li>
          <li>
            <Link to={'/news'} className='myLink'>
              News
            </Link>
          </li>
          <li>
            <Link to={'/Himma-Tv'} className='myLink'>
              Himma TV
            </Link>
          </li>
          <li>
            <Link to={'/shows'} className='myLink'>
              Shows/Programmes
            </Link>
          </li>
          {/* <li>
            <Link to={'/'} className='myLink'>
              Events
            </Link>
          </li> */}
          <li>
            <Link to={'/presenters'} className='myLink'>
              Presenters
            </Link>
          </li>
          <li>
            <Link to={'/podcast'} className='myLink'>
              Podcast
            </Link>
          </li>
        </div>
        <div className='otherStation'>
          <h1>ADDRESS</h1>
          <li>
            IKRA Multimedia Limited Km 25 Agalawa-Kafin Agur Along Madobi Road -
            Kano State
          </li>
          {/* <li>+234 81 515 3780</li> */}
          {/* <li>+234 81 515 3780</li> */}
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
        <p>2023 &copy; All rights reserved.</p>
        <p>Designed by Jomiahcreations Limited.</p>
      </div>
    </div>
  );
}

export default Footer
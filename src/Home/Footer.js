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
          <h1 className='headersFont' >Himma Policy</h1>
          <div className='privacyMedia'>
            <div className='privacy'>
              <li>Privacy Policy</li>
              <Link to={'#'} className='myLink'>
                <li>Terms</li>
              </Link>
              <Link to={'/contact'} className='myLink'>
                <li>Contact</li>
              </Link>
            </div>
          </div>
        </div>
        <div className='siteMap'>
          <h1 className='headersFont' >Site Map</h1>
          <li>
            <Link to={'/'} className='myLink'>
              Home
            </Link>
          </li>
          <li>
            <Link to={'/'} className='myLink'>
              About Us
            </Link>
          </li>
          <li>
            <Link to={'/'} className='myLink'>
              Radio
            </Link>
          </li>
          <li>
            <Link to={'/Himma-tv'} className='myLink'>
              TV
            </Link>
          </li>
          <li>
            <Link to={'/news'} className='myLink'>
              News
            </Link>
          </li>
          <li>
            <Link to={'/shows'} className='myLink'>
              Programmes
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
          <h1 className='headersFont' >Address</h1>
          <li>
            IKRA Multimedia Limited Km 25 <br /> Agalawa-Kafin Agur <br /> Along
            Madobi Road - Kano State
          </li>
          {/* <li>+234 81 515 3780</li> */}
          {/* <li>+234 81 515 3780</li> */}
        </div>
        <div className='connectWithUs'>
          <h1 className='headersFont' >Connect with us</h1>

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
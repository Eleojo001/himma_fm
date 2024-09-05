import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../App';

function Nav() {
  // States for managing the navigation toggling
  const [active, setActive] = useState('nav_men');
  const [toggleIcon, setToggleIcon] = useState('nav_toggler');

  // Toggles the navigation bar open and close
  const navToggler = () => {
    active === 'nav_men' ? setActive('nav_men nav_active') : setActive('nav_men');

    // Toggles the hamburger icon animation
    toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler');
  };

  // Inline styles for navigation container and logo
  const navContainer = {
    width: '100%',
    boxSizing: 'border-box',
  };

  const logoStyle = {
    width: '150px',
    height: '100px',
    padding: '15px 6px',
  };

  return (
    <div>
      {/* Main navigation */}
      <nav className='nav' style={navContainer}>
        <Link to={'/'} className='nav_brand'>
          <img
            src='/himmarebrandlogo.jpg'
            alt='Brand Logo'
            style={logoStyle}
            className='logostyle'
          />
        </Link>

        {/* Static navigation links */}
        <ul className='nav_menu'>
          <li className='nav_item'>
            <Link className='nav_link' to={'/about'}>
              About Us
            </Link>
          </li>
          <li className='nav_item'>
            <Link className='nav_link' to={'/radio'}>
              Radio
            </Link>
          </li>
          <li className='nav_item'>
            <Link className='nav_link' to={'/Himma-tv'}>
              TV
            </Link>
          </li>
          <li className='nav_item'>
            <Link className='nav_link' to={'/news'}>
              News
            </Link>
          </li>
          <li className='nav_item'>
            <Link className='nav_link' to={'/programmes'}>
              Programmes
            </Link>
          </li>
          <li className='nav_item'>
            <Link className='nav_link' to={'/presenters'}>
              Presenters
            </Link>
          </li>
          <li className='nav_item'>
            <Link className='nav_link' to={'/podcast'}>
              Podcast
            </Link>
          </li>
        </ul>

        {/* Toggler icon for mobile view */}
        <div className={toggleIcon} onClick={navToggler}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
      </nav>

      {/* Mobile navigation menu */}
      <div className={active}>
        <Link className='nav_link' to={'/'}>
          <li className='nav_item'>Home</li>
        </Link>
        <li className='nav_item'>
          <Link className='nav_link' to={'/about'}>
            About Us
          </Link>
        </li>
        <li className='nav_item'>
          <Link className='nav_link' to={'/radio'}>
            Radio
          </Link>
        </li>
        <Link className='nav_link' to={'/Himma-tv'}>
          <li className='nav_item'>TV</li>
        </Link>
        <Link className='nav_link' to={'/news'}>
          <li className='nav_item'>News</li>
        </Link>
        <Link className='nav_link' to={'/programmes'}>
          <li className='nav_item'>Programmes</li>
        </Link>
        <Link className='nav_link' to={'/presenters'}>
          <li className='nav_item'>Presenters</li>
        </Link>
        <Link className='nav_link' to={'/podcast'}>
          <li className='nav_item'>Podcast</li>
        </Link>
      </div>
    </div>
  );
}

export default Nav;

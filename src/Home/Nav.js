import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import { TfiTwitter } from 'react-icons/tfi';
import logo from './images/himmarebrandlogo.jpeg';
import { DataContext } from '../App';

function Nav() {
  const navCat = useContext(DataContext);

  const [category, setCategory] = useState([]);
  const navArray = [
    {id:1,title:'News'},{id:2, title:'Telvision',},{id:3, title:'shows'}]
  const [navBar, setNavBar] = useState(navArray)
  const url = 'http://localhost:5003/category';
  // useEffect(() => {
    // console.log(navCat.Navigation)
    // fetch(url)
    //   .then((resp) => resp.json())
    //   .then((resp) => {
    //     // console.log(resp);
    //     setCategory(resp);
    //   });
  // }, []);
// useEffect()
const array  = navCat.Navigation
useEffect( () => {
  const findItemById = (arr, itemId) => {
    return arr.find((item) => item.title === itemId);
  };
},[])

  const [active, setActive] = useState('nav_men');
  const [toggleIcon, setToggleIcon] = useState('nav_toggler');
  const [modalActive, setModalActive] = useState("modal");
  const [modalToggle, setModalToggle] = useState('modalToggle')

  const navToggler =() =>{
    active === 'nav_men' ? setActive('nav_men nav_active') : setActive('nav_men');

    // Toggler icon 

    toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler')
  }
  const navContainer = {
    width:'100%',
    boxSizing:'BorderBox',
  }
  const logoStyle ={
    width:'150px',
    height:'100px',
    padding:'15px 6px'
  }

  return (
    <div>
      {/* main navigation */}

      <nav className='nav' style={navContainer}>
        <Link to={'/'} className='nav_brand'>
          <img src={logo} alt='' style={logoStyle} className='logostyle' />
        </Link>
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
        <div className={toggleIcon} onClick={navToggler}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
      </nav>
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

import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import { TfiTwitter } from 'react-icons/tfi';
import logo from './images/HimmaLogo-3.png';
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
  console.log(array)
  const findItemById = (arr, itemId) => {
    return arr.find((item) => item.title === itemId);
  };
console.log(findItemById(array, 'News'));
},[])

  const [active, setActive] = useState('nav_men');
  const [toggleIcon, setToggleIcon] = useState('nav_toggler');

  const navToggler =() =>{
    active === 'nav_men' ? setActive('nav_men nav_active') : setActive('nav_men');

    // Toggler icon 

    toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler')
  }

  const loadingStyle = {
    margin: '0, auto',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  };
  const btnStyle = {
    border:'none',
    backgroundColor:'none'
  }
  const navContainer = {
    width:'100%',
    boxSizing:'BorderBox',
  }
  const logoStyle ={
    width:'90px',
    height:'90px',
    padding:'10px'
  }

  return (
    <div>
      {/* main navigation */}

      <nav className='nav' style={navContainer}>
        <Link to={'/'} className='nav_brand'>
          <img src={logo} alt='' style={logoStyle} />
        </Link>
        <ul className='nav_menu'>
          <li className='nav_item'>
            <Link className='nav_link' to={'/'}>
              Home
            </Link>
          </li>
          <li className='nav_item'>
            <Link className='nav_link' to={'/news'}>
              News
            </Link>
          </li>
          <li className='nav_item'>
            <Link
              className='nav_link'
              to={'https://www.youtube.com/@HimmaTV261'}
            >
              Himma TV
            </Link>
          </li>
          <li className='nav_item'>
            <Link className='nav_link' to={'/shows'}>
              Shows
            </Link>
          </li>
          <li className='nav_item'>
            <Link className='nav_link' to={'/presenters'}>
              Presenters
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
        <li className='nav_item'>
          <Link className='nav_link' to={'/'}>
            Home
          </Link>
        </li>
        <li className='nav_item'>
          <Link className='nav_link' to={'/news'}>
            News
          </Link>
        </li>
        <li className='nav_item'>
          <Link className='nav_link' to={'https://www.youtube.com/@HimmaTV261'}>
            Himma TV
          </Link>
        </li>
        <li className='nav_item'>
          <Link className='nav_link' to={'/shows'}>
            Shows/Programs
          </Link>
        </li>
        <li className='nav_item'>
          <Link className='nav_link' to={'/presenters'}>
            Presenters
          </Link>
        </li>
        <li className='nav_item'>
          <Link className='nav_link' to={'/'}>
            Podcast
          </Link>
        </li>
      </div>
      {/* {array.map((item) => {
          return (
            <li className='nav_item' key={item.id}>
              <Link to={`/page/${item.title}`} className='nav_link'>
                {item.title}
              </Link>

              <a href='#News'></a>
            </li>
          );
        })} */}

      {/* <div className='main-nav'>
        <div className='logoSec'>
          <div className='logo'></div>
          <div className='logoText'>{ <p> Himma Radio </p> }</div>
        </div>
        <div className='webNav'>
          <li>
            <Link to={`/`} className='webNav'>
              Home
            </Link>
          </li>
          {navBar.map((navItem)=>{
            if(navItem)return(
              <div>
                <li key={navItem._id}>
                    <a href={`/page/${navItem.title}`} className='webNav'>
                      {navItem.title}
                    </a>
                </li>
                </div>
            )
          })}
        {category.map((cat) => {
          if (cat)
            return (
              <div>
                <li key={cat._id}>
                    <a href={`/page/${cat.title}`} className='webNav'>
                      {cat.title}
                    </a>
                </li>
                <li>
                    <Link to={`/page`} className='webNav'>
                      Himma-Tv
                    </Link>
                  </li>
                  <li>
                    <Link to={`/page`} className='webNav'>
                      Shows
                    </Link>
                  </li>
                  <li>
                    <Link to={`/page`} className='webNav'>
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link to={`/presenters`} className='webNav'>
                      Presenters
                    </Link>
                  </li>
                  <li>
                    <Link to={'/about'} className='webNav'>
                      <li>About</li>
                    </Link>
                  </li>
              </div>
            );
            else {
              <div style={loadingStyle}>
              <p>Loading information please wait....</p>
            </div>;
          }
        })}
        </div>
         <div className='media'>
          <div className='media-icons'>
            <li>
              <FaInstagram className='nav-media-icons' size={'20px'} />
            </li>
            <li>
              <TfiTwitter className='nav-media-icons' size={'20px'} />
            </li>
            <li>
              <FaFacebookF className='nav-media-icons' size={'20px'} />
            </li>
            <li>
              <FaWhatsapp className='nav-media-icons' size={'20px'} />
            </li>
            <li>
              <FaYoutube className='nav-media-icons' size={'20px'} />
            </li>
          </div>
        </div> 
         <div className='liveOnAir'>
          <div className='liveonAirImage'></div>
          <div className='liveonairTittle'>
            <li>Live on Air</li>
            <li className='show-time'>Midday Show</li>
            <li>Tuesday 11:00am to 4:00pm</li>
          </div>
        </div> 
      </div> */}
    </div>
  );
}

export default Nav;

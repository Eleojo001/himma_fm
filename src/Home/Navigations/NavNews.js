import React, { useState, useEffect, useContext } from 'react';
import Card from '../components/Card';
import { Link, useParams } from 'react-router-dom';
import '../page/Page.css';
import { DataContext } from '../../App';
import Nav from '../Nav';
import viewmore from '../images/viewMore_icon.png';

function NavNews() {
  const category = useContext(DataContext)
  const [data,setData] = useState([])
 const [visible, setVisible] = useState(4);
  useEffect(()=>{
    let feed = category.News
    console.log(feed);
    setData(feed)
    
  },[])
  const showMoreItems = () => {
  console.log('hi');
    setVisible((previousValue) => previousValue + 4);
  };
   const headerColor = {
     color: 'black',
     overFlowY: 'hidden',
   };
   const blackColor = {
    color:'black'
   }
 const imageStyle = {
   width: '100%',
   height: '100%',
   borderRadius: '10px',
   objectFit: 'cover',
 };
 const imageStyleMobile = {
   width: '100%',
   height: '200px',
   borderRadius: '10px',
   objectFit: 'cover',
 };
 const imageStyleBtn = {
   width: '100%',
   height: '100%',
   borderRadius: '10px',
   objectFit: 'contain',
 };
       const mybg = {
         backgroundColor: 'white',
         color: 'black',
       };
  return (
    <div style={mybg}>
      <Nav />
      <div className='presenterPage-container'>
        <h1 className='headersFont'>News</h1>
        <div className='gridcontainer'>
          <div className='newsGrid'>
            {data.slice(0, visible).map((item) => {
              return (
                <div>
                  <Link
                    to={`/news/${item.id}`}
                    key={item.id}
                    style={blackColor}
                  >
                    <div className='newsCardImage'>
                      <img src={item.image} alt='' style={imageStyle} />
                    </div>
                    <div className='newsCardHeader'>
                      <h3 style={headerColor} className='textLimit'>
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className='moreBtn'>
          <button className='viewmore btn' onClick={showMoreItems}>
            <div style={{ width: '30px', height: '30px' }}>
              <img src={viewmore} alt='' style={imageStyleBtn} />
            </div>
            <span>View More</span>
          </button>
        </div>
      </div>

      <div className='page-container-mobile'>
        <h1 className='headersFont'>News</h1>
        <div className='gridcontainer'>
          <div className='newsGrid-shows'>
            {data.slice(0, visible).map((item) => {
              return (
                <div className='card-mobile'>
                  <Link to={`/news/${item.id}`} key={item.id}>
                    <div className='newsCardImage_mobile'>
                      <img src={item.image} alt='' style={imageStyleMobile} />
                    </div>
                    <div className='profileInfo'>
                      <h3 style={headerColor} className='textLimit'>
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className='NewmoreBtn'>
          <button className='viewmore' onClick={showMoreItems}>
            <span style={{ marginRight: '10px' }}>
              <img src={viewmore} alt='' className='btnicon' />
            </span>
            <span>View More</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavNews;

import React, { useState, useEffect, useContext } from 'react';
import '../page/Page.css';
import { DataContext } from '../../App';
import Nav from '../Nav';

function NavPresenters() {
    const category = useContext(DataContext);
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(6);
    useEffect(() => {
      let feed = category.Presenter;
      setData(feed);
    }, []);
    const showMoreItems = () => {
      setVisible((previousValue) => previousValue + 3);
    };
    const headerColor = {
      color: 'white',
      overFlowY: 'hidden',
    };
    const imageStyle = {
      width: '100%',
      height: '100%',
      borderRadius: '10px',
    };
     const imageStyleMobile = {
       width: '100%',
       height: '350px',
       borderRadius: '10px',
       objectFit: 'cover',
     };
      const imageStyleBtn = {
   width: '100%',
   height: '100%',
   borderRadius: '10px',
   objectFit: 'contain',
 };
    const round={
      width:'200px',
      height:'200px',
      borderRadius:'50%',
      backgroundColor:'white'
    }
    const spacer ={
      marginBottom:'40px'
    }
    const mybg = {
       backgroundColor: 'white',
       color: 'black',
       };
  return (
    <div>
      <Nav />
      <div className='presenterPage-container'>
        <h1 className='Presenter-header headersFont'>Presenters</h1>
        <div className='presenterProfile'>
          {data.slice(0, visible).map((items) => {
            return (
              <div className='Profile'>
                <div className='p-image'>
                  <div className='profileImage profilestyle'>
                    <img
                      src={items.image}
                      className='profileImage profilestyle'
                      alt=''
                    />
                  </div>
                </div>
                <div className='profileInfo'>
                  <h3>{items.name}</h3>
                  <span>{items.bio}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className='moreBtn'>
          <button className='viewmore btn' onClick={showMoreItems}>
            <div style={{ width: '30px', height: '30px' }}>
              <img src='/viewMore_icon.png' alt='' style={imageStyleBtn} />
            </div>
            <span className='v-more-btn'>View More</span>
          </button>
        </div>
      </div>
      <div className='page-container-mobile'>
        <h1 className='Presenter-header headersFont'>Presenters</h1>
        <div className='gridcontainer' style={spacer}>
          <div className='newsGrid-shows'>
            {data.slice(0, visible).map((item) => {
              return (
                <div className='card-mobile'>
                  <div className='newsCardImage_mobile'>
                    {/* <div style={round}></div> */}
                    <img src={item.image} alt='' style={imageStyleMobile} />
                  </div>
                  <div className='profileInfo'>
                    <h3 style={headerColor} className='textLimit'>
                      {item.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='NewmoreBtn'>
          <button className='viewmore' onClick={showMoreItems}>
            <span style={{ marginRight: '10px' }}>
              <img src='viewMore_icon.png' alt='' className='btnicon' />
            </span>
            <span style={{ color: 'white' }}>View More</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavPresenters;

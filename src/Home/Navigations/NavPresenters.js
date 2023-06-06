import React, { useState, useEffect, useContext } from 'react';
import Card from '../components/Card';
import { Link, useParams } from 'react-router-dom';
import '../page/Page.css';
import { DataContext } from '../../App';
import Nav from '../Nav';

function NavPresenters() {
    const category = useContext(DataContext);
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(4);
    useEffect(() => {
      let feed = category.Presenter;
      console.log(feed);
      setData(feed);
    }, []);
    const showMoreItems = () => {
      console.log('hi');
      setVisible((previousValue) => previousValue + 4);
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
    const round={
      width:'200px',
      height:'200px',
      borderRadius:'50%',
      backgroundColor:'white'
    }
    const spacer ={
      marginBottom:'40px'
    }
  return (
    <div>
      <Nav />
      <div className='presenterPage-container'>
        <h1 className='Presenter-header headersFont'>PRESENTERS</h1>
        <div className='presenterProfile'>
          {data.slice(0, visible).map((items) => {
            return (
              <div className='Profile'>
                <div className='p-image'>
                  <div className='profileImage profilestyle'>
                    {/* <img
                      src={items.image}
                      className='profileImage profilestyle'
                      alt=''
                    /> */}
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
      </div>
      <div className='page-container-mobile'>
        <div className='gridcontainer' style={spacer}>
          <div className='newsGrid-shows'>
            {data.slice(0, visible).map((item) => {
              return (
                <div className='card-mobile'>
                  <div className='newsCardImage_mobile'>
                    <div style={round}></div>
                    {/* <img src={item.image} alt='' style={imageStyle} /> */}
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
        <div className='moreBtn'>
          <button className='viewmore' onClick={showMoreItems}>
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavPresenters;

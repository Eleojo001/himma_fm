import React, { useState, useEffect, useContext } from 'react';
import Card from '../components/Card';
import { Link, useParams } from 'react-router-dom';
import '../page/Page.css';
import { DataContext } from '../../App';
import Nav from '../Nav';

function NavShows() {
  const category = useContext(DataContext);
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(4);
    useEffect(() => {
      let feed = category.Shows;
      console.log(feed);
      setData(feed);
    }, []);
    const showMoreItems = () => {
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
        const spacer = {
          paddingBottom: '40px',
        };
  return (
    <div style={spacer}>
      <Nav />
      <div className='presenterPage-container'>
        <h1 className='Presenter-header'>Shows</h1>
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
                  <h3>{items.title}</h3>
                  <span>{items.time}</span>,{' '}
                  <span>{items.day}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='page-container-mobile'>
        <div className='gridcontainer'>
          <div className='newsGrid'>
            {data.slice(0, visible).map((item) => {
              return (
                <div>
                  <div className='newsCardImage_mobile'>
                    <img src={item.image} alt='' style={imageStyle} />
                  </div>
                  <div className='profileInfo'>
                    <h3>{item.title}</h3>
                    <span>{item.time}</span>, <span>{item.day}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className='moreBtn'>
          <button className='viewmore' onClick={showMoreItems}>
            View More
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default NavShows;

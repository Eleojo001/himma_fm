import React, { useState, useEffect, useContext } from 'react';
import Card from '../components/Card';
import { Link, useParams } from 'react-router-dom';
import '../page/Page.css';
import { DataContext } from '../../App';
import Nav from '../Nav';

function NavTv() {
      const category = useContext(DataContext);
      const [data, setData] = useState([]);
      const [visible, setVisible] = useState(4);
      useEffect(() => {
        let feed = category.Television;
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
        textAlign:'center'
      };
      const imageStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
      };
      const card = {
        width: 'auto',
        height: '300px',
        borderRadius: '10px',
      };
  return (
    <div>
      <div>
        <Nav />
        <div className='presenterPage-container'>
          <h1>Television</h1>
          <div className='gridcontainer'>
            <div className='newsGrid'>
              {data.slice(0, visible).map((item) => {
                return (
                  <div>
                    {/* <div className='frameImage'></div> */}
                    <Link to={`/Himma-Tv/${item.id}`} key={item.id}>
                      <div className='newsCardImage'>
                        <iframe
                          width='100%'
                          height='100%'
                          src='https://www.youtube.com/embed/WOgUgbui-sk'
                          title='YouTube video player'
                          frameborder='0'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                          allowfullscreen
                        ></iframe>
                        {/* <img src={item.image} alt='' style={imageStyle} /> */}
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
            <button className='viewmore' onClick={showMoreItems}>
              View More
            </button>
          </div>
        </div>
        <div className='page-container-mobile'>
          <h1>Television</h1>
          <div className='gridcontainer'>
            <div className='newsGrid-shows'>
              {data.slice(0, visible).map((item) => {
                return (
                  <div className='tv-card-mobile' >
                    {/* <div className='frameImage'></div> */}
                    <Link to={`/Himma-Tv/${item.id}`} key={item.id}>
                      <div className='newsCardImage_mobile' style={card}>
                        <iframe
                          width='100%'
                          height='100%'
                          src='https://www.youtube.com/embed/WOgUgbui-sk'
                          title='YouTube video player'
                          frameborder='0'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                          allowfullscreen
                        ></iframe>
                        {/* <img src={item.image} alt='' style={imageStyle} /> */}
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
          <div className='moreBtn'>
            <button className='viewmore' onClick={showMoreItems}>
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavTv;

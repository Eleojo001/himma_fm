import React, { useState, useEffect, useContext } from 'react';
import Card from '../components/Card';
import { Link, useParams } from 'react-router-dom';
import '../page/Page.css';
import { DataContext } from '../../App';
import Nav from '../Nav';
import livetv from '../images/Live_tv_n.png'
import circler from '../images/Red_circle.gif';
import viewmore from '../images/viewMore_icon.png';

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
        objectFit:'contain'
      };
       const imageStyleBtn = {
         width: '100%',
         height: '100%',
         borderRadius: '10px',
         objectFit: 'contain',
       };
      const card = {
        width: '100%',
        height: '300px',
        borderRadius: '10px',
      };
      const handleClick = () =>{
        window.open(
          'https://www.youtube.com/channel/UC4aJDqk_76_QVGAaM_MbvYw',
          '_blank'
        );
      }
  return (
    <div>
      <div>
        <Nav />
        <div className='watchBanner watch'>
          <div className='homeBannerSection1 watch'>
            <a href='#'
              className='myLink listner'
              onClick={handleClick}
            >
              <span className='livetv'>
                <img src={livetv} alt='' style={imageStyle} />
                <img src={circler} alt="" className='circular' />
              </span>
            </a>
          </div>
        </div>
        <div className='presenterPage-container television'>
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
            <button className='viewmore btn' onClick={showMoreItems}>
              <div style={{ width: '30px', height: '30px', color: 'black' }}>
                <img src={viewmore} alt='' style={imageStyleBtn} />
              </div>
              <span style={{ color: 'white' }}>View More</span>
            </button>
          </div>
        </div>
        <div className='page-container-mobile'>
          <div className='gridcontainer'>
            <div className='newsGrid-shows'>
              {data.slice(0, visible).map((item) => {
                return (
                  <div className='tv-card-mobile'>
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
            <button className='viewmore btn' onClick={showMoreItems}>
              <span
                style={{ width: '30px', height: '30px', marginRight: '10px' }}
              >
                <img src={viewmore} alt='' style={imageStyleBtn} />
              </span>
              <span style={{ color: 'white' }}>View More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavTv;

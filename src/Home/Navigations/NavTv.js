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
      };
      const imageStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
      };
  return (
    <div>
      <div>
        <Nav />
        <div className='page-container'>
          <div className='gridcontainer'>
            <div className='newsGrid'>
              {data.slice(0, visible).map((item) => {
                return (
                  <div>
                    <Link to={`/Himma-Tv/${item.id}`} key={item.id}>
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

import React, { useState, useContext, useEffect } from 'react';
import { DataContext } from '../App';

function Shows() {
  const category = useContext(DataContext);
  const [shows, setShows] = useState([]);


  useEffect(() => {
    setShows(category.Shows);
  }, []);

    const imageStyle = {
      width: '100%',
      height: '100%',
      borderRadius: '10px',
    };
  return (
    <div>
      {/* Shows section  */}

      <div className='showsContainer'>
        <div className='showHeader'>
          <h1 className=''>SHOWS</h1>
        </div>
        <div className='showsSlider'>
          <div className='sliderCards'>
            {shows.map((item) => {
              return (
                <div className='sliderCard' key={item.id}>
                  <div className='sliderCardImg'>
                    <img src={item.image} style={imageStyle} alt="" />
                  </div>
                  <li className='show-time textLimit'>{item.title} </li>
                  <li className='texts'>{item.time}</li>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shows;

import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation between routes

function HomeBanner() {
  // Inline styling for the image, defining size and margin
  const imageStyle = {
    width: '40px',
    height: '40px',
    marginTop: '5px',
  };

  return (
    <div>
      {/* Main container for the home banner */}
      <div className='homeBanner' style={{background:'black'}}>
        <div className='homeBannerEvents'>
          {/* Section 1 of the banner with a black background */}
          <div
            className='homeBannerSection1'
            style={{ backgroundColor: 'black' }}
          >
            {/* Link to the /radio page, representing a live listen feature */}
            <Link className='myLink listner' to={'/radio'}>
              {/* Icon for live listening, represented by a GIF */}
              <span className='listenIcon'>
                <img src='Red_circle.gif' alt='Live' style={imageStyle} />
              </span>
              {/* Text label indicating live listening, styled in red */}
              <span style={{ color: 'red', fontSize: '18px' }}>
                Listen Live
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;

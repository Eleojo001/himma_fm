import React, { useState, useContext, useEffect } from 'react';

function Shows() {
  const url = 'https://himmatv.onrender.com/posts/';
  // State to store the list of shows
  const [shows, setShows] = useState([]);
  // Fetching shows data from the context when the component mounts
  useEffect(() => {
    // Fetch shows data from the API
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Filter the news items by category
        const filteredData = data.filter(
          (item) => item.category_id && item.category_id.title === 'Shows'
        );
        setShows(filteredData); // Sets the shows state with the filtered data
      })
      .catch((error) => console.error('Error fetching news data:', error));
  }, []); // Empty dependency array means this effect runs only once after the initial render

  // Styling for show images on larger screens
  const imageStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '10px', // Rounded corners for the images
    objectFit: 'cover',   // Ensures the image covers the element without distortion
  };

  // Styling for show images on mobile devices
  const imageStylemobile = {
    width: '200px',
    height: '200px',
    borderRadius: '10px', // Consistent rounded corners for mobile images
    objectFit: 'cover',   // Keeps the image aspect ratio and fills the space
  };

  return (
    <div>
      {/* Shows Section */}
      <div className='showsContainer'>
        {/* Header for the Shows Section */}
        <div className='showHeader'>
          <h1 className='headersFont'>SHOWS</h1>
        </div>

        {/* Shows Slider for larger screens */}
        <div className='showsSlider'>
          <div className='sliderCards'>
            {/* Mapping over the shows data to display each show */}
            {shows.map((item) => {
              return (
                <div className='sliderCard' key={item.id}>
                  {/* Image Section for Show */}
                  <div className='sliderCardImg'>
                    <img src={item.avatar} style={imageStyle} alt='' />
                  </div>

                  {/* Text Section for Show */}
                  <li className='textLimit'>
                    <h3>
                      {item.title}  </h3>
                  </li>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Shows Section for Mobile Devices */}
      <div className='showsContainer-mobile'>
        {/* Header for the Mobile Shows Section */}
        <div className='showHeader'>
          <h1 className='headersFont'>SHOWS</h1>
        </div>

        {/* Shows Slider for mobile screens */}
        <div className='showsSlider'>
          <div className='sliderCards'>
            {/* Mapping over the shows data to display each show on mobile */}
            {shows.map((item) => {
              return (
                <div className='sliderCard' key={item.id}>
                  {/* Image Section for Show on Mobile */}
                  <div className='sliderCardImg'>
                    <img src={item.avatar} style={imageStylemobile} alt='' />
                  </div>

                  {/* Text Section for Show on Mobile */}
                  <li className='textLimit'>
                    <h3>
                      {item.title} {/* Show title */}
                    </h3>
                  </li>
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

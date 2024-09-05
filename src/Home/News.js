import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

function News() {
  const url = 'https://himmatv.onrender.com/posts/';

  // State to store the news items fetched from the API
  const [news, setNews] = useState([]);

  // State to control the number of visible news items, initially set to 4
  const [visible, setVisible] = useState(4);

  // Fetches the news data from the API when the component mounts
  useEffect(() => {
    // Fetch news data from the API
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Filter the news items by category
        const filteredData = data.filter(
          (item) => item.category_id && item.category_id.title === 'News'
        );
        setNews(filteredData); // Sets the news state with the filtered data
      })
      .catch((error) => console.error('Error fetching news data:', error));
  }, []); // Empty dependency array means this effect runs only once after the initial render

  // Function to show more news items by increasing the `visible` state by 4
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  // Styling for the news header text
  const headerColor = {
    color: 'black',
  };

  // Styling for the news images
  const imageStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    objectFit: 'cover', // Ensures the image covers the entire space without distortion
  };

  // Styling for the button icon images
  const imageStyleBtn = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    objectFit: 'contain', // Keeps the entire image visible within the boundaries
  };

  // Styling for the news cards
  const card = {
    width: 'auto',
    height: '300px',
    borderRadius: '10px',
  };

  // Styling for the links to remove default underline
  const linkStyle = {
    textDecoration: 'none',
  };

  return (
    <div>
      {/* NEWS SECTION */}
      <div className='gencontainer'>
        {/* Header for the news section */}
        <div className='newsHeader'>
          <div className='newsLogo'>
            <h1 className='Sansita headersFont'>NEWS</h1>
          </div>
        </div>

        {/* Container for the news items, laid out in a grid */}
        <div className='gridcontainer'>
          <div className='newsGrid'>
            {/* Mapping over the news state to display each news item */}
            {news.slice(0, visible).map((sec, index) => (
              <div key={sec._id || index}> {/* Ensure the key is unique */}
                {/* Link to the news details page using dynamic route */}
                <Link to={`/news/${sec._id}`} className='newLink' style={linkStyle}>
                  <div className='newsCard'>
                    {/* Image section of the news card */}
                    <div className='newsCardImage'>
                      <img src={sec.avatar} alt='' style={imageStyle} />
                    </div>
                    {/* Title section of the news card */}
                    <div className='newsCardHeader'>
                      <h3 style={headerColor} className='textLimit'>
                        {sec.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Button to view more items, triggering showMoreItems on click */}
        <div className='moreBtn'>
          <button className='viewmore btn' onClick={showMoreItems}>
            {/* Icon for the button */}
            <span
              style={{ width: '30px', height: '30px', marginRight: '10px' }}
            >
              <img src='viewMore_icon.png' alt='' style={imageStyleBtn} />
            </span>
            {/* Text label for the button */}
            <span className='btnName'>View More</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;

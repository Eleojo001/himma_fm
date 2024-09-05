import React, { useState, useEffect } from 'react'; // Import necessary React hooks
import { Link, useParams } from 'react-router-dom'; // Import components from React Router
import { BsDot } from 'react-icons/bs'; // Import a dot icon from react-icons

function NewsDetails() {
  const { id } = useParams(); // Extract the 'id' parameter from the URL
  const [info, setInfo] = useState({}); // State to hold the news details

  const url = `https://himmatv.onrender.com/posts/${id}/`; // URL for fetching specific news details

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data); // Update the state with the fetched data
      })
      .catch((error) => console.error('Error fetching news details:', error));
  }, [url]); // Dependency array includes 'url'

  // Function to format date and time
  const formatDateTime = (dateTimeString) => {
    const optionsDate = { day: '2-digit', month: 'long', year: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: true };

    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString('en-GB', optionsDate); // Formats date
    const formattedTime = date.toLocaleTimeString('en-GB', optionsTime); // Formats time

    return `${formattedDate} at ${formattedTime}`;
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    objectFit: 'cover',
  };

  const mybg = {
    backgroundColor: 'white',
    color: 'black',
  };

  return (
    <div style={mybg}>
      
      <div className='detailsHeader'>
        <div>
          <h1 className='headersFont'>{info.title}</h1>
          
          <p className='banner-content author'>
            {info.author} <BsDot size={'1rem'} /> <span>{formatDateTime(info.updatedAt)}</span>
          </p>
          
          <div className='dtailsBanner'>
            <div className='imageHolder'>
              <img src={info.avatar} alt='' style={imageStyle} />
            </div>
          </div>
          
          {info.content && typeof info.content === 'string' ? (
            info.content.split('\n').map((paragraph, index) => (
              <p
                key={index}
                className='banner-content'
                style={{ fontSize: '18px', lineHeight: '1.5' }}
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p>No content available</p>
          )}
        </div>

        <Link to={-1} style={{ textDecoration: 'none' }}>
          <button className='backbtn'>
            <span style={{ width: '50px', height: '50px' }}>
              <img src='/go_back_icon.png' alt='' style={imageStyle} />
            </span>
            <span>Go back</span>
            <span style={{ width: '50px', height: '50px' }}>
              <img src='/go_back_icon.png' alt='' style={imageStyle} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NewsDetails;

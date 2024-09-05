import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';
import Nav from '../Nav';


function TvDetails() {
  const [tv, setTv] = useState([]);
  const url = 'https://himmatv.onrender.com/posts/';
  
  const { id } = useParams(); // Extract the 'id' parameter from the URL


  
  // Fetches the television data from the API when the component mounts
  useEffect(() => {
    // Fetch television data from the API
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Filter the news items by category
        const filteredData = data.filter(
          (item) => item.category_id && item.category_id.title === 'Television'
        );
        setTv(filteredData); // Sets the news state with the filtered data
      })
      .catch((error) => console.error('Error fetching news data:', error));
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const imageStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
  };
  return (
    <div>
      <div>
        <Nav/>
        <div className='detailsHeader'>
          {tv.map((item) => {
            if (item._id == id) {
              return (
                <div key={item._id}>
                  <h1 className='detailsHeader'>{item.title}</h1>

                  <p className=' banner-content author'>
                    {item.author} <BsDot size={'1rem'} />{' '}
                    <span>{item.date}</span>
                  </p>
                  <div className='dtailsBanner'>
                    <img src={item.image} alt='' style={imageStyle} />
                  </div>
                  <p className='banner-content'>{item.content}</p>
                </div>
              );
            }
          })}
          <Link to={-1}>
            <button className='btn'>Go back</button>
          </Link>
        </div>
        ;
      </div>
    </div>
  );
}

export default TvDetails;

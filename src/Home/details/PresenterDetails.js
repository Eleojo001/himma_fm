import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom'; // Importing necessary hooks and components from React Router

function PresenterDetails() {
  // Using useParams to access the dynamic segment in the URL, which provides the presenter ID
  const { id } = useParams();  

  const url = 'https://himmatv.onrender.com/presenters';

  // State to store the list of presenters
  const [presenter, setPresenter] = useState([]);



  // Fetches the presenters data from the API when the component mounts
  useEffect(() => {
    // Fetch news data from the API
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Filter the presenters items by category
        console.log(data)
        // const filteredData = data.filter(
        //   (item) => item.category_id && item.category_id.title === 'presenters'
        // );
        setPresenter(data); // Sets the presenters state with the filtered data
      })
      .catch((error) => console.error('Error fetching news data:', error));
  }, []); // Empty dependency array means this effect runs only once after the initial render
  return (
    <div>
      <div className='detailsHeader'>
        {/* Iterates over the presenters to find the one matching the ID from the URL */}
        {presenter.map((item) => {
          if (item.id == id) { // Checks if the current presenter's ID matches the URL parameter
            return (
              <div key={item._id}>
                <div className='dtailsBanner'>
                  {/* This div is for holding the banner or additional content */}
                </div>
                {/* Displays the presenter's name and date */}
                <p className='banner-content author'>
                  {item.fullname} <span>{item.date}</span>
                </p>
                {/* Displays the presenter's biography */}
                <p className='banner-content'>{item.bio}</p>
              </div>
            );
          }
        })}
        {/* Link to navigate back to the previous page */}
        <Link to={-1}>
          <button className='btn'>Go back</button>
        </Link>
      </div>
    </div>
  );
}

export default PresenterDetails;

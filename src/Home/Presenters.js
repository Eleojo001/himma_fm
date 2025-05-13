import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

function Presenters() {
  // Inline styling for the main container
  const containerStyles = {
    width: '500px',
    height: '280px',
    margin: '0, auto',
  };


  // const url = 'https://himmatv.onrender.com/presenters';
   const url = "https://himmaradiotv.ng/api/Media/GetPresenter";

   const navigate = useNavigate();

  // State to store the list of presenters
  const [presenter, setPresenter] = useState([]);
  const [visible, setVisible] = useState(6);


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
        setPresenter(data.data); // Sets the presenters state with the filtered data
        console.log("presenter", data.data)
      })
      .catch((error) => console.error('Error fetching news data:', error));
  }, []); // Empty dependency array means this effect runs only once after the initial render
  const showMoreItems = () => {
    setVisible((previousValue) => previousValue + 3);
  };


  // Styling for presenter images on larger screens
  const imageStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '50%', // Makes the images circular
    objectFit: 'cover',  // Ensures the image covers the element without distortion
  };
  const imageStyleBtn = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    objectFit: 'contain',
    cursor: "pointer"
  };

  // Styling for presenter images on mobile devices
  const imageStylemobile = {
    width: '200px',
    height: '200px',
    borderRadius: '50%', // Circular image style
    objectFit: 'cover',  // Ensures the image fits well within the boundaries
    cursor: "pointer",
    border: "5px solid green",
  };

  return (
    <div>
      {/* Presenters Section */}
      <div className='presenterContainer'>
        {/* Header for the Presenters Section */}
        <div className='presenterHeader mb-header'>
          <h1 className='headersFont'>PRESENTERS</h1>
        </div>

        {/* Container for Presenter Profiles */}
        <div className='presenterProfileContainer'>
          <div className='presenterProfile'>
            {/* Mapping over the presenter data to display each presenter */}
            {/* {presenter.slice(0, visible).map((item) => { */}
            {presenter?.slice(0, visible).map((item) => {
              return (
                // <div className='presenterCard' key={item._id}>
                <div className='presenterCard' key={item.id}>
                  {/* Image Section for Presenter's Profile */}
                  <div className='sliderCardImg'>
                    {/* <img src={item.avatar} style={imageStylemobile} alt='' /> */}
                    <img src={`https://himmaradiotv.ng/${item.profileImagePath}`} style={imageStylemobile} alt='' onClick={()=> {
                      navigate(`/presenters/${item.id}`) // Navigates to the presenter details page on click
                    }}  />
                  </div>
                  
                  {/* Text Section for Presenter's Profile */}
                  <div className="">
                    
                    <div style={{ display: 'flex',alignItems: 'center', gap: '10px', marginBottom: '-20px' }}> <h3>
                      Name :
                    </h3>
                      <h3>{item?.firstName}</h3> {/* Displaying Presenter's Name */}
                      <h3>{item?.lastName}</h3> {/* Displaying Presenter's Name */}
                    </div>
                    <div style={{ display: 'flex',alignItems: 'center', gap: '10px', marginBottom: '-20px' }}>
                      <h3>Email :</h3>
                      <h3>{item?.email}</h3> {/* Displaying Presenter's Name */}
                    </div>
                    {/* <div style={{ display: 'flex',alignItems: 'center', gap: '10px', marginBottom: '-20px' }}>
                      <h3>Phone Number :</h3>
                      <h3>{item?.phoneNumber}</h3> 
                      
                    </div> */}
                      {/*<h3>{item.presenter.fullname}</h3>*/} {/* Displaying Presenter's Name */}
                      {/* <h3>{item.title}</h3>  */}
                      {/* Displaying Presenter's Name */}
                      {/* <h3> {item.programmes}</h3>  */}
                      {/* Displaying Presenter's Programmes */}
                  </div>
                </div>
              );
            })}
            
          </div>
        </div>
        <div className="moreBtn">
            <button className="viewmore btn" style={{ display: "flex", flexDirection: "column",}} onClick={showMoreItems}>
              <div style={{ width: "30px", height: "30px",  }}>
                <img
                  src="/viewMore_icon.png"
                  alt=""
                  style={imageStyleBtn}
                  className="eye-img"
                />
              </div>
              <span className="v-more-btn" style={{color:"black"}}>View More</span>
            </button>
          </div>
      </div>
    </div>
  );
}

export default Presenters;

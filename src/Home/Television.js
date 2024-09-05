import React, {useState,useEffect, useContext} from 'react';
import { DataContext } from '../App.js';


function Television() {
  const [tv, setTv] = useState([]);
  const url = 'https://himmatv.onrender.com/posts/';
  // Fetches the news data from the API when the component mounts
   const category = useContext(DataContext);
   const [data, setData] = useState([]);
   const [visible, setVisible] = useState(4);
   useEffect(() => {
    
    // Fetch news data from the API
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Filter the news items by category
        const filteredData = data.filter(
          (item) => item.category_id && item.category_id.title === 'Television'
        );
        
        setData(filteredData); // Sets the news state with the filtered data
        

      })
      .catch((error) => console.error('Error fetching news data:', error));
     let feed = category.tv;
     setData(feed);

   }, []); // Empty dependency array means this effect runs only once after the initial render
  
   const showMoreItems = () => {
    console.log('hi');
    setVisible((previousValue) => previousValue + 4);
  };
  const headerColor = {
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
   const icon = {
     width: '50px',
     height: '50px',
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
        <div className='watchBanner watch'>
          <div className='homeBannerSection1 watch'>
            <a
              href='#'
              className='myLink listner watcher'
              onClick={handleClick}
            >
              <span>
                <h1 style={{ color: 'black', fontWeight: 'bold' }}>Watch</h1>
              </span>
              <span className='liveHolder'>
                <span className='livetv'>
                  <img src='Live_tv_n.png' alt='' style={icon} />
                  <img
                    src='Red_circle.gif'
                    alt=''
                    className='circular'
                  />
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className='presenterPage-container television'>
          <div className='gridcontainer'>
            <div className='newsGrid' style={{padding:'20px 0px'}}>
              {data.slice(0, visible).map((item) => {
                return (
                  <div>
                    {/* <div className='frameImage'></div> */}
                    {/* <Link to={`/Himma-Tv/${item.id}`} key={item.id}> */}
                    <div className='newsCardImage'>
                    <div dangerouslySetInnerHTML={{ __html: item.youtubeLink }} style={{width:'100%', height:'100%'}}/> 
                                       {/* <img src={item.avartar} alt='' style={imageStyle} /> */}
                    </div>
                    <div className='newsCardHeader'>
                      {/* change class name to textLimit */}
                      <h3 style={headerColor} className='textLimit'>
                        {item.title}
                      </h3>
                    </div>
                    {/* </Link> */}
                  </div>
                );
              })}
            </div>
          </div>
          <div className='moreBtn'>
            <button className='viewmore btn' onClick={showMoreItems}>
              <div style={{ width: '30px', height: '30px', color: 'black' }}>
                <img
                  src='viewMore_icon.png'
                  alt=''
                  style={imageStyleBtn}
                />
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
                    {/* <Link to={`/Himma-Tv/${item.id}`} key={item.id}> */}
                    <div className='newsCardImage_mobile' style={card}>
                      <iframe
                        width='100%'
                        height='100%'
                        src='https://www.youtube.com/embed/94Ie-7K3QS8?si=XZDINIjkYArigGTI'
                        title='YouTube video player'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowfullscreen
                      ></iframe>
                      {/* <img src={item.image} alt='' style={imageStyle} /> */}
                    </div>
                    <div className='profileInfo'>
                      <h3 style={headerColor} className='textLimi'>
                        {item.title}
                      </h3>
                    </div>
                    {/* </Link> */}
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
                <img
                  src='viewMore_icon.png'
                  alt=''
                  style={imageStyleBtn}
                />
              </span>
              <span style={{ color: 'white' }}>View More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Television
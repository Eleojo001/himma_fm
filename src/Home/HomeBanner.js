import React, {useEffect, useState, useContext} from 'react'
import { DataContext } from '../App';
import { Link } from 'react-router-dom';
import listenIcon from './images/Red_circle.gif'
function HomeBanner() {
    const containerStyles = {
      backgroundImage: 'url(./images/homeBanner.jpeg)',
      backgroundSize: 'cover',
      width:'100%',
      height:'100%',
    };
    const category = useContext(DataContext)
    const [data, setData] = useState([])

    useEffect(()=>{
      setData(category.Shows)
    },[])
        const imageStyle = {
          width: '40px',
          height: '40px',
          marginTop:'5px'
        };

  return (
    <div>
      {/* home section  */}

      <div className='homeBanner'>
        {/* <div className='bannerPic'></div> */}
        <div className='homeBannerEvents'>
          <div
            className='homeBannerSection1'
            style={{ backgroundColor: 'black' }}
          >
            <Link className='myLink listner' to={'/radio'}>
              <span className='listenIcon'>
                <img src={listenIcon} alt='' style={imageStyle} />
              </span>
              <span style={{ color: 'red', fontSize: '18px' }}>
                Listen Live{' '}
              </span>
            </Link>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default HomeBanner
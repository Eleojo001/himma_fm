import React, {useEffect, useState, useContext} from 'react'
import { DataContext } from '../App';
import img1 from './images/mid-show.jpeg'
import img2 from './images/ag2.jpeg'
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
          {/* <div className='homeBannerSection2'>
            <div className='homecard1'>
              <div className='homecardImage'>
                <img src={img1} alt='' style={imageStyle} />
              </div>
              <div className='homecardtext'>
                <li className='homecardTextTitle'>Live on Air</li>
                <li className='show-time'>Midday Show</li>
                <li className='homecardDay'>Tuesday 11:00am to 4:00pm</li>
              </div>
            </div>

            <div className='homecard1'>
              <div className='homecardImage'>
                <img src={img2} alt='' style={imageStyle} />
              </div>
              <div className='homecardtext'>
                <li className='homecardTextTitle'>Up Next</li>
                <li className='show-time'>Drive Time Show </li>
                <li className='homecardDay'>Tuesday 4:00pm to 9:00pm</li>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className='homebannerLiveSec'>
          <iframe
            src='https://zeno.fm/player/himma-radio-91-1fm'
            width='100%'
            height='100%'
            frameborder='0'
            scroll='no'
          ></iframe>
        </div> */}
      </div>
    </div>
  );
}

export default HomeBanner
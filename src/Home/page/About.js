import React, {useState,  useEffect} from 'react'
import Nav from '../Nav'
export default function About() {
  const bg ={
    background:'white',
    color:'black',
  }
  const [data, setData] = useState('');
  const handleClick = () =>{
    window.open('https://www.sarmanfarms.com/services/', '_blank');
  }
  const imgStyle = {
    width:'100%',
    height:'100%',
    objectFit:'cover',
  }
  useEffect(()=>{
    setData(`HIMMA Radio and Television by Sarman Integrated Farms Limited is dedicated to further extension and propagation of agricultural practices within its locality.

Whether you are a farmer, researcher, or simply passionate about agriculture, our human-touch radio service will keep you informed, inspired, and connected to the pulse of the agricultural community.


 `);
  },[])
  return (
    <div>
      <Nav />
      <div className='about-container' style={bg}>
        <h1 className='headersFont'>About Us</h1>
        <p className='about-content'>
          <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
            HIMMA Radio and Television by IKRA MULTIMEDIA LIMITED is dedicated
            to further extension and propagation of agricultural practices
            within its locality, Nigeria and beyond. <br />
            <br />
            Broadcasting from the ancient commercial city of Kano State, we are
            programmed with modern and contemporary agricultural content and
            IKRA MULTIMEDIA LIMITED is the only Agricultural and Farming
            formatted Radio and Television station in the area and does not
            solicit funds from listeners. <br />
            <br />
            We are Committed to providing the Kano urban and rural with the best
            in Agricultural Programmes. We offer modern and contemporary Farming
            techniques tailored towards meeting the needs of our listeners and
            viewers. <br />
            <br />
            Following us at Himma Radio and Television promises our teeming
            audience a very rich mix of Agricultural shows, local news, weather
            reports, commodity prices, sports, entertainments, giveaways and
            lots more. <br />
            <br />
            Are you a farmer, researcher, or simply passionate about
            agriculture, our human-touch radio and television services will keep
            you informed, inspired, and connected to the pulse of the
            agricultural community at home and abroad! <br />
            <h1 className='headersFont'>Our Vision</h1>
            To ensure sustainable food systems in Nigeria and Africa through
            promoting Agribusiness. <br />
            <h1 className='headersFont'>Our Mission</h1>
            To promote commercial farming and agricultural entrepreneurship
            through capacity development and exchange of quality information and
            farmer-to-farmer training programs in local languages, thereby
            reaching the lost and encouraging the saved through our Agricultural
            and Farming formats. <br />
            <h1 className='headersFont'>Our Core Values</h1>
            <ul>
              <li>Respect and value for local knowledge and innovations</li>
              <li>Value for the environment and ecosystems</li>
              <li>Professional, effective, and informed by relevant science</li>
              <li>Creative, flexible, and innovative</li>
              <li>Sensitive to gender</li>
              <li>Quality, equality, and ethics</li>
              <li>Passion. </li>
            </ul>
          </p>
        </p>
        <div>
          <button
            style={{
              border: 'none',
              background: 'inherit',
              color: 'black',
            }}
          >
            <a
              href='#'
              onClick={handleClick}
              style={{
                border: 'none',
                textDecoration: 'none',
                color: 'black',
                fontSize: '14px',
              }}
            >
              Read More
            </a>
          </button>
        </div>

        <div className='photogallary'>
          <div className='photoGrid'>
            <div className='photo'>
              <div className='photoImage'>
                <img src='Sarman-farms-1.png' style={imgStyle} alt='' />
              </div>
            </div>
            <div className='photo'>
              <div className='photoImage'>
                <img src='Chicken-layers.jpg' style={imgStyle} alt='' />
              </div>
            </div>
            <div className='photo'>
              <div className='photoImage'>
                <img src='veg2.png' style={imgStyle} alt='' />
              </div>
            </div>
            <div className='photo'>
              <div className='photoImage'>
                <img src='fruits1.png' style={imgStyle} alt='' />
              </div>
            </div>
            <div className='photo'>
              <div className='photoImage'>
                <img src='slider121.png' style={imgStyle} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

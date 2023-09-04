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
            HIMMA Radio and Television by{' '}
            <a
              href='#'
              onClick={handleClick}
              style={{
                border: 'none',
                color: 'blue',
                fontWeight: 'bold',
              }}
            >
              Sarman Integrated Farms Limited
            </a>{' '}
            is dedicated to further extension and propagation of agricultural
            practices within its locality. <br /> Whether you are a farmer,
            researcher, or simply passionate about agriculture, our human-touch
            radio service will keep you informed, inspired, and connected to the
            pulse of the agricultural community.
            <br /> <h1 className='headersFont'>Our Vision</h1> To be the most
            Credible, Consistent and Valued Agricultural Broadcast Station in
            Nigeria. <br /> <h1 className='headersFont'>Our Mission</h1> To
            provide a trusted and reliable source of information, education and
            entertainment to the communities we serve.
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
                <img src='images/Sarman-farms-1.png' style={imgStyle} alt='' />
              </div>
            </div>
            <div className='photo'>
              <div className='photoImage'>
                <img src='images/Chicken-layers.jpeg' style={imgStyle} alt='' />
              </div>
            </div>
            <div className='photo'>
              <div className='photoImage'>
                <img src='images/veg2.png' style={imgStyle} alt='' />
              </div>
            </div>
            <div className='photo'>
              <div className='photoImage'>
                <img src='images/fruits1.png' style={imgStyle} alt='' />
              </div>
            </div>
            <div className='photo'>
              <div className='photoImage'>
                <img src='images/slider121.png' style={imgStyle} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

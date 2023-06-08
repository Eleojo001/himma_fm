import React, {useState,  useEffect} from 'react'
import Nav from '../Nav'

export default function About() {
  const bg ={
    background:'white',
    color:'black',
    paddingLeft:'130px',
    paddingRight:'130px'
  }
  const [data, setData] = useState('');
  const handleClick = () =>{
    window.open('https://www.sarmanfarms.com/services/', '_blank');
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
        <h1 className=''>ABOUT US</h1>
        <p className='about-content'>
          <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
            HIMMA Radio and Television by{' '}
            <a
              href='#'
              onClick={handleClick}
              style={{
                border: 'none',
                color:'black'
              }}
            >
              Sarman Integrated Farms Limited
            </a>{' '}
            is dedicated to further extension and propagation of agricultural
            practices within its locality. <br /> Whether you are a farmer,
            researcher, or simply passionate about agriculture, our human-touch
            radio service will keep you informed, inspired, and connected to the
            pulse of the agricultural community.
          </p>
        </p>
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
              color:'black',
              fontSize: '18px',
            }}
          >
            Read More
          </a>
        </button>
      </div>
    </div>
  );
}

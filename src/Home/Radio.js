import React, {useState, useEffect} from 'react'
import Nav from './Nav';

function Radio() {
  const [time, setTime] = useState(new Date())
  useEffect(()=>{
    const timer = setInterval(()=>{
      setTime(new Date());
    }, 1000)
    return () => {
      clearInterval(timer);
    };
  },[]);
  return (
    <div>
      <Nav />
      <div className='hidder'>
        <span className='radioShedule'>
          <div className='clock'>
            <span>
              <h3>Studio Clock:</h3>
            </span>
            <h3>{time.toLocaleTimeString()}</h3>
          </div>
          <div style={{marginRight:'30px'}}>
          <h3>Live on Air: Music</h3>
          </div>
          <div>
          <h3>Up Next: News</h3>
          </div>
        </span>
      </div>

      <div className='radio'>
        <iframe
          src='https://zeno.fm/player/himma-radio-91-1fm'
          width='100%'
          height='100%'
          frameborder='0'
          scrolling='no'
        ></iframe>
        {/* <a
          href='https://zeno.fm/'
          target='_blank'
          style={{display: "block", fontSize: '0.9em', lineHeight: '10px',}}
        >
          A Zeno.FM Station
        </a> */}
      </div>
    </div>
  );
}

export default Radio
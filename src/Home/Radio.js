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
          <div className='timer'>
            <h3 className='time'>{time.toLocaleTimeString()}</h3>
          </div>
            <div style={{ marginRight: '30px' }}>
              <h4>On Air: Hatsi</h4>
            </div>
            <div style={{ marginRight: '30px' }}>
              <h4>Up Next: Mid-Day News</h4>
            </div>
        </span>
      </div>
      <div className='mobileHider'>
        <div className='mobileHiderHolder'>
          <h3 className='time'>{time.toLocaleTimeString()}</h3>
          <div className='radioEVT'>
            <h4>On Air: <br /> Hatsi</h4>
            <h4>Up Next: <br /> Mid-Day News</h4>
          </div>
        </div>
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
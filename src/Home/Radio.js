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
            <h4>
              <span
                style={{
                  color: 'red',
                  padding: '10px 15px',
                  backgroundColor: 'white',
                  borderRadius: '5px',
                }}
              >
                On Air:
              </span>
              <span style={{ fontWeight: 'lighter', marginLeft: '10px' }}>
                Hatsi
              </span>
            </h4>
          </div>
          <div style={{ marginRight: '30px' }}>
            <h4>
              <span
                style={{
                  color: 'red',
                  padding: '10px 15px',
                  backgroundColor: 'white',
                  borderRadius: '5px',
                }}
              >
                Up Next:
              </span>
              <span style={{ fontWeight: 'lighter', marginLeft: '10px' }}>
                Mid-Day News
              </span>
            </h4>
          </div>
        </span>
      </div>
      <div className='mobileHider'>
        <div className='mobileHiderHolder'>
          <h3 className='time'>{time.toLocaleTimeString()}</h3>
          <div className='radioEVT'>
            <h4>
              <span style={{ color: 'red' }}>On Air:</span> <br /> Hatsi
            </h4>
            <h4>
              <span style={{ color: 'red' }}>Up Next: </span>
              <br /> Mid-Day News
            </h4>
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
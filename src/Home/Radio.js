import React, { useState, useEffect } from 'react';

function Radio() {
  const [time, setTime] = useState(new Date());
  const [schedule, setSchedule] = useState({ current: {} }); // Initialize with an empty object

  const url = 'https://himmatv.onrender.com/schedules/airing';
  
  useEffect(() => {
    // Fetch schedule data from the API
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSchedule(data); // Sets the schedule state with the API response
      })
      .catch((error) => console.error('Error fetching schedule data:', error));
    
    // Set up a timer to update the current time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function to clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };

  }, []);

  // Destructure `api object` to get properties
  const current = schedule.current || {};
  const upNext = schedule.next || {};

  return (
    <div className='radio'>
      <div className='hidder'>
        <span className='radioShedule'>
          <div className='timer'>
            <h3 className='time'>{time.toLocaleTimeString()}</h3>
          </div>
          
          <div>
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
                  {/* Render specific properties of `current` */}
                  {current.title || 'No current schedule'} {/* Use `current.title` or other relevant properties */}
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
                {upNext.title || 'No Next schedule'}
                </span>
              </h4>
            </div>
          </div>
        </span>
      </div>
      <div className='mobileHider'>
        <div className='mobileHiderHolder'>
          <h3 className='time'>{time.toLocaleTimeString()}</h3>
          <div className='radioEVT'>
            <h4 style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  color: 'red',
                  padding: '2px 3px',
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  marginBottom: '5px',
                }}
              >
                On Air:
              </span>
              <span>{current.title || 'No current schedule'} {/* Use `current.title` or other relevant properties */}
              </span>
            </h4>
            <h4 style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  color: 'red',
                  padding: '2px 3px',
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  marginBottom: '5px',
                }}
              >
                Up Next:
              </span>
              <span>
              {upNext.title || 'No Next schedule'}
              </span>
            </h4>
          </div>
        </div>
      </div>

      <div className='radio'>
        <iframe
          src='https://zeno.fm/player/himma-radio-91-1fm'
          width='100%'
          height='100%'
          frameBorder='0'
          scrolling='no'
        ></iframe>
      </div>
    </div>
  );
}

export default Radio;

import React from 'react'

function Podcast() {
  const podcast = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'50vh',
    padding:'30px 0px',
    backgroundColor:'whitesmoke',
  }
  return (
    <div>
      <div className='podcast' style={podcast}>
        <img
          src='podcastbg.png'
          style={{ width: '300px', height: 'auto' }}
          alt=''
        />
      </div>
    </div>
  );
}

export default Podcast
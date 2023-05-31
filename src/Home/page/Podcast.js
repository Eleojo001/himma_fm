import React from 'react'
import logo from '../images/logo-4.png'
import Nav from '../Nav'

function Podcast() {
  return (
    <div>
      <Nav/>
      <div className="podcast">
          <img src={logo} style={{width:'300px', height:'auto'}} alt="" />
      </div>
    </div>
  )
}

export default Podcast
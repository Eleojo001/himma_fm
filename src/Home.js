import React, {useState} from 'react'
import HomeBanner from './Home/HomeBanner'
import Nav from './Home/Nav'
import News from './Home/News'
import Presenters from './Home/Presenters'
import Shows from './Home/Shows'


function Home() {
  return (
    <div>
      <Nav/>
      <HomeBanner/>
      <News id='#News' />
      <Presenters id='#Presenter' />
      <Shows id='#Shows' />



    </div>
  )
}

export default Home
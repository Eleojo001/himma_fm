import React from 'react'
import HomeBanner from './Home/HomeBanner'
import News from './Home/News'
import Presenters from './Home/Presenters'
import Shows from './Home/Shows'


function Home() {
  return (
    <div>
      <HomeBanner />
      <div className="homeNewsHolder" style={{backgroundColor:'#2B7A0B'}}>
      <News id='#News' />
      </div>
      <div className="homePresenterHolder" style={{backgroundColor:'#dbc51c'}}>
      <Presenters id='#Presenter' />
      </div>
      <div className="homeShowsHolder" style={{backgroundColor:'#2B7A0B'}}>
      <Shows id='#Shows' />
      </div>



    </div>
  )
}

export default Home
import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Footer from './Home/Footer';
import About from './Home/About';
import Contact from './Home/Contact.js';
import News from './Home/News';
import NewsDetails from './Home/details/NewsDetails';
import PresenterDetails from './Home/details/PresenterDetails';
import ShowsDetails from './Home/details/ShowsDetails';
import TvDetails from './Home/details/TvDetails';
import Podcast from './Home/Podcast';
import NoteFound from './Home/NoteFound';
import Radio from './Home/Radio';
import Nav from './Home/Nav';
import Presenters from './Home/Presenters';
import Shows from './Home/Shows';
import Television from './Home/Television';

export const DataContext = React.createContext();

function App() {


  const [tv, setTv] = useState([
    {
      id: '1',
      title:
        'ENJOY VALUE FOR MONEY AND HASSLE FREE GROCERIES & FRESH FARM PRODUCTS ON SARMAN FARMS MOBILE APP',
      content:
        '',
      url: 'https://www.youtube.com/@HimmaTV261',
    },
  ]);


  
  return (
    <div className='App'>
      <BrowserRouter>
      <Nav/>
        <DataContext.Provider
          value={{ tv }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            {/* details section  */}
            <Route path='/news/:id' element={<NewsDetails />} />
            <Route path='/presenters/:id' element={<PresenterDetails />} />
            <Route path='/program/:id' element={<ShowsDetails />} />
            <Route path='/Himma-Tv/:id' element={<TvDetails />} />

            {/* full category page section  */}
            <Route path='/radio' element={<Radio />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/news' element={<News/>} />
            <Route path='/presenters' element={<Presenters/>} />
            <Route path='/Himma-tv' element={<Television/>} />
            <Route path='/programmes' element={<Shows/>} />
            <Route path='/podcast' element={<Podcast />} />
            {/* <Route path='/shedule' element={<Shedule />} /> */}
            <Route path='*' element={<NoteFound />} />
            </Routes>
        </DataContext.Provider>
        <Footer />
      </BrowserRouter>
      <div className='home-container'></div>
    </div>
  );
}

export default App;

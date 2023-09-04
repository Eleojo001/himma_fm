import React, { useContext,useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Footer from './Home/Footer';
import About from './Home/page/About';
import Page from './Home/page/Page';
import Contact from './Home/page/Contact';
import NavNews from './Home/Navigations/NavNews';
import NavPresenters from './Home/Navigations/NavPresenters';
import NavTv from './Home/Navigations/NavTv';
import NavShows from './Home/Navigations/NavShows';
// import tv1 from './Home/images/tv1.jpeg';
// import show1 from './images/cinikin_amfanin_noma.jpeg'
// import show2 from './images/Sirin-Noma.jpeg';
// import show3 from './images/awaki.jpeg';
// import show4 from './images/dabbobin_ruwa.jpeg'
// import show5 from './images/Hatsi.jpeg';
// import show6 from './images/kiwo_don_riba.jpeg'
// import show7 from './images/noma_don_riba.jpeg'
// import show8 from './images/masara.jpeg'
// import show9 from '../images/naurorinnoma.jpeg'
import NewsDetails from './Home/details/NewsDetails';
import PresenterDetails from './Home/details/PresenterDetails';
import ShowsDetails from './Home/details/ShowsDetails';
import TvDetails from './Home/details/TvDetails';
import Podcast from './Home/page/Podcast';
import NoteFound from './Home/NoteFound';
import Radio from './Home/Radio';

export const DataContext = React.createContext();

function App() {

  const [News, setNews] = useState([
    {
      id: 1,
      category: 'News',
      title: 'Fostering Unity through Agro-Products Sustainability',
      author: 'JEREMIAH AMEDU',
      content: `Every human endeavour is rapidly experiencing fascinating evolution making regular activities such as construction, education, healthcare, sports and agricultural activities more efficient and far reaching. That is why new innovations are fast rising and changing the ideals of society.\nThese ideals in the Information and Technology sector have even been described as disruptive technology as they have the tendency to totally alter the normal way tasks are carried out. For example, the overwhelming challenge that came with the COVID-19 pandemic has placed an option in the offing for the use of virtual communications for educational, social, judicial and governance purposes.\nSame changes are occurring in other sectors such as mechanized farming, genetic engineering, and the use of hydroponics and aeroponics in the growth of crops.\nHydroponics is a type of horticulture and a subset of hydroculture, which is a method of growing plants, usually crops, without soil, by using mineral nutrient solutions in an aqueous solvent while aeroponics is the use of aerosols laced with nutrients for plants and crops to grow. \n Plants commonly grown hydroponically on include tomatoes, peppers, cucumbers, strawberries, lettuces, marijuana, and model plants.\nThough many sceptics have reservations about these new methods of growing crops, such as the dangers of consuming seeds grown through such methods amongst others, hydroponics still has a lot of benefits. Due to the decrease in water usage for agriculture.
`,
      date: 'FEBRUARY 23, 2021',
      image: 'Food-and-Agriculture.jpeg',
    },
    {
      id: 2,
      category: 'News',
      title: 'Aeroponics and Hydroponics: Food Security and New Techniques.',
      author: 'JEREMIAH AMEDU',
      content: `Every human endeavor is rapidly experiencing fascinating evolution making regular activities such as construction, education, healthcare, sports and agricultural activities more efficient and far reaching. That is why new innovations are fast rising and changing the ideals of society.\n These ideals in the Information and Technology sector have even been described as disruptive technology as they have the tendency to totally alter the normal way tasks are carried out. For example, the overwhelming challenge that came with the COVID-19 pandemic has placed an option in the offing for the use of virtual communications for educational, social, judicial and governance purposes. \nIn the last seven months many weddings were held online, lectures and seminars were held virtually, court sessions and government functions were also held virtually.\nThese are all changes that has affected our social psyche in the way things are done. Same changes are occurring in other sectors such as mechanized farming, genetic engineering, and the use of hydroponics and aeroponics in the growth of crops. Hydroponics is a type of horticulture and a subset of hydroculture, which is a method of growing plants, usually crops, without soil, by using mineral nutrient solutions in an aqueous solvent while aeroponics is the use of aerosols laced with nutrients for plants and crops to grow.`,
      date: 'FEBRUARY 23, 2021',
      image: '/hydro-3.jpeg',
    },
    {
      id: 3,
      category: 'News',
      title:
        'Assessing the Feed Nigeria Summit 2020: Tackling food insecurity in Nigeria head-on.',
      author: 'JEREMIAH AMEDU',
      content: `When a man rises at dawn, what gives him an assurance of a bright day is not the shining rays of the sunlight or a pleasant weather, but the hope of getting three square meals with the right diet for his family and himself by sun set. According to the United Nations Food and Agriculture Organization, FAO, while many people may not be hungry in the sense that they are suffering physical discomfort caused by lack of dietary energy, they may still be food insecure.\nThey might also have access to food to meet their energy needs yet they are uncertain that it will last or they might be forced to reduce the quantity, and or the quality of food they eat in order to get by. This various aspect of food insecurity can contribute to various forms of malnutrition and can have serious consequences for health and wellbeing.\n THE FAO goes further by defining food insecurity as a situation where a person lacks regular access to enough safe and nutritious food for normal growth and development and an active and healthy life.\nThis may be due to unavailability of food or lack of resources to purchase or obtain food. Interestingly and somewhat ironically obesity and being overweight is also a indication of food insecurity. This is because uncertainty to access the right kind of food for long periods could lead to physiological changes that can contribute to obesity and overweight which in turn could also lead to severe illness.


`,
      image: 'meeting-3.jpeg',
      date: 'FEBRUARY 23, 2021',
    },
    {
      id: 4,
      category: 'News',
      title: 'Not just a Farmer: A Feeder!!!',
      author: 'OLAYEMI DANIYAN',
      content: `Each time a farmer strikes the earth with tools and machines to clear weeds, till the soil, plant crops and harvest it or evacuate dung and feeds for animals to feed, what comes to mind is the implication of his trade. If he decides to stop working, one wonders, where will the food in homes, markets, restaurants, warehouses and silos come from? Farmers play severely vital role in preserving the lives of millions of people. Unfortunately, in many underdeveloped economies farmers remain poor. The question that then comes to mind is why is it so? The simple answer is lack of money: no money to expand their fields or use the latest seeds and technology.

But economists have a more complicated theory. Perhaps, farmers face too much risk as too many factors seem against them. From unfavourable weather issues, to poor yields due to attack on crops by pests, coupled with unfavourable government policies and programmes. Also, a major risk factor especially in the Sub-Saharan Africa is the problem of clashes between farmers and herdsmen due to cows grazing on farm crops. Also unpleasant for farmers is the worsening security condition in rural areas such as kidnappings and assassinations. Besides these challenges is the issue of toil and poor interest in the trade, as a result many young people consider farming for rural dwellers or the old and retired. The situation has made many, especially in Nigeria to drop their tools and leave the farms for other trades.

However, despite these challenges which can be found in many countries throughout the globe, some personalities have faced the odds and emerged wealthy from farming while some other wealthy business investors are expanding their tentacles into farming. This is most likely due to the fact that farmers play a key role in keeping humans alive as everyone has to eat. A clear case is Africa’s richest man, Aliko Dangote who intends to branch into farming by investing $4.6billion in the Nigerian agriculture sector. Mr. Dangote plans to invest at least $3.8billion in sugar and rice and $800m in milk production in the next three years.`,
      date: 'FEBRUARY 23, 2021',
      image: 'farm-4.jpeg',
    },
  ]);
  const [Shows, setShows] = useState([
    {
      id: '1',
      title: 'Cinikin Amafanin Noma',
      image: 'cinikin_amfanin_noma.jpeg',
    },
    {
      id: '2',
      title: 'Noma Don Riba',
      image: 'Sirin-Noma.jpeg',
    },
    {
      id: '3',
      title: 'Awaki',
      image: 'awaki.jpeg',
    },
    {
      id: '4',
      title: 'Dabbobin Ruwa',
      image: 'dabbobin_ruwa.jpeg',
    },

    {
      id: '5',
      title: 'Hatsi',
      image: 'Hatsi.jpeg',
    },
    {
      id: '6',
      title: 'Kiwo Dan Riba',
      image: 'kiwo_don_riba.jpeg',
    },
    {
      id: '7',
      title: 'Noma Don Riba',
      image: 'noma_don_riba.jpeg',
    },
    {
      id: '8',
      title: 'Masara',
      image: 'naurorinnoma.jpeg',
    },
    {
      id: '9',
      title: `Na'urorin Noma`,
      image: 'naurorinnoma.jpeg',
    },
  ]);
  const [Presenter, setPresenter] = useState([
    {
      id: '1',
      name: 'Kabir G Haruna',
      bio: '',
      image: 'presenter_kabir.jpeg',
    },
    {
      id: '2',
      name: 'Salisu Idris Madobi',
      bio: '',
      image: 'presenter_salisu.jpeg',
    },
  ]);
  const [Television, setTelevision] = useState([
    {
      id: '1',
      title: 'Serman Farms',
      content:
        'Discover Fresh and Healthy Farm Products ranging from Grains, Vegetables, Fruits, Poultry Products, Fisheries, Edible Oils, Flours, Livestock and many more!',
      url: 'https://www.youtube.com/@HimmaTV261',
    },
    // {
    //   id: '2',
    //   title: 'State of the Nation',
    //   content:
    //     'When a man rises at dawn, what gives him an assurance of a bright day is not the shining rays of the sunlight or a pleasant weather, but the hope of getting three square meals with the right diet for his family and himself by sun set.',
    //     image:tv2,
    //     url:'https://www.youtube.com/@HimmaTV261'
    // },
    // {
    //   id: '3',
    //   title: 'Agriculture in the North',
    //   content:
    //     ' The agricultural sector being Nigeria’s major source of revenue has also witnessed evolution. Though it suffered setbacks as it was abandoned following the oil boom in the seventies, it has remained valuable to the Nigerian populace.',
    //     image:tv3,
    //     url:'https://www.youtube.com/@HimmaTV261'
    // },
    // {
    //   id: '4',
    //   title: 'Agriculture and Exports',
    //   content:
    //     'Every human endeavor is rapidly experiencing fascinating evolution making regular activities such as construction, education, healthcare, sports and agricultural activities more efficient and far reaching.',
    //     image:tv4,
    //     url:'https://www.youtube.com/@HimmaTV261'
    // },
  ]);
  // const [Navigation, setNavigation] = useState([
  //   {
  //     id:1,
  //     title:'News'
  //   },
  //   {
  //     id:2,
  //     title:'Himma TV'
  //   },
  //   {
  //     id:3,
  //     title:'Shows'
  //   },
  //   {
  //     id:4,
  //     title:'Presenter'
  //   },
  // ])


  
  return (
    <div className='App'>
      <BrowserRouter>
        <DataContext.Provider
          value={{ News, Shows, Presenter, Television }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/page/:id/' element={<Page />} />
            {/* details section  */}
            <Route path='/news/:id' element={<NewsDetails />} />
            <Route path='/presenters/:id' element={<PresenterDetails />} />
            <Route path='/full/:id' element={<ShowsDetails />} />
            <Route path='/Himma-Tv/:id' element={<TvDetails />} />

            {/* details section  */}

            {/* <Route path='/Presenters' element={<PresentersPage />} /> */}
            <Route path='/radio' element={<Radio />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/news' element={<NavNews />} />
            <Route path='/presenters' element={<NavPresenters />} />
            <Route path='/Himma-tv' element={<NavTv />} />
            <Route path='/programmes' element={<NavShows />} />
            <Route path='/podcast' element={<Podcast />} />
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

import React, {useState, useContext, useEffect} from 'react'
import { DataContext } from '../App';
import Slider from './components/Slider';
import image1 from './images/homeBanner.jpeg'
import image2 from './images/homeBanner2.jpeg'
import { Link } from 'react-router-dom';


function Presenters() {

  const slides = [
    {
      url: `${image1}`,
      title: 'Pic1',
    },
    {
      url: `${image2}`,
      title: 'Pic2',
    },
    {
      url: `${image1}`,
      title: 'Pic3',
    },
    {
      url: `${image2}`,
      title: 'Pic4',
    },
  ];
  const containerStyles = {
    width: '500px',
    height: '280px',
    margin: '0, auto',
  }
  const category = useContext(DataContext);
  const [presenter, setPresenter] = useState([]);

  useEffect((()=>{
    setPresenter(category.Presenter)
  }),[])

  return (
    <div>
      {/* presenters section  */}

      <div className='presenterContainer'>
        <div className='presenterHeader'>
          <h1 className='myFonts'>PRESENTERS</h1>
        </div>
        <div className='presenterProfileHolder'>
          <div className='presenterProfiles'>
            {
              presenter.map((item)=>{
                return (
                    <div className='presenterCard' key={item.id}>
                      <div className='presenterCardImg'>
                        {/* <img src={item.image} alt='' /> */}
                      </div>
                      <li className='whiteText'>{item.name}</li>
                    </div>
                );
              })
            }
          </div>
          {/* <div style={containerStyles}>
            <Slider slides={slides} />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Presenters
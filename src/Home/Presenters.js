import React, {useState, useContext, useEffect} from 'react'
import { DataContext } from '../App';
import { Link } from 'react-router-dom';


function Presenters() {


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
      const imageStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        objectFit: 'cover',
      };
      const imageStylemobile = {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        objectFit: 'cover',
      };

  return (
    <div>
      {/* presenters section  */}

      <div className='presenterContainer'>
        <div className='presenterHeader mb-header'>
          <h1 className='headersFont'>PRESENTERS</h1>
        </div>
        <div className='presenterProfileHolder'>
          <div className='presenterProfiles'>
            {presenter.map((item) => {
              return (
                <div className='presenterCard' key={item.id}>
                  <div className='sliderCardImg'>
                    <img src={item.image} style={imageStylemobile} alt='' />
                  </div>
                  <div className='profile_text'>
                  <li className=''>
                    <h3>{item.name}</h3>
                  </li>
                  <li className=''>
                    <h3> {item.programmes}</h3>
                  </li>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div style={containerStyles}>
            <Slider slides={slides} />
          </div> */}
      </div>
    </div>
  );
}

export default Presenters
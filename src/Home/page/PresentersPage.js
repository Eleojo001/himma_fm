import React,{useState, useContext} from 'react'
import { DataContext } from '../../App';
import './Page'

function PresentersPage() {
  const category = useContext(DataContext);
  const [presenters, setPresenter] =([])

  const profilestyle={
    borderRadius: '50%'
  }
  return (
    <div>
      <div className='presenterPage-container'>
        <h1 className='Presenter-header'>PRESENTERS</h1>
        <div className='presenterProfile'>
          <div className='Profile'>
            <div className='p-image'>
              <div className='profileImage profilestyle'></div>
            </div>
            <div className='profileInfo'>
              <h3>PRESENTERS NAME</h3>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                iste quos, nulla est quibusdam at sit quas fugit assumenda
                consequatur recusandae minus soluta, sapiente cumque.
              </span>
            </div>
          </div>
          <div className='Profile'>
            <div className='p-image'>
              <div className='profileImage'></div>
            </div>
            <div className='profileInfo'>
              <h3>PRESENTERS NAME</h3>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                iste quos, nulla est quibusdam at sit quas fugit assumenda
                consequatur recusandae minus soluta, sapiente cumque.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PresentersPage
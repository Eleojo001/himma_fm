import React from 'react';
import Nav from '../Nav';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc'
import {Link} from 'react-router-dom'

function Contact (){
  return (
    <div>
      <Nav />
      <div className='contact-container'>
        <div className='contact'>
          <h1 style={{ color: 'black' }}>Contact Us</h1>
          <form action='' style={{ color: 'black' }}>
            <div className='formrow'>
              <div className='formColumn'>
                <p className='formLabel'>Full Name</p>
                <div className='fInput'>
                  <input type='text' className='formInput' />
                </div>
              </div>
            </div>
            <div className='formrow'>
              <div className='formColumn'>
                <p className='formLabel'>Email</p>
                <div className='fInput'>
                  <input type='email' className='formInput' />
                </div>
              </div>
            </div>
            <div className='formrow'>
              <div className='formColumn'>
                <p className='formLabel'>Subject</p>
                <div className='fInput'>
                  <input type='text' className='formInput' />
                </div>
              </div>
            </div>
            <div className='formrow'>
              <div className='formColumn'>
                <p className='formLabel'> Message</p>
                <textarea
                  name=''
                  id=''
                  cols='30'
                  rows='10'
                  style={{ width: '100%' }}
                ></textarea>
              </div>
              <div className='formbtn'>
                <button>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
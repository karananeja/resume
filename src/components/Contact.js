import React, { useState } from 'react';
import { Call, Email, Home } from '@mui/icons-material';
import '../css/Contact.css';
import db from '../firebase';
import firebase from 'firebase';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    if (name && message && email && subject) {
      db.collection('queries')
        .add({
          name,
          email,
          message,
          subject,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => alert('Your query is successfully delivered'));
    }
    setName('');
    setEmail('');
    setMessage('');
    setSubject('');
  };

  return (
    <div id='contact' className='contact'>
      <p className='contact__title'>
        Contact Me <span className='contact__span' />
      </p>
      <div className='contact__main'>
        <form className='contact__left'>
          <input
            className='contact__info'
            type='text'
            placeholder='Enter your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='contact__info'
            type='email'
            placeholder='Enter your Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className='contact__info'
            rows='5'
            placeholder='Enter your Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input
            className='contact__info'
            type='text'
            placeholder='Enter the Subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <button
            className='contact__button'
            type='submit'
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>
        <div className='contact__right'>
          <div className='contact__rightIcons'>
            <Home />
            <div className='contact__text'>
              <h3>K Narayanapura, Bengaluru</h3>
              <p>Karnataka, India - 560077</p>
            </div>
          </div>
          <div className='contact__rightIcons'>
            <Call />
            <div className='contact__text'>
              <h3>
                <a href='tel:9980672016'>+91-9980672016</a>
              </h3>
              <p>Sat - Sun</p>
            </div>
          </div>
          <div className='contact__rightIcons'>
            <Email />
            <div className='contact__text'>
              <h3>
                <a href='mailto:karananeja.r@gmail.com'>
                  karananeja.r@gmail.com
                </a>
              </h3>
              <p>You can drop your query here as well</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

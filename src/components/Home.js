import {
  FacebookOutlined,
  KeyboardDoubleArrowDown,
  GitHub,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';
import React from 'react';
import '../css/Home.css';
import work from '../work';

const Home = () => {
  return (
    <div id='home' className='home'>
      <div className='home__left'>
        <p className='home__intro'>Hey There !</p>
        <h1 className='home__title'>I am Karan Kumar Aneja R</h1>
        <h3 className='home__jobIntro'>
          Working
          <span className='home__helpWord'> as </span>
          {work[0]?.title}{' '}
          <a href='#about' className='home__link'>
            at <KeyboardDoubleArrowDown />
          </a>
        </h3>
        <div className='home__icons'>
          <a
            href='https://www.facebook.com/karananeja.07/'
            target='_blank'
            rel='noreferrer'
          >
            <FacebookOutlined />
          </a>
          <a
            href='https://twitter.com/KaranAneja07'
            target='_blank'
            rel='noreferrer'
          >
            <Twitter />
          </a>
          <a
            href='https://github.com/karananeja'
            target='_blank'
            rel='noreferrer'
          >
            <GitHub />
          </a>
          <a
            href='https://linkedin.com/in/aneja07'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedIn />
          </a>
        </div>
        <button className='home__button'>
          {/* Temp link, will change once portfolio component is built */}
          <a href='#portfolio'>See My Work</a>
          {/* <a
            href='https://github.com/karananeja?tab=repositories'
            target='_blank'
          >
            See My Work
          </a> */}
        </button>
      </div>
      <div className='home__right'>
        <img
          className='home__image'
          src='https://r-trail-1.netlify.app/static/media/photo-nbg.0113342f.png'
          alt='user image'
        />
      </div>
    </div>
  );
};

export default Home;

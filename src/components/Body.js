import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';

const Body = () => {
  return (
    <div className='body'>
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default Body;

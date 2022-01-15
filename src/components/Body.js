import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';

const Body = () => {
  return (
    <div className='body'>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Body;

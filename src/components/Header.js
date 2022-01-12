import React, { useState } from 'react';
import { Close, Menu } from '@mui/icons-material';
import { ToggleButton } from '@mui/material';
import '../css/Header.css';

const Header = () => {
  const [resp, setResp] = useState(false);

  const toggleIcon = () => {
    setResp(!resp);
  };

  return (
    <header className='header'>
      <div className='header__left'>
        <a href='#'>
          <h1 className='header__name'>K.</h1>
        </a>
        {!resp ? (
          <ToggleButton
            className='header__toggle'
            value={resp}
            onClick={toggleIcon}
          >
            <Menu />
          </ToggleButton>
        ) : (
          <ToggleButton
            className='header__toggle'
            value={resp}
            onClick={toggleIcon}
          >
            <Close />
          </ToggleButton>
        )}
      </div>
      <div className='header__right'>
        <nav className={`header__nav ${!resp && 'header__navHidden'} `}>
          <ul onClick={toggleIcon}>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              {/* Temp link, will change once portfolio component is built 
              <a href='#portfolio'>Portfolio</a> */}
              <a
                href='https://github.com/karananeja?tab=repositories'
                target='_blank'
              >
                Portfolio
              </a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

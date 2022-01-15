import React from 'react';
import {
  FacebookOutlined,
  GitHub,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__info'>
        <a href='#'>
          <h1 className='footer__name'>K.</h1>
        </a>
        <div className='footer__icons'>
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
        <p>
          Copyright &copy; All rights reserved | Karan Kumar Aneja R{' '}
          {new Date().getFullYear()}.
        </p>
        <p>
          Icons courtesy of <a href='https://mui.com/'>Material icons</a> &{' '}
          <a href='https://react-icons.github.io/react-icons/'>React Icons</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

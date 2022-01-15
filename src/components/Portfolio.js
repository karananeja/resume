import React, { useEffect, useState } from 'react';
import { Computer, GitHub } from '@mui/icons-material';
import '../css/Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const url = 'https://karananeja.github.io/resume/src/projects.json';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <div id='portfolio' className='portfolio'>
      <p className='portfolio__title'>
        Portfolio <span className='portfolio__span'></span>
      </p>
      <div className='portfolio__projects'>
        {projects.map(({ appLink, codeLink, id, image, title }) => (
          <div className='portfolio__project' key={id}>
            <div className='portfolio__projectTitle'>
              {title} <span className='portfolio__span'></span>
            </div>
            <img src={image} alt={title} className='portfolio__img' />
            <div className='portfolio__links'>
              <a href={codeLink} target='_blank' rel='noopener noreferrer'>
                Code - <GitHub className='portfolio__icons' />
              </a>
              <a href={appLink} target='_blank' rel='noopener noreferrer'>
                Demo - <Computer className='portfolio__icons' />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

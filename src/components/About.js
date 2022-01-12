import React, { useState } from 'react';
import work from '../work';
import '../css/About.css';
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiMongodb } from 'react-icons/si';
import { Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdfFile from '../Resume.pdf';

const About = () => {
  const [showComponent, setShowComponent] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  console.log(showComponent);
  return (
    <div id='about' className='about'>
      <p className='about__aboutLine'>
        About Me <span className='about__span'></span>
      </p>
      <div className='about__job'>
        {work.map(
          (
            {
              title,
              location,
              duration,
              description_1,
              description_2,
              description_3,
            },
            index
          ) => (
            <div key={index}>
              <h1 className='about__jobTitle'>{title}</h1>
              <h3 className='about__jobLocation'>{location}</h3>
              <h5
                className={`about__jobDuration ${
                  duration && 'about__jobDurationExists'
                }`}
              >
                {duration}
              </h5>
              <ul className='about__jobInfo'>
                <li>{description_1}</li>
                <li>{description_2}</li>
                <li>{description_3}</li>
              </ul>
            </div>
          )
        )}
      </div>
      <button
        className='about__button'
        onClick={() => setShowComponent(!showComponent)}
      >
        Download Resume
      </button>
      {showComponent ? (
        <div className='.about__resume'>
          <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.min.js'>
            <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </div>
      ) : null}
      <p className='about__aboutLine'>
        My Skills <span className='about__span'></span>
      </p>
      <div className='about__icons'>
        <FaHtml5 className='about__icon' />
        <FaCss3 className='about__icon' />
        <FaJs className='about__icon' />
        <FaReact className='about__icon' />
        <SiFirebase className='about__icon' />
        <FaNodeJs className='about__icon' />
        <SiExpress className='about__icon' />
        <SiMongodb className='about__icon' />
      </div>
    </div>
  );
};

export default About;

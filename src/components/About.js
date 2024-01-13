import React, { useState } from 'react';
import work from '../work';
import '../css/About.css';
import {
  FaBitbucket,
  FaCss3,
  FaGithub,
  FaGitSquare,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
  FaSourcetree,
} from 'react-icons/fa';
import {
  SiApacheecharts,
  SiAxios,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiReactquery,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import { Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdfFile from '../Resume.pdf';

const About = () => {
  const [showComponent, setShowComponent] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div id='about' className='about'>
      <p className='about__aboutLine'>
        About Me <span className='about__span' />
      </p>
      <div className='about__job'>
        {work.map(({ title, location, duration, description }, index) => (
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
              {description.map((des, index) => (
                <li key={index}>{des}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button
        className='about__button'
        onClick={() => setShowComponent(!showComponent)}
      >
        {!showComponent ? 'Show Resume' : 'Hide Resume'}
      </button>
      {showComponent ? (
        <div className='about__resume'>
          <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.min.js'>
            <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </div>
      ) : null}
      <p className='about__aboutLine'>
        My Skills <span className='about__span' />
      </p>
      <div className='about__icons'>
        <FaHtml5 className='about__icon' />
        <span className='about__iconInfo'>HTML5</span>
        <FaCss3 className='about__icon' />
        <span className='about__iconInfo'>CSS3</span>
        <FaSass className='about__icon' />
        <span className='about__iconInfo'>SASS</span>
        <FaJs className='about__icon' />
        <span className='about__iconInfo'>JavaScript</span>
        <SiTypescript className='about__icon' />
        <span className='about__iconInfo'>TypeScript</span>
        <FaReact className='about__icon' />
        <span className='about__iconInfo'>React</span>
        <SiFirebase className='about__icon' />
        <span className='about__iconInfo'>Firebase</span>
        <FaNodeJs className='about__icon' />
        <span className='about__iconInfo'>NodeJs</span>
        <SiExpress className='about__icon' />
        <span className='about__iconInfo'>Express</span>
        <SiMongodb className='about__icon' />
        <span className='about__iconInfo'>Mongodb</span>
        <FaGitSquare className='about__icon' />
        <span className='about__iconInfo'>Git</span>
        <FaGithub className='about__icon' />
        <span className='about__iconInfo'>GitHub</span>
        <FaSourcetree className='about__icon' />
        <span className='about__iconInfo'>Sourcetree</span>
        <FaBitbucket className='about__icon' />
        <span className='about__iconInfo'>Bitbucket</span>
        <SiReactquery className='about__icon' />
        <span className='about__iconInfo'>React Query</span>
        <SiVite className='about__icon' />
        <span className='about__iconInfo'>Vite</span>
        <SiAxios className='about__icon' />
        <span className='about__iconInfo'>Axios</span>
        <SiApacheecharts className='about__icon' />
        <span className='about__iconInfo'>Echarts</span>
      </div>
    </div>
  );
};

export default About;

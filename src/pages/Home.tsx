import React from 'react';
import github from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedin.svg';
import instagram from '../assets/img/instagram.svg';

import note from '../assets/img/img-home.svg';

import arrow from '../assets/img/arrow_responsive.svg';

import { Menu } from '../components/Menu';


export function Home() {

  return (
    <>
      <Menu />
      <div className='menu-desktop'>
        <a href="#home">Home</a>
        <a href="#works">Works</a>
        <a href="#about">About Me</a>
        <a href="#footer">Contact Me</a>
      </div>
      <div className="container_home" id='home'>
        <div className='center_home'>
          <span className='html_span'>&lt;html&gt;</span>
          <span className='body_span'>&lt;body&gt;</span>
          <span className='h1_span'>&lt;h1&gt;</span>
          <h1 id='title-type-writter'>
            Hello! <br />
            I&apos;m Diego <br />
            Dev Frotend
          </h1>
          <span className='h1_close_span'>&lt;/h1&gt;</span>
        </div>
        <div className='img-home'>
          <img src={note} alt="" />
        </div>
        <div className='navigation'>
          <div className='active'><a href="#home">&#12644;</a></div>

          <div className='traço'></div>
          <div className='not_active'><a href="#works">&#12644;</a></div>

          <div className='traço'></div>
          <div className='not_active'><a href="#about">&#12644;</a></div>

          <div className='traço'></div>
          <div className='not_active'><a href="#footer">&#12644;</a></div>
        </div>
        <div className='bottom_home'>
          <a href="https://github.com/DiegoCard117" target='_blank' rel="noreferrer"><img src={github} alt="github icon" /></a>
          <a href="https://www.linkedin.com/in/diego-cardoso-534559203/" target='_blank' rel="noreferrer"><img src={linkedin} alt="linkedin icon" /></a>
          <a href="https://www.instagram.com/dih_cardoso117/" target='_blank' rel="noreferrer"><img src={instagram} alt="insta icon" /></a>
        </div>
        <div className="arrow">
          <span className='span_scroll_arrow'>Scroll</span>
          <img src={arrow} alt="" />
        </div>
        <div className='contactme-home'>
          <div className='btn-contact-home'>
            <span className='span-home-btn'>&lt;button&gt;</span>
            <a href="#footer">Contact Me</a>
            <span className='span-home-btn-close'>&lt;/button&gt;</span>
          </div>
        </div>
      </div>
    </>
  );
}



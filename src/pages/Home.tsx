import React from "react"
import { motion } from "framer-motion"
import github from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedin.svg';
import instagram from '../assets/img/instagram.svg';

import note from '../assets/img/img-home.svg';

import arrow from '../assets/img/arrow_responsive.svg';

import { Menu } from '../components/Menu';


export function Home() {

  const line1 = "Hello!"
  const line2 = "I'm Diego"
  const line3 = "Dev Frontend"

  const sentence = {
    hidden: {opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.10
      }
    }
  }

  const letter = {
    hidden: {opacity: 0, x: -50},
    visible: {opacity: 1, x: 0}
  }
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
        <motion.div
          variants={{
            hidden: {opacity: 0, x: -25},
            visible: {opacity: 1, x: 0}
          }}
          initial="hidden"
          animate="visible"
          transition={{duration: 0.5, delay: 0.25}}
          className='center_home'>
          <span className='html_span'>&lt;html&gt;</span>
          <span className='body_span'>&lt;body&gt;</span>
          <span className='h1_span'>&lt;h1&gt;</span>
          <motion.div
            variants={sentence}
            initial="hidden"
            animate="visible"
            className='title-type-writter'>
            {line1.split("").map((char, index) => {
              return (
                <motion.h1 className={char} key={char + "-" + index} variants={letter}>
                  {char}
                </motion.h1>
              )
            })}
            <br />
            {line2.split("").map((char, index) => {
              return (
                <motion.h1 className={'a' + index} key={char + "-" + index} variants={letter}>
                  {char} 
                </motion.h1>
              )
            })} <br />
            {line3.split("").map((char, index) => {
              return (
                <motion.h1 className={index + 'b'} key={char + "-" + index} variants={letter}>
                  {char}
                </motion.h1>
              )
            })}
          </motion.div>
          <span className='h1_close_span'>&lt;/h1&gt;</span>
        </motion.div>
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



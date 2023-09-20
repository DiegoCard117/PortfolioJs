import menu from '../assets/img/Menu.svg';

import home from '../assets/img/home.svg';
import work from '../assets/img/work.svg';
import contact from '../assets/img/contact.svg';
import about from '../assets/img/about.svg';

import React, { useState } from 'react';


export function Menu() {
  const [menuClass, setMenuClass] = useState("menu close");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    !isMenuClicked ? setMenuClass("menu open") : setMenuClass("menu close");
    setIsMenuClicked(!isMenuClicked);
    isMenuClicked ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <header>
        <nav>
          <div onClick={updateMenu} className='menu-icon'>
            <img src={menu} alt="" />
          </div>
          <div className={menuClass}>
            <ul>
              <li><img src={home} alt="" /><a href="#home">Home</a></li>
              <li><img src={work} alt="" /><a href="#works">Works</a></li>
              <li><img src={about} alt="" /><a href="#about">About Me</a></li>
              <li><img src={contact} alt="" /><a href="#footer">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
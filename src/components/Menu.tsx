import menu from '../assets/img/Menu.svg';

import home from '../assets/img/home.svg';
import work from '../assets/img/work.svg';
import blog from '../assets/img/blog.svg';
import contact from '../assets/img/contact.svg';
import about from '../assets/img/about.svg';

import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export function Menu() {
  const { t } = useLanguage();
  const [menuClass, setMenuClass] = useState("menu close");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    !isMenuClicked ? setMenuClass("menu open") : setMenuClass("menu close");
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <header>
        <nav>
          <button
            type='button'
            onClick={updateMenu}
            className='menu-icon'
            aria-label={isMenuClicked ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuClicked}
          >
            <img src={menu} alt="" />
          </button>
          <div className={menuClass}>
            <ul>
              <li><img src={home} alt="" /><a href="#home">{t.nav.home}</a></li>
              <li><img src={work} alt="" /><a href="#works">{t.nav.works}</a></li>
              <li><img src={blog} alt="" /><a href="#blog">{t.nav.blog}</a></li>
              <li><img src={about} alt="" /><a href="#about">{t.nav.about}</a></li>
              <li><img src={contact} alt="" /><a href="#footer">{t.nav.contact}</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
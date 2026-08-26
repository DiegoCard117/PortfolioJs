import React, { Suspense, lazy } from "react"
import { motion } from "framer-motion"
import github from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedin.svg';
import instagram from '../assets/img/instagram.svg';

import { Menu } from '../components/Menu';
import { useLanguage } from '../i18n/LanguageContext';

const Design = lazy(() => import('../components/Design').then((m) => ({ default: m.Design })));

export function Home() {
  const { t } = useLanguage();

  const words = ["Diego", "Cardoso"]

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.035
      }
    }
  }

  const letter = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      <Menu />
      <div className='menu-desktop'>
        <a href="#home">{t.nav.home}</a>
        <a href="#works">{t.nav.works}</a>
        <a href="#blog">{t.nav.blog}</a>
        <a href="#about">{t.nav.about}</a>
        <a href="#footer">{t.nav.contact}</a>
      </div>
      <div className="section container_home" id='home'>
        <Suspense fallback={null}>
          <Design />
        </Suspense>
        <div className='section-inner home-inner'>
          <div className='home-content'>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4 }}
              className='eyebrow'
            >
              {t.hero.eyebrow}
            </motion.div>

            <motion.h1
              variants={sentence}
              initial="hidden"
              animate="visible"
              className='home-name'
              aria-label={words.join(" ")}
            >
              {words.map((word) => (
                <span className='home-name-word' key={word} aria-hidden="true">
                  {word.split("").map((char, index) => (
                    <motion.span
                      className='home-name-letter'
                      key={word + char + index}
                      variants={letter}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>

            <motion.p
              className='home-tagline'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {t.hero.tagline} <span className='home-tagline-sep'>·</span> {t.hero.taglineSep}
            </motion.p>

            <motion.div
              className='home-actions'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.25 }}
            >
              <a className='home-cta' href="#footer">{t.hero.cta}</a>
              <a className='home-resume-cta' href={t.hero.resumeFile} target='_blank' rel='noreferrer'>{t.hero.resumeCta}</a>
              <div className='home-social'>
                <a href="https://github.com/DiegoCard117" target='_blank' rel="noreferrer" aria-label="GitHub de Diego Cardoso"><img src={github} alt="GitHub" /></a>
                <a href="https://www.linkedin.com/in/diego-cardoso-534559203/" target='_blank' rel="noreferrer" aria-label="LinkedIn de Diego Cardoso"><img src={linkedin} alt="LinkedIn" /></a>
                <a href="https://www.instagram.com/dih_cardoso117/" target='_blank' rel="noreferrer" aria-label="Instagram de Diego Cardoso"><img src={instagram} alt="Instagram" /></a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="scroll-cue">
          <span>{t.hero.scroll}</span>
          <div className='scroll-cue-line' />
        </div>
      </div>
    </>
  );
}

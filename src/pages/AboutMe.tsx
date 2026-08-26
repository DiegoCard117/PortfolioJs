import github from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedin.svg';
import instagram from '../assets/img/instagram.svg';
import React, { useEffect, useRef } from 'react';
import { SkillGrid } from '../components/SkillGrid';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

export function AboutMe() {
  const { t } = useLanguage();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5 }}
      id='about'
      className="section container-about">
      <div className='section-inner about-inner'>
        <div className='about-main'>
          <span className='eyebrow'>{t.about.eyebrow}</span>
          <h2 className='about-title'>{t.about.title}</h2>

          <div className='about-p'>
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className='social-bottom'>
            <a href="https://github.com/DiegoCard117" target='_blank' rel="noreferrer" aria-label="GitHub de Diego Cardoso"><img src={github} alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/diego-cardoso-534559203/" target='_blank' rel="noreferrer" aria-label="LinkedIn de Diego Cardoso"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="https://www.instagram.com/dih_cardoso117/" target='_blank' rel="noreferrer" aria-label="Instagram de Diego Cardoso"><img src={instagram} alt="Instagram" /></a>
          </div>
        </div>

        <div className='about-skills'>
          <span className='skills-label'>{t.about.skillsLabel}</span>
          <SkillGrid />
        </div>
      </div>
    </motion.div>
  );
}

import balanceDashboard from '../assets/img/balance-dashboard.png';
import React, { useEffect, useRef } from 'react';

import { useInView, useAnimation, motion } from 'framer-motion';
import { SiDjango, SiPython, SiPostgresql, SiTailwindcss, SiNginx, SiGithubactions, SiRedis, SiSentry, SiMercadopago } from 'react-icons/si';
import { useLanguage } from '../i18n/LanguageContext';

export function Portfolio() {
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
    <div id='works' className='section container_portfolio'>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5 }}
        className="section-inner content_portfolio">
        <span className='eyebrow'>{t.portfolio.eyebrow}</span>
        <h2 className='portfolio-title'>{t.portfolio.title}</h2>
        <p className='portfolio-intro'>{t.portfolio.intro}</p>

        <div className='balance-card'>
          <div className='balance-media'>
            <img
              src={balanceDashboard}
              alt={t.portfolio.balance.alt}
              width={1658}
              height={907}
              loading="lazy"
              decoding="async"
            />
            <a
              className='balance-visit'
              href='https://balanceinvest.app'
              target='_blank'
              rel='noreferrer'
            >
              {t.portfolio.balance.visit}
            </a>
          </div>

          <div className='balance-info'>
            <span className='balance-eyebrow'>{t.portfolio.balance.eyebrowLabel}</span>
            <h3>Balance</h3>
            <p className='balance-tagline'>{t.portfolio.balance.tagline}</p>

            <p>{t.portfolio.balance.paragraph1}</p>
            <p>{t.portfolio.balance.paragraph2}</p>

            <ul className='balance-features'>
              {t.portfolio.balance.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className='balance-stack'>
              <span title='Django'><SiDjango />Django</span>
              <span title='Python'><SiPython />Python</span>
              <span title='PostgreSQL'><SiPostgresql />PostgreSQL</span>
              <span title='Tailwind CSS'><SiTailwindcss />Tailwind CSS</span>
              <span title='Nginx'><SiNginx />Nginx</span>
              <span title='GitHub Actions'><SiGithubactions />CI/CD</span>
              <span title='Redis'><SiRedis />Redis</span>
              <span title='Sentry'><SiSentry />Sentry</span>
              <span title='Mercado Pago'><SiMercadopago />Mercado Pago</span>
            </div>

            <a
              className='balance-cta'
              href='https://balanceinvest.app'
              target='_blank'
              rel='noreferrer'
            >
              {t.portfolio.balance.cta}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

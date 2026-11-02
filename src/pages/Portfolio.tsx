import balanceDashboard from '../assets/img/balance-dashboard.png';
import partiuRoteiro from '../assets/img/partiu-roteiro.png';
import partiuOrcamento from '../assets/img/partiu-orcamento.png';
import partiuChecklist from '../assets/img/partiu-checklist.png';
import React, { useEffect, useRef, type ReactNode } from 'react';

import { useInView, useAnimation, motion } from 'framer-motion';
import {
  SiDjango, SiPython, SiPostgresql, SiTailwindcss, SiNginx, SiGithubactions, SiRedis, SiSentry, SiMercadopago,
  SiReact, SiExpo, SiNextdotjs, SiTypescript, SiSupabase, SiLeaflet, SiVercel, SiGoogleplay,
} from 'react-icons/si';
import { useLanguage } from '../i18n/LanguageContext';

type ProjectCopy = {
  eyebrowLabel: string;
  tagline: string;
  paragraph1: string;
  paragraph2: string;
  features: string[];
  visit: string;
  cta: string;
  alt: string;
  playStore?: string;
};

function ProjectCard({
  copy, name, href, img, imgWidth, imgHeight, stack, reverse, paused, playStoreUrl,
}: {
  copy: ProjectCopy;
  name: string;
  href: string;
  img: string | string[];
  imgWidth: number;
  imgHeight: number;
  stack: ReactNode;
  reverse?: boolean;
  paused?: boolean;
  playStoreUrl?: string;
}) {
  const images = Array.isArray(img) ? img : [img];
  return (
    <div className={`project-card${reverse ? ' reverse' : ''}${paused ? ' paused' : ''}`}>
      <div className={`project-media${images.length > 1 ? ' gallery' : ''}`}>
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={i === 0 ? copy.alt : ''}
            width={imgWidth}
            height={imgHeight}
            loading="lazy"
            decoding="async"
          />
        ))}
        <a className='project-visit' href={href} target='_blank' rel='noreferrer'>
          {copy.visit}
        </a>
      </div>

      <div className='project-info'>
        <span className='project-eyebrow'>{copy.eyebrowLabel}</span>
        <h3>{name}</h3>
        <p className='project-tagline'>{copy.tagline}</p>

        <p>{copy.paragraph1}</p>
        <p>{copy.paragraph2}</p>

        <ul className='project-features'>
          {copy.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className='project-stack'>{stack}</div>

        <div className='project-actions'>
          <a className='project-cta' href={href} target='_blank' rel='noreferrer'>
            {copy.cta}
          </a>

          {playStoreUrl && copy.playStore && (
            <a className='project-store' href={playStoreUrl} target='_blank' rel='noreferrer'>
              <SiGoogleplay />{copy.playStore}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

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

        <ProjectCard
          copy={t.portfolio.partiu}
          name='Partiuu!'
          href='https://partiuu.app.br'
          playStoreUrl='https://play.google.com/store/apps/details?id=br.app.partiuu'
          img={[partiuRoteiro, partiuOrcamento, partiuChecklist]}
          imgWidth={390}
          imgHeight={844}
          stack={(
            <>
              <span title='React Native'><SiReact />React Native</span>
              <span title='Expo'><SiExpo />Expo</span>
              <span title='Next.js'><SiNextdotjs />Next.js</span>
              <span title='TypeScript'><SiTypescript />TypeScript</span>
              <span title='Tailwind CSS'><SiTailwindcss />Tailwind CSS</span>
              <span title='Supabase'><SiSupabase />Supabase</span>
              <span title='PostgreSQL'><SiPostgresql />PostgreSQL</span>
              <span title='Leaflet'><SiLeaflet />Leaflet</span>
              <span title='Vercel'><SiVercel />Vercel</span>
            </>
          )}
        />

        <ProjectCard
          copy={t.portfolio.balance}
          name='Balance'
          href='https://balanceinvest.app'
          img={balanceDashboard}
          imgWidth={1658}
          imgHeight={907}
          reverse
          paused
          stack={(
            <>
              <span title='Django'><SiDjango />Django</span>
              <span title='Python'><SiPython />Python</span>
              <span title='PostgreSQL'><SiPostgresql />PostgreSQL</span>
              <span title='Tailwind CSS'><SiTailwindcss />Tailwind CSS</span>
              <span title='Nginx'><SiNginx />Nginx</span>
              <span title='GitHub Actions'><SiGithubactions />CI/CD</span>
              <span title='Redis'><SiRedis />Redis</span>
              <span title='Sentry'><SiSentry />Sentry</span>
              <span title='Mercado Pago'><SiMercadopago />Mercado Pago</span>
            </>
          )}
        />
      </motion.div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const DEVTO_USERNAME = 'diegocard117';
const DEVTO_PROFILE = `https://dev.to/${DEVTO_USERNAME}`;

type DevToArticle = {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
};

export function Blog() {
  const { t, lang } = useLanguage();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://dev.to/api/articles?username=${DEVTO_USERNAME}&per_page=3`)
      .then((res) => {
        if (!res.ok) throw new Error('devto request failed');
        return res.json();
      })
      .then((data: DevToArticle[]) => {
        if (cancelled) return;
        setArticles(data);
        setStatus('ready');
      })
      .catch(() => {
        if (cancelled) return;
        setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const dateLocale = lang === 'pt' ? 'pt-BR' : 'en-US';

  return (
    <div id='blog' className='section container_blog'>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5 }}
        className='section-inner content_blog'
      >
        <span className='eyebrow'>{t.blog.eyebrow}</span>
        <h2 className='blog-title'>{t.blog.title}</h2>
        <p className='blog-intro'>{t.blog.intro}</p>

        {status === 'loading' && <p className='blog-status'>{t.blog.loading}</p>}

        {status === 'error' && (
          <p className='blog-status'>
            {t.blog.error}{' '}
            <a href={DEVTO_PROFILE} target='_blank' rel='noreferrer'>dev.to/{DEVTO_USERNAME}</a>
          </p>
        )}

        {status === 'ready' && articles.length === 0 && (
          <p className='blog-status'>{t.blog.empty}</p>
        )}

        {status === 'ready' && articles.length > 0 && (
          <div className='blog-grid'>
            {articles.map((article) => (
              <a
                key={article.id}
                className='blog-card'
                href={article.url}
                target='_blank'
                rel='noreferrer'
              >
                <span className='blog-card-date'>
                  {new Date(article.published_at).toLocaleDateString(dateLocale, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                  {' · '}
                  {article.reading_time_minutes} min
                </span>
                <h3>{article.title}</h3>
                {article.tag_list.length > 0 && (
                  <div className='blog-card-tags'>
                    {article.tag_list.slice(0, 3).map((tag) => (
                      <span key={tag}>#{tag}</span>
                    ))}
                  </div>
                )}
              </a>
            ))}
          </div>
        )}

        <a className='blog-view-all' href={DEVTO_PROFILE} target='_blank' rel='noreferrer'>
          {t.blog.viewAll}
        </a>
      </motion.div>
    </div>
  );
}

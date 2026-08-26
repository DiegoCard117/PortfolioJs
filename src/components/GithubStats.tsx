import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const GITHUB_USERNAME = 'DiegoCard117';
const GITHUB_PROFILE = `https://github.com/${GITHUB_USERNAME}`;

type GithubUser = {
  public_repos: number;
  followers: number;
  created_at: string;
};

export function GithubStats() {
  const { t } = useLanguage();

  const [user, setUser] = useState<GithubUser | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => {
        if (!res.ok) throw new Error('github request failed');
        return res.json();
      })
      .then((data: GithubUser) => {
        if (cancelled) return;
        setUser(data);
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

  const since = user ? new Date(user.created_at).getFullYear() : null;

  return (
    <div className="github-stats">
      <span className="skills-label">{t.github.label}</span>

      {status === 'loading' && <p className="github-status">{t.github.loading}</p>}
      {status === 'error' && <p className="github-status">{t.github.error}</p>}

      {status === 'ready' && user && (
        <div className="github-stats-row">
          <div className="github-stat">
            <span className="github-stat-num">{user.public_repos}</span>
            <span className="github-stat-label">{t.github.repos}</span>
          </div>
          <div className="github-stat">
            <span className="github-stat-num">{user.followers}</span>
            <span className="github-stat-label">{t.github.followers}</span>
          </div>
          <div className="github-stat">
            <span className="github-stat-num">{since}</span>
            <span className="github-stat-label">{t.github.since}</span>
          </div>
        </div>
      )}

      <a className="github-view-profile" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">
        {t.github.viewProfile}
      </a>
    </div>
  );
}

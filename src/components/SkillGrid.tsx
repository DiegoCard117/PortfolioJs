import React from 'react';
import { motion } from 'framer-motion';
import {
  SiTypescript, SiJavascript, SiHtml5, SiCss3, SiReact, SiTailwindcss, SiSass, SiVite, SiFigma,
  SiGit, SiGithub, SiGitea, SiDjango, SiMysql, SiPostgresql, SiNginx, SiGithubactions, SiLinux,
  SiUbuntu, SiWindows, SiSelenium,
} from 'react-icons/si';

const SKILLS = [
  { label: 'TypeScript', Icon: SiTypescript },
  { label: 'JavaScript', Icon: SiJavascript },
  { label: 'React', Icon: SiReact },
  { label: 'HTML5', Icon: SiHtml5 },
  { label: 'CSS3', Icon: SiCss3 },
  { label: 'Tailwind CSS', Icon: SiTailwindcss },
  { label: 'Sass', Icon: SiSass },
  { label: 'Vite', Icon: SiVite },
  { label: 'Figma', Icon: SiFigma },
  { label: 'Django', Icon: SiDjango },
  { label: 'MySQL', Icon: SiMysql },
  { label: 'PostgreSQL', Icon: SiPostgresql },
  { label: 'Nginx', Icon: SiNginx },
  { label: 'GitHub Actions', Icon: SiGithubactions },
  { label: 'Linux', Icon: SiLinux },
  { label: 'Ubuntu', Icon: SiUbuntu },
  { label: 'Windows Server', Icon: SiWindows },
  { label: 'Selenium', Icon: SiSelenium },
  { label: 'Git', Icon: SiGit },
  { label: 'GitHub', Icon: SiGithub },
  { label: 'Gitea', Icon: SiGitea },
];

export function SkillGrid() {
  return (
    <div className='skill-grid'>
      {SKILLS.map(({ label, Icon }, index) => (
        <motion.span
          className='skill-badge'
          key={label}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.02 }}
        >
          <Icon aria-hidden="true" />
          {label}
        </motion.span>
      ))}
    </div>
  );
}

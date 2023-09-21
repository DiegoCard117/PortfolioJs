import React from 'react';
import { Cloud, renderSimpleIcon, fetchSimpleIcons, SimpleIcon } from 'react-icon-cloud';
import '../assets/css/sphere.scss'

interface IconsData {
  simpleIcons: Record<string, SimpleIcon>;
  allIcon: Record<string, { title: string; hex: string; slug: string; }>;
}

const useIcons = (slugs: string[]) => {
  const [icons, setIcons] = React.useState<IconsData | undefined>(undefined);

  React.useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, []);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) => renderSimpleIcon({
      icon,
      size: 70,
      aProps: {
        onClick: (e: any) => e.preventDefault()
      }
    }));
  }

  return <a>Loading</a>;
};

const slugs = [
  'typescript',
  'vercel',
  'javascript',
  'html5',
  'css3',
  'tailwindcss',
  'react',
  'firebase',
  'figma',
  'git',
  'github',
  'prisma',
  'axios',
  'zod',
  'expo',
  'vite',
  'sass',
];

const DynamicIconCloud = () => {
  const icons = useIcons(slugs);

  return (
    <div className='containerSphere'>
      <Cloud>
        {[icons]}
      </Cloud>
    </div>
  );

};

export default DynamicIconCloud;

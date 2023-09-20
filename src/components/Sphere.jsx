import {useEffect, useRef, useState} from "react"
import TagCloud from "TagCloud"

import '../assets/css/sphere.css'

export default function Sphere() {
  const tagCloudRef = useRef(null)
  const [radiusSize, setRadiusSize] = useState(180);

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 720 ? setRadiusSize(180) : setRadiusSize(300);
    }
    
    console.log(radiusSize);
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [radiusSize]);

  useEffect(() => {
    const container = tagCloudRef.current;
    const texts = [
      'HTML5',
      'CSS3',
      'Scss',
      'Tailwind',
      'JavaScript',
      'TypesCript',
      'ReactJs',
      'ReactNative',
      'NextJs',
      'NodeJS',
      'Firebase',
      'Figma',
      'GIT',
      'GITHUB',
      'ApiRest',
      'Axios',
      'Shadcn Ui',
      'Prisma',
      'Zod',
      'Expo',
      'Vite',
    ];

    const options = {
      radius: radiusSize,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true,
      
    };

    container.innerHTML = ''

    TagCloud(container, texts, options);
  }, [radiusSize]);

  return (
      <div className="containerSphere">
        <span ref={tagCloudRef}> </span>
       
      </div>
  )
}
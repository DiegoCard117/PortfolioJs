import pc from '../assets/img/Devices.gif';
import React, { useEffect, useRef } from 'react';

import { Carrosel } from '../components/Carrosel';
import { useInView, useAnimation, motion } from 'framer-motion';

export function Portfolio() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div id='works' className='container_portfolio'>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: 15 },
            visible: { opacity: 1, x: 0 }
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="content_portfolio">
          <div className='portfolio-title'>
            <span className='port_open'>&lt;h2&gt;</span>
            <h2 className='portfolio-title-inside'>My Portfolio</h2>
            <span className='port-h2-close'>&lt;/h2&gt;</span>
          </div>

          <div className='navigation'>
            <div className='not_active'><a href="#home">&#12644;</a></div>

            <div className='traço'></div>
            <div className='active'><a href="#works">&#12644;</a></div>

            <div className='traço'></div>
            <div className='not_active'><a href="#about">&#12644;</a></div>

            <div className='traço'></div>
            <div className='not_active'><a href="#footer">&#12644;</a></div>
          </div>
          <div

            className='box-portfolio'
          >
            <div>
              <span className='port_open'>&lt;p&gt;</span>
              <p>Bem-vindo ao meu portfólio!</p>
              <p>Sou um apaixonado desenvolvedor Frontend com 1,5 ano de experiência na criação de interfaces web envolventes e funcionais. </p>
              <p>Meu objetivo é combinar habilidades técnicas sólidas com uma abordagem criativa para criar experiências digitais excepcionais para os usuários.</p>
              <p>Meu portfólio é uma vitrine dos meus projetos mais recentes e relevantes. Com uma apresentação limpa e intuitiva, convido você a explorar uma seleção de trabalhos que abrangem uma variedade de tecnologias e desafios.</p>
              <span className='port-p-close'>&lt;/p&gt;</span>
            </div>
            <div className='gif-pc'>
              <img src={pc} alt="" />
            </div>
          </div>
        </motion.div>
        <Carrosel />
      </div>
    </>
  );
}
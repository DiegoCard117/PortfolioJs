import github from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedin.svg';
import instagram from '../assets/img/instagram.svg';
import Sphere from '../components/Sphere';
import React from 'react';
import DynamicIconCloud from '../components/ItemCloud';

export function AboutMe() {
  return (
    <>
      <div id='about' className="container-about">
        <div className='about-title'>
          <span className='port_open'>&lt;h2&gt;</span>
          <h2 className='about-title-inside'>About Me</h2>
          <span className='about_h2_close'>&lt;/h2&gt;</span>
        </div>
        <div className='navigation'>
          <div className='not_active'><a href="#home">&#12644;</a></div>

          <div className='traço'></div>
          <div className='not_active'><a href="#works">&#12644;</a></div>

          <div className='traço'></div>
          <div className='active'><a href="#about">&#12644;</a></div>

          <div className='traço'></div>
          <div className='not_active'><a href="#footer">&#12644;</a></div>
        </div>
        {/* paragrafo sobre mim */}
        <div className='about-box'>
          <div className='about-p'>
            <span className='port_open'>&lt;p&gt;</span>
            <p>Olá, sou o Diego, tenho 21 anos e sou desenvolvedor Frontend, atualmente trabalho como freelancer usando ReactJs.</p>
            <p>Venho estudando Desenvolvimento web a pouco mais de 1 ano, tenho gostado bastante da área e acredito que seguirei nela daqui em diante.</p>
            <p>Sou apaixonado por criar experiências interativas e envolventes na web, valorizo a criação de interfaces intuitivas e responsivas, pois busco sempre a melhor experiencia possível para o usuário em cada projeto que faço parte.</p>
            <p>Além de minhas habilidades técnicas, eu me dedico a sempre me manter atualizado com as tendências do mundo do desenvolvimento web.</p>
            <p>Tenho uma perspectiva promissora para o futuro, espero continuar crescendo como desenvolvedor Frontend.</p>
            <p>Em resumo, sou um Dev Frontend dedicado, cuja paixão pela tecnologia e design me torna uma força motriz na criação de experiências web excepcionais</p>
            <span className='port_p_close'>&lt;/p&gt;</span>
          </div>
          <DynamicIconCloud/>
        </div>
        <div className='social-bottom'>
          <a href="https://github.com/DiegoCard117" target='_blank' rel="noreferrer"><img src={github} alt="github icon" /></a>
          <a href="https://www.linkedin.com/in/diego-cardoso-534559203/" target='_blank' rel="noreferrer"><img src={linkedin} alt="linkedin icon" /></a>
          <a href="https://www.instagram.com/dih_cardoso117/" target='_blank' rel="noreferrer"><img src={instagram} alt="insta icon" /></a>
        </div>
      </div>
    </>
  );
}

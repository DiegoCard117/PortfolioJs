
import css from '../assets/img/css.svg'
import html from '../assets/img/html.svg'
import js from '../assets/img/js.svg'
import react from '../assets/img/react.svg'
import git from '../assets/img/git.svg'
import figma from '../assets/img/figma.svg'

import cssbig from '../assets/img/css-big.svg'
import htmlbig from '../assets/img/html-big.svg'
import jsbig from '../assets/img/js-big.svg'
import reactbig from '../assets/img/react-big.svg'
import gitbig from '../assets/img/git-big.svg'
import figmabig from '../assets/img/figma-big.svg'

import github from '../assets/img/github.svg'
import linkedin from '../assets/img/linkedin.svg'
import instagram from '../assets/img/instagram.svg'

export function AboutMe() {
  return (
    <>
      <div id='about' className="container-about">
        <div className='portfolio-title about-title'>
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
        <div className='portfolio-p'>
          <span className='port_open'>&lt;p&gt;</span>
          <p>Olá, sou o Diego, tenho 21 anos e sou desenvolvedor Frontend, atualmente trabalho como freelancer usando ReactJs.</p>

          <p>Venho estudando Desenvolvemento web a pouco mais de 1 ano, tenho gostado bastante da área e acredito que seguirei nela daqui em diante.</p>

          <p>Sou apaixonado por criar experiências interativas e envolventes na web, valorizo a criação de interfaces intuitivas e responsivas, pois busco sempre a melhor experiencia possivel para o usuário em cada projeto que faço parte.</p>

          <p>Além de minhas habilidades tecnicas, eu me dedico a sempre me manter atualizado com as tendências do mundo do desenvolvimento web.</p>

          <p>Tenho uma perspectiva promissora para o futuro, espero continuar crescendo como desenvolvedor Frontend.</p>

          <p>Em resumo, sou um Dev Frontend dedicado, cuja paixão pela tecnologia e design me torna uma força motriz na criação de experiências web excepcionais</p>
          <span className='port_p_close'>&lt;/p&gt;</span>
        </div>

        <div className='tec-box'>
          <div className="title-about">
            <span className='port_open carrousel_h3_open'>&lt;h3&gt;</span>
            <h3 className='about-title-inside'>Tecnologies</h3>
            <span className='about_h3_close'>&lt;/h3&gt;</span>
          </div>
          <div className='grid-tec'>
            <img className='css' src={css} alt="" />
            <img className='html' src={html} alt="" />
            <img className='js' src={js} alt="" />
            <img className='react' src={react} alt="" />
            <img className='github' src={git} alt="" />
            <img className='' src={figma} alt="" />
          </div>
          <div className='grid-tec-desktop'>
            <img className='css' src={cssbig} alt="" />
            <img className='html' src={htmlbig} alt="" />
            <img className='js' src={jsbig} alt="" />
            <img className='react' src={reactbig} alt="" />
            <img className='github' src={gitbig} alt="" />
            <img className='' src={figmabig} alt="" />
          </div>
          <div className='menu-footer'>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">AboutMe</a></li>
              <li><a href="#works">Works</a></li>
            </ul>
          </div>
          <div className='bottom_home final-menu'>
            <a href="https://github.com/DiegoCard117" target='_blank' rel="noreferrer"><img src={github} alt="github icon" /></a>
            <a href="https://www.linkedin.com/in/diego-cardoso-534559203/" target='_blank' rel="noreferrer"><img src={linkedin} alt="linkedin icon" /></a>
            <a href="https://www.instagram.com/dih_cardoso117/" target='_blank' rel="noreferrer"><img src={instagram} alt="insta icon" /></a>
          </div>
        </div>
          <div className='menu-bottom'>
            <a href="#home">Home</a>
            <a href="#about">AboutMe</a>
            <a href="#works">Works</a>
            <a href="https://github.com/DiegoCard117" target='_blank' rel="noreferrer"><img src={github} alt="github icon" /></a>
            <a href="https://www.linkedin.com/in/diego-cardoso-534559203/" target='_blank' rel="noreferrer"><img src={linkedin} alt="linkedin icon" /></a>
            <a href="https://www.instagram.com/dih_cardoso117/" target='_blank' rel="noreferrer"><img src={instagram} alt="insta icon" /></a>
          </div>
      </div>
    </>
  )
}
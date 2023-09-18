
import github from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedin.svg';
import instagram from '../assets/img/instagram.svg';
import Sphere from '../components/Sphere';

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
        <div className='portfolio-p-tec'>
          <div className='portfolio-p'>
            <span className='port_open'>&lt;p&gt;</span>
            <p>Olá, sou o Diego, tenho 21 anos e sou desenvolvedor Frontend, atualmente trabalho como freelancer usando ReactJs.</p>
            <p>Venho estudando Desenvolvimento web a pouco mais de 1 ano, tenho gostado bastante da área e acredito que seguirei nela daqui em diante.</p>
            <p>Sou apaixonado por criar experiências interativas e envolventes na web, valorizo a criação de interfaces intuitivas e responsivas, pois busco sempre a melhor experiencia possível para o usuário em cada projeto que faço parte.</p>
            <p>Além de minhas habilidades técnicas, eu me dedico a sempre me manter atualizado com as tendências do mundo do desenvolvimento web.</p>
            <p>Tenho uma perspectiva promissora para o futuro, espero continuar crescendo como desenvolvedor Frontend.</p>
            <p>Em resumo, sou um Dev Frontend dedicado, cuja paixão pela tecnologia e design me torna uma força motriz na criação de experiências web excepcionais</p>
            <span className='port_p_close'>&lt;/p&gt;</span>
          </div>
            <Sphere />
        </div>
          <div className='social-bottom'>
            <a href="https://github.com/DiegoCard117" target='_blank' rel="noreferrer"><img src={github} alt="github icon" /></a>
            <a href="https://www.linkedin.com/in/diego-cardoso-534559203/" target='_blank' rel="noreferrer"><img src={linkedin} alt="linkedin icon" /></a>
            <a href="https://www.instagram.com/dih_cardoso117/" target='_blank' rel="noreferrer"><img src={instagram} alt="insta icon" /></a>
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
  );
}

/*


import css from '../assets/img/css.svg';
import html from '../assets/img/html.svg';
import js from '../assets/img/js.svg';
import react from '../assets/img/react.svg';
import git from '../assets/img/git.svg';
import figma from '../assets/img/figma.svg';

import cssbig from '../assets/img/css-big.svg';
import htmlbig from '../assets/img/html-big.svg';
import jsbig from '../assets/img/js-big.svg';
import reactbig from '../assets/img/react-big.svg';
import gitbig from '../assets/img/git-big.svg';
import figmabig from '../assets/img/figma-big.svg';


        <div className='tec-box' onClick={openSpan}>
          <div className="title-about">
            <span className='port_open carrousel_h3_open'>&lt;h3&gt;</span>
            <h3 className='about-title-inside'>Technologies</h3>
            <span className='about_h3_close'>&lt;/h3&gt;</span>
          </div>
          <div className='grid-tec'>
            <div className='css' >
              <img src={css} alt="Css3" />
              <span className={span}>CSS3</span>
            </div>

            <div className='html'>
              <img src={html} alt="Html5" />
              <span className={span}>Html5</span>
            </div>

            <div className="js">
              <img src={js} alt="Javascript" />
              <span className={span}>Javascript</span>
            </div>

            <div className="react span-bottom">
              <img src={react} alt="ReactJs" />
              <span className={span}>ReactJs</span>
            </div>

            <div className='github span-bottom'>
              <img src={git} alt="Github" />
              <span className={span}>Github</span>
            </div>

            <div className='figma span-bottom'>
              <img src={figma} alt="Figma" />
              <span className={span}>Figma</span>
            </div>
          </div>
          <div className='grid-tec-desktop'>
            <img className='css' src={cssbig} alt="Css3" />
            <span className={span}>CSS3</span>
            <img className='html' src={htmlbig} alt="Html5" />
            <span className={span}>CSS3</span>
            <img className='js' src={jsbig} alt="Javascript" />
            <span className={span}>Javascript</span>
            <img className='react' src={reactbig} alt="ReactJs" />
            <span className={span}>ReactJs</span>
            <img className='github' src={gitbig} alt="Github" />
            <span className={span}>Github</span>
            <img className='' src={figmabig} alt="Figma" />
            <span className={span}>Figma</span>
          </div>
          <div className='menu-footer'>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">AboutMe</a></li>
              <li><a href="#works">Works</a></li>
            </ul>
          </div>
        </div>
*/
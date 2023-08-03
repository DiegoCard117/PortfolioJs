import '../assets/css/portfolio.css'
import pc from '../assets/img/Devices.gif'

import { Carrosel } from '../components/Carrosel'
 
export function Portfolio() {

  return (
    <>
      <div id='works' className='container_portfolio'>
        <div className="content_portfolio">
          <div className='portfolio-title'>
            <span className='port_open'>&lt;h2&gt;</span>
            <h2 className='portfolio-title-inside'>My Portfolio</h2>
            <span className='port_h2_close'>&lt;/h2&gt;</span>
          </div>
          <div className='gif-pc'>
            <img src={pc} alt="" />
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
          <div className='portfolio-p'>
            <span className='port_open'>&lt;p&gt;</span>
            <p>Bem-vindo ao meu portfólio!</p> 
            <p>Sou um apaixonado desenvolvedor Frontend com 1 ano de experiência na criação de interfaces web envolventes e funcionais. </p>
            <p>Meu objetivo é combinar habilidades técnicas sólidas com uma abordagem criativa para criar experiências digitais excepcionais para os usuários.</p>
            <p>Meu portfólio é uma vitrine dos meus projetos mais recentes e relevantes. Com uma apresentação limpa e intuitiva, convido você a explorar uma seleção de trabalhos que abrangem uma variedade de tecnologias e desafios.</p>
            <span className='port_p_close'>&lt;/p&gt;</span>
          </div>
        </div>
        <Carrosel />
      </div>
    </>
  )
}
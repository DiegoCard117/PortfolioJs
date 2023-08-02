import '../assets/css/portfolio.css'

import smart from '../assets/img/smartphone.svg'
import notebook from '../assets/img/notebook.svg'

export function Portfolio() {

  return (
    <>
      <div className='container_portfolio'>
        <div className="content_portfolio">
          <div className='portfolio-title'>
            <span className='port_open'>&lt;h2&gt;</span>
            <h2 className='portfolio-title-inside'>My Portfolio</h2>
            <span className='port_h2_close'>&lt;/h2&gt;</span>
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
        {/* Começo do carrosel */}
        <div className='carrousel'>
          <div className='item-carrousel'>
            <div className="title-carrousel">
              <span className='port_open carrousel_h3_open'>&lt;h3&gt;</span>
                <h3 className='carrousel-title-inside'>SaufidSuplementos</h3>
                <span className='carrousel_h3_close'>&lt;/h3&gt;</span>
              </div>
            <div className='img-carrousel'>
              <img src={smart} alt="" className='smartphone' />
              <img src={notebook} alt="" className='notebook' />
            </div>
            <div className='carrousel-p'>
              <span className='carrousel_p_open'>&lt;p&gt;</span>
              <p>Um Projeto Freelancer para um sorteio de produtos Fitness.</p> 
              
              <span className='carrousel_p_close'>&lt;/p&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
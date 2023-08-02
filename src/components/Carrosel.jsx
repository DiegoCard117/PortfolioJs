import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide} from 'swiper/react'
import { register } from 'swiper/element/bundle';

import smart from '../assets/img/smartphone.svg'
import notebook from '../assets/img/notebook.svg'
import smartOff from '../assets/img/smartphone-off.svg'
import notebookOff from '../assets/img/notebook-off.svg'

export function Carrosel() {
  register();
  return (
    <>
    <Swiper
      slidesPerView={1}
    >
      <SwiperSlide>
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
            <div className='navigation-carrousel'>
                <span className='navigation_circle navigation_active'></span>
                <span className='navigation_circle'></span>
            </div>
          </div>
        </div>
        <div className='btn_portfolio_container'>
          <span className='btn_open'>&lt;button&gt;</span>
          <a className='btn_check' href="https://sorteio-sup-react.vercel.app" target='_blank' rel="noreferrer">Check</a>
          <span className='btn_close'>&lt;/button&gt;</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='carrousel'>
          <div className='item-carrousel'>
            <div className="title-carrousel">
              <span className='port_open carrousel_h3_open'>&lt;h3&gt;</span>
                <h3 className='carrousel-title-inside'>Projeto em breve&#12644;</h3>
                <span className='carrousel_h3_close'>&lt;/h3&gt;</span>
            </div>
            <div className='img-carrousel'>
              <img src={smartOff} alt="" className='smartphone' />
              <img src={notebookOff} alt="" className='notebook' />
            </div>
            <div className='carrousel-p'>
              <span className='carrousel_p_open'>&lt;p&gt;</span>
              <p>Projeto virá em breve, aguarde</p> 
              
              <span className='carrousel_p_close'>&lt;/p&gt;</span>
            </div>
            <div className='navigation-carrousel'>
                <span className='navigation_circle'></span>
                <span className='navigation_circle navigation_active'></span>
            </div>
          </div>
        </div>
        <div className='btn_portfolio_container'>
          <span className='btn_open'>&lt;button&gt;</span>
          <button className='btn_check disable'>Check</button>
          <span className='btn_close'>&lt;/button&gt;</span>
        </div>
      </SwiperSlide>
    </Swiper>
    </>
  )
}
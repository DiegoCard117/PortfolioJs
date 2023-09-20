import { Swiper, SwiperSlide } from 'swiper/react';

import { register } from 'swiper/element/bundle';

import smart from '../assets/img/smartphone.svg';
import notebook from '../assets/img/notebook.svg';
import smartOff from '../assets/img/smartphone-off.svg';
import notebookOff from '../assets/img/notebook-off.svg';

import noteEc from '../assets/img/noteEcommerce.svg'
import tel from '../assets/img/telEcommerce.svg'


import login from '../assets/img/telaRNlogin.png';
import product from '../assets/img/telaRNproduct.png';
import home from '../assets/img/telaRNhome.png';

import React, { useEffect, useState } from 'react';
export function Carrosel() {

  const [slidePerView, setSlidePerView] = useState(1);

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 720 ? setSlidePerView(1) : setSlidePerView(2);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  register();
  return (
    <>
      <Swiper
        slidesPerView={slidePerView}
      >
        <SwiperSlide>
          <div className='carrousel'>
            <div className='item-carrousel'>
              <div className="title-carrousel">
                <span className='port_open carrousel_h3_open'>&lt;h3&gt;</span>
                <h3 className='carrousel-title-inside'>Ecommerce</h3>
                <span className='carrousel_h3_close'>&lt;/h3&gt;</span>
              </div>
              <div className='img-carrousel'>
                <img src={tel} alt="" className='smartphone' width={'45px'}/>
                <img src={noteEc} alt="" className='notebook' width={'240px'}/>
              </div>
              <div className='carrousel-p'>
                <span className='carrousel_p_open'>&lt;p&gt;</span>
                <p>FrontEnd de um site de vendas Feito com NextJs</p>
                <span className='carrousel_p_close'>&lt;/p&gt;</span>
              </div>
              <div className='navigation-carrousel'>
                <span className='navigation_circle'></span>
                <span className='navigation_circle'></span>
                <span className='navigation_circle navigation_active'></span>
              </div>
            </div>
          </div>
          <div className='btn_portfolio_container'>
            <span className='btn_open'>&lt;button&gt;</span>
            <a className='btn_check' href='https://ecommerce-gold-gamma.vercel.app' target='_blank' rel="noreferrer" >Check</a>
            <span className='btn_close'>&lt;/button&gt;</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='carrousel'>
            <div className='item-carrousel'>
              <div className="title-carrousel">
                <span className='port_open carrousel_h3_open'>&lt;h3&gt;</span>
                <h3 className='carrousel-title-inside'>EcommerceRn</h3>
                <span className='carrousel_h3_close'>&lt;/h3&gt;</span>
              </div>
              <div className='img-carrousel Rn'>
                <img src={product} alt="" className='smartphone' />
                <img src={login} alt="" className='smartphone' />
                <img src={home} alt="" className='smartphone' />
              </div>
              <div className='carrousel-p'>
                <span className='carrousel_p_open'>&lt;p&gt;</span>
                <p>Ecommerce feito em React Native</p>

                <span className='carrousel_p_close'>&lt;/p&gt;</span>
              </div>
              <div className='navigation-carrousel'>
                <span className='navigation_circle'></span>
                <span className='navigation_circle navigation_active'></span>
                <span className='navigation_circle'></span>
              </div>
            </div>
          </div>
          <div className='btn_portfolio_container'>
            <span className='btn_open'>&lt;button&gt;</span>
            <a className="btn_check" href="https://github.com/DiegoCard117/EcommerceRN" target='_blank' rel="noreferrer">Check</a>
            <span className='btn_close'>&lt;/button&gt;</span>
          </div>
        </SwiperSlide>

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
                <h3 className='carrousel-title-inside'>Projeto em breve</h3>
                <span className='carrousel_h3_close'>&lt;/h3&gt;</span>
              </div>
              <div className='img-carrousel'>
                <img src={notebookOff} alt="" className='smartphone' />
                <img src={smartOff} alt="" className='smartphone' />
              </div>
              <div className='carrousel-p'>
                <span className='carrousel_p_open'>&lt;p&gt;</span>
                <p>Projeto virá em breve, aguarde</p>
                <span className='carrousel_p_close'>&lt;/p&gt;</span>
              </div>
              <div className='navigation-carrousel'>
                <span className='navigation_circle'></span>
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
  );
}
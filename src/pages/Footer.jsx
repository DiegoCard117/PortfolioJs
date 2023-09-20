import { useState } from 'react';

import emailjs from '@emailjs/browser';

export function Footer() {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  function sendEmail(e) {
    e.preventDefault();

    if (email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      email: email,
      message: message
    };

    emailjs.send("service_j0jkvh7", "template_q1d917c", templateParams, "VnsPHOsUeXYDnMl_d").then((response) => {
      console.log("enviado", response.status, response.text);
      setEmail("");
      setMessage("");
    }, (err) => {
      console.log("erro", err);
    });
  }

  return (
    <>
      <div id='footer' className="footer">
        <div className='box-connect'>
          <span className='port_open'>&lt;h2&gt;</span>
          <h2 className='portfolio-title-inside footer-title'>Connect with me</h2>
          <span className='footer_h2_close'>&lt;/h2&gt;</span>
        </div>
        <div className='navigation nav-footer'>
          <div className='not_active'><a href="#home">&#12644;</a></div>

          <div className='traço'></div>
          <div className='not_active'><a href="#works">&#12644;</a></div>

          <div className='traço'></div>
          <div className='not_active'><a href="#about">&#12644;</a></div>

          <div className='traço'></div>
          <div className='active'><a href="#footer">&#12644;</a></div>
        </div>
        <div className='portfolio-title footer-container'>
          <span className='port_open'>&lt;input&gt;</span>
          <form onSubmit={sendEmail}>
            <input
              type="text"
              id="email"
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <input
              type="text"
              id="msg"
              placeholder='Message'
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <span className='input_close'>&lt;/input&gt;</span>
            <div className='btn-submit'>
              <span className='port_open submit_open'>&lt;button&gt;</span>
              <input type="submit" id='contact-btn' value="Contact Me" />
              <span className='submit_close'>&lt;/button&gt;</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
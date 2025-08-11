import React from 'react'

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className="footer-top">
        <div className="footer-left">
        <div className="logo"><span>P</span>ortfolio</div>
            <p>I'm currently available to take on new projects, so feel free to ask about anything you want me to work on.</p>
        </div>
        <div className="footer-right">
             <div className="email-input">
                <img src="" alt="" />
                <input type="email" placeholder='Enter your Email' />
             </div>
             <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>@ Devashree Wakhare</p>
        <div className="footer-bottom-right"></div>
        <p>Trem of Services</p>
        <p>Privacy Policy</p>
        <p>Conncet With me</p>
      </div>
    </div>
   

  )
}

export default Footer

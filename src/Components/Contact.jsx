import React from 'react'

const Contact = () => {
  return (
    <div className='contact-section'>
       
      <h1 className='heading'>Get In Touch</h1>
  
      
      <div className="contact">

  <div className="contact-left">
  <h1>Let's Talk</h1>
  <p>I'm currently available to take on new projects, so feel free to ask about anything you want me to work on.</p>

  <div className="contact-details">
    <div className="details">
      <i className="fas fa-envelope"></i>
      <p>diyawakhare27@gmail.com</p>
    </div>
    <div className="details">
      <i className="fas fa-phone"></i>
      <p>+8446978228</p>
    </div>
    <div className="details">
      <i className="fab fa-github"></i>
      <p>
        <a
          href="https://github.com/wakharedevashree"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0ef", textDecoration: "none" }}
        >
          github.com/wakharedevashree
        </a>
      </p>
    </div>
    <div className="details">
      <i className="fab fa-linkedin"></i>
      <p>
        <a
          href="https://www.linkedin.com/in/devashree-wakhare-672b00279"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0ef", textDecoration: "none" }}
        >
          linkedin.com/in/devashree-wakhare-672b00279
        </a>
      </p>
    </div>
  </div>
</div>


  <form className="contact-right">
    <label>Your Name </label>
    <input type="text" placeholder='Enter your Name:' />
    <label>Your Email </label>
    <input type="email" placeholder='Enter your Email:' />
    <label>Write your message here</label>
    <textarea placeholder="Enter your Message" cols="30" rows="10"></textarea>
    <button type="button" className='contact-submit'>Submit Now</button>
  </form>
</div>

    </div>

  )
}

export default Contact

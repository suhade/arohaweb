import React from "react"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid1'>
          <div className='box'>
            <img src='./assets/log.png' alt='' />
            <p>WE CONSULT YOUR DNA.</p>
            <div className='SocailIcon'>
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              <i className='fab fa-twitter twitter'></i>
              <i className='fab fa-youtube youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>News</li>
              <li>Contact</li>
              <li>FAQ's</li>
            </ul>
          </div>

         

          <div className='box'>
            <h2>Get in Touch</h2>
            <p>Making Decision maybe difficult but with us, we are long term partner. </p>
            <div className='icon'>
              <i class='fa-solid fa-location-dot'></i>
              <label>Location:27 Juja Modern Hospital, Juja, Kenya</label>
            </div>
            <div className='icon'>
              <i class='fa fa-phone'></i>
              <label>Phone:+44 00000000</label>
            </div>
            <div className='icon'>
              <i class='fa fa-envelope'></i>
              <label>Email:info@aroha.com</label>
            </div>
          </div>
        </div>
        <div className='legal container'>
          <p>Copyright @2023. All rights reserved.</p>
          <label>
            Design & Developed by <span>Daniel</span>
          </label>
        </div>
      </footer>
    </>
  )
}

export default Footer

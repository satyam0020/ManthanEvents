import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AboutAreaH = () => {
  return (
    <div>
      <section className="section section-padding-equal bg-color-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us">
              <div className="section-heading heading-left mb-0">
                <span className="subtitle">About Us</span>
                <h2 className="title mb--40">
                  Comprehensive Event Management by Manthan
                </h2>
                <p>
                  Manthan Events is a leading event management company based in
                  Indore, specializing in crafting unforgettable experiences tailored
                  to our clients' needs.
                </p>
                <p>
                  With a commitment to excellence, we excel in organizing corporate
                  conferences, weddings, and social gatherings. Our dedicated team
                  ensures every detail is meticulously planned and executed.
                </p>
                <p className='p'>
                  Services include:
                  <ul  style={{ listStyleType: 'disc'  , marginLeft:'2rem'} }>
                    <li>Corporate Events</li>
                    <li>Merchandising</li>
                    <li>Exhibitions</li>
                    <li>Promotion Activities</li>
                    <li>Roadshow Management</li>
                    <li>Product Launch Services</li>
                    <li>Brand Activation & BTL Activation</li>
                    <li>Indoor-Outdoor Branding & Fabrication</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
           <div className="col-xl-5 col-lg-6 offset-xl-1">
            <div className="contact-form-box">
              <h3 className="title">Get a free consultation now</h3>
              <div
                className="axil-contact-form"
              >
                
                          
                      <div className="">
                        <div className="contact-info mb--50 mb_md--30 mt_md--0 mt-10">
                          <h4 className="title">Phone</h4>
                          <p>Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm</p>
                          <h6 className="phone-number " style={{fontSize:'25px' , marginTop:'1rem'}} >
                            <a href="tel:1234567890">+91 8839154974</a>
                          </h6>
                        </div>
                        <div className="contact-info mb--30">
                          <h4 className="title">Email</h4>
                          <p>
                            Our support team will get back to in 48-h during standard
                            business hours.
                          </p>
                          <h4 className="phone-number" style={{fontSize:'25px' , marginTop:'1rem'}}>
                            <a href="mailto:info@example.com">info@consultquark.com</a>
                          </h4>
                        </div>
                      </div>
               
                
                <input
                  type="hidden"
                  className="form-control"
                  name="contact-message"
                  defaultValue="Null"
                />
              </div>
              <div className="flex justify-around mt-6">
          <a href="tel:+123456789" className="text-gray-600 hover:text-blue-600">
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </a>
          <a href="mailto:example@mail.com" className="text-gray-600 hover:text-blue-600">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a href="https://www.facebook.com" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
            </div>
          </div> 



      {/* /********************************************************* */}
        </div>
      </div>

  <ul className="shape-group-6 list-unstyled">
    <li className="shape shape-1">
      <img src="assets/media/others/bubble-7.png" alt="Bubble" />
    </li>
    <li className="shape shape-2">
      <img src="assets/media/others/line-4.png" alt="line" />
    </li>
    <li className="shape shape-3">
      <img src="assets/media/others/line-5.png" alt="line" />
    </li>
  </ul>
</section>
    </div>
  )
}

export default AboutAreaH

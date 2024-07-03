import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Footer() {
      const today = new Date();
      const year = today.getFullYear();
  return (
    <>
      {/*=====================================*/}
      {/*=        Footer Area Start       	=*/}
      {/*=====================================*/}
      <footer className="footer-area">
        <div className="container">
          <div className="footer-top">
            <div className="footer-social-link">
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
          <div className="footer-main">
  <div className="row">
    <div className="col-xl-6 col-lg-5">
      <div className="footer-widget border-end">
        <div className="footer-newsletter">
          <h2 className="title">Get in Touch!</h2>
          <p>
            Connect with us to start planning your next memorable event. We're
            here to bring your vision to life.
          </p>
          <form>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email Address"
              />
              <button className="subscribe-btn" type="submit">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="col-xl-6 col-lg-7">
      <div className="row">
        <div className="col-sm-6">
          <div className="footer-widget">
            <h6 className="widget-title">Our Services</h6>
            <div className="footer-menu-link">
              <ul className="list-unstyled">
                <li>
                  <a href="/services#corporate-events">Corporate Events</a>
                </li>
                <li>
                  <a href="/services#merchandising">Merchandising</a>
                </li>
                <li>
                  <a href="/services#exhibitions">Exhibitions</a>
                </li>
                <li>
                  <a href="/services#brand-activation">Brand Activation</a>
                </li>
                <li>
                  <a href="/services#roadshows">Roadshows</a>
                </li>
                <li>
                  <a href="/services#product-launches">Product Launches</a>
                </li>
                <li>
                  <a href="/services#fabrication">Fabrication</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="footer-widget">
            <h6 className="widget-title">Resources</h6>
            <div className="footer-menu-link">
              <ul className="list-unstyled">
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/case-studies">Case Studies</a>
                </li>
                <li>
                  <a href="/portfolio">Portfolio</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="footer-widget">
            <h6 className="widget-title">Support</h6>
            <div className="footer-menu-link">
              <ul className="list-unstyled">
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-of-use">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          <div
            className="footer-bottom"
            //data-sal="slide-up"
            //data-sal-duration={500}
            //data-sal-delay={100}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="footer-copyright">
                  <span className="copyright-text">
                    © {year} -  All rights reserved by{" "}
                    <a href="https://axilthemes.com/">Quark Consulting</a>.
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-bottom-link">
                  <ul className="list-unstyled">
                    <li>
                      <a href="privacy-policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="terms-of-use.html">Terms of Use</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    
    </>
  );
}

export default Footer

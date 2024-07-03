import React from 'react'
import HeaderH from '../components/HeaderH'
import Footer from '../components/Footer'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const officeIcon = new L.Icon({
  iconUrl: 'path/to/your/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});


const ContactUs = () => {
  const position = [22.7207277, 75.902701];
  return (
    <>
    <div id="main-wrapper" className="main-wrapper">
      <HeaderH/>
      {/*=====================================*/}
      {/*=       Breadcrumb Area Start       =*/}
      {/*=====================================*/}
      <div className="breadcrum-area ">
        <div className="container">
          <div className="breadcrumb">
          <ul class="list-unstyled">
                        <li>Home</li>
                        <li class="active">Contact</li>
                    </ul>
            <h1 className="title h2">Contact Us</h1>
          </div>
        </div>
        <ul className="shape-group-8 list-unstyled">
          <li
            className="shape shape-1"
            // data-sal="slide-right"
            // data-sal-duration={500}
            // data-sal-delay={100}
          >
            <img src="assets/media/others/bubble-9.png" alt="Bubble" />
          </li>
          <li
            className="shape shape-2"
            // data-sal="slide-left"
            // data-sal-duration={500}
            // data-sal-delay={200}
          >
            <img src="assets/media/others/bubble-17.png" alt="Bubble" />
          </li>
          <li
            className="shape shape-3"
            // data-sal="slide-up"
            // data-sal-duration={500}
            // data-sal-delay={300}
          >
            <img src="assets/media/others/line-4.png" alt="Line" />
          </li>
        </ul>
      </div>
      {/*=====================================*/}
      {/*=       Contact  Area Start        =*/}
      {/*=====================================*/}
      <section className="section section-padding">
        <div className="container">
          <div className="row">
            {/* <div className="col-xl-5 col-lg-6">
              <div className="contact-form-box shadow-box mb--30">
                <h3 className="title">Get a free Keystroke quote now</h3>
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
            </div> */}
            <div className=" flex">
              <div className="contact-info mb--100 mb_md--30 mt_md--0 mx-2 w-full">
                <h4 className="title">Phone</h4>
                <p>Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm</p>
                <h4 className="phone-number">
                  <a href="tel:1234567890">+91 8839154974</a>
                </h4>
              </div>
              <div className="contact-info mb--100 mb_md--30 mt_md--0 w-full ml-10">
                <h4 className="title">Email</h4>
                <p>
                  Our support team will get back to in 48-h during standard
                  business hours.
                </p>
                <h4 className="phone-number">
                  <a href="mailto:info@example.com">info@consultquark.com</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <ul className="list-unstyled shape-group-12">
          <li className="shape shape-1">
            <img src="assets/media/others/bubble-2.png" alt="Bubble" />
          </li>
          <li className="shape shape-2">
            <img src="assets/media/others/bubble-1.png" alt="Bubble" />
          </li>
          <li className="shape shape-3">
            <img src="assets/media/others/circle-3.png" alt="Circle" />
          </li>
        </ul>
      </section>
      {/*=====================================*/}
      {/*=       Location  Area Start        =*/}
      {/*=====================================*/}
      <section className="section section-padding bg-color-dark overflow-hidden">
        <div className="container">
          <div className="section-heading heading-light-left">
            <span className="subtitle">Find Us</span>
            <h2 className="title">Our office</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="office-location">
                <div className="thumbnail">
                  <img src="assets/media/others/location-1.png" alt="Office" />
                </div>
                <div className="content">
                  <h4 className="title">
                    Indore, India
                  </h4>
                  <p>SH-69 HIG Colony, Vijay Nagar</p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-sm-6">
              <div className="office-location">
                <div className="thumbnail">
                  <img src="assets/media/others/location-2.png" alt="Office" />
                </div>
                <div className="content">
                  <h4 className="title">Nevada</h4>
                  <p>46 Watsica Creek Suite 071 United States</p>
                </div>
              </div>
            </div> */}
                          <div className=" absolute top-36 right-2" style={{ height: '80vh', width: '70%' }}>
                    <MapContainer center={position} zoom={13} className="w-full h-full">
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={position} icon={officeIcon}>
                        <Popup>
                          <span>Your Office Location</span>
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </div>
          </div>
        </div>
        <ul className="shape-group-11 list-unstyled">
          <li className="shape shape-1">
            <img src="assets/media/others/line-6.png" alt="line" />
          </li>
          <li className="shape shape-2">
            <img src="assets/media/others/circle-3.png" alt="line" />
          </li>
        </ul>
      </section>
      {/*=====================================*/}
      {/*=        Footer Area Start       	=*/}
      {/*=====================================*/}
      <Footer/>
      {/*=====================================*/}
      {/*=       Offcanvas Menu Area       	=*/}
      {/*=====================================*/}
    </div>
    {/* Jquery Js */}
    {/* Site Scripts */}
  </>
  
  )
}

export default ContactUs

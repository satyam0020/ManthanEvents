import React from 'react'
import HeaderH from '../components/HeaderH'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'
const Services = () => {
  return (
    <>
  <div id="main-wrapper" className="main-wrapper " style={{marginRight:'0px'}}>
  <HeaderH/>
    {/*=====================================*/}
    {/*=       Breadcrumb Area Start       =*/}
    {/*=====================================*/}
    <div className="breadcrum-area breadcrumb-banner " style={{marginRight:'0px'}}>
      <div className="container" style={{marginRight:'0px'}}>
        
        <div
          className="section-heading heading-left " style={{marginRight:'0px'}}
          // data-sal="slide-right"
          // data-sal-duration={1000}
          // data-sal-delay={300}
        >
          <h1 className="title h2">Best solutions for your business</h1>
          <p>
            Give your business a unique logo to stand out from crowd. We’ll
            create logo specifically for your company.
          </p>
        </div>
        <div
          className="banner-thumbnail"
          // data-sal="slide-up"
          // data-sal-duration={1000}
          // data-sal-delay={400}
        >
          <img
            className="paralax-image"
            src="assets/media/banner/banner-thumb-4.png"
            alt="Illustration"
          />
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
          <img src="assets/media/others/bubble-21.png" alt="Bubble" />
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
    {/*=        Service Area Start         =*/}
    {/*=====================================*/}
    <div className="service-scroll-navigation-area">
      {/* Service Nav */}
      <nav id="onepagenav" className="service-scroll-nav navbar onepagefixed">
        <div className="container">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="#section1">
                Corporate Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section2">
              Merchandising
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section3">
              Exhibitions And Promotion
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section4">
                RoadShow 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section5">
                Product Launch
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section6">
                Brand Activation And Promotion
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Design Service */}
      <div className="section section-padding" id="section1">
        <div className="container">
          <div className="section-heading heading-left">
            <span className="subtitle">Service</span>
            <h2 className="title">Corporate Events</h2>
          </div>
  <div className="row">
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={100}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-29.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-corporate.html">Corporate Event Planning</a>
        </h5>
        <p>
          Expert planning and execution for all types of corporate events, ensuring professionalism and excellence.
        </p>
        <a href="service-corporate.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={200}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-27.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-corporate.html">Corporate Meetings</a>
        </h5>
        <p>
          Professional organization of corporate meetings, ensuring all details are managed seamlessly.
        </p>
        <a href="service-corporate.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={300}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-28.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-corporate.html">Corporate Conferences</a>
        </h5>
        <p>
          Comprehensive management of corporate conferences, from venue selection to logistics and execution.
        </p>
        <a href="service-corporate.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={100}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-4.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-corporate.html">Corporate Seminars</a>
        </h5>
        <p>
          Tailored corporate seminars designed to educate and engage your audience effectively.
        </p>
        <a href="service-corporate.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={200}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-30.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-corporate.html">Corporate Retreats</a>
        </h5>
        <p>
          Organizing corporate retreats that foster team building and enhance company culture.
        </p>
        <a href="service-corporate.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
      {/* Development Service */}
      <div className="section section-padding bg-color-light" id="section2">
        <div className="container">
          <div className="section-heading heading-left">
            <span className="subtitle">Service</span>
            <h2 className="title">Merchandising</h2>
          </div>
          <div className="row">
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={100}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-31.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-merchandising.html">Product Merchandising</a>
        </h5>
        <p>
          Expert product merchandising strategies to enhance product visibility and sales.
        </p>
        <a href="service-merchandising.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={200}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-32.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-merchandising.html">
          Visual Merchandising
          </a>
        </h5>
        <p>
        Creating visually appealing displays to attract customers and boost sales.
        </p>
        <a href="service-merchandising.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={200}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-32.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-merchandising.html">
            In-Store Merchandising
          </a>
        </h5>
        <p>
          Designing effective in-store displays to maximize product exposure and drive purchases.
        </p>
        <a href="service-merchandising.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={300}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-33.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-merchandising.html">Online Merchandising</a>
        </h5>
        <p>
          Implementing online merchandising tactics to improve product discoverability and conversion rates.
        </p>
        <a href="service-merchandising.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>

      {/* Online Marketing Service */}
      <div className="section section-padding" id="section3">
        <div className="container">
          <div className="section-heading heading-left">
            <span className="subtitle">Service</span>
            <h2 className="title">Exhibitions And Promotion Activities</h2>
          </div>
          <div className="row">
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={100}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-34.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-exhibitions.html">Exhibition Planning</a>
        </h5>
        <p>
          Comprehensive planning and execution of exhibitions to showcase your brand and products effectively.
        </p>
        <a href="service-exhibitions.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={200}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-35.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-exhibitions.html">Promotional Activities</a>
        </h5>
        <p>
          Innovative promotional activities designed to engage your audience and boost brand awareness.
        </p>
        <a href="service-exhibitions.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={300}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-36.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-exhibitions.html">Event Promotions</a>
        </h5>
        <p>
          Effective event promotion strategies to ensure high attendance and maximum exposure.
        </p>
        <a href="service-exhibitions.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={100}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-37.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-exhibitions.html">Trade Show Management</a>
        </h5>
        <p>
          Managing trade shows from start to finish, ensuring a seamless and successful experience.
        </p>
        <a href="service-exhibitions.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
  {/* <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={200}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-38.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-exhibitions.html">Roadshows</a>
        </h5>
        <p>
          Organizing impactful roadshows to take your brand and message directly to your audience.
        </p>
        <a href="service-exhibitions.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div> */}
</div>

        </div>
      </div>


      {/* Business Service */}
      <div className="section section-padding bg-color-light" id="section4">
        <div className="container">
          <div className="section-heading heading-left">
            <span className="subtitle">Service</span>
            <h2 className="title">RoadShow Management</h2>
          </div>
          <div className="row">
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={100}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-39.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-roadshow.html">Logistics Planning</a>
        </h5>
        <p>
          Comprehensive logistics planning to ensure seamless roadshow execution, covering every detail from transportation to setup.
        </p>
        <a href="service-roadshow.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={200}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-40.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-roadshow.html">Audience Engagement</a>
        </h5>
        <p>
          Tailored strategies to maximize audience engagement and interaction during your roadshow events.
        </p>
        <a href="service-roadshow.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={300}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-41.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-roadshow.html">Venue Selection</a>
        </h5>
        <p>
          Expert venue selection to ensure optimal locations for your roadshow events, enhancing reach and impact.
        </p>
        <a href="service-roadshow.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={100}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-42.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-roadshow.html">Event Coordination</a>
        </h5>
        <p>
          End-to-end event coordination to ensure your roadshow runs smoothly, from planning to execution.
        </p>
        <a href="service-roadshow.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>

      {/* Technology Service */}
      <div className="section section-padding" id="section5">
        <div className="container">
          <div className="section-heading heading-left">
            <span className="subtitle">Service</span>
            <h2 className="title">Product Launch Services</h2>
          </div>
          <div className="row">
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={100}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-43.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-launch.html">Pre-Launch Strategy</a>
        </h5>
        <p>
          Develop a comprehensive pre-launch strategy to create buzz and anticipation for your product launch.
        </p>
        <a href="service-launch.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={200}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-44.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-launch.html">Launch Event Planning</a>
        </h5>
        <p>
          Plan and execute a memorable product launch event that highlights the key features and benefits of your new product.
        </p>
        <a href="service-launch.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
      {/* Content strategy Service */}
      <div className="section section-padding bg-color-light" id="section6">
        <div className="container">
          <div className="section-heading heading-left">
            <span className="subtitle">Service</span>
            <h2 className="title">Brand Activation And Promotion</h2>
          </div>
          <div className="row">
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={100}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-45.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-brand-activation.html">
            Experiential Marketing
          </a>
        </h5>
        <p>
          Create immersive experiences that connect your brand with customers on a personal level, enhancing brand recall and loyalty.
        </p>
        <a href="service-brand-activation.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={200}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-46.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-brand-activation.html">
            Guerrilla Marketing
          </a>
        </h5>
        <p>
          Utilize unconventional marketing tactics to grab attention and create a memorable impact, driving word-of-mouth and social media buzz.
        </p>
        <a href="service-brand-activation.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
  <div
    className="col-lg-4 col-md-6"
    // data-sal="slide-up"
    // data-sal-duration={800}
    // data-sal-delay={300}
  >
    <div className="services-grid service-style-2">
      <div className="thumbnail">
        <img src="assets/media/icon/icon-47.png" alt="icon" />
      </div>
      <div className="content">
        <h5 className="title">
          {" "}
          <a href="service-brand-activation.html">
            Street Teams
          </a>
        </h5>
        <p>
          Deploy dynamic street teams to engage with potential customers in high-traffic areas, offering samples, information, and a direct brand experience.
        </p>
        <a href="service-brand-activation.html" className="more-btn">
          Find out more
        </a>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
    <CallToAction/>
    <Footer/>
  </div>
  {/* Jquery Js */}
  {/* Site Scripts */}
</>

  )
}

export default Services

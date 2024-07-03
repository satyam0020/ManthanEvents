import React from 'react'
import HeaderH from '../components/HeaderH'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'

const AboutUs = () => {
  return (
    <div>
      <HeaderH/>
      <>
 
      <div id="main-wrapper" className="main-wrapper ">
   
  
   {/*=====================================*/}
   {/*=       Breadcrumb Area Start       =*/}
   {/*=====================================*/}
   <div className="breadcrum-area breadcrumb-banner">
     <div className="container">
       <div
         className="section-heading heading-left"
         //data-sal="slide-right"
         // data-sal-duration={1000}
         // // // // data-sal-delay={300}
       >
        
         <h1 className="title h2">Event Management Manthan</h1>
         <p>
           Bringing innovative event solutions to life.
         </p>
       </div>
       <div
         className="banner-thumbnail thumbnail-4"
         // data-sal="slide-up"
         // // data-sal-duration={1000}
         // data-sal-delay={400}
       >
         <img
           src="assets/media/banner/banner-thumb-3.png"
           alt="Illustration"
         />
       </div>
     </div>
     <ul className="shape-group-8 list-unstyled">
       <li
         className="shape shape-1"
         //data-sal="slide-right"
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
         <img src="assets/media/others/bubble-22.png" alt="Bubble" />
       </li>
       <li
         className="shape shape-3"
         // data-sal="slide-up"
          // data-sal-duration={500}
         // // // // data-sal-delay={300}
       >
         <img src="assets/media/others/line-4.png" alt="Line" />
       </li>
     </ul>
   </div>
   {/*=====================================*/}
   {/*=       About  Area Start        =*/}
   {/*=====================================*/}
   <section className="section section-padding case-study-featured-area">
     <div className="container">
       <div className="row">
         <div className="col-xl-7 col-lg-6">
           <div className="case-study-featured-thumb text-start">
           
             <img src="assets/media/about/pexels-jibarofoto-2774556.jpg"alt="travel" />
           </div>
         </div>
         <div className="col-xl-5 col-lg-6">
           <div className="case-study-featured">
             <div className="section-heading heading-left">
               <span className="subtitle">Who we are</span>
               <h2 className="title">Empowering unforgettable events</h2>
               <p>
                 Event Management Manthan is your premier partner for crafting extraordinary events that leave a lasting impression.
               </p>
               <p>
                 Join us to turn your vision into reality with creativity and precision.
               </p>
               <a href="google.com" className="axil-btn btn-fill-primary btn-large">
                 Discover More
               </a>
             </div>
             <div className="case-study-counterup">
               <div className="single-counterup">
                 <h2 className="count-number">
                   <span className="number count" data-count={10}>
                     12 
                   </span>
                   <span className="symbol">+</span>
                 </h2>
                 <span className="counter-title">Years of Excellence</span>
               </div>
               <div className="single-counterup">
                 <h2 className="count-number">
                   <span className="number count" data-count={160}>
                     160
                   </span>
                   <span className="symbol">+</span>
                 </h2>
                 <span className="counter-title">
                   Successful Events
                 </span>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
  

    {/*=====================================*/}
    {/*=      About  Quality Area Start    =*/}
    {/*=====================================*/}
    <section className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
  <div className="container">
    <div className="section-heading heading-light-left mb--100">
      <span className="subtitle">Our Values</span>
      <h2 className="title">Why should you work with us?</h2>
      <p className="opacity-50">
        At Manthan, we prioritize excellence, creativity, and collaboration. Here's why partnering with us is the right choice for your event:
      </p>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className="about-quality active">
          <h3 className="sl-number">1</h3>
          <h5 className="title">
            Commitment to Flawless Execution:
          </h5>
          <p>
            Ensuring every detail is meticulously planned and executed to create seamless and memorable events.
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="about-quality">
          <h3 className="sl-number">2</h3>
          <h5 className="title">
            Creative and Innovative Solutions:
          </h5>
          <p>
            Bringing fresh ideas and the latest trends to the table to craft unique and engaging experiences.
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="about-quality">
          <h3 className="sl-number">3</h3>
          <h5 className="title">
            Collaborative Approach:
          </h5>
          <p>
            Working closely with our clients to understand their vision and deliver events that exceed their expectations.
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="about-quality">
          <h3 className="sl-number">4</h3>
          <h5 className="title">
            Attention to Detail:
          </h5>
          <p>
            Meticulously managing every aspect of the event to ensure nothing is overlooked and everything runs smoothly.
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="about-quality">
          <h3 class="sl-number">5</h3>
          <h5 class="title">
            Client-Centric Focus:
          </h5>
          <p>
            Putting our clients' needs and desires at the forefront, creating events that truly reflect their brand and message.
          </p>
        </div>
      </div>
    </div>
  </div>
  <ul className="list-unstyled shape-group-10">
    <li className="shape shape-1">
      <img src="assets/media/others/circle-1.png" alt="Circle" />
    </li>
    <li className="shape shape-2">
      <img src="assets/media/others/line-3.png" alt="Circle" />
    </li>
    <li className="shape shape-3">
      <img src="assets/media/others/bubble-5.png" alt="Circle" />
    </li>
  </ul>
</section>

    {/*=====================================*/}
    {/*=       About Team  Area Start      =*/}
    {/*=====================================*/}
    <section className="section-padding-equal">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-7">
        <div className="about-team">
          <div className="thumbnail">
            <img src="assets/media/about/ourTeam1.jpg" alt="thumbnail" className='h-1/3 w-full'/>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="about-team">
          <div className="section-heading heading-left">
            <span className="subtitle">Our Team</span>
            <h2>Creating Exceptional Events Together.</h2>
            <p>
              At Manthan, our team is the heart of our success. With a shared passion for perfection and innovation, we work collaboratively to transform your vision into reality. Together, we bring unparalleled creativity and precision to every event we manage.
            </p>
            <a
              href="team.html"
              className="axil-btn btn-large btn-fill-primary"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    {/*=====================================*/}
    {/*=       Work Process Area Start     =*/}
    {/*=====================================*/}
    <section className="section section-padding bg-color-light pb--70">
  <div className="container">
    <div className="section-heading mb--90">
      <span className="subtitle">Process</span>
      <h2 className="title">HOW IT WORKS</h2>
    </div>
    <div className="process-work">
      <div className="thumbnail paralax-image">
        <img src="assets/media/others/process-1.png" alt="Thumbnail" />
      </div>
      <div className="content">
        <span className="subtitle">Step One</span>
        <h3 className="title">Conceptualization</h3>
        <p>
          We begin by understanding your vision and requirements. Our team brainstorms creative ideas to develop a concept that aligns perfectly with your event objectives.
        </p>
      </div>
    </div>
    <div className="process-work content-reverse">
      <div className="thumbnail paralax-image">
        <img src="assets/media/others/process-2.png" alt="Thumbnail" />
      </div>
      <div className="content">
        <span className="subtitle">Step Two</span>
        <h3 className="title">Planning</h3>
        <p>
          Detailed planning is crucial. We create a comprehensive plan covering all aspects of the event, from logistics and scheduling to budgeting and resource allocation.
        </p>
      </div>
    </div>
    <div className="process-work">
      <div className="thumbnail paralax-image">
        <img src="assets/media/others/process-3.png" alt="Thumbnail" />
      </div>
      <div className="content">
        <span className="subtitle">Step Three</span>
        <h3 className="title">Execution</h3>
        <p>
          Our experienced team ensures flawless execution on the day of the event. We manage every detail, coordinating seamlessly to create a memorable experience for your guests.
        </p>
      </div>
    </div>
    <div className="process-work content-reverse">
      <div className="thumbnail paralax-image">
        <img src="assets/media/others/process-4.png" alt="Thumbnail" />
      </div>
      <div className="content">
        <span className="subtitle">Step Four</span>
        <h3 className="title">Post-Event Support</h3>
        <p>
          Our commitment doesn't end when the event does. We provide post-event support, including feedback collection, analysis, and any necessary follow-ups to ensure complete client satisfaction.
        </p>
      </div>
    </div>
  </div>
  <ul className="shape-group-17 list-unstyled">
    <li className="shape shape-1">
      <img src="assets/media/others/bubble-24.png" alt="Bubble" />
    </li>
    <li className="shape shape-2">
      <img src="assets/media/others/bubble-23.png" alt="Bubble" />
    </li>
    <li className="shape shape-3">
      <img src="assets/media/others/line-4.png" alt="Line" />
    </li>
    <li className="shape shape-4">
      <img src="assets/media/others/line-5.png" alt="Line" />
    </li>
    <li className="shape shape-5">
      <img src="assets/media/others/line-4.png" alt="Line" />
    </li>
    <li className="shape shape-6">
      <img src="assets/media/others/line-5.png" alt="Line" />
    </li>
  </ul>
</section>

    
    <CallToAction/>
    <Footer/>
  </div>
  {/* Jquery Js */}
  {/* Site Scripts */}
</>

    </div>
  )
}

export default AboutUs

import React from 'react'

const TestimonialAreaH = () => {
  return (
    <div>
            {/*=====================================*/}
      {/*=        Testimonial Area Start      =*/}
      {/*=====================================*/}
      <section className="section section-padding">
  <div className="container">
    <div className="section-heading heading-left">
      <span className="subtitle">Testimonials</span>
      <h2 className="title">WHAT OUR CLIENTS SAY</h2>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className="testimonial-grid active">
          <p>
            “Manthan Events exceeded our expectations. Their attention to
            detail and dedication made our event truly unforgettable.”
          </p>
          <div className="author-info">
            <div className="thumb">
              <img
                src="assets/media/testimonial/testimonial-1.png"
                alt="Client 1"
              />
            </div>
            <div className="content">
              <span className="name">James Walley</span>
              <span className="designation">CrockyTrail Ltd</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="testimonial-grid">
          <p>
            “Working with Manthan Events was a breeze. They handled every
            aspect of our event with professionalism and creativity.”
          </p>
          <div className="author-info">
            <div className="thumb">
              <img
                src="assets/media/testimonial/testimonial-2.png"
                alt="Client 2"
              />
            </div>
            <div className="content">
              <span className="name">Jared Kogan</span>
              <span className="designation">Giggle Finance</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="testimonial-grid">
          <p>
            “Manthan Events delivered beyond our expectations. Their
            professionalism and creativity made our event a resounding success.”
          </p>
          <div className="author-info">
            <div className="thumb">
              <img
                src="assets/media/testimonial/testimonial-3.png"
                alt="Client 3"
              />
            </div>
            <div className="content">
              <span className="name">Maurice Kroon</span>
              <span className="designation">Lean Toolkit BV</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ul className="shape-group-4 list-unstyled">
    <li className="shape-1">
      <img src="assets/media/others/bubble-1.png" alt="Bubble" />
    </li>
  </ul>
</section>

    </div>
  )
}

export default TestimonialAreaH

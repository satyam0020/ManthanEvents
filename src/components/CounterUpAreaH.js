import React from 'react'
import Counter from './Counter'
const CounterUpAreaH = () => {
  return (
    <div>

      {/*=====================================*/}
      {/*=        Counter Up Area Start      =*/}
      {/*=====================================*/}
      <section className="section section-padding bg-color-dark">
        <div className="container">
          <div className="section-heading heading-light">
            <span className="subtitle">Our Accomplishments</span>
            <h2 className="title">
            Crafting Unforgettable Event Experiences with Precision and Passion{" "}
            </h2>
            {/* <p>
              In vel varius turpis, non dictum sem. Aenean in efficitur ipsum,
              in egestas ipsum. Mauris in mi ac tellus.
            </p> */}
          </div>
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="counterup-progress active">
                <div className="icon">
                  <img src="assets/media/icon/icon-7.png" alt="Apple" />
                </div>
                <Counter targetNumber={60}/>
                <h6 className="title">Happy Client</h6>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="counterup-progress">
                <div className="icon">
                  <img src="assets/media/icon/icon-8.png" alt="Apple" />
                </div>
                
                    <Counter targetNumber={160}/>
                  
                <h6 className="title">Projects deliverd</h6>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="counterup-progress">
                <div className="icon">
                  <img src="assets/media/icon/apple.png" alt="Apple" />
                </div>
                <Counter targetNumber={10}/>
                <h6 className="title">Years Of Experience</h6>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="counterup-progress">
                <div className="icon">
                  <img src="assets/media/icon/icon-9.png" alt="Apple" />
                </div>
                <Counter targetNumber={18}/>
                <h6 className="title">Specialists</h6>
              </div>
            </div>
          </div>
        </div>
        <ul className="list-unstyled shape-group-10">
          {/* <li class="shape shape-1"><img src="assets/media/others/line-9.png" alt="Circle"></li> */}
          <li className="shape shape-2">
            <img src="assets/media/others/bubble-42.png" alt="Circle" />
          </li>
          <li className="shape shape-3">
            <img src="assets/media/others/bubble-43.png" alt="Circle" />
          </li>
        </ul>
      </section>
    </div>
  )
}

export default CounterUpAreaH

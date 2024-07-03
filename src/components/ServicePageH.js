import { Link } from 'react-router-dom';



const ServicesPageH = () => {
  return (
    <>
      <section className="section section-padding-2 bg-color-dark">
        <div className="container">
          <div className="section-heading heading-light-left">
            <span className="subtitle">What We Can Do For You</span>
            <h2 className="title">Services we can help you with</h2>
            {/* <p className="opacity-50">
              Nulla facilisi. Nullam in magna id dolor blandit rutrum eget
              vulputate augue sed eu imperdiet.
            </p> */}
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="services-grid active">
                <div className="thumbnail">
                  <img src="assets/media/icon/icon-1.png" alt="icon" />
                </div>
                <div className="content">
                    <h5 className="title h5">
                      
                      <Link to="/services">Corporate Event</Link>
                    </h5>
                    <p className="p">
                      Tailored solutions for flawless corporate events, ensuring seamless
                      execution and memorable experiences.
                    </p>
                    <Link to="/services" className="more-btn">
                      Discover our services
                    </Link>
                  </div>

              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="services-grid">
                <div className="thumbnail">
                  <img src="assets/media/icon/icon-2.png" alt="icon" />
                </div>
                <div className="content">
                    <h5 className="title h5">
                      {" "}
                      <Link to="/services">Merchandising Solutions</Link>
                    </h5>
                    <p className="p">
                      Strategic merchandising solutions designed to maximize product visibility
                      and sales, tailored to meet your brand's unique needs.
                    </p>
                    <Link to="/services" className="more-btn">
                      Explore our offerings
                    </Link>
                  </div>

              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="services-grid">
                <div className="thumbnail">
                  <img src="assets/media/icon/icon-3.png" alt="icon" />
                </div>
                <div className="content">
  <h5 className="title h5">
    {" "}
    <Link to="/services">Exhibitions and Promotion Activities</Link>
  </h5>
  <p className="p">
    Comprehensive solutions for impactful exhibitions and promotion activities,
    ensuring maximum audience engagement and brand visibility.
  </p>
  <Link to="/services" className="more-btn">
    Learn more about our services
  </Link>
</div>

              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="services-grid">
                <div className="thumbnail">
                  <img src="assets/media/icon/icon-4.png" alt="icon" />
                </div>
                <div className="content">
  <h5 className="title h5">
    {" "}
    <Link to="/services">Roadshow Management</Link>
  </h5>
  <p className="p">
    Strategic planning and execution of dynamic roadshows to amplify brand
    presence and engage diverse audiences effectively.
  </p>
  <Link to="/services" className="more-btn">
    Discover our roadshow services
  </Link>
</div>

              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="services-grid">
                <div className="thumbnail">
                  <img src="assets/media/icon/icon-5.png" alt="icon" />
                </div>
                <div className="content">
  <h5 className="title h5">
    {" "}
    <Link to="/services">Product Launch Services</Link>
  </h5>
  <p className='p'>
    Comprehensive services for successful product launches, from strategic
    planning to flawless execution, ensuring maximum visibility and impact.
  </p>
  <Link to="/services" className="more-btn">
    Explore our product launch solutions
  </Link>
</div>

              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="services-grid">
                <div className="thumbnail">
                  <img src="assets/media/icon/icon-6.png" alt="icon" />
                </div>
                <div className="content">
  <h5 className="title h5">
    {" "}
    <Link to="/services">Brand Activation & Promotion</Link>
  </h5>
  <p className="p">
    Expert solutions for brand activation, BTL activation, indoor-outdoor
    branding, and fabrication to elevate your brand presence effectively.
  </p>
  <Link to="/services" className="more-btn">
    Discover our services
  </Link>
</div>

              </div>
            </div>
          </div>
        </div>
        <ul className="list-unstyled shape-group-10">
          <li className="shape shape-1">
            <img src="assets/media/others/line-9.png" alt="Circle" />
          </li>
          <li className="shape shape-2">
            <img src="assets/media/others/bubble-42.png" alt="Circle" />
          </li>
          <li className="shape shape-3">
            <img src="assets/media/others/bubble-43.png" alt="Circle" />
          </li>
        </ul>
      </section>




      <div className="py-8 section section-padding-2 ">
      <h2 className="text-3xl font-semibold text-center mb-12">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative mb-10">
          <img src="assets/media/project/project-1.jpg" alt="Corporate Events" className="w-full h-96 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            
          </div>
        </div>
        <div className="relative">
          {/* <img src=""  className="w-full h-64 object-cover" /> */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-blue-900">Virtual Events</h3>
              <button className="mt-2 bg-blue-400 text-white py-2 px-4 rounded">More Details</button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="assets/media/project/project-1.jpg" alt="Hybrid Events" className="w-full h-96 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white">Hybrid Events</h3>
              <button className="mt-2 bg-white text-blue-700 py-2 px-4 rounded">More Details</button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
            <h3 className="text-2xl font-semibold text-blue-900">Team Building</h3>
            <button className="mt-2 bg-blue-400 text-white py-2 px-4 rounded">More Details</button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="assets/media/project/project-1.jpg" alt="Team Building" className="w-full h-96 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
            <h3 className="text-2xl font-semibold text-blue-900">Team Building</h3>
            <button className="mt-2 bg-blue-400 text-white py-2 px-4 rounded">More Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default ServicesPageH;

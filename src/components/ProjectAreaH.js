import React from 'react'
import { Link } from 'react-router-dom'
const ProjectAreaH = () => {
  return (
    <div>
       <section className="section section-padding-2">
        <div className="container">
          <div className="section-heading heading-left mb--40">
            <span className="subtitle">Our Project</span>
            <h2 className="title">
              Some of our <br /> finest work.
            </h2>
          </div>
          <div className="axil-isotope-wrapper">
            {/* <div className="isotope-button isotope-project-btn">
              <button data-filter="*" className="is-checked">
                <span className="filter-text">All Works</span>
              </button>
              <button data-filter=".branding">
                <span className="filter-text">Branding</span>
              </button>
              <button data-filter=".mobile">
                <span className="filter-text">Mobile</span>
              </button>
            </div> */}
            

<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
        </div>
    </div>
</div>

            <div className=" viewAllButton mt-5 flex justify-center ">
              {" "}
              <Link to="/projects">
                <button className="axil-btn btn-fill-primary btn-large viewAllButton">
                  View ALL
                </button>
              </Link>
            </div>
          </div>
        </div>
        <ul className="shape-group-7 list-unstyled">
          <li className="shape shape-1">
            <img src="assets/media/others/circle-2.png" alt="circle" />
          </li>
          {/* <li className="shape shape-2">
            <img src="assets/media/others/bubble-2.png" alt="Line" />
          </li> */}
          <li className="shape shape-3">
            <img src="assets/media/others/bubble-1.png" alt="Line" />
          </li>
        </ul>
      </section>
    </div>
  )
}

export default ProjectAreaH

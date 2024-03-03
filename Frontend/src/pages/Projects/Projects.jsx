import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './projects.css'

import projects from '../../assets/projects-bg.png'
import p1 from '../../assets/project-1.png'
import p2 from '../../assets/project-2.png'
import p3 from '../../assets/project-3.png'

const Projects = () => {

    useEffect(() => {
        AOS.init({
          disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
          startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
          initClassName: "aos-init", // class applied after initialization
          animatedClassName: "aos-animate", // class applied on animation
          useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
          disableMutationObserver: false, // disables automatic mutations' detections (advanced)
          debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
          throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
          // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
          offset: 325, // offset (in px) from the original trigger point
          delay: 0, // values from 0 to 3000, with step 50ms
          duration: 400, // values from 0 to 3000, with step 50ms
          easing: "ease", // default easing for AOS animations
          once: false, // whether animation should happen only once - while scrolling down
          mirror: false, // whether elements should animate out while scrolling past them
          anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
        });
      }, []);
  return (
    <>
    {/* PROJECTS */}

    <section id="projects" className='section-projects' style={{background: `url(${projects})`, backgroundRepeat: 'no-repeat' , backgroundPosition: 'center', backgroundSize: '100% 100%', backgroundAttachment: 'fixed'}} >
      <div className="container-projects">
        <h5 className="section-subheading-projects" data-aos="zoom-in-up">our projects</h5>
        <h2 className="section-heading-projects" data-aos="zoom-in-up">
          check the real innovation od problem solving
        </h2>
        <div className="projects">
          <div className="project" data-aos="fade-right">
            <div className="project_img">
              <img src={p1} alt="" />
            </div>
            <div className="project_content">
              <h3 className="project_category">Development</h3>
              <h3 className="project_title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                molestiae.
              </h3>
              <p className="project_text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                doloribus nam odit amet asperiores odio reiciendis aut facere
                corrupti quod.
              </p>
              <a href="#" className="button-projects btn btn-secondary">View details</a>
            </div>
          </div>

          <div className="project" data-aos="fade-left">
            <div className="project_img">
              <img src={p2} alt="" />
            </div>
            <div className="project_content">
              <h3 className="project_category">Development</h3>
              <h3 className="project_title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                molestiae.
              </h3>
              <p className="project_text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                doloribus nam odit amet asperiores odio reiciendis aut facere
                corrupti quod.
              </p>
              <a href="#" className="button-projects btn btn-secondary">View details</a>
            </div>
          </div>

          <div className="project" data-aos="fade-right">
            <div className="project_img">
              <img src={p3} alt="" />
            </div>
            <div className="project_content">
              <h3 className="project_category">Development</h3>
              <h3 className="project_title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                molestiae.
              </h3>
              <p className="project_text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                doloribus nam odit amet asperiores odio reiciendis aut facere
                corrupti quod.
              </p>
              <a href="" className="button-projects btn btn-secondary">View details</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* PROJECTS */}
    </>
  )
}

export default Projects
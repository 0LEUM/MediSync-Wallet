import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './testimonial.css'
import { FaQuoteLeft } from "react-icons/fa";

import testbg from '../../assets/testimonials-bg.png'
import test from '../../assets/testimonials.png'

const Testimonial = () => {

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
    {/* TESTIMONIALS */}

    <section id="testimonial" style={{background:  `url(${testbg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right', backgroundSize: '100%'}} data-aos="zoom-out-up">
      <div className="container flex-row">
        <div className="testimonials-wrapper">
          <p className="quotes">
            <FaQuoteLeft />
          </p>
          <p className="section-subheading">testimonial;</p>
          <div className="testimonials">
            <div className="testimonial">
              <h1 className="testimonial_title">They are awesome</h1>
              <p className="testimonial_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis quibusdam cum quod rerum error nesciunt totam amet?
                Omnis, quis quas?
              </p>
              <div className="testimonial_author">
                <h3>John Doe</h3>
                <p>Web Developer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-navigation">
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="testimonials_img">
          <img src={test} alt="" />
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    </>
  )
}

export default Testimonial
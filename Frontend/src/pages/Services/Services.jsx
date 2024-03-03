import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './services.css'

import square from '../../assets/squares.png'
import cart from '../../assets/shopping-cart.png'
import camera from '../../assets/video-camera.png'
import headphone from '../../assets/headphones.png'
import placeholder from '../../assets/placeholder.png'
import upload from '../../assets/upload.png'

import { FaArrowRight } from "react-icons/fa";

const Services = () => {

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
    <section id="services" className='section-services' style={{background: 'url(assets/img/services-bg.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', backgroundSize: '100% 80%',}}>
      <div className="container-services">
        <h5 className="section-subheading-services" data-aos="zoom-in-up">What we do</h5>
        <h2 className="section-heading-services right" data-aos="zoom-in-up">
          Services to solve all kind <br /> of business problems
        </h2>
        <div className="services">
          <div className="service" data-aos="fade-up">
            <div className="service_icon">
              <img src={square} alt="" />
            </div>
            <h3 className="services_title">Business Automation</h3>
            <p className="service_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              delectus laborum at, tenetur deserunt dolore animi eos libero a
              sapiente cumque aliquam? Libero, eum quisquam labore esse sit
              rerum nostrum.
            </p>
            <div className="services-arrow-icon">
              <FaArrowRight />
            </div>
          </div>
          <div className="service" data-aos="fade-up">
            <div className="service_icon">
              <img src={cart} alt="" />
            </div>
            <h3 className="services_title">Ecommerce Support</h3>
            <p className="service_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              delectus laborum at, tenetur deserunt dolore animi eos libero a
              sapiente cumque aliquam? Libero, eum quisquam labore esse sit
              rerum nostrum.
            </p>
            <div className="services-arrow-icon">
              <FaArrowRight />
            </div>
          </div>
          <div className="service" data-aos="fade-up">
            <div className="service_icon">
              <img src={camera} alt="" />
            </div>
            <h3 className="services_title">Video Production</h3>
            <p className="service_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              delectus laborum at, tenetur deserunt dolore animi eos libero a
              sapiente cumque aliquam? Libero, eum quisquam labore esse sit
              rerum nostrum.
            </p>
            <div className="services-arrow-icon">
              <FaArrowRight />
            </div>
          </div>
          <div className="service" data-aos="fade-up">
            <div className="service_icon">
              <img src={headphone} alt="" />
            </div>
            <h3 className="services_title">Realtime Support</h3>
            <p className="service_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              delectus laborum at, tenetur deserunt dolore animi eos libero a
              sapiente cumque aliquam? Libero, eum quisquam labore esse sit
              rerum nostrum.
            </p>
            <div className="services-arrow-icon">
              <FaArrowRight />
            </div>
          </div>
          <div className="service" data-aos="fade-up">
            <div className="service_icon">
              <img src={placeholder} alt="" />
            </div>
            <h3 className="services_title">Location Marking</h3>
            <p className="service_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              delectus laborum at, tenetur deserunt dolore animi eos libero a
              sapiente cumque aliquam? Libero, eum quisquam labore esse sit
              rerum nostrum.
            </p>
            <div className="services-arrow-icon">
              <FaArrowRight />
            </div>
          </div>
          <div className="service" data-aos="fade-up">
            <div className="service_icon">
              <img src={upload} alt="" />
            </div>
            <h3 className="services_title">File Upload</h3>
            <p className="service_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              delectus laborum at, tenetur deserunt dolore animi eos libero a
              sapiente cumque aliquam? Libero, eum quisquam labore esse sit
              rerum nostrum.
            </p>
            <div className="services-arrow-icon">
              <FaArrowRight />  
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Services
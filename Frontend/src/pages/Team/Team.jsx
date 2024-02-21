import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './team.css'

import m1 from '../../assets/member-1.png'
import m2 from '../../assets/member-2.png'
import m3 from '../../assets/member-3.png'
import m4 from '../../assets/member-4.png'

const Team = () => {

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
  {/* TEAM */}

  <section id="team" className="container">
    <h5 className="section-subheading text-center" data-aos="zoom-in-up">
      Meet our team
    </h5>
    <h2 className="section-heading text-center right left" data-aos="zoom-in-up">
      Awsome people with great business skills
    </h2>
    <div className="members">
      <div className="member" data-aos="zoom-out">
        <div className="member_img">
          <img src={m1} alt="" />
        </div>
        <div className="member_content">
          <h1>John Doe</h1>
          <p>Web Developer</p>
        </div>
      </div>

      <div className="member" data-aos="zoom-out">
        <div className="member_img">
          <img src={m2} alt="" />
        </div>
        <div className="member_content">
          <h1>John Doe</h1>
          <p>Web Developer</p>
        </div>
      </div>

      <div className="member" data-aos="zoom-out">
        <div className="member_img">
          <img src={m3} alt="" />
        </div>
        <div className="member_content">
          <h1>John Doe</h1>
          <p>Web Developer</p>
        </div>
      </div>

      <div className="member" data-aos="zoom-out">
        <div className="member_img">
          <img src={m4} alt="" />
        </div>
        <div className="member_content">
          <h1>John Doe</h1>
          <p>Web Developer</p>
        </div>
      </div>
    </div>
  </section>

  {/* TEAM */}
  </>  
  )
}

export default Team
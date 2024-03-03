import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaAnchor } from "react-icons/fa6";
import { LuGanttChartSquare } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa";
import './about.css'
import about from '../../assets/about.png'

const About = () => {
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
    <section id="about" className="section-about container-about flex-center-about flex-column-about" >
      <h5 className="section-subheading-about" data-aos="zoom-in-up">
        build trust first
      </h5>
      <h2 className="section-heading-about text-center-about" data-aos="zoom-in-up">
        Control your business with a single tap
      </h2>
      <div className="features-about text-center-about">
        <div className="feature-about" style={{borderColor: '#fe6786'}} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <div className="feature_icon">
            <FaAnchor className='icon1' />
          </div>
          <h3 className="feature_title">Complete business controll</h3>
          <p className="feature_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus voluptatem, eaque reprehenderit deserunt harum expedita
            laudantium quidem, corporis earum non numquam quos minus neque, sunt
            sit mollitia necessitatibus. Quia perferendis delectus magnam,
            possimus consectetur inventore facere modi sequi eum rem neque vitae
            adipisci ab ipsa aliquam enim laudantium, qui molestiae.
          </p>
        </div>
        <div className="feature-about" style={{borderColor: '#5cd8a5'}} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <div className="feature_icon">
            <LuGanttChartSquare className='icon2' />
          </div>
          <h3 className="feature_title">Critical analytics and report</h3>
          <p className="feature_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus voluptatem, eaque reprehenderit deserunt harum expedita
            laudantium quidem, corporis earum non numquam quos minus neque, sunt
            sit mollitia necessitatibus. Quia perferendis delectus magnam,
            possimus consectetur inventore facere modi sequi eum rem neque vitae
            adipisci ab ipsa aliquam enim laudantium, qui molestiae.
          </p>
        </div>
        <div className="feature-about" style={{borderColor: '#fea95b'}} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <div className="feature_icon">
            <FaChartLine className='icon3'/>
          </div>
          <h3 className="feature_title">Business Growth</h3>
          <p className="feature_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus voluptatem, eaque reprehenderit deserunt harum expedita
            laudantium quidem, corporis earum non numquam quos minus neque, sunt
            sit mollitia necessitatibus. Quia perferendis delectus magnam,
            possimus consectetur inventore facere modi sequi eum rem neque vitae
            adipisci ab ipsa aliquam enim laudantium, qui molestiae.
          </p>
        </div>
      </div>
      <div className="about_details flex-center-about">
        <div className="about_details-content" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h1>Most innovative creative team</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            similique facilis nemo architecto error, pariatur id ad repellat,
            animi quia quidem culpa iusto? Tempore harum, error nulla iste
            ducimus quis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit dicta amet laudantium, magnam consequatur quibusdam
            non veniam perspiciatis minus commodi consectetur cum quas autem
            facilis neque? Enim neque porro praesentium.
          </p>
          <a href="#" className="button-about btn btn-primary"> Get Started </a>
        </div>
        <div className="about_details-img" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <img src={about} alt="" />
        </div>
      </div>
    </section>
    </>
  )
}

export default About
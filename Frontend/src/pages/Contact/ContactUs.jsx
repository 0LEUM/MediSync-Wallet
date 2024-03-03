import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './contactus.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";

import contactbg from '../../assets/contact-bg.png'

const ContactUs = () => {

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
    <section id="contact" className='section-contact' style={{background: `url(${contactbg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right', backgroundSize: 'contain',}}>
    <div className="container-contact">
        <h5 className="section-subheading-contact text-center-contact" data-aos="zoom-in-up" >
            contact us
        </h5>
        <h2 className="section-heading-contact text-center-contact left right" data-aos="zoom-in-up">
            Stay connected with us for any reason
        </h2>
        <div className="contact">
            <form action="" className="contact_form" data-aos="zoom-in-right">
                <h1>Write us a message</h1>
                <input type="text" placeholder="your name" required />
                <input type="email" placeholder="your email" required />
                <input type="text" placeholder="subject" required />
                <textarea rows="5" required defaultValue="your message"></textarea>
                <button className="button-contact btn btn-primary">Send Message</button>
            </form>
            <div className="contact_details" data-aos="zoom-in-left">
                <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="details-contact">
                    <div className="detail-contact">
                        <div className="detail_icon-contact">
                            <FaPhoneAlt />
                        </div>
                        <div className="detail_content-contact">
                            <h3>Phone</h3>
                            <p>+123456789</p>
                        </div>
                    </div>
                    <div className="detail-contact">
                        <div className="detail_icon-contact">
                            <FaEnvelope />
                        </div>
                        <div className="detail_content-contact">
                            <h3>Email</h3>
                            <p>abc@gmail.com</p>
                        </div>
                    </div>
                    <div className="detail-contact">
                        <div className="detail_icon-contact">
                            <FaMapMarkedAlt />
                        </div>
                        <div className="detail_content-contact">
                            <h3>Address</h3>
                            <p>123, lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default ContactUs
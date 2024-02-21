import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {

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
    <footer>
      <div className="container" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="200">
        <div className="footer_content">
          <div className="footer_details">
            <div className="footer_logo">
              <img src={logo} alt="logo" />
            </div>
            <p className="footer_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="footer_newletter">
              <form action="#" className="footer_newsletter-form">
                <input type="email" placeholder="Submit email" required />
                <div className="icon">
                  {/* <FontAwesomeIcon icon="fa-solid fa-envelope" /> */}
                </div>
              </form>
            </div>
          </div>
          <div className="footer_menu">
            <h3 className="footer_menu-title">Quick Links</h3>
            <ul className="footer_menu-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer_menu">
            <h3 className="footer_menu-title">Services</h3>
            <ul className="footer_menu-list">
              <li><a href="#">development</a></li>
              <li><a href="#">Maintainence</a></li>
              <li><a href="#">Design</a></li>
            </ul>
          </div>
          <div className="footer_menu">
            <h3 className="footer_menu-title">Social</h3>
            <ul className="footer_menu-list">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Linkedin</a></li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom-icons">
            <p>Follow us</p>
            <a href="#" className="facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <p>&copy; 2023 Rou. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
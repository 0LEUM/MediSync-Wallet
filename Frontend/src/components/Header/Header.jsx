import React, { useState } from "react";
import "./header.css";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  // const [showMenu, setShowMenu] = useState(false);

  // const toggleMenu = () => {
  //   setShowMenu(!showMenu);
  // };

  return (
    <>
      <header>
        <div className="container flex-row">
          <div className="header_logo">
            <img src={logo} alt="" />
          </div>
          {/* <nav className={`header_menu ${showMenu ? 'show' : ''}`}> */}
          <nav className="header_menu">
            <ul className="flex-column">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#testimonial">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="right flex-center">
            <Link to="">
              <button className="btn btn-secondary">Get a Quote</button>
            </Link>
            <div className="menu-btn">
              {/* <a href="#" className="icon" onClick={toggleMenu}> */}
              <a href="#" className="icon">
                <FaBars />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

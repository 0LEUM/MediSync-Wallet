import React, { useState } from 'react';
import './header.css';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // const navigate = useNavigate()

  const navItems = [
    {
      name: "Home",
      uri: "#hero",
      slug: "/",
    },
    {
      name: "About",
      uri: "#about",
      slug: "/about",
    },
    {
      name: "Services",
      uri: "#services",
      slug: "/service",
    },
    {
      name: "Projects",
      uri: "#projects",
      slug: "/projects",
    },
    {
      name: "Team",
      uri: "#team",
      slug: "/team",
    },
    {
      name: "Testimonials",
      uri: "#testimonial",
      slug: "/testimonial",
    },
    {
      name: "Contact",
      uri: "#contact",
      slug: "/contactUs",
    }
  ]

  return (
    <>
      <header>
        <div className="container-header flex-row-header">
          <div className="header_logo">
            <img src={logo} alt="" />
          </div>
          <nav className={`header-nav ${showMenu ? 'show' : ''}`}>

          <ul style={{display:'flex'}}>
            {navItems.map((item) =>
                <li key={item.name}>
                  <a href={item.uri} onClick={toggleMenu} style={{display:'inline', marginRight:'15px', marginLeft:'15px'}}>
                    {item.name}
                  </a>
                </li>
            )}
          </ul>

          </nav>
          <div className="right-header flex-center-header">
            <Link to="/login">
              <button className="button-header btn btn-secondary">
                Login 
              </button>
            </Link>
            <div className="menu-btn-header">
              <a href="#" className="icon" onClick={toggleMenu}>
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

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './img/logo.png';
import LogoIg from './img/instagram.png';
import LogoLd from './img/linkedin.png';
import './App.css';
import './hero.css';

const Hero = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSubMenuActive, setIsSubMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const toggleSubMenu = () => {
    setIsSubMenuActive(!isSubMenuActive);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) {
      setIsActive(false);
      setIsSubMenuActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="hero-header">
              <img className="hero-logo" src={LogoImg} alt="Logo" />
            {/*   <div className='hero-logo_title' > */}
            {/*     <h1>MG <span>STUDIO</span></h1> */}
            {/*     <h6>ARCHITECTURE</h6> */}

            {/*   </div> */}
            {/*    */}
              
             {/*  <div className="hero-logos"> */}
             {/*    <img className="hero-logo-instagram" width="20px" src={LogoIg} alt="LogoInstagram" /> */}
             {/*    <img className="hero-logo-linkedin" width="20px" src={LogoLd} alt="LogoLinkedIn" /> */}
             {/*  </div> */}
              <span
                className={`navbar-burger ${isActive ? 'is-active' : ''}`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div
              id="navbarMenuHeroA"
              className={`navbar-menu ${isActive ? 'is-active' : ''} ${isMobile ? 'mobile' : ''}`}
            >
              <div className="navbar-end">
                <ul className="navbar-links">
                  <li><Link className="navbar-item" to="/">Home</Link></li>
                  <hr />
                  <li><Link className="navbar-item" to="/productos">Products</Link></li>
                  <hr />
                  <li className="navbar-item" onClick={toggleSubMenu}>
                    Services <span>{isSubMenuActive ? '-' : '+'}</span>
                  </li>
                  <div className={`sub-menu ${isSubMenuActive ? 'is-active' : ''}`}>
                    <Link to="/arquitectura">Architecture</Link>
                    <Link to="/diseno">Art</Link>
                    <Link to="/publicidad">Constructuon</Link>
                  </div>
                  <hr />
                  <li><Link className="navbar-item" to="/nosotros">About me</Link></li>
                  <hr />
                  <li><Link className="navbar-item" to="/contacto">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Hero;

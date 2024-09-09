import React, { useEffect, useState } from 'react';
import LogoIg from './img/instagram.png';
import LogoLd from './img/linkedin.png';
import './Landing.css';

const Landing = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            className="landing" 
            style={{ 
                transform: `translateY(${offsetY * .5}px)`, 
                
                opacity: 1 - offsetY / 499, 
                transition: 'transform 0.5s ease-out, background-color 0.5s ease-out',
                
            }}
        >
            <div className="landing_text">
                <h1>Architecture <span>[Services Provider]                      <img src="https://cdn3.iconfinder.com/data/icons/blue-collar-jobs-1/100/12-512.png" alt="icono minimalista de autoCad" />
                <img src="https://cdn3.iconfinder.com/data/icons/blue-collar-jobs-1/100/12-512.png" alt="icono minimalista de autoCad" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ujnihDRAdDb_GZtE8wpakeqwlr0tjyE2Ow&usqp=CAU" alt="icono minimalista de SketchUp" />
                </span></h1>

                <div className='tex_btn'>
                    <h4>
                        Provider of 2D AutoCAD drawing, 3D SketchUp modeling, 
                        and fast D5 Render rendering subcontracting services. 
                        We partner with your studio to complement your team with our service.
                        
                        <div className="hero-logos"> 
                         <button>Contact</button>
                         <img className="hero-logo-instagram" width="20px" src={LogoIg} alt="LogoInstagram" /> 
                         <img className="hero-logo-linkedin" width="20px" src={LogoLd} alt="LogoLinkedIn" /> 
                        </div>
                    </h4>
                    
                </div>
            </div>
        </div>
    );
}

export default Landing;

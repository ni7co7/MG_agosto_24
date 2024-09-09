import React from 'react';
import './Footer.css';
import LogoIg from './img/instagram.png';
import LogoLd from './img/linkedin.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Programador: Nicolas Gianfelici</h4>
                    <p>Email: contacto@tuempresa.com</p>
                    <p>Teléfono: +123 456 7890</p>
                </div>
                <div className="footer-section">
                    <h4>Síguenos</h4>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                         
                            <img  src={LogoIg} alt="Logo" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                           
                            <img  src={LogoLd} alt="Logo" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                           
                        </a>
                       
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Información</h4>
                    <p>© {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

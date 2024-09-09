import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Hero from './Hero.jsx';
import Landing from './Landing.jsx';
import Transcriptions from './Transcriptions.jsx';
import Cartas from './Cartas.jsx';
import Categorias from './Categorias.jsx';
import Footer from './Footer.jsx';



const images = [
  '/img/2.jpg',
  /* '/img/3.jpg', */ // Descomenta esta línea si tienes la imagen
];

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setZoom(true);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setZoom(false);
      }, 10000); // Duración de la animación
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className={`background-container ${zoom ? 'zoom-out' : ''}`} 
           style={{ backgroundImage: `url(${images[currentImage]})` }}></div>
      
      <BrowserRouter>
        <Hero />
        <Landing />
        <Transcriptions />
        
        <div className='content'>
       
       
          <Cartas/>
          <Categorias />
        </div>
        
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Cartas.css';

const Cartas = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const [images, setImages] = useState([
        "https://cdn3.iconfinder.com/data/icons/blue-collar-jobs-1/100/12-512.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ujnihDRAdDb_GZtE8wpakeqwlr0tjyE2Ow&usqp=CAU",
        "https://cdn3.iconfinder.com/data/icons/blue-collar-jobs-1/100/12-512.png"
    ]);

    const imageSets = [
        [
            "https://cdn3.iconfinder.com/data/icons/blue-collar-jobs-1/100/12-512.png",
            '/img/a11.jpeg', '/img/a2.jpeg', '/img/a3.jpeg'
           
        ],
        [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ujnihDRAdDb_GZtE8wpakeqwlr0tjyE2Ow&usqp=CAU",
           '/img/a4.jpeg', '/img/a5.jpeg', '/img/a6.jpeg'
           
        ],
        [
            "https://cdn3.iconfinder.com/data/icons/blue-collar-jobs-1/100/12-512.png",
            '/img/a7.jpeg', '/img/a8.jpeg', '/img/a9.jpeg'
            
        ]
    ];

       // Funciones para cambiar la imagen a la izquierda o derecha
       const changeImage = (index, direction) => {
        const currentImageIndex = imageSets[index].indexOf(images[index]);
        let newIndex = currentImageIndex + direction;

        // Asegurarse de que el índice no se salga de los límites
        if (newIndex < 0) newIndex = imageSets[index].length - 1;
        if (newIndex >= imageSets[index].length) newIndex = 0;

        const newImages = [...images];
        newImages[index] = imageSets[index][newIndex];
        setImages(newImages);
    };

    

    return (
        <div className="Cartas">
            <div className='productos1'>
                <div
                    className="producto1"
                    style={{
                        transform: `translateX(${offsetY * 0.02}px)`,
                        opacity: offsetY > 50 ? 1 : 0, // Opcional: controlar la opacidad
                        transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                        zIndex:1,
                    }}
                >
                    <h3>2D Drawing</h3>
                    <img src={images[0]} alt="icono minimalista de autoCad" />
                   {/*  <img src="https://cdn3.iconfinder.com/data/icons/blue-collar-jobs-1/100/12-512.png" alt="icono minimalista de autoCad" /> */}
                    <div>
                        <p>
                            Layout Plan
                            Structure
                        </p>

                        <div className='botones'>
                            <button className="ver-mas1" onClick={() => changeImage(0, -1)}>⬅</button>
                            <Link className="ver-mas1">more</Link>
                            <button className="ver-mas1"  onClick={() => changeImage(0, 1)}>➡</button>
                        </div>
                    </div>
                </div>

                <div
                    className="producto1"
                    style={{
                        transform: `translateY(${-offsetY * 0.02}px)`,
                        opacity: offsetY > 200 ? 1 : 0, // Opcional: controlar la opacidad
                        transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                        zIndex:1,
                    }}
                >   <h3>Transcribe</h3>
                                    <img src={images[1]} alt="icono minimalista de SketchUp" />
{/*                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ujnihDRAdDb_GZtE8wpakeqwlr0tjyE2Ow&usqp=CAU" alt="icono minimalista de SketchUp" />
 */}                    <div>
                        
                        <p>Electrical Installation</p>

                        <div className='botones'>
                          <button className="ver-mas1" onClick={() => changeImage(1, -1)}>⬅</button>
                          <Link className="ver-mas1">more</Link>
                          <button className="ver-mas1" onClick={() => changeImage(1, 1)}>➡</button>
                        </div>
                    </div>
                </div>

                <div
                    className="producto1"
                    style={{
                        transform: `translateX(${offsetY * -0.02}px)`,
                        opacity: offsetY > 100 ? 1 : 0, // Opcional: controlar la opacidad
                        transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                    }}
                >   <h3>Quick Viewing</h3>
                                    <img src={images[2]} alt="icono minimalista de autoCad" />
{/*                     <img src="https://cdn3.iconfinder.com/data/icons/blue-collar-jobs-1/100/12-512.png" alt="icono minimalista de autoCad" />
 */}                    <div>
                        
                        <p>Fast rendering</p>
                        <div className='botones'>
                          <button className="ver-mas1" onClick={() => changeImage(2, -1)}>⬅</button>
                          <Link className="ver-mas1">more</Link>
                          <button className="ver-mas1" onClick={() => changeImage(2, 1)}>➡</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartas;

import React, { useState } from 'react';
import './Categorias.css';

const imageSets = [
    {
        title: 'Conversión de imágenes a AutoCad',
        description: 'Escanea tus dibujos en papel, planos antiguos con correcciones a mano alzada, bocetos a mano alzada y envíanoslos por correo electrónico. Después de unos días, te devolveremos archivos de AutoCAD precisos y editables.',
        images: ['/img/a11.jpeg', '/img/a2.jpeg', '/img/a3.jpeg']
    },
    {
        title: 'Transcripción',
        description: 'Usamos nuestras convenciones estándar por defecto, o podemos utilizar tus estándares de capas, bloques de título y grosores de línea. Ofrecemos transcripciones de AutoCAD de alta calidad a las tarifas más asequibles del mercado.',
        images: ['/img/a4.jpeg', '/img/a5.jpeg', '/img/a6.jpeg']
    },
    {
        title: 'Renders 3D',
        description: 'Renderizados 3D fotorrealistas, interiores o exteriores, planos de planta en 3D, vistas aéreas o vistas en vuelo de pájaro. También podemos crear animaciones de peatones o recorridos virtuales en 3D según tu solicitud.',
        images: ['/img/a7.jpeg', '/img/a8.jpeg', '/img/a9.jpeg']
    }
];

const Categorias = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(new Array(imageSets.length).fill(0));

    const handlePrevClick = (index) => {
        console.log(`Previous button clicked for index: ${index}`);
        setCurrentImageIndex(prevIndexes => {
            const newIndexes = prevIndexes.map((imageIndex, i) => 
                i === index ? (imageIndex === 0 ? imageSets[index].images.length - 1 : imageIndex - 1) : imageIndex
            );
            console.log(`New image index for category ${index}: ${newIndexes[index]}`);
            return newIndexes;
        });
    };

    const handleNextClick = (index) => {
        console.log(`Next button clicked for index: ${index}`);
        setCurrentImageIndex(prevIndexes => {
            const newIndexes = prevIndexes.map((imageIndex, i) => 
                i === index ? (imageIndex + 1) % imageSets[index].images.length : imageIndex
            );
            console.log(`New image index for category ${index}: ${newIndexes[index]}`);
            return newIndexes;
        });
    };

    return (
        <div className="categorias_container">
            {imageSets.map((set, index) => (
                <div key={index} className="categorias_contenedor">
                    <div className="categoria_content">
                        <h3>{set.title}</h3>
                        <p>{set.description}</p>
                    </div>
                    <div className="image_container">
                        <button onClick={() => handlePrevClick(index)}>&lt;</button>
                        <img src={set.images[currentImageIndex[index]]} alt={`Imagen ${index + 1}`} />
                        <button onClick={() => handleNextClick(index)}>&gt;</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Categorias;

import React, { useState } from 'react';
import './Carousel.css'; // For basic styling, create this CSS file
import { baseUrl } from '../../constants';
function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImagesCount = 6;

  const nextImages = () => {
    if (currentIndex + visibleImagesCount < images.length) {   //   6<20 -- TRUE 
      setCurrentIndex(currentIndex + visibleImagesCount);
    }
  };

  const prevImages = () => {
    if (currentIndex - visibleImagesCount >= 0) {
      setCurrentIndex(currentIndex - visibleImagesCount);
    }
  };

  return (
    <div className="carousel-container">
      <button className="ml-10 mr-3 bg-black text-white p-2" onClick={prevImages}>
        ←
      </button>
      <div className="carousel" >
        {images.slice(currentIndex, currentIndex + visibleImagesCount).map((image, index) => (
          <div className="carousel-item" key={index}>
            <a href={image.action.link} target="_blank" rel="noopener noreferrer">
              <img
                src={baseUrl + image.imageId}
                alt={image.accessibility.altText}
                className="carousel-image"
              />
              {/* <p>{image.description}</p> */}
            </a>
          </div>
        ))}
      </div>

      
      <button className="mr-10 ml-3 bg-black text-white p-2" onClick={nextImages}>
        →
      </button>
  
    </div>
  );
}

export default Carousel;
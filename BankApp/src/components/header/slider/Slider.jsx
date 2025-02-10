import React, { useState, useEffect } from 'react';
import './Slider.scss';

const Slider = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideCount = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slideCount);
        }, 5000); // Каждые 3 секунды

        return () => clearInterval(interval);
    }, [slideCount]);

    const handleSlideClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="slider-container">

            <div className="slider-images">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slider-image ${index === currentSlide ? 'active' : ''}`}
                    >
                        <img src={image} alt={`slide-${index}`} />
                    </div>
                ))}
            </div>


            <div className="slider-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={currentSlide === index ? 'dot active' : 'dot'}
                        onClick={() => handleSlideClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
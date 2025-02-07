import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, [images.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // <Slider {...settings}>
    //   {images?.map((img, index) => (
        <div className="image_slider">
      <img src={images[currentIndex].url} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
    </div>
    //   ))}
    // </Slider>
  );
};

export default ImageSlider;
